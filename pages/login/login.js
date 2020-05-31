// pages/login/login.js
var {log} = console
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  login: function() {
    var that = this;
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (this.data.username == '') {
      wx.showModal({
        title: '提醒',
        content: '请输入用户名！',
        showCancel: false,
        success: function(res) {},
      })
    } else if (this.data.password == '') {
      wx.showModal({
        title: '提醒',
        content: '请输入密码！',
        showCancel: false,
        success: function(res) {},
      })
    } else {

      //请求服务器
      wx.request({
        url: getApp().globalData.server + 'index.php/Home/User/login',
        data: {
          username: that.data.username,
          password: that.data.password
        },
        method: 'POST',//传输方式
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success(res) {
          if (res.data.error_code == 1 || res.data.error_code == 2 || res.data.error_code == 3) {
            wx.showModal({
              title: '提示',
              content: res.data.msg, //从后端返回的数据
              showCancel: false,
              success(res) {}
            })
          } else if (res.data.error_code != 0) {
            wx.showModal({
              title: '哎呀',
              content: '出错了妮😇',
              success(res) {}
            })
          } else if (res.data.error_code == 0) {
            wx.showToast({
              title: '登录成功😇',
              icon: 'success',
              mask: true,
              complete: function(res) {
                wx.reLaunch({
                  url: '../square/square',
                })
              }
            })
          }
        }

      })
    }
  },
  regist: function() {
    wx.navigateTo({
      url: '../enroll/enroll',
    })
  },
  //承接输入的username
  usernameInput: function(e) {
    //没有渲染到页面层的数据最好不要用setData，会影响渲染整体效果
    this.data.username = e.detail.value
  },
  //承接输入的password
  passwordInput: function(e) {
    this.data.password = e.detail.value
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