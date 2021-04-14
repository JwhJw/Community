// pages/delivery/delivery.js
Page({

  address: '',
  number: '',
  name: '',
  phone: '',
  delivery: '',
  /**
   * 页面的初始数据
   */
  data: {

  },
  addressChange(e) {
    console.log(e.detail.value)
    this.address = e.detail.value;
  },
  numberChange(e) {
    console.log(e.detail.value)
    this.number = e.detail.value;
  },
  nameChange(e) {
    console.log(e.detail.value)
    this.name = e.detail.value;
  },
  phoneChange(e) {
    console.log(e.detail.value)
    this.phone = e.detail.value;
  },
  deliveryChange(e) {
    console.log(e.detail.value)
    this.delivery  = e.detail.value;
  },
  submit(){
    let formData={
      address:this.address,
      number:this.number,
      name:this.name,
      phone:this.phone,
      delivery:this.delivery
    }
    console.log(formData)
  }
})
