// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    swiperList:[
      {
        imgname : "https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/images/banner1.png?sign=ba42fb0bfbe31f9d2ffbfec4ba93c4eb&t=1618324843",
      },
      {
        imgname : "https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/images/banner1.png?sign=ba42fb0bfbe31f9d2ffbfec4ba93c4eb&t=1618324843",
      },
      {
        imgname : "https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/images/banner1.png?sign=ba42fb0bfbe31f9d2ffbfec4ba93c4eb&t=1618324843",
      }
    ],
    cateList:[
      {
        imgname:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/images/%E6%89%AB%E7%A0%81PK2%20(2).png?sign=31861d07bac6bdd56c8a4d77eaea0050&t=1618326324"
      },
      {
        imgname:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/images/%E6%89%AB%E7%A0%81%E4%BB%A4%E7%89%8C2%20(3).png?sign=a715143cf5210bf11eded40e56d40c38&t=1618326386"
      },
      {
        imgname:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/dongtai/images/%E6%88%91%E7%9A%84%E7%BA%A6%E6%88%98.png?sign=d8b2f01cdb7a9133e998aad5e8466cbc&t=1618325831"
      }
    ],
    data:[
      {
        title:"我是大标是各国使馆豆腐的敢死队风格士大夫敢死队风格题",
        contents:"我是内容阿巴巴阿八八八八八说的是豆腐干豆腐十分根深蒂固山豆根是德国的公司的法国队甘特图八八",
        user_head:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/user_head.png?sign=c491baf2489cb9c06df60d7dd599659a&t=1618234026",
        user_name:"用户名111",
        dznum:1000,
        plnum:9099
      },
      { title:"我是大标是各国使馆豆腐干山豆根山豆根第三个上的敢死队风格士大夫敢死队风格题",
      contents:"我是内容阿巴巴阿八八八八八说的是豆腐干豆腐十分根深蒂固山豆根是德国的公司的法国队甘特图八八",
      user_head:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/user_head.png?sign=c491baf2489cb9c06df60d7dd599659a&t=1618234026",
      user_name:"用户名222",
      dznum:1000,
      plnum:9090
    },
      { title:"我是大标是各国使馆豆腐干山豆根山豆根第三个上的敢死队风格士大夫敢死队风格题",
      contents:"我是内容阿巴巴阿八八八八八说的是豆腐干豆腐十分根深蒂固山豆根是德国的公司的法国队甘特图八八",
      user_head:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/user_head.png?sign=c491baf2489cb9c06df60d7dd599659a&t=1618234026",
      user_name:"用户名333",
      dznum:1000,
      plnum:9090
    },
      { title:"我是大标是各国使馆豆腐干山豆根山豆根第三个上的敢死队风格士大夫敢死队风格题",
      contents:"我是内容阿巴巴阿八dfgdsfg说了句咖啡色带来更加快乐的时光sdbcxvgdfstg八八八八说的是豆腐干豆腐十分根深蒂固山豆根是德国的公司的法国队甘特图八八",
      user_head:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/user_head.png?sign=c491baf2489cb9c06df60d7dd599659a&t=1618234026",
      user_name:"用户名444",
      dznum:1000,
      plnum:9090
    },
      { title:"我是大标是各国使馆豆腐干山豆根山豆根第三个上的敢死队风格士大夫敢死队风格题",
      contents:"我是内容阿巴巴阿八八八八八说的是豆腐干豆腐十分根深蒂固山豆根是德国的公司的法国队甘特图八八",
      user_head:"https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/user_head.png?sign=c491baf2489cb9c06df60d7dd599659a&t=1618234026",
      user_name:"用户名66",
      dznum:1000,
      plnum:9090
    }
    ]
  },
  // 事件处理函数

  onLoad: function(){
    app.loadFont()
  },



})
