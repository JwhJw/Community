// pages/resident/resident.js
Page({

  name:'',
  sex:'',
  idType:'',
  idcard:'',
  phone:'',
  home:'',
  type:'',
  // idTypeIndex:0,
  // homeTypeIndex:0,
  /**
   * 页面的初始数据
   */
  data: {
    question:[
      {type:'input',title:'姓名',placeholder:'请输入您的姓名',myEvent:'nameChange'},
      {type:'radio',title:'性别',choose:['男','女'],myEvent:"sexChange"},
      {type:'picker',title:'证件类型',array:['中华人民共和国身份证','港澳通行证','护照'],myEvent:'idTypeChange',id:0},
      {type:'input',title:'证件号码',placeholder:'请输入您的证件号码',inputType:'idcard',myEvent:'idCardChange'},
      {type:'input',title:'电话号码',placeholder:'请输入您的电话号码',inputType:'number',myEvent:'phoneChange'},
      {type:'input',title:'居住地址',placeholder:'扫码显示'},
      {type:'input',title:'详细地址',placeholder:'请输入您的详细地址：xx号楼-xx号单元-xx房间',myEvent:'homeChange'},
      {type:'radio',title:'居住类别',choose:['业主','租户'],myEvent:'typeChange'},,
    ],
    index:0,
  },
  idTypeChange(e){
    console.log(e)
    this.setData({
      index: e.detail.value
    })
    this.idType = e.detail.value;
  },
  nameChange(e){
    console.log(e.detail.value)
    this.name = e.detail.value
  },
  sexChange(e){
    console.log(e.detail.value)
    this.sex = e.detail.value
  },
  idCardChange(e){
    console.log(e.detail.value)
    this.idcard = e.detail.value
  },
  phoneChange(e){
    console.log(e.detail.value)
    this.phone = e.detail.value
  },
  homeChange(e){
    console.log(e.detail.value)
    this.home = e.detail.value
  },
  typeChange(e){
    console.log(e.detail.value)
    this.type = e.detail.value
  },
  submit(){
    let formData={
      name:this.name,
      sex:this.sex,
      idType:this.idType,
      idcard:this.idcard,
      phone:this.phone,
      home:this.home,
      type:this.type
    }
    console.log(formData)
  }
})