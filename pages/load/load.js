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
      url: '../square/square',
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
                    // console.log(getApp().globalData.userInfo)
                  }
                })
              }
              // console.log("这里" + getApp().globalData.userInfo)
            }
          })
          //发起网络请求，通过code换取openid，session_key
          wx.request({
            url: getApp().globalData.server + 'index.php/Home/User/getOpenidByCode',
            data: {
              code: res.code,
              avatarUrl: getApp().globalData.userInfo.avatarUrl,
              nickName: getApp().globalData.userInfo.nickName
            },
            header: {
              'content-type': 'application/json'
            },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: function(res) {
              // console.log("success")
              // console.log(res.data.data)
              // console.log(getApp().globalData.userInfo.openid)
              if (res.data.error_code == 3) {
                getApp().globalData.user = res.data.data
              }
              // console.log(getApp().globalData.userInfo)
            },
            fail:function(res){
              console.log("请求失败！")
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
        url: '../square/square',
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