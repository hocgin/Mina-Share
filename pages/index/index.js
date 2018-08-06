//index.js
//获取应用实例
const app = getApp();
Page({
    onLoad: function () {
        this._loadUserInfo();
        this._fixedAppbar();
        app.userInfoReadyCallback = res => {
            this.setData({
                user: res.userInfo,
                hasUser: true
            });
        }

    },
    onPageScroll(e){
        this.setData({
            hasScroll: e.scrollTop > 1
        });
    },
    data: {
        DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT + "px",
        STATUS_BAR_HEIGHT: wx.STATUS_BAR_HEIGHT + "px",
        hasScroll: false,
        user: {},
        hasUser: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        isShowPublish: false,

        // 推广
        promotion: {
            indicatorDots: true,
            autoPlay: true,
            interval: 5000,
            duration: 1000,
            urls: [
                'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
                'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
            ]
        },
        data: [{
            image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            title: '标题名，一行',
            classify: '工具',
            summary: '简介，两行',
            sharer: 'hocgin',
            shareAt: '2018-08-05',
            heat: 289
        }]
    },
    //事件处理函数
    gotoUser: function () {
        wx.navigateTo({
            url: '/pages/user/user'
        });
    },
    gotoDetail() {
        wx.navigateTo({
            url: '/pages/detail/detail'
        });
    },
    gotoSearch() {
        wx.navigateTo({
            url: '/pages/search/search'
        });
    },
    togglePublishPopup() {
        this.setData({
            isShowPublish: !this.data.isShowPublish
        });
    },
    _fixedAppbar() {
        let query = wx.createSelectorQuery(),
            that = this;
        query.select('.fixed').boundingClientRect(function (rect) {
            that.setData({
                fixed_height: rect.height + 'px'
            });
        }).exec();
    },
    _loadUserInfo() {

        if (!!app.globalData.user) {
            this.setData({
                user: app.globalData.user,
                hasUser: true
            });
        } else if (this.data.canIUse) {

            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    user: res.userInfo,
                    hasUser: true
                });
            }
        } else {

            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.user = res.userInfo;
                    this.setData({
                        user: res.userInfo,
                        hasUser: true
                    })
                }
            });
        }
    }
});
