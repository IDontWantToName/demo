// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectAll:true,
    cart:[],
    totalPrice:0
  },
  /**
   * 改下列表项选中状态
   */
  chageSelect(e){
    let index = e.currentTarget.dataset.index;
    let cart = this.data.cart;
    cart[index].selected = !(cart[index].selected);
    this.setData({
      cart: cart
    });
    this.getTotalPrice()
  },
  /**
   * 改变全选状态
   */
  chageSelectAll(){
    let newSelect=!(this.data.selectAll);
    let cart = this.data.cart;
    let totalPrice=0;
    if (newSelect){
      for (let i = 0; i < cart.length; i++) {
        cart[i].selected=true
      }
    }else{
      for (let i = 0; i < cart.length; i++) {
        cart[i].selected = false;
      }
    }
    this.setData({
      cart: cart,
      selectAll: newSelect
    });
    this.getTotalPrice();
  },
  /**
   * 删除列表项
   */
  deleteItem(e){
    let index = e.currentTarget.dataset.index;
    let cart = this.data.cart;
    cart.splice(index, 1);
    this.setData({
      cart: cart
    })
  },
  /**
   * 减少数量
   */
  minusCount(e){
    let index = e.currentTarget.dataset.index;
    let cart = this.data.cart;
    if (cart[index].num>=2){
      cart[index].num-=1
    }else{
      return false
    }
    this.setData({
      cart: cart
    })
    this.getTotalPrice()
  },
  /**
   * 添加数量
   */
  addCount(e) {
    let index = e.currentTarget.dataset.index;
    let cart = this.data.cart;
    cart[index].num += 1
    this.setData({
      cart: cart
    })
    this.getTotalPrice()
  },
  /**
   * 计算总价
   */
  getTotalPrice(){
    let cart = this.data.cart;
    let total = 0;
    for(let i=0;i<cart.length;i++){
      if(cart[i].selected){
        total += cart[i].num*cart[i].price;
      } 
    }
    this.setData({
      cart: cart,
      totalPrice: total.toFixed(2)
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
    this.setData({
      cart:[
        { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 1.31, selected: true},
        { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 2.83, selected: true }
      ]
    })
    this.getTotalPrice();
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