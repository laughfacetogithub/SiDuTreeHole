// pages/load/load.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  next: function(e) {
    //console.log("userInfo", getApp().globalData.userInfo)
    wx.redirectTo({
      url: '../login/login',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.showLoading({
      title: '加载中',
    })

    //login
    wx.login({
      success: (res) => {
        if (res.code) {
          //查看是否授权
          wx.getSetting({
            success: (res) => {
              if (res.authSetting['scope.userInfo']) {
                //已经授权，可以直接调用getInfo获取头像昵称
                wx.getUserInfo({
                  success: (res) => {
                    getApp().globalData.userInfo = res.userInfo;
                    this.next();
                  }
                })
              }
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    //关闭加载icon
    setTimeout(function() {
      wx.hideLoading()
    }, 1000)
  },
  bindGetUserInfo(e) {
    // console.log(e.detail.userInfo)
    getApp().globalData.userInfo = e.detail.userInfo
    if (e.detail.userInfo === undefined) {

    } else {
      wx.redirectTo({
        url: '../login/login',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})