//index.js
//获取应用实例
const app = getApp()
 Page({
   /**
    * 页面的初始数据
    */
   data: {
     countDownTime:"获取验证码",
     isOk: false,
   },

   click:function(){
     this.getCode();
   },
  
   getCode:function(){
     var that = this
     var time = 60
     var isOk = that.data.isOk
      var timer = setInterval(function () {
        time--;
        if (time <= 0) {
          clearInterval(timer);
          that.setData({
            countDownTime: "重新发送",
            isOk: false,
          })
        } else {
          that.setData({
            countDownTime: time + "s",
            isOk: true
          })
        }
      }, 1000)
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
