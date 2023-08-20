var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,r,l)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[r]=l,i=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&n(e,r,t[r]);if(l)for(var r of l(t))a.call(t,r)&&n(e,r,t[r]);return e};import{L as s,_ as c,e as m,d as u,i as d,h as f,al as v,am as h,M as p,c as g,g as k,P as w,a0 as x,ak as _,T as b,Q as y,I as j,an as E,ah as z,X as S,Y as C}from"./index-99b15b47.js";import{r as N,R as H}from"./react-37698f52.js";import{T as R,e as A}from"./App-e440e7c4.js";import{a as I,S as T,I as L}from"./SimpleCell-b03e322b.js";import{F as O,a as P}from"./Footnote-97fa1dae.js";import{H as M}from"./Headline-024401dc.js";import{S as B}from"./Subhead-27ad3fc5.js";import{T as W}from"./PanelHeaderButton-a5396a9b.js";import{A as D,G as F,g as Y}from"./styles-b4cd538e.js";var Z=s("Icon16ChevronLeft","chevron_left_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_left_16"><path fill="currentColor" d="m4.773 8 3.363 3.364a.9.9 0 1 1-1.272 1.272l-4-4a.9.9 0 0 1 0-1.272l4-4a.9.9 0 1 1 1.272 1.272z" /></symbol>',12,16,!1,void 0),$=s("Icon24Chevron","chevron_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12 4.706 7.706Z" /></g></symbol>',16,24,!1,void 0),Q=s("Icon24ChevronCompactLeft","chevron_compact_left_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_left_24"><path fill="currentColor" d="M11.293 7.706a1 1 0 0 0 0-1.412l-.088-.088a.997.997 0 0 0-1.414.002l-5.084 5.084a.998.998 0 0 0 0 1.416l5.084 5.084c.39.391 1.026.39 1.414.002l.088-.088a.995.995 0 0 0 0-1.412L7 12z" /></symbol>',16,24,!1,void 0),V=s("Icon24ChevronDown","chevron_down_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_down_24"><path d="M12 13.698 6.64 9.232a1 1 0 0 0-1.28 1.536l6 5a1 1 0 0 0 1.28 0l6-5a1 1 0 1 0-1.28-1.536L12 13.698Z" /></symbol>',24,24,!1,void 0),G=s("Icon24ChevronUp","chevron_up_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_up_24"><path d="m12 10.302-5.36 4.466a1 1 0 1 1-1.28-1.536l6-5a1 1 0 0 1 1.28 0l6 5a1 1 0 1 1-1.28 1.536L12 10.302Z" /></symbol>',24,24,!1,void 0),X=s("Icon24EducationOutline","education_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="education_outline_24"><path fill-rule="evenodd" d="M12.329 3.033a1.711 1.711 0 0 0-.65 0c-.25.048-.473.165-.639.251l-.045.024-7.288 3.775c-.325.169-.622.323-.85.468-.225.144-.527.367-.697.73a1.695 1.695 0 0 0 0 1.438c.17.363.472.586.698.73.227.145.524.3.85.468l1.492.773v2.545c0 .338 0 .548.01.73a6.4 6.4 0 0 0 6.025 6.025c.183.01.392.01.73.01h.07c.338 0 .547 0 .73-.01a6.4 6.4 0 0 0 6.024-6.025c.011-.182.011-.392.011-.73V11.69l1.4-.726v4.138a.9.9 0 1 0 1.8 0v-6.09c.002-.25-.051-.5-.16-.732-.17-.363-.471-.585-.697-.73a11.336 11.336 0 0 0-.85-.467l-7.28-3.775-.046-.024c-.165-.087-.39-.204-.638-.252Zm-.366 1.803.04-.02a3.843 3.843 0 0 1 .176.09l7.248 3.757c.289.15.488.254.631.337-.143.083-.342.187-.631.337l-7.248 3.757c-.055.03-.098.051-.135.07-.031.016-.05.016-.081 0-.037-.019-.08-.04-.135-.07L4.574 9.338c-.29-.15-.488-.253-.632-.337.144-.084.343-.187.632-.337l7.254-3.757c.055-.03.098-.051.135-.07ZM17 12.624l-3.987 2.067c-.219.114-.44.229-.684.276a1.712 1.712 0 0 1-.65 0c-.245-.047-.466-.161-.684-.275L7 12.622V14.2c0 .384 0 .538.007.663a4.6 4.6 0 0 0 4.33 4.33c.125.007.28.007.663.007.384 0 .538 0 .663-.008a4.6 4.6 0 0 0 4.33-4.33c.007-.124.007-.278.007-.662v-1.576Z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0),q=function(e){var t=e.className,r=e.Component,l=void 0===r?"span":r,o=e.normalize,a=void 0!==o&&o,n=c(e,["className","Component","normalize"]);return N.createElement(R,m({Component:l,normalize:a,className:u(t,"vkuiParagraph")},n))},K=function(e){var t=e.className,r=e.level,l=void 0===r?"1":r,o=e.caps,a=e.Component,n=void 0===a?"span":a,i=e.normalize,s=void 0===i||i,d=c(e,["className","level","caps","Component","normalize"]);return N.createElement(R,m({Component:n,normalize:s,className:u(t,o&&"vkuiCaption--caps",{1:"vkuiCaption--level-1",2:"vkuiCaption--level-2",3:"vkuiCaption--level-3"}[l])},d))},U=function(e){var t=e.size,r=e.direction;return"m"===t?"left"===r?N.createElement(Z,null):N.createElement(I,null):"left"===r?N.createElement(Q,null):N.createElement($,null)},J=function(e){var t=e.size,r=void 0===t?"l":t,l=e.offsetY,o=e.direction,a=e.className,n=e.getRootRef,i=e.children,s=void 0===i?N.createElement(U,{direction:o,size:r}):i,d=c(e,["size","offsetY","direction","className","getRootRef","children"]);return N.createElement("button",m({className:u("vkuiScrollArrow",{m:"vkuiScrollArrow--size-m",l:"vkuiScrollArrow--size-l"}[r],{left:"vkuiScrollArrow--direction-left",right:"vkuiScrollArrow--direction-right"}[o],a),ref:n},d),N.createElement("span",{className:"vkuiScrollArrow__icon",style:l?{top:l}:void 0},s))};function ee(){return performance&&performance.now?performance.now():Date.now()}var te=function(e){return Math.ceil(e.scrollLeft)};function re(e){var t=e.scrollElement,r=e.getScrollPosition,l=e.animationQueue,o=e.onScrollToRightBorder,a=e.onScrollEnd,n=e.onScrollStart,i=e.initialScrollWidth,s=e.scrollAnimationDuration,c=void 0===s?250:s;if(t&&r){var m=i-t.offsetWidth,u=te(t),d=r(u);n(),d>=m&&(o(),d=m);var f=ee();!function e(){if(t){var r,o=ee(),n=Math.min((o-f)/c,1),i=(r=n,.5*(1-Math.cos(Math.PI*r))),s=u+(d-u)*i;t.scrollLeft=Math.ceil(s),te(t)===Math.max(0,d)||1===n?(a(),l.shift(),l.length>0&&l[0]()):requestAnimationFrame(e)}else a()}()}}var le=function(e){var t=e.children,r=e.getScrollToLeft,l=e.getScrollToRight,o=e.showArrows,a=void 0===o||o,n=e.arrowSize,i=void 0===n?"l":n,s=e.arrowOffsetY,k=e.scrollAnimationDuration,w=void 0===k?250:k,x=e.getRef,_=e.className,b=e.scrollOnAnyWheel,y=void 0!==b&&b,j=c(e,["children","getScrollToLeft","getScrollToRight","showArrows","arrowSize","arrowOffsetY","scrollAnimationDuration","getRef","className","scrollOnAnyWheel"]),E=d(N.useState(!1),2),z=E[0],S=E[1],C=d(N.useState(!1),2),H=C[0],R=C[1],A=N.useRef(!1),I=f(x),T=N.useRef([]),L=v(),O=N.useCallback((function(e){var t=I.current;T.current.push((function(){var r,l;return re({scrollElement:t,getScrollPosition:e,animationQueue:T.current,onScrollToRightBorder:function(){return R(!1)},onScrollEnd:function(){return A.current=!1},onScrollStart:function(){return A.current=!0},initialScrollWidth:(null===(l=t)||void 0===l||null===(r=l.firstElementChild)||void 0===r?void 0:r.scrollWidth)||0,scrollAnimationDuration:w})})),1===T.current.length&&T.current[0]()}),[w,I]),P=N.useCallback((function(){O(null!=r?r:function(e){return e-I.current.offsetWidth})}),[r,O,I]),M=N.useCallback((function(){O(null!=l?l:function(e){return e+I.current.offsetWidth})}),[l,O,I]),B=N.useCallback((function(){if(a&&L&&I.current&&!A.current){var e=I.current;S(e.scrollLeft>0),R(te(e)+e.offsetWidth<e.scrollWidth)}}),[L,I,a]),W=h("scroll",B);N.useEffect((function(){I.current&&W.add(I.current)}),[W,I]),N.useEffect(B,[I,t,B]);var D=N.useCallback((function(e){I.current.scrollBy({left:e.deltaX+e.deltaY,behavior:"auto"}),e.preventDefault()}),[I]),F=h("wheel",D);return N.useEffect((function(){return I.current&&y?(F.add(I.current),F.remove):p}),[F,I,y]),N.createElement("div",g(m({},j),{className:u("vkuiHorizontalScroll","vkuiInternalHorizontalScroll","always"===a&&"vkuiHorizontalScroll--withConstArrows",_)}),a&&(L||void 0===L)&&z&&N.createElement(J,{size:i,offsetY:s,direction:"left",className:u("vkuiHorizontalScroll__arrow","vkuiHorizontalScroll__arrowLeft"),onClick:P}),a&&(L||void 0===L)&&H&&N.createElement(J,{size:i,offsetY:s,direction:"right",className:u("vkuiHorizontalScroll__arrow","vkuiHorizontalScroll__arrowRight"),onClick:M}),N.createElement("div",{className:"vkuiHorizontalScroll__in",ref:I},N.createElement("div",{className:"vkuiHorizontalScroll__in-wrapper"},t)))},oe=function(e){var t=e.mode,r=e.size,l=c(e,["mode","size"]),o="large"===r;if(k()===w.IOS)switch(t){case"primary":return o?N.createElement(W,m({level:"2",weight:"2"},l)):N.createElement(W,m({weight:"1",level:"3"},l));case"secondary":return N.createElement(O,m({weight:"1",caps:!0},l));case"tertiary":return N.createElement(W,m({weight:"1",level:"3"},l))}switch(t){case"primary":return o?N.createElement(W,m({level:"2",weight:"2"},l)):N.createElement(M,m({weight:"2"},l));case"secondary":return N.createElement(O,m({weight:"1",caps:!0},l));case"tertiary":return N.createElement(M,m({weight:"2"},l))}return null},ae=function(e){var t=e.mode,r=void 0===t?"primary":t,l=e.size,o=void 0===l?"regular":l,a=e.children,n=e.subtitle,i=e.indicator,s=e.aside,d=e.getRootRef,f=e.multiline,v=e.className,h=c(e,["mode","size","children","subtitle","indicator","aside","getRootRef","multiline","className"]),p=k();return N.createElement("header",g(m({},h),{ref:d,className:u("vkuiHeader",p===w.IOS&&"vkuiHeader--ios",{primary:"vkuiHeader--mode-primary",secondary:"vkuiHeader--mode-secondary",tertiary:"vkuiHeader--mode-tertiary"}[r],_(i)&&"vkuiHeader--pi",x(n)&&"vkuiHeader--with-subtitle",v)}),N.createElement("div",{className:"vkuiHeader__main"},N.createElement(oe,{className:"vkuiHeader__content",Component:"span",mode:r,size:o},N.createElement("span",{className:u("vkuiHeader__content-in",f&&"vkuiHeader__content--multiline")},a),x(i)&&N.createElement(O,{className:"vkuiHeader__indicator",weight:"2"},i)),x(n)&&N.createElement(B,{className:u("vkuiHeader__subtitle",f&&"vkuiHeader__content--multiline"),Component:"span"},n)),x(s)&&N.createElement(q,{className:"vkuiHeader__aside",Component:"span"},s))},ne=function(e){var t=e.size,r=e.children,l=c(e,["size","children"]);return"s"===t?N.createElement(K,l,r):N.createElement(B,l,r)},ie=function(e){var t=e.className,r=e.header,l=e.style,o=e.subtitle,a=e.size,n=void 0===a?"s":a,i=e.children,s=void 0===i?N.createElement(D,{size:56}):i,d=e.getRootRef,f=e.getRef,v=e.extraSubtitle,h=c(e,["className","header","style","subtitle","size","children","getRootRef","getRef","extraSubtitle"]);return N.createElement("div",{ref:d,style:l,className:u("vkuiHorizontalCell",{s:"vkuiHorizontalCell--size-s",m:"vkuiHorizontalCell--size-m",l:"vkuiHorizontalCell--size-l"}[n],t)},N.createElement(b,m({className:"vkuiHorizontalCell__body",getRootRef:f},h),x(s)&&N.createElement("div",{className:"vkuiHorizontalCell__image"},s),N.createElement("div",{className:"vkuiHorizontalCell__content"},x(r)&&N.createElement(ne,{size:n},r),x(o)&&N.createElement(O,{className:"vkuiHorizontalCell__subtitle"},o),x(v)&&N.createElement(O,{className:"vkuiHorizontalCell__subtitle"},v))))},se=function(e){var t=e.header,r=e.children,l=e.className,o=c(e,["header","children","className"]);return N.createElement(M,g(m({},o),{Component:"span",className:u("vkuiInfoRow",l),weight:"3"}),x(t)&&N.createElement(B,{Component:"strong",className:"vkuiInfoRow__header"},t,N.createElement(y,null," ")),r)},ce=function(e){var t=e.getRootRef,r=e.className,l=c(e,["getRootRef","className"]);return N.createElement("details",m({className:u("vkuiAccordion",r),ref:t},l))};ce.Summary=function(e){var t=e.className,r=e.after,l=e.before,o=e.ExpandIcon,a=void 0===o?V:o,n=e.CollapseIcon,i=void 0===n?G:n,s=e.iconPosition,d=void 0===s?"after":s,f=e.children,v=c(e,["className","after","before","ExpandIcon","CollapseIcon","iconPosition","children"]),h=H.createElement("span",{className:"vkuiIcon"},H.createElement(a,{className:u("vkuiAccordionSummary__icon","vkuiAccordionSummary__icon--expand")}),H.createElement(i,{className:u("vkuiAccordionSummary__icon","vkuiAccordionSummary__icon--collapse")}));return H.createElement(T,m({className:u("vkuiAccordionSummary",t),Component:"summary",before:H.createElement(H.Fragment,null,"before"===d&&h,l),after:H.createElement(H.Fragment,null,r,"after"===d&&h)},v),f)};const me=({gap:e,children:t,justify:r,wrap:l,align:o,direction:a})=>j.jsx("span",{style:{display:"flex",flexDirection:a,justifyContent:r,alignItems:o,flexWrap:l,gap:e},children:t}),ue=({linkText:e,icon:l,href:o,size:a=24,target:n="_blank"})=>{const s={position:"relative",paddingLeft:`${"string"==typeof l?a+5:a+10}px`,marginLeft:"3px",display:"inline-block"},c={position:"absolute",left:"0",top:"50%",transform:"translateY(-50%)",width:`${a}px`,height:`${a}px`};return j.jsxs(E,{href:o,target:n,style:s,children:["string"==typeof l?j.jsx("span",{style:(m=i({},c),u={backgroundImage:`url(${l})`,backgroundSize:"cover",borderRadius:5},t(m,r(u))),children:" "}):j.jsx("span",{style:c,children:l}),e]});var m,u},de=[{label:"Возраст",value:"18"},{label:"Город",value:"Томск"},{label:"Пол",value:"Единственный"},{label:"Место учёбы",value:j.jsxs(me,{gap:5,align:"center",children:[j.jsx(X,{color:"#9EA1A9"}),j.jsx(E,{href:"https://vk.com/tomsk_tepk",target:"_blank",children:"ТЭПК"})]})},{label:"Место работы",value:j.jsx(E,{href:"https://vk.com/kotbread",target:"_blank",children:j.jsxs(me,{gap:5,align:"center",children:[j.jsx(D,{size:24,src:"/portfolio/assets/kot-6be3d63c.png"}),"@kotbread"]})})}],fe=[{title:"С чего начинал",content:j.jsxs(j.Fragment,{children:["Моя дружба с программированием началась в 9-ом классе. Первым языком стал"," ",j.jsx(ue,{linkText:"Python",href:"https://www.python.org/",icon:"/portfolio/assets/python-eeb005c2.png"}),", на котором я писал совсем немного и очень плохо, поэтому моих проектов на этом вы не увидите, но я могу рассказать о некоторых из них:",j.jsx(A,{size:16}),j.jsx(z,{children:j.jsxs("ol",{children:[j.jsxs("li",{children:["Первым проектом был стандартный калькулятор, который поддерживал только простые арифметические операции.",j.jsx(A,{size:16})]}),j.jsxs("li",{children:["Второй проект оказался более увлекательным — это был калькулятор для квадратных уравнений. Моя страсть к алгебре вдохновила меня на создание инструмента, способного автоматически вычислять корни квадратного уравнения по заданным коэффициентам.",j.jsx(A,{size:16})]}),j.jsx("li",{children:"Как и все школьники, я много играл в игры, а для автоматизации игрового процесса мы с другом написали бота, который выполнял рутинные действия, чтобы мы могли спокойно пить чай или спать."})]})})]})},{title:"Что делал после начала",content:j.jsxs(j.Fragment,{children:["После окончания школы поступил в колледж, в котором нас обучают Fullstack разработке (подробнее на странице ",j.jsx(ue,{target:"_self",href:`#${S}`,icon:j.jsx(L,{}),linkText:"Стэк"}),"). Мне больше нравится Frontend, но на работе я пишу и Backend часть (что поделать).",j.jsx(A,{size:16}),"В свободное от работы время я могу решать алгоритмические задачки на"," ",j.jsx(ue,{linkText:"Leetcode",href:"https://leetcode.com/scffs/",icon:"/portfolio/assets/leetcode-35c0aa6b.svg"})," ","или просто отдыхать.",j.jsx(A,{size:16}),"За время учёбы я поучавствовал в большом количестве олимпиад и написал множество проектов, как в рамках программы, так и для себя. Ознакомиться с некоторым списком можно на странице",j.jsx(ue,{target:"_self",href:`#${C}`,icon:j.jsx(P,{}),linkText:"Проекты"})," ","или на",j.jsx(ue,{linkText:"GitHub",href:"https://github.com/scffs",icon:"/portfolio/assets/github-614994d9.svg"})]})},{title:"До чего докатился",content:j.jsxs(j.Fragment,{children:["Помимо работы и учёбы я являюсь участником и автором статей в программе бета-тестирования",j.jsx(ue,{linkText:"VK Testers",href:"https://vk.com/testers",icon:"/portfolio/assets/logovkt-167b0a28.webp"}),", а когда-то переводил и писал статьи для блога на",j.jsx(ue,{linkText:"Хабре",href:"https://habr.com/ru/users/scoffs/",icon:"/portfolio/assets/habr-e3309f0e.svg"}),". В прошлом был модератором и участником крупнейшей веб-документации"," ",j.jsx(ue,{linkText:"MDN",href:"https://developer.mozilla.org/ru/",icon:"/portfolio/assets/mdn-4d9fe03d.svg"}),", но сейчас на это совсем нет времени."]})}],ve={display:"flex"},he=()=>j.jsxs(F,{style:Y,children:[j.jsx(ae,{mode:"secondary",children:"Информация о пользователе"}),j.jsx(le,{showArrows:!0,style:ve,getScrollToLeft:e=>e-120,getScrollToRight:e=>e+120,children:j.jsx("div",{style:{display:"flex",gap:5,width:"500px"},children:de.map((e=>j.jsx(ie,{children:j.jsx(se,{header:e.label,children:e.value})},e.label)))})}),j.jsxs(z,{children:[j.jsx(q,{children:"Привет! Моё имя выше, а тут будет мелкая история о том, как и когда я вошёл в IT и не вышел обратно."}),j.jsx(A,{size:16}),fe.map((e=>j.jsxs(ce,{children:[j.jsx(ce.Summary,{iconPosition:"before",children:e.title}),j.jsx(z,{children:j.jsx(q,{children:e.content})})]},e.title)))]})]});export{he as default};
