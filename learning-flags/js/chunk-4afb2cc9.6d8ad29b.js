(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4afb2cc9"],{"1be43":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.learnResults&&t.learnResults[0]?e("div",{staticClass:"home",style:{alignItems:t.$vuetify.breakpoint.mobile?"stretch":"flex-start"}},[e("v-card",{staticClass:"left-card mb-3",class:t.$vuetify.breakpoint.width>1300?"rounded-xl":"",attrs:{elevation:"2"}},[e("v-card-title",[t._v("Session results")]),e("div",{staticClass:"flags"},t._l(t.randomFlags,(function(t){return e("v-img",{key:t,attrs:{"aspect-ratio":1.5,src:t}})})),1),e("v-card-text",{staticClass:"results"},[e("div",{staticClass:"pa-4"},[e("v-btn",{attrs:{"x-large":"",rounded:"",color:"error"},on:{click:t.downloadResults}},[e("v-icon",{staticClass:"mr-2"},[t._v("mdi-download")]),t._v(" Download results ")],1)],1),e("v-divider",{staticClass:"mt-3 mb-3"}),e("h2",{staticClass:"display-2 text-center"},[t._v("Session 1")]),e("v-divider",{staticClass:"mt-3 mb-3"}),e("h3",{staticClass:"display-1 text-center"},[t._v("Learn results")]),e("v-divider",{staticClass:"mt-3 mb-3"}),e("test-result-view",{attrs:{result:t.learnResults[0],"learn-result":"","subset-id":0}}),e("v-divider",{staticClass:"mt-3 mb-3"}),e("h3",{staticClass:"display-1 text-center"},[t._v("Test results")]),e("v-divider",{staticClass:"mt-3 mb-3"}),e("test-result-view",{attrs:{result:t.testResults[0]}}),e("v-divider",{staticClass:"mt-3 mb-3"}),e("h2",{staticClass:"display-2 text-center"},[t._v("Session 2")]),e("v-divider",{staticClass:"mt-3 mb-3"}),e("h3",{staticClass:"display-1 text-center"},[t._v("Learn results")]),e("v-divider",{staticClass:"mt-3 mb-3"}),e("test-result-view",{attrs:{result:t.learnResults[1],"learn-result":"","subset-id":1}}),e("v-divider",{staticClass:"mt-3 mb-3"}),e("h3",{staticClass:"display-1 text-center"},[t._v("Test results")]),e("v-divider",{staticClass:"mt-3 mb-3"}),e("test-result-view",{attrs:{result:t.testResults[1]}})],1),e("v-card-actions",[e("v-btn",{attrs:{rounded:"",color:"primary",to:"/"}},[e("span",{staticClass:"ml-4 mr-4"},[t._v("Start new session")])])],1)],1)],1):t._e()},r=[],n=e("1da1"),i=(e("96cf"),e("2b0e")),l=e("1889"),o=e("8f45"),c=i["a"].extend({name:"ExperimentResult",components:{TestResultView:o["a"]},data:function(){return{}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:try{t.downloadResults()}catch(e){alert("Don't forget to download your results!")}if(console.log(t.learnResults),t.learnResults&&t.learnResults[0]&&0!==t.learnResults[0].history.length){s.next=7;break}return console.warn("No known game result, redirecting to homepage"),s.next=6,t.$router.push("/experiment");case 6:return s.abrupt("return",s.sent);case 7:return s.next=9,t.$store.dispatch("initRandomFlags");case 9:case"end":return s.stop()}}),s)})))()},methods:{downloadResults:function(){this.$store.dispatch("downloadResults")},toHms:function(t){return Object(l["a"])(t)}},computed:{learnResults:function(){return this.$store.state.learnResults},testResults:function(){return this.$store.state.testResults},countries:function(){return this.$store.state.countries},randomFlags:function(){return this.$store.state.randomFlags}}}),u=c,d=(e("ed57"),e("2877")),v=e("6544"),m=e.n(v),b=e("8336"),p=e("b0af"),f=e("99d9"),h=e("ce7e"),C=e("132d"),w=e("adda"),R=Object(d["a"])(u,a,r,!1,null,"13d531a8",null);s["default"]=R.exports;m()(R,{VBtn:b["a"],VCard:p["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VDivider:h["a"],VIcon:C["a"],VImg:w["a"]})},"714b":function(t,s,e){},ed57:function(t,s,e){"use strict";e("714b")}}]);
//# sourceMappingURL=chunk-4afb2cc9.6d8ad29b.js.map