(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25990573"],{"1a64":function(t,a,s){"use strict";s("e395")},"2b40":function(t,a,s){},"7fdb":function(t,a,s){"use strict";s("2b40")},"99d9":function(t,a,s){"use strict";s.d(a,"a",(function(){return d})),s.d(a,"b",(function(){return n})),s.d(a,"c",(function(){return l}));var e=s("b0af"),o=s("80d2");const d=Object(o["i"])("v-card__actions"),n=Object(o["i"])("v-card__subtitle"),i=Object(o["i"])("v-card__text"),l=Object(o["i"])("v-card__title");e["a"]},"9d26e":function(t,a,s){"use strict";s.r(a);var e=s("ce7e"),o=s("b73d"),d=function(){var t=this,a=t._self._c;return a("div",{staticClass:"downloads"},[a("div",{staticClass:"wide"},[a("div",{staticClass:"downloads-title"},[a("h1",{staticClass:"page-title"},[t._v("Downloads")]),a(o["a"],{attrs:{inset:"",dense:"",label:"Download tracks while you're listening?"},model:{value:t.$store.state.media.shouldDownload,callback:function(a){t.$set(t.$store.state.media,"shouldDownload",a)},expression:"$store.state.media.shouldDownload"}})],1),a(e["a"],{staticClass:"divider"}),0===t.$store.state.media.downloads.length?a("h3",[t._v("No active downloads")]):t._e(),t._l(t.$store.state.media.downloads,(function(t){return a("download-card",{key:t.track.id,staticClass:"card",attrs:{download:t}})}))],2)])},n=[],i=s("7628"),l=s("8212"),r=s("8336"),c=s("b0af"),u=s("99d9"),w=s("132d"),b=s("adda"),m=function(){var t=this,a=t._self._c;return null!==t.download?a(c["a"],{attrs:{width:500,outlined:"",loading:!t.done}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("div",[a(u["c"],[t._v(t._s(t.download.track.name))]),a(u["b"],[a("artists-span",{attrs:{artists:t.download.track.artists,grey:""}})],1)],1),a(l["a"],{staticClass:"ma-3",attrs:{size:"125",tile:""}},[a(b["a"],{attrs:{src:t.$store.getters.itemImage(t.download.track)}})],1)],1),t.done?a(u["a"],{staticClass:"card-actions"},[a(r["a"],{attrs:{text:""}},["Failed"===t.download.state?a(w["a"],{attrs:{color:"error"}},[t._v("mdi-alert-circle-outline")]):a(w["a"],{attrs:{color:"success"}},[t._v("mdi-check")]),t._v(" "+t._s(t.download.state)+" ")],1),a(r["a"],{attrs:{color:"primary",text:""},on:{click:t.dismiss}},[t._v("Dismiss")])],1):a(u["a"],{staticClass:"card-actions"},[a(r["a"],{attrs:{disabled:"",text:""}},[t._v(t._s(t.download.state)+"...")]),a(r["a"],{attrs:{color:"error",text:""},on:{click:t.abort}},[t._v("Cancel")])],1)],1):t._e()},_=[],v={name:"DownloadCard",components:{ArtistsSpan:i["a"]},props:{download:{type:Object,default:null}},methods:{abort(){this.download.abortController.abort(),this.dismiss()},dismiss(){this.$store.commit("removeDownload",this.download.track)}},computed:{done(){return["Downloaded","Cancelled","Failed"].includes(this.download.state)}}},f=v,h=(s("7fdb"),s("2877")),p=Object(h["a"])(f,m,_,!1,null,"7eb385b6",null),C=p.exports,k={name:"Downloads",components:{DownloadCard:C,ArtistsSpan:i["a"]},data:()=>({}),async mounted(){},methods:{},watch:{}},D=k,x=(s("1a64"),Object(h["a"])(D,d,n,!1,null,"8aee6e8a",null));a["default"]=x.exports},e395:function(t,a,s){}}]);
//# sourceMappingURL=chunk-25990573.a8285870.js.map