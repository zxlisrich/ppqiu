// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    },
    onLaunch:function(){
      console.log('嗡嗡嗡')

  },
  loadFont() {
    wx.loadFontFace({
      family: '方正仿宋',
      source: 'https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/%E6%96%B9%E6%AD%A3%E4%BB%BF%E5%AE%8B.TTF?sign=88e684c62837e52e8c33c365e14e03ee&t=1618238117',
      success(res){
        console.log('res', res)
      },
      fail(err){
        console.log('err', err)
      },
      complete(res){
        console.log('complete', res)
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
