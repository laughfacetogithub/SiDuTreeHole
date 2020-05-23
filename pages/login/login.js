// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  login:function(){
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if(this.data.username == ''){
      wx.showModal({
        title: '提醒',
        content: '请输入用户名！',
        showCancel: false,
        success: function(res) {},
      })
    }else if(this.data.password == ''){
      wx.showModal({
        title: '提醒',
        content: '请输入密码！',
        showCancel: false,
        success: function(res) {},
      })
    }else{console.log("success")}
  },
  regist: function(){
    wx.navigateTo({
      url: '../enroll/enroll',
    })
  },
  //承接输入的username
  usernameInput:function(e){
    this.data.username = e.detail.value
  },
  //承接输入的password
  passwordInput: function(e){
    this.data.password = e.detail.value
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})