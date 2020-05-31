// pages/mine_editMyself/mine_editMyself.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc: "../../images/static/header.jpg",
    nickName: "",
    index: 0,
    array: ["未知", "男", "女"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // var sex = getApp().globalData.user.sex;
    // if (sex != undefined) {
    //   this.setData({
    //     index: sex,
    //     imgSrc: getApp().globalData.user.avatarUrl,
    //     nickName: getApp().globalData.user.nickName
    //   })
    // } else {
    //   this.setData({
    //     imgSrc: getApp().globalData.userInfo.avatarUrl,
    //     nickName: getApp().globalData.userInfo.nickName
    //   })
    // }
  },

  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },

  modify_avatar: function() {
    var that = this;
    wx.chooseImage({
      success: function(res) {
        that.setData({
          imgSrc: res.tempFilePaths[0]
        })
      },
    })
  },

  modify_nickName: function(e) {
    this.setData({
      nickName: e.detail.value
    })
  },

  // 保存
  save_modify: function() {
    var that = this;
    wx.showLoading({
      title: '正在保存'
    })
    if (that.data.imgSrc == getApp().globalData.userInfo.avatar && that.data.nickName == getApp().globalData.userInfo.nickName && that.data.index == 1) {
      wx.showModal({
        title: '提示',
        content: '您没有修改任何东西,可修改后提交哦'
      })
      wx.hideLoading();
    } else if (that.data.nickName.length >= 15) {
      wx.showModal({
        title: '提示',
        content: '呢称长度不能超过15个字',
        success: function (res) { }
      })
      wx.hideLoading();
    } else {
      wx.request({
        url: getApp().globalData.server + 'index.php/Home/User/save_modify',
        data: {
          openid: getApp().globalData.user.openid, //通过openid修改指定的用户
          imgUrl: that.data.imgSrc, //头像
          nickName: that.data.nickName, //呢称
          sex: that.data.index //性别
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success(res) {
          if (res.data.error_code != 0) {
            wx.showModal({
              title: '哎呀',
              content: '出错了妮！'
            })
          } else if (res.data.error_code == 0) {
            wx.showToast({
              title: '保存成功',
              mask: "true",
              success: res => {
                getApp().globalData.user.avatarUrl = that.data.imgSrc,
                  getApp().globalData.user.nickName = that.data.nickName,
                  getApp().globalData.user.sex = that.data.index
              },
              complete(res) {
                wx.navigateBack({
                  delta: 1
                })
              }
            })
          }
        },
        fail(res) {
          wx.showModal({
            title: '哎呀',
            content: '网络似乎不给力！'
          })
        },
        complete(res) {
          wx.hideLoading()
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var sex = getApp().globalData.user.sex;
    if (sex != undefined) {
      this.setData({
        index: sex,
        imgSrc: getApp().globalData.user.avatarUrl,
        nickName: getApp().globalData.user.nickName
      })
    } else {
      this.setData({
        imgSrc: getApp().globalData.userInfo.avatarUrl,
        nickName: getApp().globalData.userInfo.nickName
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // var sex = getApp().globalData.user.sex;
    // if (sex != undefined) {
    //   this.setData({
    //     index: sex,
    //     imgSrc: getApp().globalData.user.avatarUrl,
    //     nickName: getApp().globalData.user.nickName
    //   })
    // } else {
    //   this.setData({
    //     imgSrc: getApp().globalData.userInfo.avatarUrl,
    //     nickName: getApp().globalData.userInfo.nickName
    //   })
    // }
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