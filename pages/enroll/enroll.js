// pages/enroll/enroll.js

var {log} = console;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgcolor: "green",
    opacity: 1,

    username: "",
    phonenumber: "",
    password: "",
    passwordack: "",
  },

  regist: function(e) {
    var that = this;
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;//正则表达式：检验手机号的合法性
    var mypsd = /^[A-Za-z][A-Za-z0-9]{5,16}$/;//检验密码是否由字符和数字构成，有效的为6-16
    if (that.data.username == '') {
      wx.showModal({
        title: '提示',
        content: '请输入用户名',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else if (that.data.phonenumber == '') {
      wx.showModal({
        title: '提示',
        content: '请输入手机号',
        showCancel: false,
        success(res) {}
      })
    } else if (that.data.phonenumber.length != 11) {
      wx.showModal({
        title: '提示',
        content: '手机号长度有误，请重新输入！',
        showCancel: false,
        success(res) {}
      })
    } else if (!myreg.test(that.data.phonenumber)) {
      wx.showModal({
        title: '提示',
        content: '请重新输入正确的手机号！',
        showCancel: false,
        success(res) {}
      })
    } else if (that.data.password == '') {
      wx.showModal({
        title: '提示',
        content: '请输入密码',
        showCancel: false,
        success(res) {}
      })
    } else if (that.data.password.length < 6 || that.data.password.length > 16) {
      wx.showModal({
        title: '提示',
        content: '密码长度需为6-16位',
        showCancel: false,
        success(res) {}
      })
    } else if (!mypsd.test(that.data.password)) {
      wx.showModal({
        title: '提示',
        content: '密码需为字母和数字的组合',
        showCancel: false,
        success(res) {}
      })
    } else if (that.data.passwordack == '') {
      wx.showModal({
        title: '提示',
        content: '请确定密码',
        showCancel: false,
        success(res) {}
      })
    } else if (that.data.passwordack.toUpperCase() != that.data.password.toUpperCase()) {
      wx.showModal({
        title: '提示',
        content: '两次输入密码不一致(不区分大小写)',
        showCancel: false,
        success(res) {}
      })
    } else {
      wx.request({
        url: getApp().globalData.server + 'index.php/Home/User/enroll',

        data: {
          username: that.data.username,
          phone: that.data.phonenumber,
          password: that.data.password,
          password_again: that.data.passwordack,
          face_url: getApp().globalData.userInfo.avatarUrl,
        },
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success(res) {
          if (res.data.error_code == 1 || res.data.error_code == 2 || res.data.error_code == 3) {
            wx.showModal({
              title: '提示',
              content: res.data.msg,
              showCancel: false,
              success(res) {}
            })
          } else if (res.data.error_code != 0) {
            wx.showModal({
              title: '哎呀',
              content: '出错了妮',
              success(res) { }
            })
          } else if (res.data.error_code == 0) {
            getApp().globalData.user = res.data.data;
            log("test log");
            wx.showModal({
              title: '提示',
              content: '注册成功！',
              showCancel: false,
              success(res) { },
              //完成时跳转广场页面，不管用户注册成功还是失败
              complete: function(res){
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
  signin: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  usernameInput: function(e) {
    this.data.username = e.detail.value
  },
  userphoneInput: function(e) {
    this.data.phonenumber = e.detail.value
  },
  passwordInput: function(e) {
    this.data.password = e.detail.value
  },
  passwordInputACK: function(e) {
    this.data.passwordack = e.detail.value
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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