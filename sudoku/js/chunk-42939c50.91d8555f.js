(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42939c50"],{1037:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"create-puzzle"},[a("h2",[t._v("Choose preset")]),a("v-divider",{staticClass:"ma-4"}),a("div",{staticClass:"cards"},t._l(t.presets,(function(e){return a("v-card",{key:e.id},[a("v-img",{attrs:{src:s("e4c7"),height:"200px",width:"300px"}}),a("v-card-title",[t._v(t._s(e.name))]),a("v-card-subtitle",[t._v(t._s(e.description))]),a("v-card-actions",[a("v-btn",{attrs:{to:"/create/"+e.id,color:"primary",text:""}},[t._v("Choose preset")])],1)],1)})),1)],1)},r=[],i={name:"CreatePuzzle",components:{},data:function(){return{presets:[{name:"Sudoku",description:"Start out with classic sudoku constraints.",id:"sudoku",options:{Width:{selected:9,values:[4,9,16]},Height:{selected:9,values:[4,9,16]}}}]}},mounted:function(){},methods:{},watch:{},computed:{}},n=i,c=(s("6bd7"),s("2877")),o=s("6544"),d=s.n(o),l=s("8336"),u=(s("0481"),s("4069"),s("a9e3"),s("5530")),h=(s("615b"),s("10d2")),v=s("297c"),p=s("1c87"),b=s("58df"),m=Object(b["a"])(v["a"],p["a"],h["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(u["a"])(Object(u["a"])({"v-card":!0},p["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},h["a"].options.computed.classes.call(this))},styles:function(){var t=Object(u["a"])({},h["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=v["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),s=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(s,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}}),g=s("80d2"),f=Object(g["h"])("v-card__actions"),_=Object(g["h"])("v-card__subtitle"),k=(Object(g["h"])("v-card__text"),Object(g["h"])("v-card__title")),C=(s("8ce9"),s("7560")),j=C["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(u["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(u["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),O=s("adda"),w=Object(c["a"])(n,a,r,!1,null,"046384c8",null);e["default"]=w.exports;d()(w,{VBtn:l["a"],VCard:m,VCardActions:f,VCardSubtitle:_,VCardTitle:k,VDivider:j,VImg:O["a"]})},"615b":function(t,e,s){},"6bd7":function(t,e,s){"use strict";var a=s("82fd"),r=s.n(a);r.a},"82fd":function(t,e,s){},"8ce9":function(t,e,s){},e4c7:function(t,e,s){t.exports=s.p+"img/sudoku.8eb32d00.png"}}]);
//# sourceMappingURL=chunk-42939c50.91d8555f.js.map