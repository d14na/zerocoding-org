class ZeroFS {
    constructor(page) {
        if (typeof page != 'object' || !page instanceof ZeroPage) {
            throw new Error('Page should be an instance of ZeroPage')
        }

        this.page = page
    }

    /**
     * File exists
     */
	fileExists(file) {
		if (file == '') { // root
			return Promise.resolve(true) // the following check will fail for root
		}

		let dirPath = file.split('/').slice(0, -1).join('/')
		let basePath = file.split('/').pop()

		return this.readDirectory(dirPath)
			.then(children => {
				return Promise.resolve(children.indexOf(basePath) > -1)
			})
	}

    /**
     * Read file
     */
	readFile(file) {
		return this.page.cmd('fileGet', [
			file, // file
			false, // required (wait until file exists)
			'text', // text or base64
			300 // timeout
		]).then(res => {
			if (res === null || res === false) {
				return Promise.reject(`File [ ${file} ] doesn't exist.`)
			} else {
				return Promise.resolve(res)
			}
		})
	}

    /**
     * Write file
     */
	writeFile(file, content, bytes) {
		return this.page.cmd('fileWrite', [
			file, // file
			this.toBase64(content, bytes), // base64-encoded content
			true // ignore bad files
		]).then(res => {
			if (res === 'ok') {
				return Promise.resolve(file)
			} else {
				return Promise.reject(res)
			}
		})
	}

    /**
     * Delete file
     */
	deleteFile(file) {
		return this.page.cmd('fileDelete', [
			file // file
		]).then(res => {
			if (res === 'ok') {
				return Promise.resolve(file)
			} else {
				return Promise.reject(res)
			}
		})
	}

    /**
     * Read directory
     */
	readDirectory(dir, recursive) {
		return this.page.cmd('fileList', [
			dir, // directory
		]).then(res => {
			if (recursive) {
				return res.sort() // If recursive, return as given
			} else {
				return res.map(file => { // Otherwise, crop by '/' symbol
					if (file.indexOf('/') == -1) {
						return file
					} else {
						return file.substr(0, file.indexOf('/'))
					}
				}).reduce((arr, cur) => { // And make them unique
					return arr.indexOf(cur) > -1 ? arr : arr.concat(cur)
				}, []).sort()
			}
		})
	}

    /**
     * Get type
     */
	getType(file) {
		if (file == '') {
			return Promise.resolve('dir')
		}

		let dir = file.split('/')
		let relative = dir.pop()
		dir = dir.join('/')

		return this.page.cmd('fileList', [
			dir, // directory
		]).then(res => {
			res = res.map(file => { // Crop by '/' symbol
				if (file.indexOf('/') == -1) {
					return file
				} else {
					return file.substr(0, file.indexOf('/')) + '/'
				}
			})

			if (res.indexOf(relative) > -1) {
				return 'file'
			} else if (res.indexOf(relative + '/') > -1) {
				return 'dir'
			} else {
				return Promise.reject(`File [ ${file} ] doesn't exist.`)
			}
		})
	}

    /**
     * Convert to base64
     */
	toBase64(str, bytes) {
		return btoa(bytes ? str : unescape(encodeURIComponent(str)))
	}

    /**
     * Convert from base64
     */
	fromBase64(str, bytes) {
		return bytes ? atob(str) : decodeURIComponent(escape(atob(str)))
	}
}
