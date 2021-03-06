// pages/user/user.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT + "px",
        STATUS_BAR_HEIGHT: wx.STATUS_BAR_HEIGHT + "px",
        user: {},
        hasUser: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let query = wx.createSelectorQuery(),
        that = this;
        query.select('.fixed').boundingClientRect(function (rect) {
            that.setData({
                fixed_height: rect.height + 'px'
            });
        }).exec();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    navigateBack () {
        wx.navigateBack()
    }
});