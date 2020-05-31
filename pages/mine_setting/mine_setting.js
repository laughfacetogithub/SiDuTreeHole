// pages/mine_setting/mine_setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pri_img:"../../images/static/header.jpg",
    nickname:"您还没有登录"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var avatarUrl = getApp().globalData.user.avatarUrl;
    if (avatarUrl) {
      this.setData({
        pri_img: avatarUrl,
        nickname: getApp().globalData.user.nickName
      })
    }
  },
  //授权登录，或者更改个人信息
  editMyself: function(){
      wx.navigateTo({
        url: '/pages/mine_editMyself/mine_editMyself'
      })
  },
  //切换账号
  switchAccount: function(){
    wx.navigateTo({
      url: '/pages/login/login'
    })
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
    var avatarUrl = getApp().globalData.user.avatarUrl;
    if (avatarUrl) {
      this.setData({
        pri_img: avatarUrl,
        nickname: getApp().globalData.user.nickName
      })
    }
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