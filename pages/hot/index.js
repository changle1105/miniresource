Page({
  data: {
    TabCur: 0,
    scrollLeft:0,
    list:null,
    queryType:{
      page: 1,
      limit: 8,
      type: 'visit',
      sort: 'scan_count  desc'
    },
    tablist:[{
      index:0,
      name:'热榜',
      type:'visit',
      key:' scan_count  desc '
    },
    {
      index:1,
      name:'收藏榜',
      type:'collect',
      key:' collect_num  desc '
    },
    {
      index:2,
      name:'最新上传榜',
      type:'upload',
      key:' upload_date  desc '
    }]
  },
  onLoad(){
    this.fetchData()
  },
  handleDetail(e){
    wx.redirectTo({ 
      url: '../detail/index?id='+e.currentTarget.dataset.id,
    })
  },
  fetchData(){
    var that=this
    wx.request({
      url:  getApp().globalData.requesthost+'/resource/list',
      data:this.data.queryType,
      header: {
        'content-type': 'application/json' ,
        'token':getApp().globalData.token
      },
      success(res){
        that.setData({
          list:res.data.data.items
        })
      }
    })
    console.log(this.data.list)
  },
  tabSelect(e) {
    var tabindex=e.currentTarget.dataset.id
    this.data.queryType.type=this.data.tablist[tabindex].type
    this.data.queryType.sort=this.data.tablist[tabindex].key
    console.log(this.data.queryType)
    this.fetchData()
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })

  }
})