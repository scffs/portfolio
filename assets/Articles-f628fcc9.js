import{r as e,_ as t,a,j as s,F as i}from"./index-6cd21ab9.js";import{L as r}from"./Loading-43002185.js";const l=e.lazy((()=>t((()=>import("./ArticlesSkeleton-abb3ca55.js")),["assets/ArticlesSkeleton-abb3ca55.js","assets/index-6cd21ab9.js","assets/index-005524dc.css"]))),o=e.lazy((()=>t((()=>import("./Article-5c2de0d2.js")),["assets/Article-5c2de0d2.js","assets/index-6cd21ab9.js","assets/index-005524dc.css","assets/Loading-43002185.js","assets/ava-75ecf6cd.js","assets/Article-a2b99627.css"]))),_=e.lazy((()=>t((()=>import("./Categories-6512b8a9.js")),["assets/Categories-6512b8a9.js","assets/index-6cd21ab9.js","assets/index-005524dc.css","assets/Categories-c60da96a.css"]))),c=e.lazy((()=>t((()=>import("./Search-9b321364.js")),["assets/Search-9b321364.js","assets/index-6cd21ab9.js","assets/index-005524dc.css","assets/Search-7dee33cb.css"]))),n=e.memo((()=>{const[t,n]=e.useState([]),[d,h]=e.useState(!0),[m,u]=e.useState("All"),[f,p]=e.useState(""),E=e.useMemo((()=>t.filter((e=>{var t;return null==(t=e.title)?void 0:t.toLowerCase().includes(f.toLowerCase())})).map((e=>a(o,{...e},e.id)))),[t,f]),L=window.innerWidth>600?600:330,j=E.length;return e.useEffect((()=>{h(!0),fetch(`https://63a7f65f7989ad3286f7dd81.mockapi.io/articles?tags=${"All"===m?"":m}`).then((e=>e.json())).then((e=>{n(e),h(!1)}))}),[m]),s(i,{children:[a("div",{className:"_articleTop_hqyzt_1",children:s(e.Suspense,{fallback:a(r,{}),children:[a(_,{value:m,onClickCategory:e=>u(e)}),a(c,{search:f,setSearch:p})]})}),a("div",{className:"_articleList_hqyzt_7",children:d?a(l,{width:L}):j?E:a("p",{className:"_notFound_hqyzt_14",children:"No suitable articles were found"})})]})}));export{n as default};
