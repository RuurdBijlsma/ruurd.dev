(function(e){function t(t){for(var r,i,o=t[0],u=t[1],l=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},2547:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=n("43f9"),a=n.n(s),i=(n("51de"),n("e094"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("md-app",[n("md-app-toolbar",{staticClass:"md-primary"},[n("span",{staticClass:"md-title"},[e._v("Media Download")])]),n("md-app-content",[n("router-view")],1)],1)],1)}),o=[],u=(n("d3b7"),n("96cf"),n("d4ec")),l=n("bee2"),c=function(){function e(){Object(u["a"])(this,e)}return Object(l["a"])(e,[{key:"setEndpoint",value:function(e){this.endPoint=e,this.user=null,this.password=null}},{key:"getDirectory",value:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(null!==this.user&&null!==this.password){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,regeneratorRuntime.awrap(this.json(this.endPoint+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:this.user,password:this.password})}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),null,this)}},{key:"json",value:function(e,t){var n,r;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,regeneratorRuntime.awrap(fetch(e,t));case 2:return n=s.sent,s.next=5,regeneratorRuntime.awrap(n.text());case 5:return r=s.sent,s.prev=6,s.abrupt("return",JSON.parse(r));case 10:return s.prev=10,s.t0=s["catch"](6),console.warn("Could not parse server response",r),s.abrupt("return",!1);case 14:case"end":return s.stop()}}),null,null,[[6,10]])}},{key:"auth",value:function(e,t){var n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(this.json(this.endPoint+"/auth",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:e,password:t})}));case 2:return n=r.sent,!0===n&&(this.user=e,this.password=t),r.abrupt("return",n);case 5:case"end":return r.stop()}}),null,this)}}]),e}(),d=new c;d.setEndpoint("https://api.ruurd.dev");var p={name:"app"},h=p,f=(n("034f"),n("2877")),m=Object(f["a"])(h,i,o,!1,null,null,null),v=m.exports,g=n("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("form",{staticClass:"md-layout",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.validateUser(t)}}},[n("md-card",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[n("md-card-header",[n("div",{staticClass:"md-title"},[e._v("Log-in")])]),n("md-card-content",[n("div",{staticClass:"md-layout md-gutter"},[n("div",{staticClass:"md-layout-item md-small-size-100"},[n("md-field",{class:e.getValidationClass("user")},[n("label",{attrs:{for:"user"}},[e._v("Username")]),n("md-input",{attrs:{name:"user",id:"user",autocomplete:"username",disabled:e.sending},model:{value:e.form.user,callback:function(t){e.$set(e.form,"user",t)},expression:"form.user"}}),e.$v.form.user.required?e.$v.form.user.minlength?e._e():n("span",{staticClass:"md-error"},[e._v("Invalid user name")]):n("span",{staticClass:"md-error"},[e._v("The user name is required")])],1)],1),n("div",{staticClass:"md-layout-item md-small-size-100"},[n("md-field",{class:e.getValidationClass("password")},[n("label",{attrs:{for:"password"}},[e._v("Password")]),n("md-input",{attrs:{name:"password",id:"password",type:"password",disabled:e.sending},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e.$v.form.password.required?e.$v.form.password.minlength?e._e():n("span",{staticClass:"md-error"},[e._v("Invalid password")]):n("span",{staticClass:"md-error"},[e._v("The password is required")])],1)],1)])]),e.sending?n("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):e._e(),n("md-card-actions",[n("md-button",{staticClass:"md-primary",attrs:{type:"submit",disabled:e.sending}},[e._v("Save user")])],1)],1),n("md-snackbar",{attrs:{"md-active":e.userSaved},on:{"update:mdActive":function(t){e.userSaved=t},"update:md-active":function(t){e.userSaved=t}}},[e._v("The user "+e._s(e.lastUser)+" was logged in with success!")]),n("md-snackbar",{attrs:{"md-active":e.loginFail},on:{"update:mdActive":function(t){e.loginFail=t},"update:md-active":function(t){e.loginFail=t}}},[e._v("Credentials don't match any records!")])],1)])},b=[],y=n("1dce"),x=n("b5ae"),_={name:"Login",mixins:[y["validationMixin"]],data:function(){return{form:{user:null,password:null},userSaved:!1,loginFail:!1,sending:!1,lastUser:null}},validations:{form:{user:{required:x["required"],minLength:Object(x["minLength"])(3)},password:{required:x["required"],minLength:Object(x["minLength"])(3)}}},methods:{getValidationClass:function(e){var t=this.$v.form[e];if(t)return{"md-invalid":t.$invalid&&t.$dirty}},clearForm:function(){this.$v.$reset(),this.form.user=null,this.form.password=null},saveUser:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return this.sending=!0,t.next=3,regeneratorRuntime.awrap(d.auth(this.form.user,this.form.password));case 3:e=t.sent,this.sending=!1,e?(localStorage.auth=JSON.stringify({user:this.form.user,password:this.form.password}),this.lastUser="".concat(this.form.user),this.userSaved=!0,this.clearForm(),location.href="#/",location.reload()):this.loginFail=!0;case 6:case"end":return t.stop()}}),null,this)},validateUser:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:this.$v.$touch(),this.$v.$invalid||this.saveUser();case 2:case"end":return e.stop()}}),null,this)}}},$=_,O=Object(f["a"])($,w,b,!1,null,"7002817a",null),T=O.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("md-list",[n("md-list-item",{on:{click:e.goUp}},[n("md-icon",[e._v("keyboard_arrow_up")])],1),e._l(e.files,(function(t){return n("md-list-item",{key:t.path},[t.directory?n("md-button",{staticClass:"md-icon-button",on:{click:function(n){return e.loadItem(t)}}},[n("md-icon",[e._v("folder")])],1):n("a",{attrs:{href:e.endPoint+"/file?token="+t.token,download:t.path.split("/")[t.path.split("/").length-1]}},[n("md-button",{staticClass:"md-icon-button"},[n("md-icon",[e._v("cloud_download")])],1)],1),n("span",{staticClass:"md-list-item-text"},[n("trunquee",{attrs:{text:t.path}})],1)],1)}))],2)],1)},C=[],j=(n("caad"),n("a15b"),n("fb6a"),n("ac1f"),n("2532"),n("1276"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"text",staticClass:"truncate",style:e.styles,domProps:{innerHTML:e._s(e.displayText)},on:{mouseenter:e.onEnter,mouseleave:e.onLeave}})}),S=[],R=(n("a9e3"),{props:{text:{type:String,required:!0},speed:{type:Number,default:85},cursor:{type:String,default:"help"}},data:function(){return{displayText:"",interval:null}},computed:{styles:function(){return{cursor:this.interval?this.cursor:"default"}}},watch:{text:{immediate:!0,handler:function(){this.interval||this.resetText()}}},mounted:function(){this.$text=this.$refs.text},methods:{onEnter:function(){var e=this;!this.interval&&this.isTruncated()&&(this.interval=setInterval((function(){if(!e.isTruncated())return clearInterval(e.interval);e.displayText=e.displayText.slice(1);while(" "===e.displayText.charAt())e.displayText=e.displayText.slice(1)}),this.speed))},onLeave:function(){this.interval&&(clearInterval(this.interval),this.interval=!1),this.resetText()},isTruncated:function(){return this.getTruncatedDistance()>0},getTruncatedDistance:function(){return this.$text.scrollWidth-this.$text.clientWidth},resetText:function(){this.displayText=this.text}}}),P=R,q=(n("9c98"),Object(f["a"])(P,j,S,!1,null,"6dedbae2",null)),E=q.exports,U={name:"home",components:{Trunquee:E},data:function(){return{files:[],endPoint:d.endPoint}},mounted:function(){var e,t,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:if(null!==localStorage.getItem("auth")||this.$route.path.includes("/login")){r.next=5;break}return r.next=3,regeneratorRuntime.awrap(this.$router.push("/login"));case 3:r.next=9;break;case 5:return e=JSON.parse(localStorage.auth),t=e.user,n=e.password,r.next=8,regeneratorRuntime.awrap(d.auth(t,n));case 8:this.initialize(this.$route.path);case 9:case"end":return r.stop()}}),null,this)},methods:{goUp:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.path.split("/"),e=e.slice(0,e.length-1),t.next=4,regeneratorRuntime.awrap(this.$router.push(e.join("/")));case 4:case"end":return t.stop()}}),null,this)},initialize:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(d.getDirectory(e));case 2:this.files=t.sent;case 3:case"end":return t.stop()}}),null,this)},loadItem:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.directory){t.next=5;break}return t.next=3,regeneratorRuntime.awrap(this.$router.push(e.path));case 3:t.next=6;break;case 5:alert("ERROR this is a file :0");case 6:case"end":return t.stop()}}),null,this)}},beforeDestroy:function(){clearInterval(this.interval)},watch:{$route:function(e,t){console.log("to",e),this.initialize(this.$route.path)}}},F=U,I=Object(f["a"])(F,k,C,!1,null,"4a986f0f",null),L=I.exports;r["default"].use(g["a"]);var N=[{path:"/",redirect:"/media"},{path:"/login",name:"login",component:T},{path:"/*",name:"home",component:L}],z=new g["a"]({routes:N}),D=z,J=n("9483");Object(J["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].config.productionTip=!1,r["default"].use(a.a),new r["default"]({router:D,render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,n){},"9c98":function(e,t,n){"use strict";var r=n("2547"),s=n.n(r);s.a}});
//# sourceMappingURL=app.6e7b26a8.js.map