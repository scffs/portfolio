var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,i=(e,a)=>{for(var t in a||(a={}))n.call(a,t)&&l(e,t,a[t]);if(r)for(var t of r(a))o.call(a,t)&&l(e,t,a[t]);return e},c=(e,a)=>{var t={};for(var l in e)n.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&r)for(var l of r(e))a.indexOf(l)<0&&o.call(e,l)&&(t[l]=e[l]);return t};import{r as d}from"./react-37698f52.js";import{c as _,d as s,P as m,O as P,ag as u}from"./AppWrapper-9701c826.js";import{T as p,h as v}from"./App-33f3984a.js";const B={1:"_Title--level-1_9ajty_1",2:"_Title--level-2_9ajty_8",3:"_Title--level-3_9ajty_15"},H=e=>{var a=e,{className:t,level:r="1",Component:n,normalize:o=!0}=a,l=c(a,["className","level","Component","normalize"]);return n||(n="h"+r),d.createElement(p,i({Component:n,normalize:o,className:_(t,B[r])},l))},k={PanelHeaderButton:"_PanelHeaderButton_10gk3_1","PanelHeaderButton--primitive":"_PanelHeaderButton--primitive_10gk3_19","PanelHeaderButton--ios":"_PanelHeaderButton--ios_10gk3_29","PanelHeaderButton--android":"_PanelHeaderButton--android_10gk3_53","PanelHeaderButton--notPrimitive":"_PanelHeaderButton--notPrimitive_10gk3_53","PanelHeaderButton--vkcom":"_PanelHeaderButton--vkcom_10gk3_69","PanelHeaderButton--hover":"_PanelHeaderButton--hover_10gk3_78","PanelHeaderButton--active":"_PanelHeaderButton--active_10gk3_79","PanelHeaderBack--vkcom":"_PanelHeaderBack--vkcom_10gk3_93","PanelHeaderBack--has-label":"_PanelHeaderBack--has-label_10gk3_93","PanelHeaderBack--ios":"_PanelHeaderBack--ios_10gk3_98","PanelHeaderBack--sizeX-compact":"_PanelHeaderBack--sizeX-compact_10gk3_98",PanelHeaderButton__label:"_PanelHeaderButton__label_10gk3_103","PanelHeaderBack--sizeX-none":"_PanelHeaderBack--sizeX-none_10gk3_108"},b={ios:k["PanelHeaderButton--ios"],android:k["PanelHeaderButton--android"],vkcom:k["PanelHeaderButton--vkcom"]},g=({primary:e,children:a})=>{const t=s();return t===m.IOS?d.createElement(H,{Component:"span",level:"3",weight:e?"1":"3"},a):d.createElement(v,{weight:t===m.VKCOM?void 0:"2"},a)},f=e=>{var r=e,{children:n,primary:o=!1,label:l,className:p}=r,v=c(r,["children","primary","label","className"]);const B=u(n),H=u(l),f=s();let y,h;switch(f){case m.IOS:y="background",h="opacity";break;case m.VKCOM:y=k["PanelHeaderButton--hover"],h=k["PanelHeaderButton--active"];break;default:y="background",h="background"}return d.createElement(P,(O=i({Component:v.href?"a":"button"},v),j={hoverMode:y,activeEffectDelay:200,activeMode:h,className:_("vkuiInternalPanelHeaderButton",k.PanelHeaderButton,b.hasOwnProperty(f)?b[f]:b.android,B&&k["PanelHeaderButton--primitive"],!B&&!H&&k["PanelHeaderButton--notPrimitive"],p)},a(O,t(j))),B?d.createElement(g,{primary:o},n):n,H?d.createElement(g,{primary:o,className:k.PanelHeaderButton__label},l):l);var O,j};export{f as P,H as T,k as s};
