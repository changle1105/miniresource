// pages/mostech/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: null,
    listSubject: null,
    listCourse: null,
    total: 0,
    listLoading: true,
    subject_index:0,
    course_index:0,
    listQuery: {
      page: 1,
      limit: 10,
      resource_name:'',
      type_id: '',
      subject_id: '',
      course_name: '',
      sort: ' upload_date desc '
    },
    type_id:''
  },

  getList(){
    this.data.listLoading=true
     console.log(this.data.listQuery)
     let that=this
     wx.request({
       url: getApp().globalData.requesthost+'/resource/list',
       data:that.data.listQuery,
       header: {
         'content-type': 'application/json' ,
         'token':getApp().globalData.token
       },
       success (res) {
        that.setData({
          list:res.data.data.items
        })
        }
     })
     this.data.listLoading=false
  },
  getSubjectList(){
    let that=this
    wx.request({
      url:  getApp().globalData.requesthost+'/resource/statistic_subject',
      data:{
        type_id:this.data.listQuery.type_id
      },
      header: {
        'content-type': 'application/json' ,
        'token':getApp().globalData.token
      },
      success (res) {
       that.setData({
         listSubject:res.data.data.items
       })
       }
    })
  },
  handleSubjectChange(e){
    this.setData({
      subject_index: e.detail.value
    })
    if(this.data.listSubject!=null){
      this.data.listQuery.subject_id=this.data.listSubject[this.data.subject_index].subject_id
      let that=this
    wx.request({
      url: getApp().globalData.requesthost+'/resource/statistic_course',
      data:this.data.listQuery,
      header: {
        'content-type': 'application/json' ,
        'token':getApp().globalData.token
      },
      success (res) {
       that.setData({
         listCourse:res.data.data.items
       })
       }
    })
    }
  },
  handleDetail(e){
    wx.redirectTo({
      url: '../detail/index?id='+e.currentTarget.dataset.id,
    })
  },
  handleTextInput(e){
    this.data.listQuery.resource_name=e.detail.value
  },
  handleCourseChange(e){
    this.setData({
      course_index:e.detail.value
    })
    this.data.listQuery.course_name=this.data.listCourse[e.detail.value].course_name
    console.log(this.data.listQuery)
  },
  handleQuery(){
    this.data.listQuery.page=1
    this.getList()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
       'listQuery.type_id':options.type_id
     })
     this.getList();
     this.getSubjectList();
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