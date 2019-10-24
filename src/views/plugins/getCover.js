/**
 * Get Cover
 */
const getCover = function (_url) {
    /* Set constants. */
    const MAX_IMG_ID = 300

    /* Calculate random integer. */
    const rndInt = Math.floor(Math.random() * MAX_IMG_ID) + 700

    if (_url) {
        return _url
    } else {
        return `https://picsum.photos/id/${rndInt}/600/300`
    }
}

export default getCover
// module.exports = getCover
