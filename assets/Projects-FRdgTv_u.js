var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,n=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&o(e,a,t[a]);if(r)for(var a of r(t))i.call(t,a)&&o(e,a,t[a]);return e},l=(e,r)=>t(e,a(r)),c=(e,t)=>{var a={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&r)for(var o of r(e))t.indexOf(o)<0&&i.call(e,o)&&(a[o]=e[o]);return a};import{b as d,u as p}from"./index-UZJ5t5iP.js";import{c as _,R as m,u as h,T as f,B as u,q as C,L as g}from"./AppWrapper-f2C8H5bU.js";import{b,a as y}from"./App-gyvK6TTj.js";import{P as v,V as w}from"./index-5z2GZa8_.js";import{P as j,G as k}from"./Group-El_Mz6PY.js";import{C as P}from"./Caption-yVOAZsTw.js";import{F as x}from"./user_circle_outline_28-scoh2bQx.js";import{H as O}from"./Headline-tfL5MIj0.js";import{G as N}from"./index-7l3LcDLX.js";import"./AppearanceProvider-6Ht9gXrP.js";const z="_Card_16kx6_1",G="_Card--mode-shadow_16kx6_7",H="_Card--mode-outline_16kx6_16",S="_Card--withBorder_16kx6_20",R=e=>{var t=e,{mode:a="tint"}=t,r=c(t,["mode"]);const s="outline"===a||"outline-tint"===a;return d(m,l(n({},r),{baseClassName:_(z,"outline"===a&&H,"shadow"===a&&G,s&&S)}))},A="_CardGrid_15j6w_1",I="_CardGrid--spaced_15j6w_8",D={none:"_CardGrid--sizeX-none_15j6w_18",compact:"_CardGrid--sizeX-compact_15j6w_13"},F={s:"vkuiInternalCardGrid--size-s",m:"vkuiInternalCardGrid--size-m",l:"vkuiInternalCardGrid--size-l"},B=e=>{var t=e,{size:a="s",spaced:r=!1}=t,s=c(t,["size","spaced"]);const{sizeX:i="none"}=h();return d(m,l(n({},s),{baseClassName:_(A,"vkuiInternalCardGrid",r&&I,F[a],"regular"!==i&&D[i])}))},T="_ContentCard--disabled_1j86y_1",X="_ContentCard__body_1j86y_5",V="_ContentCard__tappable_1j86y_10",W="_ContentCard__img_1j86y_17",K="_ContentCard__text_1j86y_26",M="_ContentCard__caption_1j86y_31",Q="_ContentCard__subtitle_1j86y_32",U=e=>{var t=e,{subtitle:a,header:r,headerComponent:s="span",text:i,caption:o,className:p,mode:m="shadow",style:h,getRootRef:C,getRef:g,maxHeight:y,src:v,srcSet:w,alt:j="",width:k,height:N,crossOrigin:z,decoding:G,loading:H,referrerPolicy:S,sizes:A,useMap:I,hasHover:D=!1,hasActive:F=!1}=t,B=c(t,["subtitle","header","headerComponent","text","caption","className","mode","style","getRootRef","getRef","maxHeight","src","srcSet","alt","width","height","crossOrigin","decoding","loading","referrerPolicy","sizes","useMap","hasHover","hasActive"]);return d(R,{mode:m,getRootRef:C,style:h,className:_(B.disabled&&T,p)},d(f,l(n({},B),{hasHover:D,hasActive:F,className:V}),(v||w)&&d("img",{ref:g,className:W,src:v,srcSet:w,alt:j,crossOrigin:z,decoding:G,loading:H,referrerPolicy:S,sizes:A,useMap:I,height:N,style:{maxHeight:y},width:"100%"}),d("div",{className:X},u(a)&&d(P,{className:_(K,Q),weight:"1",level:"3",caps:!0},a),u(r)&&d(O,{className:K,weight:"2",level:"1",Component:s},r),u(i)&&d(b,{className:K},i),u(o)&&d(x,{className:_(K,M)},o))))},q="_Footer_r1xf1_1",E=e=>{var t=e,{children:a,className:r}=t,s=c(t,["children","className"]);return d(x,l(n({Component:"footer"},s),{className:_(q,r)}),a)},J=({id:e})=>{const{panel:t,panelsHistory:a}=y(),r=C();return p(w,{id:e,history:a,activePanel:t,onSwipeBack:()=>r.back(),children:p(j,{nav:e,children:[p(v,{title:"Проекты"}),p(k,{children:p(B,{size:"l",children:[p(U,{onClick:()=>window.open("https://vk.com/gatto_game","_blank"),src:"/portfolio/assets/gatto-gupVjyvO.jpg",alt:"preview",subtitle:"React, TypeScript etc...",header:"Gatto",caption:"Gatto - это большая, яркая и увлекательная игра. По типу напоминает 'тамагочи' - есть прокачка персонажей, различные локации и элементы скрещивания."}),p(U,{onClick:()=>window.open("https://vk.com/diary_spo","_blank"),src:"/portfolio/assets/diary-X3CjokVU.png",alt:"preview",subtitle:"Preact, TypeScript, VKUI etc...",header:"Дневник СПО",caption:"Обёртка над дневником Сетевого города для СПО (API совпадает с Томской областью). В сервисе студенты могут полностью следить за своей успеваемостью и расписанием."}),p(U,{onClick:()=>window.open("https://github.com/Diary-SPO/diary-admin","_blank"),src:"/portfolio/assets/admin-2DoKSwQa.jpg",alt:"preview",subtitle:"Preact, TypeScript, VKUI, Docker, ElysiaJS etc...",header:"Дневник Admin",caption:"Попытка сделать собственный дневник, а именно часть администратора: создание групп, расписаний, выставление оценок и тд."}),p(U,{onClick:()=>window.open("https://github.com/scffs/FakeDB","_blank"),src:"/portfolio/assets/db-XBYA4THT.png",alt:"preview",subtitle:"C#",header:"Fake DB",caption:"Консольное приложение для управления пользователями с использованием фейковой базы данных."}),p(U,{onClick:()=>window.open("https://github.com/scffs/WPF-Quiz","_blank"),src:"/portfolio/assets/wpf-yXyHDHIa.png",alt:"preview",subtitle:"C#, WPF",header:"WPF Quiz",caption:"Игроку предлагается лист, на котором написан текст. В тексте некоторые слова заменены пиктограммами. Пиктограммы в тексте заменены в случайном порядке."})]})}),p(E,{children:["Другие проекты есть на"," ",p(g,{href:N,target:"_blank",children:"GitHub"})]})]})})};export{J as default};