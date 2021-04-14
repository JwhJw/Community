// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    position:'选择当前所在位置>',
    provideService: [{
        id: 0,
        text: "社区打卡",
        img: 'http://m.qpic.cn/psc?/V54WwwZG0HUY0o2IHMEq4PrCf92cfZAO/ruAMsa53pVQWN7FLK88i5o67pg6NZDAAfTONyY8K4u86RAysmeMHcFriivSnMBtCuwlGxu9h05dUqkafj9bQIWs4Lt8.U8hBQqAh91HHVaQ!/mnull&bo=yADIAMgAyAADCSw!&rf=photolist&t=5',
        url: '/pages/clockIn/clockIn'
      }, {
        id: 1,
        text: "快递代取",
        img: 'http://m.qpic.cn/psc?/V54WwwZG0HUY0o2IHMEq4PrCf92cfZAO/ruAMsa53pVQWN7FLK88i5h9pyST3EKC5dGAVC9pTv627fvNIYWIRMGIIZZytqD1EZRSIf*DEkA4BvUaUbgZZPOf9HX1QN7VFZmqq5gFjdVI!/mnull&bo=yADIAMgAyAADCSw!&rf=photolist&t=5',
        url: '/pages/delivery/delivery'
      },
      // {
      //   id: 2,
      //   text: "生活缴费",
      //   img: 'http://m.qpic.cn/psc?/V54WwwZG0HUY0o2IHMEq4PrCf92cfZAO/ruAMsa53pVQWN7FLK88i5kdgzA0aXf65kKhUAakMffkFMzbkULyRTiD0zY1mT01OefSFLeh6bLlAzbcDWLFYs.8DOLjz61D8F2Y40uWSzK8!/mnull&bo=yADIAMgAyAADCSw!&rf=photolist&t=5'
      // }, 
      {
        id: 3,
        text: "开锁服务",
        img: 'http://m.qpic.cn/psc?/V54WwwZG0HUY0o2IHMEq4PrCf92cfZAO/ruAMsa53pVQWN7FLK88i5o67pg6NZDAAfTONyY8K4u8To9RA.nXexG2lJsTAsjb72ESFaEwldiWmiTdTvM*uDyENnUNS6vXdSkZxIYH.1H8!/mnull&bo=yADIAMgAyAADCSw!&rf=photolist&t=5',
        url: '/pages/openClock/openClock'
      }, {
        id: 4,
        text: "便携搬家",
        img: 'http://m.qpic.cn/psc?/V54WwwZG0HUY0o2IHMEq4PrCf92cfZAO/ruAMsa53pVQWN7FLK88i5o67pg6NZDAAfTONyY8K4u9me3nX7T.J0*ZpSCWj8.J2.FNBBspsdXehkePbelP3dgQbXUnFpTw0K6RbmJSPd94!/mnull&bo=yADIAMgAyAADCSw!&rf=photolist&t=5',
        url: '/pages/remove/remove'
      }
    ],
    signIn: [{
      id: 0,
      text: "扫一扫",
      img: 'http://m.qpic.cn/psc?/V123r8uE0mN5qg/45NBuzDIW489QBoVep5mcfeDtovI.9kOwGUvnRdF1EW1ssUV.Me3xTX7ao1dhFu28zj7*mjYm7H5mdjmDmJnWxhkq2v9LY5.wX5xWgMpjN8!/b&bo=9AHAAQAAAAABFwQ!&rf=viewer_4'
    }, {
      id: 1,
      text: "我是住户",
      img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3792454113,1063445900&fm=26&gp=0.jpg'
    }, {
      id: 2,
      text: "上班一族",
      img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1882764470,4092331922&fm=26&gp=0.jpg'
    }, {
      id: 3,
      text: "我是访客",
      img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1585720099,1330641611&fm=26&gp=0.jpg'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  getPosition(){
    const that = this
    wx.choosePoi({
      success(res){
        // console.log(res)
        that.setData({
          position:res.name
        })
      }
    })
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