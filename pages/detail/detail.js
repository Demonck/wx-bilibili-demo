// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频详情信息数据
    videoInfo: {
      "id": 2,
      "videoSrc": "http://files.ak48.xyz/20181219211856.mp4",
      "videoTitle": "【圣地亚哥金曲】藏，超好听的中国风电音鬼畜！",
      "author": "牧草君2",
      "playCount": "24.9万",
      "commentCount": 1345,
      "date": "12-15"
    },
    // 推荐视频数据
    authorRecommendList: [],
    //视频评论数据
    commentList:[]
  },
  /**
   * 根据点击视频的id获取视频详情
   */
  getCurrentVideo(videoId) {
    let that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d590978d3185331448bb542/bilibili/videoDetail?id=' + videoId,
      success(res) {
        if (res.statusCode === 200) {
          that.setData({
            videoInfo: res.data.data.videoInfo
          })
        }
      }
    })
  },
  /**
   * 使用官方api，通过视频av号获取作者推荐视频
   */
  getAuthorRecommend() {
    let that = this;

    wx.request({
      url: 'http://api.bilibili.cn/author_recommend?aid=67971547',
      success(res) {
        if (res.statusCode === 200) {
          console.log('获取推荐视频成功！');
          
          that.setData({
            authorRecommendList: res.data.list
          })
        }
      }
    })

  },
  /**
   * 使用官方api，通过视频av号视频评论
   */
  getCommentList() {
    let that = this;
    wx.request({
      url: 'http://api.bilibili.com/x/reply?type=1&oid=60839349&pn=0&nohot=1&sort=0',
      success(res) {
        if (res.statusCode === 200) {
          console.log('获取视频评论成功！');
          console.log(res.data.data.replies[0].replies[0].member);
          that.setData({
              commentList:res.data.data
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options);
    let videoId = options.id;
    //this.getCurrentVideo(videoId);
    this.getAuthorRecommend();
    this.getCommentList();
    

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