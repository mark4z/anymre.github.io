(function(t){function e(e){for(var i,a,u=e[0],s=e[1],c=e[2],l=0,p=[];l<u.length;l++)a=u[l],r[a]&&p.push(r[a][0]),r[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var f=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85da"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("dac5"),n("6e26"),n("9604"),n("df67");var i=n("6e6d"),r=n("2427"),o=n.n(r),a={},u=o.a.create(a);u.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),u.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=u,window.axios=u,Object.defineProperties(t.prototype,{axios:{get:function(){return u}},$axios:{get:function(){return u}}})},i["default"].use(Plugin);Plugin;var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("grid",{attrs:{id:"grid"}})],1)},c=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[t._l(t.life,function(e,i){return[n("row",{key:i},[t._l(e,function(e,r){return[n("Button",{key:r,staticClass:"fig",class:e.now?"info":"",on:{click:function(e){return t.flip(i,r)}}})]})],2)]}),n("Button",{attrs:{type:"success",ghost:""},on:{click:t.next}},[t._v("Next")]),n("Button",{attrs:{type:"warning",ghost:""},on:{click:t.initLocal}},[t._v("Clear")]),n("Button",{attrs:{type:"warning",ghost:""},on:{click:t.start}},[t._v("Start")])],2)},l=[],p={name:"grid",data:function(){return{life:[],scale:12,off:0}},created:function(){this.init()},methods:{init:function(){var t=this;this.$axios.get("/api/init/init").then(function(e){t.life=e.data.data,t.scale=e.data.scale}).catch(t.initLocal)},initLocal:function(){for(var t=this.scale,e=new Array(t),n=0;n<t;n++){for(var i=new Array(t),r=0;r<t;r++)i[r]={now:0,next:0};e[n]=i}this.life=e},flip:function(t,e){0===this.life[t][e].now?i["default"].set(this.life[t],e,{now:1,next:0}):i["default"].set(this.life[t],e,{now:0,next:0})},next:function(){for(var t=1;t<this.scale-1;t++)for(var e=1;e<this.scale-1;e++)this.cell(t,e);this.update()},cell:function(t,e){for(var n=0,i=0;i<3;i++)for(var r=0;r<3;r++)t>0&&t+1<=this.scale&&e>0&&e+1<=this.scale&&(n+=this.life[t-1+i][e-1+r].now);n-=this.life[t][e].now,n<2&&(this.life[t][e].next=0),n>3&&(this.life[t][e].next=0),2===n&&(this.life[t][e].next=this.life[t][e].now),3===n&&(this.life[t][e].next=1)},update:function(){for(var t=0;t<this.scale;t++)for(var e=0;e<this.scale;e++)this.life[t][e].now=this.life[t][e].next;i["default"].set(this.life,this.life)},start:function(){setInterval(this.next,100)}}},d=p,h=(n("6e99"),n("6691")),v=Object(h["a"])(d,f,l,!1,null,"7bdfe72b",null),g=v.exports,w={name:"app",components:{grid:g},data:function(){return{}},created:function(){}},x=w,y=(n("034f"),Object(h["a"])(x,s,c,!1,null,null,null)),b=y.exports,m=n("ce0f"),_=n.n(m);n("6aa2");i["default"].use(_.a),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(b)}}).$mount("#app")},"6e99":function(t,e,n){"use strict";var i=n("ee44"),r=n.n(i);r.a},"85da":function(t,e,n){},ee44:function(t,e,n){}});
//# sourceMappingURL=app.f69acde1.js.map