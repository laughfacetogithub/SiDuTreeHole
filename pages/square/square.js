// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firco: "#000000",
    secco: "#979797",
    list: []
  },

  commit: function() {
    wx.showLoading({
      title: '正在跳转',
    })
    wx.navigateTo({
      url: '/pages/commit/commit',
      success: function(res) {},
    })
    setTimeout(function() {
      wx.hideLoading()
    }, 900)
  },
  userinfo: function() {
    wx.showLoading({
      title: '正在跳转',
    })
    wx.navigateTo({
      url: '/pages/mine/mine',
      success: function(res) {},
    })
    setTimeout(function() {
      wx.hideLoading()
    }, 900)
  },

  //点赞功能
  like: function(e) {
    console.log(e.currentTarget)
    var that = this;
    var index = e.currentTarget.id; //来自like接收对应message的id
    var list = that.data.list;
    // var islike = this.data.islike
    // this.setData({
    //   islike : !islike
    // })
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == index) {
        if (list[i].islike == true) {
          wx.showToast({
            title: '不能重复点赞哟^_^'
          })
          // list[i].total_likes--;
          // list[i].islike = false;
          // that.setData({
          //   list : list
          // })
        } else {
          list[i].total_likes++;
          list[i].islike = true
          that.setData({
            list: list
          })
          wx.request({
            url: getApp().globalData.server + 'index.php/Home/Message/do_like',
            data: {
              message_id: e.target.id,
              user_id: getApp().globalData.user.user_id
            },
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
              if (res.data.error_code != 0) {
                wx.showModal({
                  title: '提示',
                  content: '出现了某些问题'
                })
              }
            },
            fail(res) {
              wx.showModal({
                title: '哎呀!',
                content: '网络似乎不给力'
              })
            }
          })
        }
      }
    }
    // console.log(islike)
    // var isLike = 'list['+ i +'].islike';
    // that.setData({
    //   [isLike] : true
    // })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(getApp().globalData)
    var that = this;
    wx.showLoading({
      title: '加载中'
    })
    wx.request({
      url: getApp().globalData.server + 'index.php/Home/Message/get_all_message',
      data: {},
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        if (res.data.error_code != 0) {
          wx.showModal({
            title: '哎呀',
            content: '出错了妮!',
            success(res) {}
          })
        } else if (res.data.error_code == 0) {
          that.setData({
            list: res.data.data
          })
        }
      },
      fail(res) {
        wx.showModal({
          title: '哎呀!',
          content: '网络似乎不给力'
        })
      },
      complete: function(res) {
        wx.hideLoading()
      }
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
    // console.log("下拉刷新")
    var that = this;
    wx.request({
      url: getApp().globalData.server + 'index.php/Home/Message/get_all_message',
      data: {},
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        if (res.data.error_code != 0) {
          wx.showModal({
            title: '哎呀',
            content: '出错了妮!',
            success(res) { }
          })
        } else if (res.data.error_code == 0) {
          that.setData({
            list: res.data.data
          })
        }
      },
      fail(res) {
        wx.showModal({
          title: '哎呀!',
          content: '网络崩溃了'
        })
      }
    })
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