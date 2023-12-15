var e=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(r,a,t)=>a in r?e(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,o=(e,r)=>{for(var a in r||(r={}))i.call(r,a)&&s(e,a,r[a]);if(t)for(var a of t(r))n.call(r,a)&&s(e,a,r[a]);return e},l=(e,t)=>r(e,a(t)),c=(e,r)=>{var a={};for(var s in e)i.call(e,s)&&r.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&t)for(var s of t(e))r.indexOf(s)<0&&n.call(e,s)&&(a[s]=e[s]);return a};import{F as d,b as _,q as h,h as g,_ as u,p as v,f as m}from"./index-UZJ5t5iP.js";import{c as f,R as w,A as b,aM as p,aN as y,T as k,aO as B,D as z}from"./AppWrapper-f2C8H5bU.js";import{g as I,c as A}from"./App-gyvK6TTj.js";import{u as O}from"./AppearanceProvider-6Ht9gXrP.js";function N(e){return void 0!==e}function C(e,r){return function(e,r,a){const t=r.filter(N);return t.length?e(...t):a}(Math.min,e,r)}const M=d({size:0});function P(e){return e<=36?12:e>36&&e<=48?16:e>48&&e<=64?20:P.MAX_SIZE}P.MAX_SIZE=24;const S="_ImageBaseBadge_nre54_1",j={stroke:"_ImageBaseBadge--background-stroke_nre54_13",shadow:"_ImageBaseBadge--background-shadow_nre54_18"};function x(e=!0){const{hasPointer:r}=h(b);return I(!(e||void 0===r))&&void 0===r?p:r}const E="_ImageBaseOverlay_h10ec_1",H="_ImageBaseOverlay--visible_h10ec_19",L="_ImageBaseOverlay--theme-light_h10ec_23",R="_ImageBaseOverlay--theme-dark_h10ec_28",T="_ImageBase_d71ki_1",V="_ImageBase--transparent-background_d71ki_14",Z="_ImageBase__border_d71ki_18",D="_ImageBase__img_d71ki_32",W="_ImageBase--loaded_d71ki_46",X="_ImageBase__fallback_d71ki_50",F=e=>{var r=e,{alt:a,crossOrigin:t,decoding:i,loading:n,referrerPolicy:s,sizes:l,src:d,srcSet:h,useMap:w,getRef:b,size:p,width:y,height:k,widthSize:z,heightSize:I,style:O,withBorder:N=!0,fallbackIcon:P,children:S,onLoad:j,onError:x,withTransparentBackground:E}=r,H=c(r,["alt","crossOrigin","decoding","loading","referrerPolicy","sizes","src","srcSet","useMap","getRef","size","width","height","widthSize","heightSize","style","withBorder","fallbackIcon","children","onLoad","onError","withTransparentBackground"]);const L=null!=p?p:C([z,I],24),R=null!=z?z:L,F=null!=I?I:L,[q,G]=g(!1),[J,K]=g(!1),Q=d||h,U=(J||!Q)&&m(P)?P:null,Y=A(b),$=u(!1);return v((function(){if(!$.current&&($.current=!0,Y.current&&Y.current.complete&&!q)){const e=new Event("load");Y.current.dispatchEvent(e)}}),[Y,q]),_(M.Provider,{value:{size:L}},_(B,o({style:o({width:R,height:F},O),baseClassName:f(T,q&&W,E&&V)},H),Q&&_("img",{ref:Y,alt:a,className:D,crossOrigin:t,decoding:i,loading:n,referrerPolicy:s,sizes:l,src:d,srcSet:h,useMap:w,width:y,height:k,onLoad:e=>{q||(G(!0),K(!1),null==j||j(e))},onError:e=>{G(!1),K(!0),null==x||x(e)}}),U&&_("div",{className:X},U),S,N&&_("div",{"aria-hidden":!0,className:Z})))};F.Badge=e=>{var r=e,{background:a="shadow"}=r,t=c(r,["background"]);return _(w,l(o({},t),{baseClassName:f(S,j[a])}))},F.Overlay=e=>{var r=e,{className:a,theme:t,visibility:i,children:n,onClick:s}=r,d=c(r,["className","theme","visibility","children","onClick"]);const h=O(),g=x(),u=null!=t?t:h,v=null!=i?i:g?"on-hover":"always";return _(k,l(o({},d),{className:f(E,"always"===v&&H,"light"===u&&L,"dark"===u&&R,a),hasHover:"on-hover"===v,hoverMode:"on-hover"===v?H:void 0,focusVisibleMode:f(y.inside,H),hasActive:!1,onClick:s}),n)};var q=z("Icon12Circle","circle_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="circle_12"><path fill="currentColor" d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" /></symbol>',12,12,!1,void 0),G=z("Icon12OnlineMobile","online_mobile_12","0 0 8 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 12" id="online_mobile_12"><path fill="currentColor" d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0zm.008 3H2.003a.502.502 0 0 0-.503.502v4.996c0 .277.225.502.503.502h3.995a.502.502 0 0 0 .502-.502V3.503A.502.502 0 0 0 5.997 3Z" /></symbol>',8,12,!1,void 0);const J="_AvatarBadge_ck1b7_1",K="_AvatarBadge--shifted_ck1b7_6",Q="_AvatarBadge--preset-online_ck1b7_11",U="_AvatarBadge--preset-onlineMobile_ck1b7_12",Y=e=>{var r=e,{width:a=12,height:t=12}=r,i=c(r,["width","height"]);return _(q,l(o({},i),{width:a>=24?15:12,height:t>=24?15:12}))},$=e=>{var r=e,{width:a=8,height:t=12}=r,i=c(r,["width","height"]);return _(G,l(o({},i),{width:a>=24?9:8,height:t>=24?15:12}))};function ee(e){if(e<=16)return 5;if(e<=24)return 8;if(e<=32)return 10;if(e<=36)return 13;if(e<=44)return 14;if(e<=48)return 17;if(e<56)return 18;if(e<=64)return 21;if(e<=88)return 26;if(e<=96)return 30;const r=Math.ceil(.3125*e);return r+r%2}const re="_Avatar_zutwh_1",ae="_Avatar--has-gradient_zutwh_5",te="_Avatar__initials_zutwh_49",ie=48,ne={1:"red",2:"orange",3:"yellow",4:"green",5:"l-blue",6:"violet"},se={red:"_Avatar--gradient-red_zutwh_9",orange:"_Avatar--gradient-orange_zutwh_19",yellow:"_Avatar--gradient-yellow_zutwh_24",green:"_Avatar--gradient-green_zutwh_29",blue:"_Avatar--gradient-blue_zutwh_39","l-blue":"_Avatar--gradient-l-blue_zutwh_34",violet:"_Avatar--gradient-violet_zutwh_44"},oe=e=>{var r=e,{size:a=ie,className:t,gradientColor:i,initials:n,fallbackIcon:s,children:d}=r,h=c(r,["size","className","gradientColor","initials","fallbackIcon","children"]);const g="number"==typeof i?ne[i]:i,u=g&&"custom"!==g,v=n?_("div",{className:te,style:{fontSize:ee(a)}},n):s;return _(F,l(o({},h),{size:a,fallbackIcon:v,className:f(re,g&&ae,u&&se[g],t)}),d)};oe.Badge=e=>{var r=e,{className:a}=r,t=c(r,["className"]);const{size:i}=h(M);return _(F.Badge,l(o({},t),{className:f(J,i<96&&K,a)}))},oe.BadgeWithPreset=e=>{var r=e,{preset:a="online",className:t}=r,i=c(r,["preset","className"]);const{size:n}=h(M),s=P(n),l="online"===a,d=l?Y:$;return _(F.Badge,o({background:"stroke",className:f(J,l?Q:U,t)},i),_(d,{width:s,height:s}))},oe.Overlay=F.Overlay,oe.getInitialsFontSize=ee;export{oe as A,M as I,F as a,x as u};