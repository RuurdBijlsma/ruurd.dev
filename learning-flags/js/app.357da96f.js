(function(e){function t(t){for(var r,s,c=t[0],i=t[1],u=t[2],l=0,f=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b3289":"ed49cfe2"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(e);var u=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/learning-flags/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";n("85ec")},"3bdd":function(e,t,n){},"85ec":function(e,t,n){},8910:function(e,t,n){"use strict";n("3bdd")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{style:{background:e.$vuetify.theme.themes[e.theme].background}},[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"app-bar-center"},[e.$vuetify.breakpoint.width>500?n("v-app-bar-title",{staticClass:"app-bar-text"},[e._v(" Learning Flags ")]):e._e(),n("div",{staticClass:"links"},[n("v-btn",{attrs:{plain:"",to:"/",exact:""}},[e._v("Home")]),n("v-btn",{attrs:{plain:"",to:"/settings",exact:""}},[e._v("Settings")])],1)],1)]),n("v-main",[n("router-view")],1)],1)},o=[],s=n("1da1"),c=(n("96cf"),r["a"].extend({name:"App",data:function(){return{}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e.$store);case 1:case"end":return t.stop()}}),t)})))()},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}}})),i=c,u=(n("034f"),n("2877")),l=n("6544"),d=n.n(l),f=n("7496"),m=n("40dc"),p=n("bb78"),g=n("8336"),v=n("f6c4"),h=Object(u["a"])(i,a,o,!1,null,null,null),w=h.exports;d()(h,{VApp:f["a"],VAppBar:m["a"],VAppBarTitle:p["a"],VBtn:g["a"],VMain:v["a"]});var b=n("9483");Object(b["a"])("".concat("/learning-flags/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var k=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home",style:{flexDirection:e.$vuetify.breakpoint.mobile?"column":"row",alignItems:e.$vuetify.breakpoint.mobile?"stretch":"flex-start"}},[n("v-card",{staticClass:"left-card",class:e.$vuetify.breakpoint.width>1300?"rounded-xl":"",attrs:{elevation:"2"}},[e.game.started?[n("v-card-title",[e._v("What flag is this?")]),n("v-divider"),e.game.fact?n("v-sheet",{staticClass:"flag",attrs:{color:"lightBackground"}},[n("v-img",{attrs:{contain:"",src:e.flagUrl(e.game.fact.fact_id)}})],1):e._e(),n("v-divider"),n("v-card-text",[e.game.showFeedback?n("div",{staticClass:"feedback"},[""!==e.game.userAnswer?n("h4",[e._v('You answered "'+e._s(e.game.userAnswer)+'"')]):e._e(),e.game.correctAnswer&&e.game.fact?[n("v-icon",{attrs:{size:"100",color:"success"}},[e._v("mdi-check")]),n("h2",[e._v('Correct! The answer was "'+e._s(e.game.fact.answer)+'"')])]:e.game.fact?[n("v-icon",{attrs:{size:"100",color:"error"}},[e._v("mdi-alert-circle-outline")]),n("h2",[""!==e.game.userAnswer?n("span",[e._v("Wrong! ")]):e._e(),e._v(' The answer was "'+e._s(e.game.fact.answer)+'"')])]:e._e()],2):n("v-text-field",{ref:"userInput",attrs:{outlined:"",dense:"","hide-details":"",label:"Answer",placeholder:"For example: 'Netherlands'"},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.answerFact.apply(null,arguments)}},model:{value:e.game.userAnswer,callback:function(t){e.$set(e.game,"userAnswer",t)},expression:"game.userAnswer"}})],1),n("v-card-actions",[n("v-spacer"),e.game.showFeedback?n("v-btn",{attrs:{rounded:"",color:"primary",loading:e.loading.fact},on:{click:e.nextFact}},[n("span",{staticClass:"ml-4 mr-4"},[e._v("Next fact")])]):n("v-btn",{attrs:{rounded:"",color:"primary",loading:e.loading.answer},on:{click:e.answerFact}},[""!==e.game.userAnswer?n("span",{staticClass:"ml-4 mr-4"},[e._v("Submit answer")]):n("span",{staticClass:"ml-4 mr-4"},[e._v("I don't know")])])],1)]:[n("v-card-title",[e._v("Learn country flags!")]),n("div",{staticClass:"flags"},e._l(e.randomFlags,(function(e){return n("v-img",{key:e,attrs:{"aspect-ratio":1.5,src:e}})})),1),n("v-card-actions",[n("v-btn",{attrs:{rounded:"",color:"primary",loading:e.loading.connection},on:{click:e.newGame}},[n("span",{staticClass:"ml-4 mr-4"},[e._v("Start learning")])])],1)]],2),e.game.started?n("v-card",{staticClass:"right-card",class:e.$vuetify.breakpoint.width>1300?"rounded-xl":"",style:{marginLeft:e.$vuetify.breakpoint.mobile?"0":"30px",width:e.$vuetify.breakpoint.mobile?"100%":"300px"},attrs:{elevation:"2"}},[n("v-card-title",[e._v("Session progress")]),n("v-card-text",[n("v-progress-linear",{staticClass:"mb-4",attrs:{value:50}}),n("p",[e._v(e._s(e.game.encounteredFlags.size)+" / "+e._s(e.flagList.length)+" flags encountered")]),n("p",[e._v(e._s(Math.round(100*e.correctPercentage))+"% correct")])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{rounded:"",color:"primary"},on:{click:e.stopGame}},[n("span",{staticClass:"ml-4 mr-4"},[e._v("Stop session")])])],1)],1):e._e()],1)},x=[],_=(n("6062"),n("caad"),n("2532"),n("b64b"),r["a"].extend({name:"Home",components:{},data:function(){return{loading:{connection:!1,fact:!1,answer:!1},countries:null,game:{started:!1,fact:null,userAnswer:"",factShownTimestamp:0,correctAnswer:!1,showFeedback:!1,answerHistory:[],encounteredFlags:new Set},randomFlags:[]}},beforeDestroy:function(){document.removeEventListener("keypress",this.handleKey)},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("flags/countries.json").then((function(e){return e.json()}));case 2:e.countries=t.sent,console.log(e.countries),n=[];while(n.length<3*Math.min(1500,window.innerWidth)/1e3)r=e.randomFlagUrl(),n.includes(r)||n.push(r);e.randomFlags=n,console.log(n),document.addEventListener("keypress",e.handleKey,!1);case 9:case"end":return t.stop()}}),t)})))()},methods:{handleKey:function(e){this.game.showFeedback&&"Enter"===e.key&&this.nextFact()},resetGame:function(){this.game={started:!1,fact:null,userAnswer:"",factShownTimestamp:0,correctAnswer:!1,showFeedback:!1,answerHistory:[],encounteredFlags:new Set}},newGame:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.resetGame(),e.loading.connection=!0,t.prev=2,t.next=5,e.$store.dispatch("initializeSocket");case 5:t.next=10;break;case 7:return t.prev=7,t.t0=t["catch"](2),t.abrupt("return");case 10:return t.prev=10,e.loading.connection=!1,t.finish(10);case 13:if(e.connected){t.next=15;break}return t.abrupt("return");case 15:return e.game.started=!0,t.next=18,e.nextFact();case 18:case"end":return t.stop()}}),t,null,[[2,7,10,13]])})))()},stopGame:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.resetGame();case 1:case"end":return t.stop()}}),t)})))()},answerFact:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading.answer=!0,s=performance.now()-e.game.factShownTimestamp,t.next=4,e.$store.dispatch("answerFact",{countryCode:null===(n=e.game.fact)||void 0===n?void 0:n.fact_id,answer:e.game.userAnswer,responseTime:s});case 4:c=t.sent,e.game.answerHistory.push({countryCode:null!==(r=null===(a=e.game.fact)||void 0===a?void 0:a.fact_id)&&void 0!==r?r:"",correct:c,responseTime:s,userAnswer:e.game.userAnswer}),console.log("answered fact",{countryCode:null===(o=e.game.fact)||void 0===o?void 0:o.fact_id,answer:e.game.userAnswer,responseTime:s,correct:c}),e.game.correctAnswer=c,e.game.showFeedback=!0,e.loading.answer=!1;case 10:case"end":return t.stop()}}),t)})))()},nextFact:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.game.userAnswer="",e.game.showFeedback=!1,e.loading.fact=!0,t.next=5,e.$store.dispatch("nextFact");case 5:e.game.fact=t.sent,e.game.encounteredFlags.add(null===(n=e.game.fact)||void 0===n?void 0:n.fact_id),console.log({fact:e.game.fact}),e.loading.fact=!1,e.game.factShownTimestamp=performance.now(),r=e.$refs.userInput,r.focus();case 12:case"end":return t.stop()}}),t)})))()},flagUrl:function(e){return"flags/svg/".concat(e.toLowerCase(),".svg")},randomFlag:function(){return this.flagList[Math.floor(Math.random()*this.flagList.length)]},randomFlagUrl:function(){return this.flagUrl(this.randomFlag())}},computed:{connected:function(){return this.$store.state.connected},flagList:function(){var e;return Object.keys(null!==(e=this.countries)&&void 0!==e?e:{})},correctPercentage:function(){if(0===this.game.answerHistory.length)return 1;var e=this.game.answerHistory.reduce((function(e,t){return e+(t.correct?1:0)}),0);return e/this.game.answerHistory.length}}})),F=_,C=(n("8910"),n("b0af")),S=n("99d9"),j=n("ce7e"),A=n("132d"),O=n("adda"),T=n("8e36"),$=n("8dd9"),R=n("2fa4"),V=n("8654"),P=Object(u["a"])(F,y,x,!1,null,"ad168e78",null),L=P.exports;d()(P,{VBtn:g["a"],VCard:C["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VDivider:j["a"],VIcon:A["a"],VImg:O["a"],VProgressLinear:T["a"],VSheet:$["a"],VSpacer:R["a"],VTextField:V["a"]}),r["a"].use(k["a"]);var E=[{path:"/",name:"Home",component:L},{path:"/settings",name:"Settings",component:function(){return n.e("chunk-2d0b3289").then(n.bind(null,"26d3"))}}],H=new k["a"]({routes:E}),M=H,B=n("2f62"),G=n("8e27"),I=n("3d20"),N=n.n(I);r["a"].use(B["a"]);var z=new B["a"].Store({state:{socket:null,url:"ws://localhost:5000",errorShown:!1,connected:!1},mutations:{socket:function(e,t){return e.socket=t},url:function(e,t){return e.url=t},errorShown:function(e,t){return e.errorShown=t},connected:function(e,t){return e.connected=t}},actions:{answerFact:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a,o,s,c,i,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.state,a=t.countryCode,o=void 0===a?"":a,s=t.answer,c=void 0===s?"":s,i=t.responseTime,u=void 0===i?0:i,n.abrupt("return",new Promise((function(e){var t;null===(t=r.socket)||void 0===t||t.emit("register_response",o,c,u,e)})));case 3:case"end":return n.stop()}}),n)})))()},nextFact:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,t.abrupt("return",new Promise((function(e){var t;null===(t=n.socket)||void 0===t||t.emit("next_fact","",e)})));case 2:case"end":return t.stop()}}),t)})))()},initializeSocket:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,console.log("Called initializeSocket"),n("socket",Object(G["io"])(r.url)),t.abrupt("return",new Promise((function(e,t){null!==r.socket&&(r.socket.on("connect",(function(){console.log("CONNECTED"),n("connected",!0),e()})),r.socket.on("connect_error",(function(e){console.warn(e.message),r.errorShown||(n("connected",!1),n("errorShown",!0),N.a.fire({title:"Can't connect to server, run the server before loading this page.",text:"Server IP ".concat(r.url),icon:"error"}),t(e))})))})));case 4:case"end":return t.stop()}}),t)})))()}},modules:{}}),U=n("f309");r["a"].use(U["a"]);var D=new U["a"]({theme:{dark:!1,themes:{light:{primary:"#1fa767",background:"#c9e4ef",lightBackground:"#eeeeee"}}}});r["a"].config.productionTip=!1,new r["a"]({router:M,store:z,vuetify:D,render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=app.357da96f.js.map