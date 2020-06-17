(function(e){function t(t){for(var i,s,r=t[0],c=t[1],l=t[2],h=0,d=[];h<r.length;h++)s=r[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={app:0},a=[];function s(e){return r.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"06bdeebe"}[e]+".js"}function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,i){n=o[e]=[t,i]}));t.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=s(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,n[1](l)}o[e]=void 0}};var h=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/minesweeper/",r.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var h=0;h<c.length;h++)t(c[h]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("8a23"),o=n.n(i);o.a},4230:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"app"},[n("router-view")],1)},a=[],s={name:"App",components:{},data:function(){return{}}},r=s,c=(n("034f"),n("2877")),l=n("6544"),h=n.n(l),u=n("7496"),d=Object(c["a"])(r,o,a,!1,null,null,null),g=d.exports;h()(d,{VApp:u["a"]});var f=n("9483");Object(f["a"])("".concat("/minesweeper/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var m=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("mine-sweeper")],1)},b=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mine-sweeper"},[""===e.game.status?n("h1",[e._v("Mine Sweeper")]):n("h1",[e._v(e._s(e.game.status))]),n("div",{ref:"canvasContainer",staticClass:"canvas-container-outer"},[n("div",{staticClass:"canvas-container-inner"},[n("canvas",{ref:"canvas",staticClass:"canvas",on:{touchstart:e.touchStart,touchmove:e.touchMove,touchend:e.touchEnd,contextmenu:e.clickCanvas,click:e.clickCanvas}})])]),n("div",{staticClass:"controls"},[n("div",{staticClass:"text-fields"},[n("v-text-field",{attrs:{type:"number",label:"Width"},model:{value:e.grid.width,callback:function(t){e.$set(e.grid,"width",t)},expression:"grid.width"}}),n("v-text-field",{attrs:{type:"number",label:"Height"},model:{value:e.grid.height,callback:function(t){e.$set(e.grid,"height",t)},expression:"grid.height"}}),n("v-text-field",{attrs:{type:"number",label:"Bombs",rules:e.bombRules},model:{value:e.game.nBombs,callback:function(t){e.$set(e.game,"nBombs",t)},expression:"game.nBombs"}})],1),n("v-btn",{staticClass:"new-game-button",attrs:{color:"primary"},on:{click:e.newGame}},[e._v("New Game")])],1)])},w=[],y=(n("99af"),n("4de4"),n("7db0"),n("4160"),n("c975"),n("d81d"),n("13d5"),n("a434"),n("159b"),n("3835")),x=n("b85c"),C=n("2909"),k=window.innerWidth>600?20:12,B=20===k?60:30,j={name:"MineSweeper",data:function(){return{animation:-1,canvasRatio:1,grid:{width:k,height:k,cells:[]},game:{status:"",nBombs:B,showBombs:!1,isDead:!1},firstClick:!0,images:{bomb:new Image,flag:new Image,cell:new Image,numbers:{1:new Image,2:new Image,3:new Image,4:new Image,5:new Image,6:new Image,7:new Image,8:new Image}},touchTime:!1,hold:{timeout:-1,x:0,y:0,down:!0},holdDuration:300}},mounted:function(){this.canvas=this.$refs.canvas,this.context=this.canvas.getContext("2d"),this.images.bomb.src="img/bomb.png",this.images.flag.src="img/flag.png",this.images.cell.src="img/cell.png";for(var e=1;e<=8;e++)this.images.numbers[e].src="img/".concat(e,".png");this.animation=requestAnimationFrame(this.render),window.addEventListener("resize",this.resizeCanvas,!1),this.newGame()},beforeDestroy:function(){cancelAnimationFrame(this.animation),window.removeEventListener("resize",this.resizeCanvas),clearTimeout(this.hold.timeout)},methods:{newGame:function(){this.canvasRatio=this.grid.width/this.grid.height,this.resizeCanvas(),this.firstClick=!0,this.grid.cells=this.getCells(),this.game.status="",this.game.showBombs=!1,this.game.isDead=!1},getCells:function(){for(var e=[],t=0;t<this.grid.height;t++)for(var n=0;n<this.grid.width;n++)e.push({x:n,y:t,revealed:!1,bomb:!1,flag:!1,bombNeighbours:0});return e},generateField:function(e){var t=this,n=this.getCells(),i=this.getNeighbours.apply(this,Object(C["a"])(e)).map((function(e){return t.getCell.apply(t,Object(C["a"])(e).concat([n]))})).filter((function(e){return void 0!==e}));i.push(this.getCell.apply(this,Object(C["a"])(e).concat([n]))),console.log(i),this.game.nBombs>n.length-i.length&&console.warn("There are move bombs than grid cells, clamping game.nBombs to",n.length-i.length);var o=Math.min(this.game.nBombs,n.length-i.length);i.forEach((function(e){return n.splice(n.indexOf(e),1)}));for(var a=[],s=0;s<o;s++){var r=Math.floor(Math.random()*n.length),c=n.splice(r,1)[0];c.bomb=!0,a.push(c)}n=n.concat(a),n=n.concat(i);var l,h=Object(x["a"])(n);try{for(h.s();!(l=h.n()).done;){var u=l.value;u.neighbours=this.getNeighbours(u.x,u.y).map((function(e){var i=Object(y["a"])(e,2),o=i[0],a=i[1];return t.getCell(o,a,n)})).filter((function(e){return void 0!==e})),u.bombNeighbours=u.neighbours.map((function(e){return e.bomb})).reduce((function(e,t){return e+t}),0)}}catch(d){h.e(d)}finally{h.f()}return n},getNeighbours:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?[[e-1,t+0],[e+0,t-1],[e+1,t+0],[e+0,t+1],[e-1,t-1],[e+1,t-1],[e+1,t+1],[e-1,t+1]]:[[e-1,t+0],[e+0,t-1],[e+1,t+0],[e+0,t+1]]},touchStart:function(e){var t=this,n=this.canvas.getBoundingClientRect(),i=n.top,o=n.left,a=e.touches[0].pageX-o,s=e.touches[0].pageY-i;this.hold.down=!0,this.hold.x=a,this.hold.y=s,this.hold.timeout=setTimeout((function(){t.clickPos(a,s,!0)}),this.holdDuration)},touchMove:function(e){var t=this.canvas.getBoundingClientRect(),n=t.top,i=t.left,o=e.touches[0].pageX-i,a=e.touches[0].pageY-n,s=Math.sqrt(Math.pow(this.hold.x-o,2)+Math.pow(this.hold.y-a,2));s>30&&(console.log("Cancelling hold"),this.touchEnd())},touchEnd:function(){clearTimeout(this.hold.timeout),this.hold.down=!1},clickCanvas:function(e){e.preventDefault();var t=2===e.button,n=this.canvas.getBoundingClientRect(),i=n.top,o=n.left,a=e.pageX-o,s=e.pageY-i;this.clickPos(a,s,t)},clickPos:function(e,t,n){if(!this.game.isDead){var i=this.canvas.getBoundingClientRect(),o=i.width,a=i.height,s=o/this.grid.width,r=a/this.grid.height,c=Math.floor(e/s),l=Math.floor(t/r),h=this.getCell(c,l);n?this.flagCell(h):this.clickCell(h)}},flagCell:function(e){if(!e.revealed){e.flag=!e.flag;var t=this.grid.cells.filter((function(e){return e.flag})),n=t.filter((function(e){return e.bomb}));console.log(n,t),n.length===this.game.nBombs&&n.length===t.length&&(this.game.status="You win!")}},clickCell:function(e){e.flag||(this.firstClick&&(this.grid.cells=this.generateField([e.x,e.y]),e=this.getCell(e.x,e.y),console.log("First click, continuing?"),this.firstClick=!1),e.bomb?(this.game.status="You die!",this.game.isDead=!0,this.game.showBombs=!0):(e.revealed=!0,0===e.bombNeighbours&&e.neighbours.filter((function(e){return!e.revealed})).forEach(this.clickCell)))},getCell:function(e,t){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.grid.cells,o=Object(x["a"])(i);try{for(o.s();!(n=o.n()).done;){var a=n.value;void 0===a&&console.log(i,a)}}catch(s){o.e(s)}finally{o.f()}return i.find((function(n){return n.x===e&&n.y===t}))},render:function(){this.animation=requestAnimationFrame(this.render),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawBackground(),this.drawGridLines(),this.drawCells()},drawBackground:function(){this.context.fillStyle="#bdbdbd",this.context.fillRect(0,0,this.canvas.width,this.canvas.height)},drawGridLines:function(){var e=16,t=16;this.context.strokeStyle="#7b7b7b",this.context.lineWidth=1,this.context.beginPath();for(var n=0;n<=this.grid.width;n++)this.context.moveTo(.5+n*e,-.5),this.context.lineTo(.5+n*e,this.canvas.height+.5);for(var i=0;i<=this.grid.height;i++)this.context.moveTo(-.5,.5+i*t),this.context.lineTo(this.canvas.width+.5,.5+i*t);this.context.stroke()},drawCells:function(){var e,t=16,n=16,i=Object(x["a"])(this.grid.cells);try{for(i.s();!(e=i.n()).done;){var o=e.value;o.bomb&&this.game.showBombs?this.context.drawImage(this.images.bomb,o.x*t,o.y*n,t,n):o.flag?this.context.drawImage(this.images.flag,o.x*t,o.y*n,t,n):o.revealed&&o.bombNeighbours>0?this.context.drawImage(this.images.numbers[o.bombNeighbours],o.x*t,o.y*n,t,n):o.revealed||this.context.drawImage(this.images.cell,o.x*t,o.y*n,t,n)}}catch(a){i.e(a)}finally{i.f()}},resizeCanvas:function(){var e,t,n=this.$refs.canvasContainer.getBoundingClientRect(),i=n.width,o=n.height,a=i/o;a>this.canvasRatio?(e=o*this.canvasRatio,t=o):(e=i,t=i/this.canvasRatio),this.canvas.style.width=e+"px",this.canvas.style.height=t+"px",this.canvas.width=16*this.grid.width+1,this.canvas.height=16*this.grid.height+1}},watch:{"grid.width":function(){this.newGame()},"grid.height":function(){this.newGame()},"game.nBombs":function(){this.newGame()}},computed:{maxBombs:function(){var e=this.grid.width*this.grid.height,t=3*Math.min(this.grid.width,this.grid.height,3);return console.log(e-t),e-t},bombRules:function(){var e=this;return[function(e){return!!e||"Required"},function(e){return e>=1||"Number of bombs must be > 0"},function(t){return t<=e.maxBombs||"Number of bombs can at most be "+e.maxBombs}]}}},O=j,M=(n("825d"),n("8336")),_=n("8654"),I=Object(c["a"])(O,p,w,!1,null,"24821039",null),R=I.exports;h()(I,{VBtn:M["a"],VTextField:_["a"]});var T={name:"Home",components:{MineSweeper:R}},E=T,N=(n("cccb"),Object(c["a"])(E,v,b,!1,null,null,null)),S=N.exports;i["a"].use(m["a"]);var P=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],A=new m["a"]({routes:P}),F=A,G=n("2f62");i["a"].use(G["a"]);var $=new G["a"].Store({state:{},mutations:{},actions:{},modules:{}}),D=n("f309");i["a"].use(D["a"]);var q=new D["a"]({theme:{dark:!0}});i["a"].config.productionTip=!1,new i["a"]({router:F,store:$,vuetify:q,render:function(e){return e(g)}}).$mount("#app")},"825d":function(e,t,n){"use strict";var i=n("8b8f"),o=n.n(i);o.a},"8a23":function(e,t,n){},"8b8f":function(e,t,n){},cccb:function(e,t,n){"use strict";var i=n("4230"),o=n.n(i);o.a}});
//# sourceMappingURL=app.9ef8a9e4.js.map