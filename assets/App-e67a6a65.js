var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,s=(e,a)=>{for(var t in a||(a={}))o.call(a,t)&&i(e,t,a[t]);if(n)for(var t of n(a))r.call(a,t)&&i(e,t,a[t]);return e},l=(e,n)=>a(e,t(n)),d=(e,a)=>{var t={};for(var i in e)o.call(e,i)&&a.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&n)for(var i of n(e))a.indexOf(i)<0&&r.call(e,i)&&(t[i]=e[i]);return t};import{y as c,G as m,q as u,k as _,h as p,p as h,F as f,_ as v,c as b,d as w,z as P,M as g,b as y,o as E,T as M}from"./index-3f878bd3.js";import{V as T,a as L,S as C,P as A,b as R,c as S,R as I,u as N,d as O,e as H,f as x,g as k,s as z,A as q,h as W,i as B,j,k as D,l as U,m as V,n as K,o as G,p as Q,q as X,W as Y,r as F,t as $,C as J,v as Z,w as ee,x as ae,y as te,z as ne,B as oe,D as re}from"./AppWrapper-86474aa5.js";import{u as ie,i as se,A as le,a as de,g as ce,T as me,b as ue}from"./AppearanceProvider-eccdb55f.js";function _e(e){return e.desktopPlus.matches?T.DESKTOP:e.tablet.matches?T.TABLET:e.smallTablet.matches?T.SMALL_TABLET:e.mobile.matches?T.MOBILE:T.SMALL_MOBILE}function pe(e){return e.mediumHeight.matches?L.MEDIUM:e.mobileLandscapeHeight.matches?L.SMALL:L.EXTRA_SMALL}function he(e){return e<=T.MOBILE?C.COMPACT:C.REGULAR}function fe(e,a,t){return e>=T.SMALL_TABLET&&t||a<=L.EXTRA_SMALL?C.COMPACT:C.REGULAR}function ve(e,a,t,n){const o=n===A.VKCOM;if((void 0===e||void 0===t)&&(void 0===e||void 0===a)||void 0===t&&void 0===a)return!!o||null;const r=e>=T.SMALL_TABLET,i=t||void 0!==a&&a>=L.MEDIUM;return r&&i||o}function be(e,a="none"){if("none"===a)return e.hasOwnProperty("none")?e.none:null;const t=[],n=R[a];return e.hasOwnProperty(n)&&t.push(e[n]),a>=T.MOBILE&&e.hasOwnProperty("mobilePlus")&&t.push(e.mobilePlus),a>=T.SMALL_TABLET?e.hasOwnProperty("smallTabletPlus")&&t.push(e.smallTabletPlus):e.hasOwnProperty("smallTabletMinus")&&t.push(e.smallTabletMinus),a>=T.TABLET?e.hasOwnProperty("tabletPlus")&&t.push(e.tabletPlus):e.hasOwnProperty("tabletMinus")&&t.push(e.tabletMinus),t.length>0?t.join(" "):null}const we="_Typography--normalize_182ve_1",Pe="_Typography_182ve_1",ge={1:"_Typography--weight-1_182ve_9",2:"_Typography--weight-2_182ve_13",3:"_Typography--weight-3_182ve_17"},ye=e=>{var a=e,{weight:t,Component:n="span",normalize:o}=a,r=d(a,["weight","Component","normalize"]);return c(I,s({Component:n,baseClassName:S(Pe,o&&we,t&&ge[t])},r))},Ee="_Text_1tzbj_1",Me="_Text--sizeY-compact_1tzbj_8",Te={none:"_Text--sizeY-none_1tzbj_14",[C.COMPACT]:Me},Le=e=>{var a=e,{className:t,Component:n="span",normalize:o=!0}=a,r=d(a,["className","Component","normalize"]);const{sizeY:i="none"}=N();return c(ye,s({Component:n,normalize:o,className:S(t,Ee,i!==C.REGULAR&&Te[i])},r))},Ce=m({colRef:null,animate:!0}),Ae=()=>u(Ce),Re=_((function(e,a){var t=e,{fixed:n=!1}=t,o=d(t,["fixed"]);return o["data-tooltip-container"]=n?"fixed":"true",c("div",l(s({},o),{ref:a}))})),Se="_FixedLayout_zmcx7_1",Ie="_FixedLayout--filled_zmcx7_20",Ne={top:"_FixedLayout--vertical-top_zmcx7_24",bottom:S("_FixedLayout--vertical-bottom_zmcx7_29","vkuiInternalFixedLayout--vertical-bottom")},Oe=e=>{var a=e,{children:t,style:n,vertical:o,getRootRef:r,getRef:i,filled:m,className:_,useParentWidth:f}=a,v=d(a,["children","style","vertical","getRootRef","getRef","filled","className","useParentWidth"]);const b=O(),w=H(r,i),[P,g]=p(void 0),{window:y}=x(),{colRef:E}=u(Ce),M=()=>{var e;if(f&&w.current){const a=null==(e=w.current.parentElement)?void 0:e.getBoundingClientRect().width;g(a?`${a}px`:void 0)}else if(null==E?void 0:E.current){const e=getComputedStyle(E.current);g(E.current.clientWidth-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight)+"px")}else g(void 0)};return h(M,[E,b,w,f]),k(y,"resize",M),c(Re,l(s({},v),{fixed:!0,ref:w,className:S(Se,b===A.IOS&&"vkuiInternalFixedLayout--ios",m&&Ie,o&&Ne[o],_),style:l(s({},n),{width:P})}),t)},He={mq:{className:z["-sizeX--compact-mq"]},[C.COMPACT]:{className:z["-sizeX--compact-forced"]}},xe={mq:{className:z["-sizeX--regular-mq"]},[C.REGULAR]:{className:z["-sizeX--regular-forced"]}},ke={mq:{className:z["-sizeY--compact-mq"]},[C.COMPACT]:{className:z["-sizeY--compact-forced"]}},ze={mq:{className:z["-sizeY--regular-mq"]},[C.REGULAR]:{className:z["-sizeY--regular-forced"]}},qe={tabletMinus:{mq:{className:z["-viewWidth--tabletMinus-mq"]},forced:{className:z["-viewWidth--tabletMinus-forced"]}},tabletPlus:{mq:{className:z["-viewWidth--tabletPlus-mq"]},forced:{className:z["-viewWidth--tabletPlus-forced"]}}},We={mobile:{mq:{className:z["-deviceType--mobile-mq"]},forced:{className:z["-deviceType--mobile-forced"]}},desktop:{mq:{className:z["-deviceType--desktop-mq"]},forced:{className:z["-deviceType--desktop-forced"]}}},Be=(e,a,t)=>({compact:void 0===e?a.mq:e===C.COMPACT&&a[e],regular:void 0===e?t.mq:e===C.REGULAR&&t[e]}),je=()=>{const{sizeX:e,sizeY:a,viewWidth:t,viewHeight:n,hasPointer:o}=u(q),r=O();return f((()=>{const i=Be(e,He,xe),s=Be(a,ke,ze),l=((e,a)=>({tabletMinus:void 0===e?a.tabletMinus.mq:e<T.TABLET&&a.tabletMinus.forced,tabletPlus:void 0===e?a.tabletPlus.mq:e>=T.TABLET&&a.tabletPlus.forced}))(t,qe),d=((e,a,t,n,o)=>{const r=ve(e,a,t,n);return null===r?{mobile:o.mobile.mq,desktop:o.desktop.mq}:r?{mobile:!1,desktop:o.desktop.forced}:{mobile:o.mobile.forced,desktop:!1}})(t,n,o,r,We);return{sizeX:i,sizeY:s,viewWidth:l,deviceType:d}}),[e,a,t,n,o,r])},De=m({updateModalHeight:()=>{},registerModal:()=>{},isInsideModal:!1});function Ue(e,a){const t=u(De),n=v({}).current;W((()=>{if(void 0!==e){t.registerModal(l(s({},n),{type:a,id:e}));const o=Object.keys(n).reduce(((e,a)=>l(s({},e),{[a]:null})),{type:a,id:e});return()=>t.registerModal(o)}}),[]);return{refs:v({modalElement:e=>n.modalElement=e,innerElement:e=>n.innerElement=e,headerElement:e=>n.headerElement=e,contentElement:e=>n.contentElement=e,bottomInset:e=>n.bottomInset=e}).current}}const Ve="_Separator_1e9q3_1",Ke="_Separator__in_1e9q3_5",Ge="_Separator--padded_1e9q3_14",Qe=e=>{var a=e,{wide:t}=a,n=d(a,["wide"]);return c(I,l(s({},n),{baseClassName:S(Ve,!t&&Ge)}),c("hr",{className:Ke}))},Xe="_Spacing_11epl_1",Ye=e=>{var a=e,{size:t=8,style:n}=a,o=d(a,["size","style"]);const r=s({height:t,padding:t/2+"px 0"},n);return c(I,l(s({},o),{baseClassName:Xe,style:r}))},Fe="_PanelHeader_1whiw_1",$e="_PanelHeader--vis_1whiw_5",Je="_PanelHeader--fixed_1whiw_5",Ze="_PanelHeader__fixed_1whiw_16",ea="_PanelHeader__in_1whiw_20",aa="_PanelHeader--trnsp_1whiw_29",ta="_PanelHeader--sizeX-regular_1whiw_33",na="_PanelHeader--shadow_1whiw_33",oa="_PanelHeader--sizeX-none_1whiw_38",ra="_PanelHeader__before_1whiw_43",ia="_PanelHeader__content_1whiw_50",sa="_PanelHeader__content-in_1whiw_62",la="_PanelHeader__after_1whiw_74",da="_PanelHeader--ios_1whiw_92",ca="_PanelHeader--no-before_1whiw_122",ma="_PanelHeader--no-after_1whiw_128",ua="_PanelHeader--android_1whiw_155",_a="_PanelHeader--vkcom_1whiw_207",pa="_PanelHeader--sep_1whiw_258",ha="_PanelHeader__separator_1whiw_318",fa=({children:e,Component:a="span",id:t})=>O()===A.VKCOM?c(Le,{weight:"2",Component:a,id:t},e):c(a,{className:sa,id:t},e);fa.displayName="LegacyPanelHeaderContent";const va={ios:S(da,"vkuiInternalPanelHeader--ios"),android:S(ua,"vkuiInternalPanelHeader--android"),vkcom:S(_a,"vkuiInternalPanelHeader--vkcom")},ba={none:oa,regular:ta},wa=({before:e,after:a,separator:t,children:n,typographyProps:o={}})=>{const r=o,{Component:i="span"}=r,l=d(r,["Component"]),{hasCustomPanelHeaderAfter:m,customPanelHeaderAfterMinWidth:_}=B(),{isInsideModal:p}=u(De),h=O(),f=!m||p?{children:a}:{style:{minWidth:_}};let v;return v=w(n)&&n.type.displayName===fa.displayName?n:h===A.VKCOM?c(Le,s({weight:"2",Component:i},l),n):c(i,s({className:sa},l),n),c(b,null,c(Re,{fixed:!0,className:ea},c("div",{className:S(ra,"vkuiInternalPanelHeader__before")},e),c("div",{className:ia},v),c("div",s({className:S(la,"vkuiInternalPanelHeader__after")},f))),t&&h===A.VKCOM&&c(Qe,{className:ha,wide:!0}))},Pa=e=>{var a=e,{before:t,children:n,after:o,separator:r=!0,visor:i=!0,transparent:m=!1,shadow:u,getRef:_,getRootRef:p,fixed:h,typographyProps:f}=a,v=d(a,["before","children","after","separator","visor","transparent","shadow","getRef","getRootRef","fixed","typographyProps"]);const w=O(),{sizeX:P="none"}=N(),{sizeX:g}=je();let y=void 0!==h?h:w!==A.VKCOM;return c(I,l(s({},v),{baseClassName:S(Fe,"vkuiInternalPanelHeader",va.hasOwnProperty(w)?va[w]:va.android,m&&aa,u&&na,i&&S($e,"vkuiInternalPanelHeader--vis"),r&&i&&S(pa,"vkuiInternalPanelHeader--sep"),!t&&S(ca,"vkuiInternalPanelHeader--no-before"),!o&&ma,y&&Je,P!==C.COMPACT&&ba[P]),getRootRef:y?p:_}),y?c(Oe,{className:S(Ze,"vkuiInternalPanelHeader__fixed"),vertical:"top",getRootRef:_},c(wa,{before:t,after:o,separator:r,typographyProps:f},n)):c(wa,{before:t,after:o,separator:r,typographyProps:f},n),r&&i&&w!==A.VKCOM&&c(b,null,g.compact&&c(Qe,{className:g.compact.className}),g.regular&&c(Ye,{className:g.regular.className,size:16})))};Pa.Content=fa;const ga=({children:e,className:a,forcePortal:t,portalRoot:n=null})=>{const{portalRoot:o,mode:r,disablePortal:i}=u(j),s=ie();if(!D())return null;const l=null!=t?t:"full"!==r,d=function(e,a){if(!e)return a;return se(e)?e.current:e}(n,o);return(!!(n&&l)||!i&&d&&l)&&d?P(c(le,{appearance:s},c("div",{className:a},e)),d):c(b,null,e)};const ya="_PopoutRoot_1dpsr_1",Ea="_PopoutRoot__popout_1dpsr_7",Ma="_PopoutRoot__modal_1dpsr_16",Ta=e=>c("div",s({className:Ea},e)),La=e=>c("div",s({className:Ma},e)),Ca=e=>{var a=e,{popout:t,modal:n,children:o}=a,r=d(a,["popout","modal","children"]);const{document:i}=x();return h((()=>{t&&U(i)}),[i,t]),c(I,l(s({},r),{baseClassName:ya}),o,c(ga,null,!!t&&c(Ta,null,t),!!n&&c(La,null,n)))},Aa="_SplitLayout_v2fan_1",Ra="_SplitLayout__inner_v2fan_7",Sa="_SplitLayout__inner--header_v2fan_17",Ia="_SplitLayout--ios_v2fan_25",Na=e=>{var a=e,{popout:t,modal:n,header:o,children:r,getRootRef:i,getRef:m,className:u}=a,_=d(a,["popout","modal","header","children","getRootRef","getRef","className"]);const p=O();return c(Ca,{className:S(Aa,p===A.IOS&&Ia),popout:t,modal:n,getRootRef:i},o,c("div",l(s({},_),{ref:m,className:S(Ra,!!o&&Sa,u)}),r))},Oa={window:void 0,mediaQueries:null},Ha=()=>{const{window:e}=x();return f((function(){if(Oa.window===e&&null!==Oa.mediaQueries)return Oa.mediaQueries;const a=e?e.matchMedia.bind(e):V;return Oa.window=e,Oa.mediaQueries={desktopPlus:a(K.MEDIA_QUERIES.DESKTOP_PLUS),smallTabletPlus:a(K.MEDIA_QUERIES.SMALL_TABLET_PLUS),tablet:a(K.MEDIA_QUERIES.TABLET),smallTablet:a(K.MEDIA_QUERIES.SMALL_TABLET),mobile:a(K.MEDIA_QUERIES.MOBILE),mediumHeight:a(K.MEDIA_QUERIES.MEDIUM_HEIGHT),mobileLandscapeHeight:a(K.MEDIA_QUERIES.MOBILE_LANDSCAPE_HEIGHT)},Oa.mediaQueries}),[e])};function xa(e,a){e.addEventListener?e.addEventListener("change",a):e.addListener(a)}function ka(e,a){e.removeEventListener?e.removeEventListener("change",a):e.removeListener(a)}const za="_SplitCol_1qmo4_1",qa="_SplitCol--spaced_1qmo4_9",Wa="_SplitCol--viewWidth-smallTabletPlus_1qmo4_13",Ba="_SplitCol--spaced-none_1qmo4_13",ja="_SplitCol--spaced-auto_1qmo4_13",Da="_SplitCol--viewWidth-tabletMinus_1qmo4_23",Ua="_SplitCol--stretched-on-mobile_1qmo4_23",Va="_SplitCol--fixed_1qmo4_39",Ka="_SplitCol__fixedInner_1qmo4_46",Ga={none:S("_SplitCol--viewWidth-none_1qmo4_18","vkuiInternalSplitCol--viewWidth-none"),tabletMinus:Da,smallTabletPlus:Wa,tabletPlus:"vkuiInternalSplitCol--viewWidth-tabletPlus"};const Qa=e=>{const a=e,{children:t,width:n,maxWidth:o,minWidth:r,spaced:i,animate:m,fixed:u,style:_,autoSpaced:f,stretchedOnMobile:v,getRootRef:b}=a,w=d(a,["children","width","maxWidth","minWidth","spaced","animate","fixed","style","autoSpaced","stretchedOnMobile","getRootRef"]),P=H(b),{viewWidth:g}=N(),y=function(e){const{viewWidth:a}=N(),[t,n]=p(Boolean(e)),o=Ha();return h((()=>{if(void 0!==e)return void n(e);if(void 0!==a)return void n(a<T.TABLET);const t=()=>n(!o.smallTabletPlus.matches);return t(),xa(o.smallTabletPlus,t),()=>{ka(o.smallTabletPlus,t)}}),[e,a,o]),t}(m),E=de({colRef:P,animate:y});return c(I,l(s({},w),{style:l(s({},_),{width:n,maxWidth:o,minWidth:r}),getRootRef:P,baseClassName:S(za,be(Ga,g),i&&S(qa,"vkuiInternalSplitCol--spaced"),void 0===i&&S(Ba,"vkuiInternalSplitCol--spaced-none"),f&&S(ja,"vkuiInternalSplitCol--spaced-auto"),u&&Va,v&&Ua)}),c(Ce.Provider,{value:E},u?c("div",{className:Ka},t):t))};var Xa,Ya,Fa,$a;(Ya=Xa||(Xa={})).BRIGHT_LIGHT="bright_light",Ya.SPACE_GRAY="space_gray",Ya.VKCOM_LIGHT="vkcom_light",Ya.VKCOM_DARK="vkcom_dark",($a=Fa||(Fa={})).DARK="dark",$a.LIGHT="light";const Ja=e=>"space_gray"===e||"vkcom_dark"===e?"dark":"light";function Za(e,a){function t(t){const n=function(e){const{scheme:a,appearance:t}=e;return t||Ja(a)}(t);n&&(a(),e(n))}function n(e){const{type:a,data:n}=e.detail;"VKWebAppUpdateConfig"===a&&t(n)}return Q.subscribe(n),Q.send("VKWebAppGetConfig").then(t).catch(console.error),()=>Q.unsubscribe(n)}const et=(e,a)=>{const{window:t}=x(),n=v((()=>{a&&a(),n.current=G})),[o,r]=p((()=>{if(e)return e;const a=t&&t.matchMedia&&t.matchMedia("(prefers-color-scheme: dark)");return(null==a?void 0:a.matches)?"dark":"light"}));return h((()=>e?(r(e),G):Q.isEmbedded()?Za(r,n.current):function(e,a){const t=e&&e.matchMedia&&e.matchMedia("(prefers-color-scheme: dark)");if(void 0===t)return G;const n=e=>{a(e.matches?"dark":"light")};return n(t),xa(t,n),()=>ka(t,n)}(t,r)),[t,e]),o},at=e=>{const a=X(e),t=B(),{children:n,webviewType:o,hasCustomPanelHeaderAfter:r,customPanelHeaderAfterMinWidth:i,isWebView:l,transitionMotionEnabled:d,platform:m,locale:u,appearance:_,onDetectAppearanceByBridge:p=G}=s(s({},t),a),h=a.webviewType&&void 0===a.hasCustomPanelHeaderAfter?a.webviewType===Y.VKAPPS:r,f=et(_,p),{document:v}=x();W((function(){if(!v)return;const e=ce(m,f);return F(v.body,e),()=>{$(v.body,e)}}),[m,f]);const b=de({webviewType:o,hasCustomPanelHeaderAfter:h,customPanelHeaderAfterMinWidth:i,isWebView:l,transitionMotionEnabled:d,platform:m,locale:u,appearance:f});return c(J.Provider,{value:b},c(me,{platform:m,appearance:f},n))};function tt(){var e,a;const[t]=Z(te),n=ee(),{match:o,state:r,panelsHistory:i}=t,s=null==o?void 0:o.route,l=null!=(a=null==(e=r.location.state)?void 0:e[ae])?a:s&&"modal"in s?s.modal:void 0;return{root:s&&"root"in s?s.root:void 0,view:null==s?void 0:s.view,panel:null==s?void 0:s.panel,tab:null==s?void 0:s.tab,modal:l,hasOverlay:Boolean(l||n),panelsHistory:i}}const nt=g((()=>y((()=>import("./index-e62ff75f.js")),["assets/index-e62ff75f.js","assets/AppWrapper-86474aa5.js","assets/index-3f878bd3.js","assets/index-2e2e5bc2.css","assets/AppWrapper-0733cb84.css","assets/Group-543871f8.js","assets/react_utils-d8a55a4d.js","assets/user_circle_outline_28-4d68c968.js","assets/user_circle_outline_28-50c3884c.css","assets/Group-3a50f9c0.css","assets/Cell-261414e7.js","assets/SimpleCell-3445c73a.js","assets/Headline-26ea3896.js","assets/Headline-d4608b21.css","assets/Subhead-e4e816d6.js","assets/Subhead-1c6aa1fb.css","assets/SimpleCell-5813f00a.css","assets/Cell-da23a184.css","assets/brackets_slash_outline_24-fce94aa0.js","assets/AppearanceProvider-eccdb55f.js","assets/AppearanceProvider-628e4cff.css"]))),ot=g((()=>y((()=>import("./index-3dffba47.js")),["assets/index-3dffba47.js","assets/index-3f878bd3.js","assets/index-2e2e5bc2.css","assets/AppWrapper-86474aa5.js","assets/AppWrapper-0733cb84.css","assets/react_utils-d8a55a4d.js","assets/user_circle_outline_28-4d68c968.js","assets/user_circle_outline_28-50c3884c.css","assets/AppearanceProvider-eccdb55f.js","assets/AppearanceProvider-628e4cff.css","assets/index-baec5caf.css"]))),rt=g((()=>y((()=>import("./index-277e3d64.js").then((e=>e.i))),["assets/index-277e3d64.js","assets/AppWrapper-86474aa5.js","assets/index-3f878bd3.js","assets/index-2e2e5bc2.css","assets/AppWrapper-0733cb84.css","assets/useWaitTransitionFinish-4778e412.js","assets/FocusTrap-f6cf972c.js","assets/AppearanceProvider-eccdb55f.js","assets/AppearanceProvider-628e4cff.css","assets/index-c772bc80.css"]))),it=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const e=O()!==A.VKCOM,{viewWidth:a}=je(),{view:t=re}=tt(),n=ne(),o=e=>{return a=void 0,t=null,o=function*(){yield n.push(`/${e}`)},new Promise(((e,n)=>{var r=e=>{try{s(o.next(e))}catch(e){n(e)}},i=e=>{try{s(o.throw(e))}catch(e){n(e)}},s=a=>a.done?e(a.value):Promise.resolve(a.value).then(r,i);s((o=o.apply(a,t)).next())}));var a,t,o},r=E(rt,{}),[i,s]=p("light"),l=M((()=>{const e="light"===i?"dark":"light";s(e),localStorage.setItem("theme",e)}),[i]);return h((()=>{const e=localStorage.getItem("theme");e&&s(e)}),[]),E(at,{appearance:i,children:E(ue,{children:E(Na,{modal:r,header:e&&E(Pa,{separator:!1}),style:{justifyContent:"center"},children:[a.tabletPlus&&E(Qa,{className:a.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:[e&&E(Pa,{}),E(oe,{id:"sidebar",children:E(nt,{activeView:t,onStoryChange:o})})]}),E(Qa,{width:"100%",maxWidth:"600px",stretchedOnMobile:!0,autoSpaced:!0,children:E(ot,{onStoryChange:o,toggleAppearance:l})})]})})})}},Symbol.toStringTag,{value:"Module"}));export{ga as A,De as M,Pa as P,Qe as S,ye as T,tt as a,Ha as b,pe as c,he as d,fe as e,ka as f,_e as g,Le as h,Ae as i,Re as j,Ye as k,Ue as l,xa as m,it as n,ve as t,je as u};
