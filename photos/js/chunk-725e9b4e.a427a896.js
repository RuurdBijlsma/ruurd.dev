(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-725e9b4e"],{"0aa9":function(e,t,s){"use strict";s("3fb2")},"2d3b":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"search",staticClass:"search",style:{maxHeight:"calc(100vh - "+(e.$vuetify.application.top+e.$vuetify.application.bottom)+"px)",padding:e.pagePadding+"px"},on:{scroll:e.homeScroll}},[s("router-view"),!e.isPlace&&!e.loading&&e.allResults.length>0?s("h1",{staticClass:"search-query"},[e._v("‟"+e._s(e.query)+"”")]):e._e(),!e.loading&&e.allResults.length>0&&e.isLabel?s("p",{staticClass:"search-glossary"},[e._v(e._s(e.glossary))]):e._e(),e.isPlace&&null!==e.bounds?s("photo-map",{staticClass:"map-leaflet",style:{height:"450px",margin:"-"+e.pagePadding+"px -"+e.pagePadding+"px 0",width:"calc(100% + "+2*e.pagePadding+"px);"},attrs:{width:e.mapWidth,height:450,"start-bounds":e.bounds}}):e._e(),e.isPlace&&!e.loading&&e.allResults.length>0?s("h1",{staticClass:"search-query search-place"},[e._v("‟"+e._s(e.placeName)+"”")]):e.isPlace?s("div",{staticClass:"placeholder-map",style:{height:"450px"}}):e._e(),e.loading?s("div",{staticClass:"progress-center"},[s("v-progress-circular",{attrs:{color:"primary",size:e.$vuetify.breakpoint.width/4,indeterminate:""}})],1):0===e.allResults.length?s("div",{staticClass:"no-results"},[s("div",{staticClass:"no-results-center"},[s("v-icon",{staticClass:"icon",attrs:{"x-large":""}},[e._v("mdi-cloud-search-outline")]),s("div",{staticClass:"res-caption"},[e._v('No results found for "'+e._s(e.query)+'"')])],1)]):e._e(),e.loading?e._e():s("photo-grid",{directives:[{name:"show",rawName:"v-show",value:e.highResults.length>0,expression:"highResults.length > 0"}],ref:"photoGridHigh",attrs:{"usable-width":e.usableWidth,photos:e.highSlice}}),e.endIndex>=e.highResults.length&&0!==e.highResults.length&&0!==e.lowResults.length?s("h2",{staticClass:"mt-5 mb-5"},[e._v(" Less related results ")]):e._e(),e.loading?e._e():s("photo-grid",{directives:[{name:"show",rawName:"v-show",value:e.lowResults.length>0,expression:"lowResults.length > 0"}],ref:"photoGridLow",attrs:{"usable-width":e.usableWidth,photos:e.lowSlice}})],1)},i=[],n=s("1da1"),r=(s("96cf"),s("ac1f"),s("841c"),s("fb6a"),s("99af"),s("2b0e")),l=s("5024"),o=s("1a43"),c=s("c62a"),u=s("e11e"),h=s.n(u),d=r["a"].extend({name:"Search",components:{PhotoMap:c["a"],PhotoGrid:l["a"]},data:function(){return{api:o["a"],loading:!1,endIndex:100,prevScroll:-1e4,searchElement:{},photoGridLow:null,photoGridHigh:null,bounds:null}},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.searchElement=e.$refs.search,console.log(e.$vuetify),t.next=4,e.updateSearch();case 4:case"end":return t.stop()}}),t)})))()},methods:{updateSearch:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,e.bounds=null,t.next=4,e.$store.dispatch("search",e.query);case 4:if(!e.isPlace){t.next=11;break}return t.next=7,e.$store.dispatch("apiRequest",{url:"photos/boundingBox/".concat(e.placeName)});case 7:s=t.sent,a=h.a.latLng(s.minlat,s.minlng,0),i=h.a.latLng(s.maxlat,s.maxlng,0),e.bounds=h.a.latLngBounds(a,i).pad(.1);case 11:e.loading=!1;case 12:case"end":return t.stop()}}),t)})))()},homeScroll:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s=e.searchElement.scrollTop,!(Math.abs(e.prevScroll-s)<180)){t.next=3;break}return t.abrupt("return");case 3:e.prevScroll=s,a=e.searchElement.scrollHeight-s-e.searchElement.clientHeight,a<3e3&&e.endIndex<e.allResults.length&&(e.endIndex+=100);case 6:case"end":return t.stop()}}),t)})))()}},computed:{pagePadding:function(){return this.$vuetify.breakpoint.mobile?0:10},usableWidth:function(){return this.$vuetify.breakpoint.width-this.$vuetify.application.left-this.$vuetify.application.right-2*this.pagePadding-o["c"]},mapWidth:function(){return this.$vuetify.breakpoint.width-this.$vuetify.application.left-this.$vuetify.application.right},query:function(){return this.$route.params.query},highSlice:function(){return this.highResults.slice(0,this.endIndex)},lowSlice:function(){return this.lowResults.slice(0,this.endIndex-this.lowResults.length)},highResults:function(){return this.$store.state.searchResults.high},lowResults:function(){return this.$store.state.searchResults.low},allResults:function(){return this.highResults.concat(this.lowResults)},isLabel:function(){return"label"===this.$store.state.searchResults.searchType},isPlace:function(){return"place"===this.$store.state.searchResults.searchType},placeName:function(){return this.$store.state.searchResults.placeName},glossary:function(){return this.$store.state.searchResults.glossary}},watch:{query:function(){this.updateSearch()},allResults:function(){this.$store.commit("viewerQueue",this.allResults)},"$store.state.keepInView":function(){if(null!==this.$store.state.keepInView){var e=this.$refs.photoGridLow,t=this.$refs.photoGridHigh;e.scrollMediaIntoView(this.$store.state.keepInView),t.scrollMediaIntoView(this.$store.state.keepInView)}}}}),p=d,g=(s("0aa9"),s("2877")),f=s("6544"),m=s.n(f),w=s("132d"),v=s("490a"),b=Object(g["a"])(p,a,i,!1,null,"fb57aa18",null);t["default"]=b.exports;m()(b,{VIcon:w["a"],VProgressCircular:v["a"]})},"3fb2":function(e,t,s){}}]);
//# sourceMappingURL=chunk-725e9b4e.a427a896.js.map