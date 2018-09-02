//app.js
App({
  onLaunch: function () {

    // 系统变量
    this.attachInfo();

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

  },
  globalData: {
    // {} 存储用户信息
    user: null
  },

  // 获取用户信息
  getUserInfo(){
    if (!this.globalData.user) {
        // 未登陆，默认信息
        return {
            avatarUrl: 'https://hocg.in/Resume/img/avatar.png',
            nickName: '未登录',
        };
    }
    return this.globalData.user;
  },

  // 跳转到需登陆的页面
  gotoNeedLogin(url){
    if (!this.globalData.user) {
       url = '/pages/login/login';
    }
    wx.navigateTo({url});
  },



  // 设置系统信息
  attachInfo() {

    var res = wx.getSystemInfoSync();

    wx.WIN_WIDTH = res.screenWidth;
    wx.WIN_HEIGHT = res.screenHeight;
    wx.IS_IOS = /ios/i.test(res.system);
    wx.IS_ANDROID = /android/i.test(res.system);
    wx.STATUS_BAR_HEIGHT = res.statusBarHeight;

    wx.DEFAULT_HEADER_HEIGHT = 46;

    // res.screenHeight - res.windowHeight - res.statusBarHeight
    wx.DEFAULT_CONTENT_HEIGHT = res.screenHeight - res.statusBarHeight - wx.DEFAULT_HEADER_HEIGHT;
    wx.IS_APP = true;

    wx.showAlert = function (options) {
       options.showCancel = false;
       wx.showModal(options);
    };

    wx.showConfirm = function (options) {
       wx.showModal(options);
    };
  }
})