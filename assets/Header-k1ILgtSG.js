var e=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(r,a,i)=>a in r?e(r,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[a]=i,o=(e,r)=>{for(var a in r||(r={}))t.call(r,a)&&s(e,a,r[a]);if(i)for(var a of i(r))n.call(r,a)&&s(e,a,r[a]);return e},_=(e,r)=>{var a={};for(var s in e)t.call(e,s)&&r.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&i)for(var s of i(e))r.indexOf(s)<0&&n.call(e,s)&&(a[s]=e[s]);return a};import{y as l,b as m,G as c,aK as d,R as p,u as b}from"./index-DzYXxdpO.js";import{f as u,F as y,b as f,H as g}from"./index-m7_0EzVP.js";import{T as h}from"./index-dS2A93r9.js";const w="_Paragraph_q43lm_1",H=e=>{var r=e,{className:a,Component:i="span",normalize:t=!1}=r,n=_(r,["className","Component","normalize"]);return l(u,o({Component:i,normalize:t,className:m(a,w)},n))},v="_Header_1iekb_1",k="_Header__main_1iekb_13",C="_Header__content_1iekb_19",O="_Header__content-in_1iekb_24",N="_Header__subtitle_1iekb_25",j="_Header__content--multiline_1iekb_31",z="_Header--pi_1iekb_41",P="_Header--with-subtitle_1iekb_41",x="_Header__indicator_1iekb_46",q="_Header__aside_1iekb_66",D="_Header--large_1iekb_134",E=e=>{var r=e,{mode:a,size:i}=r,t=_(r,["mode","size"]);const n="large"===i;if("ios"===b())switch(a){case"primary":return l(h,o(n?{level:"2",weight:"2"}:{weight:"1",level:"3"},t));case"secondary":return l(y,o({weight:"1",caps:!0},t));case"tertiary":return l(h,o({weight:"1",level:"3"},t))}switch(a){case"primary":return n?l(h,o({level:"2",weight:"2"},t)):l(g,o({weight:"2"},t));case"secondary":return l(y,o({weight:"1",caps:!0},t));case"tertiary":return l(g,o({weight:"2"},t))}return null},F={primary:"_Header--mode-primary_1iekb_53",secondary:"_Header--mode-secondary_1iekb_41",tertiary:"_Header--mode-tertiary_1iekb_42"},G=e=>{var i,t,n=e,{mode:s="primary",size:b="regular",Component:u="h2",children:g,subtitle:h,subtitleComponent:w="span",indicator:G,aside:I,multiline:K}=n,R=_(n,["mode","size","Component","children","subtitle","subtitleComponent","indicator","aside","multiline"]);return l(p,(i=o({},R),t={baseClassName:m(v,F[s],"large"===b&&D,d(G)&&z,c(h)&&P)},r(i,a(t))),l("div",{className:k},l(E,{className:C,Component:u,mode:s,size:b},l("span",{className:m(O,K&&j)},g),c(G)&&l(y,{className:x,weight:"2"},G)),c(h)&&l(f,{className:m(N,K&&j),Component:w},h)),c(I)&&l(H,{className:q,Component:"span"},I))};export{G as H,H as P};
