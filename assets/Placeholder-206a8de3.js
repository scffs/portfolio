var e=Object.defineProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,l=(a,r,t)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,c=(e,c)=>{for(var n in c||(c={}))r.call(c,n)&&l(e,n,c[n]);if(a)for(var n of a(c))t.call(c,n)&&l(e,n,c[n]);return e},n=(e,l)=>{var c={};for(var n in e)r.call(e,n)&&l.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&a)for(var n of a(e))l.indexOf(n)<0&&t.call(e,n)&&(c[n]=e[n]);return c};import{r as s}from"./react-37698f52.js";import{Q as o,R as i,c as d}from"./AppWrapper-9701c826.js";import{H as m}from"./Headline-e5e55bba.js";import{T as _}from"./PanelHeaderButton-5dd34c4f.js";const h="_Placeholder_sjcbw_1",b="_Placeholder--withPadding_sjcbw_10",p="_Placeholder--stretched_sjcbw_14",w="_Placeholder__icon_sjcbw_21",P="_Placeholder__header_sjcbw_28",f="_Placeholder__text_sjcbw_32",u="_Placeholder__action_sjcbw_40",j=e=>{var a=e,{stretched:r,withPadding:t=!0}=a,l=n(a,["stretched","withPadding"]);return s.createElement(i,c({baseClassName:d(h,r&&p,t&&b)},l))},v=e=>s.createElement(i,c({baseClassName:w},e)),E=e=>{var a=e,{className:r}=a,t=n(a,["className"]);return s.createElement(_,c({level:"2",weight:"2",className:d(r,P)},t))},g=e=>{var a=e,{className:r}=a,t=n(a,["className"]);return s.createElement(m,c({weight:"3",className:d(r,f)},t))},N=e=>s.createElement(i,c({baseClassName:u},e)),O=e=>{var a=e,{icon:r,header:t,children:l,action:i,withPadding:d=!0}=a,m=n(a,["icon","header","children","action","withPadding"]);return s.createElement(j,c({withPadding:d},m),o(r)&&s.createElement(v,null,r),o(t)&&s.createElement(E,null,t),o(l)&&s.createElement(g,null,l),o(i)&&s.createElement(N,null,i))};O.Container=j,O.Icon=v,O.Header=E,O.Text=g,O.Actions=N;export{O as P};
