(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1faa1251"],{"4bb4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map"},[n("photo-map",{style:{height:t.mapHeight+"px",width:t.mapWidth+"px"},attrs:{height:t.mapHeight,width:t.mapWidth}})],1)},i=[],o=n("1da1"),r=(n("96cf"),n("2b0e")),s=n("c62a"),l=r["a"].extend({name:"Map",components:{PhotoMap:s["a"]},data:function(){return{}},mounted:function(){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{},computed:{mapHeight:function(){return this.$vuetify.breakpoint.height-this.$vuetify.application.top-this.$vuetify.application.bottom},mapWidth:function(){return this.$vuetify.breakpoint.width-this.$vuetify.application.left-this.$vuetify.application.right}},watch:{}}),u=l,c=(n("5a2b"),n("2877")),p=Object(c["a"])(u,a,i,!1,null,"19d20ecc",null);e["default"]=p.exports},"5a2b":function(t,e,n){"use strict";n("8e9a")},"8e9a":function(t,e,n){},c62a:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.leaflet.center&&t.leaflet.zoom?n("l-map",{ref:"map",attrs:{zoom:t.leaflet.zoom,center:t.leaflet.center,options:t.leaflet.options},on:{"update:bounds":t.mapPanned,ready:t.addMarkers}},[n("l-tile-layer",{attrs:{options:t.leaflet.tileOptions,url:t.leaflet.url,attribution:t.leaflet.attribution}}),null!==t.startBounds?n("l-rectangle",{attrs:{bounds:t.startBounds,color:"red","fill-color":"red",weight:t.leaflet.zoom/6,"fill-opacity":.01}}):t._e()],1):t._e()},i=[],o=n("b85c"),r=n("1da1"),s=(n("96cf"),n("a9e3"),n("d81d"),n("159b"),n("99af"),n("2b0e")),l=n("2699"),u=n("a40a"),c=n("4e2b"),p=n("e11e"),h=n.n(p),d=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},f=function(t,e,n,a){var i=function(a){var i="set"+d(a),o=n[a].type===Object||n[a].type===Array||Array.isArray(n[a].type);n[a].custom&&t[i]?t.$watch(a,(function(e,n){t[i](e,n)}),{deep:o}):"setOptions"===i?t.$watch(a,(function(t,n){Object(p["setOptions"])(e,t)}),{deep:o}):e[i]&&t.$watch(a,(function(t,n){e[i](t)}),{deep:o})};for(var o in n)i(o)},m=function(t){var e={};for(var n in t){var a=t[n];null!==a&&void 0!==a&&(e[n]=a)}return e},y=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var a=m(n);t=m(t);var i=e.$options.props;for(var o in t){var r=i[o]?i[o].default&&"function"===typeof i[o].default?i[o].default.call():i[o].default:Symbol("unique"),s=!1;s=Array.isArray(r)?JSON.stringify(r)===JSON.stringify(t[o]):r===t[o],a[o]&&!s?(console.warn(o+" props is overriding the value passed in the options props"),a[o]=t[o]):a[o]||(a[o]=t[o])}return a},b=function(t){var e=!1;while(t&&!e)void 0===t.mapObject?t=t.$parent:e=!0;return t},g={props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null,custom:!0},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){var n=this.$parent.mapObject.attributionControl;n.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}},v={props:{interactive:{type:Boolean,default:!0},bubblingMouseEvents:{type:Boolean,default:!0}},mounted:function(){this.interactiveLayerOptions={interactive:this.interactive,bubblingMouseEvents:this.bubblingMouseEvents}}},O={mixins:[g,v],props:{lStyle:{type:Object,custom:!0,default:null},stroke:{type:Boolean,custom:!0,default:!0},color:{type:String,custom:!0,default:"#3388ff"},weight:{type:Number,custom:!0,default:3},opacity:{type:Number,custom:!0,default:1},lineCap:{type:String,custom:!0,default:"round"},lineJoin:{type:String,custom:!0,default:"round"},dashArray:{type:String,custom:!0,default:null},dashOffset:{type:String,custom:!0,default:null},fill:{type:Boolean,custom:!0,default:!1},fillColor:{type:String,custom:!0,default:"#3388ff"},fillOpacity:{type:Number,custom:!0,default:.2},fillRule:{type:String,custom:!0,default:"evenodd"},className:{type:String,custom:!0,default:null}},mounted:function(){if(this.pathOptions=Object.assign({},this.layerOptions,this.interactiveLayerOptions,{stroke:this.stroke,color:this.color,weight:this.weight,opacity:this.opacity,lineCap:this.lineCap,lineJoin:this.lineJoin,dashArray:this.dashArray,dashOffset:this.dashOffset,fill:this.fill,fillColor:this.fillColor,fillOpacity:this.fillOpacity,fillRule:this.fillRule,className:this.className}),this.lStyle)for(var t in console.warn("lStyle is deprecated and is going to be removed in the next major version"),this.lStyle)this.pathOptions[t]=this.lStyle[t]},beforeDestroy:function(){this.parentContainer?this.parentContainer.removeLayer(this):console.error("Missing parent container")},methods:{setLStyle:function(t){this.mapObject.setStyle(t)},setStroke:function(t){this.mapObject.setStyle({stroke:t})},setColor:function(t){this.mapObject.setStyle({color:t})},setWeight:function(t){this.mapObject.setStyle({weight:t})},setOpacity:function(t){this.mapObject.setStyle({opacity:t})},setLineCap:function(t){this.mapObject.setStyle({lineCap:t})},setLineJoin:function(t){this.mapObject.setStyle({lineJoin:t})},setDashArray:function(t){this.mapObject.setStyle({dashArray:t})},setDashOffset:function(t){this.mapObject.setStyle({dashOffset:t})},setFill:function(t){this.mapObject.setStyle({fill:t})},setFillColor:function(t){this.mapObject.setStyle({fillColor:t})},setFillOpacity:function(t){this.mapObject.setStyle({fillOpacity:t})},setFillRule:function(t){this.mapObject.setStyle({fillRule:t})},setClassName:function(t){this.mapObject.setStyle({className:t})}}},w={mixins:[O],props:{smoothFactor:{type:Number,custom:!0,default:1},noClip:{type:Boolean,custom:!0,default:!1}},data:function(){return{ready:!1}},mounted:function(){this.polyLineOptions=Object.assign({},this.pathOptions,{smoothFactor:this.smoothFactor,noClip:this.noClip})},methods:{setSmoothFactor:function(t){this.mapObject.setStyle({smoothFactor:t})},setNoClip:function(t){this.mapObject.setStyle({noClip:t})},addLatLng:function(t){this.mapObject.addLatLng(t)}}},j={mixins:[w],props:{fill:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.polygonOptions=this.polyLineOptions},methods:{getGeoJSONData:function(){return this.mapObject.toGeoJSON()}}},S={props:{options:{type:Object,default:function(){return{}}}}},L={name:"LRectangle",mixins:[j,S],props:{bounds:{default:function(){return[[0,0],[0,0]]},validator:function(t){return t&&Object(p["latLngBounds"])(t).isValid()}}},data:function(){return{ready:!1}},mounted:function(){var t=this,e=y(this.polygonOptions,this);this.mapObject=Object(p["rectangle"])(this.bounds,e),p["DomEvent"].on(this.mapObject,this.$listeners),f(this,this.mapObject,this.$options.props),this.ready=!0,this.parentContainer=b(this.$parent),this.parentContainer.addLayer(this,!this.visible),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))}};function C(t,e,n,a,i,o,r,s,l,u){"boolean"!==typeof r&&(l=s,s=r,r=!1);var c,p="function"===typeof n?n.options:n;if(t&&t.render&&(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,i&&(p.functional=!0)),a&&(p._scopeId=a),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},p._ssrRegister=c):e&&(c=r?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),c)if(p.functional){var h=p.render;p.render=function(t,e){return c.call(e),h(t,e)}}else{var d=p.beforeCreate;p.beforeCreate=d?[].concat(d,c):[c]}return n}var x=L,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"none"}},[t.ready?t._t("default"):t._e()],2)},$=[],M=void 0,R=void 0,_=void 0,B=!1,N=C({render:k,staticRenderFns:$},M,x,R,B,_,!1,void 0,void 0,void 0),T=N,A=n("1a43"),F=s["a"].extend({name:"PhotoMap",components:{LMap:l["a"],LTileLayer:u["a"],LMarker:c["a"],LRectangle:T},props:{width:{type:Number,required:!0},height:{type:Number,required:!0},startBounds:{type:h.a.LatLngBounds}},data:function(){return{photosInBounds:null,mapRef:null,popup:h.a.popup({maxWidth:"auto"}),leaflet:{zoom:12,center:null,url:"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',options:{zoomSnap:.5},tileOptions:{id:"mapbox/streets-v11",accessToken:""},bounds:null,markers:[]},panTimeout:-1}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.leaflet.tileOptions.id=t.$vuetify.theme.dark?"mapbox/dark-v10":"mapbox/streets-v11",t.leaflet.tileOptions.accessToken=t.$store.state.mapboxKey,!t.startBounds){e.next=6;break}t.leaflet.bounds=t.startBounds,e.next=12;break;case 6:return e.next=8,t.$store.dispatch("apiRequest",{url:"photos/totalBounds"});case 8:n=e.sent,a=h.a.latLng(n.minlat,n.minlng,0),i=h.a.latLng(n.maxlat,n.maxlng,0),t.leaflet.bounds=h.a.latLngBounds(a,i).pad(.05);case 12:t.leaflet.bounds&&(t.leaflet.center=t.leaflet.bounds.getCenter(),t.leaflet.zoom=t.getBoundsZoomLevel(t.leaflet.bounds,{width:t.width,height:t.height}),t.photosInBounds=t.updateFromBounds());case 13:case"end":return e.stop()}}),e)})))()},methods:{mapPanned:function(t){var e=this;clearTimeout(this.panTimeout),this.panTimeout=setTimeout(Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.leaflet.bounds=t,e.photosInBounds=e.updateFromBounds(),n.next=4,e.addMarkers();case 4:case"end":return n.stop()}}),n)}))),200)},updateFromBounds:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.leaflet.bounds){e.next=2;break}return e.abrupt("return");case 2:return e.abrupt("return",t.$store.dispatch("apiRequest",{url:"photos/photosInBounds",body:{minLat:t.leaflet.bounds.getSouth(),maxLat:t.leaflet.bounds.getNorth(),minLng:t.leaflet.bounds.getWest(),maxLng:t.leaflet.bounds.getEast()}}));case 3:case"end":return e.stop()}}),e)})))()},addMarkers:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a,i,r,s,l,u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.mapRef=t.$refs.map,e.next=3,t.photosInBounds;case 3:n=e.sent,a=t.$vuetify.theme.dark,i=t.$vuetify.theme.themes[a?"dark":"light"],r=i.primary,s=i.secondary,t.leaflet.markers.forEach((function(t){return t.remove()})),t.leaflet.markers=[],console.log("zoom",t.leaflet.zoom),l=Object(o["a"])(n);try{for(c=function(){var e=u.value,n=h.a.circleMarker([e.MediaLocation.latitude,e.MediaLocation.longitude],{radius:8,color:"image"===e.type?r:s,opacity:.6,weight:2,fillColor:"image"===e.type?r:s,fillOpacity:.2}),a=e.width/e.height,i=200;n.addTo(t.mapRef.mapObject),n.on("click",(function(n){var o="image"===e.type?'<img height="'.concat(i,'" width="').concat(i*a,'" src="').concat(A["a"],"/photo/tiny/").concat(e.id,'.webp" alt="Image at ').concat(n.latlng.lat,", ").concat(n.latlng.lng,'">'):'<video height="'.concat(i,'" width="').concat(i*a,'" src="').concat(A["a"],"/photo/webm/").concat(e.id,'.webm" autoplay controls loop>');t.popup.setLatLng(n.latlng).setContent('<a href="'.concat(location.pathname,"#/photo/").concat(e.id,'">').concat(o,"</a>")).openOn(t.mapRef.mapObject)})),t.leaflet.markers.push(n)},l.s();!(u=l.n()).done;)c()}catch(p){l.e(p)}finally{l.f()}case 13:case"end":return e.stop()}}),e)})))()},getBoundsZoomLevel:function(t,e){var n={height:256,width:256},a=21,i=function(t){var e=Math.sin(t*Math.PI/180),n=Math.log((1+e)/(1-e))/2;return Math.max(Math.min(n,Math.PI),-Math.PI)/2},o=function(t,e,n){return Math.floor(Math.log(t/e/n)/Math.LN2)},r=t.getNorthEast(),s=t.getSouthWest(),l=(i(r.lat)-i(s.lat))/Math.PI,u=r.lng-s.lng,c=(u<0?u+360:u)/360,p=o(e.height,n.height,l),h=o(e.width,n.width,c);return Math.min(p,h,a)}},computed:{},watch:{}}),E=F,P=n("2877"),I=Object(P["a"])(E,a,i,!1,null,"55861d56",null);e["a"]=I.exports}}]);
//# sourceMappingURL=chunk-1faa1251.d28228fb.js.map