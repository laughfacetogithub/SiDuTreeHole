// pages/commit/commit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: "", //树洞的内容
  },

  bindTextAreaBlur: function(e) {
    this.data.detail = e.detail.value
    //console.log(this.data.detail)
  },
  send: function(e) {
    // console.log(getApp().globalData)
    var that = this;
    wx.showLoading({
      title: '发送中'
    })
    if (!that.data.detail) {
      wx.showModal({
        title: '内容为空',
        content: '您还没有输入任何东西，请输入后再提交'
      })
      wx.hideLoading();
    } else {
      if (getApp().globalData.user.openid == undefined) {
        wx.hideLoading();
        wx.showModal({
          title: '提示',
          confirmText: "快速授权",
          content: '您还没有登录，可快速授权登录！',
          showCancel: true,
          success: function(res) {
            if(res.confirm){
              wx.redirectTo({
                url: '/pages/load/load',
              })
            }
          }
        })
      } else {
        wx.request({
          url: getApp().globalData.server + 'index.php/Home/Message/publish_new_message',
          data: {
            user_id: getApp().globalData.user.openid,
            username: getApp().globalData.user.nickName,
            face_url: getApp().globalData.user.avatarUrl,
            content: that.data.detail
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
                title: '发布树洞成功',
                success(res) {
                  //没有什么动作
                  console.log("success!")
                },
                complete(res) {
                  wx.reLaunch({
                    url: '../square/square'
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
    }
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