var r=Object.defineProperty,e=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(e,o,t)=>o in e?r(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,a=(r,e)=>{for(var o in e||(e={}))l.call(e,o)&&i(r,o,e[o]);if(t)for(var o of t(e))n.call(e,o)&&i(r,o,e[o]);return r},s=(r,e)=>{var o={};for(var i in r)l.call(r,i)&&e.indexOf(i)<0&&(o[i]=r[i]);if(null!=r&&t)for(var i of t(r))e.indexOf(i)<0&&n.call(r,i)&&(o[i]=r[i]);return o};import{b as c,_,h as u,T as d,p as f}from"./index-fPiGgf0a.js";import{D as m,aE as z,c as h,R as p,e as v,g as w,aF as S,n as g,T as b,B as y}from"./AppWrapper-gQnErQ_R.js";import{u as A,A as j}from"./Avatar-I669i_tu.js";import{c as C}from"./App-MfM_POU_.js";import{I as H}from"./SimpleCell-IDggWhf1.js";import{C as N}from"./Caption-objGLo3l.js";import{F as O}from"./user_circle_outline_28-IZAeoqI8.js";import{S as M}from"./Subhead-EeOwx0nn.js";var R=m("Icon24Chevron","chevron_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12 4.706 7.706" /></g></symbol>',16,24,!1,void 0);const x="_ScrollArrow_1z01z_1",W="_ScrollArrow__icon_1z01z_28",D="_ScrollArrow__defaultIcon_1z01z_74",E={m:"_ScrollArrow--size-m_1z01z_38",l:"_ScrollArrow--size-l_1z01z_44"},q={up:"_ScrollArrow--direction-up_1z01z_22",right:"_ScrollArrow--direction-right_1z01z_17",down:"_ScrollArrow--direction-down_1z01z_23",left:"_ScrollArrow--direction-left_1z01z_16"},P={up:"Назад",right:"Вперед",down:"Вперед",left:"Назад"},L=({size:r})=>{let e=R;return"m"===r&&(e=H),c(e,{className:D})},T=r=>{var e=r,{size:o="l",offsetY:t,direction:l,label:n,children:i=c(L,{size:o})}=e,_=s(e,["size","offsetY","direction","label","children"]);const u=null!=n?n:P[l];return c(p,a({Component:"button",type:"button",baseClassName:h(x,E[o],q[l])},_),u&&c(z,null,u),c("span",{className:W,style:t?{top:t}:void 0},i))};const Y="_HorizontalScroll_qzj7y_1",I="_HorizontalScroll__in_qzj7y_12",B="_HorizontalScroll__in-wrapper_qzj7y_27",k="_HorizontalScroll__arrow_qzj7y_31",F="_HorizontalScroll--withConstArrows_qzj7y_42",Q="_HorizontalScroll__arrowLeft_qzj7y_48",X="_HorizontalScroll__arrowRight_qzj7y_52";function G(){return performance&&performance.now?performance.now():Date.now()}function J(r){return r>0?Math.ceil(r):Math.floor(r)}const K=r=>J(r.scrollLeft),U=250;function V({scrollElement:r,getScrollPosition:e,animationQueue:o,onScrollToEndBorder:t,onScrollEnd:l,onScrollStart:n,initialScrollWidth:i,scrollAnimationDuration:a=U,textDirection:s}){if(!r||!e)return;const c=("ltr"===s?1:-1)*(i-r.offsetWidth);let _=K(r),u=e(_);n(),_*u<0&&(u=0),Math.abs(u)>=Math.abs(c)&&(t(),u=c);const d=G();!function e(){if(!r)return void l();const t=G(),n=Math.min((t-d)/a,1),i=(c=n,.5*(1-Math.cos(Math.PI*c)));var c;const f=_+(u-_)*i;r.scrollLeft=J(f);const m="ltr"===s?Math.max(0,u):Math.min(0,u);K(r)===m||1===n?(l(),o.shift(),o.length>0&&o[0]()):requestAnimationFrame(e)}()}const Z=r=>{var t=r,{children:l,getScrollToLeft:n,getScrollToRight:i,showArrows:m=!0,arrowSize:z="l",arrowOffsetY:b,scrollAnimationDuration:y=U,getRef:j,scrollOnAnyWheel:H=!1}=t,N=s(t,["children","getScrollToLeft","getScrollToRight","showArrows","arrowSize","arrowOffsetY","scrollAnimationDuration","getRef","scrollOnAnyWheel"]);const[O,M]=u(!1),[R,x]=u(!1),[W,D="ltr"]=function(){const r=_(null),[e,o]=u(void 0),[t,l]=u(void 0),{window:n}=v();return w((()=>{if(!n||!r.current)return;const e=n.getComputedStyle(r.current);o(e.direction),l(e.writingMode)}),[n]),[r,e,t]}(),E="ltr"===D?M:x,q="ltr"===D?x:M,P=_(!1),L=C(j,W),G=_([]),J=A(),Z=d((r=>{const e=L.current;G.current.push((()=>{var o;return V({scrollElement:e,getScrollPosition:r,animationQueue:G.current,onScrollToEndBorder:()=>q(!1),onScrollEnd:()=>P.current=!1,onScrollStart:()=>P.current=!0,initialScrollWidth:(null==(o=null==e?void 0:e.firstElementChild)?void 0:o.scrollWidth)||0,scrollAnimationDuration:y,textDirection:D})})),1===G.current.length&&G.current[0]()}),[L,y,D,q]),$=d((()=>{Z(null!=n?n:r=>r-L.current.offsetWidth)}),[n,Z,L]),rr=d((()=>{Z(null!=i?i:r=>r+L.current.offsetWidth)}),[i,Z,L]),er=d((()=>{if(m&&J&&L.current&&!P.current){const r=L.current;E(0!==r.scrollLeft),q(Math.abs(K(r))+r.offsetWidth<r.scrollWidth)}}),[m,J,L,E,q]),or=S("scroll",er);f((function(){return L.current?(or.add(L.current),or.remove):g}),[or,L]),f(er,[er,l]);const tr=d((r=>{L.current.scrollBy({left:r.deltaX+r.deltaY,behavior:"auto"}),r.preventDefault()}),[L]),lr=S("wheel",tr);return f((function(){return L.current&&H?(lr.add(L.current),lr.remove):g}),[lr,L,H]),c(p,(nr=a({},N),ir={baseClassName:h(Y,"vkuiInternalHorizontalScroll","always"===m&&F),onMouseEnter:er},e(nr,o(ir))),m&&(J||void 0===J)&&O&&c(T,{"data-testid":void 0,size:z,offsetY:b,direction:"left","aria-hidden":!0,className:h(k,Q),onClick:$}),m&&(J||void 0===J)&&R&&c(T,{"data-testid":void 0,size:z,offsetY:b,direction:"right","aria-hidden":!0,className:h(k,X),onClick:rr}),c("div",{className:I,ref:L},c("div",{className:B},l)));var nr,ir},$="_HorizontalCell_aee33_1",rr="_HorizontalCell__image_aee33_5",er="_HorizontalCell__body_aee33_10",or="_HorizontalCell__content_aee33_21",tr="_HorizontalCell__subtitle_aee33_27",lr={s:"_HorizontalCell--size-s_aee33_36",m:"_HorizontalCell--size-m_aee33_67",l:"_HorizontalCell--size-l_aee33_73"},nr=r=>{var e=r,{size:o,children:t}=e,l=s(e,["size","children"]);return c("s"===o?N:M,l,t)},ir=r=>{var e=r,{className:o,header:t,style:l,subtitle:n,size:i="s",children:_=c(j,{size:56}),getRootRef:u,getRef:d,extraSubtitle:f}=e,m=s(e,["className","header","style","subtitle","size","children","getRootRef","getRef","extraSubtitle"]);return c("div",{ref:u,style:l,className:h($,lr[i],o)},c(b,a({className:er,getRootRef:d},m),y(_)&&c("div",{className:rr},_),(t||n||f)&&c("div",{className:or},y(t)&&c(nr,{size:i},t),y(n)&&c(O,{className:tr},n),y(f)&&c(O,{className:tr},f))))};export{Z as H,ir as a};
