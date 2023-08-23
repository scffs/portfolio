var e=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(r,s,a)=>s in r?e(r,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[s]=a,n=(e,r)=>{for(var s in r||(r={}))t.call(r,s)&&l(e,s,r[s]);if(a)for(var s of a(r))o.call(r,s)&&l(e,s,r[s]);return e},i=(e,a)=>r(e,s(a)),c=(e,r)=>{var s={};for(var l in e)t.call(e,l)&&r.indexOf(l)<0&&(s[l]=e[l]);if(null!=e&&a)for(var l of a(e))r.indexOf(l)<0&&o.call(e,l)&&(s[l]=e[l]);return s};import{j as d}from"./index-0557fdb9.js";import{N as m,c as p,Q as h,ae as f,a4 as x,a5 as j,J as u,K as g}from"./AppWrapper-5480904f.js";import{H as b,P as v}from"./Header-ce9acdde.js";import{H as _,a as y}from"./HorizontalCell-f8cedfa3.js";import{G as w,g as k,i as I}from"./styles-85772c52.js";import{r as T,R as z}from"./react-37698f52.js";import{H as E}from"./Headline-ea4c0c9e.js";import{S as N}from"./Subhead-0e08a54b.js";import{f as S}from"./App-8bfc4f78.js";import{S as C}from"./SimpleCell-2d65d15f.js";import{A as O}from"./Avatar-62a8f45d.js";import{T as A,K as P,P as R,L as H,G as L,a as F,H as $,M as B,b as M,R as Z}from"./index-b456ad51.js";import{v as D,r as K}from"./vk-72d582ba.js";import{I as V}from"./brackets_slash_outline_24-54371eb3.js";import{a as G}from"./Footnote-d47a7109.js";import"./PanelHeaderButton-2bb0551e.js";var W=m("Icon24ChevronDown","chevron_down_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_down_24"><path d="M12 13.698 6.64 9.232a1 1 0 0 0-1.28 1.536l6 5a1 1 0 0 0 1.28 0l6-5a1 1 0 1 0-1.28-1.536L12 13.698Z" /></symbol>',24,24,!1,void 0),U=m("Icon24ChevronUp","chevron_up_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_up_24"><path d="m12 10.302-5.36 4.466a1 1 0 1 1-1.28-1.536l6-5a1 1 0 0 1 1.28 0l6 5a1 1 0 1 1-1.28 1.536L12 10.302Z" /></symbol>',24,24,!1,void 0),q=m("Icon24EducationOutline","education_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="education_outline_24"><path fill-rule="evenodd" d="M12.329 3.033a1.711 1.711 0 0 0-.65 0c-.25.048-.473.165-.639.251l-.045.024-7.288 3.775c-.325.169-.622.323-.85.468-.225.144-.527.367-.697.73a1.695 1.695 0 0 0 0 1.438c.17.363.472.586.698.73.227.145.524.3.85.468l1.492.773v2.545c0 .338 0 .548.01.73a6.4 6.4 0 0 0 6.025 6.025c.183.01.392.01.73.01h.07c.338 0 .547 0 .73-.01a6.4 6.4 0 0 0 6.024-6.025c.011-.182.011-.392.011-.73V11.69l1.4-.726v4.138a.9.9 0 1 0 1.8 0v-6.09c.002-.25-.051-.5-.16-.732-.17-.363-.471-.585-.697-.73a11.336 11.336 0 0 0-.85-.467l-7.28-3.775-.046-.024c-.165-.087-.39-.204-.638-.252Zm-.366 1.803.04-.02a3.843 3.843 0 0 1 .176.09l7.248 3.757c.289.15.488.254.631.337-.143.083-.342.187-.631.337l-7.248 3.757c-.055.03-.098.051-.135.07-.031.016-.05.016-.081 0-.037-.019-.08-.04-.135-.07L4.574 9.338c-.29-.15-.488-.253-.632-.337.144-.084.343-.187.632-.337l7.254-3.757c.055-.03.098-.051.135-.07ZM17 12.624l-3.987 2.067c-.219.114-.44.229-.684.276a1.712 1.712 0 0 1-.65 0c-.245-.047-.466-.161-.684-.275L7 12.622V14.2c0 .384 0 .538.007.663a4.6 4.6 0 0 0 4.33 4.33c.125.007.28.007.663.007.384 0 .538 0 .663-.008a4.6 4.6 0 0 0 4.33-4.33c.007-.124.007-.278.007-.662v-1.576Z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0);const J="_InfoRow_cregb_1",Q="_InfoRow__header_cregb_10",Y=e=>{var r=e,{header:s,children:a,className:t}=r,o=c(r,["header","children","className"]);return T.createElement(E,i(n({},o),{Component:"span",className:p(J,t),weight:"3"}),h(s)&&T.createElement(N,{Component:"strong",className:Q},s,T.createElement(f,null," ")),a)},X="_AccordionSummary_4zehr_2",ee="_AccordionSummary__icon_4zehr_5",re="_Accordion_4zehr_2",se="_AccordionSummary__icon--collapse_4zehr_8",ae="_AccordionSummary__icon--expand_4zehr_11",te=e=>{var r=e,{getRootRef:s,className:a}=r,t=c(r,["getRootRef","className"]);return T.createElement("details",n({className:p(re,a),ref:s},t))};te.Summary=e=>{var r=e,{className:s,after:a,before:t,ExpandIcon:o=W,CollapseIcon:l=U,iconPosition:i="after",children:d}=r,m=c(r,["className","after","before","ExpandIcon","CollapseIcon","iconPosition","children"]);const h=z.createElement("span",{className:"vkuiIcon"},z.createElement(o,{className:p(ee,ae)}),z.createElement(l,{className:p(ee,se)}));return z.createElement(C,n({className:p(X,s),Component:"summary",before:z.createElement(z.Fragment,null,"before"===i&&h,t),after:z.createElement(z.Fragment,null,a,"after"===i&&h)},m),d)};const oe=({gap:e,children:r,justify:s,wrap:a,align:t,direction:o})=>d.jsx("span",{style:{display:"flex",flexDirection:o,justifyContent:s,alignItems:t,flexWrap:a,gap:e},children:r}),le=({linkText:e,icon:r,href:s,size:a=24,target:t="_blank",height:o,width:l})=>{const c={position:"relative",paddingLeft:`${"string"==typeof r?a+5:a+10}px`,marginLeft:"3px",display:"inline-block"},m={position:"absolute",left:"0",top:"50%",transform:"translateY(-50%)",width:`${l||a}px`,height:`${o||a}px`};return d.jsxs(x,{href:s,target:t,style:c,children:["string"==typeof r?d.jsx("span",{style:i(n({},m),{backgroundImage:`url(${r})`,backgroundSize:"cover",borderRadius:5}),children:" "}):d.jsx("span",{style:m,children:r}),e]})},ne=[{label:"Возраст",value:"18"},{label:"Город",value:"Томск"},{label:"Пол",value:"Единственный"},{label:"Место учёбы",value:d.jsxs(oe,{gap:5,align:"center",children:[d.jsx(q,{color:"#9EA1A9"}),d.jsx(x,{href:A,target:"_blank",children:"ТЭПК"})]})},{label:"Место работы",value:d.jsx(x,{href:P,target:"_blank",children:d.jsxs(oe,{gap:5,align:"center",children:[d.jsx(O,{size:24,src:"/portfolio/assets/kot-6be3d63c.png",alt:"kotbread"}),"@kotbread"]})})}],ie=[{title:"С чего начинал",content:d.jsxs(d.Fragment,{children:["Моя дружба с программированием началась в 9-ом классе. Первым языком стал"," ",d.jsx(le,{linkText:"Python",href:R,icon:"/portfolio/assets/python-eeb005c2.png"}),", на котором я писал совсем немного и очень плохо, поэтому моих проектов на этом вы не увидите, но я могу рассказать о некоторых из них:",d.jsx(S,{size:16}),d.jsx(j,{children:d.jsxs("ol",{children:[d.jsxs("li",{children:["Первым проектом был стандартный калькулятор, который поддерживал только простые арифметические операции.",d.jsx(S,{size:16})]}),d.jsxs("li",{children:["Второй проект оказался более увлекательным — это был калькулятор для квадратных уравнений. Моя страсть к алгебре вдохновила меня на создание инструмента, способного автоматически вычислять корни квадратного уравнения по заданным коэффициентам.",d.jsx(S,{size:16})]}),d.jsx("li",{children:"Как и все школьники, я много играл в игры, а для автоматизации игрового процесса мы с другом написали бота, который выполнял рутинные действия, чтобы мы могли спокойно пить чай или спать."})]})})]})},{title:"Что делал после начала",content:d.jsxs(d.Fragment,{children:["После окончания школы поступил в колледж, в котором нас обучают Fullstack разработке (подробнее на странице ",d.jsx(le,{target:"_self",href:`#${u}`,icon:d.jsx(V,{}),linkText:"Стэк"}),"). Мне больше нравится Frontend, но на работе я пишу и Backend часть (что поделать).",d.jsx(S,{size:16}),"В свободное от работы время я могу решать алгоритмические задачки на"," ",d.jsx(le,{linkText:"Leetcode",href:H,icon:"/portfolio/assets/leetcode-35c0aa6b.svg"})," ","или просто отдыхать.",d.jsx(S,{size:16}),"За время учёбы я поучавствовал в большом количестве олимпиад и написал множество проектов, как в рамках программы, так и для себя. Ознакомиться с некоторым списком можно на странице",d.jsx(le,{target:"_self",href:`#${g}`,icon:d.jsx(G,{}),linkText:"Проекты"})," ","или на",d.jsx(le,{linkText:"GitHub",href:L,icon:"/portfolio/assets/github-a015a28e.svg"})]})},{title:"До чего докатился",content:d.jsxs(d.Fragment,{children:["Помимо работы и учёбы я являюсь участником и автором статей в программе бета-тестирования",d.jsx(le,{linkText:"VK Testers",href:F,icon:"/portfolio/assets/logovkt-167b0a28.webp"}),", а когда-то переводил и писал статьи для блога на",d.jsx(le,{linkText:"Хабре",href:$,icon:"/portfolio/assets/habr-9a104634.svg"}),". В прошлом был модератором и участником крупнейшей веб-документации"," ",d.jsx(le,{linkText:"MDN",href:B,icon:"/portfolio/assets/mdn-8ee3841e.svg"})," ","и других крупных OpenSource проектов, например,",d.jsx(le,{linkText:"VKUI",href:M,icon:D})," ","и",d.jsx(le,{linkText:"React",href:Z,icon:K,width:27}),", но сейчас на это совсем нет времени."]})}],ce=()=>d.jsxs(w,{style:k,children:[d.jsx(b,{mode:"secondary",children:"Основная информация"}),d.jsx(_,{showArrows:!0,style:I,getScrollToLeft:e=>e-120,getScrollToRight:e=>e+120,children:d.jsx("div",{style:{display:"flex",gap:10},children:ne.map((e=>d.jsx(y,{style:{maxWidth:"unset"},children:d.jsx(Y,{header:e.label,children:e.value})},e.label)))})}),d.jsxs(j,{children:[d.jsx(v,{children:"Привет! Моё имя выше, а тут будет мелкая история о том, как и когда я вошёл в IT и не вышел обратно."}),d.jsx(S,{size:16}),ie.map((e=>d.jsxs(te,{children:[d.jsx(te.Summary,{iconPosition:"before",children:e.title}),d.jsx(j,{children:d.jsx(v,{style:{lineHeight:1.7},children:e.content})})]},e.title)))]})]});export{ce as default};
