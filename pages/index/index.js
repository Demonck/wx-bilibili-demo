Page({

  /**
   * 页面的初始数据
   */
  data: {
    //导航点击索引
    currentIndexNav: 0,
    //导航数据
    navList: [{
        "text": "首页",
        "id": 0
      },
      {
        "text": "动画",
        "id": 1
      },
      {
        "text": "番剧",
        "id": 2
      },
      {
        "text": "国创",
        "id": 3
      },
      {
        "text": "音乐",
        "id": 4
      }
    ],
    //轮播图数据
    swiperList: [{
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/bf2aa1f18ccae9ecae4cb666417f75da951ee2f4.jpg@480w_300h.webp"
      },
      {
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/8860d7a57a9b1992c112ee56a35444cfc445108b.jpg@480w_300h.webp"
      },
      {
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/82232bca677f06d69734159653cf29db82ff5d9c.png@480w_300h.webp"
      },
      {
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/28d93d03968baa475a2c3982640736a66b4405c3.jpg@480w_300h.webp"
      }
    ]
  },
  //导航点击事件
  activeNav(e) {
    console.log(e);
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },
  //获取视频类别导航数据
  getNavList() {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/navList',
      success(res) {
        console.log("success1");
        if (res.statusCode === 200) {
          that.setData({
            navList: res.data.data.navList
          })
        }
      },
      fail() {
        console.log("请求导航数据失败");
      }
    })
  },
  //获取轮播图数据
  getSwiperList() {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res) {
        console.log("success2");
        if (res.statusCode === 200) {
          that.setData({
            swiperList: res.data.swiperList
          })
        }
      },
      fail() {
        console.log("请求轮播图数据失败");
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.getNavList();
    // this.getSwiperList();
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