var t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(i,l)=>{var o={};for(var s in i)e.call(i,s)&&l.indexOf(s)<0&&(o[s]=i[s]);if(null!=i&&t)for(var s of t(i))l.indexOf(s)<0&&r.call(i,s)&&(o[s]=i[s]);return o};import{r as l,j as o,_ as s,L as a}from"./index-b77e852e.js";import{l as n}from"./ava-05c7374e.js";const c=l.forwardRef((function(t,e){var r=t,{title:o,titleId:s}=r,a=i(r,["title","titleId"]);return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:e,"aria-labelledby":s},a),o?l.createElement("title",{id:s},o):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"}))}));const m=l.forwardRef((function(t,e){var r=t,{title:o,titleId:s}=r,a=i(r,["title","titleId"]);return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:e,"aria-labelledby":s},a),o?l.createElement("title",{id:s},o):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"}))})),p=[{name:"Social-network",link:"https://github.com/scffs/social-network"},{name:"Portfolio",link:"https://github.com/scffsz/portfolio"},{name:"React Clock",link:"https://github.com/scffs/react-clock"},{name:"MDN Translate",link:"https://github.com/scffs?org=mdn&year_list=1"}],d=[{title:"Age",text:"18"},{title:"City",text:"Tomsk"},{title:o.jsx(m,{title:"Specialty"}),text:"Frontend"},{title:o.jsx(c,{title:"Job"}),text:"null",comment:"studying"}],f=[{title:"ReactJS",text:"Contributor"},{title:"Mozilla",text:"Contributor"},{title:"MDN",text:"Contributor"},{title:"VKTesters",text:"Tester"},{title:"Habr",text:"Author"}],u="_profileWrapper_1bjgp_1",x="_profileInfoTop_1bjgp_8",h="_name_1bjgp_16",j=l.lazy((()=>s((()=>import("./Avatar-d09486de.js")),["assets/Avatar-d09486de.js","assets/index-b77e852e.js","assets/Avatar-b72f6495.css"]))),b=l.lazy((()=>s((()=>import("./ProfileGroup-2963ea78.js")),["assets/ProfileGroup-2963ea78.js","assets/index-b77e852e.js","assets/ProfileGroup-9854d895.css"]))),k=()=>o.jsxs("div",{className:u,children:[o.jsxs("div",{className:x,children:[o.jsx(j,{width:"100px",height:"100px",borderRadius:"80px",src:n}),o.jsx("span",{className:h,children:"Semyon Okulov"})]}),o.jsxs(l.Suspense,{fallback:o.jsx(a,{}),children:[o.jsx(b,{title:"Basics",items:d}),o.jsx(b,{title:"Projects",items:p.map((t=>({key:t.link,title:t.name,text:"link",href:t.link})))}),o.jsx(b,{title:"Activity",items:f})]})]});export{k as default};
