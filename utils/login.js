/**
 * 查看用户是否授权，授权保存用户信息
 */
const authLoad = function(obj) {
  let that = this
      // 查看用户是否授权，授权保存用户信息
      wx.getSetting({
        success: (res) => {
          if (res.authSetting['scope.userInfo']) { //已授权
            that.getSessionKey().then(r => {
              getApp().globalData.hasUserInfo = true
              obj.loadData()
            })
          } else {
            getApp().globalData.hasUserInfo = false
            obj.loadData()
          }
        }
      })
}
/**
 * 保存用户信息
 */
const getSessionKey = function() {
  let that = this
  let promise = new Promise(function(resolve, reject) {
    wx.login({
      success: res => {
        post(
          'qsq/miniService/miniProComm/weChatCommon/wxCommonLogin', {
            code: res.code,
            keyPoolId: getApp().globalData.keyPoolId
          }
        ).then(res => {
          if (res.code != 0) {
            reject(res.code)
            return
          }
          getApp().globalData.userInfo = {
            id : res.data.id,
            openid : res.data.openid
          }
          resolve()
        })
      }
    })
  })
  return promise
}