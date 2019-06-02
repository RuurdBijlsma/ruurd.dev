(function(e){function t(t){for(var n,a,s=t[0],c=t[1],l=t[2],h=0,d=[];h<s.length;h++)a=s[h],r[a]&&d.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,s=1;s<i.length;s++){var c=i[s];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},r={app:0},o=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/emojicamera/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var n=i("64a9"),r=i.n(n);r.a},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("md-dialog",{staticClass:"settings-dialog",attrs:{"md-active":e.showSettings},on:{"update:mdActive":function(t){e.showSettings=t},"update:md-active":function(t){e.showSettings=t}}},[i("md-dialog-title",[e._v("Preferences")]),i("md-list",[i("md-list-item",[i("md-field",[i("label",[e._v("Emoji resolution")]),i("md-input",{attrs:{type:"number"},model:{value:e.emojiWidth,callback:function(t){e.emojiWidth=t},expression:"emojiWidth"}})],1)],1),i("md-list-item",[i("md-switch",{model:{value:e.showVideoBack,callback:function(t){e.showVideoBack=t},expression:"showVideoBack"}},[e._v("Show video background")])],1),i("md-list-item",[i("md-field",[i("label",{attrs:{for:"palette-select"}},[e._v("Quick palette")]),i("md-select",{attrs:{id:"palette-select"},model:{value:e.emojiPalette,callback:function(t){e.emojiPalette=t},expression:"emojiPalette"}},e._l(e.paletteOptions,function(t){return i("md-option",{attrs:{value:t.emojis}},[e._v(e._s(t.name)+"\n                        ")])}),1)],1)],1)],1),i("md-dialog-actions",[i("md-button",{staticClass:"md-primary",on:{click:function(t){e.showSettings=!1,e.updateSettings()}}},[e._v("Save & close")])],1)],1),i("md-content",[i("canvas",{directives:[{name:"show",rawName:"v-show",value:e.showVideoBack,expression:"showVideoBack"}],staticClass:"render-output",style:"transform: scaleX("+(e.frontFacing?"-1":"1")+");"}),i("div",{staticClass:"emoji-output",style:"transform: scaleX("+(e.frontFacing?"-1":"1")+");"}),i("md-button",{staticClass:"md-icon-button change-button",on:{click:function(t){e.frontFacing=!e.frontFacing,e.changeCamera()}}},[i("md-icon",[e._v("cached")])],1),i("md-button",{staticClass:"md-icon-button md-raised camera-button md-accent",on:{click:function(t){return e.downloadPicture()}}},[e._v("\n            📷\n        ")]),i("md-button",{staticClass:"md-icon-button settings-button",on:{click:function(t){e.showSettings=!e.showSettings}}},[i("md-icon",[e._v("settings")])],1)],1),i("md-snackbar",{staticClass:"snackbar",attrs:{"md-position":"center","md-duration":5e3,"md-active":e.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(t){e.showSnackbar=t},"update:md-active":function(t){e.showSnackbar=t}}},[i("span",[e._v("Picture saved!")])])],1)},o=[],a=i("768b"),s=(i("ac4d"),i("8a81"),i("ac6a"),i("75fc")),c=(i("96cf"),i("3b8d")),l=i("d225"),u=i("b0b4"),h=(i("28a5"),i("3b2b"),function(){function e(){Object(l["a"])(this,e),this.HIGH_SURROGATE_START=55296,this.HIGH_SURROGATE_END=56319,this.LOW_SURROGATE_START=56320,this.REGIONAL_INDICATOR_START=127462,this.REGIONAL_INDICATOR_END=127487,this.FITZPATRICK_MODIFIER_START=127995,this.FITZPATRICK_MODIFIER_END=127999}return Object(u["a"])(e,[{key:"spliddit",value:function(e,t){if(void 0===e||null===e)throw new Error("s cannot be undefined or null");return Array.isArray(e)&&(e=e.join("")),t instanceof RegExp||"string"===typeof t&&t.length?e.split(t):this.splitIntoChars(e)}},{key:"splitIntoChars",value:function(e){var t,i=0,n=[];while(i<e.length)t=this.takeHowMany(i,e),n.push(e.substring(i,i+t)),i+=t;return n}},{key:"takeHowMany",value:function(e,t){var i,n,r=t.length-1,o=t[e];return this.isFirstOfSurrogatePair(o)&&e!==r?e+3>r?2:(i=o+t[e+1],n=t.substring(e+2,e+5),this.isRegionalIndicatorSymbol(i)&&this.isRegionalIndicatorSymbol(n)?4:this.isFitzPatrickModifier(n)?4:2):1}},{key:"isFirstOfSurrogatePair",value:function(e){return!(void 0===e||null===e||!e.hasOwnProperty(0))&&this.betweenInclusive(e[0].charCodeAt(0),this.HIGH_SURROGATE_START,this.HIGH_SURROGATE_END)}},{key:"hasPair",value:function(e){return"string"===typeof e&&e.split("").some(this.isFirstOfSurrogatePair)}},{key:"isRegionalIndicatorSymbol",value:function(e){var t=this.codePointFromSurrogatePair(e);return this.betweenInclusive(t,this.REGIONAL_INDICATOR_START,this.REGIONAL_INDICATOR_END)}},{key:"isFitzPatrickModifier",value:function(e){var t=this.codePointFromSurrogatePair(e);return this.betweenInclusive(t,this.FITZPATRICK_MODIFIER_START,this.FITZPATRICK_MODIFIER_END)}},{key:"codePointFromSurrogatePair",value:function(e){var t=e.charCodeAt(0)-this.HIGH_SURROGATE_START,i=e.charCodeAt(1)-this.LOW_SURROGATE_START;return(t<<10)+i+65536}},{key:"betweenInclusive",value:function(e,t,i){return e>=t&&e<=i}}]),e}()),d=new h,f=function(){function e(){Object(l["a"])(this,e),this.epsilon=.008856,this.kappa=903.3,this.xyzWhiteReference={X:95.047,Y:100,Z:108.883}}return Object(u["a"])(e,[{key:"deltaE",value:function(e,t){return this.deltaEFromLab(this.rgbToLab.apply(this,Object(s["a"])(e)),this.rgbToLab.apply(this,Object(s["a"])(t)))}},{key:"deltaEFromLab",value:function(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)+Math.pow(e[2]-t[2],2))}},{key:"rgbToLab",value:function(e,t,i){var n=this.rgbToXyz(e,t,i),r=Object(a["a"])(n,3),o=r[0],s=r[1],c=r[2];return this.xyzToLab(o,s,c)}},{key:"rgbToXyz",value:function(e,t,i){var n=this.pivotRgb(e/255),r=this.pivotRgb(t/255),o=this.pivotRgb(i/255),a=.4124*n+.3576*r+.1805*o,s=.2126*n+.7152*r+.0722*o,c=.0193*n+.1192*r+.9505*o;return[a,s,c]}},{key:"xyzToLab",value:function(e,t,i){var n=this.pivotXyz(e/this.xyzWhiteReference.X),r=this.pivotXyz(t/this.xyzWhiteReference.Y),o=this.pivotXyz(i/this.xyzWhiteReference.Z),a=Math.max(0,116*r-16),s=500*(n-r),c=200*(r-o);return[a,s,c]}},{key:"pivotRgb",value:function(e){return 100*(e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)}},{key:"pivotXyz",value:function(e){return e>this.epsilon?Math.pow(e,1/3):(this.kappa*e+16)/116}}]),e}(),m=new f,v=function(){function e(t){Object(l["a"])(this,e),this.renderSize=10,t&&(this.palette=t,this.emojiToColor=this.createEmojiToColorMap(this.palette),this.colorToEmoji=this.createColorToEmojiMap(this.emojiToColor))}return Object(u["a"])(e,[{key:"filterNonRenderableEmojis",value:function(e){var t="",i=d.spliddit(e),n=!0,r=!1,o=void 0;try{for(var a,s=i[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var c=a.value,l=document.createElement("canvas"),u=l.getContext("2d");l.style.width="200px",l.style.height="200px",l.width=20,l.height=20,u.font="".concat(this.renderSize,"px Arial"),u.fillStyle="rgb(23, 129, 238)",u.fillText(c,0,0)}}catch(h){r=!0,o=h}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return t}},{key:"createEmojiToColorMap",value:function(e){var t={},i=d.spliddit(e),n=document.createElement("canvas"),r=n.getContext("2d");n.width=Math.round(1.4*this.renderSize)-2,n.height=Math.round(1.4*this.renderSize)-3,r.font="".concat(this.renderSize,"px Arial"),r.fillStyle="white";var o=!0,s=!1,c=void 0;try{for(var l,u=i[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var h=l.value;r.clearRect(0,0,n.width,n.height),r.fillText(h,0,this.renderSize);for(var f=r.getImageData(0,0,n.width,n.height),v=[0,0,0],p=0;p<f.data.length;p+=4){var g=f.data.slice(p,p+4),w=Object(a["a"])(g,4),b=w[0],j=w[1],y=w[2],S=w[3],T=m.rgbToLab(b,j,y);S/=255,v[0]+=T[0]*S,v[1]+=T[1]*S,v[2]+=T[2]*S}var R=f.data.length/4,k=[v[0]/R,v[1]/R,v[2]/R],E=this.isNonRenderable(h,r,n);E?console.log("Filtered out",h):t[h]=k}}catch(O){s=!0,c=O}finally{try{o||null==u.return||u.return()}finally{if(s)throw c}}return t}},{key:"isNonRenderable",value:function(e,t,i){var n=t.fillStyle,r=[23,129,238],o=[238,1,128],a=this.getFirstEncounteredColor(e,r,t,i),s=this.getFirstEncounteredColor(e,o,t,i);return t.fillStyle=n,a!==s}},{key:"getFirstEncounteredColor",value:function(e,t,i,n){i.fillStyle="rgb(".concat(t,")"),i.clearRect(0,0,n.width,n.height),i.fillText(e,0,this.renderSize);for(var r=i.getImageData(0,0,n.width,n.height),o="",s=0;s<r.data.length;s+=4){var c=r.data.slice(s,s+4),l=Object(a["a"])(c,4),u=l[0],h=l[1],d=l[2],f=l[3];if(f/=255,f>.1){o=[u,h,d].join(",");break}}return o}},{key:"createColorToEmojiMap",value:function(e){for(var t=100,i=4,n=[],r=-t;r<=t;r+=i){n[(r+t)/i]=[];for(var o=-t;o<=t;o+=i){n[(r+t)/i][(o+t)/i]=[];for(var a=-t;a<=t;a+=i){var s=[r,o,a],c=1/0,l=void 0;for(var u in e){var h=m.deltaEFromLab(s,e[u]);h<c&&(c=h,l=u)}n[(r+t)/i][(o+t)/i][(a+t)/i]=l}}}return{map:n,step:i,colorRange:t}}}],[{key:"fromJson",value:function(t){var i=JSON.parse(t),n=new e;return n.palette=i.palette,n.emojiToColor=i.emojiToColor,n.colorToEmoji=i.colorToEmoji,n}}]),e}(),p=function(){function e(){Object(l["a"])(this,e)}return Object(u["a"])(e,[{key:"emojiMap",value:function(e){if(!this.isCached(e))return this.createEmojiMap(e);try{return v.fromJson(localStorage[e])}catch(t){return this.createEmojiMap(e)}}},{key:"createEmojiMap",value:function(e){var t=new v(e);return localStorage[e]=JSON.stringify(t),t}},{key:"isCached",value:function(e){return null!==localStorage.getItem(e)}}]),e}(),g=new p,w=i("22a2"),b={name:"app",components:{},data:function(){return{showSnackbar:!1,showVideoBack:!0,showSettings:!1,canvas:null,context:null,video:null,videoCrop:[],paletteOptions:[{name:"Default",emojis:"😂💯🙈😡😍😱👌👌🏻👌🏼👌🏽👌🏾👌🏿🤡😈🤢👹👾🤖👻💩💍💋👅👄👥👀🎒👛👘👒👗👔👖👚👠🐾🌴🍃🌏🌓🌝🍏🍎🍋🥝🍳🥚🍖🏀⚾🎾🏐🏉👣💛💚💙💜🖤"},{name:"Flags",emojis:"🏳️🏴🏁🚩🏳️‍🌈🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇰🇭🇨🇲🇨🇦🇮🇨🇨🇻🇧🇶🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇰🇨🇷🇨🇮🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇯🇲🇯🇵🎌🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇳🇵🇱🇵🇹🇵🇷🇶🇦🇷🇪🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇬🇸🇸🇧🇸🇴🇿🇦🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇵🇲🇻🇨🇸🇩🇸🇷🇸🇿🇸🇪🇨🇭🇸🇾🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇻🇮🇺🇬🇺🇦🇦🇪🇬🇧🇺🇸🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"},{name:"Sepia",emojis:"👌👌🏻👌🏼👌🏽👌🏾👌"},{name:"Travel",emojis:"🚗🚕🚙🚌🚎🏎🚓🚑🚒🚐🚚🚛🚜🛴🚲🛵🏍🚨🚔🚍🚘🚖🚡🚠🚟🚃🚋🚞🚝🚄🚅🚈🚂🚆🚇🚊🚉🚁🛩✈️🛫🛬🚀🛰💺🛶⛵️🛥🚤🛳⛴🚢⚓️🚧⛽️🚏🚦🚥🗺🗿🗽⛲️🗼🏰🏯🏟🎡🎢🎠⛱🏖🏝⛰🏔🗻🌋🏜🏕⛺️🛤🛣🏗🏭🏠🏡🏘🏚🏢🏬🏣🏤🏥🏦🏨🏪🏫🏩💒🏛⛪️🕌🕍🕋⛩🗾🎑🏞🌅🌄🌠🎇🎆🌇🌆🏙🌃🌌🌉🌁"},{name:"All (very slow)",emojis:"😀😁😂🤣😃😄😅😆😉😊😋😎😍😘😗😙😚☺️🙂🤗🤩🤔🤨😐😑😶🙄😏😣😥😮🤐😯😪😫😴😌😛😜😝🤤😒😓😔😕🙃🤑😲☹️🙁😖😞😟😤😢😭😦😧😨😩🤯😬😰😱😳🤪😵😡😠🤬😷🤒🤕🤢🤮🤧😇🤠🤡🤥🤫🤭🧐🤓😈👿👹👺💀👻👽🤖💩😺😸😹😻😼😽🙀😿😾👶👦👧👨👩👴👵👨‍⚕️👩‍⚕️👨‍🎓👩‍🎓👨‍⚖️👩‍⚖️👨‍🌾👩‍🌾👨‍🍳👩‍🍳👨‍🔧👩‍🔧👨‍🏭👩‍🏭👨‍💼👩‍💼👨‍🔬👩‍🔬👨‍💻👩‍💻👨‍🎤👩‍🎤👨‍🎨👩‍🎨👨‍✈️👩‍✈️👨‍🚀👩‍🚀👨‍🚒👩‍🚒👮👮‍♂️👮‍♀️🕵🕵️‍♂️🕵️‍♀️💂💂‍♂️💂‍♀️👷👷‍♂️👷‍♀️🤴👸👳👳‍♂️👳‍♀️👲🧕🧔👱👱‍♂️👱‍♀️🤵👰🤰🤱👼🎅🤶🧙‍♀️🧙‍♂️🧚‍♀️🧚‍♂️🧛‍♀️🧛‍♂️🧜‍♀️🧜‍♂️🧝‍♀️🧝‍♂️🧞‍♀️🧞‍♂️🧟‍♀️🧟‍♂️🙍🙍‍♂️🙍‍♀️🙎🙎‍♂️🙎‍♀️🙅🙅‍♂️🙅‍♀️🙆🙆‍♂️🙆‍♀️💁💁‍♂️💁‍♀️🙋🙋‍♂️🙋‍♀️🙇🙇‍♂️🙇‍♀️🤦🤦‍♂️🤦‍♀️🤷🤷‍♂️🤷‍♀️💆💆‍♂️💆‍♀️💇💇‍♂️💇‍♀️🚶🚶‍♂️🚶‍♀️🏃🏃‍♂️🏃‍♀️💃🕺👯👯‍♂️👯‍♀️🧖‍♀️🧖‍♂️🕴🗣👤👥👫👬👭💏👨‍❤️‍💋‍👨👩‍❤️‍💋‍👩💑👨‍❤️‍👨👩‍❤️‍👩👪👨‍👩‍👦👨‍👩‍👧👨‍👩‍👧‍👦👨‍👩‍👦‍👦👨‍👩‍👧‍👧👨‍👨‍👦👨‍👨‍👧👨‍👨‍👧‍👦👨‍👨‍👦‍👦👨‍👨‍👧‍👧👩‍👩‍👦👩‍👩‍👧👩‍👩‍👧‍👦👩‍👩‍👦‍👦👩‍👩‍👧‍👧👨‍👦👨‍👦‍👦👨‍👧👨‍👧‍👦👨‍👧‍👧👩‍👦👩‍👦‍👦👩‍👧👩‍👧‍👦👩‍👧‍👧🤳💪👈👉☝️👆🖕👇✌️🤞🖖🤘🖐✋👌👍👎✊👊🤛🤜🤚👋🤟✍️👏👐🙌🤲🙏🤝💅👂👃👣👀👁🧠👅👄💋👓🕶👔👕👖🧣🧤🧥🧦👗👘👙👚👛👜👝🎒👞👟👠👡👢👑👒🎩🎓🧢⛑💄💍🌂💼👐🏻🙌🏻👏🏻🙏🏻👍🏻👎🏻👊🏻✊🏻🤛🏻🤜🏻🤞🏻✌🏻🤘🏻👌🏻👈🏻👉🏻👆🏻👇🏻☝🏻✋🏻🤚🏻🖐🏻🖖🏻👋🏻🤙🏻💪🏻🖕🏻✍🏻🤳🏻💅🏻👂🏻👃🏻👶🏻👦🏻👧🏻👨🏻👩🏻👱🏻‍♀️👱🏻👴🏻👵🏻👲🏻👳🏻‍♀️👳🏻👮🏻‍♀️👮🏻👷🏻‍♀️👷🏻💂🏻‍♀️💂🏻🕵🏻‍♀️🕵🏻👩🏻‍⚕️👨🏻‍⚕️👩🏻‍🌾👨🏻‍🌾👩🏻‍🍳👨🏻‍🍳👩🏻‍🎓👨🏻‍🎓👩🏻‍🎤👨🏻‍🎤👩🏻‍🏫👨🏻‍🏫👩🏻‍🏭👨🏻‍🏭👩🏻‍💻👨🏻‍💻👩🏻‍💼👨🏻‍💼👩🏻‍🔧👨🏻‍🔧👩🏻‍🔬👨🏻‍🔬👩🏻‍🎨👨🏻‍🎨👩🏻‍🚒👨🏻‍🚒👩🏻‍✈️👨🏻‍✈️👩🏻‍🚀👨🏻‍🚀👩🏻‍⚖️👨🏻‍⚖️🤶🏻🎅🏻👸🏻🤴🏻👰🏻🤵🏻👼🏻🤰🏻🙇🏻‍♀️🙇🏻💁🏻💁🏻‍♂️🙅🏻🙅🏻‍♂️🙆🏻🙆🏻‍♂️🙋🏻🙋🏻‍♂️🤦🏻‍♀️🤦🏻‍♂️🤷🏻‍♀️🤷🏻‍♂️🙎🏻🙎🏻‍♂️🙍🏻🙍🏻‍♂️💇🏻💇🏻‍♂️💆🏻💆🏻‍♂️🕴🏻💃🏻🕺🏻🚶🏻‍♀️🚶🏻🏃🏻‍♀️🏃🏻🏋🏻‍♀️🏋🏻🤸🏻‍♀️🤸🏻‍♂️⛹🏻‍♀️⛹🏻🤾🏻‍♀️🤾🏻‍♂️🏌🏻‍♀️🏌🏻🏄🏻‍♀️🏄🏻🏊🏻‍♀️🏊🏻🤽🏻‍♀️🤽🏻‍♂️🚣🏻‍♀️🚣🏻🏇🏻🚴🏻‍♀️🚴🏻🚵🏻‍♀️🚵🏻🤹🏻‍♀️🤹🏻‍♂️🛀🏻👐🏼🙌🏼👏🏼🙏🏼👍🏼👎🏼👊🏼✊🏼🤛🏼🤜🏼🤞🏼✌🏼🤘🏼👌🏼👈🏼👉🏼👆🏼👇🏼☝🏼✋🏼🤚🏼🖐🏼🖖🏼👋🏼🤙🏼💪🏼🖕🏼✍🏼🤳🏼💅🏼👂🏼👃🏼👶🏼👦🏼👧🏼👨🏼👩🏼👱🏼‍♀️👱🏼👴🏼👵🏼👲🏼👳🏼‍♀️👳🏼👮🏼‍♀️👮🏼👷🏼‍♀️👷🏼💂🏼‍♀️💂🏼🕵🏼‍♀️🕵🏼👩🏼‍⚕️👨🏼‍⚕️👩🏼‍🌾👨🏼‍🌾👩🏼‍🍳👨🏼‍🍳👩🏼‍🎓👨🏼‍🎓👩🏼‍🎤👨🏼‍🎤👩🏼‍🏫👨🏼‍🏫👩🏼‍🏭👨🏼‍🏭👩🏼‍💻👨🏼‍💻👩🏼‍💼👨🏼‍💼👩🏼‍🔧👨🏼‍🔧👩🏼‍🔬👨🏼‍🔬👩🏼‍🎨👨🏼‍🎨👩🏼‍🚒👨🏼‍🚒👩🏼‍✈️👨🏼‍✈️👩🏼‍🚀👨🏼‍🚀👩🏼‍⚖️👨🏼‍⚖️🤶🏼🎅🏼👸🏼🤴🏼👰🏼🤵🏼👼🏼🤰🏼🙇🏼‍♀️🙇🏼💁🏼💁🏼‍♂️🙅🏼🙅🏼‍♂️🙆🏼🙆🏼‍♂️🙋🏼🙋🏼‍♂️🤦🏼‍♀️🤦🏼‍♂️🤷🏼‍♀️🤷🏼‍♂️🙎🏼🙎🏼‍♂️🙍🏼🙍🏼‍♂️💇🏼💇🏼‍♂️💆🏼💆🏼‍♂️🕴🏼💃🏼🕺🏼🚶🏼‍♀️🚶🏼🏃🏼‍♀️🏃🏼🏋🏼‍♀️🏋🏼🤸🏼‍♀️🤸🏼‍♂️⛹🏼‍♀️⛹🏼🤾🏼‍♀️🤾🏼‍♂️🏌🏼‍♀️🏌🏼🏄🏼‍♀️🏄🏼🏊🏼‍♀️🏊🏼🤽🏼‍♀️🤽🏼‍♂️🚣🏼‍♀️🚣🏼🏇🏼🚴🏼‍♀️🚴🏼🚵🏼‍♀️🚵🏻🤹🏼‍♀️🤹🏼‍♂️🛀🏼👐🏽🙌🏽👏🏽🙏🏽👍🏽👎🏽👊🏽✊🏽🤛🏽🤜🏽🤞🏽✌🏽🤘🏽👌🏽👈🏽👉🏽👆🏽👇🏽☝🏽✋🏽🤚🏽🖐🏽🖖🏽👋🏽🤙🏽💪🏽🖕🏽✍🏽🤳🏽💅🏽👂🏽👃🏽👶🏽👦🏽👧🏽👨🏽👩🏽👱🏽‍♀️👱🏽👴🏽👵🏽👲🏽👳🏽‍♀️👳🏽👮🏽‍♀️👮🏽👷🏽‍♀️👷🏽💂🏽‍♀️💂🏽🕵🏽‍♀️🕵🏽👩🏽‍⚕️👨🏽‍⚕️👩🏽‍🌾👨🏽‍🌾👩🏽‍🍳👨🏽‍🍳👩🏽‍🎓👨🏽‍🎓👩🏽‍🎤👨🏽‍🎤👩🏽‍🏫👨🏽‍🏫👩🏽‍🏭👨🏽‍🏭👩🏽‍💻👨🏽‍💻👩🏽‍💼👨🏽‍💼👩🏽‍🔧👨🏽‍🔧👩🏽‍🔬👨🏽‍🔬👩🏽‍🎨👨🏽‍🎨👩🏽‍🚒👨🏽‍🚒👩🏽‍✈️👨🏽‍✈️👩🏽‍🚀👨🏽‍🚀👩🏽‍⚖️👨🏽‍⚖️🤶🏽🎅🏽👸🏽🤴🏽👰🏽🤵🏽👼🏽🤰🏽🙇🏽‍♀️🙇🏽💁🏽💁🏽‍♂️🙅🏽🙅🏽‍♂️🙆🏽🙆🏽‍♂️🙋🏽🙋🏽‍♂️🤦🏽‍♀️🤦🏽‍♂️🤷🏽‍♀️🤷🏽‍♂️🙎🏽🙎🏽‍♂️🙍🏽🙍🏽‍♂️💇🏽💇🏽‍♂️💆🏽💆🏽‍♂️🕴🏼💃🏽🕺🏽🚶🏽‍♀️🚶🏽🏃🏽‍♀️🏃🏽🏋🏽‍♀️🏋🏽🤸🏽‍♀️🤸🏽‍♂️⛹🏽‍♀️⛹🏽🤾🏽‍♀️🤾🏽‍♂️🏌🏽‍♀️🏌🏽🏄🏽‍♀️🏄🏽🏊🏽‍♀️🏊🏽🤽🏽‍♀️🤽🏽‍♂️🚣🏽‍♀️🚣🏽🏇🏽🚴🏽‍♀️🚴🏽🚵🏽‍♀️🚵🏽🤹🏽‍♀️🤹🏽‍♂️🛀🏽👐🏾🙌🏾👏🏾🙏🏾👍🏾👎🏾👊🏾✊🏾🤛🏾🤜🏾🤞🏾✌🏾🤘🏾👌🏾👈🏾👉🏾👆🏾👇🏾☝🏾✋🏾🤚🏾🖐🏾🖖🏾👋🏾🤙🏾💪🏾🖕🏾✍🏾🤳🏾💅🏾👂🏾👃🏾👶🏾👦🏾👧🏾👨🏾👩🏾👱🏾‍♀️👱🏾👴🏾👵🏾👲🏾👳🏾‍♀️👳🏾👮🏾‍♀️👮🏾👷🏾‍♀️👷🏾💂🏾‍♀️💂🏾🕵🏾‍♀️🕵🏾👩🏾‍⚕️👨🏾‍⚕️👩🏾‍🌾👨🏾‍🌾👩🏾‍🍳👨🏾‍🍳👩🏾‍🎓👨🏾‍🎓👩🏾‍🎤👨🏾‍🎤👩🏾‍🏫👨🏾‍🏫👩🏾‍🏭👨🏾‍🏭👩🏾‍💻👨🏾‍💻👩🏾‍💼👨🏾‍💼👩🏾‍🔧👨🏾‍🔧👩🏾‍🔬👨🏾‍🔬👩🏾‍🎨👨🏾‍🎨👩🏾‍🚒👨🏾‍🚒👩🏾‍✈️👨🏾‍✈️👩🏾‍🚀👨🏾‍🚀👩🏾‍⚖️👨🏾‍⚖️🤶🏾🎅🏾👸🏾🤴🏾👰🏾🤵🏾👼🏾🤰🏾🙇🏾‍♀️🙇🏾💁🏾💁🏾‍♂️🙅🏾🙅🏾‍♂️🙆🏾🙆🏾‍♂️🙋🏾🙋🏾‍♂️🤦🏾‍♀️🤦🏾‍♂️🤷🏾‍♀️🤷🏾‍♂️🙎🏾🙎🏾‍♂️🙍🏾🙍🏾‍♂️💇🏾💇🏾‍♂️💆🏾💆🏾‍♂️🕴🏾💃🏾🕺🏾🚶🏾‍♀️🚶🏾🏃🏾‍♀️🏃🏾🏋🏾‍♀️🏋🏾🤸🏾‍♀️🤸🏾‍♂️⛹🏾‍♀️⛹🏾🤾🏾‍♀️🤾🏾‍♂️🏌🏾‍♀️🏌🏾🏄🏾‍♀️🏄🏾🏊🏾‍♀️🏊🏾🤽🏾‍♀️🤽🏾‍♂️🚣🏾‍♀️🚣🏾🏇🏾🚴🏾‍♀️🚴🏾🚵🏾‍♀️🚵🏾🤹🏾‍♀️🤹🏾‍♂️🛀🏾👐🏿🙌🏿👏🏿🙏🏿👍🏿👎🏿👊🏿✊🏿🤛🏿🤜🏿🤞🏿✌🏿🤘🏿👌🏿👈🏿👉🏿👆🏿👇🏿☝🏿✋🏿🤚🏿🖐🏿🖖🏿👋🏿🤙🏿💪🏿🖕🏿✍🏿🤳🏿💅🏿👂🏿👃🏿👶🏿👦🏿👧🏿👨🏿👩🏿👱🏿‍♀️👱🏿👴🏿👵🏿👲🏿👳🏿‍♀️👳🏿👮🏿‍♀️👮🏿👷🏿‍♀️👷🏿💂🏿‍♀️💂🏿🕵🏿‍♀️🕵🏿👩🏿‍⚕️👨🏿‍⚕️👩🏿‍🌾👨🏿‍🌾👩🏿‍🍳👨🏿‍🍳👩🏿‍🎓👨🏿‍🎓👩🏿‍🎤👨🏿‍🎤👩🏿‍🏫👨🏿‍🏫👩🏿‍🏭👨🏿‍🏭👩🏿‍💻👨🏿‍💻👩🏿‍💼👨🏿‍💼👩🏿‍🔧👨🏿‍🔧👩🏿‍🔬👨🏿‍🔬👩🏿‍🎨👨🏿‍🎨👩🏿‍🚒👨🏿‍🚒👩🏿‍✈️👨🏿‍✈️👩🏿‍🚀👨🏿‍🚀👩🏿‍⚖️👨🏿‍⚖️🤶🏿🎅🏿👸🏿🤴🏿👰🏿🤵🏿👼🏿🤰🏿🙇🏿‍♀️🙇🏿💁🏿💁🏿‍♂️🙅🏿🙅🏿‍♂️🙆🏿🙆🏿‍♂️🙋🏿🙋🏿‍♂️🤦🏿‍♀️🤦🏿‍♂️🤷🏿‍♀️🤷🏿‍♂️🙎🏿🙎🏿‍♂️🙍🏿🙍🏿‍♂️💇🏿💇🏿‍♂️💆🏿💆🏿‍♂️🕴🏿💃🏿🕺🏿🚶🏿‍♀️🚶🏿🏃🏿‍♀️🏃🏿🏋🏿‍♀️🏋🏿🤸🏿‍♀️🤸🏿‍♂️⛹🏿‍♀️⛹🏿🤾🏿‍♀️🤾🏿‍♂️🏌🏿‍♀️🏌🏿🏄🏿‍♀️🏄🏿🏊🏿‍♀️🏊🏿🤽🏿‍♀️🤽🏿‍♂️🚣🏿‍♀️🚣🏿🏇🏿🚴🏿‍♀️🚴🏿🚵🏿‍♀️🚵🏿🤹🏿‍♀️🤹🏿‍♂️🛀🏿🐶🐱🐭🐹🐰🦊🐻🐼🐨🐯🦁🐮🐷🐽🐸🐵🙊🙉🙊🐒🐔🐧🐦🐤🐣🐥🦆🦅🦉🦇🐺🐗🐴🦄🐝🐛🦋🐌🐚🐞🐜🕷🕸🐢🐍🦎🦂🦀🦑🐙🦐🐠🐟🐡🐬🦈🐳🐋🐊🐆🐅🐃🐂🐄🦌🐪🐫🐘🦏🦍🐎🐖🐐🐏🐑🐕🐩🐈🐓🦃🕊🐇🐁🐀🐿🐾🐉🐲🌵🎄🌲🌳🌴🌱🌿☘️🍀🎍🎋🍃🍂🍁🍄🌾💐🌷🌹🥀🌻🌼🌸🌺🌎🌍🌏🌕🌖🌗🌘🌑🌒🌓🌔🌚🌝🌞🌛🌜🌙💫⭐️🌟✨⚡️🔥💥☄️☀️🌤⛅️🌥🌦🌈☁️🌧⛈🌩🌨☃️⛄️❄️🌬💨🌪🌫🌊💧💦☔️🍏🍎🍐🍊🍋🍌🍉🍇🍓🍈🍒🍑🍍🥝🥑🍅🍆🥒🥕🌽🌶🥔🍠🌰🥜🍯🥐🍞🥖🧀🥚🍳🥓🥞🍤🍗🍖🍕🌭🍔🍟🥙🌮🌯🥗🥘🍝🍜🍲🍥🍣🍱🍛🍚🍙🍘🍢🍡🍧🍨🍦🍰🎂🍮🍭🍬🍫🍿🍩🍪🥛🍼☕️🍵🍶🍺🍻🥂🍷🥃🍸🍹🍾🥄🍴🍽⚽️🏀🏈⚾️🎾🏐🏉🎱🏓🏸🥅🏒🏑🏏⛳️🏹🎣🥊🥋⛸🎿⛷🏂🏋️‍♀️🏋️🤺🤼‍♀️🤼‍♂️🤸‍♀️🤸‍♂️⛹️‍♀️⛹️🤾‍♀️🤾‍♂️🏌️‍♀️🏌️🏄‍♀️🏄🏊‍♀️🏊🤽‍♀️🤽‍♂️🚣‍♀️🚣🏇🚴‍♀️🚴🚵‍♀️🚵🎽🏅🎖🥇🥈🥉🏆🏵🎗🎫🎟🎪🤹‍♀️🤹‍♂️🎭🎨🎬🎤🎧🎼🎹🥁🎷🎺🎸🎻🎲🎯🎳🎮🎰🚗🚕🚙🚌🚎🏎🚓🚑🚒🚐🚚🚛🚜🛴🚲🛵🏍🚨🚔🚍🚘🚖🚡🚠🚟🚃🚋🚞🚝🚄🚅🚈🚂🚆🚇🚊🚉🚁🛩✈️🛫🛬🚀🛰💺🛶⛵️🛥🚤🛳⛴🚢⚓️🚧⛽️🚏🚦🚥🗺🗿🗽⛲️🗼🏰🏯🏟🎡🎢🎠⛱🏖🏝⛰🏔🗻🌋🏜🏕⛺️🛤🛣🏗🏭🏠🏡🏘🏚🏢🏬🏣🏤🏥🏦🏨🏪🏫🏩💒🏛⛪️🕌🕍🕋⛩🗾🎑🏞🌅🌄🌠🎇🎆🌇🌆🏙🌃🌌🌉🌁⌚️📱📲💻⌨️🖥🖨🖱🖲🕹🗜💽💾💿📀📼📷📸📹🎥📽🎞📞☎️📟📠📺📻🎙🎚🎛⏱⏲⏰🕰⌛️⏳📡🔋🔌💡🔦🕯🗑🛢💸💵💴💶💷💰💳💎⚖️🔧🔨⚒🛠⛏🔩⚙️⛓🔫💣🔪🗡⚔️🛡🚬⚰️⚱️🏺🔮📿💈⚗️🔭🔬🕳💊💉🌡🚽🚰🚿🛁🛀🛎🔑🗝🚪🛋🛏🛌🖼🛍🛒🎁🎈🎏🎀🎊🎉🎎🏮🎐✉️📩📨📧💌📥📤📦🏷📪📫📬📭📮📯📜📃📄📑📊📈📉🗒🗓📆📅📇🗃🗳🗄📋📁📂🗂🗞📰📓📔📒📕📗📘📙📚📖🔖🔗📎🖇📐📏📌📍📌🎌🏳️🏴🏁🏳️‍🌈✂️🖊🖋✒️🖌🖍📝✏️🔍🔎🔏🔐🔒🔓❤️💛💚💙💜🖤💔❣️💕💞💓💗💖💘💝💟☮️✝️☪️🕉☸️✡️🔯🕎☯️☦️🛐⛎♈️♉️♊️♋️♌️♍️♎️♏️♐️♑️♒️♓️🆔⚛️🉑☢️☣️📴📳🈶🈚️🈸🈺🈷️✴️🆚💮🉐㊙️㊗️🈴🈵🈹🈲🅰️🅱️🆎🆑🅾️🆘❌⭕️🛑⛔️📛🚫💯💢♨️🚷🚯🚳🚱🔞📵🚭❗️❕❓❔‼️⁉️🔅🔆〽️⚠️🚸🔱⚜️🔰♻️✅🈯️💹❇️✳️❎🌐💠Ⓜ️🌀💤🏧🚾♿️🅿️🈳🈂️🛂🛃🛄🛅🚹🚺🚼🚻🚮🎦📶🈁🔣ℹ️🔤🔡🔠🆖🆗🆙🆒🆕🆓0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟🔢#️⃣*️⃣▶️⏸⏯⏹⏺⏭⏮⏩⏪⏫⏬◀️🔼🔽➡️⬅️⬆️⬇️↗️↘️↙️↖️↕️↔️↪️↩️⤴️⤵️🔀🔁🔂🔄🔃🎵🎶➕➖➗✖️💲💱™️©️®️〰️➰➿🔚🔙🔛🔝✔️☑️🔘⚪️⚫️🔴🔵🔺🔻🔸🔹🔶🔷🔳🔲▪️▫️◾️◽️◼️◻️⬛️⬜️🔈🔇🔉🔊🔔🔕📣📢👁‍🗨💬💭🗯♠️♣️♥️♦️🃏🎴🀄️🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛🕜🕝🕞🕟🕠🕡🕢🕣🕤🕥🕦🕧🏳️🏴🏁🚩🏳️‍🌈🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇰🇭🇨🇲🇨🇦🇮🇨🇨🇻🇧🇶🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇰🇨🇷🇨🇮🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇯🇲🇯🇵🎌🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇳🇵🇱🇵🇹🇵🇷🇶🇦🇷🇪🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇬🇸🇸🇧🇸🇴🇿🇦🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇵🇲🇻🇨🇸🇩🇸🇷🇸🇿🇸🇪🇨🇭🇸🇾🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇻🇮🇺🇬🇺🇦🇦🇪🇬🇧🇺🇸🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼😃💁People•🐻🌻Animals•🍔🍹Food•🎷⚽️Activities•🚘🌇Travel•💡🎉Objects•💖🔣Symbols•🎌🏳️‍🌈Flags🤩🤨🤯🤪🤬🤮🤫🤭🧐🧒🧑🧓🧕🧔🤱🧙🧙‍♀️🧙‍♂️🧚🧚‍♀️🧚‍♂️🧛🧛‍♀️🧛‍♂️🧜🧜‍♀️🧜‍♂️🧝🧝‍♀️🧝‍♂️🧞🧞‍♀️🧞‍♂️🧟🧟‍♀️🧟‍♂️🧖🧖‍♀️🧖‍♂️🧗🧗‍♀️🧗‍♂️🧘🧘‍♀️🧘‍♂️🤟🤲🧠🧡🧣🧤🧥🧦🧢🦓🦒🦔🦕🦖🦗🥥🥦🥨🥩🥪🥣🥫🥟🥠🥡🥧🥤🥢🛸🛷🥌🏴󠁧󠁢󠁥󠁮󠁧󠁿🏴󠁧󠁢󠁳󠁣󠁴󠁿🏴󠁧󠁢󠁷󠁬󠁳󠁿😃💁People•🐻🌻Animals•🍔🍹Food•🎷⚽️Activities•🚘🌇Travel•💡🎉Objects•💖🔣Symbols•🎌🏳️‍🌈Flags☺️☹☝️✌️✍️❤️❣️☠♨️✈️⌛⌚♈♉♊♋♌♍♎♏♐♑♒♓☀️☁️☂️❄️⛄️☄♠️♥️♦️♣️▶️◀️☎️⌨✉️✏️✒️✂️↗️➡️↘️↙️↖️↕️↔️↩️↪️✡️☸☯️✝️☦☪☮☢☣☑️✔️✖️✳️✴️❇️‼️©️®️™️Ⓜ️▪️▫️#⃣️*️⃣0⃣️1⃣️2⃣️3⃣️4⃣️5⃣️6⃣️7⃣️8⃣️9⃣️⁉️ℹ️⤴️⤵️♻️◻️◼️◽◾☕⚠️☔⏏⬆️⬇️⬅️⚡☘⚓♿⚒⚙⚗⚖⚔⚰⚱⚜⚛⚪⚫🀄⭐⬛⬜⛑⛰⛪⛲⛺⛽⛵⛴⛔⛅⛈⛱⛄⚽⚾️⛳⛸⛷⛹⛏⛓⛩⭕❗🅿️❦♕♛♔♖♜☾→⇒⟹⇨⇰➩➪➫➬➭➮➯➲➳➵➸➻➺➼➽☜☟➹➷↶↷✆⌘⎋⏎⏏⎈⎌⍟❥ツღ☻"}],emojiPalette:"",spriteCache:{},emojiWidth:20,emojiMap:null,grid:null,windowHeight:innerHeight,frontFacing:!0,animationRequest:!1}},mounted:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getCameraList();case 2:if(this.cameraDevices=e.sent,this.video=document.createElement("video"),this.video.setAttribute("autoplay",""),this.canvas=document.querySelector(".render-output"),this.context=this.canvas.getContext("2d"),null!==localStorage.getItem("lastPalette")?this.emojiPalette=localStorage.lastPalette:this.emojiPalette=this.paletteOptions[0].emojis,this.renderView=new w["a"]({transparent:!0}),this.renderView.renderer.resize(0,0),console.log(this.renderView),document.querySelector(".emoji-output").appendChild(this.renderView.view),window.addEventListener("resize",function(){return t.windowUpdate()}),this.windowUpdate(),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){e.next=17;break}return e.next=17,this.changeCamera();case 17:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{changeCamera:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,i,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return!1!==this.animationRequest&&cancelAnimationFrame(this.animationRequest),t={facingMode:"user"},i={facingMode:{exact:"environment"}},e.next=5,navigator.mediaDevices.getUserMedia({video:this.frontFacing?t:i});case 5:this.video.srcObject=e.sent,this.video.play(),this.video.oncanplay=function(){n.updateSettings(),n.animationRequest=requestAnimationFrame(function(){return n.renderEmoji()})};case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getCameraList:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:return t=e.sent,e.abrupt("return",t.filter(function(e){return"videoinput"===e.kind}));case 4:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),updateSettings:function(){this.updatePalette(),this.emojiWidth=+this.emojiWidth;var e=Math.floor(this.emojiWidth/(innerWidth/this.windowHeight));console.log("UPADTE SETTINGS",this.emojiWidth,"ratio",innerWidth/this.windowHeight,"height",e),this.grid=this.createEmojiGrid(this.emojiWidth,e),this.windowUpdate()},downloadPicture:function(){var e=this.renderView.renderer,t=(new Date).toLocaleString()+".png",i=w["b"].create(e.width,e.height);e.render(this.renderView.stage,i);var n=e.extract.canvas(i),r=n.toDataURL("image/png"),o=document.createElement("a");document.body.append(o),o.download=t,o.href=r,o.click(),o.remove(),this.showSnackbar=!0},renderEmoji:function(){var e,t=this;requestAnimationFrame(function(){return t.renderEmoji()});var i=performance.now();(e=this.context).drawImage.apply(e,[this.video].concat(Object(s["a"])(this.videoCrop),[0,0,this.canvas.width,this.canvas.height]));var n=this.context.getImageData(0,0,this.canvas.width,this.canvas.height).data;this.pictureToEmoji(this.grid,n),this.renderEmojiGrid(this.grid);performance.now()},updatePalette:function(){null!==this.emojiMap&&this.emojiMap.palette===this.emojiPalette||(this.emojiMap=g.emojiMap(this.emojiPalette),this.updateEmojiTextureMap())},updateEmojiTextureMap:function(){console.log("Updating emoji texture map");var e=innerWidth/this.emojiWidth,t=!0,i=!1,n=void 0;try{for(var r,o=d.spliddit(this.emojiPalette)[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var a=r.value,s=new w["d"](a,{fontSize:e,fill:"#ffffff"});s.updateText(),this.spriteCache[a]=s.texture}}catch(c){i=!0,n=c}finally{try{t||null==o.return||o.return()}finally{if(i)throw n}}},renderEmojiGrid:function(e){var t=innerWidth/this.emojiWidth;while(this.renderView.stage.children[0])this.renderView.stage.removeChild(this.renderView.stage.children[0]);for(var i=0;i<e.height;i++)for(var n=0;n<e.width;n++){var r=e.grid[i][n],o=new w["c"](this.spriteCache[r]);o.x=n*t,o.y=i*t,this.renderView.stage.addChild(o)}},createEmojiGrid:function(e,t){for(var i=[],n=0;n<t;n++)i.push([]);return{width:e,height:t,grid:i}},pictureToEmoji:function(e,t){for(var i=0;i<t.length;i+=4){for(var n=i/4,r=Math.floor(n/e.width),o=n%e.width,s=t.slice(i,i+3),c=Object(a["a"])(s,3),l=c[0],u=c[1],h=c[2],d=m.rgbToLab(l,u,h),f=0;f<d.length;f++)d[f]=Math.round((this.emojiMap.colorToEmoji.colorRange+d[f])/this.emojiMap.colorToEmoji.step);e.grid[r][o]=this.emojiMap.colorToEmoji.map[d[0]][d[1]][d[2]]}},windowUpdate:function(){if(this.grid){console.log("WINDOW UPDASTEW",this.grid),this.renderView.renderer.resize(innerWidth,this.windowHeight),this.updateEmojiTextureMap(),this.video.setAttribute("width",this.video.videoWidth),this.video.setAttribute("height",this.video.videoHeight),this.canvas.width=this.grid.width,this.canvas.height=this.grid.height;var e,t,i,n,r=this.video,o=r.videoWidth,a=r.videoHeight,s=innerWidth/this.windowHeight,c=o/a;c>s?(i=a*s,n=a,e=(o-i)/2,t=0):(i=o,n=o/s,e=0,t=(a-n)/2),this.videoCrop=[e,t,i,n]}}},watch:{emojiPalette:function(){localStorage.lastPalette=this.emojiPalette}}},j=b,y=(i("034f"),i("2877")),S=Object(y["a"])(j,r,o,!1,null,null,null),T=S.exports,R=i("9483");Object(R["a"])("".concat("/emojicamera/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var k=i("43f9"),E=i.n(k);i("51de"),i("0759");n["default"].use(E.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(T)}}).$mount("#app")},"64a9":function(e,t,i){}});
//# sourceMappingURL=app.f50faf93.js.map