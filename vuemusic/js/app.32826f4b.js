(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],f=0,p=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},s={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vuemusic/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),s=n.n(r);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],o={name:"App",mounted:function(){}},i=o,c=(n("034f"),n("2877")),u=Object(c["a"])(i,s,a,!1,null,null,null),l=u.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("md-content",{staticClass:"main-content",style:{height:""===t.activeSong.title?"100%":"calc(100% - 250px)"}},[n("h1",{staticClass:"title md-title"},[t._v("Liked Songs")]),n("md-button",{staticClass:"md-raised md-primary shuffle-button",on:{click:t.shufflePlay}},[t._v("Shuffle Play")]),n("song-list",{staticClass:"song-list",attrs:{"active-song":t.activeSong,songs:t.songs},on:{play:t.playSong}})],1),""!==t.activeSong.title?n("md-content",{staticClass:"bottom-card md-primary"},[n("div",{staticClass:"song-card"},[n("div",{staticClass:"album-art",style:{"background-image":"url("+t.activeSong.albumArt+")"}}),n("div",{staticClass:"song-info"},[n("span",[t._v(t._s(t.activeSong.title))]),n("span",[t._v(t._s(t.activeSong.artist))])])]),n("div",{staticClass:"seek-bar",on:{mousedown:t.seekDown,touchstart:function(e){return t.seekDown(e.touches[0])}}},[n("span",{staticClass:"song-time"},[t._v(t._s(t.secondsToHms(t.songProgress*t.activeSong.duration)))]),n("div",{ref:"seekContainer",staticClass:"seek-container"},[n("div",{staticClass:"seek-progress",style:{width:Math.round(100*t.songProgress)+"%"}}),n("div",{staticClass:"seek-thumb",style:{left:"calc("+Math.round(100*t.songProgress)+"% - 16px / 2)"}})]),n("span",{staticClass:"song-duration"},[t._v(t._s(t.secondsToHms(t.activeSong.duration)))])]),n("div",{staticClass:"music-controls"},[n("md-button",{staticClass:"md-icon-button",on:{click:function(e){return t.toggleShuffle()}}},[n("md-icon",{style:t.shuffle?"opacity: 1":"opacity: 0.6"},[t._v("shuffle")])],1),n("md-button",{staticClass:"md-icon-button",on:{click:t.skipPrevious}},[n("md-icon",[t._v("skip_previous")])],1),n("md-button",{staticClass:"md-icon-button md-raised",on:{click:function(e){t.playing?t.pause():t.play()}}},[t.playing?n("md-icon",[t._v("pause")]):n("md-icon",[t._v("play_arrow")])],1),n("md-button",{staticClass:"md-icon-button",on:{click:t.skipNext}},[n("md-icon",[t._v("skip_next")])],1),n("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.repeat=!t.repeat}}},[n("md-icon",{style:t.repeat?"opacity: 1":"opacity: 0.6"},[t._v("repeat")])],1)],1)]):t._e(),n("audio",{ref:"player",staticClass:"audio-player"})],1)},h=[],d=(n("28a5"),n("386d"),n("14b9"),n("f576"),n("6b54"),n("75fc")),g=(n("7f7f"),n("7514"),n("96cf"),n("3b8d")),m=(n("6762"),n("2fdb"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"song-list"},t._l(t.songs,(function(e){return n("md-list-item",{staticClass:"song-item",on:{click:function(n){return t.playSong(e)}}},[n("div",{staticClass:"md-list-item-text"},[n("span",{staticClass:"song-title"},[t._v(t._s(e.title))]),n("span",{staticClass:"song-artist"},[t._v(t._s(e.artist))])]),t.activeSong.id===e.id?n("md-button",{staticClass:"md-primary md-icon-button md-list-action md-disabled"},[n("md-icon",{staticClass:"song-options"},[t._v("volume_up")])],1):t._e(),n("md-button",{staticClass:"md-icon-button md-list-action"},[n("md-icon",{staticClass:"song-options"},[t._v("more_vert")])],1)],1)})),1)}),v=[],b={name:"SongList",props:{songs:Array,activeSong:Object},data:function(){return{}},methods:{playSong:function(t){this.$emit("play",t)}},mounted:function(){}},y=b,k=(n("b96a"),Object(c["a"])(y,m,v,!1,null,"4f9919ce",null)),S=k.exports,w=n("d225"),x=n("b0b4"),_=n("308d"),O=n("6bb5"),j=n("4e2b"),C=function(){function t(e){Object(w["a"])(this,t),this.baseUrl=e}return Object(x["a"])(t,[{key:"request",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(e,n,r){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.baseUrl+"/"+n.join("/"),{method:e,headers:{"Content-Type":"application/json"},body:void 0===r?void 0:JSON.stringify(r)});case 2:return s=t.sent,t.next=5,s.text();case 5:return a=t.sent,t.prev=6,t.abrupt("return",JSON.parse(a));case 10:t.prev=10,t.t0=t["catch"](6),console.log("Error parsing json response:",a);case 13:case"end":return t.stop()}}),t,this,[[6,10]])})));function e(e,n,r){return t.apply(this,arguments)}return e}()},{key:"get",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e,n,r,s=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(e=s.length,n=new Array(e),r=0;r<e;r++)n[r]=s[r];return t.next=3,this.request("get",n);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"post",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(e){var n,r,s,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n=a.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=a[s];return console.info("[POST]",r,e),t.next=4,this.request("post",r,e);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),R=function(t){function e(){return Object(w["a"])(this,e),Object(_["a"])(this,Object(O["a"])(e).call(this,""))}return Object(j["a"])(e,t),Object(x["a"])(e,[{key:"setServer",value:function(t){this.baseUrl=t}},{key:"search",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.get("search?query="+encodeURIComponent(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getStreamUrl",value:function(t){return this.baseUrl+"/stream/?id="+t}}]),e}(C),M=new R,T=location.href.includes("localhost")||location.href.includes("127.0.0.1"),P=T?"http://localhost:3000":"https://ruurd.dev:3000";M.setServer(P);var A={data:function(){return{timeUpdater:-1,songProgress:0,seeking:!1,songs:[],shuffledSongs:[],playing:!1,repeat:!0,shuffle:!1,activeSong:{title:"",artist:"",albumArt:""}}},mounted:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e,n,r,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.getToken(),e=JSON.parse(localStorage.token),!localStorage.getItem("songs")){t.next=9;break}console.log("Retrieving tracks from Cache"),this.songs=JSON.parse(localStorage.songs),console.log("Updating cached tracks from Spotify"),this.getTracks(e).then((function(t){s.songs=t.map(s.trackToSong),localStorage.songs=JSON.stringify(s.songs)})),t.next=15;break;case 9:return console.log("Retrieving tracks from Spotify"),t.next=12,this.getTracks(e);case 12:n=t.sent,this.songs=n.map(this.trackToSong),localStorage.songs=JSON.stringify(this.songs);case 15:console.log(this.songs),null!==localStorage.getItem("lastPlayed")&&(r=this.songs.find((function(t){return t.id===localStorage.lastPlayed})),r&&this.playSong(r,!0)),document.addEventListener("mousemove",(function(t){return s.mouseMove(t)})),document.addEventListener("touchmove",(function(t){return s.mouseMove(t.touches[0])})),document.addEventListener("mouseup",(function(t){return s.mouseUp(t)})),document.addEventListener("touchend",(function(t){return s.mouseUp(t.touches[0])})),this.timeUpdater=setInterval((function(){var t=s.$refs.player.currentTime/s.activeSong.duration;t=Math.max(Math.min(t,1),0),s.songProgress=t}),200);case 22:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeDestroy:function(){clearInterval(this.timeUpdater)},methods:{trackToSong:function(t){return t=t.track,{title:t.name,artist:t.artists.map((function(t){return t.name})).join(", "),duration:t.duration_ms/1e3,albumArt:t.album.images[0].url,id:t.id}},shufflePlay:function(){this.toggleShuffle(!0),this.playSong(this.shuffledSongs[0])},shuffleArray:function(t){var e,n,r=t.length;while(r)n=Math.floor(Math.random()*r--),e=t[r],t[r]=t[n],t[n]=e;return t},toggleShuffle:function(t){this.shuffle=void 0!==t?t:!this.shuffle,this.shuffle&&(this.shuffledSongs=this.shuffleArray(Object(d["a"])(this.songs)))},secondsToHms:function(t){if(isNaN(t)||void 0===t)return"0:00";t=Math.round(t);var e=Math.floor(t/3600),n=Math.floor(t%3600/60),r=t%60;return e=e.toString(),n=n.toString(),r=r.toString(),"0"!==e&&(n=n.padStart(2,"0"),r=r.padStart(2,"0")),r=r.padStart(2,"0"),"0"===e?"".concat(n,":").concat(r):"".concat(e,":").concat(n,":").concat(r)},skipNext:function(){var t=this.songs.indexOf(this.activeSong);if(t===this.songs.length-1){if(!this.repeat)return void console.log("Not skipping, repeat is off");t=-1}this.shuffle?this.playSong(this.shuffledSongs[t+1]):this.playSong(this.songs[t+1])},skipPrevious:function(){var t=this.$refs.player;if(t.currentTime<5){var e=this.songs.indexOf(this.activeSong);0===e&&(e=this.songs.length),this.shuffle?this.playSong(this.shuffledSongs[e-1]):this.playSong(this.songs[e-1])}else t.currentTime=0},mouseUp:function(){this.seeking&&(this.seeking=!1)},mouseMove:function(t){this.seeking&&this.seekToEvent(t)},seekDown:function(t){this.seeking=!0,this.seekToEvent(t)},seekToEvent:function(t){var e=(t.pageX-this.$refs.seekContainer.offsetLeft)/this.$refs.seekContainer.offsetWidth;e=Math.max(Math.min(e,1),0),this.songProgress=e;var n=this.activeSong.duration;this.$refs.player.currentTime=n*e},play:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("play"),""!==this.activeSong.title){t.next=3;break}return t.abrupt("return");case 3:return this.playing=!0,t.next=6,this.$refs.player.play();case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),pause:function(){console.log("pause"),this.playing=!1,this.$refs.player.pause()},setSongMetaData:function(t){var e=this;document.title=t.artist+" - "+t.title,"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:t.title,artist:t.artist,artwork:[{src:t.albumArt,type:"image/png"}]}),navigator.mediaSession.setActionHandler("play",Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.play();case 2:case"end":return t.stop()}}),t)})))),navigator.mediaSession.setActionHandler("pause",Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.pause();case 2:case"end":return t.stop()}}),t)})))),navigator.mediaSession.setActionHandler("previoustrack",(function(){e.skipNext()})),navigator.mediaSession.setActionHandler("nexttrack",(function(){e.skipPrevious()})))},playSong:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(e){var n,r,s,a,o,i=this,c=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=c.length>1&&void 0!==c[1]&&c[1],e.id!==this.activeSong.id){t.next=5;break}return this.$refs.player.currentTime=0,n||this.play(),t.abrupt("return");case 5:return localStorage.lastPlayed=e.id,this.activeSong=e,this.setSongMetaData(e),r=e.artist+" - "+e.title,t.next=11,M.search(r);case 11:s=t.sent,a=M.getStreamUrl(s[0].id),o=this.$refs.player,o.src=a,o.oncanplay=Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i.playing=!n,n){t.next=4;break}return t.next=4,o.play();case 4:case"end":return t.stop()}}),t)}))),o.onended=function(){return i.skipNext()};case 17:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getTracks:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(e){var n,r,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=[],r="https://api.spotify.com/v1/me/tracks?limit=50";case 2:if(!r){t.next=12;break}return t.next=5,fetch(r,{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 5:return t.next=7,t.sent.json();case 7:s=t.sent,r=s.next,n.push(s),t.next=2;break;case 12:return a=n.map((function(t){return t.items})).reduce((function(t,e){return t.concat(e)})),t.abrupt("return",a);case 14:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),getToken:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e,n,r,s,a,o,i,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null===localStorage.getItem("token")){t.next=7;break}if(e=JSON.parse(localStorage.token),e.expires=+e.expires,n=Math.floor(+new Date/1e3),!(e.expires-n>=3e3)){t.next=7;break}return console.log("didnt request new token :)"),t.abrupt("return",e);case 7:if(r="cd272aa2194c46c7a460e9a202f66002",s=T?"http://localhost:8080/vuemusic/#/":"https://ruurd.dev/vuemusic/#/",!location.search.includes("error")){t.next=12;break}return document.write("Error, access was not granted"),t.abrupt("return");case 12:if(null===localStorage.getItem("state")&&(localStorage.state=Math.random()),location.hash.includes("access_token=")){t.next=17;break}return a="user-library-read",location.href="https://accounts.spotify.com/authorize?response_type=token&state=".concat(localStorage.state,"&client_id=").concat(r).concat(a?"&scope="+encodeURIComponent(a):"","&redirect_uri=").concat(encodeURIComponent(s)),t.abrupt("return");case 17:if(o=location.hash.split("access_token=")[1].split("&")[0],i=location.hash.split("token_type=")[1].split("&")[0],c=location.hash.split("expires_in=")[1].split("&")[0],u=location.hash.split("state=")[1].split("&")[0],this.$router.push("/"),u===localStorage.state){t.next=26;break}return document.write("Error, possible mitm attack, state doesn't match"),localStorage.state=Math.random(),t.abrupt("return");case 26:localStorage.state=Math.random(),localStorage.token=JSON.stringify({token:o,type:i,expires:Math.floor(+new Date/1e3)+ +c});case 28:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},name:"home",components:{SongList:S}},N=A,U=(n("5994"),Object(c["a"])(N,p,h,!1,null,"0442d6b2",null)),E=U.exports;r["default"].use(f["a"]);var $=new f["a"]({routes:[{path:"/",name:"home",component:E},{path:"/access_token*",name:"Token redirect",component:E}]}),J=n("9483");Object(J["a"])("".concat("/vuemusic/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var I=n("43f9"),D=n.n(I);n("51de"),n("9d4f");r["default"].use(D.a),r["default"].config.productionTip=!1,new r["default"]({router:$,render:function(t){return t(l)}}).$mount("#app")},5994:function(t,e,n){"use strict";var r=n("ca36"),s=n.n(r);s.a},"64a9":function(t,e,n){},"9d4f":function(t,e,n){},b96a:function(t,e,n){"use strict";var r=n("d27b"),s=n.n(r);s.a},ca36:function(t,e,n){},d27b:function(t,e,n){}});
//# sourceMappingURL=app.32826f4b.js.map