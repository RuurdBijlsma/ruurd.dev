(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f6c082a"],{"05d1":function(t,e,a){},"6ba9":function(t,e,a){"use strict";a("05d1")},def6:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.movie?a("glow-column-page",{attrs:{"img-width":250*t.uiScale,"img-height":375*t.uiScale,src:t.movie.thumb}},[a("router-link",{staticClass:"show-title",attrs:{"no-style":"",to:"/movie/"+t.movie.ratingKey}},[a("h2",[t._v(t._s(t.movie.title))])]),a("data-header",{attrs:{item:t.movie}}),a("data-play",{staticClass:"mt-3",attrs:{item:t.movie}}),a("data-details",{attrs:{item:t.movie}}),a("item-row",{staticClass:"mt-13",attrs:{title:"Cast",items:t.movie.Role,size:130*t.uiScale,"section-key":t.movie.librarySectionID,type:"actor"}}),t._l(t.related,(function(e){return a("item-row",{staticClass:"mt-13",attrs:{title:e.title,size:130*t.uiScale,items:e.Metadata}})})),a("h3",{staticClass:"sub-header mt-13"},[t._v("Similar movies")]),a("v-chip-group",{attrs:{"show-arrows":""}},t._l(t.movie.Similar,(function(e){return a("v-chip",{key:e.id},[t._v(t._s(e.tag))])})),1)],2):t._e()},n=[],r=a("5530"),o=(a("96cf"),a("1da1")),s=a("2f62"),c=a("0aeb"),u=a("cd71"),l=a("a892"),m=a("a123"),d=a("4ac8"),h=a("907e"),p=a("4e19"),v=a("e16d"),f={name:"Show",components:{GlowColumnPage:v["a"],DataPlay:p["a"],DataHeader:h["a"],DataDetails:d["a"],ItemRow:l["a"],PlexImage:c["a"],MediaItem:u["a"]},data:function(){return{}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.restored;case 2:return console.log(5555,t.key),e.next=5,t.init();case 5:console.log(t.movie);case 6:case"end":return e.stop()}}),e)})))()},methods:Object(r["a"])({init:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.updateMetadata(t.key).then((function(t){return console.log("meta",t)})),t.updateMetadataRelated(t.key).then((function(t){return console.log("related",t)}));case 2:case"end":return e.stop()}}),e)})))()}},Object(s["b"])(["updateSectionLibrary","updateLibraryDirectory","updateMetadata","updateMetadataChildren","updateMetadataRelated"])),computed:Object(r["a"])({availableAt:function(){return m["a"].niceDate(new Date(this.movie.originallyAvailableAt))},key:function(){var t;return null!==(t=this.$route.params.key)&&void 0!==t?t:"1"},movie:function(){return this.$store.state.plex.content["metadata"+this.key]},related:function(){return this.$store.state.plex.content["metadataRelated"+this.key]}},Object(s["d"])({uiScale:function(t){return t.uiScale}})),watch:{key:function(){this.init()}}},w=f,b=(a("6ba9"),a("2877")),y=a("6544"),g=a.n(y),k=a("cc20"),S=a("ef9a"),C=Object(b["a"])(w,i,n,!1,null,"261702ea",null);e["default"]=C.exports;g()(C,{VChip:k["a"],VChipGroup:S["a"]})}}]);
//# sourceMappingURL=chunk-4f6c082a.5231e748.js.map