// pages/openClock/openClock.js
Page({

  /**
   * 页面的初始数据
   */
  Lon: 0,
  Lat: 0,
  data: {
    position: '当前位置',
    serviceType: ['开锁', '换锁', '装锁'],
    typeIndex: 0,
    isnow: true,
    date: '2021-4-16',
    time: '12:00',
    showworkers: true,
    longitude: '',
    latitude: '',
    markers: [{
      iconPath: '/images/location.png',
      id: 0,
      latitude: 0,
      longitude: 0,
      width: 50,
      height: 50
    }]
  },
  flag: true,
  position: '',
  address: '',
  serviceType: 0,
  serviceDate: '2021-4-16',
  serviceTime: '12:00',
  exactTime: '',
  message: '',

  addressChange(e) {
    this.address = e.detail.value;
  },
  showworkers() {},
  typeChange(e) {
    this.setData({
      typeIndex: e.detail.value
    })
    this.serviceType = e.detail.value;
  },
  changeIndicatorDots(e) {
    this.flag = !this.flag;
    this.setData({
      isnow: this.flag
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
    this.serviceDate = e.detail.value;
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
    this.serviceTime = e.detail.value;
  },
  messageChange(e) {
    this.message = e.detail.value
  },
  handleSubmit() {
    if (this.flag) {
      this.exactTime = 'now'
    }
    this.exactTime = `${this.serviceDate} ${this.serviceTime}`
    let formData = {
      position: this.position,
      address: this.address,
      serviceType: this.serviceType,
      exactTime: this.exactTime,
      message: this.message
    }
  },

  /**
   * 获取当前位置
   */
  getPosition() {
    const that = this;
    wx.chooseLocation({
      success(res){
        console.log(res);
        if(res.name){
          that.setData({
            position:res.name
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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