(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d32f4c9a"],{"185b":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"nowPlaying",staticClass:"now-playing"},[e.track?s("v-sheet",{staticClass:"left"},[s("div",{staticClass:"blur-background",style:{backgroundImage:"url("+e.image+")"}}),s("div",{staticClass:"media"},[s("div",{staticClass:"media-container"},[s("div",{staticClass:"media-center"},[s("div",{staticClass:"swipe-container",on:{touchstart:e.startSwipe}},[s("glow-image",{staticClass:"album-image",attrs:{size:e.$store.state.windowWidth<400?200:300,url:e.image}}),s("div",{staticClass:"track-info"},[s("span",{staticClass:"track-title"},[e._v(e._s(e.track.name))]),s("artists-span",{staticClass:"track-artists",attrs:{artists:e.track.artists,grey:""}})],1)],1),s("media-seek",{staticClass:"seek"}),s("media-controls",{staticClass:"controls",attrs:{"fg-legible":e.$store.state.theme.fgLegible,full:"",large:""}})],1)]),s("div",{staticClass:"fsb-container"},[s("v-btn",{staticClass:"fullscreen-button",attrs:{title:"Toggle fullscreen",icon:"",small:""},on:{click:e.toggleFullScreen}},[s("v-icon",[e._v("mdi-fullscreen")])],1),e.mountQueue&&!e.hideQueue?s("v-btn",{staticClass:"fullscreen-button",attrs:{title:"Close queue list",icon:"",small:""},on:{click:function(t){e.hideQueue=!0}}},[s("v-icon",[e._v("mdi-menu-right")])],1):e.mountQueue?s("v-btn",{staticClass:"fullscreen-button",attrs:{title:"Open queue list",icon:"",small:""},on:{click:function(t){e.hideQueue=!1}}},[s("v-icon",[e._v("mdi-menu-left")])],1):e._e()],1)])]):e._e(),e.mountQueue?s("queue-list",{directives:[{name:"show",rawName:"v-show",value:!e.hideQueue,expression:"!hideQueue"}],ref:"list",staticClass:"queue",attrs:{height:"100%"}}):e._e()],1)},a=[],n=s("f966"),o=s("506b"),r=s("6e9c"),u=s("7628"),l=s("d498"),c={name:"NowPlaying",components:{MediaSeek:l["a"],ArtistsSpan:u["a"],MediaControls:r["a"],GlowImage:o["a"],QueueList:n["a"]},data:function(){return{hideQueue:null!==localStorage.getItem("hideNPQueue")&&JSON.parse(localStorage.hideNPQueue),startSwipeInfo:null}},mounted:function(){this.$store.dispatch("setThemeToItem",this.track),document.addEventListener("touchend",this.swipeEnd)},beforeDestroy:function(){document.removeEventListener("touchend",this.swipeEnd)},methods:{startSwipe:function(e){this.startSwipeInfo={down:!0,x:e.touches[0].pageX,y:e.touches[0].pageY,time:performance.now()}},swipeEnd:function(e){var t;if(null===(t=this.startSwipeInfo)||void 0===t?void 0:t.down){this.startSwipeInfo.down=!1;var s=this.startSwipeInfo.x,i=this.startSwipeInfo.y,a=e.changedTouches[0].pageX,n=e.changedTouches[0].pageY,o=Math.abs(n-i);if(!(o>150)){var r=a-s,u=performance.now()-this.startSwipeInfo.time;console.log(o,r,u),Math.abs(r)>150&&u<700&&(r>0?this.$store.dispatch("skip",-1):this.$store.dispatch("skip",1))}}},toggleFullScreen:function(){document.fullscreenElement?document.exitFullscreen():this.$refs.nowPlaying.requestFullscreen()},scrollToItem:function(){var e=this;this.intervals.push(setInterval((function(){e.$refs.list&&(e.$refs.list.scrollToItem(),e.clearIntervals())}),50))}},watch:{hideQueue:function(){localStorage.hideNPQueue=this.hideQueue,!1===this.hideQueue&&this.$refs.list.scrollToItem()},track:function(){this.$store.dispatch("setThemeToItem",this.track)}},computed:{mountQueue:function(){return this.$store.state.windowWidth>=1080},track:function(){return this.$store.state.media.track},image:function(){return this.$store.getters.itemImage(this.track)}},beforeRouteLeave:function(e,t,s){this.$store.dispatch("leavePage"),s()}},d=c,h=(s("b96a"),s("2877")),f=s("6544"),m=s.n(f),p=s("8336"),g=s("132d"),v=s("8dd9"),b=Object(h["a"])(d,i,a,!1,null,"6385b43e",null);t["default"]=b.exports;m()(b,{VBtn:p["a"],VIcon:g["a"],VSheet:v["a"]})},"2cb3":function(e,t,s){},"506b":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"glow-image",style:{width:e.size+"px"}},[s("div",{staticClass:"album-art album-background",style:{backgroundImage:"url("+e.image+")",opacity:e.$vuetify.theme.dark?.4:.7,minWidth:e.size+"px",height:e.size+"px",right:-e.size/2+"px",borderRadius:e.rounded?"50%":"5px",top:e.size/16+"px",filter:"blur("+e.size/16+"px)"}}),s("div",{staticClass:"album-art album-normal",style:{backgroundImage:"url("+e.image+")",minWidth:e.size+"px",height:e.size+"px",left:-e.size/2+"px",borderRadius:e.rounded?"50%":"5px"}})])},a=[],n=(s("a9e3"),{name:"GlowImage",props:{url:{type:String,default:void 0},size:{type:Number,default:300},rounded:{type:Boolean,default:!1}},computed:{image:function(){return this.url?this.url:this.$store.getters.notFoundImage}}}),o=n,r=(s("cfff"),s("2877")),u=Object(r["a"])(o,i,a,!1,null,"881e9648",null);t["a"]=u.exports},b5f96:function(e,t,s){},b96a:function(e,t,s){"use strict";s("2cb3")},cfff:function(e,t,s){"use strict";s("b5f96")}}]);
//# sourceMappingURL=chunk-d32f4c9a.04d75f68.js.map