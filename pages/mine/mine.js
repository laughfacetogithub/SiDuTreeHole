// pages/mine2/mine2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firco: "#979797",
    secco: "#000000",
    pri_img: "../../images/static/header.jpg",
    nickname: "您还没有登录",
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
    var avatarUrl = getApp().globalData.user.avatarUrl;
    if (avatarUrl != undefined) {
      this.setData({
        pri_img: avatarUrl,
        nickname: getApp().globalData.user.nickName
      })
    } else if (getApp().globalData.userInfo.avatarUrl != undefined) {
      this.setData({
        pri_img: getApp().globalData.userInfo.avatarUrl,
        nickname: getApp().globalData.userInfo.nickName
      })
    }
  },

  modifyMyself: function(){
    if (getApp().globalData.user.openid == undefined) {
      wx.reLaunch({
        url: '/pages/load/load'
      })
    } else {
      wx.navigateTo({
        url: '/pages/mine_editMyself/mine_editMyself'
      })
    }
  },

  click_row: function(e){
    console.log(e)
    if(e.currentTarget.id == 1){
      wx.navigateTo({
        url: '/pages/mine_aboutUs/mine_aboutUs'
      })
    } else if (e.currentTarget.id == 2){
      wx.navigateTo({
        url: '/pages/mine_aboutUs/mine_aboutUs'
      })
    } else if (e.currentTarget.id == 3) {
      wx.navigateTo({
        url: '/pages/mine_aboutUs/mine_aboutUs'
      })
    } else if (e.currentTarget.id == 4) {
      wx.navigateTo({
        url: '/pages/mine_aboutUs/mine_aboutUs'
      })
    }
  },
  click_column: function (e) {
    console.log(e)
    if (e.currentTarget.id == 1) {
      wx.navigateTo({
        url: '/pages/mine_aboutUs/mine_aboutUs'
      })
    } else if (e.currentTarget.id == 2) {
      wx.navigateTo({
        url: '/pages/mine_aboutUs/mine_aboutUs'
      })
    } else if (e.currentTarget.id == 3) {
      wx.navigateTo({
        url: '/pages/mine_aboutUs/mine_aboutUs'
      })
    } else if (e.currentTarget.id == 4) {
      wx.navigateTo({
        url: '/pages/mine_aboutUs/mine_aboutUs'
      })
    }
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

  //设置
  setting: function(){
    wx.navigateTo({
      url: '/pages/mine_setting/mine_setting',
    })
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
    var avatarUrl = getApp().globalData.user.avatarUrl;
    if (avatarUrl != undefined) {
      this.setData({
        pri_img: avatarUrl,
        nickname: getApp().globalData.user.nickName
      })
    } else if (getApp().globalData.userInfo.avatarUrl != undefined) {
      this.setData({
        pri_img: getApp().globalData.userInfo.avatarUrl,
        nickname: getApp().globalData.userInfo.nickName
      })
    }
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
    setTimeout(function() {
      wx.stopPullDownRefresh()
    }, 500);
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