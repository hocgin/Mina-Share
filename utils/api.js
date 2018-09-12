"use strict";
export default {
    /**
     * ======== 配置 ========
     */
    config: {
        base: 'http://mxdvpf.natappfree.cc',
        file_server: 'http://127.0.0.1:8080/file',
    },
    /**
     * ======== API ========
     */
    testPost(data, success, fail, complete) {
        return this._post('/testPost', data, success, fail, complete);
    },
    testGet(data, success, fail, complete) {
        return this._get('/testGet', data, success, fail, complete);
    },
    testUpload(fpath, data, success, fail, complete) {
        /**
         * .onProgressUpdate((res) => {
         *      console.log('上传进度', res.progress)
         *      console.log('已经上传的数据长度', res.totalBytesSent)
         *      console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
         * })
         */
        return this._upload(fpath, data, success, fail, complete);
    },
    testDownload(url, success, fail, complete) {
        /**
         * .onProgressUpdate((res) => {
         *      console.log('下载进度', res.progress)
         *      console.log('已经下载的数据长度', res.totalBytesWritten)
         *      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
         * })
         */
        return this._download(url, success, fail, complete);
    },
    /**
     * ======== 正式请求 ========
     */

    /**
     * 登陆
     * @param params
     *  - code
     *  - encryptedData
     *  - iv
     * @param success
     * @param fail
     * @param complete
     * @returns {*}
     */
    login(params, success, fail, complete) {
        return this._get('/login', params, success, fail, complete);
    },
    /**
     * ======== 基础函数 ========
     */
    _post(url, data, success, fail, complete) {
        let that = this;
        return wx.request({
            url: that.config.base + url,
            header: {},
            method: 'POST',
            data: data || {},
            success: success || that.success,
            fail: fail || that.error,
            complete: complete || that.complete,
        });
    },
    _get(url, data, success, fail, complete) {
        let that = this;
        return wx.request({
            url: that.config.base + url,
            header: {},
            method: 'GET',
            data: data || {},
            success: success || that.success,
            fail: fail || that.error,
            complete: complete || that.complete,
        });
    },
    _upload(fpath, data, success, fail, complete) {
        let that = this;
        return wx.uploadFile({
            url: that.config.file_server,
            header: {},
            filePath: fpath,
            name: 'file',
            formData: data || {},
            success: success || that.success,
            fail: fail || that.error,
            complete: complete || that.complete,
        });
    },
    _download(url, success, fail, complete) {
        let that = this;
        return wx.downloadFile({
            url: url,
            header: {},
            success: success || that.success,
            fail: fail || that.error,
            complete: complete || that.complete,
        });
    },
    success(result) {

    },
    error(result) {

    },
    complete(result) {
        console.log('[HTTP]执行结果:', result);
    }
};