var e=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(r,a,t)=>a in r?e(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,s=(e,r)=>{for(var a in r||(r={}))i.call(r,a)&&o(e,a,r[a]);if(t)for(var a of t(r))n.call(r,a)&&o(e,a,r[a]);return e},l=(e,t)=>r(e,a(t)),c=(e,r)=>{var a={};for(var o in e)i.call(e,o)&&r.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&t)for(var o of t(e))r.indexOf(o)<0&&n.call(e,o)&&(a[o]=e[o]);return a};import{E as d,y as _,b as h,R as g,P as u,n as v,p as f,F as m,d as b,j as w,o as y}from"./index-DtoEfA3M.js";import{r as p,f as B,c as z}from"./index-BlBe-k0m.js";import{a as k,n as I,o as O,T as A,C as N}from"./index-WJeyMpWQ.js";function C(e){return void 0!==e}function j(e,r){return function(e,r,a){const t=r.filter(C);return t.length?e(...t):a}(Math.min,e,r)}const M=d({size:0});function S(e){return e<=36?12:e>36&&e<=48?16:e>48&&e<=64?20:S.MAX_SIZE}S.MAX_SIZE=24;const P="_ImageBaseBadge_13j1o_1",x={stroke:"_ImageBaseBadge--background-stroke_13j1o_13",shadow:"_ImageBaseBadge--background-shadow_13j1o_18"};function E(e=!0){const{hasPointer:r}=u(k);return p(!(e||void 0===r))&&void 0===r?I:r}const H="_ImageBaseOverlay_h10ec_1",L="_ImageBaseOverlay--visible_h10ec_19",R="_ImageBaseOverlay--theme-light_h10ec_23",T="_ImageBaseOverlay--theme-dark_h10ec_28",V="_ImageBase_1r50f_1",X="_ImageBase--transparent-background_1r50f_14",Z="_ImageBase__border_1r50f_18",D="_ImageBase__img_1r50f_32",F="_ImageBase--loaded_1r50f_46",W="_ImageBase__fallback_1r50f_50",q=e=>{var r=e,{alt:a,crossOrigin:t,decoding:i,loading:n,referrerPolicy:o,sizes:l,src:d,srcSet:g,useMap:u,getRef:v,size:y,width:p,height:B,widthSize:k,heightSize:I,style:O,noBorder:A=!1,fallbackIcon:C,children:S,onLoad:P,onError:x,withTransparentBackground:E}=r,H=c(r,["alt","crossOrigin","decoding","loading","referrerPolicy","sizes","src","srcSet","useMap","getRef","size","width","height","widthSize","heightSize","style","noBorder","fallbackIcon","children","onLoad","onError","withTransparentBackground"]);const L=null!=y?y:j([k,I],24),R=null!=k?k:L,T=null!=I?I:L,[q,G]=f(!1),[J,K]=f(!1),Q=d||g,U=(J||!Q)&&w(C)?C:null,Y=z(v),$=m(!1);return b((function(){if(!$.current&&($.current=!0,Y.current&&Y.current.complete&&!q)){const e=new Event("load");Y.current.dispatchEvent(e)}}),[Y,q]),_(M.Provider,{value:{size:L}},_(N,s({style:s({width:R,height:T},O),baseClassName:h(V,q&&F,E&&X)},H),Q&&_("img",{ref:Y,alt:a,className:D,crossOrigin:t,decoding:i,loading:n,referrerPolicy:o,sizes:l,src:d,srcSet:g,useMap:u,width:p,height:B,onLoad:e=>{q||(G(!0),K(!1),null==P||P(e))},onError:e=>{G(!1),K(!0),null==x||x(e)}}),U&&_("div",{className:W},U),S,!A&&_("div",{"aria-hidden":!0,className:Z})))};q.Badge=e=>{var r=e,{background:a="shadow"}=r,t=c(r,["background"]);return _(g,l(s({},t),{baseClassName:h(P,x[a])}))},q.Overlay=e=>{var r=e,{className:a,theme:t,visibility:i,children:n,onClick:o}=r,d=c(r,["className","theme","visibility","children","onClick"]);const g=B(),u=E(),f=null!=t?t:g,m=null!=i?i:u?"on-hover":"always",b=(null!=o?o:"on-hover"===m)?v:void 0;return _(A,l(s({},d),{className:h(H,"always"===m&&L,"light"===f&&R,"dark"===f&&T,a),hasHover:"on-hover"===m,hoverMode:"on-hover"===m?L:void 0,focusVisibleMode:h(O.inside,L),hasActive:!1,onClick:b}),n)};var G=y("Icon12Circle","circle_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="circle_12"><path fill="currentColor" d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" /></symbol>',12,12,!1,void 0),J=y("Icon12OnlineMobile","online_mobile_12","0 0 8 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 12" id="online_mobile_12"><path fill="currentColor" d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0zm.008 3H2.003a.5.5 0 0 0-.503.502v4.996c0 .277.225.502.503.502h3.995a.5.5 0 0 0 .502-.502V3.503A.5.5 0 0 0 5.997 3" /></symbol>',8,12,!1,void 0);const K="_AvatarBadge_ck1b7_1",Q="_AvatarBadge--shifted_ck1b7_6",U="_AvatarBadge--preset-online_ck1b7_11",Y="_AvatarBadge--preset-onlineMobile_ck1b7_12",$=e=>{var r=e,{width:a=12,height:t=12}=r,i=c(r,["width","height"]);return _(G,l(s({},i),{width:a>=24?15:12,height:t>=24?15:12}))},ee=e=>{var r=e,{width:a=8,height:t=12}=r,i=c(r,["width","height"]);return _(J,l(s({},i),{width:a>=24?9:8,height:t>=24?15:12}))};function re(e){if(e<=16)return 5;if(e<=24)return 8;if(e<=32)return 10;if(e<=36)return 13;if(e<=44)return 14;if(e<=48)return 17;if(e<56)return 18;if(e<=64)return 21;if(e<=88)return 26;if(e<=96)return 30;const r=Math.ceil(.3125*e);return r+r%2}const ae="_Avatar_zutwh_1",te="_Avatar--has-gradient_zutwh_5",ie="_Avatar__initials_zutwh_49",ne=48,oe={1:"red",2:"orange",3:"yellow",4:"green",5:"l-blue",6:"violet"},se={red:"_Avatar--gradient-red_zutwh_9",orange:"_Avatar--gradient-orange_zutwh_19",yellow:"_Avatar--gradient-yellow_zutwh_24",green:"_Avatar--gradient-green_zutwh_29",blue:"_Avatar--gradient-blue_zutwh_39","l-blue":"_Avatar--gradient-l-blue_zutwh_34",violet:"_Avatar--gradient-violet_zutwh_44"},le=e=>{var r=e,{size:a=ne,className:t,gradientColor:i,initials:n,fallbackIcon:o,children:d}=r,g=c(r,["size","className","gradientColor","initials","fallbackIcon","children"]);const u="number"==typeof i?oe[i]:i,v=u&&"custom"!==u,f=n?_("div",{className:ie,style:{fontSize:re(a)}},n):o;return _(q,l(s({},g),{size:a,fallbackIcon:f,className:h(ae,u&&te,v&&se[u],t)}),d)};le.Badge=e=>{var r=e,{className:a}=r,t=c(r,["className"]);const{size:i}=u(M);return _(q.Badge,l(s({},t),{className:h(K,i<96&&Q,a)}))},le.BadgeWithPreset=e=>{var r=e,{preset:a="online",className:t}=r,i=c(r,["preset","className"]);const{size:n}=u(M),o=S(n),l="online"===a,d=l?$:ee;return _(q.Badge,s({background:"stroke",className:h(K,l?U:Y,t)},i),_(d,{width:o,height:o}))},le.Overlay=q.Overlay,le.getInitialsFontSize=re;export{le as A,M as I,q as a,E as u};