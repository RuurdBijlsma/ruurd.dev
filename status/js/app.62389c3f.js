(function(e){function t(t){for(var a,o,i=t[0],c=t[1],u=t[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(m.length)m.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,i=1;i<s.length;i++){var c=s[i];0!==r[c]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},r={app:0},n=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="status/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("85ec"),r=s.n(a);r.a},"19f9":function(e,t,s){"use strict";var a=s("5870"),r=s.n(a);r.a},2478:function(e,t,s){"use strict";var a=s("5b33"),r=s.n(a);r.a},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=s("43f9"),n=s.n(r),o=(s("51de"),s("e094"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("md-tabs",{attrs:{"md-sync-route":""}},[s("md-tab",{attrs:{id:"tab-home","md-label":"Home",to:"/",exact:""}},[s("home")],1),s("md-tab",{attrs:{id:"tab-pages","md-label":"Performance",to:"/performance/"}},[s("performance")],1)],1)],1)])}),i=[],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("md-app",{staticClass:"app"},[s("md-app-drawer",{staticClass:"drawer",attrs:{"md-permanent":"clipped"}},[s("md-list",{staticClass:"drawer-list"},[s("md-list-item",{attrs:{to:"/performance/cpu"}},[s("md-icon",[e._v("memory")]),s("span",{staticClass:"md-list-item-text"},[e._v("CPU")])],1),s("md-list-item",{attrs:{to:"/performance/memory"}},[s("md-icon",[e._v("business")]),s("span",{staticClass:"md-list-item-text"},[e._v("Memory")])],1),s("md-list-item",{attrs:{to:"/performance/storage"}},[s("md-icon",[e._v("storage")]),s("span",{staticClass:"md-list-item-text"},[e._v("Storage")])],1),s("md-list-item",{attrs:{to:"/performance/network"}},[s("md-icon",[e._v("network_check")]),s("span",{staticClass:"md-list-item-text"},[e._v("Network")])],1),s("md-divider"),s("md-list-item",{attrs:{to:"/performance/login"}},[s("md-icon",[e._v("account_circle")]),s("span",{staticClass:"md-list-item-text"},[e._v("Log-in")])],1)],1)],1),s("md-app-content",{staticClass:"content"},[s("router-view",{attrs:{labels:e.labels,status:e.status,loads:e.loads,temps:e.temps,swapUsed:e.swapUsed,memoryUsed:e.memoryUsed,rxs:e.rxs,txs:e.txs}})],1)],1)],1)},u=[],l=(s("caad"),s("d3b7"),s("2532"),s("96cf"),s("d4ec")),d=s("bee2"),m=function(){function e(){Object(l["a"])(this,e)}return Object(d["a"])(e,[{key:"getUptime",value:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.json("https://status.ruurd.dev:3001",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),null,this)}},{key:"setEndpoint",value:function(e){this.endPoint=e,this.user=null,this.password=null,this.status={state:null},this.fetchInterval=-1}},{key:"startFetching",value:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return this.stopFetching(),this.fetchInterval=setInterval((function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(e.getStatus());case 2:e.status.state=t.sent;case 3:case"end":return t.stop()}}))}),3e3),t.next=4,regeneratorRuntime.awrap(this.getStatus());case 4:this.status.state=t.sent;case 5:case"end":return t.stop()}}),null,this)}},{key:"stopFetching",value:function(){clearInterval(this.fetchInterval)}},{key:"getStatus",value:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==this.user&&null!==this.password){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,regeneratorRuntime.awrap(this.json(this.endPoint+"/status",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:this.user,password:this.password})}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),null,this)}},{key:"json",value:function(e,t){var s,a;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(fetch(e,t));case 2:return s=r.sent,r.next=5,regeneratorRuntime.awrap(s.text());case 5:return a=r.sent,r.prev=6,r.abrupt("return",JSON.parse(a));case 10:return r.prev=10,r.t0=r["catch"](6),console.warn("Could not parse server response",a),r.abrupt("return",!1);case 14:case"end":return r.stop()}}),null,null,[[6,10]])}},{key:"auth",value:function(e,t){var s;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(this.json(this.endPoint+"/auth",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:e,password:t})}));case 2:return s=a.sent,!0===s&&(this.user=e,this.password=t,this.startFetching()),a.abrupt("return",s);case 5:case"end":return a.stop()}}),null,this)}}]),e}(),p=new m,f={name:"performance",data:function(){return{interval:-1,status:null,firstDataTime:-1,loads:[],temps:[],labels:[],swapUsed:[],memoryUsed:[],txs:[],rxs:[]}},components:{},mounted:function(){var e,t,s,a=this;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:if(null!==localStorage.getItem("auth")||this.$route.path.includes("/login")){r.next=6;break}return console.log("HEHHEHEHE"),r.next=4,regeneratorRuntime.awrap(this.$router.push("/performance/login"));case 4:r.next=10;break;case 6:return e=JSON.parse(localStorage.auth),t=e.user,s=e.password,r.next=9,regeneratorRuntime.awrap(p.auth(t,s));case 9:this.interval=setInterval((function(){null!==p.status.state&&(clearInterval(a.interval),a.status=p.status,a.firstDataTime=performance.now(),a.addData())}),50);case 10:case"end":return r.stop()}}),null,this)},methods:{addData:function(){var e=this.status.state.load.currentload,t=this.status.state.temperature.main,s=this.status.state.memory.swapused,a=this.status.state.memory.used,r=this.status.state.network[0].rx_sec,n=this.status.state.network[0].tx_sec,o=Math.round((performance.now()-this.firstDataTime)/1e3);this.temps.push(t),this.loads.push(e),this.swapUsed.push(s),this.memoryUsed.push(a),this.rxs.push(r),this.txs.push(n),this.labels.push(o)}},watch:{status:{deep:!0,handler:function(){this.addData()}}},beforeDestroy:function(){clearInterval(this.interval),p.stopFetching()}},h=f,b=(s("aa32"),s("2877")),v=Object(b["a"])(h,c,u,!1,null,"7dcb112a",null),j=v.exports,g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return null!==e.upStatus?s("div",{staticClass:"home"},[s("md-table",[s("md-table-row",[s("md-table-head",[e._v("Name")]),s("md-table-head",[e._v("Address")]),s("md-table-head",{attrs:{"md-numeric":""}},[e._v("Port")]),e._l(e.upStatus.endpoints[0].upTimes,(function(t){return s("md-table-head",{attrs:{"md-numeric":""}},[e._v(e._s(e.convertDate(t.date))+" ")])})),s("md-table-head",[e._v("Status")])],2),e._l(e.upStatus.endpoints,(function(t){return s("md-table-row",{key:t.name},[s("md-table-cell",[e._v(e._s(t.name))]),s("md-table-cell",[e._v(e._s(t.url))]),s("md-table-cell",{attrs:{"md-numeric":""}},[e._v(e._s(t.port))]),e._l(t.upTimes,(function(t){return s("md-table-cell",{attrs:{"md-numeric":""}},[e._v(e._s((100*t.up).toFixed(2))+"%")])})),s("md-table-cell",{class:"status "+(t.up?"up":"down")},[e._v("●")])],2)}))],2)],1):e._e()},y=[],_=(s("99af"),s("0d03"),{name:"home",components:{},data:function(){return{upStatus:null,interval:-1}},mounted:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(p.getUptime());case 2:this.upStatus=t.sent,this.interval=setInterval((function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(p.getUptime());case 2:e.upStatus=t.sent;case 3:case"end":return t.stop()}}))}),2e3);case 4:case"end":return t.stop()}}),null,this)},methods:{convertDate:function(e){var t=new Date(e);return"".concat(t.getDate(),"-").concat(t.getMonth()+1,"-").concat(t.getFullYear())}},beforeDestroy:function(){clearInterval(this.interval)}}),w=_,x=(s("ec6d"),Object(b["a"])(w,g,y,!1,null,"01b66d4d",null)),k=x.exports;p.setEndpoint("https://ruurd.dev:3000");var C={name:"app",components:{Performance:j,Home:k}},O=C,S=(s("034f"),Object(b["a"])(O,o,i,!1,null,null,null)),D=S.exports,U=s("8c4f"),T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return null!==e.status?s("div",{staticClass:"cpu-performance"},[s("h1",[e._v("CPU")]),s("line-chart",{staticClass:"chart",attrs:{"chart-data":e.chartData,options:e.chartOptions}}),s("div",{staticClass:"cpu-grid"},[s("div",{staticClass:"cpu"},[s("h3",[e._v("CPU")]),s("p",[e._v("Main Temperature: "+e._s(e.status.state.temperature.main)+" °C")]),s("p",[e._v("Max Temperature: "+e._s(e.status.state.temperature.max)+" °C")]),s("p",[e._v("Main Load: "+e._s(e.status.state.load.currentload.toFixed(2))+"%")])]),e._l(e.status.state.load.cpus,(function(t,a){return s("div",{staticClass:"cpu"},[s("h3",[e._v("CPU "+e._s(a))]),s("p",[e._v("Temperature: "+e._s(e.status.state.temperature.cores[a])+" °C")]),s("p",[e._v("Load: "+e._s(t.load.toFixed(2))+"%")])])}))],2)],1):e._e()},R=[],z=s("1fca"),P=z["b"].reactiveProp,$={extends:z["a"],mixins:[P],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},M={name:"CpuPerformance",components:{LineChart:$},data:function(){return{chartData:{},chartOptions:{responsive:!0}}},props:{temps:Array,loads:Array,labels:Array,status:Object},mounted:function(){this.fillData()},watch:{labels:function(){this.fillData()}},methods:{fillData:function(){this.chartData={labels:this.labels,datasets:[{label:"CPU Load (%)",backgroundColor:"#b6ff65",data:this.loads},{label:"CPU Temperature (°C)",backgroundColor:"#589614",data:this.temps}]}}}},F=M,B=(s("2478"),Object(b["a"])(F,T,R,!1,null,"4bf695c8",null)),E=B.exports,A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return null!==e.status?s("div",{staticClass:"memory-performance"},[s("h1",[e._v("Memory")]),s("line-chart",{staticClass:"chart",attrs:{"chart-data":e.chartData,options:e.chartOptions}}),s("p",[e._v("Memory Usage: "+e._s(e.readableBytes(e.status.state.memory.used)))]),s("p",[e._v("Total Available Memory: "+e._s(e.readableBytes(e.status.state.memory.available)))]),s("p",[e._v("Swap Memory Usage: "+e._s(e.readableBytes(e.status.state.memory.swapused)))])],1):e._e()},L=[],N=(s("6b93"),s("b680"),function(){function e(){Object(l["a"])(this,e)}return Object(d["a"])(e,null,[{key:"bytesToReadable",value:function(e){var t=Math.log10(e);return t<2?e+" B":t<5?(e/1024).toFixed(2)+" kB":t<8?(e/Math.pow(1024,2)).toFixed(2)+" MB":t<12?(e/Math.pow(1024,3)).toFixed(2)+" GB":t<15?(e/Math.pow(1024,4)).toFixed(2)+" TB":"very bige bytes"}}]),e}()),I={name:"MemoryPerformance",components:{LineChart:$},data:function(){return{chartData:{},chartOptions:{responsive:!0}}},props:{memoryUsed:Array,swapUsed:Array,labels:Array,status:Object},mounted:function(){this.fillData()},watch:{labels:function(){this.fillData()}},methods:{readableBytes:function(e){return N.bytesToReadable(e)},fillData:function(){this.chartData={labels:this.labels,datasets:[{label:"Swap Memory Used (bytes)",backgroundColor:"#095db3",data:this.swapUsed},{label:"Memory Used (bytes)",backgroundColor:"#448aff",data:this.memoryUsed}]}}}},q=I,H=(s("19f9"),Object(b["a"])(q,A,L,!1,null,"58346c0c",null)),J=H.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return null!==e.status?s("div",{staticClass:"storage-performance"},[s("h1",[e._v("Storage")]),e._l(e.status.state.storage,(function(t){return s("div",{key:t.fs},[s("md-divider"),s("span",{staticClass:"headline md-headline"},[e._v(e._s(t.fs))]),s("md-subheader",[e._v(e._s(t.type))]),s("md-progress-bar",{attrs:{"md-mode":"determinate","md-value":t.used/t.size*100}}),s("p",[e._v("Used: "+e._s(e.readableBytes(t.used)))]),s("p",[e._v("Total: "+e._s(e.readableBytes(t.size)))])],1)}))],2):e._e()},V=[],Y={name:"StoragePerformance",data:function(){return{percentage:0}},props:{status:Object},watch:{status:{deep:!0,handler:function(){console.log(this.status)}}},methods:{readableBytes:function(e){return N.bytesToReadable(e)}}},K=Y,Q=(s("d99e"),Object(b["a"])(K,G,V,!1,null,"c7468396",null)),W=Q.exports,X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return null!==e.status?s("div",{staticClass:"network-performance"},[s("h1",[e._v("Network")]),e._l(e.status.state.network,(function(t){return s("div",{key:t.iface},[s("h3",[e._v(e._s(t.iface))]),s("line-chart",{staticClass:"chart",attrs:{"chart-data":e.chartData,options:e.chartOptions}}),s("div",{staticClass:"cpu-grid"},[s("div",{staticClass:"cpu"},[s("h4",[e._v("Transmitted")]),s("p",[e._v("Rate: "+e._s(e.readableBytes(t.tx_sec))+"/s")]),s("p",[e._v("Total: "+e._s(e.readableBytes(t.tx_bytes)))]),s("p",[e._v("Dropped: "+e._s(e.readableBytes(t.tx_dropped)))]),s("p",[e._v("Errors: "+e._s(t.tx_errors))])]),s("div",{staticClass:"cpu"},[s("h4",[e._v("Received")]),s("p",[e._v("Rate: "+e._s(e.readableBytes(t.rx_sec))+"/s")]),s("p",[e._v("Total: "+e._s(e.readableBytes(t.rx_bytes)))]),s("p",[e._v("Dropped: "+e._s(e.readableBytes(t.rx_dropped)))]),s("p",[e._v("Errors: "+e._s(t.rx_errors))])])])],1)}))],2):e._e()},Z=[],ee={name:"NetworkPerformance",components:{LineChart:$},data:function(){return{chartData:{},chartOptions:{responsive:!0}}},props:{txs:Array,rxs:Array,labels:Array,status:Object},mounted:function(){this.fillData()},watch:{labels:function(){this.fillData()}},methods:{readableBytes:function(e){return N.bytesToReadable(e)},fillData:function(){this.chartData={labels:this.labels,datasets:[{label:"Received per second (bytes)",backgroundColor:"#5f2198",data:this.rxs},{label:"Transmitted per second (bytes)",backgroundColor:"#9e52e4",data:this.txs}]}}}},te=ee,se=(s("ae14"),Object(b["a"])(te,X,Z,!1,null,"517d4b5e",null)),ae=se.exports,re=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("form",{staticClass:"md-layout",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.validateUser(t)}}},[s("md-card",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[s("md-card-header",[s("div",{staticClass:"md-title"},[e._v("Log-in")])]),s("md-card-content",[s("div",{staticClass:"md-layout md-gutter"},[s("div",{staticClass:"md-layout-item md-small-size-100"},[s("md-field",{class:e.getValidationClass("user")},[s("label",{attrs:{for:"user"}},[e._v("Username")]),s("md-input",{attrs:{name:"user",id:"user",autocomplete:"username",disabled:e.sending},model:{value:e.form.user,callback:function(t){e.$set(e.form,"user",t)},expression:"form.user"}}),e.$v.form.user.required?e.$v.form.user.minlength?e._e():s("span",{staticClass:"md-error"},[e._v("Invalid user name")]):s("span",{staticClass:"md-error"},[e._v("The user name is required")])],1)],1),s("div",{staticClass:"md-layout-item md-small-size-100"},[s("md-field",{class:e.getValidationClass("password")},[s("label",{attrs:{for:"password"}},[e._v("Password")]),s("md-input",{attrs:{name:"password",id:"password",type:"password",disabled:e.sending},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e.$v.form.password.required?e.$v.form.password.minlength?e._e():s("span",{staticClass:"md-error"},[e._v("Invalid password")]):s("span",{staticClass:"md-error"},[e._v("The password is required")])],1)],1)])]),e.sending?s("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):e._e(),s("md-card-actions",[s("md-button",{staticClass:"md-primary",attrs:{type:"submit",disabled:e.sending}},[e._v("Save user")])],1)],1),s("md-snackbar",{attrs:{"md-active":e.userSaved},on:{"update:mdActive":function(t){e.userSaved=t},"update:md-active":function(t){e.userSaved=t}}},[e._v("The user "+e._s(e.lastUser)+" was logged in with success!")]),s("md-snackbar",{attrs:{"md-active":e.loginFail},on:{"update:mdActive":function(t){e.loginFail=t},"update:md-active":function(t){e.loginFail=t}}},[e._v("Credentials don't match any records!")])],1)])},ne=[],oe=s("1dce"),ie=s("b5ae"),ce={name:"Login",mixins:[oe["validationMixin"]],data:function(){return{form:{user:null,password:null},userSaved:!1,loginFail:!1,sending:!1,lastUser:null}},validations:{form:{user:{required:ie["required"],minLength:Object(ie["minLength"])(3)},password:{required:ie["required"],minLength:Object(ie["minLength"])(3)}}},methods:{getValidationClass:function(e){var t=this.$v.form[e];if(t)return{"md-invalid":t.$invalid&&t.$dirty}},clearForm:function(){this.$v.$reset(),this.form.user=null,this.form.password=null},saveUser:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return this.sending=!0,t.next=3,regeneratorRuntime.awrap(p.auth(this.form.user,this.form.password));case 3:e=t.sent,this.sending=!1,e?(localStorage.auth=JSON.stringify({user:this.form.user,password:this.form.password}),this.lastUser="".concat(this.form.user),this.userSaved=!0,this.clearForm(),location.href="#/performance/cpu",location.reload()):this.loginFail=!0;case 6:case"end":return t.stop()}}),null,this)},validateUser:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:this.$v.$touch(),this.$v.$invalid||this.saveUser();case 2:case"end":return e.stop()}}),null,this)}}},ue=ce,le=Object(b["a"])(ue,re,ne,!1,null,"0c04fc56",null),de=le.exports;a["default"].use(U["a"]);var me=[{path:"/performance",redirect:"/performance/cpu"},{path:"/performance/cpu",name:"cpu-performance",component:E,props:!0},{path:"/performance/memory",name:"memory-performance",component:J,props:!0},{path:"/performance/storage",name:"storage-performance",component:W,props:!0},{path:"/performance/network",name:"network-performance",component:ae,props:!0},{path:"/performance/login",name:"login",component:de}],pe=new U["a"]({routes:me}),fe=pe,he=s("9483");Object(he["a"])("".concat("status/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["default"].config.productionTip=!1,a["default"].use(n.a),new a["default"]({router:fe,render:function(e){return e(D)}}).$mount("#app")},5870:function(e,t,s){},"5b33":function(e,t,s){},"5e01":function(e,t,s){},"85ec":function(e,t,s){},aa32:function(e,t,s){"use strict";var a=s("d9fe"),r=s.n(a);r.a},ae14:function(e,t,s){"use strict";var a=s("eb0f"),r=s.n(a);r.a},af34:function(e,t,s){},d99e:function(e,t,s){"use strict";var a=s("5e01"),r=s.n(a);r.a},d9fe:function(e,t,s){},eb0f:function(e,t,s){},ec6d:function(e,t,s){"use strict";var a=s("af34"),r=s.n(a);r.a}});
//# sourceMappingURL=app.62389c3f.js.map