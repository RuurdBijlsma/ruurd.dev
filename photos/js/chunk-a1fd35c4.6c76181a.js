(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a1fd35c4"],{"04fe":function(t,e,a){"use strict";a("db17")},db17:function(t,e,a){},f264:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload-result",style:{maxHeight:"calc(100vh - "+(t.$vuetify.application.top+t.$vuetify.application.bottom)+"px)"}},t._l(t.uploadResults,(function(e){var r=e.file,s=e.result;return a("v-card",{key:r,staticClass:"mb-8 card",attrs:{width:350}},[s.id?a("v-img",{attrs:{src:t.api+"/photo/big/"+s.id+".webp"}}):t._e(),a("v-card-title",[t._v(t._s(r))]),s.success?t._e():a("v-card-subtitle",[t._v(" Can't upload: "+t._s(s.error)+" ")]),s.success?a("v-card-text",[t._v("Uploaded successfully")]):t._e(),s.id?a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary",to:"/photo/"+s.id}},[t._v("View image")])],1):t._e(),a("v-progress-linear",{attrs:{absolute:"",value:100,color:s.success?"success":"warning"}})],1)})),1)},s=[],n=a("1da1"),c=(a("96cf"),a("2b0e")),u=a("a2e1"),i=a("1a43"),o=c["default"].extend({name:"UploadResult",components:{GridPhoto:u["a"]},data:function(){return{api:i["a"]}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.uploadResults.length){e.next=3;break}return e.next=3,t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()},methods:{},computed:{uploadResults:function(){return this.$store.state.uploadResults}},watch:{}}),d=o,l=(a("04fe"),a("2877")),p=a("6544"),f=a.n(p),v=a("8336"),b=a("b0af"),h=a("99d9"),m=a("adda"),w=a("8e36"),_=a("2fa4"),g=Object(l["a"])(d,r,s,!1,null,"45baa8de",null);e["default"]=g.exports;f()(g,{VBtn:v["a"],VCard:b["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardText:h["c"],VCardTitle:h["d"],VImg:m["a"],VProgressLinear:w["a"],VSpacer:_["a"]})}}]);
//# sourceMappingURL=chunk-a1fd35c4.6c76181a.js.map