// pages/resident/resident.js
const db = wx.cloud.database({
  env: 'cloud1-0gv8ptdyc2569ce3'
})
Page({
  condition: '',
  isHomeQuarantine: '',
  temperature: '',
  location: '',

  /**
   * 页面的初始数据
   */
  data: {
    question: [{
        type: 'checkbox',
        title: '1.关于新冠肺炎，你当前的状况是？',
        chooseList: ['无下列情况，身体健朗',
          '近15日内居住或到过国内高风险、中风险地区',
          '最近15日内接触过新冠肺炎感染者',
          '发热（37.5度以上）、咳嗽、乏力、呼吸困难',
          '医学隔离',
          '疑似病例',
          '确诊病例',
          '近15日内在境外居住或到过境外'
        ],
        myEvent: 'conditionChange',
      },
      {
        type: 'radio',
        title: '2.您目前是否处于居家隔离？',
        choose: ['是', '否'],
        myEvent: 'isHomeQuarantineChange'
      },
      {
        type: 'input',
        title: '3.您今日的体温是多少？',
        placeholder: '请输入体温',
        inputType: 'digit',
        myEvent: 'temptureChange'
      }
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  isHomeQuarantineChange(e) {
    this.isHomeQuarantine = e.detail.value;
  },
  conditionChange(e) {
    this.condition = e.detail.value;
  },
  temptureChange(e) {
    this.temperature = e.detail.value;
  },
  handleSubmit() {
    let formData = {
      condition: this.condition,
      isHomeQuarantine: this.isHomeQuarantine,
      temperature: this.temperature,
    }
    //提交表单至数据库
    db.collection('clock-in').doc('b00064a760769ce80e4a84aa54fe63ff').update({
        data: {
          condition: formData.condition,
          isHomeQuarantine: formData.isHomeQuarantine,
          temperature: this.temperature,
        }
      }).then(res => {
        console.log(res)
        wx.showToast({
          title: '提交成功',
        }).then(
          wx.switchTab({
            //也可以跳转到本页面，待解决的问题是，需要重新渲染页面
            url: '/pages/index/index',
            success: function (res) {
              db.collection('clock-in').where({
                _openid: 'oVUaq5C6yWwPp1KpFW2ahBq3BbdY' // 填入当前用户 openid
              }).get().then(res => {
                console.log(res.data)
              })
            },
            fail(err) {
              console.log(err)
            }
          })
        )
      })
      .catch(err => {
        console.log(err)
      })
  },
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