webpackJsonp([0],{Fvet:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=null,n={data:function(){return{activeNames:["4"],flowInfo:{list:[{id:1,url:"./static/image/nuvent/1.jpg"},{id:2,url:"./static/image/nuvent/2.jpg"},{id:2,url:"./static/image/nuvent/3.jpg"}],Star:5,days:null,hours:null,minutes:null,seconds:null,tabView:1}}},mounted:function(){var t=this;s=setInterval(function(){t.leftTimer(new Date("2018-9-25 00:00:00"))},1e3)},methods:{leftTimer:function(t){var e=new Date(t)-new Date,a=parseInt(e/1e3/60/60/24,10),n=parseInt(e/1e3/60/60%24,10),i=parseInt(e/1e3/60%60,10),l=parseInt(e/1e3%60,10);this.flowInfo.days=this.checkTime(a),this.flowInfo.hours=this.checkTime(n),this.flowInfo.minutes=this.checkTime(i),this.flowInfo.seconds=this.checkTime(l),a<=0&&n<=0&&i<=0&&l<=0&&(window.clearInterval(s),s=null)},checkTime:function(t){return t<10&&(t="0"+t),t},tabChange:function(t){this.flowInfo.tabView=t,console.log("这是"+this.flowInfo.tabView)}},components:{first:function(t){return a.e(4).then(function(){var e=[a("RpU6")];t.apply(null,e)}.bind(this)).catch(a.oe)}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nuvent"},[a("div",{staticClass:"block"},[a("el-carousel",{attrs:{width:"100%",height:"250px",arrow:"always","indicator-position":"none"}},t._l(t.flowInfo.list,function(t,e){return a("el-carousel-item",{key:e},[a("img",{staticClass:"banner",attrs:{src:t.url}})])}))],1),t._v(" "),a("el-form",{staticClass:"form",attrs:{inline:!0}},[a("div",{staticClass:"title"},[t._v("9月24日湖北【情浓金秋·放价约惠】纽芬特省级联动")]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"热门指数"}},[a("el-rate",{attrs:{disabled:!0,colors:["red","red","red"]},model:{value:t.flowInfo.Star,callback:function(e){t.$set(t.flowInfo,"Star",e)},expression:"flowInfo.Star"}})],1),t._v(" "),a("el-form-item",{staticStyle:{float:"right"},attrs:{label:""}},[a("i",{staticClass:"el-icon-view"}),a("span",{staticStyle:{color:"#333"}},[t._v("7000")]),t._v("人已浏览\n        ")])],1)],1),t._v(" "),a("el-row",[a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[a("span",{staticClass:"Countdown"},[t._v("\n          距活动结束还有\n          "),a("span",[t._v(t._s(t.flowInfo.days))]),t._v("\n          天"),a("span",[t._v(t._s(t.flowInfo.hours))]),t._v("\n          时"),a("span",[t._v(t._s(t.flowInfo.minutes))]),t._v("\n          分"),a("span",[t._v(t._s(t.flowInfo.seconds))]),t._v("秒\n        ")])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"msg"},[a("div",[t._v("活动时间："),a("span",[t._v("2018年08月24日-09月24日")])]),t._v(" "),a("div",[a("div",{staticStyle:{float:"left"}},[t._v("联系电话："),a("span",[a("a",{attrs:{href:"tel:13972791591"}},[t._v("13972791591")])])]),t._v(" "),a("div",{staticStyle:{float:"right"}},[a("span",[a("i",{staticClass:"el-icon-arrow-right"})])])]),t._v(" "),a("div",[t._v("活动地址："),a("span",[t._v("湖北省大冶市罗家桥中亿万美吉特瓷砖区纽芬特大理石瓷砖")])])])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",[a("i",{staticClass:"el-icon-d-arrow-right"}),t._v(" "),a("a",{staticStyle:{"border-bottom":"1px solid #5e6d82"},attrs:{href:"http://www.newfindtc.com/m/?p=40"}},[t._v("点击查看【品牌介绍】纽芬特陶瓷·中国十大品牌")])])])],1)],1),t._v(" "),a("div",{staticClass:"tab"},[a("div",{staticClass:"Event-Details",class:{active:1==t.flowInfo.tabView},on:{click:function(e){t.tabChange(1)}}},[t._v("活动详情")]),t._v(" "),a("div",{staticClass:"Registration-gift",class:{active:2==t.flowInfo.tabView},on:{click:function(e){t.tabChange(2)}}},[t._v("产品介绍")])]),t._v(" "),2==t.flowInfo.tabView?a("div",{staticStyle:{"margin-bottom":"60px"}},[a("el-collapse",{attrs:{accordion:""},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"大理石瓷砖系列",name:"4"}},[a("first")],1)],1)],1):t._e(),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"call"},[a("div",{staticClass:"call1-iphone"},[a("a",{attrs:{href:"tel:13972791591"}},[t._v("电话咨询")])])])])],1)],1)},staticRenderFns:[]};var l=a("VU/8")(n,i,!1,function(t){a("uc+Z")},"data-v-feba272a",null);e.default=l.exports},"uc+Z":function(t,e){}});
//# sourceMappingURL=0.0da197f4979a719bdbb0.js.map