(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0943e14"],{7797:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"explore"},[t.onDeck?n("div",{staticClass:"on-deck"},[n("data-card",{staticClass:"main-card mb-10",attrs:{"img-width":t.imgWidth,item:t.mainDeck}}),n("item-row",{staticClass:"sub-deck",attrs:{title:"On deck","horizontal-movie":"","show-context":"",size:300*t.uiScale,to:"/library/"+t.sectionKey+"/onDeck",items:t.subDeck}})],1):t._e(),t._l(t.filteredHub,(function(e){return n("v-lazy",{key:e.hubKey,staticClass:"mb-7",attrs:{height:("episode"===e.type?140:225)*t.uiScale+120}},[n("item-row",{attrs:{title:e.title,items:e.Metadata,size:("episode"===e.type?250:150)*t.uiScale,"vertical-episode":"mixed"===e.type,"show-context":""}})],1)}))],2)},r=[],c=(n("4de4"),n("7db0"),n("caad"),n("fb6a"),n("2532"),n("5530")),o=(n("96cf"),n("1da1")),a=n("2f62"),u=n("a892"),s=n("2c55"),d={name:"Home",components:{DataCard:s["a"],ItemRow:u["a"]},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.restored;case 2:return e.next=4,t.init();case 4:case"end":return e.stop()}}),e)})))()},methods:Object(c["a"])({init:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.updateHub(t.sectionKey).then(),console.log({hub:t.hub,onDeck:t.onDeck});case 2:case"end":return e.stop()}}),e)})))()}},Object(a["b"])(["updateHub"])),computed:Object(c["a"])({imgWidth:function(){return this.windowWidth>1600?750:550},mainDeck:function(){var t;return null===(t=this.onDeck)||void 0===t?void 0:t[0]},subDeck:function(){var t;return null===(t=this.onDeck)||void 0===t?void 0:t.slice(1)},onDeck:function(){var t;return null===(t=this.hub.find((function(t){return t.context.includes("ondeck")})))||void 0===t?void 0:t.Metadata},filteredHub:function(){return this.hub.filter((function(t){var e;return(null===t||void 0===t||null===(e=t.Metadata)||void 0===e?void 0:e.length)>0&&!t.context.includes("ondeck")}))},hub:function(){var t;return null!==(t=this.$store.state.plex.content["hub"+this.sectionKey])&&void 0!==t?t:[]},sectionKey:function(){var t;return null!==(t=this.$route.params.sectionKey)&&void 0!==t?t:"1"}},Object(a["d"])({windowWidth:function(t){return t.windowWidth},uiScale:function(t){return t.uiScale}})),watch:{sectionKey:function(){this.init()}}},l=d,h=(n("e925"),n("2877")),f=n("6544"),b=n.n(f),m=n("b687"),v=Object(h["a"])(l,i,r,!1,null,"7f04c152",null);e["default"]=v.exports;b()(v,{VLazy:m["a"]})},e276:function(t,e,n){},e925:function(t,e,n){"use strict";n("e276")}}]);
//# sourceMappingURL=chunk-a0943e14.92377689.js.map