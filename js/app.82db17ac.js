(function(){"use strict";var t={6260:function(t,e,a){var r=a(144),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("MovieLibrary")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar"),a("TvShows"),a("ContactForm"),a("AppFooter")],1)},n=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"overflow-hidden"},[r("v-card",{attrs:{color:"grey lighten-4",flat:"",tile:""}},[r("video",{attrs:{autoplay:"",muted:"",loop:"",id:"HeaderVideo"},domProps:{muted:!0}},[r("source",{attrs:{src:a(8659),type:"video/mp4"}})]),r("v-app-bar",{attrs:{color:"black",app:""},scopedSlots:t._u([{key:"img",fn:function(e){var a=e.props;return[r("v-img",t._b({},"v-img",a,!1))]}}])},[r("v-avatar",{attrs:{size:"200",tile:!0}},[r("img",{attrs:{src:a(6271),alt:"logo"}})]),r("v-spacer"),r("v-app-bar-nav-icon",{staticClass:"hidden-lg-and-up",on:{click:function(e){t.drawer=!0}}}),r("v-tabs",{staticClass:"d-none d-lg-block",attrs:{right:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tabs-slider",{attrs:{color:"yellow"}}),t._l(t.links,(function(e){return r("v-tab",{key:e.name,on:{click:function(a){return t.changeTab(e)}}},[t._v(" "+t._s(e.name)+" ")])}))],2)],1)],1),r("v-spacer"),r("v-card",{attrs:{color:"black",dark:""}},[r("v-card-title",{staticClass:"text-h3"},[t._v(" MOVIE LIBRARY ")]),r("v-card-subtitle",{staticClass:"text-h7 text-left"},[t._v("dLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua")])],1),r("v-navigation-drawer",{attrs:{absolute:"",temporary:"",right:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",t._l(t.links,(function(e,a){return r("v-list-item",{key:e.name},[r("v-list-item-title",{on:{click:function(e){t.tab=a}}},[t._v(t._s(e.name))])],1)})),1)],1)],1)],1)],1)},c=[],u=a(8345);r["default"].use(u.Z);const d=[{path:"/",name:"home",component:jt},{path:"/schedule",name:"Schedule",component:jt},{path:"/our-screens",name:"Our Screens",component:jt},{path:"/movie-library",name:"Movie Library",component:jt},{path:"/location-contact",name:"Location & Contact",component:jt},{path:"/gallery",name:"/Gallery",component:jt}],m=new u.Z({mode:"history",base:"/",routes:d});var v=m,p={name:"NavBar",data(){return{drawer:!1,tab:3,links:[{name:"Home",path:"/"},{name:"Our Screens",path:"/our-screens"},{name:"Schedule",path:"/schedule"},{name:"Movie Library",path:"/movie-library"},{name:"Location & Contact",path:"/location-contact"},{name:"Gallery",path:"/gallery"}]}},methods:{changeTab(t){v.push({name:t.name})}}},f=p,h=a(1001),b=a(3453),g=a.n(b),_=a(8320),x=a(5206),y=a(6370),w=a(3237),C=a(7118),V=a(7047),Z=a(6816),k=a(7620),S=a(7874),T=a(4347),F=a(4006),N=a(9762),E=a(4227),L=a(4334),A=a(1208),B=(0,h.Z)(f,l,c,!1,null,"1e5887a1",null),M=B.exports;g()(B,{VAppBar:_.Z,VAppBarNavIcon:x.Z,VAvatar:y.Z,VCard:w.Z,VCardSubtitle:C.Qq,VCardTitle:C.EB,VImg:V.Z,VList:Z.Z,VListItem:k.Z,VListItemGroup:S.Z,VListItemTitle:T.V9,VNavigationDrawer:F.Z,VSpacer:N.Z,VTab:E.Z,VTabs:L.Z,VTabsSlider:A.Z});var O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"flexcard",attrs:{height:"100%"}},[a("v-toolbar",{attrs:{color:"transparent",dark:""}},[a("v-toolbar-title",[t._v("Collect your favourites")]),a("v-spacer"),a("v-text-field",{staticStyle:{"margin-top":"25px"},attrs:{label:"Search title and add to grid",placeholder:"Search title and add to grid","prepend-icon":"mdi-magnify",outlined:"",dense:""},on:{input:this.debounceSearch},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),""!==t.title?a("v-toolbar",{attrs:{color:"blue",dark:"",height:"40px"}},[a("v-spacer"),a("v-toolbar-title",[t._v("Search result for "+t._s(t.title))]),a("v-spacer")],1):t._e(),""!==t.title&&0===t.tvShows.length?a("NotFound"):t._e(),0!==t.tvShows.length&&""!==t.title?a("v-slide-group",{staticClass:"pa-4",attrs:{"active-class":"success","show-arrows":""}},t._l(t.tvShows,(function(e){return a("v-slide-item",{key:e.show.id},[a("v-card",{staticClass:"ma-4",attrs:{height:"400",width:"250"}},[a("v-img",{attrs:{src:e.show.image.original,height:"200px"}}),a("v-card-title",[t._v(" "+t._s(e.show.name)+" ")]),a("v-card-subtitle",{domProps:{innerHTML:t._s(e.show.summary.substring(0,30)+"...")}}),a("v-card-actions",[t.isAdded(e)?t._e():a("v-btn",{attrs:{color:"orange lighten-2",text:""},on:{click:function(a){return t.addToFavourite(e)}}},[t._v(" Add To Favourite ")]),a("v-row",{attrs:{justify:"space-around"}},[t.isAdded(e)?a("v-icon",{attrs:{large:"",color:"red"}},[t._v(" mdi-heart ")]):t._e()],1)],1)],1)],1)})),1):t._e(),a("v-toolbar",{attrs:{color:"amber",dark:"",height:"40px"}},[a("v-spacer"),a("v-toolbar-title",{staticClass:"ju"},[t._v("My Collection")]),a("v-spacer")],1),t.favourites.length<1?a("EmptyCollection"):t._e(),a("v-container",[0!==t.favourites.length?a("v-row",{attrs:{"no-gutters":""}},t._l(t.favourites,(function(e){return a("v-col",{key:e.show.id},[a("v-card",{staticClass:"mx-auto",staticStyle:{"margin-bottom":"10px"},attrs:{"max-width":"344",height:"400",color:"#3A3B3C"}},[a("v-img",{attrs:{src:e.show.image.original,height:"200px"}},[a("v-app-bar",{attrs:{flat:"",color:"transparent"}},[a("v-spacer"),a("v-btn",{attrs:{color:"white",icon:""},on:{click:function(a){return t.removeFromFavourites(e)}}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1),a("v-card-title",[t._v(" "+t._s(e.show.name)+" ")]),a("v-card-subtitle",{domProps:{innerHTML:t._s(e.show.summary.substring(0,150)+"...")}})],1)],1)})),1):t._e()],1)],1)],1)},$=[],q=a(9669),I=a.n(q),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-alert",{attrs:{text:"",prominent:"",type:"error",icon:"mdi-cloud-alert"}},[t._v(" No Matching Shows Found ")])],1)},R=[],j={name:"NotFound"},P=j,H=a(1234),Y=(0,h.Z)(P,z,R,!1,null,"62ad1f3e",null),D=Y.exports;g()(Y,{VAlert:H.Z});var G=a(3279),Q=a.n(G),W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-alert",{attrs:{text:"",prominent:"",type:"warning",icon:"mdi-cloud-alert"}},[t._v(" Your collection is Empty! ")])],1)},U=[],J={name:"EmptyCollection"},K=J,X=(0,h.Z)(K,W,U,!1,null,"71c5cf5b",null),tt=X.exports;g()(X,{VAlert:H.Z});var et={name:"TvShows",components:{EmptyCollection:tt,NotFound:D},data(){return{tvShows:[],favourites:[],title:""}},methods:{getTvShows(){console.log(this.title),""!==this.title?I().get("https://api.tvmaze.com/search/shows?q="+this.title).then((t=>{this.tvShows=t.data})):this.tvShows=[]},debounceSearch:Q()((function(){this.getTvShows()}),500),addToFavourite(t){this.favourites.push(t)},isAdded(t){const e=this.favourites.find((e=>e.show.id===t.show.id));return!!e},removeFromFavourites(t){const e=this.favourites.findIndex((e=>e.show.id===t.show.id));e>-1&&this.favourites.splice(e,1)}},mounted(){}},at=et,rt=a(680),ot=a(2102),st=a(9846),it=a(6428),nt=a(2877),lt=a(7955),ct=a(4820),ut=a(3105),dt=a(6656),mt=a(7921),vt=(0,h.Z)(at,O,$,!1,null,"2a82faa6",null),pt=vt.exports;g()(vt,{VAppBar:_.Z,VBtn:rt.Z,VCard:w.Z,VCardActions:C.h7,VCardSubtitle:C.Qq,VCardTitle:C.EB,VCol:ot.Z,VContainer:st.Z,VIcon:it.Z,VImg:V.Z,VRow:nt.Z,VSlideGroup:lt.ZP,VSlideItem:ct.Z,VSpacer:N.Z,VTextField:ut.Z,VToolbar:dt.Z,VToolbarTitle:mt.qW});var ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-title",[a("strong",{staticClass:"subheading"},[t._v("Tv Forest")]),a("v-spacer"),a("v-container",{staticClass:"text-right"},[a("span",[t._v("Follow us on")]),t._l(t.icons,(function(e){return a("v-btn",{key:e,staticClass:"mx-1",attrs:{dark:"",icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e)+" ")])],1)}))],2)],1),a("v-divider"),a("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Copyright © 2022 Tv Forest. All rights reserved. ")])])],1)],1)},ht=[],bt={name:"AppFooter",data:()=>({icons:["mdi-twitter","mdi-youtube"]})},gt=bt,_t=a(1418),xt=a(899),yt=(0,h.Z)(gt,ft,ht,!1,null,"051115fe",null),wt=yt.exports;g()(yt,{VBtn:rt.Z,VCard:w.Z,VCardText:C.ZB,VCardTitle:C.EB,VContainer:st.Z,VDivider:_t.Z,VFooter:xt.Z,VIcon:it.Z,VSpacer:N.Z});var Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"10px"}},[a("v-form",{ref:"form",staticClass:"md-layout",attrs:{"lazy-validation":"",novalidate:""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card",{staticClass:"md-layout-item md-size-50 md-small-size-100",attrs:{color:"black"}},[a("md-card-header",[a("div",{staticClass:"md-title"},[t._v("How to reach us ")])]),a("md-card-content",[a("div",{staticClass:"md-layout md-gutter"},[a("div",{staticClass:"md-layout-item md-small-size-100"},[a("v-text-field",{attrs:{solo:"",required:"",rules:t.firstNameRules},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(" First Name"),a("span",{staticClass:"red--text"},[a("strong",[t._v("* ")])])]},proxy:!0}]),model:{value:t.form.firstName,callback:function(e){t.$set(t.form,"firstName",e)},expression:"form.firstName"}})],1),a("div",{staticClass:"md-layout-item md-small-size-100"},[a("v-text-field",{attrs:{solo:"",required:"",rules:t.lastNameRules},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(" Last Name"),a("span",{staticClass:"red--text"},[a("strong",[t._v("* ")])])]},proxy:!0}]),model:{value:t.form.lastName,callback:function(e){t.$set(t.form,"lastName",e)},expression:"form.lastName"}})],1)]),a("v-text-field",{attrs:{solo:"",rules:t.emailRules,required:""},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(" Email"),a("span",{staticClass:"red--text"},[a("strong",[t._v("* ")])])]},proxy:!0}]),model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("v-text-field",{attrs:{label:"Telephone",solo:""},model:{value:t.form.telephone,callback:function(e){t.$set(t.form,"telephone",e)},expression:"form.telephone"}}),a("v-textarea",{attrs:{label:"Message","auto-grow":"",outlined:"",rows:"8","row-height":"15",solo:""},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}}),a("v-col",{staticClass:"text-left"},[a("span",{staticClass:"red--text"},[a("strong",[t._v("* ")])]),t._v(" Required Fields ")]),a("v-checkbox",{attrs:{rules:[function(t){return!!t||"You must agree to continue!"}],label:"I agree to the Terms & Conditions\n",required:""},model:{value:t.terms,callback:function(e){t.terms=e},expression:"terms"}}),a("v-col",{staticClass:"text-right"},[a("v-btn",{staticClass:"mr-4",attrs:{color:"warning"},on:{click:t.submit}},[t._v(" Submit ")]),a("v-snackbar",{staticClass:"snackbar",attrs:{timeout:2e3,"multi-line":!0},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[a("v-btn",t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.submitted=!1}}},"v-btn",r,!1),[t._v(" Close ")])]}}]),model:{value:t.submitted,callback:function(e){t.submitted=e},expression:"submitted"}},[t._v(" Thanks for reaching us! ")])],1)],1)],1),a("MapLocation")],1)],1)},Vt=[],Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"md-layout-item md-size-50 md-small-size-100",attrs:{color:"black"}},[a("div",{staticClass:"google-maps"},[a("iframe",{attrs:{width:"100%",height:"600",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",src:"https://maps.google.com/maps?width=100%25&height=600&hl=en&q=eBEYONDS%20Digital%20Marketing,%20Avissawella%20Road,%20Pannipitiya+(Your%20Business%20Name)&t=&z=15&ie=UTF8&iwloc=B&output=embed"}},[a("a",{attrs:{href:"https://www.gps.ie/sport-gps/"}},[t._v("hiking gps")])])])])},kt=[],St={name:"MapLocation"},Tt=St,Ft=(0,h.Z)(Tt,Zt,kt,!1,null,"7521db57",null),Nt=Ft.exports;g()(Ft,{VCard:w.Z});var Et={name:"ContactForm",components:{MapLocation:Nt},data:()=>({form:{firstName:null,lastName:null,email:null,telephone:null,message:null},terms:!1,valid:!1,submitted:!1,emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+\..+/.test(t)||"E-mail must be valid"],firstNameRules:[t=>!!t||"First Name is required"],lastNameRules:[t=>!!t||"Last Name is required"]}),methods:{submit(){this.$refs.form.validate()&&(console.log(this.form),this.submitted=!0)}}},Lt=Et,At=a(9362),Bt=a(6232),Mt=a(3202),Ot=a(4350),$t=(0,h.Z)(Lt,Ct,Vt,!1,null,"586290ae",null),qt=$t.exports;g()($t,{VBtn:rt.Z,VCard:w.Z,VCheckbox:At.Z,VCol:ot.Z,VForm:Bt.Z,VSnackbar:Mt.Z,VTextField:ut.Z,VTextarea:Ot.Z});var It={name:"MovieLibrary",components:{NavBar:M,ContactForm:qt,AppFooter:wt,TvShows:pt}},zt=It,Rt=(0,h.Z)(zt,i,n,!1,null,"590d6c75",null),jt=Rt.exports,Pt={components:{MovieLibrary:jt}},Ht=Pt,Yt=a(7524),Dt=(0,h.Z)(Ht,o,s,!1,null,null,null),Gt=Dt.exports;g()(Dt,{VApp:Yt.Z});var Qt=a(8535),Wt=a.n(Qt),Ut=a(8209),Jt=a.n(Ut);a(243);r["default"].config.productionTip=!1,r["default"].use(Wt()),r["default"].use(Jt()),new r["default"]({vuetify:new(Jt())({theme:{dark:!0}}),router:v,render:t=>t(Gt)}).$mount("#app")},6271:function(t,e,a){t.exports=a.p+"img/LogoWhite.51eee96d.svg"},8659:function(t,e,a){t.exports=a.p+"media/HeaderVideo.ac3ff1f9.mp4"}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,r,o,s){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],s=t[u][2];for(var n=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(n=!1,s<i&&(i=s));if(n){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[r,o,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,s,i=r[0],n=r[1],l=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in n)a.o(n,o)&&(a.m[o]=n[o]);if(l)var u=l(a)}for(e&&e(r);c<i.length;c++)s=i[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},r=self["webpackChunktv_forest"]=self["webpackChunktv_forest"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(6260)}));r=a.O(r)})();
//# sourceMappingURL=app.82db17ac.js.map