//app.js
App({
  onLaunch: function () {
    this.doUpdateApp()
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;  
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },
   //更新小程序
   doUpdateApp: function () {

    if (! wx.canIUse('getUpdateManager')) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '当前微信版本过低，请升级最新微信版本，以免影响使用'
      })
      return
    }

    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      if (res.hasUpdate) {
        updateManager.onUpdateReady(function () {
          wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success: function (res) {
              if (res.confirm) {
                updateManager.applyUpdate()
              }
            }
          })
        })
        updateManager.onUpdateFailed(function () {
          wx.showModal({
            title: '已经有新版本了哟~',
            content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
          })
        })
      }
    })
    
  },
  globalData: {
    userInfo: null,
    hasUserInfo:false,//是否授权
    StatusBar:'',
    Custom:'',
    CustomBar:'',
  }
})