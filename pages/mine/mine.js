// pages/mine2/mine2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firco: "#979797",
    secco: "#000000",
    status: [{
        url: "/images/static/si.png",
        name: "思",
      },
      {
        url: "/images/static/du.png",
        name: "渡",
      },
      {
        url: "/images/static/qing.png",
        name: "青",
      },
      {
        url: "/images/static/nian.png",
        name: "年",
      }
    ],
    menus: [{
        icon: "/images/static/5.png",
        name: "我的收藏",
      },
      {
        icon: "/images/static/8.png",
        name: "消息通知",
      },
      {
        icon: "/images/static/9.png",
        name: "意见反馈",
      },
      {
        icon: "/images/static/10.png",
        name: "关于我们",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  treehole: function() {
    wx.showLoading({
      title: '正在跳转',
    })
    wx.navigateBack({
      delta: 1
    })
    setTimeout(function() {
      wx.hideLoading()
    }, 1000)
  },
  commit: function() {
    wx.showLoading({
      title: '正在跳转',
    })
    wx.navigateTo({
      url: '/pages/commit/commit',
    })
    setTimeout(function() {
      wx.hideLoading()
    }, 1000)
  },
  userinfo: function() {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function() {
      wx.hideLoading()
    }, 700)
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
    console.log("xzxzxz")
    setTimeout(function () {
      wx.stopPullDownRefresh()
    },500);
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