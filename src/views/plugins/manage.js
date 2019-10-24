/**
 * Manage (Plugin)
 *
 * UPDATE and DELETE are RESTRICTED to the Plugin Manager UI. Therefore,
 * we simply open the manager (in a new window).
 */
const manage = function () {
    /* Open plugins manager. */
    this.app.cmd('wrapperOpenWindow', ['/Plugins'])
}

export default manage
