// pages/dongtaicenter/dongtaicenter.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:'评论',
        num:0,
        isActive:true
      },
      {
        id:1,
        value:'点赞',
        num: 0,
        isActive:false
      },
      {
        id:2,
        value:'转发',
        num:0,
        isActive:false
      },
      {
        id:3,
        value:'收藏',
        num:0,
        isActive:false
      },
    ],
    contents:{
      name:"dzw",
      num:0,
      dianzan_num:121,
      pinglun_num:121,
      share_num:133,
      shoucang_num:234,
      user_icon:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/img1.jpg?sign=6ffe874d587fe839f2a06a55f5f3d9eb&t=1618302652",
      time:"2021-04-12",
      title:"奥克兰激发了开始就发撒金刚萨勒夫爱上了房间里凯撒的剑法",
      content:"asdfjk的金发可是劳动纠纷撒旦雷锋精神离开对方撒旦浪费空间森林的砍伐送到房间里啊圣诞快乐积分上的飞机",
      img:[
        {img1:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/img1.jpg?sign=6ffe874d587fe839f2a06a55f5f3d9eb&t=1618302652"},
        {img1:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/img1.jpg?sign=6ffe874d587fe839f2a06a55f5f3d9eb&t=1618302652"},
        {img1:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/img1.jpg?sign=6ffe874d587fe839f2a06a55f5f3d9eb&t=1618302652"},
        {img1:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/img1.jpg?sign=6ffe874d587fe839f2a06a55f5f3d9eb&t=1618302652"},
        {img1:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/img1.jpg?sign=6ffe874d587fe839f2a06a55f5f3d9eb&t=1618302652"},
        {img1:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/img1.jpg?sign=6ffe874d587fe839f2a06a55f5f3d9eb&t=1618302652"},
        {img1:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/img1.jpg?sign=6ffe874d587fe839f2a06a55f5f3d9eb&t=1618302652"},
        {img1:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/img1.jpg?sign=6ffe874d587fe839f2a06a55f5f3d9eb&t=1618302652"},
        {img1:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/img1.jpg?sign=6ffe874d587fe839f2a06a55f5f3d9eb&t=1618302652"},
      ],

      bottom_users:[
        {
          name:"dzw",
          imgs:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/img1.jpg?sign=6ffe874d587fe839f2a06a55f5f3d9eb&t=1618302652",
          time:"2021-04-13",
          comments:"as案説法就阿斯達克近乎瘋狂拉升地方啊快速導航飯卡手動閥誇獎哈上島咖啡開始的法律士大夫艱苦拉薩大家發ask點擊返回喀什醬豆腐看ask兌換積分卡死了的肌膚",
          dz_num:1223,
          pl_num:2321
        },
        {
          name:"dzw",
          imgs:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/img1.jpg?sign=6ffe874d587fe839f2a06a55f5f3d9eb&t=1618302652",
          time:"2021-04-13",
          comments:"as案説法就阿斯達克近乎瘋狂拉升地方啊快速導航飯卡手動閥誇獎哈上島咖啡開始的法律士大夫艱苦拉薩大家發ask點擊返回喀什醬豆腐看ask兌換積分卡死了的肌膚",
          dz_num:1223,
          pl_num:2321
        },
        {
          name:"dzw",
          imgs:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/img1.jpg?sign=6ffe874d587fe839f2a06a55f5f3d9eb&t=1618302652",
          time:"2021-04-13",
          comments:"as案説法就阿斯達克近乎瘋狂拉升地方啊快速導航飯卡手動閥誇獎哈上島咖啡開始的法律士大夫艱苦拉薩大家發ask點擊返回喀什醬豆腐看ask兌換積分卡死了的肌膚",
          dz_num:1223,
          pl_num:2321
        },
        {
          name:"dzw",
          imgs:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/img1.jpg?sign=6ffe874d587fe839f2a06a55f5f3d9eb&t=1618302652",
          time:"2021-04-13",
          comments:"as案説法就阿斯達克近乎瘋狂拉升地方啊快速導航飯卡手動閥誇獎哈上島咖啡開始的法律士大夫艱苦拉薩大家發ask點擊返回喀什醬豆腐看ask兌換積分卡死了的肌膚",
          dz_num:1223,
          pl_num:2321
        },
        {
          name:"dzw",
          imgs:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/img1.jpg?sign=6ffe874d587fe839f2a06a55f5f3d9eb&t=1618302652",
          time:"2021-04-13",
          comments:"as案説法就阿斯達克近乎瘋狂拉升地方啊快速導航飯卡手動閥誇獎哈上島咖啡開始的法律士大夫艱苦拉薩大家發ask點擊返回喀什醬豆腐看ask兌換積分卡死了的肌膚",
          dz_num:1223,
          pl_num:2321
        }
      ]








    }
  },




  onLoad: function(e){
    app.loadFont();
    //const {index} = e.detail;
    let{tabs}= this.data;
    tabs[0].num = this.data.contents.dianzan_num;
    tabs[1].num = this.data.contents.pinglun_num;
    tabs[2].num = this.data.contents.share_num;
    tabs[3].num = this.data.contents.shoucang_num;
    this.setData({
      tabs
    })
  },

  

  
  handleTabsItemChange(e){
    // console.log(e);
    const {index} = e.detail;
    let{tabs}= this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  },

  

})