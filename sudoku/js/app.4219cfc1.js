(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e9740":"e5656ab8","chunk-2d22d746":"d4e93d1b","chunk-3203c606":"025400f1","chunk-5137eb82":"3c1b2666","chunk-b54475ec":"a38b0008"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-3203c606":1,"chunk-5137eb82":1,"chunk-b54475ec":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0e9740":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-3203c606":"fe7e8641","chunk-5137eb82":"94ed6876","chunk-b54475ec":"6233554a"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/sudoku/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"0781":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{on:{submit:function(t){return t.preventDefault(),e.pushSearchTerm(t)}}},[n("v-text-field",{attrs:{clearable:"",outlined:"",label:"Search","prepend-inner-icon":"mdi-magnify",dense:""},on:{"click:clear":function(t){e.$store.state.search.liveTerm=""},click:e.goSearch},model:{value:e.$store.state.search.liveTerm,callback:function(t){e.$set(e.$store.state.search,"liveTerm",t)},expression:"$store.state.search.liveTerm"}})],1)},a=[],o=(n("caad"),n("b0c0"),n("ac1f"),n("2532"),n("841c"),n("1276"),n("3835")),i=(n("96cf"),n("1da1")),s={name:"SearchInput",methods:{goSearch:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("Search"===e.$route.name){t.next=3;break}return t.next=3,e.pushSearchTerm();case 3:case"end":return t.stop()}}),t)})))()},pushSearchTerm:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="",null!==e.term&&""!==e.term&&(n="?term=".concat(encodeURIComponent(e.term))),t.next=4,e.$router.push("/search".concat(n));case 4:case"end":return t.stop()}}),t)})))()}},watch:{term:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.term||!e.term.includes("open.spotify.com/")){t.next=7;break}return n=e.term.split("spotify.com/")[1].split("?")[0],r=n.split("/"),a=Object(o["a"])(r,2),i=a[0],s=a[1],t.next=5,e.$router.push(e.$store.getters.relativeItemUrl({type:i,id:s,name:i[0]}));case 5:e.$store.dispatch("addSnack",{text:"Navigated to Spotify™ link"}).then(),e.$store.commit("liveTerm","");case 7:case"end":return t.stop()}}),t)})))()}},computed:{term:function(){return this.$store.state.search.liveTerm}}},c=s,l=n("2877"),u=n("6544"),f=n.n(u),d=n("4bd4"),m=n("8654"),h=Object(l["a"])(c,r,a,!1,null,"be7723ba",null);t["a"]=h.exports;f()(h,{VForm:d["a"],VTextField:m["a"]})},"21b2":function(e,t,n){},2284:function(e,t,n){"use strict";var r=n("21b2"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"app",style:e.cssProps},[n("tool-bar"),e.$store.getters.scale>=2?n("v-navigation-drawer",{attrs:{permanent:!0,"mini-variant":e.$store.state.miniDrawer,app:"",absolute:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("nav-content",{attrs:{"mini-variant":e.$store.state.miniDrawer,navigation:e.navigation}})],1):e._e(),n("v-main",[n("router-view",{staticClass:"router-view"})],1),e._l(e.$store.state.snackbars,(function(t){return n("v-snackbar",{attrs:{app:"",timeout:t.timeout,outlined:!e.$vuetify.theme.dark,color:"primary"},scopedSlots:e._u([{key:"action",fn:function(r){var a=r.attrs;return[n("v-btn",e._b({attrs:{text:"",color:e.$vuetify.theme.dark?"default":"primary"},on:{click:function(e){t.open=!1}}},"v-btn",a,!1),[e._v(" Dismiss ")])]}}],null,!0),model:{value:t.open,callback:function(n){e.$set(t,"open",n)},expression:"snack.open"}},[e._v(" "+e._s(t.text)+" ")])})),e.$store.getters.scale<2?n("v-bottom-navigation",{attrs:{color:"primary",grow:"",shift:!0,app:""}},e._l(e.navigation,(function(t){return n("v-btn",{key:t.to,attrs:{to:t.to,exact:""}},[n("span",[e._v(e._s(t.name))]),n("v-icon",[e._v(e._s(t.icon))])],1)})),1):e._e()],2)},o=[],i=(n("99af"),n("4160"),n("a434"),n("159b"),n("5530")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("perfect-scrollbar",{staticClass:"nav-bar"},[n("div",{staticClass:"nav-top"},[n("div",{staticClass:"top-bar"},[e.$store.state.miniDrawer?e._e():n("logo",{staticClass:"logo"}),n("v-btn",{staticClass:"ma-2",attrs:{icon:""},on:{click:function(t){e.$store.state.miniDrawer=!e.$store.state.miniDrawer}}},[n("v-icon",[e._v(e._s(e.$store.state.miniDrawer?"mdi-chevron-right":"mdi-chevron-left"))])],1)],1),e.$store.state.miniDrawer?e._e():n("search-input",{staticClass:"search-input"})],1),n("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},e._l(e.navigation,(function(t){return n("v-list-item",{key:t.to,attrs:{to:t.to,exact:""}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.name))])],1)],1)})),1)],1)},c=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("img",{staticClass:"logo-image",attrs:{src:e.$vuetify.theme.dark?"./img/foreground.png":"./img/foreground-light.png",alt:"logo image"}}),e.hideName?e._e():n("span",{staticClass:"name"},[e._v("Sudoku")])])},u=[],f={name:"Logo",props:{hideName:{type:Boolean,default:!1}}},d=f,m=(n("705e"),n("2877")),h=Object(m["a"])(d,l,u,!1,null,"22b9c05a",null),v=h.exports,p=n("0781"),g={name:"NavContent",components:{SearchInput:p["a"],Logo:v},props:{navigation:{type:Array,default:function(){return[]}}},data:function(){return{}},mounted:function(){},methods:{},watch:{"$store.state.miniDrawer":function(){localStorage.miniDrawer=this.$store.state.miniDrawer}}},b=g,y=(n("fc55"),n("6544")),k=n.n(y),w=n("8336"),C=n("132d"),S=n("8860"),x=n("da13"),O=n("5d23"),j=n("34c3"),_=Object(m["a"])(b,s,c,!1,null,"23d1a9d2",null),$=_.exports;k()(_,{VBtn:w["a"],VIcon:C["a"],VList:S["a"],VListItem:x["a"],VListItemContent:O["a"],VListItemIcon:j["a"],VListItemTitle:O["c"]});var z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{staticClass:"toolbar",attrs:{elevation:"1",app:""}},[e.$store.getters.scale<2?n("logo",{staticClass:"logo",attrs:{"hide-name":!0}}):e._e(),n("v-toolbar-title",[e._v(e._s(e.$route.name))]),n("v-spacer"),n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mr-1",attrs:{color:"primary",icon:""}},"v-btn",a,!1),r),[n("v-icon",[e._v("mdi-face")])],1)]}}])},[n("v-list",[n("v-list-item",[n("v-list-item-title",[e._v("Log out")])],1),n("v-list-item",{attrs:{color:"primary"}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-brightness-6")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"theme-switch"},[n("span",[e._v("Dark theme")])])],1),n("v-list-item-action",[n("v-switch",{attrs:{dense:"",inset:""},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1)],1)],1)],1)],1)},D=[],T={name:"ToolBar",components:{Logo:v},data:function(){return{}},mounted:function(){},methods:{},watch:{"$vuetify.theme.dark":function(){localStorage.darkTheme=this.$vuetify.theme.dark}}},F=T,V=(n("2284"),n("40dc")),M=n("1800"),E=n("e449"),L=n("2fa4"),R=n("b73d"),I=n("2a7f"),A=Object(m["a"])(F,z,D,!1,null,"7ca3aec4",null),P=A.exports;k()(A,{VAppBar:V["a"],VBtn:w["a"],VIcon:C["a"],VList:S["a"],VListItem:x["a"],VListItemAction:M["a"],VListItemContent:O["a"],VListItemIcon:j["a"],VListItemTitle:O["c"],VMenu:E["a"],VSpacer:L["a"],VSwitch:R["a"],VToolbarTitle:I["a"]});var N=n("2f62"),W={name:"App",components:{ToolBar:P,NavContent:$},data:function(){return{drawer:!0,miniDrawer:!1}},mounted:function(){console.log(this.$store),window.addEventListener("resize",this.setWindowWidth)},beforeDestroy:function(){window.removeEventListener("resize",this.setWindowWidth);var e=this.$store.state.sudoku.solvability.solveWorkers,t=this.$store.state.sudoku.solvability.consistencyWorkers;e.forEach((function(e){return e.abort()})),t.forEach((function(e){return e.abort()})),e.splice(0,e.length-1),t.splice(0,t.length-1)},methods:{setWindowWidth:function(){this.$store.commit("windowWidth",window.innerWidth)}},computed:Object(i["a"])({cssProps:function(){return console.log(this.$vuetify.theme),{"--primary":this.themeColors.primary,"--selection":this.themeColors.sudoku.selection,"--constraint":this.themeColors.sudoku.constraint,"--constrained":this.themeColors.sudoku.constrained,"--same":this.themeColors.sudoku.same,"--relevant":this.themeColors.sudoku.relevant,"--thermometer":this.themeColors.sudoku.thermometer,"--cage":this.themeColors.sudoku.cage,"--foreground":this.themeColors.foreground,"--soft-foreground":this.themeColors.softForeground,"--primary-light":this.themeColors.primaryLight,"--secondary":this.themeColors.secondary}},navigation:function(){var e=this.$store.getters.scale<2?[{icon:"mdi-magnify",to:"/search",name:"Search"}]:[];return[{icon:"mdi-earth",to:"/",name:"Browse"},{icon:"mdi-puzzle-plus-outline",to:"/create",name:"Create Sudoku"}].concat(e)}},Object(N["c"])(["themeColors"]))},B=W,U=(n("034f"),n("7496")),J=n("b81c"),q=n("f6c4"),G=n("f774"),H=n("2db4"),K=Object(m["a"])(B,a,o,!1,null,null,null),Q=K.exports;k()(K,{VApp:U["a"],VBottomNavigation:J["a"],VBtn:w["a"],VIcon:C["a"],VMain:q["a"],VNavigationDrawer:G["a"],VSnackbar:H["a"]});var X=n("9483");Object(X["a"])("".concat("/sudoku/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var Y=n("8c4f"),Z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ee=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("sudoku")])])}],te=(n("96cf"),n("1da1")),ne=n("e770"),re=function(){return new Worker(n.p+"js/solve-worker.526c21bc.worker.js")},ae=new re,oe=new re;function ie(e){return se.apply(this,arguments)}function se(){return se=Object(te["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,r=o.length>2?o[2]:void 0,a=function(){ae.terminate(),ae=new re},e.abrupt("return",new Promise((function(e){var o;null===r||void 0===r||null===(o=r.addEventListener)||void 0===o||o.call(r,"abort",(function(){return e(a())}),{once:!0}),ae.postMessage(["solve",t.copy(),n]),ae.onmessage=function(t){console.log("Terminating solveWorker"),a(),e(t.data)}})));case 4:case"end":return e.stop()}}),e)}))),se.apply(this,arguments)}function ce(e,t){return le.apply(this,arguments)}function le(){return le=Object(te["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=function(){oe.terminate(),oe=new re},e.abrupt("return",new Promise((function(e){var a;null===n||void 0===n||null===(a=n.addEventListener)||void 0===a||a.call(n,"abort",(function(){return e(r())}),{once:!0}),oe.postMessage(["enforceConsistency",t.copy()]),oe.onmessage=function(t){r(),e(t.data)}})));case 2:case"end":return e.stop()}}),e)}))),le.apply(this,arguments)}var ue={name:"Home",components:{},mounted:function(){var e=this;return Object(te["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.timeSolve();case 2:case"end":return t.stop()}}),t)})))()},methods:{timeSolve:function(){return Object(te["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("./wasmtest.wasm");case 2:return t=e.sent,e.next=5,t.arrayBuffer();case 5:return n=e.sent,e.next=8,WebAssembly.instantiate(n);case 8:r=e.sent,console.log(r);case 10:case"end":return e.stop()}}),e)})))()}}},fe=ue,de=Object(m["a"])(fe,Z,ee,!1,null,null,null),me=de.exports;r["a"].use(Y["a"]);var he=[{path:"/",name:"Browse",component:me},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/search",name:"Search",component:function(){return n.e("chunk-5137eb82").then(n.bind(null,"2d3b"))}},{path:"/create",name:"Choose puzzle preset",component:function(){return n.e("chunk-3203c606").then(n.bind(null,"1037"))}},{path:"/create/:preset",name:"Create puzzle",component:function(){return n.e("chunk-b54475ec").then(n.bind(null,"e4b7"))}},{path:"/play/:id",name:"Play Sudoku",component:function(){return n.e("chunk-2d0e9740").then(n.bind(null,"8e30"))}}],ve=new Y["a"]({routes:he}),pe=ve,ge=(n("c975"),n("3835")),be=(n("caad"),n("fb6a"),n("2532"),n("2909")),ye={state:{liveTerm:"",term:"",results:{},recent:null===localStorage.getItem("recentSearch")?[]:JSON.parse(localStorage.recentSearch)},mutations:{searchTerm:function(e,t){e.term=t.term,e.recent.includes(e.term)&&e.recent.splice(e.recent.indexOf(e.term),1),e.recent=[e.term].concat(Object(be["a"])(e.recent.slice(0,5))),localStorage.recentSearch=JSON.stringify(e.recent),r["a"].set(e.results,t.term,t)},liveTerm:function(e,t){return e.liveTerm=t}},getters:{},actions:{search:function(){var e=Object(te["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.state,r=t.commit,t.rootState,console.log("search",n),{},r("searchTerm",{term:n});case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}},ke=(n("4de4"),n("7db0"),n("0481"),n("5db7"),n("a630"),n("d81d"),n("13d5"),n("4069"),n("73d9"),n("b0c0"),n("b64b"),n("ac1f"),n("25f0"),n("6062"),n("3ca3"),n("1276"),n("ddb0"),n("b85c")),we=n("d4ec"),Ce=n("bee2"),Se=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[1,2,3,4,5,6,7,8,9],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"transparent";Object(we["a"])(this,e),this.x=t,this.y=n,this.domain=r,this.pencilMarks=a,this.color=o,this.user={domain:[],pencilMarks:[],color:null}}return Object(Ce["a"])(e,[{key:"hasDomain",value:function(e){return this.hasSetDomain(e)||this.hasUserDomain}},{key:"hasSetDomain",value:function(e){return this.domain.length>1&&this.domain.length<e}},{key:"hasColor",get:function(){return this.hasUserColor||this.hasSetColor}},{key:"hasSetColor",get:function(){return null!==this.color}},{key:"hasUserColor",get:function(){return null!==this.user.color}},{key:"hasPencilMarks",get:function(){return this.hasUserPencilMarks||this.hasSetPencilMarks}},{key:"hasSetPencilMarks",get:function(){return this.pencilMarks.length>0}},{key:"hasUserPencilMarks",get:function(){return this.user.pencilMarks.length>0}},{key:"hasValue",get:function(){return this.hasSetValue||this.hasUserValue}},{key:"hasSetValue",get:function(){return 1===this.domain.length}},{key:"hasUserValue",get:function(){return 1===this.user.domain.length}},{key:"hasUserDomain",get:function(){return this.user.domain.length>1}}],[{key:"maxDomainSize",get:function(){return 10}},{key:"maxPencilMarksSize",get:function(){return 8}}]),e}(),xe=n("1ab9"),Oe=n.n(xe),je=n("87d5"),_e=n.n(je),$e={state:{puzzle:new ne["a"],selectedCells:[],constrainedFromSelection:[],selectedConstraint:null,sameCells:[],relevantCells:[],editingConstraint:null,watchSolvability:0,solvability:{solveWorkers:[],consistencyWorkers:[],result:null,consistentDomains:null},selected:{domain:!1,setDomain:!1,pencilMarks:!1,color:"#ff0000ff"},dontChange:!1,options:Object(i["a"])({autoSolve:!0,constrained:!1,same:!0,relevant:!0,solution:!1,consistentDomains:!1},localStorage.getItem("puzzleOptions")?JSON.parse(localStorage.puzzleOptions):{}),mode:"domain",box:{x:0,y:0,width:0,height:0},colorOptions:[["#000000","#686868","#ffffff"],["#ff0000","#ff7700","#ffe900"],["#00ff04","#dd2fff","#00b7ff"]]},mutations:{selectedCells:function(e,t){return e.selectedCells=t},consistentDomains:function(e,t){return e.solvability.consistentDomains=t},solvabilityResult:function(e,t){return e.solvability.result=t},watchSolvability:function(e){return e.watchSolvability++},unwatchSolvability:function(e){return e.watchSolvability--},editingConstraint:function(e,t){return e.editingConstraint=t},dontChange:function(e,t){return e.dontChange=t},selectedConstraint:function(e,t){return e.selectedConstraint=t},box:function(e,t){return e.box=t},puzzle:function(e,t){return e.puzzle=t},mode:function(e,t){return e.mode=t},constrainedFromSelection:function(e,t){return e.constrainedFromSelection=t},sameCells:function(e,t){return e.sameCells=t},relevantCells:function(e,t){return e.relevantCells=t}},getters:{isSolved:function(e){return!!e.solvability.result},solvable:function(e){var t,n,r,a=null!==(t=null===(n=e.solvability.result)||void 0===n||null===(r=n.solutions)||void 0===r?void 0:r.length)&&void 0!==t?t:0;return 0===a?"no":1===a?"unique":"yes"},constraintTypes:function(){return ne["a"].constraintTypes},constraintTypeNames:function(e,t){return Object.keys(t.constraintTypes).reduce((function(e,t){return e[t]=_e()(t),e}),{})},common:function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};if(0===e.length)return!1;var n,r=!0,a="",o=[],i=Object(ke["a"])(e);try{for(i.s();!(n=i.n()).done;){var s=n.value,c=t(s),l=c.toString();if(l!==a&&!r)return!1;r&&(r=!1,a=l,o=c)}}catch(u){i.e(u)}finally{i.f()}return o}},editableCells:function(e){return e.selectedCells.filter((function(e){return!e.hasSetValue}))},maxDomainLength:function(e,t){var n,r=0,a=Object(ke["a"])(t.flatGrid);try{for(a.s();!(n=a.n()).done;){var o=n.value;o.domain.length>r&&(r=o.domain.length)}}catch(i){a.e(i)}finally{a.f()}return r},boxSize:function(e){var t=e.puzzle.constraints.find((function(e){return e.name.includes("Block")}));return t?Math.sqrt(t.variables.length):0},hasBoxes:function(e){return!!e.puzzle.constraints.find((function(e){return e.name.includes("Block")}))},width:function(e,t){if(t.grid[0])return t.grid[0].length},height:function(e,t){return t.grid?t.grid.length:0},flatGrid:function(e,t){return t.grid?t.grid.flat():[]},grid:function(e){var t=e.puzzle.visibleCells;if(0===t.length)return[[]];var n,r={},a=0,o=0,i=Object(ke["a"])(t);try{for(i.s();!(n=i.n()).done;){var s=n.value,c=s.split(",").map((function(e){return+e})),l=Object(ge["a"])(c,2),u=l[0],f=l[1];u>a&&(a=u),f>o&&(o=f),r[s]=new Se(u,f,e.puzzle.domains[s],e.puzzle.pencilMarks[s],e.puzzle.colors[s])}}catch(h){i.e(h)}finally{i.f()}var d=a+1,m=o+1;return Object(be["a"])(Array(m)).map((function(e,t){return Object(be["a"])(Array(d)).map((function(e,n){return r[[n,t]]}))}))}},actions:{getGridCells:function(e,t){var n=e.getters;return t.map((function(e){return e.toString().split(",").map((function(e){return+e}))})).map((function(e){var t=Object(ge["a"])(e,2),r=t[0],a=t[1];return n.grid[a][r]}))},gridToPuzzle:function(e){var t,n=e.state,r=e.getters,a=n.puzzle.copy(),o=r.flatGrid,i=Object(ke["a"])(o);try{for(i.s();!(t=i.n()).done;){var s=t.value,c=[s.x,s.y].toString(),l=Object(be["a"])(s.user.domain).map((function(e){return isNaN(+e)?e:+e})),u=Object(be["a"])(s.domain),f=Object(be["a"])(s.user.pencilMarks).map((function(e){return isNaN(+e)?e:+e})),d=s.pencilMarks,m=s.user.color,h=s.color,v=0===l.length?u:l,p=0===f.length?d:f,g=null!==m&&void 0!==m?m:h;a.domains[c]=v,g&&"transparent"!==g&&(a.colors[c]=g),p.length>0&&(a.pencilMarks[c]=p)}}catch(b){i.e(b)}finally{i.f()}return a},clearCells:function(e){var t=e.state,n=e.getters,r=e.dispatch;"color"===t.mode&&t.selectedCells.forEach((function(e){return e.user.color=null}));var a,o=Object(ke["a"])(n.editableCells);try{for(o.s();!(a=o.n()).done;){var i=a.value;"color"!==t.mode&&(i.user[t.mode].splice(0,i.user[t.mode].length),r("updateCellInfo"))}}catch(s){o.e(s)}finally{o.f()}r("handleInput")},setCellsValue:function(e,t){var n=e.getters,r=e.dispatch,a=t.type,o=t.value;if("color"!==a){var i,s,c,l,u,f,d=null===(i=n.editableCells)||void 0===i||null===(s=i[0])||void 0===s||null===(c=s.user)||void 0===c||null===(l=c[a])||void 0===l||null===(u=l.includes)||void 0===u?void 0:u.call(l,o),m=!1,h=Object(ke["a"])(n.editableCells);try{for(h.s();!(f=h.n()).done;){var v=f.value,p=v.user[a];if(d)p.splice(p.indexOf(o),1),m=!0;else{var g="domain"===a?Se.maxDomainSize:Se.maxPencilMarksSize;p.length<g&&(p.push(o),m=!0)}}}catch(b){h.e(b)}finally{h.f()}m&&r("handleInput")}},handleInput:function(e){var t=e.state,n=e.dispatch,r=e.commit;n("updateCellInfo"),n("updateRelevantCells"),t.watchSolvability>0&&t.options.autoSolve?n("updateSolvability"):r("solvabilityResult",null),t.watchSolvability>0&&t.options.consistentDomains?n("updateConsistentDomains"):r("consistentDomains",null)},stopSolving:function(e){var t=e.state,n=e.commit,r=t.solvability.solveWorkers;r.forEach((function(e){return e.abort()})),r.splice(0,r.length),n("solvabilityResult",null)},updateSolvability:function(e){return Object(te["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,r=e.commit,a=e.dispatch,o=n.solvability.solveWorkers,o.forEach((function(e){return e.abort()})),i=new AbortController,o.push(i),t.t0=ie,t.next=8,a("gridToPuzzle");case 8:return t.t1=t.sent,t.t2=i.signal,t.next=12,(0,t.t0)(t.t1,2,t.t2);case 12:s=t.sent,i.signal.aborted||r("solvabilityResult",s),o.forEach((function(e){return e.abort()})),o.splice(0,o.length);case 16:case"end":return t.stop()}}),t)})))()},updateConsistentDomains:function(e){return Object(te["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,r=e.commit,a=e.dispatch,o=n.solvability.consistencyWorkers,o.forEach((function(e){return e.abort()})),i=new AbortController,o.push(i),t.t0=ce,t.next=8,a("gridToPuzzle");case 8:return t.t1=t.sent,t.t2=i.signal,t.next=12,(0,t.t0)(t.t1,t.t2);case 12:s=t.sent,i.signal.aborted||r("consistentDomains",s),o.forEach((function(e){return e.abort()})),o.splice(0,o.length);case 16:case"end":return t.stop()}}),t)})))()},updateRelevantConstraints:function(e){var t=e.state,n=e.commit,r=e.getters;if(0===t.selectedCells.length||t.selectedCells.length>21)return n("constrainedFromSelection",[]);var a,o=t.selectedCells.map((function(e){return[e.x,e.y].toString()})),i={},s=Object(ke["a"])(o);try{var c=function(){var e=a.value;Object(be["a"])(new Set(t.puzzle.usableConstraints.filter((function(t){return t.variables.find((function(t){return t.toString()===e}))})).flatMap((function(e){return e.variables})).map((function(e){return e.toString()})).filter((function(t){return e!==t})))).forEach((function(e){i[e]||(i[e]=0),i[e]++}))};for(s.s();!(a=s.n()).done;)c()}catch(v){s.e(v)}finally{s.f()}var l=[];for(var u in i)if(i[u]===o.length){var f=u.split(",").map((function(e){return+e})),d=Object(ge["a"])(f,2),m=d[0],h=d[1];l.push(r.grid[h][m])}n("constrainedFromSelection",l)},updateRelevantCells:function(e){var t=e.state,n=e.commit,r=e.getters,a=r.common(t.selectedCells,(function(e){return Array.from(e.user.domain)}));if(0===a.length&&(a=r.common(t.selectedCells,(function(e){return e.domain})),a.length===r.maxDomainLength))return n("sameCells",[]),void n("relevantCells",[]);var o=a.toString(),i=r.flatGrid.filter((function(e){if(t.selectedCells.includes(e))return!1;var n=Object(be["a"])(e.user.domain);return 0===n.length?o===e.domain.toString():o===n.toString()})),s=1===a.length?r.flatGrid.filter((function(e){if(t.selectedCells.includes(e))return!1;var n=a[0];if(e.user.domain.includes(n))return!0;var o=e.hasUserPencilMarks?e.user.pencilMarks:e.pencilMarks;return!(e.hasValue||!o.includes(n))||!e.hasValue&&e.domain.length<r.maxDomainLength&&e.domain.includes(n)})):[];s=s.filter((function(e){return!i.includes(e)})),n("sameCells",i),n("relevantCells",s)},updateCellInfo:function(e){var t=e.state,n=e.getters,r=e.dispatch;t.selected.domain=n.common(n.editableCells,(function(e){return Array.from(e.user.domain)})),t.selected.setDomain=n.common(t.selectedCells,(function(e){return e.domain})),t.selected.pencilMarks=n.common(n.editableCells,(function(e){return Array.from(e.user.pencilMarks)}));var a=n.common(n.editableCells,(function(e){var t;return null!==(t=e.user.color)&&void 0!==t?t:"null"}));r("setSelectedColor",a)},setSelectedColor:function(e,t){var n=e.state,r=e.commit;if(!1!==t){null!==t&&"null"!==t||(t="transparent");var a=Oe.a.get.rgb(t),o=Object(ge["a"])(a,4),i=o[0],s=o[1],c=o[2],l=o[3];l=Math.max(3*l,1);var u=Oe.a.to.hex([i,s,c,l]);n.selected.color!==u&&r("dontChange",!0),n.selected.color=u}}}},ze=n("f309");r["a"].use(ze["a"]),null===localStorage.getItem("darkTheme")&&(localStorage.darkTheme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches);var De=new ze["a"]({theme:{dark:"true"===localStorage.darkTheme,themes:{dark:{primary:"#ff8325",sudoku:{selection:"#FFFFFF33",constraint:"#FFAA0077",constrained:"#FF000077",same:"#00FF0033",relevant:"#00FFFF33",thermometer:"#4b4b4b",cage:"#c6c6c6"},foreground:"#ffffff",softForeground:"#c6c6c6",primaryLight:"#19191a",secondary:"#3ac7ab"},light:{primary:"#f35804",sudoku:{selection:"#00000033",constraint:"#FFAA0077",constrained:"#FF110077",same:"#00FF0033",relevant:"#00FFFF33",thermometer:"#afafaf",cage:"#282828"},foreground:"#1a1a1a",softForeground:"#282828",primaryLight:"#f1efef",secondary:"#2850e5"}}}});r["a"].use(N["a"]);var Te=new N["a"].Store({state:{windowWidth:window.innerWidth,miniDrawer:null!==localStorage.getItem("miniDrawer")&&"true"===localStorage.miniDrawer,snackbars:[]},mutations:{windowWidth:function(e,t){return e.windowWidth=t},addSnackObject:function(e,t){return e.snackbars.push(t)},removeSnack:function(e,t){return e.snackbars.splice(e.snackbars.indexOf(t),1)}},getters:{scale:function(e){return e.windowWidth>1100?3:e.windowWidth>800?2:e.windowWidth>400?1:0},notFoundUser:function(){var e=Math.floor(7*Math.random())+1;return"img/user/".concat(e,".png")},themeColors:function(){return De.framework.theme.themes[De.framework.theme.isDark?"dark":"light"]},opaqueThemeColors:function(e,t){var n,r=JSON.parse(JSON.stringify(t.themeColors));return n=function(e){for(var t in e){var r=e[t];if("string"===typeof r){var a=Oe.a.get.rgb(r),o=Object(ge["a"])(a,3),i=o[0],s=o[1],c=o[2];e[t]=Oe.a.to.hex([i,s,c,1])}else n(r)}return e},n(r)}},actions:{addSnack:function(){var e=Object(te["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.state,r=t.commit,a=n.text,o=n.timeout,i=void 0===o?3e3:o,s={text:a,open:!0,timeout:i},r("addSnackObject",s),e.abrupt("return",new Promise((function(e){setTimeout((function(){r("removeSnack",s),e()}),i+500)})));case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},modules:{search:ye,sudoku:$e}}),Fe=n("a4a1"),Ve=n.n(Fe);n("f6b9");r["a"].config.productionTip=!1,r["a"].use(Ve.a),new r["a"]({router:pe,store:Te,vuetify:De,render:function(e){return e(Q)}}).$mount("#app")},"705e":function(e,t,n){"use strict";var r=n("fd51"),a=n.n(r);a.a},"85ec":function(e,t,n){},fc55:function(e,t,n){"use strict";var r=n("fe42"),a=n.n(r);a.a},fd51:function(e,t,n){},fe42:function(e,t,n){}});
//# sourceMappingURL=app.4219cfc1.js.map