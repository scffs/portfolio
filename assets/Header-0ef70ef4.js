import{r as e,_ as r,a,j as _}from"./index-3cd4afc3.js";const c="_header_c1no4_1",d="_nav_c1no4_14",o={header:c,nav:d},l=e.lazy(()=>r(()=>import("./Menu-4416fb62.js"),["assets/Menu-4416fb62.js","assets/index-3cd4afc3.js","assets/index-5c9c80d1.css","assets/Menu-30a54378.css"])),i=e.lazy(()=>r(()=>import("./Profile-995e2a1e.js"),["assets/Profile-995e2a1e.js","assets/index-3cd4afc3.js","assets/index-5c9c80d1.css","assets/ava-05c7374e.js","assets/Avatar-f7150f19.js","assets/Avatar-5151ae5e.css","assets/Profile-eab38f12.css"])),v=()=>{const[s,t]=e.useState(0);return a("header",{className:o.header,children:_("nav",{className:o.nav,children:[a(l,{value:s,onClickCategory:n=>t(n)}),a(i,{name:"Scoffs",role:"Developer"})]})})},h=e.memo(v);export{h as default};
