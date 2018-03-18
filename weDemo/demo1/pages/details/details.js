// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasCarts: true,
    totalNum: 0,
    num: 1,
    onItem:0,
    imgUrl: '',
    price: 0,
    productName:'',
    scaleCart:false
  },
  clickItem (e) {
    let a = parseInt(e.currentTarget.dataset.index)
    this.setData({
      onItem : a
    })
  },
  toCart(){
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  addCart(){
    let self=this;
    let num = this.data.totalNum;
    num++;
    this.setData({
      scaleCart: true,
      totalNum: num
    })
    setTimeout(function(){
      self.setData({
        scaleCart: false
      })
    },300)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      imgUrl: options.imgUrl,
      price: options.id,
      productName: options.productName
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