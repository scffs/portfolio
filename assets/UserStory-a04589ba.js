var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,l,r)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[l]=r,s=(e,t)=>{for(var l in t||(t={}))a.call(t,l)&&n(e,l,t[l]);if(r)for(var l of r(t))o.call(t,l)&&n(e,l,t[l]);return e},i=(e,r)=>t(e,l(r)),c=(e,t)=>{var l={};for(var n in e)a.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&r)for(var n of r(e))t.indexOf(n)<0&&o.call(e,n)&&(l[n]=e[n]);return l};import{j as m}from"./index-8e849d0e.js";import{G as _,c as d,e as h,ae as f,af as p,H as u,d as g,U as v,ad as w,P as x,T as b,L as y,ag as j,aa as z,N as E,O as S}from"./AppWrapper-709c38ee.js";import{r as k,R as C}from"./react-37698f52.js";import{T as N,e as H}from"./App-7db3437f.js";import{a as R,S as A,I}from"./SimpleCell-bb5045a3.js";import{F as T,a as L}from"./Footnote-1549d22d.js";import{H as O}from"./Headline-1e308041.js";import{S as P}from"./Subhead-4ef76af3.js";import{T as M}from"./PanelHeaderButton-2c3d012a.js";import{A as W,G as B,g as q}from"./styles-07c9c887.js";var D=_("Icon16ChevronLeft","chevron_left_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_left_16"><path fill="currentColor" d="m4.773 8 3.363 3.364a.9.9 0 1 1-1.272 1.272l-4-4a.9.9 0 0 1 0-1.272l4-4a.9.9 0 1 1 1.272 1.272z" /></symbol>',12,16,!1,void 0),F=_("Icon24Chevron","chevron_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12 4.706 7.706Z" /></g></symbol>',16,24,!1,void 0),Y=_("Icon24ChevronCompactLeft","chevron_compact_left_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_left_24"><path fill="currentColor" d="M11.293 7.706a1 1 0 0 0 0-1.412l-.088-.088a.997.997 0 0 0-1.414.002l-5.084 5.084a.998.998 0 0 0 0 1.416l5.084 5.084c.39.391 1.026.39 1.414.002l.088-.088a.995.995 0 0 0 0-1.412L7 12z" /></symbol>',16,24,!1,void 0),Z=_("Icon24ChevronDown","chevron_down_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_down_24"><path d="M12 13.698 6.64 9.232a1 1 0 0 0-1.28 1.536l6 5a1 1 0 0 0 1.28 0l6-5a1 1 0 1 0-1.28-1.536L12 13.698Z" /></symbol>',24,24,!1,void 0),$=_("Icon24ChevronUp","chevron_up_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_up_24"><path d="m12 10.302-5.36 4.466a1 1 0 1 1-1.28-1.536l6-5a1 1 0 0 1 1.28 0l6 5a1 1 0 1 1-1.28 1.536L12 10.302Z" /></symbol>',24,24,!1,void 0),G=_("Icon24EducationOutline","education_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="education_outline_24"><path fill-rule="evenodd" d="M12.329 3.033a1.711 1.711 0 0 0-.65 0c-.25.048-.473.165-.639.251l-.045.024-7.288 3.775c-.325.169-.622.323-.85.468-.225.144-.527.367-.697.73a1.695 1.695 0 0 0 0 1.438c.17.363.472.586.698.73.227.145.524.3.85.468l1.492.773v2.545c0 .338 0 .548.01.73a6.4 6.4 0 0 0 6.025 6.025c.183.01.392.01.73.01h.07c.338 0 .547 0 .73-.01a6.4 6.4 0 0 0 6.024-6.025c.011-.182.011-.392.011-.73V11.69l1.4-.726v4.138a.9.9 0 1 0 1.8 0v-6.09c.002-.25-.051-.5-.16-.732-.17-.363-.471-.585-.697-.73a11.336 11.336 0 0 0-.85-.467l-7.28-3.775-.046-.024c-.165-.087-.39-.204-.638-.252Zm-.366 1.803.04-.02a3.843 3.843 0 0 1 .176.09l7.248 3.757c.289.15.488.254.631.337-.143.083-.342.187-.631.337l-7.248 3.757c-.055.03-.098.051-.135.07-.031.016-.05.016-.081 0-.037-.019-.08-.04-.135-.07L4.574 9.338c-.29-.15-.488-.253-.632-.337.144-.084.343-.187.632-.337l7.254-3.757c.055-.03.098-.051.135-.07ZM17 12.624l-3.987 2.067c-.219.114-.44.229-.684.276a1.712 1.712 0 0 1-.65 0c-.245-.047-.466-.161-.684-.275L7 12.622V14.2c0 .384 0 .538.007.663a4.6 4.6 0 0 0 4.33 4.33c.125.007.28.007.663.007.384 0 .538 0 .663-.008a4.6 4.6 0 0 0 4.33-4.33c.007-.124.007-.278.007-.662v-1.576Z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0);const V="_Paragraph_q43lm_1",Q=e=>{var t=e,{className:l,Component:r="span",normalize:a=!1}=t,o=c(t,["className","Component","normalize"]);return k.createElement(N,s({Component:r,normalize:a,className:d(l,V)},o))},U="_Caption--caps_400i0_1",K="_Caption--level-1_400i0_5",X="_Caption--level-2_400i0_19",J="_Caption--level-3_400i0_33",ee=e=>{var t=e,{className:l,level:r="1",caps:a,Component:o="span",normalize:n=!0}=t,i=c(t,["className","level","caps","Component","normalize"]);return k.createElement(N,s({Component:o,normalize:n,className:d(l,a&&U,{1:K,2:X,3:J}[r])},i))},te="_ScrollArrow_7awb4_1",le="_ScrollArrow__icon_7awb4_18",re="_ScrollArrow--size-m_7awb4_28",ae="_ScrollArrow--size-l_7awb4_34",oe="_ScrollArrow--direction-left_7awb4_40",ne="_ScrollArrow--direction-right_7awb4_45",se=({size:e,direction:t})=>"m"===e?"left"===t?k.createElement(D,null):k.createElement(R,null):"left"===t?k.createElement(Y,null):k.createElement(F,null),ie=e=>{var t=e,{size:l="l",offsetY:r,direction:a,className:o,getRootRef:n,children:i=k.createElement(se,{direction:a,size:l})}=t,m=c(t,["size","offsetY","direction","className","getRootRef","children"]);return k.createElement("button",s({className:d(te,{m:re,l:ae}[l],{left:oe,right:ne}[a],o),ref:n},m),k.createElement("span",{className:le,style:r?{top:r}:void 0},i))};const ce="_HorizontalScroll_14yio_1",me="_HorizontalScroll__in_14yio_12",_e="_HorizontalScroll__in-wrapper_14yio_27",de="_HorizontalScroll__arrow_14yio_31",he="_HorizontalScroll--withConstArrows_14yio_42",fe="_HorizontalScroll__arrowLeft_14yio_48",pe="_HorizontalScroll__arrowRight_14yio_52";function ue(){return performance&&performance.now?performance.now():Date.now()}const ge=e=>Math.ceil(e.scrollLeft),ve=250;function we({scrollElement:e,getScrollPosition:t,animationQueue:l,onScrollToRightBorder:r,onScrollEnd:a,onScrollStart:o,initialScrollWidth:n,scrollAnimationDuration:s=ve}){if(!e||!t)return;const i=n-e.offsetWidth;let c=ge(e),m=t(c);o(),m>=i&&(r(),m=i);const _=ue();!function t(){if(!e)return void a();const r=ue(),o=Math.min((r-_)/s,1),n=(i=o,.5*(1-Math.cos(Math.PI*i)));var i;const d=c+(m-c)*n;e.scrollLeft=Math.ceil(d),ge(e)===Math.max(0,m)||1===o?(a(),l.shift(),l.length>0&&l[0]()):requestAnimationFrame(t)}()}const xe=e=>{var t=e,{children:l,getScrollToLeft:r,getScrollToRight:a,showArrows:o=!0,arrowSize:n="l",arrowOffsetY:m,scrollAnimationDuration:_=ve,getRef:g,className:v,scrollOnAnyWheel:w=!1}=t,x=c(t,["children","getScrollToLeft","getScrollToRight","showArrows","arrowSize","arrowOffsetY","scrollAnimationDuration","getRef","className","scrollOnAnyWheel"]);const[b,y]=k.useState(!1),[j,z]=k.useState(!1),E=k.useRef(!1),S=h(g),C=k.useRef([]),N=f(),H=k.useCallback((e=>{const t=S.current;C.current.push((()=>{var l;return we({scrollElement:t,getScrollPosition:e,animationQueue:C.current,onScrollToRightBorder:()=>z(!1),onScrollEnd:()=>E.current=!1,onScrollStart:()=>E.current=!0,initialScrollWidth:(null==(l=null==t?void 0:t.firstElementChild)?void 0:l.scrollWidth)||0,scrollAnimationDuration:_})})),1===C.current.length&&C.current[0]()}),[_,S]),R=k.useCallback((()=>{H(null!=r?r:e=>e-S.current.offsetWidth)}),[r,H,S]),A=k.useCallback((()=>{H(null!=a?a:e=>e+S.current.offsetWidth)}),[a,H,S]),I=k.useCallback((()=>{if(o&&N&&S.current&&!E.current){const e=S.current;y(e.scrollLeft>0),z(ge(e)+e.offsetWidth<e.scrollWidth)}}),[N,S,o]),T=p("scroll",I);k.useEffect((()=>{S.current&&T.add(S.current)}),[T,S]),k.useEffect(I,[S,l,I]);const L=k.useCallback((e=>{S.current.scrollBy({left:e.deltaX+e.deltaY,behavior:"auto"}),e.preventDefault()}),[S]),O=p("wheel",L);return k.useEffect((()=>S.current&&w?(O.add(S.current),O.remove):u),[O,S,w]),k.createElement("div",i(s({},x),{className:d(ce,"vkuiInternalHorizontalScroll","always"===o&&he,v)}),o&&(N||void 0===N)&&b&&k.createElement(ie,{size:n,offsetY:m,direction:"left",className:d(de,fe),onClick:R}),o&&(N||void 0===N)&&j&&k.createElement(ie,{size:n,offsetY:m,direction:"right",className:d(de,pe),onClick:A}),k.createElement("div",{className:me,ref:S},k.createElement("div",{className:_e},l)))},be="_Header_kmglg_1",ye="_Header__main_kmglg_15",je="_Header__content_kmglg_20",ze="_Header__content-in_kmglg_25",Ee="_Header__subtitle_kmglg_26",Se="_Header__content--multiline_kmglg_32",ke="_Header--mode-secondary_kmglg_42",Ce="_Header--pi_kmglg_42",Ne="_Header--with-subtitle_kmglg_42",He="_Header--mode-tertiary_kmglg_43",Re="_Header__indicator_kmglg_47",Ae="_Header--mode-primary_kmglg_53",Ie="_Header__aside_kmglg_65",Te="_Header--ios_kmglg_107",Le=e=>{var t=e,{mode:l,size:r}=t,a=c(t,["mode","size"]);const o="large"===r;if(g()===x.IOS)switch(l){case"primary":return o?k.createElement(M,s({level:"2",weight:"2"},a)):k.createElement(M,s({weight:"1",level:"3"},a));case"secondary":return k.createElement(T,s({weight:"1",caps:!0},a));case"tertiary":return k.createElement(M,s({weight:"1",level:"3"},a))}switch(l){case"primary":return o?k.createElement(M,s({level:"2",weight:"2"},a)):k.createElement(O,s({weight:"2"},a));case"secondary":return k.createElement(T,s({weight:"1",caps:!0},a));case"tertiary":return k.createElement(O,s({weight:"2"},a))}return null},Oe=e=>{var t=e,{mode:l="primary",size:r="regular",children:a,subtitle:o,indicator:n,aside:m,getRootRef:_,multiline:h,className:f}=t,p=c(t,["mode","size","children","subtitle","indicator","aside","getRootRef","multiline","className"]);const u=g();return k.createElement("header",i(s({},p),{ref:_,className:d(be,u===x.IOS&&Te,{primary:Ae,secondary:ke,tertiary:He}[l],w(n)&&Ce,v(o)&&Ne,f)}),k.createElement("div",{className:ye},k.createElement(Le,{className:je,Component:"span",mode:l,size:r},k.createElement("span",{className:d(ze,h&&Se)},a),v(n)&&k.createElement(T,{className:Re,weight:"2"},n)),v(o)&&k.createElement(P,{className:d(Ee,h&&Se),Component:"span"},o)),v(m)&&k.createElement(Q,{className:Ie,Component:"span"},m))},Pe="_HorizontalCell_1q642_1",Me="_HorizontalCell__image_1q642_5",We="_HorizontalCell__body_1q642_10",Be="_HorizontalCell__content_1q642_21",qe="_HorizontalCell__subtitle_1q642_27",De="_HorizontalCell--size-s_1q642_35",Fe="_HorizontalCell--size-m_1q642_62",Ye="_HorizontalCell--size-l_1q642_68",Ze=e=>{var t=e,{size:l,children:r}=t,a=c(t,["size","children"]);return"s"===l?k.createElement(ee,a,r):k.createElement(P,a,r)},$e=e=>{var t=e,{className:l,header:r,style:a,subtitle:o,size:n="s",children:i=k.createElement(W,{size:56}),getRootRef:m,getRef:_,extraSubtitle:h}=t,f=c(t,["className","header","style","subtitle","size","children","getRootRef","getRef","extraSubtitle"]);return k.createElement("div",{ref:m,style:a,className:d(Pe,{s:De,m:Fe,l:Ye}[n],l)},k.createElement(b,s({className:We,getRootRef:_},f),v(i)&&k.createElement("div",{className:Me},i),k.createElement("div",{className:Be},v(r)&&k.createElement(Ze,{size:n},r),v(o)&&k.createElement(T,{className:qe},o),v(h)&&k.createElement(T,{className:qe},h))))},Ge="_InfoRow_cregb_1",Ve="_InfoRow__header_cregb_10",Qe=e=>{var t=e,{header:l,children:r,className:a}=t,o=c(t,["header","children","className"]);return k.createElement(O,i(s({},o),{Component:"span",className:d(Ge,a),weight:"3"}),v(l)&&k.createElement(P,{Component:"strong",className:Ve},l,k.createElement(y,null," ")),r)},Ue="_AccordionSummary_4zehr_2",Ke="_AccordionSummary__icon_4zehr_5",Xe="_Accordion_4zehr_2",Je="_AccordionSummary__icon--collapse_4zehr_8",et="_AccordionSummary__icon--expand_4zehr_11",tt=e=>{var t=e,{getRootRef:l,className:r}=t,a=c(t,["getRootRef","className"]);return k.createElement("details",s({className:d(Xe,r),ref:l},a))};tt.Summary=e=>{var t=e,{className:l,after:r,before:a,ExpandIcon:o=Z,CollapseIcon:n=$,iconPosition:i="after",children:m}=t,_=c(t,["className","after","before","ExpandIcon","CollapseIcon","iconPosition","children"]);const h=C.createElement("span",{className:"vkuiIcon"},C.createElement(o,{className:d(Ke,et)}),C.createElement(n,{className:d(Ke,Je)}));return C.createElement(A,s({className:d(Ue,l),Component:"summary",before:C.createElement(C.Fragment,null,"before"===i&&h,a),after:C.createElement(C.Fragment,null,r,"after"===i&&h)},_),m)};const lt=({gap:e,children:t,justify:l,wrap:r,align:a,direction:o})=>m.jsx("span",{style:{display:"flex",flexDirection:o,justifyContent:l,alignItems:a,flexWrap:r,gap:e},children:t}),rt=({linkText:e,icon:t,href:l,size:r=24,target:a="_blank"})=>{const o={position:"relative",paddingLeft:`${"string"==typeof t?r+5:r+10}px`,marginLeft:"3px",display:"inline-block"},n={position:"absolute",left:"0",top:"50%",transform:"translateY(-50%)",width:`${r}px`,height:`${r}px`};return m.jsxs(j,{href:l,target:a,style:o,children:["string"==typeof t?m.jsx("span",{style:i(s({},n),{backgroundImage:`url(${t})`,backgroundSize:"cover",borderRadius:5}),children:" "}):m.jsx("span",{style:n,children:t}),e]})},at=[{label:"Возраст",value:"18"},{label:"Город",value:"Томск"},{label:"Пол",value:"Единственный"},{label:"Место учёбы",value:m.jsxs(lt,{gap:5,align:"center",children:[m.jsx(G,{color:"#9EA1A9"}),m.jsx(j,{href:"https://vk.com/tomsk_tepk",target:"_blank",children:"ТЭПК"})]})},{label:"Место работы",value:m.jsx(j,{href:"https://vk.com/kotbread",target:"_blank",children:m.jsxs(lt,{gap:5,align:"center",children:[m.jsx(W,{size:24,src:"/portfolio/assets/kot-6be3d63c.png",alt:"kotbread"}),"@kotbread"]})})}],ot=[{title:"С чего начинал",content:m.jsxs(m.Fragment,{children:["Моя дружба с программированием началась в 9-ом классе. Первым языком стал"," ",m.jsx(rt,{linkText:"Python",href:"https://www.python.org/",icon:"/portfolio/assets/python-eeb005c2.png"}),", на котором я писал совсем немного и очень плохо, поэтому моих проектов на этом вы не увидите, но я могу рассказать о некоторых из них:",m.jsx(H,{size:16}),m.jsx(z,{children:m.jsxs("ol",{children:[m.jsxs("li",{children:["Первым проектом был стандартный калькулятор, который поддерживал только простые арифметические операции.",m.jsx(H,{size:16})]}),m.jsxs("li",{children:["Второй проект оказался более увлекательным — это был калькулятор для квадратных уравнений. Моя страсть к алгебре вдохновила меня на создание инструмента, способного автоматически вычислять корни квадратного уравнения по заданным коэффициентам.",m.jsx(H,{size:16})]}),m.jsx("li",{children:"Как и все школьники, я много играл в игры, а для автоматизации игрового процесса мы с другом написали бота, который выполнял рутинные действия, чтобы мы могли спокойно пить чай или спать."})]})})]})},{title:"Что делал после начала",content:m.jsxs(m.Fragment,{children:["После окончания школы поступил в колледж, в котором нас обучают Fullstack разработке (подробнее на странице ",m.jsx(rt,{target:"_self",href:`#${E}`,icon:m.jsx(I,{}),linkText:"Стэк"}),"). Мне больше нравится Frontend, но на работе я пишу и Backend часть (что поделать).",m.jsx(H,{size:16}),"В свободное от работы время я могу решать алгоритмические задачки на"," ",m.jsx(rt,{linkText:"Leetcode",href:"https://leetcode.com/scffs/",icon:"/portfolio/assets/leetcode-35c0aa6b.svg"})," ","или просто отдыхать.",m.jsx(H,{size:16}),"За время учёбы я поучавствовал в большом количестве олимпиад и написал множество проектов, как в рамках программы, так и для себя. Ознакомиться с некоторым списком можно на странице",m.jsx(rt,{target:"_self",href:`#${S}`,icon:m.jsx(L,{}),linkText:"Проекты"})," ","или на",m.jsx(rt,{linkText:"GitHub",href:"https://github.com/scffs",icon:"/portfolio/assets/github-614994d9.svg"})]})},{title:"До чего докатился",content:m.jsxs(m.Fragment,{children:["Помимо работы и учёбы я являюсь участником и автором статей в программе бета-тестирования",m.jsx(rt,{linkText:"VK Testers",href:"https://vk.com/testers",icon:"/portfolio/assets/logovkt-167b0a28.webp"}),", а когда-то переводил и писал статьи для блога на",m.jsx(rt,{linkText:"Хабре",href:"https://habr.com/ru/users/scoffs/",icon:"/portfolio/assets/habr-e3309f0e.svg"}),". В прошлом был модератором и участником крупнейшей веб-документации"," ",m.jsx(rt,{linkText:"MDN",href:"https://developer.mozilla.org/ru/",icon:"/portfolio/assets/mdn-4d9fe03d.svg"}),", но сейчас на это совсем нет времени."]})}],nt={display:"flex"},st=()=>m.jsxs(B,{style:q,children:[m.jsx(Oe,{mode:"secondary",children:"Информация о пользователе"}),m.jsx(xe,{showArrows:!0,style:nt,getScrollToLeft:e=>e-120,getScrollToRight:e=>e+120,children:m.jsx("div",{style:{display:"flex",gap:5,width:"500px"},children:at.map((e=>m.jsx($e,{style:{maxWidth:"unset"},children:m.jsx(Qe,{header:e.label,children:e.value})},e.label)))})}),m.jsxs(z,{children:[m.jsx(Q,{children:"Привет! Моё имя выше, а тут будет мелкая история о том, как и когда я вошёл в IT и не вышел обратно."}),m.jsx(H,{size:16}),ot.map((e=>m.jsxs(tt,{children:[m.jsx(tt.Summary,{iconPosition:"before",children:e.title}),m.jsx(z,{children:m.jsx(Q,{children:e.content})})]},e.title)))]})]});export{st as default};
