import{r as e,j as t,a as r,F as n}from"./index-62822669.js";import{L as i}from"./App-16321e51.js";const o=e.forwardRef((function({title:t,titleId:r,...n},i){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":r},n),t?e.createElement("title",{id:r},t):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))})),l=e.forwardRef((function({title:t,titleId:r,...n},i){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":r},n),t?e.createElement("title",{id:r},t):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}))})),a=e.forwardRef((function({title:t,titleId:r,...n},i){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":r},n),t?e.createElement("title",{id:r},t):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"}))})),c=e.forwardRef((function({title:t,titleId:r,...n},i){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":r},n),t?e.createElement("title",{id:r},t):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))})),s=[{id:1,title:"Home",src:"/portfolio/",component:t(l,{width:"2.5em",height:"2.5em"})},{id:2,title:"News",src:"/portfolio/news",component:t(a,{width:"2.5em",height:"2.5em"})}],d=({value:l,onClickCategory:a})=>{const[d,u]=e.useState(!1),m=e.useRef(null),h=()=>d&&u(!1);return e.useEffect((()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&u(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[m]),r(n,{children:[t("button",{"aria-label":"Menu",onClick:()=>u(!d),className:"_burger_1uc8c_74",children:t(d?c:o,{width:"2.5em",height:"2.5em"})}),t("ul",{className:d?"_menu_1uc8c_136":"_hidden_1uc8c_124",ref:m,children:s.map((({title:e,id:r,src:n,component:o})=>t("li",{className:""+(l===r?"_active_1uc8c_80":""),onClick:h,children:t(i,{"aria-label":e,className:"_headerLink_1uc8c_80",to:n,onClick:()=>a(r),children:o})},r)))})]})};export{d as default};
