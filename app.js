//app.js
App({
  onLaunch: function () {

    // 系统变量
    this.attachInfo();

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {

          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {

              // 可以将 res 发送给后台解码出 unionId
              this.globalData.user = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          });
        }
      }
    });


  },
  globalData: {
    // {} 存储用户信息
    user: null
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