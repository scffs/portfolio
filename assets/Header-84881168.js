var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,l=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&i(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&i(e,r,t[r]);return e},o=(e,t)=>{var r={};for(var i in e)n.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&a)for(var i of a(e))t.indexOf(i)<0&&s.call(e,i)&&(r[i]=e[i]);return r};import{r as m}from"./react-37698f52.js";import{c,R as _,Q as p,ag as d,d as u,P as z}from"./AppWrapper-9701c826.js";import{F as f}from"./user_circle_outline_28-c70689bc.js";import{H as y}from"./Headline-e5e55bba.js";import{T as g}from"./App-33f3984a.js";import{S as h}from"./Subhead-d963e956.js";import{T as H}from"./PanelHeaderButton-5dd34c4f.js";const b="_Paragraph_q43lm_1",x=e=>{var t=e,{className:r,Component:a="span",normalize:n=!1}=t,s=o(t,["className","Component","normalize"]);return m.createElement(g,l({Component:a,normalize:n,className:c(r,b)},s))},E="_Header_2xztt_1",w="_Header__main_2xztt_14",v="_Header__content_2xztt_20",j="_Header__content-in_2xztt_25",O="_Header__subtitle_2xztt_26",N="_Header__content--multiline_2xztt_32",P="_Header--pi_2xztt_42",C="_Header--with-subtitle_2xztt_42",S="_Header__indicator_2xztt_47",q="_Header__aside_2xztt_65",A="_Header--large_2xztt_126",I=e=>{var t=e,{mode:r,size:a}=t,n=o(t,["mode","size"]);const s="large"===a;if(u()===z.IOS)switch(r){case"primary":return s?m.createElement(H,l({level:"2",weight:"2"},n)):m.createElement(H,l({weight:"1",level:"3"},n));case"secondary":return m.createElement(f,l({weight:"1",caps:!0},n));case"tertiary":return m.createElement(H,l({weight:"1",level:"3"},n))}switch(r){case"primary":return s?m.createElement(H,l({level:"2",weight:"2"},n)):m.createElement(y,l({weight:"2"},n));case"secondary":return m.createElement(f,l({weight:"1",caps:!0},n));case"tertiary":return m.createElement(y,l({weight:"2"},n))}return null},T={primary:"_Header--mode-primary_2xztt_53",secondary:"_Header--mode-secondary_2xztt_42",tertiary:"_Header--mode-tertiary_2xztt_43"},B=e=>{var a,n,s=e,{mode:i="primary",size:u="regular",children:z,subtitle:y,indicator:g,aside:H,multiline:b}=s,B=o(s,["mode","size","children","subtitle","indicator","aside","multiline"]);return m.createElement(_,(a=l({Component:"header"},B),n={baseClassName:c(E,T[i],"large"===u&&A,d(g)&&P,p(y)&&C)},t(a,r(n))),m.createElement("div",{className:w},m.createElement(I,{className:v,Component:"span",mode:i,size:u},m.createElement("span",{className:c(j,b&&N)},z),p(g)&&m.createElement(f,{className:S,weight:"2"},g)),p(y)&&m.createElement(h,{className:c(O,b&&N),Component:"span"},y)),p(H)&&m.createElement(x,{className:q,Component:"span"},H))};export{B as H,x as P};
