var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(l,t,r)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[t]=r,s=(e,l)=>{for(var t in l||(l={}))o.call(l,t)&&n(e,t,l[t]);if(r)for(var t of r(l))a.call(l,t)&&n(e,t,l[t]);return e},i=(e,r)=>l(e,t(r)),c=(e,l)=>{var t={};for(var n in e)o.call(e,n)&&l.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&r)for(var n of r(e))l.indexOf(n)<0&&a.call(e,n)&&(t[n]=e[n]);return t};import{j as m}from"./index-99c6a273.js";import{M as d,c as f,e as _,af as h,ag as p,x as u,N as v,O as g,ab as x,ah as b,a8 as w,I as j,J as y}from"./AppWrapper-e729ec02.js";import{H as z,P as S}from"./Header-42fa87a6.js";import{r as E,R as C}from"./react-37698f52.js";import{I as k,S as N}from"./SimpleCell-dd947a15.js";import{A as R,G as A,g as H}from"./styles-1872efc0.js";import{T as I,e as T}from"./App-888345e3.js";import{F as L,a as O}from"./Footnote-35e03195.js";import{S as M}from"./Subhead-2fa865ad.js";import{H as P}from"./Headline-73221286.js";import{I as W}from"./brackets_slash_outline_24-61f53576.js";import"./PanelHeaderButton-b7c80df2.js";import"./ImageBase-6edb92c1.js";var B=d("Icon16ChevronLeft","chevron_left_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_left_16"><path fill="currentColor" d="m4.773 8 3.363 3.364a.9.9 0 1 1-1.272 1.272l-4-4a.9.9 0 0 1 0-1.272l4-4a.9.9 0 1 1 1.272 1.272z" /></symbol>',12,16,!1,void 0),D=d("Icon24Chevron","chevron_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12 4.706 7.706Z" /></g></symbol>',16,24,!1,void 0),F=d("Icon24ChevronCompactLeft","chevron_compact_left_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_left_24"><path fill="currentColor" d="M11.293 7.706a1 1 0 0 0 0-1.412l-.088-.088a.997.997 0 0 0-1.414.002l-5.084 5.084a.998.998 0 0 0 0 1.416l5.084 5.084c.39.391 1.026.39 1.414.002l.088-.088a.995.995 0 0 0 0-1.412L7 12z" /></symbol>',16,24,!1,void 0),q=d("Icon24ChevronDown","chevron_down_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_down_24"><path d="M12 13.698 6.64 9.232a1 1 0 0 0-1.28 1.536l6 5a1 1 0 0 0 1.28 0l6-5a1 1 0 1 0-1.28-1.536L12 13.698Z" /></symbol>',24,24,!1,void 0),Y=d("Icon24ChevronUp","chevron_up_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_up_24"><path d="m12 10.302-5.36 4.466a1 1 0 1 1-1.28-1.536l6-5a1 1 0 0 1 1.28 0l6 5a1 1 0 1 1-1.28 1.536L12 10.302Z" /></symbol>',24,24,!1,void 0),Z=d("Icon24EducationOutline","education_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="education_outline_24"><path fill-rule="evenodd" d="M12.329 3.033a1.711 1.711 0 0 0-.65 0c-.25.048-.473.165-.639.251l-.045.024-7.288 3.775c-.325.169-.622.323-.85.468-.225.144-.527.367-.697.73a1.695 1.695 0 0 0 0 1.438c.17.363.472.586.698.73.227.145.524.3.85.468l1.492.773v2.545c0 .338 0 .548.01.73a6.4 6.4 0 0 0 6.025 6.025c.183.01.392.01.73.01h.07c.338 0 .547 0 .73-.01a6.4 6.4 0 0 0 6.024-6.025c.011-.182.011-.392.011-.73V11.69l1.4-.726v4.138a.9.9 0 1 0 1.8 0v-6.09c.002-.25-.051-.5-.16-.732-.17-.363-.471-.585-.697-.73a11.336 11.336 0 0 0-.85-.467l-7.28-3.775-.046-.024c-.165-.087-.39-.204-.638-.252Zm-.366 1.803.04-.02a3.843 3.843 0 0 1 .176.09l7.248 3.757c.289.15.488.254.631.337-.143.083-.342.187-.631.337l-7.248 3.757c-.055.03-.098.051-.135.07-.031.016-.05.016-.081 0-.037-.019-.08-.04-.135-.07L4.574 9.338c-.29-.15-.488-.253-.632-.337.144-.084.343-.187.632-.337l7.254-3.757c.055-.03.098-.051.135-.07ZM17 12.624l-3.987 2.067c-.219.114-.44.229-.684.276a1.712 1.712 0 0 1-.65 0c-.245-.047-.466-.161-.684-.275L7 12.622V14.2c0 .384 0 .538.007.663a4.6 4.6 0 0 0 4.33 4.33c.125.007.28.007.663.007.384 0 .538 0 .663-.008a4.6 4.6 0 0 0 4.33-4.33c.007-.124.007-.278.007-.662v-1.576Z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0);const $="_Caption--caps_400i0_1",V="_Caption--level-1_400i0_5",G="_Caption--level-2_400i0_19",Q="_Caption--level-3_400i0_33",J=e=>{var l=e,{className:t,level:r="1",caps:o,Component:a="span",normalize:n=!0}=l,i=c(l,["className","level","caps","Component","normalize"]);return E.createElement(I,s({Component:a,normalize:n,className:f(t,o&&$,{1:V,2:G,3:Q}[r])},i))},K="_ScrollArrow_7awb4_1",U="_ScrollArrow__icon_7awb4_18",X="_ScrollArrow--size-m_7awb4_28",ee="_ScrollArrow--size-l_7awb4_34",le="_ScrollArrow--direction-left_7awb4_40",te="_ScrollArrow--direction-right_7awb4_45",re=({size:e,direction:l})=>"m"===e?"left"===l?E.createElement(B,null):E.createElement(k,null):"left"===l?E.createElement(F,null):E.createElement(D,null),oe=e=>{var l=e,{size:t="l",offsetY:r,direction:o,className:a,getRootRef:n,children:i=E.createElement(re,{direction:o,size:t})}=l,m=c(l,["size","offsetY","direction","className","getRootRef","children"]);return E.createElement("button",s({className:f(K,{m:X,l:ee}[t],{left:le,right:te}[o],a),ref:n},m),E.createElement("span",{className:U,style:r?{top:r}:void 0},i))};const ae="_HorizontalScroll_14yio_1",ne="_HorizontalScroll__in_14yio_12",se="_HorizontalScroll__in-wrapper_14yio_27",ie="_HorizontalScroll__arrow_14yio_31",ce="_HorizontalScroll--withConstArrows_14yio_42",me="_HorizontalScroll__arrowLeft_14yio_48",de="_HorizontalScroll__arrowRight_14yio_52";function fe(){return performance&&performance.now?performance.now():Date.now()}const _e=e=>Math.ceil(e.scrollLeft),he=250;function pe({scrollElement:e,getScrollPosition:l,animationQueue:t,onScrollToRightBorder:r,onScrollEnd:o,onScrollStart:a,initialScrollWidth:n,scrollAnimationDuration:s=he}){if(!e||!l)return;const i=n-e.offsetWidth;let c=_e(e),m=l(c);a(),m>=i&&(r(),m=i);const d=fe();!function l(){if(!e)return void o();const r=fe(),a=Math.min((r-d)/s,1),n=(i=a,.5*(1-Math.cos(Math.PI*i)));var i;const f=c+(m-c)*n;e.scrollLeft=Math.ceil(f),_e(e)===Math.max(0,m)||1===a?(o(),t.shift(),t.length>0&&t[0]()):requestAnimationFrame(l)}()}const ue=e=>{var l=e,{children:t,getScrollToLeft:r,getScrollToRight:o,showArrows:a=!0,arrowSize:n="l",arrowOffsetY:m,scrollAnimationDuration:d=he,getRef:v,className:g,scrollOnAnyWheel:x=!1}=l,b=c(l,["children","getScrollToLeft","getScrollToRight","showArrows","arrowSize","arrowOffsetY","scrollAnimationDuration","getRef","className","scrollOnAnyWheel"]);const[w,j]=E.useState(!1),[y,z]=E.useState(!1),S=E.useRef(!1),C=_(v),k=E.useRef([]),N=h(),R=E.useCallback((e=>{const l=C.current;k.current.push((()=>{var t;return pe({scrollElement:l,getScrollPosition:e,animationQueue:k.current,onScrollToRightBorder:()=>z(!1),onScrollEnd:()=>S.current=!1,onScrollStart:()=>S.current=!0,initialScrollWidth:(null==(t=null==l?void 0:l.firstElementChild)?void 0:t.scrollWidth)||0,scrollAnimationDuration:d})})),1===k.current.length&&k.current[0]()}),[d,C]),A=E.useCallback((()=>{R(null!=r?r:e=>e-C.current.offsetWidth)}),[r,R,C]),H=E.useCallback((()=>{R(null!=o?o:e=>e+C.current.offsetWidth)}),[o,R,C]),I=E.useCallback((()=>{if(a&&N&&C.current&&!S.current){const e=C.current;j(e.scrollLeft>0),z(_e(e)+e.offsetWidth<e.scrollWidth)}}),[N,C,a]),T=p("scroll",I);E.useEffect((()=>{C.current&&T.add(C.current)}),[T,C]),E.useEffect(I,[C,t,I]);const L=E.useCallback((e=>{C.current.scrollBy({left:e.deltaX+e.deltaY,behavior:"auto"}),e.preventDefault()}),[C]),O=p("wheel",L);return E.useEffect((()=>C.current&&x?(O.add(C.current),O.remove):u),[O,C,x]),E.createElement("div",i(s({},b),{className:f(ae,"vkuiInternalHorizontalScroll","always"===a&&ce,g)}),a&&(N||void 0===N)&&w&&E.createElement(oe,{size:n,offsetY:m,direction:"left",className:f(ie,me),onClick:A}),a&&(N||void 0===N)&&y&&E.createElement(oe,{size:n,offsetY:m,direction:"right",className:f(ie,de),onClick:H}),E.createElement("div",{className:ne,ref:C},E.createElement("div",{className:se},t)))},ve="_HorizontalCell_1q642_1",ge="_HorizontalCell__image_1q642_5",xe="_HorizontalCell__body_1q642_10",be="_HorizontalCell__content_1q642_21",we="_HorizontalCell__subtitle_1q642_27",je="_HorizontalCell--size-s_1q642_35",ye="_HorizontalCell--size-m_1q642_62",ze="_HorizontalCell--size-l_1q642_68",Se=e=>{var l=e,{size:t,children:r}=l,o=c(l,["size","children"]);return"s"===t?E.createElement(J,o,r):E.createElement(M,o,r)},Ee=e=>{var l=e,{className:t,header:r,style:o,subtitle:a,size:n="s",children:i=E.createElement(R,{size:56}),getRootRef:m,getRef:d,extraSubtitle:_}=l,h=c(l,["className","header","style","subtitle","size","children","getRootRef","getRef","extraSubtitle"]);return E.createElement("div",{ref:m,style:o,className:f(ve,{s:je,m:ye,l:ze}[n],t)},E.createElement(v,s({className:xe,getRootRef:d},h),g(i)&&E.createElement("div",{className:ge},i),E.createElement("div",{className:be},g(r)&&E.createElement(Se,{size:n},r),g(a)&&E.createElement(L,{className:we},a),g(_)&&E.createElement(L,{className:we},_))))},Ce="_InfoRow_cregb_1",ke="_InfoRow__header_cregb_10",Ne=e=>{var l=e,{header:t,children:r,className:o}=l,a=c(l,["header","children","className"]);return E.createElement(P,i(s({},a),{Component:"span",className:f(Ce,o),weight:"3"}),g(t)&&E.createElement(M,{Component:"strong",className:ke},t,E.createElement(x,null," ")),r)},Re="_AccordionSummary_4zehr_2",Ae="_AccordionSummary__icon_4zehr_5",He="_Accordion_4zehr_2",Ie="_AccordionSummary__icon--collapse_4zehr_8",Te="_AccordionSummary__icon--expand_4zehr_11",Le=e=>{var l=e,{getRootRef:t,className:r}=l,o=c(l,["getRootRef","className"]);return E.createElement("details",s({className:f(He,r),ref:t},o))};Le.Summary=e=>{var l=e,{className:t,after:r,before:o,ExpandIcon:a=q,CollapseIcon:n=Y,iconPosition:i="after",children:m}=l,d=c(l,["className","after","before","ExpandIcon","CollapseIcon","iconPosition","children"]);const _=C.createElement("span",{className:"vkuiIcon"},C.createElement(a,{className:f(Ae,Te)}),C.createElement(n,{className:f(Ae,Ie)}));return C.createElement(N,s({className:f(Re,t),Component:"summary",before:C.createElement(C.Fragment,null,"before"===i&&_,o),after:C.createElement(C.Fragment,null,r,"after"===i&&_)},d),m)};const Oe=({gap:e,children:l,justify:t,wrap:r,align:o,direction:a})=>m.jsx("span",{style:{display:"flex",flexDirection:a,justifyContent:t,alignItems:o,flexWrap:r,gap:e},children:l}),Me=({linkText:e,icon:l,href:t,size:r=24,target:o="_blank"})=>{const a={position:"relative",paddingLeft:`${"string"==typeof l?r+5:r+10}px`,marginLeft:"3px",display:"inline-block"},n={position:"absolute",left:"0",top:"50%",transform:"translateY(-50%)",width:`${r}px`,height:`${r}px`};return m.jsxs(b,{href:t,target:o,style:a,children:["string"==typeof l?m.jsx("span",{style:i(s({},n),{backgroundImage:`url(${l})`,backgroundSize:"cover",borderRadius:5}),children:" "}):m.jsx("span",{style:n,children:l}),e]})},Pe=[{label:"Возраст",value:"18"},{label:"Город",value:"Томск"},{label:"Пол",value:"Единственный"},{label:"Место учёбы",value:m.jsxs(Oe,{gap:5,align:"center",children:[m.jsx(Z,{color:"#9EA1A9"}),m.jsx(b,{href:"https://vk.com/tomsk_tepk",target:"_blank",children:"ТЭПК"})]})},{label:"Место работы",value:m.jsx(b,{href:"https://vk.com/kotbread",target:"_blank",children:m.jsxs(Oe,{gap:5,align:"center",children:[m.jsx(R,{size:24,src:"/portfolio/assets/kot-6be3d63c.png",alt:"kotbread"}),"@kotbread"]})})}],We=[{title:"С чего начинал",content:m.jsxs(m.Fragment,{children:["Моя дружба с программированием началась в 9-ом классе. Первым языком стал"," ",m.jsx(Me,{linkText:"Python",href:"https://www.python.org/",icon:"/portfolio/assets/python-eeb005c2.png"}),", на котором я писал совсем немного и очень плохо, поэтому моих проектов на этом вы не увидите, но я могу рассказать о некоторых из них:",m.jsx(T,{size:16}),m.jsx(w,{children:m.jsxs("ol",{children:[m.jsxs("li",{children:["Первым проектом был стандартный калькулятор, который поддерживал только простые арифметические операции.",m.jsx(T,{size:16})]}),m.jsxs("li",{children:["Второй проект оказался более увлекательным — это был калькулятор для квадратных уравнений. Моя страсть к алгебре вдохновила меня на создание инструмента, способного автоматически вычислять корни квадратного уравнения по заданным коэффициентам.",m.jsx(T,{size:16})]}),m.jsx("li",{children:"Как и все школьники, я много играл в игры, а для автоматизации игрового процесса мы с другом написали бота, который выполнял рутинные действия, чтобы мы могли спокойно пить чай или спать."})]})})]})},{title:"Что делал после начала",content:m.jsxs(m.Fragment,{children:["После окончания школы поступил в колледж, в котором нас обучают Fullstack разработке (подробнее на странице ",m.jsx(Me,{target:"_self",href:`#${j}`,icon:m.jsx(W,{}),linkText:"Стэк"}),"). Мне больше нравится Frontend, но на работе я пишу и Backend часть (что поделать).",m.jsx(T,{size:16}),"В свободное от работы время я могу решать алгоритмические задачки на"," ",m.jsx(Me,{linkText:"Leetcode",href:"https://leetcode.com/scffs/",icon:"/portfolio/assets/leetcode-35c0aa6b.svg"})," ","или просто отдыхать.",m.jsx(T,{size:16}),"За время учёбы я поучавствовал в большом количестве олимпиад и написал множество проектов, как в рамках программы, так и для себя. Ознакомиться с некоторым списком можно на странице",m.jsx(Me,{target:"_self",href:`#${y}`,icon:m.jsx(O,{}),linkText:"Проекты"})," ","или на",m.jsx(Me,{linkText:"GitHub",href:"https://github.com/scffs",icon:"/portfolio/assets/github-a015a28e.svg"})]})},{title:"До чего докатился",content:m.jsxs(m.Fragment,{children:["Помимо работы и учёбы я являюсь участником и автором статей в программе бета-тестирования",m.jsx(Me,{linkText:"VK Testers",href:"https://vk.com/testers",icon:"/portfolio/assets/logovkt-167b0a28.webp"}),", а когда-то переводил и писал статьи для блога на",m.jsx(Me,{linkText:"Хабре",href:"https://habr.com/ru/users/scoffs/",icon:"/portfolio/assets/habr-9a104634.svg"}),". В прошлом был модератором и участником крупнейшей веб-документации"," ",m.jsx(Me,{linkText:"MDN",href:"https://developer.mozilla.org/ru/",icon:"/portfolio/assets/mdn-8ee3841e.svg"}),", но сейчас на это совсем нет времени."]})}],Be={display:"flex"},De=()=>m.jsxs(A,{style:H,children:[m.jsx(z,{mode:"secondary",children:"Информация о пользователе"}),m.jsx(ue,{showArrows:!0,style:Be,getScrollToLeft:e=>e-120,getScrollToRight:e=>e+120,children:m.jsx("div",{style:{display:"flex",gap:10},children:Pe.map((e=>m.jsx(Ee,{style:{maxWidth:"unset"},children:m.jsx(Ne,{header:e.label,children:e.value})},e.label)))})}),m.jsxs(w,{children:[m.jsx(S,{children:"Привет! Моё имя выше, а тут будет мелкая история о том, как и когда я вошёл в IT и не вышел обратно."}),m.jsx(T,{size:16}),We.map((e=>m.jsxs(Le,{children:[m.jsx(Le.Summary,{iconPosition:"before",children:e.title}),m.jsx(w,{children:m.jsx(S,{children:e.content})})]},e.title)))]})]});export{De as default};
