import{r as a,_ as s,a as t,L as h,j as o,l as g}from"./index-e86035dd.js";import{L as d}from"./Loading-bc5fbdf9.js";const y="_link_yl0mt_123",w="_pageShow_yl0mt_1",u="_pageShowReverse_yl0mt_1",S="_article_yl0mt_135",f="_title_yl0mt_148",k="_img_yl0mt_153",L="_description_yl0mt_160",v="_info_yl0mt_166",N="_top_yl0mt_170",b="_tags_yl0mt_176",E="_authorLink_yl0mt_195",R="_wheel_yl0mt_1",x="_planets_yl0mt_1",A="_burgerShow_yl0mt_1",j="_profileShow_yl0mt_1",G="_pageGradient_yl0mt_1",e={link:y,pageShow:w,pageShowReverse:u,article:S,title:f,img:k,description:L,info:v,top:N,tags:b,authorLink:E,wheel:R,planets:x,burgerShow:A,profileShow:j,pageGradient:G},P=a.lazy(()=>s(()=>import("./Author-763d93bd.js"),["assets/Author-763d93bd.js","assets/index-e86035dd.js","assets/index-f09c6a23.css","assets/Author-b7809cbc.css"])),z=a.lazy(()=>s(()=>import("./Category-03e20413.js"),["assets/Category-03e20413.js","assets/index-e86035dd.js","assets/index-f09c6a23.css","assets/Category-292c342c.css"])),O=({link:r,preview:_,title:i,description:n,tags:c,author:m})=>t(h,{to:r,className:e.link,target:"_blank",rel:"noreferrer",children:o("article",{className:e.article,children:[t("img",{className:e.img,src:_,alt:"img"}),o("div",{className:e.info,children:[t("div",{className:e.top,children:o(a.Suspense,{fallback:t(d,{}),children:[t("div",{className:e.tags,children:c.map((p,l)=>t(z,{id:l,tag:p},l))}),t(P,{author:m,authorLogo:g})]})}),t("h3",{className:e.title,children:i}),t("p",{className:e.description,children:n})]})]})});export{O as default};
