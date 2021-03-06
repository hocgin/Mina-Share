import api from '../../utils/api'

const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT + "px",
        STATUS_BAR_HEIGHT: wx.STATUS_BAR_HEIGHT + "px"
    },
    navigateBack() {
        wx.navigateBack();
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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

    _loadUserInfo() {
        if (!app.globalData.user) {
            wx.login({
                success(result) {
                    wx.getUserInfo({
                        success(result2) {
                            app.globalData.user = result2.userInfo;
                            api.login({
                                code: result.code,
                                encryptedData: result2.encryptedData,
                                iv: result2.iv
                            }, (result3) => {
                                console.debug('登陆结果', result3);
                            });
                            console.log('授权成功', result2);
                            wx.navigateBack();
                        }
                    });
                }
            });

        } else {
            wx.navigateBack();
        }
    }
});