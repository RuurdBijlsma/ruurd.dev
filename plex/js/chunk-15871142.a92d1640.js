(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15871142"],{"0720":function(t,e,i){},"3a2f":function(t,e,i){"use strict";i("a9e3");var a=i("ade3"),n=(i("9734"),i("4ad4")),s=i("a9ad"),o=i("16b7"),r=i("b848"),c=i("75eb"),l=i("f573"),u=i("f2e7"),h=i("80d2"),d=i("d9bd"),m=i("58df");e["a"]=Object(m["a"])(s["a"],o["a"],r["a"],c["a"],l["a"],u["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,a=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||a?s=n+e.width/2-i.width/2:(this.left||this.right)&&(s=n+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,a=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=a+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=a+e.height/2-i.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(n+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(h["f"])(this.maxWidth),minWidth:Object(h["f"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(h["p"])(this,"activator",!0)&&Object(d["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=n["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===h["s"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(a["a"])(t,this.contentClass,!0),Object(a["a"])(t,"menuable__content__active",this.isActive),Object(a["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"4ac8":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.item.summary?i("p",{staticClass:"show-summary mt-3"},[t._v(t._s(t.item.summary))]):t._e(),i("div",{staticClass:"data-details"},[i("p",{staticClass:"show-detail"},t._l(t.item.Genre,(function(e,a){return i("span",{key:e.id},[i("router-link",{staticClass:"show-value",attrs:{"no-style":"",to:"/library/"+t.item.librarySectionID+"/?filter=genre~"+e.id}},[t._v(t._s(e.tag))]),a<t.item.Genre.length-1?i("span",[t._v(" • ")]):t._e()],1)})),0),t.item.Director&&t.item.Director.length>0?i("p",{staticClass:"show-detail mt-3"},[t._v("Directed by: "),t._l(t.item.Director,(function(e,a){return i("span",{key:e.id},[i("router-link",{staticClass:"show-value",attrs:{"no-style":"",to:"/library/"+t.item.librarySectionID+"/?filter=director~"+e.id}},[t._v(t._s(e.tag))]),a<t.item.Director.length-1?i("span",[t._v(", ")]):t._e()],1)}))],2):t._e(),t.item.Writer&&t.item.Writer.length>0?i("p",{staticClass:"show-detail"},[t._v("Written by: "),t._l(t.item.Writer,(function(e,a){return i("span",{key:e.id},[i("router-link",{staticClass:"show-value",attrs:{"no-style":"",to:"/library/"+t.item.librarySectionID+"/?filter=writer~"+e.id}},[t._v(t._s(e.tag))]),a<t.item.Writer.length-1?i("span",[t._v(", ")]):t._e()],1)}))],2):t._e(),t.item.Country&&t.item.Country.length>0?i("p",{staticClass:"show-detail"},[t._v("Created in: "),t._l(t.item.Country,(function(e,a){return i("span",{key:e.id},[i("router-link",{staticClass:"show-value",attrs:{"no-style":"",to:"/library/"+t.item.librarySectionID+"/?filter=country~"+e.id}},[t._v(t._s(e.tag))]),a<t.item.Country.length-1?i("span",[t._v(", ")]):t._e()],1)}))],2):t._e(),t.item.studio?i("p",{staticClass:"show-detail"},[t._v("Studio: "),i("router-link",{staticClass:"show-value",attrs:{"no-style":"",to:"/library/"+t.item.librarySectionID+"/?filter=studio~"+t.item.studio}},[t._v(" "+t._s(t.item.studio)+" ")])],1):t._e()])])},n=[],s={name:"DataDetails",props:{item:{type:Object,default:null}},computed:{}},o=s,r=(i("837f"),i("2877")),c=Object(r["a"])(o,a,n,!1,null,"06bf5922",null);e["a"]=c.exports},"4e19":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"episode-buttons"},[i("play-fab",{staticClass:"play-button",attrs:{item:t.item,text:""}}),i("div",["playlist"!==t.item.type?i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"ml-5",attrs:{plain:"",loading:t.loadingScrobble,icon:""},on:{click:t.loadToggleWatched}},"v-btn",n,!1),a),[t.watched?i("v-icon",[t._v("mdi-checkbox-marked-circle-outline")]):i("v-icon",[t._v("mdi-checkbox-blank-circle-outline")])],1)]}}],null,!1,1831075211)},[i("span",[t._v("Mark as "),t.watched?i("span",[t._v("un")]):t._e(),t._v("watched")])]):t._e(),i("media-item-menu",{attrs:{item:t.item}})],1)],1)},n=[],s=(i("96cf"),i("1da1")),o=i("5530"),r=i("2f62"),c=i("2dac"),l=i("8be2"),u={name:"DataPlay",components:{PlayFab:l["a"],MediaItemMenu:c["a"]},props:{item:{type:Object,default:null}},data:function(){return{loadingScrobble:!1}},methods:Object(o["a"])({loadToggleWatched:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loadingScrobble=!0,e.next=3,t.toggleWatched(t.item);case 3:t.loadingScrobble=!1;case 4:case"end":return e.stop()}}),e)})))()}},Object(r["b"])(["toggleWatched"])),computed:Object(o["a"])(Object(o["a"])({watched:function(){var t=this.watchedKeys[this.item.ratingKey];return void 0!==t?t:this.itemWatched(this.item)}},Object(r["c"])(["itemWatched"])),Object(r["d"])({watchedKeys:function(t){return t.plex.watchedKeys}}))},h=u,d=(i("6585"),i("2877")),m=i("6544"),p=i.n(m),f=i("8336"),v=i("132d"),g=i("3a2f"),b=Object(d["a"])(h,a,n,!1,null,"0b483f72",null);e["a"]=b.exports;p()(b,{VBtn:f["a"],VIcon:v["a"],VTooltip:g["a"]})},"55ab":function(t,e,i){"use strict";i("8524")},"60fc":function(t,e,i){"use strict";i("c71a")},6585:function(t,e,i){"use strict";i("ee53")},"7b18":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.season?i("glow-column-page",{attrs:{src:t.season.thumb,"img-width":200*t.uiScale,"img-height":300*t.uiScale}},[i("router-link",{staticClass:"show-title",attrs:{"no-style":"",to:"/show/"+t.season.parentRatingKey}},[i("h2",[t._v(t._s(t.season.parentTitle))])]),i("router-link",{staticClass:"show-value",attrs:{"no-style":"",to:"/season/"+t.season.ratingKey}},[i("p",[t._v(t._s(t.season.title))])]),i("v-divider"),i("data-details",{staticClass:"mt-2",attrs:{item:t.season}}),i("data-play",{staticClass:"mt-3",attrs:{item:t.season}}),i("h3",{staticClass:"sub-header",class:{"mt-13":t.season.summary}},[t._v("Episodes")]),i("div",{staticClass:"seasons"},t._l(t.episodes,(function(e){return i("media-item",{staticClass:"season",attrs:{item:e,size:250*t.uiScale}})})),1)],1):t._e()},n=[],s=i("5530"),o=(i("96cf"),i("1da1")),r=i("2f62"),c=i("0aeb"),l=i("cd71"),u=i("a892"),h=i("4ac8"),d=i("4e19"),m=i("e16d"),p={name:"Season",components:{GlowColumnPage:m["a"],DataPlay:d["a"],DataDetails:h["a"],ItemRow:u["a"],PlexImage:c["a"],MediaItem:l["a"]},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.restored;case 2:return e.next=4,t.init();case 4:console.log(t.season);case 5:case"end":return e.stop()}}),e)})))()},methods:Object(s["a"])({init:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.updateMetadata(t.key).then((function(t){return console.log("meta",t)})),t.updateMetadataChildren(t.key).then((function(t){return console.log("child",t)}));case 2:case"end":return e.stop()}}),e)})))()}},Object(r["b"])(["updateSectionLibrary","updateLibraryDirectory","updateMetadata","updateMetadataChildren","updateMetadataRelated"])),computed:Object(s["a"])({key:function(){var t;return null!==(t=this.$route.params.key)&&void 0!==t?t:"1"},season:function(){return this.$store.state.plex.content["metadata"+this.key]},episodes:function(){return this.$store.state.plex.content["metadataChildren"+this.key]}},Object(r["d"])({uiScale:function(t){return t.uiScale}})),watch:{key:function(){this.init()}}},f=p,v=(i("55ab"),i("2877")),g=i("6544"),b=i.n(g),y=i("ce7e"),_=Object(v["a"])(f,a,n,!1,null,"0f15c0d7",null);e["default"]=_.exports;b()(_,{VDivider:y["a"]})},"837f":function(t,e,i){"use strict";i("0720")},8524:function(t,e,i){},9734:function(t,e,i){},c71a:function(t,e,i){},e16d:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"glow-column-page"},[i("div",{staticClass:"left-column"},[i("plex-image",{staticClass:"ml-6",attrs:{glow:"",rounding:"10px",src:t.src,width:t.imgWidth,height:t.imgHeight}})],1),i("div",{staticClass:"right-column",style:{width:"calc(100% - "+Math.round(t.imgWidth)+"px - 24px - 50px)",marginLeft:"calc("+Math.round(t.imgWidth)+"px + 24px + 50px)"}},[t._t("default")],2)])},n=[],s=(i("a9e3"),i("0aeb")),o={name:"GlowColumnPage",components:{PlexImage:s["a"]},props:{imgWidth:{type:Number,default:200},imgHeight:{type:Number,default:200},src:{type:String,default:""}}},r=o,c=(i("60fc"),i("2877")),l=Object(c["a"])(r,a,n,!1,null,"16ae884e",null);e["a"]=l.exports},ee53:function(t,e,i){}}]);
//# sourceMappingURL=chunk-15871142.a92d1640.js.map