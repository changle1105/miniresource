// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resource:null,
    temp: {
      resource_id: '',
      resource_name: '',
      type_id: '',
      type_name: '',
      subject_id: '',
      subject_name: '',
      course_id: '',
      course_name: '',
      uploader_id: '',
      uploader_name: '',
      description: '',
      scan_count: 0,
      collect_count: 0,
      download_count: 0,
      appendix_list: {
        appendix_id: '',
        filename: '',
        filetype: '', 
        url: null
      }
    }
  },

  getDetail(){
    let that=this
    wx.request({
      url: getApp().globalData.requesthost+'/resource/detail',
      data:{
        resource_id:this.data.temp.resource_id
      },
      header: {
        'content-type': 'application/json' ,
        'token':getApp().globalData.token
      },
      success (res) {
       that.setData({
        resource:res.data.data
       })
       console.log(that.data.resource)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.data.temp.resource_id=options.id
      this.getDetail()
  },
  addCollect(){
    wx.request({
      url: getApp().globalData.requesthost+'/resource/addCollect',
      data:{
        resource_id:this.data.temp.resource_id
      },
      header: {
        'content-type': 'application/json' ,
        'token':getApp().globalData.token
      },
      success (res) {
        wx.showToast({
          title: '收藏成功',
          icon: 'succes',
          duration: 1000,
          mask:true
      })
      }
    })
  }
})