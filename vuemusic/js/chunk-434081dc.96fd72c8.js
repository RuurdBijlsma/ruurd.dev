(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-434081dc"],{3838:function(t,e,a){"use strict";a("5af7")},"5af7":function(t,e,a){},b7e4:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"artists"},[a("h1",{staticClass:"page-title"},[t._v("Artists")]),t._l(t.$store.state.library.artists,(function(e,s){return a("div",{key:e.id},[0===s?a("v-divider"):t._e(),a("div",{staticClass:"artist"},[a("item-square",{attrs:{"hide-menu":"",small:"",item:e,"no-title":""}}),a("router-link",{staticClass:"artist-title",attrs:{tag:"span",to:"/artist/"+e.name+"/"+e.id}},[t._v(" "+t._s(e.name)+" ")]),a("div",{staticClass:"icons"},[a("follow-button",{attrs:{item:e}}),a("item-menu",{attrs:{item:e}})],1)],1),a("v-divider")],1)}))],2)},n=[],r=(a("96cf"),a("1da1")),i=a("5c2f"),u=a("5dd2"),c=a("190f"),o=a("e292"),l=a("9bcd"),d={name:"Artists",components:{ItemMenu:l["a"],FollowButton:o["a"],FollowMenuItem:c["a"],ShareMenuItem:u["a"],ItemSquare:i["a"]},data:function(){return{}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("refreshUserData","artist");case 2:case"end":return e.stop()}}),e)})))()},methods:{}},m=d,f=(a("3838"),a("2877")),v=a("6544"),p=a.n(v),h=a("ce7e"),w=Object(f["a"])(m,s,n,!1,null,"4f019566",null);e["default"]=w.exports;p()(w,{VDivider:h["a"]})}}]);
//# sourceMappingURL=chunk-434081dc.96fd72c8.js.map