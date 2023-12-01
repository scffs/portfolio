var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,r=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))i.call(t,n)&&s(e,n,t[n]);return e},l=(e,o)=>t(e,n(o)),d=(e,t)=>{var n={};for(var s in e)a.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&o)for(var s of o(e))t.indexOf(s)<0&&i.call(e,s)&&(n[s]=e[s]);return n},c=(e,t,n)=>(s(e,"symbol"!=typeof t?t+"":t,n),n);import{y as u,F as p,q as m,N as h,h as v,p as f,_ as g,T as _,b as M,g as E,f as y,j as w,s as b,A as P,e as T,i as C,D as S,d as A,u as R}from"./index-0Ub2aqlv.js";import{V as x,a as L,S as H,P as O,b as k,c as I,R as N,u as D,d as Y,e as F,f as q,g as z,h as W,n as j,s as B,A as G,i as U,j as K,k as V,l as X,m as Q,o as $,p as J,q as Z,r as ee,t as te,F as ne,v as oe,K as ae,C as ie,w as se,x as re,y as le,T as de,z as ce,B as ue,D as pe,E as me,W as he,G as ve,H as fe,I as ge,J as _e,L as Me,M as Ee,N as ye,O as we,Q as be,U as Pe}from"./AppWrapper-3sxv9e6a.js";import{u as Te,i as Ce,A as Se,a as Ae,g as Re,T as xe,b as Le}from"./AppearanceProvider-3wdIAIiT.js";function He(e){return"function"==typeof e}function Oe(e){return e.desktopPlus.matches?x.DESKTOP:e.tablet.matches?x.TABLET:e.smallTablet.matches?x.SMALL_TABLET:e.mobile.matches?x.MOBILE:x.SMALL_MOBILE}function ke(e){return e.mediumHeight.matches?L.MEDIUM:e.mobileLandscapeHeight.matches?L.SMALL:L.EXTRA_SMALL}function Ie(e,t,n,o){const a=o===O.VKCOM;if((void 0===e||void 0===n)&&(void 0===e||void 0===t)||void 0===n&&void 0===t)return!!a||null;const i=e>=x.SMALL_TABLET,s=n||void 0!==t&&t>=L.MEDIUM;return i&&s||a}function Ne(e,t="none"){if("none"===t)return e.hasOwnProperty("none")?e.none:null;const n=[],o=k[t];return e.hasOwnProperty(o)&&n.push(e[o]),t>=x.MOBILE&&e.hasOwnProperty("mobilePlus")&&n.push(e.mobilePlus),t>=x.SMALL_TABLET?e.hasOwnProperty("smallTabletPlus")&&n.push(e.smallTabletPlus):e.hasOwnProperty("smallTabletMinus")&&n.push(e.smallTabletMinus),t>=x.TABLET?e.hasOwnProperty("tabletPlus")&&n.push(e.tabletPlus):e.hasOwnProperty("tabletMinus")&&n.push(e.tabletMinus),n.length>0?n.join(" "):null}function De(e){const t=new Set;return(e,n="warn")=>{if(!t.has(e)){t.add(e)}}}const Ye="_Typography--normalize_182ve_1",Fe="_Typography_182ve_1",qe={1:"_Typography--weight-1_182ve_9",2:"_Typography--weight-2_182ve_13",3:"_Typography--weight-3_182ve_17"},ze=e=>{var t=e,{weight:n,Component:o="span",normalize:a}=t,i=d(t,["weight","Component","normalize"]);return u(N,r({Component:o,baseClassName:I(Fe,a&&Ye,n&&qe[n])},i))},We="_Text_1tzbj_1",je="_Text--sizeY-compact_1tzbj_8",Be={none:"_Text--sizeY-none_1tzbj_14",[H.COMPACT]:je},Ge=e=>{var t=e,{className:n,Component:o="span",normalize:a=!0}=t,i=d(t,["className","Component","normalize"]);const{sizeY:s="none"}=D();return u(ze,r({Component:o,normalize:a,className:I(n,We,s!==H.REGULAR&&Be[s])},i))},Ue=p({colRef:null,animate:!0}),Ke=()=>m(Ue),Ve=h((function(e,t){var n=e,{fixed:o=!1}=n,a=d(n,["fixed"]);return a["data-tooltip-container"]=o?"fixed":"true",u("div",l(r({},a),{ref:t}))})),Xe="_FixedLayout_zmcx7_1",Qe="_FixedLayout--filled_zmcx7_20",$e={top:"_FixedLayout--vertical-top_zmcx7_24",bottom:I("_FixedLayout--vertical-bottom_zmcx7_29","vkuiInternalFixedLayout--vertical-bottom")},Je=e=>{var t=e,{children:n,style:o,vertical:a,getRootRef:i,getRef:s,filled:c,className:p,useParentWidth:h}=t,g=d(t,["children","style","vertical","getRootRef","getRef","filled","className","useParentWidth"]);const _=Y(),M=F(i,s),[E,y]=v(void 0),{window:w}=q(),{colRef:b}=m(Ue),P=()=>{var e;if(h&&M.current){const t=null==(e=M.current.parentElement)?void 0:e.getBoundingClientRect().width;y(t?`${t}px`:void 0)}else if(null==b?void 0:b.current){const e=getComputedStyle(b.current);y(b.current.clientWidth-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight)+"px")}else y(void 0)};return f(P,[b,_,M,h]),z(w,"resize",P),u(Ve,l(r({},g),{fixed:!0,ref:M,className:I(Xe,_===O.IOS&&"vkuiInternalFixedLayout--ios",c&&Qe,a&&$e[a],p),style:l(r({},o),{width:E})}),n)};function Ze(e,t){return e.nav||e.id}function et(e){const t=g();return f((()=>{t.current=e})),t.current}const tt=Boolean(W&&window.__isVkuiTesting),nt={supported:!1},ot={supported:!1,name:null};W&&!tt&&(("undefined"!=typeof AnimationEvent||"undefined"!=typeof WebKitAnimationEvent)&&(nt.supported=!0),"undefined"!=typeof TransitionEvent?(ot.supported=!0,ot.name="transitionend"):"undefined"!=typeof WebKitTransitionEvent&&(ot.supported=!0,ot.name="webkitTransitionEnd"));const at=()=>{const e=g(null),{document:t}=q(),n=g(j),o=_((()=>{n.current(),n.current=j}),[]);return{waitTransitionFinish:_(((a,i,s)=>{a&&(!(null==t?void 0:t.hidden)&&ot.supported&&ot.name?(o(),a.addEventListener(ot.name,i),n.current=()=>{ot.name&&a.removeEventListener(ot.name,i)}):((null==e?void 0:e.current)&&clearTimeout(e.current),e.current=setTimeout(i,s)))}),[t,o,e])}},it={mq:{className:B["-sizeX--compact-mq"]},[H.COMPACT]:{className:B["-sizeX--compact-forced"]}},st={mq:{className:B["-sizeX--regular-mq"]},[H.REGULAR]:{className:B["-sizeX--regular-forced"]}},rt={mq:{className:B["-sizeY--compact-mq"]},[H.COMPACT]:{className:B["-sizeY--compact-forced"]}},lt={mq:{className:B["-sizeY--regular-mq"]},[H.REGULAR]:{className:B["-sizeY--regular-forced"]}},dt={tabletMinus:{mq:{className:B["-viewWidth--tabletMinus-mq"]},forced:{className:B["-viewWidth--tabletMinus-forced"]}},tabletPlus:{mq:{className:B["-viewWidth--tabletPlus-mq"]},forced:{className:B["-viewWidth--tabletPlus-forced"]}}},ct={mobile:{mq:{className:B["-deviceType--mobile-mq"]},forced:{className:B["-deviceType--mobile-forced"]}},desktop:{mq:{className:B["-deviceType--desktop-mq"]},forced:{className:B["-deviceType--desktop-forced"]}}},ut=(e,t,n)=>({compact:void 0===e?t.mq:e===H.COMPACT&&t[e],regular:void 0===e?n.mq:e===H.REGULAR&&n[e]}),pt=()=>{const{sizeX:e,sizeY:t,viewWidth:n,viewHeight:o,hasPointer:a}=m(G),i=Y();return M((()=>{const s=ut(e,it,st),r=ut(t,rt,lt),l=((e,t)=>({tabletMinus:void 0===e?t.tabletMinus.mq:e<x.TABLET&&t.tabletMinus.forced,tabletPlus:void 0===e?t.tabletPlus.mq:e>=x.TABLET&&t.tabletPlus.forced}))(n,dt),d=((e,t,n,o,a)=>{const i=Ie(e,t,n,o);return null===i?{mobile:a.mobile.mq,desktop:a.desktop.mq}:i?{mobile:!1,desktop:a.desktop.forced}:{mobile:a.mobile.forced,desktop:!1}})(n,o,a,i,ct);return{sizeX:s,sizeY:r,viewWidth:l,deviceType:d}}),[e,t,n,o,a,i])},mt=p({updateModalHeight:()=>{},registerModal:()=>{},isInsideModal:!1});function ht(e,t){const n=m(mt),o=g({}).current;U((()=>{if(void 0!==e){n.registerModal(l(r({},o),{type:t,id:e}));const a=Object.keys(o).reduce(((e,t)=>l(r({},e),{[t]:null})),{type:t,id:e});return()=>n.registerModal(a)}}),[]);return{refs:g({modalElement:e=>o.modalElement=e,innerElement:e=>o.innerElement=e,headerElement:e=>o.headerElement=e,contentElement:e=>o.contentElement=e,bottomInset:e=>o.bottomInset=e}).current}}const vt="_Separator_1e9q3_1",ft="_Separator__in_1e9q3_5",gt="_Separator--padded_1e9q3_14",_t=e=>{var t=e,{wide:n}=t,o=d(t,["wide"]);return u(N,l(r({},o),{baseClassName:I(vt,!n&&gt)}),u("hr",{className:ft}))},Mt="_Spacing_11epl_1",Et=e=>{var t=e,{size:n=8,style:o}=t,a=d(t,["size","style"]);const i=r({height:n,padding:n/2+"px 0"},o);return u(N,l(r({},a),{baseClassName:Mt,style:i}))},yt="_PanelHeader_1whiw_1",wt="_PanelHeader--vis_1whiw_5",bt="_PanelHeader--fixed_1whiw_5",Pt="_PanelHeader__fixed_1whiw_16",Tt="_PanelHeader__in_1whiw_20",Ct="_PanelHeader--trnsp_1whiw_29",St="_PanelHeader--sizeX-regular_1whiw_33",At="_PanelHeader--shadow_1whiw_33",Rt="_PanelHeader--sizeX-none_1whiw_38",xt="_PanelHeader__before_1whiw_43",Lt="_PanelHeader__content_1whiw_50",Ht="_PanelHeader__content-in_1whiw_62",Ot="_PanelHeader__after_1whiw_74",kt="_PanelHeader--ios_1whiw_92",It="_PanelHeader--no-before_1whiw_122",Nt="_PanelHeader--no-after_1whiw_128",Dt="_PanelHeader--android_1whiw_155",Yt="_PanelHeader--vkcom_1whiw_207",Ft="_PanelHeader--sep_1whiw_258",qt="_PanelHeader__separator_1whiw_318",zt=({children:e,Component:t="span",id:n})=>Y()===O.VKCOM?u(Ge,{weight:"2",Component:t,id:n},e):u(t,{className:Ht,id:n},e);zt.displayName="LegacyPanelHeaderContent";const Wt={ios:I(kt,"vkuiInternalPanelHeader--ios"),android:I(Dt,"vkuiInternalPanelHeader--android"),vkcom:I(Yt,"vkuiInternalPanelHeader--vkcom")},jt={none:Rt,regular:St},Bt=({before:e,after:t,separator:n,children:o,typographyProps:a={}})=>{const i=a,{Component:s="span"}=i,l=d(i,["Component"]),{hasCustomPanelHeaderAfter:c,customPanelHeaderAfterMinWidth:p}=K(),{isInsideModal:h}=m(mt),v=Y(),f=!c||h?{children:t}:{style:{minWidth:p}};let g;return g=y(o)&&o.type.displayName===zt.displayName?o:v===O.VKCOM?u(Ge,r({weight:"2",Component:s},l),o):u(s,r({className:Ht},l),o),u(E,null,u(Ve,{fixed:!0,className:Tt},u("div",{className:I(xt,"vkuiInternalPanelHeader__before")},e),u("div",{className:Lt},g),u("div",r({className:I(Ot,"vkuiInternalPanelHeader__after")},f))),n&&v===O.VKCOM&&u(_t,{className:qt,wide:!0}))},Gt=e=>{var t=e,{before:n,children:o,after:a,separator:i=!0,visor:s=!0,transparent:c=!1,shadow:p,getRef:m,getRootRef:h,fixed:v,typographyProps:f}=t,g=d(t,["before","children","after","separator","visor","transparent","shadow","getRef","getRootRef","fixed","typographyProps"]);const _=Y(),{sizeX:M="none"}=D(),{sizeX:y}=pt();let w=void 0!==v?v:_!==O.VKCOM;return u(N,l(r({},g),{baseClassName:I(yt,"vkuiInternalPanelHeader",Wt.hasOwnProperty(_)?Wt[_]:Wt.android,c&&Ct,p&&At,s&&I(wt,"vkuiInternalPanelHeader--vis"),i&&s&&I(Ft,"vkuiInternalPanelHeader--sep"),!n&&I(It,"vkuiInternalPanelHeader--no-before"),!a&&Nt,w&&bt,M!==H.COMPACT&&jt[M]),getRootRef:w?h:m}),w?u(Je,{className:I(Pt,"vkuiInternalPanelHeader__fixed"),vertical:"top",getRootRef:m},u(Bt,{before:n,after:a,separator:i,typographyProps:f},o)):u(Bt,{before:n,after:a,separator:i,typographyProps:f},o),i&&s&&_!==O.VKCOM&&u(E,null,y.compact&&u(_t,{className:y.compact.className}),y.regular&&u(Et,{className:y.regular.className,size:16})))};Gt.Content=zt;const Ut=({children:e,className:t,forcePortal:n,portalRoot:o=null})=>{const{portalRoot:a,mode:i,disablePortal:s}=m(V),r=Te();if(!X())return null;const l=null!=n?n:"full"!==i,d=function(e,t){if(!e)return t;return Ce(e)?e.current:e}(o,a);return(!!(o&&l)||!s&&d&&l)&&d?w(u(Se,{appearance:r},u("div",{className:t},e)),d):u(E,null,e)};const Kt="_PopoutRoot_1dpsr_1",Vt="_PopoutRoot__popout_1dpsr_7",Xt="_PopoutRoot__modal_1dpsr_16",Qt=e=>u("div",r({className:Vt},e)),$t=e=>u("div",r({className:Xt},e)),Jt=e=>{var t=e,{popout:n,modal:o,children:a}=t,i=d(t,["popout","modal","children"]);const{document:s}=q();return f((()=>{n&&Q(s)}),[s,n]),u(N,l(r({},i),{baseClassName:Kt}),a,u(Ut,null,!!n&&u(Qt,null,n),!!o&&u($t,null,o)))},Zt="_SplitLayout_v2fan_1",en="_SplitLayout__inner_v2fan_7",tn="_SplitLayout__inner--header_v2fan_17",nn="_SplitLayout--ios_v2fan_25",on=e=>{var t=e,{popout:n,modal:o,header:a,children:i,getRootRef:s,getRef:c,className:p}=t,m=d(t,["popout","modal","header","children","getRootRef","getRef","className"]);const h=Y();return u(Jt,{className:I(Zt,h===O.IOS&&nn),popout:n,modal:o,getRootRef:s},a,u("div",l(r({},m),{ref:c,className:I(en,!!a&&tn,p)}),i))},an={window:void 0,mediaQueries:null},sn=()=>{const{window:e}=q();return M((function(){if(an.window===e&&null!==an.mediaQueries)return an.mediaQueries;const t=e?e.matchMedia.bind(e):$;return an.window=e,an.mediaQueries={desktopPlus:t(J.MEDIA_QUERIES.DESKTOP_PLUS),smallTabletPlus:t(J.MEDIA_QUERIES.SMALL_TABLET_PLUS),tablet:t(J.MEDIA_QUERIES.TABLET),smallTablet:t(J.MEDIA_QUERIES.SMALL_TABLET),mobile:t(J.MEDIA_QUERIES.MOBILE),mediumHeight:t(J.MEDIA_QUERIES.MEDIUM_HEIGHT),mobileLandscapeHeight:t(J.MEDIA_QUERIES.MOBILE_LANDSCAPE_HEIGHT)},an.mediaQueries}),[e])};function rn(e,t){e.addEventListener?e.addEventListener("change",t):e.addListener(t)}function ln(e,t){e.removeEventListener?e.removeEventListener("change",t):e.removeListener(t)}const dn="_SplitCol_1qmo4_1",cn="_SplitCol--spaced_1qmo4_9",un="_SplitCol--viewWidth-smallTabletPlus_1qmo4_13",pn="_SplitCol--spaced-none_1qmo4_13",mn="_SplitCol--spaced-auto_1qmo4_13",hn="_SplitCol--viewWidth-tabletMinus_1qmo4_23",vn="_SplitCol--stretched-on-mobile_1qmo4_23",fn="_SplitCol--fixed_1qmo4_39",gn="_SplitCol__fixedInner_1qmo4_46",_n={none:I("_SplitCol--viewWidth-none_1qmo4_18","vkuiInternalSplitCol--viewWidth-none"),tabletMinus:hn,smallTabletPlus:un,tabletPlus:"vkuiInternalSplitCol--viewWidth-tabletPlus"};const Mn=e=>{const t=e,{children:n,width:o,maxWidth:a,minWidth:i,spaced:s,animate:c,fixed:p,style:m,autoSpaced:h,stretchedOnMobile:g,getRootRef:_}=t,M=d(t,["children","width","maxWidth","minWidth","spaced","animate","fixed","style","autoSpaced","stretchedOnMobile","getRootRef"]),E=F(_),{viewWidth:y}=D(),w=function(e){const{viewWidth:t}=D(),[n,o]=v(Boolean(e)),a=sn();return f((()=>{if(void 0!==e)return void o(e);if(void 0!==t)return void o(t<x.TABLET);const n=()=>o(!a.smallTabletPlus.matches);return n(),rn(a.smallTabletPlus,n),()=>{ln(a.smallTabletPlus,n)}}),[e,t,a]),n}(c),b=Ae({colRef:E,animate:w});return u(N,l(r({},M),{style:l(r({},m),{width:o,maxWidth:a,minWidth:i}),getRootRef:E,baseClassName:I(dn,Ne(_n,y),s&&I(cn,"vkuiInternalSplitCol--spaced"),void 0===s&&I(pn,"vkuiInternalSplitCol--spaced-none"),h&&I(mn,"vkuiInternalSplitCol--spaced-auto"),p&&fn,g&&vn)}),u(Ue.Provider,{value:b},p?u("div",{className:gn},n):n))};function En(e,t){return null!=e?e:t}const yn=()=>{const{viewWidth:e,viewHeight:t,sizeX:n,sizeY:o,hasPointer:a,hasHover:i}=m(G),s=Y(),r=sn(),[[l,d],c]=v((()=>[En(e,Oe(r)),En(t,ke(r))])),u=M((()=>{const r=En(a,Z),c=En(i,ee),u=En(e,l),p=En(t,d),m=En(n,function(e){return e<=x.MOBILE?H.COMPACT:H.REGULAR}(u)),h=En(o,function(e,t,n){return e>=x.SMALL_TABLET&&n||t<=L.EXTRA_SMALL?H.COMPACT:H.REGULAR}(u,p,r));return{viewWidth:u,viewHeight:p,sizeX:m,sizeY:h,hasPointer:r,hasHover:c,isDesktop:Ie(u,p,r,s)}}),[l,d,e,t,n,o,a,i,s]);return f((()=>{const n=()=>{c((n=>{const o=En(e,Oe(r)),a=En(t,ke(r)),[i,s]=n;return i!==o||s!==a?[o,a]:n}))};return e||[r.desktopPlus,r.tablet,r.smallTablet,r.mobile].forEach((e=>rn(e,n))),t||[r.mediumHeight,r.mobileLandscapeHeight].forEach((e=>rn(e,n))),()=>{[r.desktopPlus,r.tablet,r.smallTablet,r.mobile,r.mediumHeight,r.mobileLandscapeHeight].forEach((e=>ln(e,n)))}}),[r,e,t]),u},wn=ne.join(),bn=e=>{var t=e,{Component:n="div",onClose:o,restoreFocus:a=!0,timeout:i=0,getRootRef:s,children:l}=t,c=d(t,["Component","onClose","restoreFocus","timeout","getRootRef","children"]);const p=F(s),{document:h,window:f}=q(),[g,_]=v(null),[M,E]=v(null),{keyboardInput:y}=m(V),w=te((()=>{var e;y&&!(null==(e=p.current)?void 0:e.contains(h.activeElement))&&(null==g?void 0:g.length)&&g[0].focus()}),i);U((()=>{w.set()}),[]),U((()=>{if(!p.current)return;const e=[];Array.prototype.forEach.call(p.current.querySelectorAll(wn),(t=>{const{display:n,visibility:o}=f.getComputedStyle(t);"none"!==n&&"hidden"!==o&&e.push(t)})),0===e.length&&e.push(p.current),_(e)}),[l]);const b=te((()=>{M&&M.focus()}),i);U((()=>{if(a&&h.activeElement)return E(h.activeElement),()=>{b.set()}}),[a]);return z(h,"keydown",(e=>{if(oe(e)===ae.TAB&&(null==g?void 0:g.length)){const t=g.length-1,n=g.findIndex((t=>t===e.target)),o=-1===n||n===t&&!e.shiftKey;if(o||0===n&&e.shiftKey){e.preventDefault();const n=g[o?0:t];return n!==h.activeElement&&n.focus(),!1}}return o&&oe(e)===ae.ESCAPE&&o(),!0}),{capture:!0}),u(n,r({tabIndex:-1,ref:p},c),l)};var Pn,Tn;function Cn(e,t){if("setActive"===t.type&&t.id!==e.activeModal){const n=t.id,o=e.exitingModal||e.activeModal;let a=e.history?[...e.history]:[];const i=Boolean(n&&a.includes(n));return null===n?a=[]:i?a=a.splice(0,a.indexOf(n)+1):a.push(n),{activeModal:n,enteringModal:null,exitingModal:o,history:a,isBack:i}}return"entered"===t.type&&t.id===e.enteringModal?l(r({},e),{enteringModal:null}):"exited"===t.type&&t.id===e.exitingModal?l(r({},e),{exitingModal:null}):"inited"===t.type&&t.id===e.activeModal?l(r({},e),{enteringModal:t.id}):e}function Sn(e,t,n=j,o=j,a=j,i=j,s=j){const d=g({}).current;(function(e){return P.toArray(e)})(t).forEach((e=>{const t=e.props,n=Ze(t),o=void 0!==n&&d[n]||{id:null!=n?n:null};o.onOpen=e.props.onOpen,o.onOpened=e.props.onOpened,o.onClose=e.props.onClose,o.onClosed=e.props.onClosed,"number"==typeof t.settlingHeight&&(o.settlingHeight=t.settlingHeight),null!==o.id&&(d[o.id]=o)}));const c=e&&!d[e]?null:e,[u,p]=b(Cn,{activeModal:c,enteringModal:null,exitingModal:null,history:c?[c]:[],isBack:!1});U((()=>{p({type:"setActive",id:null!=c?c:null})}),[e]),U((()=>{u.activeModal&&(s(d[u.activeModal]),p({type:"inited",id:u.activeModal}))}),[u.activeModal]);const m=e=>{var t;return null!=e&&(null==(t=d[e])?void 0:t.type)===Pn.CARD},h=_((e=>{if(e){const t=d[e];He(t.onOpened)?t.onOpened():He(o)&&o(e)}p({type:"entered",id:e})}),[d,o]),v=_((e=>{if(e){const t=d[e];He(t.onClosed)?t.onClosed():He(i)&&i(e)}p({type:"exited",id:e})}),[d,i]),f=Boolean(u.exitingModal&&(m(e)||m(u.exitingModal))),M=_((e=>e?d[e]:void 0),[d]);return l(r({onEnter:function(){const e=u.activeModal&&d[u.activeModal];e&&(He(e.onOpen)?e.onOpen():He(n)&&e.id&&n(e.id))},onEntered:h,onExit:function(){const e=u.activeModal&&d[u.activeModal];e&&(He(e.onClose)?e.onClose():He(a)&&e.id&&a(e.id))},onExited:v},u),{delayEnter:f,getModalState:M})}(Tn=Pn||(Pn={})).PAGE="page",Tn.CARD="card";const An="_ModalRoot_j6pv1_1",Rn="_ModalRoot__mask_j6pv1_6",xn="_ModalRoot--touched_j6pv1_22",Ln="_ModalRoot--switching_j6pv1_26",Hn="_ModalRoot__viewport_j6pv1_31",On="_ModalRoot--desktop_j6pv1_40",kn="_ModalRoot--hasCustomPanelHeaderAfterSlot_j6pv1_44",In="_ModalRoot__modal_j6pv1_50",Nn=De();function Dn(e,t){return!!t&&(e>=t[0]&&e<=t[1])}function Yn(e){return le(e,0,98)}const Fn=function(e,t,n){return function(o){const a=m(t);return u(e,l(r({},o),{[n]:a}))}}((qn=se(function(e=j){return function(t){return function(n){const o=Sn(n.activeModal,n.children,n.onOpen,n.onOpened,n.onClose,n.onClosed,e);return u(t,r(r({},n),o))}}}((function(e){switch(e.type){case Pn.PAGE:return e.settlingHeight=e.settlingHeight||75,zn(e);case Pn.CARD:return function(e){e.translateY=0}(e)}}))(class extends T{constructor(e){super(e),c(this,"documentScrolling",!1),c(this,"maskElementRef"),c(this,"viewportRef",C()),c(this,"maskAnimationFrame"),c(this,"modalRootContext"),c(this,"frameIds"),c(this,"restoreFocusTo"),c(this,"preventTouch",(e=>{if(!e)return!1;for(;e.originalEvent;)e=e.originalEvent;return e.preventDefault&&e.preventDefault(),!1})),c(this,"updateModalHeight",(()=>{const e=this.props.getModalState(this.props.activeModal);e&&e.type===Pn.PAGE&&(this.props.enteringModal?this.waitTransitionFinish(e,(()=>{requestAnimationFrame((()=>this.checkPageContentHeight()))})):requestAnimationFrame((()=>this.checkPageContentHeight())))})),c(this,"onTouchMove",(e=>{if(this.props.exitingModal)return;const t=this.props.getModalState(this.props.activeModal);return t?t.type===Pn.PAGE?this.onPageTouchMove(e,t):t.type===Pn.CARD?this.onCardTouchMove(e,t):void 0:void 0})),c(this,"onTouchEnd",(e=>{const t=this.props.getModalState(this.props.activeModal);return(null==t?void 0:t.type)===Pn.PAGE?this.onPageTouchEnd(e,t):(null==t?void 0:t.type)===Pn.CARD?this.onCardTouchEnd(e,t):void 0})),c(this,"onScroll",(e=>{var t;const n=this.props.activeModal,o=e.target;if(!n)return;const a=this.props.getModalState(n);(null==a?void 0:a.type)===Pn.PAGE&&(null==(t=null==a?void 0:a.contentElement)?void 0:t.contains(o))&&(a.contentScrolled=!0,a.contentScrollStopTimeout&&clearTimeout(a.contentScrollStopTimeout),a.contentScrollStopTimeout=setTimeout((()=>{a.contentScrolled&&(a.contentScrolled=!1)}),250))})),this.state={touchDown:!1,dragging:!1,modalOpenedLog:[]},this.maskElementRef=C(),this.modalRootContext={updateModalHeight:this.updateModalHeight,registerModal:e=>{var t,n=e,{id:o}=n,a=d(n,["id"]);return Object.assign(null!=(t=this.props.getModalState(o))?t:{},a)},onClose:()=>this.props.onExit(),isInsideModal:!0},this.frameIds={}}get timeout(){return this.props.platform===O.IOS?400:320}get document(){return this.props.document}get window(){return this.props.window}getModals(){return P.toArray(this.props.children)}componentDidMount(){var e;null==(e=this.window)||e.addEventListener("resize",this.updateModalHeight,!1)}componentWillUnmount(){this.toggleDocumentScrolling(!0),this.window.removeEventListener("resize",this.updateModalHeight,!1)}componentDidUpdate(e){if(this.props.exitingModal&&this.props.exitingModal!==e.exitingModal&&this.closeModal(this.props.exitingModal),this.props.enteringModal&&this.props.enteringModal!==e.enteringModal){const e=this.props.getModalState(this.props.enteringModal);this.props.onEnter(),this.waitTransitionFinish(e,(()=>{e&&(e.innerElement&&(e.innerElement.style.transitionDelay=""),this.onEntered(e))})),(null==e?void 0:e.innerElement)&&(e.innerElement.style.transitionDelay=this.props.delayEnter?`${this.timeout}ms`:"",this.animateTranslate(e,e.translateY),this.setMaskOpacity(e,1))}this.props.activeModal&&!e.activeModal&&(this.restoreFocusTo=this.document.activeElement),this.props.activeModal||this.props.exitingModal||!this.restoreFocusTo||(this.restoreFocusTo.focus(),this.restoreFocusTo=null),this.toggleDocumentScrolling(!this.props.activeModal&&!this.props.exitingModal)}toggleDocumentScrolling(e){this.documentScrolling!==e&&(this.documentScrolling=e,e?(this.document.documentElement.classList.remove("vkui--disable-overscroll-behavior"),this.window.removeEventListener("touchmove",this.preventTouch,{passive:!1})):(this.document.documentElement.classList.add("vkui--disable-overscroll-behavior"),this.window.addEventListener("touchmove",this.preventTouch,{passive:!1})))}checkPageContentHeight(){const e=this.props.getModalState(this.props.activeModal);if((null==e?void 0:e.type)===Pn.PAGE&&(null==e?void 0:e.modalElement)){const t=r({},e);zn(e);const n=r({},e);let o=!1;t.expandable===n.expandable?t.translateYFrom!==n.translateYFrom&&(o=!0):o=!0,o&&this.animateTranslate(e,e.translateY)}}onEntered({id:e,modalElement:t}){this.props.noFocusToDialog||!t||t.contains(this.document.activeElement)||t.focus(),this.props.onEntered(e)}closeModal(e){var t,n,o;this.setState({touchDown:!1});const a=this.props.getModalState(e);if(!a)return void(e&&Nn(`closeActiveModal: модальное окно (страница) ${e} не существует`,"error"));this.state.modalOpenedLog.length||this.setState((t=>({modalOpenedLog:[...t.modalOpenedLog,e]})));const i=this.props.getModalState(this.props.activeModal),s=!!i&&i.type===Pn.PAGE,r=!!a&&a.type===Pn.PAGE;this.waitTransitionFinish(a,(()=>this.props.onExited(e)));const l=r&&s&&(null!=(t=a.translateY)?t:0)<=(null!=(n=null==i?void 0:i.translateYFrom)?n:0)&&!this.props.isBack?(null!=(o=null==i?void 0:i.translateYFrom)?o:0)+10:100;this.animateTranslate(a,l),i?i.id&&!this.state.modalOpenedLog.includes(i.id)&&(i.translateY=void 0,this.setState((e=>({modalOpenedLog:[...e.modalOpenedLog,i.id]})))):(this.setMaskOpacity(a,0),this.setState({modalOpenedLog:[]}),a.translateY=void 0)}onPageTouchMove(e,t){var n,o,a,i,s,r;const{shiftY:l,originalEvent:d}=e,c=d.target;if(!e.isY)return void((null==(n=this.viewportRef.current)?void 0:n.contains(c))&&d.preventDefault());if(!(null==(o=t.innerElement)?void 0:o.contains(c)))return d.preventDefault();d.stopPropagation();const{expandable:u,contentScrolled:p,collapsed:m,expanded:h}=t;if(this.state.touchDown||(t.touchStartContentScrollTop=null!=(i=null==(a=t.contentElement)?void 0:a.scrollTop)?i:0,this.setState({touchDown:!0})),!p&&(null===t.touchMovePositive&&(t.touchMovePositive=l>0),!t.expandable||m||h&&t.touchMovePositive&&0===t.touchStartContentScrollTop||(null==(s=t.headerElement)?void 0:s.contains(c)))){if(d.preventDefault(),!u&&l<0||!this.window)return;!this.state.dragging&&this.setState({dragging:!0});const e=l/this.window.innerHeight*100,n=re(e,72,.8,this.props.platform!==O.IOS);t.touchShiftYPercent=e,t.translateYCurrent=Yn((null!=(r=t.translateY)?r:0)+n),this.animateTranslate(t,t.translateYCurrent),this.setMaskOpacity(t)}}onCardTouchMove(e,t){var n,o;const{originalEvent:a,shiftY:i}=e,s=a.target;if(null==(n=t.innerElement)?void 0:n.contains(s)){this.state.touchDown||this.setState({touchDown:!0,dragging:!0});const e=i/t.innerElement.offsetHeight*100,n=re(e,72,1.2,this.props.platform!==O.IOS);t.touchShiftYPercent=e,t.translateYCurrent=Math.max(0,(null!=(o=t.translateY)?o:0)+n),this.animateTranslate(t,t.translateYCurrent),this.setMaskOpacity(t)}}onPageTouchEnd(e,t){var n,o,a,i,s,r;const{startY:l,shiftY:d}=e;let c;if(t.contentScrolled=!1,t.touchMovePositive=null,this.state.dragging&&this.window){const u=(l+d)/this.window.innerHeight*100;let p=null!=(n=t.translateYCurrent)?n:0;p=Yn(p+p/e.duration*240*.6*((null!=(o=t.touchShiftYPercent)?o:0)<0?-1:1)),p=100!==t.settlingHeight?Dn(p,t.expandedRange)?null!=(i=null==(a=t.expandedRange)?void 0:a[0])?i:0:Dn(p,t.collapsedRange)?null!=(s=t.translateYFrom)?s:0:Dn(p,t.hiddenRange)?100:null!=(r=t.translateYFrom)?r:0:Dn(p,[0,25])?0:100,100!==p&&u>=75&&(p=100),t.translateY=p,t.translateYCurrent=p,t.collapsed=Dn(p,t.collapsedRange),t.expanded=0===p,t.hidden=100===p,t.hidden&&this.props.onExit(),c=()=>{t.hidden||this.animateTranslate(t,t.translateY),this.setMaskOpacity(t)}}this.setState({touchDown:!1,dragging:!1},c)}onCardTouchEnd({duration:e},t){var n,o;let a;if(this.state.dragging){let i=null!=(n=t.translateYCurrent)?n:0;const s=i/e*240*.6*((null!=(o=t.touchShiftYPercent)?o:0)<0?-1:1);i=Math.max(0,i+s),i=i>=30?100:0,t.translateY=i,t.hidden=100===i,t.hidden&&this.props.onExit(),a=()=>{t.hidden||this.animateTranslate(t,t.translateY),this.setMaskOpacity(t)}}this.setState({touchDown:!1,dragging:!1},a)}waitTransitionFinish(e,t){var n;if(ot.supported){const o=()=>{var n;null==(n=null==e?void 0:e.innerElement)||n.removeEventListener(ot.name,o),t()};null==(n=null==e?void 0:e.innerElement)||n.addEventListener(ot.name,o)}else setTimeout(t,this.timeout)}animateTranslate(e,t){const n=`animateTranslateFrame${e.id}`;cancelAnimationFrame(this.frameIds[n]),this.frameIds[n]=requestAnimationFrame((()=>{var n,o;n=e.innerElement,o=`translate3d(0, ${t}%, 0)`,n&&(n.style.transform=o,n.style.webkitTransform=o)}))}setMaskOpacity(e,t=null){var n;null===t&&(null==(n=this.props.history)?void 0:n[0])!==e.id||(this.maskAnimationFrame&&cancelAnimationFrame(this.maskAnimationFrame),this.maskAnimationFrame=requestAnimationFrame((()=>{if(this.maskElementRef.current){const{translateY:n=0,translateYCurrent:o=0}=e,a=null===t?1-(o-n)/(100-n)||0:t;this.maskElementRef.current.style.opacity=le(a,0,100).toString(),this.maskElementRef.current.style.transitionDelay=a&&this.props.delayEnter?`${this.timeout}ms`:""}})))}render(){var e;const{activeModal:t,exitingModal:n,enteringModal:o,modalOverlayTestId:a}=this.props,{touchDown:i,dragging:s}=this.state;return t||n?u(ce.Provider,{value:!0},u(mt.Provider,{value:this.modalRootContext},u(de,{className:I(An,(null==(e=this.props.configProvider)?void 0:e.hasCustomPanelHeaderAfter)&&kn,i&&I(xn,"vkuiInternalModalRoot--touched"),!(!o&&!n)&&I(Ln,"vkuiInternalModalRoot--switching")),onMove:this.onTouchMove,onEnd:this.onTouchEnd,onScroll:this.onScroll},u("div",{"data-testid":a,className:Rn,onClick:this.props.onExit,ref:this.maskElementRef}),u("div",{className:Hn,ref:this.viewportRef},this.getModals().map((e=>{const o=Ze(e.props),a=this.props.getModalState(o);if(o!==t&&o!==n||!a)return null;const i=r({},a),l=i.type===Pn.PAGE;return u(bn,{key:`modal-${o}`,onClose:this.props.onExit,timeout:this.timeout,className:I(In,s&&"vkuiInternalModalRoot__modal--dragging",l&&i.expandable&&"vkuiInternalModalRoot__modal--expandable",l&&i.collapsed&&"vkuiInternalModalRoot__modal--collapsed"),restoreFocus:!1},e)})))))):null}})),function(e){const{platform:t}=K();return u(qn,l(r({},e),{platform:t}))}),ie,"configProvider");var qn;function zn(e){var t,n,o,a,i,s,r;const{contentElement:l,bottomInset:d}=e,c=(null==l?void 0:l.firstElementChild).scrollHeight+((null==d?void 0:d.offsetHeight)||0);let u=e.translateY;e.expandable=c>(null!=(t=null==l?void 0:l.clientHeight)?t:0)||100===e.settlingHeight||e.expanded;let p,m,h,v,f,g=!1,_=!1;const M=Boolean(e.expandable&&100!==e.settlingHeight);if(e.expandable){p=100-(null!=(n=e.settlingHeight)?n:0);const t=p/2,o=100-p;h=[0,t],v=M?[t,p+o/4]:void 0,f=[p+o/4,100],g=M&&p>0,_=p<=0,m=p}else{p=100-(c+(null!=(a=null==(o=e.headerElement)?void 0:o.offsetHeight)?a:0))/(null!=(r=null==(s=null==(i=e.innerElement)?void 0:i.parentElement)?void 0:s.offsetHeight)?r:0)*100,m=p,h=[m,m+25],v=void 0,f=[m+25,m+100]}(e.expandable&&m>(null!=u?u:100)||100===e.settlingHeight)&&(m=0),0===m&&(_=!0,g=!1),e.expandedRange=h,e.collapsedRange=v,e.hiddenRange=f,e.translateY=m,e.translateYFrom=p,e.collapsed=g,e.expanded=_}const Wn=({activeModal:e,children:t,noFocusToDialog:n=!1,onOpen:o,onOpened:a,onClose:i,onClosed:s,modalOverlayTestId:r})=>{const l=g(null),c=g(void 0),p=g(void 0),{document:m}=q(),{hasCustomPanelHeaderAfter:h,platform:v}=K(),{activeModal:_,exitingModal:M,onExit:E,getModalState:y,enteringModal:w,onEnter:b,onEntered:T,onExited:C,history:S,delayEnter:A}=Sn(e,t,o,a,i,s,j),{waitTransitionFinish:R}=at(),x=et({exitingModal:M,enteringModal:w,activeModal:_}),L=Ae({updateModalHeight:()=>{},registerModal:e=>{var t,n=e,{id:o}=n,a=d(n,["id"]);return Object.assign(null!=(t=y(o))?t:{},a)},onClose:E,isInsideModal:!0}),H=v===O.IOS?400:320,k=P.toArray(t),N=(e,t)=>{(null==e?void 0:e.innerElement)&&(e.innerElement.style.transition="",e.innerElement.style.transitionDelay=t&&A?`${H}ms`:"",e.innerElement.style.opacity=t?"1":"0")},D=(e,t=null)=>{null===t&&(null==S?void 0:S[0])!==e.id||(c.current&&cancelAnimationFrame(c.current),c.current=requestAnimationFrame((()=>{if(l.current){const{translateY:n=0,translateYCurrent:o=0}=e,a=null===t?1-(o-n)/(100-n)||0:t;l.current.style.opacity=le(a,0,100).toString()}})))},Y=({id:e,modalElement:t})=>{n||!t||t.contains(m.activeElement)||t.focus(),T(e)};return f((()=>{var e;x&&(M&&M!==x.exitingModal&&(e=>{const t=y(e);t&&(_?C(e):requestAnimationFrame((()=>{R(null==t?void 0:t.innerElement,(()=>C(e)),H),N(t,!1),D(t,0)})))})(M),w&&w!==x.enteringModal&&(()=>{if(!w||!x)return;const e=y(w);b(),x.exitingModal?(requestAnimationFrame((()=>{(null==e?void 0:e.innerElement)&&(e.innerElement.style.transition="none",e.innerElement.style.opacity="1",D(e,1))})),e&&Y(e)):requestAnimationFrame((()=>{w==w&&e&&(R(e.innerElement,(()=>Y(e)),H),N(e,!0),D(e,1))}))})(),_&&!x.activeModal&&(p.current=null!=(e=null==m?void 0:m.activeElement)?e:void 0),_||M||!p.current||(p.current.focus(),p.current=void 0))})),_||M?u(mt.Provider,{value:L},u("div",{className:I(An,h&&kn,On)},u("div",{"data-testid":r,className:Rn,ref:l,onClick:E}),u("div",{className:Hn},k.map((e=>{const t=Ze(e.props);if(t!==_&&t!==M)return null;return u(bn,{restoreFocus:!1,onClose:E,timeout:H,key:`modal-${t}`,className:In},e)}))))):null},jn=e=>{const{isDesktop:t}=yn();ue(!!e.activeModal);return u(t?Wn:Fn,e)};var Bn,Gn,Un,Kn;(Gn=Bn||(Bn={})).BRIGHT_LIGHT="bright_light",Gn.SPACE_GRAY="space_gray",Gn.VKCOM_LIGHT="vkcom_light",Gn.VKCOM_DARK="vkcom_dark",(Kn=Un||(Un={})).DARK="dark",Kn.LIGHT="light";const Vn=e=>"space_gray"===e||"vkcom_dark"===e?"dark":"light";function Xn(e,t){function n(n){const o=function(e){const{scheme:t,appearance:n}=e;return n||Vn(t)}(n);o&&(t(),e(o))}function o(e){const{type:t,data:o}=e.detail;"VKWebAppUpdateConfig"===t&&n(o)}return pe.subscribe(o),pe.send("VKWebAppGetConfig").then(n).catch(console.error),()=>pe.unsubscribe(o)}const Qn=(e,t)=>{const{window:n}=q(),o=g((()=>{t&&t(),o.current=j})),[a,i]=v((()=>{if(e)return e;const t=n&&n.matchMedia&&n.matchMedia("(prefers-color-scheme: dark)");return(null==t?void 0:t.matches)?"dark":"light"}));return f((()=>e?(i(e),j):pe.isEmbedded()?Xn(i,o.current):function(e,t){const n=e&&e.matchMedia&&e.matchMedia("(prefers-color-scheme: dark)");if(void 0===n)return j;const o=e=>{t(e.matches?"dark":"light")};return o(n),rn(n,o),()=>ln(n,o)}(n,i)),[n,e]),a},$n=e=>{const t=me(e),n=K(),{children:o,webviewType:a,hasCustomPanelHeaderAfter:i,customPanelHeaderAfterMinWidth:s,isWebView:l,transitionMotionEnabled:d,platform:c,locale:p,appearance:m,onDetectAppearanceByBridge:h=j}=r(r({},n),t),v=t.webviewType&&void 0===t.hasCustomPanelHeaderAfter?t.webviewType===he.VKAPPS:i,f=Qn(m,h),{document:g}=q();U((function(){if(!g)return;const e=Re(c,f);return ve(g.body,e),()=>{fe(g.body,e)}}),[c,f]);const _=Ae({webviewType:a,hasCustomPanelHeaderAfter:v,customPanelHeaderAfterMinWidth:s,isWebView:l,transitionMotionEnabled:d,platform:c,locale:p,appearance:f});return u(ie.Provider,{value:_},u(xe,{platform:c,appearance:f},o))};function Jn(){var e,t;const[n]=ge(Ee),o=_e(),{match:a,state:i,panelsHistory:s}=n,r=null==a?void 0:a.route,l=null!=(t=null==(e=i.location.state)?void 0:e[Me])?t:r&&"modal"in r?r.modal:void 0;return{root:r&&"root"in r?r.root:void 0,view:null==r?void 0:r.view,panel:null==r?void 0:r.panel,tab:null==r?void 0:r.tab,modal:l,hasOverlay:Boolean(l||o),panelsHistory:s}}const Zn=S((()=>A((()=>import("./FullstackModal-xJCCA01W.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])))),eo=()=>{const e=ye(),{modal:t}=Jn();return R(jn,{activeModal:t,onClose:()=>e.hideModal(),children:R(Zn,{id:we})})},to=S((()=>A((()=>import("./index-JGwIbemP.js")),__vite__mapDeps([15,3,1,2,4,16,6,17,18,19,20,21,22,23,8,9,24,25,26,12,13])))),no=S((()=>A((()=>import("./index-UdLMJ57I.js")),__vite__mapDeps([27,1,2,3,4,6,17,18,12,13,28])))),oo=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const e=Y()!==O.VKCOM,{viewWidth:t}=pt(),{view:n=Pe}=Jn(),o=ye(),a=_((e=>{return t=void 0,n=null,a=function*(){yield o.push(`/${e}`)},new Promise(((e,o)=>{var i=e=>{try{r(a.next(e))}catch(e){o(e)}},s=e=>{try{r(a.throw(e))}catch(e){o(e)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(i,s);r((a=a.apply(t,n)).next())}));var t,n,a}),[]),i=R(eo,{}),[s,r]=v("light"),l=_((()=>{const e="light"===s?"dark":"light";r(e),localStorage.setItem("theme",e)}),[s]);f((()=>{const e=localStorage.getItem("theme");e&&r(e)}),[]);const d=t.tabletPlus&&R(Mn,{className:t.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:[e&&R(Gt,{}),R(be,{id:"sidebar",children:R(to,{activeView:n,onStoryChange:a})})]});return R($n,{appearance:s,children:R(Le,{children:R(on,{modal:i,header:e&&R(Gt,{separator:!1}),style:{justifyContent:"center"},children:[d,R(Mn,{width:"100%",maxWidth:"600px",stretchedOnMobile:!0,autoSpaced:!0,children:R(no,{onStoryChange:a,toggleAppearance:l})})]})})})}},Symbol.toStringTag,{value:"Module"}));export{Ut as A,bn as F,Pn as M,Gt as P,_t as S,ze as T,Jn as a,yn as b,ht as c,mt as d,Ge as e,Ke as f,Ze as g,et as h,at as i,nt as j,Ve as k,Et as l,oo as m,pt as u,De as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/FullstackModal-xJCCA01W.js","assets/index-0Ub2aqlv.js","assets/index-h6nk2UH0.css","assets/AppWrapper-3sxv9e6a.js","assets/AppWrapper-1bLqP_cH.css","assets/Button-dbnnqQqf.js","assets/react_utils-DF5wy2IO.js","assets/Button-rqg9enaV.css","assets/Subhead-FlDhaFyW.js","assets/Subhead-YMIiyTWh.css","assets/Title-iT2OyS_l.js","assets/Title-tiyuQFKY.css","assets/AppearanceProvider-3wdIAIiT.js","assets/AppearanceProvider-QHUqF2Vu.css","assets/FullstackModal-mMiaY4Db.css","assets/index-JGwIbemP.js","assets/Group-AvjP2i5y.js","assets/user_circle_outline_28-kg7UOVf_.js","assets/user_circle_outline_28-fD7Ko76S.css","assets/Group-rMmFuIjH.css","assets/Cell-AlU_aNl_.js","assets/SimpleCell-EYqGjrB0.js","assets/Headline-qey-azsU.js","assets/Headline-SUxlPuoi.css","assets/SimpleCell-2DkfXVAn.css","assets/Cell-ejtMHemb.css","assets/brackets_slash_outline_24-x28a9b4M.js","assets/index-UdLMJ57I.js","assets/index-kQdfC-uh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}