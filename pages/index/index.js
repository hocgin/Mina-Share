//index.js
//获取应用实例
const app = getApp();
Page({
    onLoad() {
        this._fixedAppbar();
    },
    onShow() {
        this.setData({
            user: app.globalData.user
        });
    },
    onPageScroll(e) {
        this.setData({
            hasScroll: e.scrollTop > 1
        });
    },
    data: {
        DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT + "px",
        STATUS_BAR_HEIGHT: wx.STATUS_BAR_HEIGHT + "px",
        hasScroll: false,
        user: {},

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
        let url = '/pages/user/user';
        if (!app.globalData.user) {
            url = '/pages/login/login';
        }

        wx.navigateTo({url});
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
    gotoPublishClassify() {
        wx.navigateTo({
            url: '/pages/publish-classify/publish-classify'
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
    }
});
