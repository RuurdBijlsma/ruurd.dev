(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64106f0c"],{"2d3b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.restored?r("div",{staticClass:"results-page"},[r("h2",[e._v("Search results for “"+e._s(e.query)+"”")]),e._l(e.filteredResults,(function(t){return r("item-row",{key:t.hubIdentifier,staticClass:"mb-10",attrs:{size:("episode"===t.type?250:150)*e.uiScale,title:t.title,"show-context":"",items:e.getChildren(t)}})}))],2):e._e()},s=[],i=(r("4de4"),r("ac1f"),r("841c"),r("5530")),u=(r("96cf"),r("1da1")),c=r("a892"),o=r("2f62"),a={name:"Search",components:{ItemRow:c["a"]},data:function(){return{restored:!1}},mounted:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.restored;case 2:e.restored=!0,e.init();case 4:case"end":return t.stop()}}),t)})))()},methods:Object(i["a"])({init:function(){var e=this;this.$store.commit("addRecentSearch",this.query),this.searchPlex({query:this.query}).then((function(t){console.log(t),e.$store.commit("saveResults",{query:e.query,results:t})}))},getChildren:function(e){var t;return null!==(t=e.Metadata)&&void 0!==t?t:e.Directory}},Object(o["b"])(["searchPlex"])),computed:Object(i["a"])({query:function(){var e;return null!==(e=this.$route.query.query)&&void 0!==e?e:""},filteredResults:function(){var e,t,r,n=null!==(e=null===(t=this.staticResults)||void 0===t||null===(r=t.results)||void 0===r?void 0:r.filter((function(e){return e.size>0})))&&void 0!==e?e:[];return console.log("Results",n),n},sectionKey:function(){var e;return null!==(e=this.$route.params.sectionKey)&&void 0!==e?e:void 0}},Object(o["d"])({staticResults:function(e){return e.search.staticResults},uiScale:function(e){return e.uiScale}})),watch:{query:function(){this.init()}}},l=a,d=(r("ae45"),r("2877")),f=Object(d["a"])(l,n,s,!1,null,"20b9225a",null);t["default"]=f.exports},"36db":function(e,t,r){},ae45:function(e,t,r){"use strict";r("36db")}}]);
//# sourceMappingURL=chunk-64106f0c.216816d5.js.map