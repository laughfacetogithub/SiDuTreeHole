// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firco:"#000000",
    secco:"#979797",
    list:[
      {
        face_url: "/images/selectIconTree.png",
      username: "树222222",
      send_timestamp: "2020-4-28 24:34:51",
      content: "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
      total_likes: 99,
      },
      {
        face_url: "/images/selectIconUser.png",
        username: "哆啦A梦",
        send_timestamp: "2020-4-28 24:34:51",
        content: "大丢是顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶位i夫",
        total_likes: 99,
      },
      {
        face_url: "/images/add.png",
        username: "sudo",
        send_timestamp: "2020-4-28 24:34:51",
        content: "2222222222222踩踩踩踩踩踩踩踩踩踩踩踩踩踩王府恶化为符号位i夫",
        total_likes: 99,
      },
      {
        face_url: "/images/add.png",
        username: "sudo",
        send_timestamp: "2020-4-28 24:34:51",
        content: "2222222222222踩踩踩踩踩踩踩踩踩踩踩踩踩踩王府恶化为符号位i夫",
        total_likes: 99,
      },
    ]
  },

  commit: function(){
    wx.showLoading({
      title: '正在跳转',
    })
    wx.navigateTo({
      url: '/pages/commit/commit',
      success: function(res) {},
    })
    setTimeout(function(){
      wx.hideLoading()
    },900)
  },
  userinfo: function () {
    wx.showLoading({
      title: '正在跳转',
    })
    wx.navigateTo({
      url: '/pages/mine/mine',
      success: function (res) { },
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 900)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log("xzxzxz")
    setTimeout(function () {
      wx.stopPullDownRefresh()
    }, 500);
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