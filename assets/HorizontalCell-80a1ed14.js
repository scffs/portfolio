var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,r,l)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[r]=l,i=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&a(e,r,t[r]);if(l)for(var r of l(t))n.call(t,r)&&a(e,r,t[r]);return e},c=(e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&n.call(e,a)&&(r[a]=e[a]);return r};import{r as s}from"./react-37698f52.js";import{c as _,N as u,R as m,f,h as d,e as h,ak as p,aa as v,t as S,O as b,Q as w}from"./AppWrapper-9701c826.js";import{I as g}from"./SimpleCell-1db508b1.js";import{A as z}from"./Avatar-f63e9ede.js";import{T as E}from"./App-33f3984a.js";import{F as C}from"./user_circle_outline_28-c70689bc.js";import{S as y}from"./Subhead-d963e956.js";const A="_Caption--caps_400i0_1",N={1:"_Caption--level-1_400i0_5",2:"_Caption--level-2_400i0_19",3:"_Caption--level-3_400i0_33"},H=e=>{var t=e,{className:r,level:l="1",caps:o,Component:n="span",normalize:a=!0}=t,u=c(t,["className","level","caps","Component","normalize"]);return s.createElement(E,i({Component:n,normalize:a,className:_(r,o&&A,N[l])},u))};var R=u("Icon24Chevron","chevron_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12 4.706 7.706Z" /></g></symbol>',16,24,!1,void 0);const O="_ScrollArrow_adbtg_1",M="_ScrollArrow__icon_adbtg_28",j="_ScrollArrow__defaultIcon_adbtg_70",x={m:"_ScrollArrow--size-m_adbtg_38",l:"_ScrollArrow--size-l_adbtg_44"},W={up:"_ScrollArrow--direction-up_adbtg_22",right:"_ScrollArrow--direction-right_adbtg_17",down:"_ScrollArrow--direction-down_adbtg_23",left:"_ScrollArrow--direction-left_adbtg_16"},k=({size:e})=>{let t=R;return"m"===e&&(t=g),s.createElement(t,{className:j})},q=e=>{var t=e,{size:r="l",offsetY:l,direction:o,children:n=s.createElement(k,{size:r})}=t,a=c(t,["size","offsetY","direction","children"]);return s.createElement(m,i({Component:"button",type:"button",baseClassName:_(O,x[r],W[o])},a),s.createElement("span",{className:M,style:l?{top:l}:void 0},n))};const D="_HorizontalScroll_14yio_1",P="_HorizontalScroll__in_14yio_12",L="_HorizontalScroll__in-wrapper_14yio_27",T="_HorizontalScroll__arrow_14yio_31",Y="_HorizontalScroll--withConstArrows_14yio_42",I="_HorizontalScroll__arrowLeft_14yio_48",B="_HorizontalScroll__arrowRight_14yio_52";function Q(){return performance&&performance.now?performance.now():Date.now()}function F(e){return e>0?Math.ceil(e):Math.floor(e)}const X=e=>F(e.scrollLeft),Z=250;function G({scrollElement:e,getScrollPosition:t,animationQueue:r,onScrollToEndBorder:l,onScrollEnd:o,onScrollStart:n,initialScrollWidth:a,scrollAnimationDuration:i=Z,textDirection:c}){if(!e||!t)return;const s=("ltr"===c?1:-1)*(a-e.offsetWidth);let _=X(e),u=t(_);n(),_*u<0&&(u=0),Math.abs(u)>=Math.abs(s)&&(l(),u=s);const m=Q();!function t(){if(!e)return void o();const l=Q(),n=Math.min((l-m)/i,1),a=(s=n,.5*(1-Math.cos(Math.PI*s)));var s;const f=_+(u-_)*a;e.scrollLeft=F(f);const d="ltr"===c?Math.max(0,u):Math.min(0,u);X(e)===d||1===n?(o(),r.shift(),r.length>0&&r[0]()):requestAnimationFrame(t)}()}const J=e=>{var l=e,{children:o,getScrollToLeft:n,getScrollToRight:a,showArrows:u=!0,arrowSize:b="l",arrowOffsetY:w,scrollAnimationDuration:g=Z,getRef:z,scrollOnAnyWheel:E=!1}=l,C=c(l,["children","getScrollToLeft","getScrollToRight","showArrows","arrowSize","arrowOffsetY","scrollAnimationDuration","getRef","scrollOnAnyWheel"]);const[y,A]=s.useState(!1),[N,H]=s.useState(!1),[R,O="ltr"]=function(){const e=s.useRef(null),[t,r]=s.useState(void 0),[l,o]=s.useState(void 0),{window:n}=f();return d((()=>{if(!n||!e.current)return;const t=n.getComputedStyle(e.current);r(t.direction),o(t.writingMode)}),[n]),[e,t,l]}(),M="ltr"===O?A:H,j="ltr"===O?H:A,x=s.useRef(!1),W=h(z,R),k=s.useRef([]),Q=p(),F=s.useCallback((e=>{const t=W.current;k.current.push((()=>{var r;return G({scrollElement:t,getScrollPosition:e,animationQueue:k.current,onScrollToEndBorder:()=>j(!1),onScrollEnd:()=>x.current=!1,onScrollStart:()=>x.current=!0,initialScrollWidth:(null==(r=null==t?void 0:t.firstElementChild)?void 0:r.scrollWidth)||0,scrollAnimationDuration:g,textDirection:O})})),1===k.current.length&&k.current[0]()}),[W,g,O,j]),J=s.useCallback((()=>{F(null!=n?n:e=>e-W.current.offsetWidth)}),[n,F,W]),K=s.useCallback((()=>{F(null!=a?a:e=>e+W.current.offsetWidth)}),[a,F,W]),U=s.useCallback((()=>{if(u&&Q&&W.current&&!x.current){const e=W.current;M(0!==e.scrollLeft),j(Math.abs(X(e))+e.offsetWidth<e.scrollWidth)}}),[u,Q,W,M,j]),V=v("scroll",U);s.useEffect((function(){return W.current?(V.add(W.current),V.remove):S}),[V,W]),s.useEffect(U,[U,o]);const $=s.useCallback((e=>{W.current.scrollBy({left:e.deltaX+e.deltaY,behavior:"auto"}),e.preventDefault()}),[W]),ee=v("wheel",$);return s.useEffect((function(){return W.current&&E?(ee.add(W.current),ee.remove):S}),[ee,W,E]),s.createElement(m,(te=i({},C),re={baseClassName:_(D,"vkuiInternalHorizontalScroll","always"===u&&Y),onMouseEnter:U},t(te,r(re))),u&&(Q||void 0===Q)&&y&&s.createElement(q,{size:b,offsetY:w,direction:"left",className:_(T,I),onClick:J}),u&&(Q||void 0===Q)&&N&&s.createElement(q,{size:b,offsetY:w,direction:"right",className:_(T,B),onClick:K}),s.createElement("div",{className:P,ref:W},s.createElement("div",{className:L},o)));var te,re},K="_HorizontalCell_1q642_1",U="_HorizontalCell__image_1q642_5",V="_HorizontalCell__body_1q642_10",$="_HorizontalCell__content_1q642_21",ee="_HorizontalCell__subtitle_1q642_27",te={s:"_HorizontalCell--size-s_1q642_35",m:"_HorizontalCell--size-m_1q642_62",l:"_HorizontalCell--size-l_1q642_68"},re=e=>{var t=e,{size:r,children:l}=t,o=c(t,["size","children"]);return"s"===r?s.createElement(H,o,l):s.createElement(y,o,l)},le=e=>{var t=e,{className:r,header:l,style:o,subtitle:n,size:a="s",children:u=s.createElement(z,{size:56}),getRootRef:m,getRef:f,extraSubtitle:d}=t,h=c(t,["className","header","style","subtitle","size","children","getRootRef","getRef","extraSubtitle"]);return s.createElement("div",{ref:m,style:o,className:_(K,te[a],r)},s.createElement(b,i({className:V,getRootRef:f},h),w(u)&&s.createElement("div",{className:U},u),(l||n||d)&&s.createElement("div",{className:$},w(l)&&s.createElement(re,{size:a},l),w(n)&&s.createElement(C,{className:ee},n),w(d)&&s.createElement(C,{className:ee},d))))};export{J as H,le as a};
