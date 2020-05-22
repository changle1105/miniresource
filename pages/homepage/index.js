// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      visit_num:0,
      collect_num:0,
      mostech_num:0,
      file_num:0,
      role_name:'admin'
  },

  getStatistic(){
    let that=this
    wx.request({
      url:  getApp().globalData.requesthost+'/resource/statistic',
      header: {
        'content-type': 'application/json' ,
        'token':getApp().globalData.token
      },
      success(res){
        that.setData({
          file_num:res.data.data.files_num,
          visit_num:res.data.data.visit_num,
          collect_num:res.data.data.collect_num
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getStatistic()
  },

})