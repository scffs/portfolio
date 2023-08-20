var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,o=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))i.call(t,r)&&l(e,r,t[r]);return e},s=(e,a)=>t(e,r(a)),c=(e,t)=>{var r={};for(var l in e)n.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&a)for(var l of a(e))t.indexOf(l)<0&&i.call(e,l)&&(r[l]=e[l]);return r};import{r as _}from"./react-37698f52.js";import{M as d,c as m}from"./AppWrapper-e729ec02.js";import{I as u,a as h}from"./ImageBase-6edb92c1.js";var g=d("Icon12Circle","circle_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="circle_12"><path fill="currentColor" d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" /></symbol>',12,12,!1,void 0),v=d("Icon12OnlineMobile","online_mobile_12","0 0 8 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 12" id="online_mobile_12"><path fill="currentColor" d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0h3.98Zm.007 3H2.004a.502.502 0 0 0-.503.502v4.995c0 .278.225.503.503.503h3.995a.502.502 0 0 0 .502-.502V3.503A.502.502 0 0 0 5.997 3Z" /></symbol>',8,12,!1,void 0);function f(e){return e<=36?12:e>36&&e<=48?16:e>48&&e<=64?20:f.MAX_SIZE}f.MAX_SIZE=24;const p="_Gradient--mode-tint_5mj23_1",w="_Gradient--to-top_5mj23_1",b="_Gradient--to-bottom_5mj23_5",y="_Gradient--mode-white_5mj23_9",A="_Gradient--mode-black_5mj23_17",z=e=>{var t=e,{mode:r="tint",children:a,to:n="top",className:i}=t,l=c(t,["mode","children","to","className"]);return _.createElement("div",s(o({role:"presentation"},l),{className:m({tint:p,black:A,white:y}[r],{top:w,bottom:b}[n],i)}),a)},j="_AvatarBadge_3cliu_1",O="_AvatarBadge--shifted_3cliu_6",N="_AvatarBadge--preset-online_3cliu_11",x="_AvatarBadge--preset-onlineMobile_3cliu_12",C=e=>{var t=e,{width:r=12,height:a=12}=t,n=c(t,["width","height"]);return _.createElement(g,s(o({},n),{width:r>=24?15:12,height:a>=24?15:12}))},B=e=>{var t=e,{width:r=8,height:a=12}=t,n=c(t,["width","height"]);return _.createElement(v,s(o({},n),{width:r>=24?9:8,height:a>=24?15:12}))};function E(e){if(e<=16)return 5;if(e<=24)return 8;if(e<=32)return 10;if(e<=36)return 13;if(e<=44)return 14;if(e<=48)return 17;if(e<56)return 18;if(e<=64)return 21;if(e<=88)return 26;if(e<=96)return 30;const t=Math.ceil(.3125*e);return t+t%2}const I="_Avatar_zutwh_1",M="_Avatar--has-gradient_zutwh_5",k="_Avatar__initials_zutwh_49",G=48,P={1:"red",2:"orange",3:"yellow",4:"green",5:"l-blue",6:"violet"},S={red:"_Avatar--gradient-red_zutwh_9",orange:"_Avatar--gradient-orange_zutwh_19",yellow:"_Avatar--gradient-yellow_zutwh_24",green:"_Avatar--gradient-green_zutwh_29",blue:"_Avatar--gradient-blue_zutwh_39","l-blue":"_Avatar--gradient-l-blue_zutwh_34",violet:"_Avatar--gradient-violet_zutwh_44"},Z=e=>{var t=e,{size:r=G,className:a,gradientColor:n,initials:i,fallbackIcon:l,children:d}=t,u=c(t,["size","className","gradientColor","initials","fallbackIcon","children"]);const g="number"==typeof n?P[n]:n,v=g&&"custom"!==g,f=i?void 0:l;return _.createElement(h,s(o({},u),{size:r,fallbackIcon:f,className:m(I,g&&M,v&&S[g],a)}),i&&_.createElement("div",{className:k,style:{fontSize:E(r)}},i),d)};Z.Badge=e=>{var t=e,{className:r}=t,a=c(t,["className"]);const{size:n}=_.useContext(u);return _.createElement(h.Badge,s(o({},a),{className:m(j,n<96&&O,r)}))},Z.BadgeWithPreset=e=>{var t=e,{preset:r="online",className:a}=t,n=c(t,["preset","className"]);const{size:i}=_.useContext(u),l=f(i),s="online"===r,d=s?N:x,g=s?C:B;return _.createElement(h.Badge,o({background:"stroke",className:m(j,d,a)},n),_.createElement(g,{width:l,height:l}))},Z.Overlay=h.Overlay;const D={margin:0,display:"flex",gap:4,flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:20},H={borderRadius:10};export{Z as A,z as G,H as g,D as s};
