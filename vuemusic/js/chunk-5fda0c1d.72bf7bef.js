(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fda0c1d"],{1511:function(t,e,s){"use strict";s.r(e);var a=s("b0af"),i=s("ce7e"),r=function(){var t=this,e=t._self._c;return t.$store.state.user[t.id]?e("div",{staticClass:"user"},[e("div",{staticClass:"banner"},[e("div",{staticClass:"banner-background",style:{backgroundImage:`url(${t.$store.getters.itemImage(t.user)})`,opacity:t.$vuetify.theme.dark?.1:.3}}),e("div",{staticClass:"user-center"},[e("glow-image",{attrs:{rounded:"",url:t.$store.getters.itemImage(t.user),size:250}})],1),e("div",{staticClass:"banner-content"},[e("div",{staticClass:"buttons"},[e("div",{staticClass:"left-banner-content"},[e("h1",[t._v(t._s(t.user.display_name))])]),e("item-menu",{attrs:{item:t.user,color:"primary"}})],1)])]),e(a["a"],{staticClass:"content",attrs:{tile:"",flat:""}},[e("div",{staticClass:"sub-caption"},[e("span",[t._v(t._s(t.user.followers.total)+" followers")])]),e(i["a"],{staticClass:"divider"}),t.user.playlists.length>0?e("h2",{staticClass:"playlists-title"},[t._v("User playlists")]):t._e(),e("div",{staticClass:"playlists-grid"},t._l(t.user.playlists,(function(t){return e("item-square",{key:t.id,attrs:{item:t}})})),1)],1)],1):t._e()},u=[],l=s("1f42"),n=s("a892"),o=s("5c2f"),d=s("5dd2"),c=s("190f"),m=s("9bcd"),p=s("506b"),h={name:"User",components:{GlowImage:p["a"],ItemMenu:m["a"],FollowMenuItem:c["a"],ShareMenuItem:d["a"],ItemSquare:o["a"],ItemRow:n["a"],TrackItem:l["a"]},data:()=>({}),async mounted(){await this.$store.dispatch("loadUser",this.id)},computed:{id(){return this.$route.params.id},user(){return console.log("User",this.$store.state.user[this.id]),this.$store.state.user[this.id]}},watch:{async"$route.query"(){await this.$store.dispatch("loadUser",this.id)}},beforeRouteLeave(t,e,s){s()}},f=h,g=(s("6e70"),s("2877")),b=Object(g["a"])(f,r,u,!1,null,"6b4c54dd",null);e["default"]=b.exports},"4ed3":function(t,e,s){},"506b":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"glow-image",style:{width:t.size+"px"}},[e("div",{staticClass:"album-art album-background",style:{backgroundImage:`url(${t.image})`,opacity:t.$vuetify.theme.dark?.4:.7,minWidth:t.size+"px",height:t.size+"px",right:-t.size/2+"px",borderRadius:t.rounded?"50%":"5px",top:t.size/16+"px",filter:`blur(${t.size/16}px)`}}),e("div",{staticClass:"album-art album-normal",style:{backgroundImage:`url(${t.image})`,minWidth:t.size+"px",height:t.size+"px",left:-t.size/2+"px",borderRadius:t.rounded?"50%":"5px"}})])},i=[],r={name:"GlowImage",props:{url:{type:String,default:void 0},size:{type:Number,default:300},rounded:{type:Boolean,default:!1}},computed:{image(){return this.url?this.url:this.$store.getters.notFoundImage}}},u=r,l=(s("5317"),s("2877")),n=Object(l["a"])(u,a,i,!1,null,"881e9648",null);e["a"]=n.exports},5317:function(t,e,s){"use strict";s("fda0")},"6e70":function(t,e,s){"use strict";s("4ed3")},fda0:function(t,e,s){}}]);
//# sourceMappingURL=chunk-5fda0c1d.72bf7bef.js.map