(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],f=0,p=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vuemusic/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"374e":function(e,t,n){"use strict";var r=n("9b4f"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o={name:"App",mounted:function(){}},i=o,c=(n("034f"),n("2877")),u=Object(c["a"])(i,a,s,!1,null,null,null),l=u.exports,f=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("md-content",{staticClass:"main-content",style:{height:""===e.activeSong.title?"100%":"calc(100% - 250px)"}},[n("h1",{staticClass:"title md-title"},[e._v("Liked Songs")]),n("md-button",{staticClass:"md-raised md-primary shuffle-button",on:{click:e.shufflePlay}},[e._v("Shuffle Play")]),n("div",{staticClass:"offline-switch"},[n("span",[e._v("Keep songs offline")]),n("md-switch",{model:{value:e.keepOffline,callback:function(t){e.keepOffline=t},expression:"keepOffline"}})],1),n("span",{staticClass:"offline-progress"},[e._v(e._s(e.offlineProgress))]),n("song-list",{staticClass:"song-list",attrs:{"active-song":e.activeSong,songs:e.songs},on:{play:e.playSong}})],1),""!==e.activeSong.title?n("md-content",{staticClass:"bottom-card md-primary"},[n("div",{staticClass:"song-card"},[n("div",{staticClass:"album-art",style:{"background-image":"url("+e.activeSong.albumArt+")"}}),n("div",{staticClass:"song-info"},[n("span",[e._v(e._s(e.activeSong.title))]),n("span",[e._v(e._s(e.activeSong.artist))])])]),n("div",{staticClass:"seek-bar",on:{mousedown:e.seekDown,touchstart:function(t){return e.seekDown(t.touches[0])}}},[n("span",{staticClass:"song-time"},[e._v(e._s(e.secondsToHms(e.songProgress*e.activeSong.duration)))]),n("div",{ref:"seekContainer",staticClass:"seek-container"},[n("div",{staticClass:"seek-progress",style:{width:Math.round(100*e.songProgress)+"%"}}),n("div",{staticClass:"seek-thumb",style:{left:"calc("+Math.round(100*e.songProgress)+"% - 16px / 2)"}})]),n("span",{staticClass:"song-duration"},[e._v(e._s(e.secondsToHms(e.activeSong.duration)))])]),n("div",{staticClass:"music-controls"},[n("md-button",{staticClass:"md-icon-button",on:{click:function(t){return e.toggleShuffle()}}},[n("md-icon",{style:e.shuffle?"opacity: 1":"opacity: 0.6"},[e._v("shuffle")])],1),n("md-button",{staticClass:"md-icon-button",on:{click:e.skipPrevious}},[n("md-icon",[e._v("skip_previous")])],1),n("md-button",{staticClass:"md-icon-button md-raised",on:{click:function(t){e.playing?e.pause():e.play()}}},[e.playing?n("md-icon",[e._v("pause")]):n("md-icon",[e._v("play_arrow")])],1),n("md-button",{staticClass:"md-icon-button",on:{click:e.skipNext}},[n("md-icon",[e._v("skip_next")])],1),n("md-button",{staticClass:"md-icon-button",on:{click:function(t){e.repeat=!e.repeat}}},[n("md-icon",{style:e.repeat?"opacity: 1":"opacity: 0.6"},[e._v("repeat")])],1)],1)]):e._e(),n("audio",{ref:"player",staticClass:"audio-player"})],1)},h=[],g=(n("28a5"),n("ac4d"),n("8a81"),n("ac6a"),n("5df3"),n("386d"),n("14b9"),n("f576"),n("6b54"),n("75fc")),d=(n("7f7f"),n("7514"),n("0d6d"),n("96cf"),n("3b8d")),m=(n("6762"),n("2fdb"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"song-list"},e._l(e.songs,(function(t){return n("md-list-item",{staticClass:"song-item",on:{click:function(n){return e.playSong(t)}}},[n("div",{staticClass:"md-list-item-text"},[n("span",{staticClass:"song-title"},[e._v(e._s(t.title))]),n("span",{staticClass:"song-artist"},[e._v(e._s(t.artist))])]),e.activeSong.id===t.id?n("md-button",{staticClass:"md-primary md-icon-button md-list-action md-disabled"},[n("md-icon",{staticClass:"song-options"},[e._v("volume_up")])],1):e._e(),n("md-button",{staticClass:"md-icon-button md-list-action"},[n("md-icon",{staticClass:"song-options"},[e._v("more_vert")])],1)],1)})),1)}),v=[],b={name:"SongList",props:{songs:Array,activeSong:Object},data:function(){return{}},methods:{playSong:function(e){this.$emit("play",e)}},mounted:function(){}},y=b,k=(n("b96a"),Object(c["a"])(y,m,v,!1,null,"4f9919ce",null)),w=k.exports,S=n("d225"),x=n("b0b4"),O=n("308d"),R=n("6bb5"),j=n("4e2b"),_=function(){function e(t){Object(S["a"])(this,e),this.baseUrl=t}return Object(x["a"])(e,[{key:"request",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.baseUrl+"/"+n.join("/"),{method:t,headers:{"Content-Type":"application/json"},body:void 0===r?void 0:JSON.stringify(r)});case 2:return a=e.sent,e.next=5,a.text();case 5:return s=e.sent,e.prev=6,e.abrupt("return",JSON.parse(s));case 10:e.prev=10,e.t0=e["catch"](6),console.log("Error parsing json response:",s);case 13:case"end":return e.stop()}}),e,this,[[6,10]])})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(t=a.length,n=new Array(t),r=0;r<t;r++)n[r]=a[r];return e.next=3,this.request("get",n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"post",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n=s.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=s[a];return console.info("[POST]",r,t),e.next=4,this.request("post",r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),C=function(e){function t(){return Object(S["a"])(this,t),Object(O["a"])(this,Object(R["a"])(t).call(this,""))}return Object(j["a"])(t,e),Object(x["a"])(t,[{key:"setServer",value:function(e){this.baseUrl=e}},{key:"search",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=!(a.length>1&&void 0!==a[1])||a[1],!n||null===localStorage.getItem("search"+t)){e.next=3;break}return e.abrupt("return",JSON.parse(localStorage["search"+t]));case 3:return e.next=5,this.get("search?query="+encodeURIComponent(t));case 5:return r=e.sent,localStorage["search"+t]=JSON.stringify(r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getStreamUrl",value:function(e){return this.baseUrl+"/stream/?id="+e}}]),t}(_),P=new C,M=function(){function e(){var t=this;Object(S["a"])(this,e),this.isReady=!1,this.requestSize=Math.pow(1024,3),this.events={},console.log("Instanced"),this.getFileSystem().then(function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.fileSystem=n,e.next=3,t.requestMoreQuota(t.requestSize);case 3:t.isReady=!0,t.fire("ready");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}return Object(x["a"])(e,[{key:"awaitReady",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){t.isReady&&e(),t.on("ready",(function(){console.log("resolving ready here"),e()}))})));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"exists",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:this.root,e.next=3,this.getFileByName(t,n);case 3:return e.t0=e.sent,e.t1=void 0,e.abrupt("return",e.t0!==e.t1);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getFileByName",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:this.root,e.next=3,this.getDirectoryFiles(n);case 3:return r=e.sent,e.abrupt("return",r.find((function(e){return e.name===t})));case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getDirectoryFiles",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:this.root,e.abrupt("return",new Promise((function(e,n){var r=t.createReader();r.readEntries((function(t){return e(t)}),(function(e){return n(e)}))})));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getFileSystem",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){window.webkitRequestFileSystem(window.PERSISTENT,0,(function(t){return e(t)}),(function(e){return t(e)}))})));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"requestMoreQuota",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){navigator.webkitPersistentStorage.requestQuota(t,(function(t){return e(t)}),(function(e){return n(e)}))})));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getCurrentQuota",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){navigator.webkitTemporaryStorage.queryUsageAndQuota((function(t,n){return e({usedBytes:t,grantedBytes:n})}),(function(e){return t(e)}))})));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"createFileFromBlob",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=s.length>2&&void 0!==s[2]?s[2]:this.root,e.next=3,this.createFile(t,r);case 3:return a=e.sent,e.next=6,this.writeToFile(n,a);case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"createFile",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:this.root,e.abrupt("return",new Promise((function(e,r){n.getFile(t,{create:!0},(function(t){return e(t)}),(function(e){return r(e)}))})));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"writeToFile",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){n.createWriter((function(n){n.onwriteend=function(t){return e(t)},n.onerror=function(e){return r(e)},n.write(t)}))})));case 1:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"on",value:function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}},{key:"off",value:function(e,t){this.events[e]&&this.events[e].splice(this.events.indexOf(t),1)}},{key:"fire",value:function(e){if(this.events[e]){var t=!0,n=!1,r=void 0;try{for(var a,s=this.events[e][Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var o=a.value;o()}}catch(i){n=!0,r=i}finally{try{t||null==s.return||s.return()}finally{if(n)throw r}}}}},{key:"root",get:function(){return this.fileSystem.root}}]),e}(),T=new M,A=location.href.includes("localhost")||location.href.includes("127.0.0.1"),N=A?"http://localhost:3000":"https://ruurd.dev:3000";P.setServer(N);var F={data:function(){return{offlineProgress:"",cachingAllSongs:!1,keepOffline:!1,timeUpdater:-1,songProgress:0,seeking:!1,songs:[],shuffledSongs:[],playing:!1,repeat:!0,shuffle:!1,activeSong:{title:"",artist:"",albumArt:""}}},mounted:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.token),navigator.onLine&&this.getToken(),!localStorage.getItem("songs")){e.next=10;break}console.log("Retrieving tracks from Cache"),this.songs=JSON.parse(localStorage.songs),Object.freeze(this.songs),console.log("Updating cached tracks from Spotify"),A||this.getTracks(t).then((function(e){a.songs=e.map(a.trackToSong),Object.freeze(a.songs),localStorage.songs=JSON.stringify(a.songs)})),e.next=17;break;case 10:return console.log("Retrieving tracks from Spotify"),e.next=13,this.getTracks(t);case 13:n=e.sent,this.songs=n.map(this.trackToSong),Object.freeze(this.songs),localStorage.songs=JSON.stringify(this.songs);case 17:console.log(this.songs),null!==localStorage.getItem("lastPlayed")&&(r=this.songs.find((function(e){return e.id===localStorage.lastPlayed})),r&&this.playSong(r,!0)),null!==localStorage.getItem("keepOffline")&&(console.log(1),this.keepOffline="true"===localStorage.keepOffline),document.addEventListener("mousemove",(function(e){return a.mouseMove(e)})),document.addEventListener("touchmove",(function(e){return a.mouseMove(e.touches[0])})),document.addEventListener("mouseup",(function(e){return a.mouseUp(e)})),document.addEventListener("touchend",(function(e){return a.mouseUp(e.touches[0])})),this.timeUpdater=setInterval((function(){var e=a.$refs.player.currentTime/a.activeSong.duration;e=Math.max(Math.min(e,1),0),a.songProgress=e}),200);case 25:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),beforeDestroy:function(){clearInterval(this.timeUpdater)},methods:{trackToSong:function(e){return e=e.track,{title:e.name,artist:e.artists.map((function(e){return e.name})).join(", "),duration:e.duration_ms/1e3,albumArt:e.album.images[0].url,id:e.id}},shufflePlay:function(){this.toggleShuffle(!0),this.playSong(this.shuffledSongs[0])},shuffleArray:function(e){var t,n,r=e.length;while(r)n=Math.floor(Math.random()*r--),t=e[r],e[r]=e[n],e[n]=t;return e},toggleShuffle:function(e){this.shuffle=void 0!==e?e:!this.shuffle,this.shuffle&&(this.shuffledSongs=this.shuffleArray(Object(g["a"])(this.songs)))},secondsToHms:function(e){if(isNaN(e)||void 0===e)return"0:00";e=Math.round(e);var t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=e%60;return t=t.toString(),n=n.toString(),r=r.toString(),"0"!==t&&(n=n.padStart(2,"0"),r=r.padStart(2,"0")),r=r.padStart(2,"0"),"0"===t?"".concat(n,":").concat(r):"".concat(t,":").concat(n,":").concat(r)},skipNext:function(){var e=this.songs.indexOf(this.activeSong);if(e===this.songs.length-1){if(!this.repeat)return void console.log("Not skipping, repeat is off");e=-1}this.shuffle?this.playSong(this.shuffledSongs[e+1]):this.playSong(this.songs[e+1])},skipPrevious:function(){var e=this.$refs.player;if(e.currentTime<5){var t=this.songs.indexOf(this.activeSong);0===t&&(t=this.songs.length),this.shuffle?this.playSong(this.shuffledSongs[t-1]):this.playSong(this.songs[t-1])}else e.currentTime=0},mouseUp:function(){this.seeking&&(this.seeking=!1)},mouseMove:function(e){this.seeking&&this.seekToEvent(e)},seekDown:function(e){this.seeking=!0,this.seekToEvent(e)},seekToEvent:function(e){var t=(e.pageX-this.$refs.seekContainer.offsetLeft)/this.$refs.seekContainer.offsetWidth;t=Math.max(Math.min(t,1),0),this.songProgress=t;var n=this.activeSong.duration;this.$refs.player.currentTime=n*t},play:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("play"),""!==this.activeSong.title){e.next=3;break}return e.abrupt("return");case 3:return this.playing=!0,e.next=6,this.$refs.player.play();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),pause:function(){console.log("pause"),this.playing=!1,this.$refs.player.pause()},setSongMetaData:function(e){var t=this;document.title=e.artist+" - "+e.title,"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:e.title,artist:e.artist,artwork:[{src:e.albumArt,type:"image/png"}]}),navigator.mediaSession.setActionHandler("play",Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.play();case 2:case"end":return e.stop()}}),e)})))),navigator.mediaSession.setActionHandler("pause",Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.pause();case 2:case"end":return e.stop()}}),e)})))),navigator.mediaSession.setActionHandler("previoustrack",(function(){t.skipNext()})),navigator.mediaSession.setActionHandler("nexttrack",(function(){t.skipPrevious()})))},getUrl:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Cache song:",t.title),e.next=3,T.awaitReady();case 3:if(!T.exists(t.id)){e.next=14;break}return console.log("Song available offline!",t.title),e.next=7,T.getFileByName(t.id);case 7:if(n=e.sent,console.log(n),!n){e.next=13;break}return e.abrupt("return",n.toURL());case 13:console.warn("File exists, but not found by fs.getFileByName :(, what happen?");case 14:return console.log("Song not available offline, searching Youtube"),r=t.artist+" - "+t.title,e.next=18,P.search(r);case 18:return a=e.sent,console.log("Youtube found results:",a),e.abrupt("return",P.getStreamUrl(a[0].id));case 21:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),cacheSong:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,s,o,i,c,u=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=u.length>1&&void 0!==u[1]&&u[1],!t.caching){e.next=4;break}return console.log("Song is already caching, return now"),e.abrupt("return");case 4:return e.next=6,T.awaitReady();case 6:return e.next=8,T.exists(t.id);case 8:if(!e.sent){e.next=11;break}return console.log("Song is already cached, return now"),e.abrupt("return");case 11:return console.log("Caching song ".concat(t.title)),t.caching=!0,r=t.artist+" - "+t.title,e.next=16,P.search(r);case 16:return a=e.sent,n&&console.log("Youtube found results:",a),s=P.getStreamUrl(a[0].id),n&&console.log("Starting song cache for offline use",t.title,"using url:",s),e.next=22,fetch(s);case 22:return o=e.sent,e.next=25,o.blob();case 25:return i=e.sent,e.next=28,T.createFileFromBlob(t.id,i);case 28:c=e.sent,n&&c.getMetadata((function(e){console.log("Song ".concat(t.title," caching complete: "),c,"metadata",e),t.caching=!1}));case 30:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),cacheAllSongs:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,s,o,i,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("Cache all songs called"),!this.cachingAllSongs){e.next=3;break}return e.abrupt("return");case 3:return console.log("Cache all songs executed"),this.cachingAllSongs=!0,e.next=7,T.awaitReady();case 7:t=10,n=0;case 9:if(!(n<this.songs.length)){e.next=36;break}for(this.offlineProgress="Downloading ".concat(n,"-").concat(n+10," out of ").concat(this.songs.length," songs..."),r=[],a=!0,s=!1,o=void 0,e.prev=15,i=this.songs.slice(n,n+t)[Symbol.iterator]();!(a=(c=i.next()).done);a=!0)u=c.value,r.push(this.cacheSong(u));e.next=23;break;case 19:e.prev=19,e.t0=e["catch"](15),s=!0,o=e.t0;case 23:e.prev=23,e.prev=24,a||null==i.return||i.return();case 26:if(e.prev=26,!s){e.next=29;break}throw o;case 29:return e.finish(26);case 30:return e.finish(23);case 31:return e.next=33,Promise.all(r);case 33:n+=t,e.next=9;break;case 36:this.cachingAllSongs=!1,this.offlineProgress="",console.log("Cache all songs complete");case 39:case"end":return e.stop()}}),e,this,[[15,19,23,31],[24,,26,30]])})));function t(){return e.apply(this,arguments)}return t}(),playSong:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,s=this,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=o.length>1&&void 0!==o[1]&&o[1],t.id!==this.activeSong.id){e.next=5;break}return this.$refs.player.currentTime=0,n||this.play(),e.abrupt("return");case 5:return localStorage.lastPlayed=t.id,this.activeSong=t,this.setSongMetaData(t),e.next=10,this.getUrl(t);case 10:r=e.sent,this.cacheSong(t),console.log("Playing song ".concat(t.title,", url: ").concat(r)),a=this.$refs.player,a.src=r,a.oncanplay=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s.playing=!n,n){e.next=4;break}return e.next=4,a.play();case 4:case"end":return e.stop()}}),e)}))),a.onended=function(){return s.skipNext()};case 17:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getTracks:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=[],r="https://api.spotify.com/v1/me/tracks?limit=50";case 2:if(!r){e.next=12;break}return e.next=5,fetch(r,{method:"GET",headers:{Authorization:"Bearer "+t.token}});case 5:return e.next=7,e.sent.json();case 7:a=e.sent,r=a.next,n.push(a),e.next=2;break;case 12:return s=n.map((function(e){return e.items})).reduce((function(e,t){return e.concat(t)})),e.abrupt("return",s);case 14:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getToken:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,s,o,i,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null===localStorage.getItem("token")){e.next=7;break}if(t=JSON.parse(localStorage.token),t.expires=+t.expires,n=Math.floor(+new Date/1e3),!(t.expires-n>=3e3)){e.next=7;break}return console.log("didnt request new token :)"),e.abrupt("return",t);case 7:if(r="cd272aa2194c46c7a460e9a202f66002",a=A?"http://localhost:8080/vuemusic/#/":"https://ruurd.dev/vuemusic/#/",!location.search.includes("error")){e.next=12;break}return document.write("Error, access was not granted"),e.abrupt("return");case 12:if(null===localStorage.getItem("state")&&(localStorage.state=Math.random()),location.hash.includes("access_token=")){e.next=17;break}return s="user-library-read",location.href="https://accounts.spotify.com/authorize?response_type=token&state=".concat(localStorage.state,"&client_id=").concat(r).concat(s?"&scope="+encodeURIComponent(s):"","&redirect_uri=").concat(encodeURIComponent(a)),e.abrupt("return");case 17:if(o=location.hash.split("access_token=")[1].split("&")[0],i=location.hash.split("token_type=")[1].split("&")[0],c=location.hash.split("expires_in=")[1].split("&")[0],u=location.hash.split("state=")[1].split("&")[0],this.$router.push("/"),u===localStorage.state){e.next=26;break}return document.write("Error, possible mitm attack, state doesn't match"),localStorage.state=Math.random(),e.abrupt("return");case 26:localStorage.state=Math.random(),localStorage.token=JSON.stringify({token:o,type:i,expires:Math.floor(+new Date/1e3)+ +c});case 28:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},watch:{keepOffline:function(){localStorage.keepOffline=this.keepOffline,this.keepOffline&&this.cacheAllSongs()}},name:"home",components:{SongList:w}},U=F,E=(n("374e"),Object(c["a"])(U,p,h,!1,null,"86b055ae",null)),$=E.exports;r["default"].use(f["a"]);var I=new f["a"]({routes:[{path:"/",name:"home",component:$},{path:"/access_token*",name:"Token redirect",component:$}]}),q=n("9483");Object(q["a"])("".concat("/vuemusic/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var J=n("9c30");n("51de"),n("9d4f");r["default"].use(J["MdButton"]),r["default"].use(J["MdContent"]),r["default"].use(J["MdList"]),r["default"].use(J["MdIcon"]),r["default"].use(J["MdSwitch"]),r["default"].config.productionTip=!1,new r["default"]({router:I,render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,n){},"9b4f":function(e,t,n){},"9d4f":function(e,t,n){},b96a:function(e,t,n){"use strict";var r=n("d27b"),a=n.n(r);a.a},d27b:function(e,t,n){}});
//# sourceMappingURL=app.ed58feaa.js.map