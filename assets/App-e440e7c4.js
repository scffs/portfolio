import{V as e,a as t,b as a,S as n,P as i,_ as r,c as l,d as o,e as s,f as u,u as d,g as c,h as m,i as v,j as p,k as f,A as h,l as E,m as k,W as P,n as b,o as g,p as y,q as _,r as M,s as R,t as T,v as N,w,x as L,y as C,z as S,B as x,C as H,D as A,E as I,F as O,R as z,G as W,H as q,I as B,J as j,K as D}from"./index-99b15b47.js";import{r as U,a as V}from"./react-37698f52.js";function X(e){return e.desktopPlus.matches?t.DESKTOP:e.tablet.matches?t.TABLET:e.smallTablet.matches?t.SMALL_TABLET:e.mobile.matches?t.MOBILE:t.SMALL_MOBILE}function F(e){return e.mediumHeight.matches?a.MEDIUM:e.mobileLandscapeHeight.matches?a.SMALL:a.EXTRA_SMALL}function Q(e,n,r,l){var o=l===i.VKCOM;if((void 0===e||void 0===r)&&(void 0===e||void 0===n)||void 0===r&&void 0===n)return!!o||null;var s=e>=t.SMALL_TABLET,u=r||void 0!==n&&n>=a.MEDIUM;return s&&u||o}function K(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";if("none"===n)return a.hasOwnProperty("none")?a.none:null;var i=[],r=e[n];return a.hasOwnProperty(r)&&i.push(a[r]),n>=t.MOBILE&&a.hasOwnProperty("mobilePlus")&&i.push(a.mobilePlus),n>=t.SMALL_TABLET?a.hasOwnProperty("smallTabletPlus")&&i.push(a.smallTabletPlus):a.hasOwnProperty("smallTabletMinus")&&i.push(a.smallTabletMinus),n>=t.TABLET?a.hasOwnProperty("tabletPlus")&&i.push(a.tabletPlus):a.hasOwnProperty("tabletMinus")&&i.push(a.tabletMinus),i.length>0?i.join(" "):null}var Y=function(e){var t=e.className,a=e.weight,n=e.Component,i=void 0===n?"span":n,u=e.normalize,d=e.getRootRef,c=r(e,["className","weight","Component","normalize","getRootRef"]);return U.createElement(i,l(s({},c),{ref:d,className:o(t,u&&"vkuiTypography--normalize",a&&{1:"vkuiTypography--weight-1",2:"vkuiTypography--weight-2",3:"vkuiTypography--weight-3"}[a])}))},G=u({none:"vkuiText--sizeY-none"},n.COMPACT,"vkuiText--sizeY-compact"),J=function(e){var t=e.className,a=e.Component,i=void 0===a?"span":a,l=e.normalize,u=void 0===l||l,c=r(e,["className","Component","normalize"]),m=d().sizeY,v=void 0===m?"none":m;return U.createElement(Y,s({Component:i,normalize:u,className:o(t,"vkuiText",v!==n.REGULAR&&G[v])},c))},$=U.createContext({colRef:null,animate:!0}),Z=function(){return U.useContext($)},ee=U.forwardRef((function(e,t){var a=e.fixed,n=void 0!==a&&a,i=r(e,["fixed"]);return i["data-tooltip-container"]=n?"fixed":"true",U.createElement("div",l(s({},i),{ref:t}))})),te=function(e){var t=e.children,a=e.style,n=e.vertical,u=e.getRootRef,d=e.getRef,h=e.filled,E=e.className,k=e.useParentWidth,P=r(e,["children","style","vertical","getRootRef","getRef","filled","className","useParentWidth"]),b=c(),g=m(u,d),y=v(U.useState(void 0),2),_=y[0],M=y[1],R=p().window,T=U.useContext($).colRef,N=function(){var e;if(k&&g.current){var t,a=null===(t=g.current.parentElement)||void 0===t?void 0:t.getBoundingClientRect().width;M(a?"".concat(a,"px"):void 0)}else if(null===(e=T)||void 0===e?void 0:e.current){var n=getComputedStyle(T.current);M("".concat(T.current.clientWidth-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight),"px"))}else M(void 0)};return U.useEffect(N,[T,b,g,k]),f(R,"resize",N),U.createElement(ee,l(s({},P),{fixed:!0,ref:g,className:o("vkuiFixedLayout",b===i.IOS&&"vkuiInternalFixedLayout--ios",h&&"vkuiFixedLayout--filled",n&&{top:"vkuiFixedLayout--vertical-top",bottom:o("vkuiFixedLayout--vertical-bottom","vkuiInternalFixedLayout--vertical-bottom")}[n],E),style:l(s({},a),{width:_})}),t)},ae=u({mq:{className:"vkui-sizeX--compact-mq"}},n.COMPACT,{className:"vkui-sizeX--compact-forced"}),ne=u({mq:{className:"vkui-sizeX--regular-mq"}},n.REGULAR,{className:"vkui-sizeX--regular-forced"}),ie=u({mq:{className:"vkui-sizeY--compact-mq"}},n.COMPACT,{className:"vkui-sizeY--compact-forced"}),re=u({mq:{className:"vkui-sizeY--regular-mq"}},n.REGULAR,{className:"vkui-sizeY--regular-forced"}),le={tabletMinus:{mq:{className:"vkui-viewWidth--tabletMinus-mq"},forced:{className:"vkui-viewWidth--tabletMinus-forced"}},tabletPlus:{mq:{className:"vkui-viewWidth--tabletPlus-mq"},forced:{className:"vkui-viewWidth--tabletPlus-forced"}}},oe={mobile:{mq:{className:"vkui-deviceType--mobile-mq"},forced:{className:"vkui-deviceType--mobile-forced"}},desktop:{mq:{className:"vkui-deviceType--desktop-mq"},forced:{className:"vkui-deviceType--desktop-forced"}}},se=function(e,t,a){return{compact:void 0===e?t.mq:e===n.COMPACT&&t[e],regular:void 0===e?a.mq:e===n.REGULAR&&a[e]}},ue=function(){var e=U.useContext(h),a=e.sizeX,n=e.sizeY,i=e.viewWidth,r=e.viewHeight,l=e.hasPointer,o=c();return U.useMemo((function(){var e=se(a,ae,ne),s=se(n,ie,re),u=function(e,a){return{tabletMinus:void 0===e?a.tabletMinus.mq:e<t.TABLET&&a.tabletMinus.forced,tabletPlus:void 0===e?a.tabletPlus.mq:e>=t.TABLET&&a.tabletPlus.forced}}(i,le),d=function(e,t,a,n,i){var r=Q(e,t,a,n);return null===r?{mobile:i.mobile.mq,desktop:i.desktop.mq}:r?{mobile:!1,desktop:i.desktop.forced}:{mobile:i.mobile.forced,desktop:!1}}(i,r,l,o,oe);return{sizeX:e,sizeY:s,viewWidth:u,deviceType:d}}),[a,n,i,r,l,o])},de=U.createContext({updateModalHeight:function(){},registerModal:function(){},isInsideModal:!1});function ce(e,t){var a=U.useContext(de),n=U.useRef({}).current;return E((function(){if(void 0!==e){a.registerModal(l(s({},n),{type:t,id:e}));var i=Object.keys(n).reduce((function(e,t){return l(s({},e),u({},t,null))}),{type:t,id:e});return function(){return a.registerModal(i)}}}),[]),{refs:U.useRef({modalElement:function(e){return n.modalElement=e},innerElement:function(e){return n.innerElement=e},headerElement:function(e){return n.headerElement=e},contentElement:function(e){return n.contentElement=e}}).current}}var me=function(e){var t=e.wide,a=e.className,n=r(e,["wide","className"]);return U.createElement("div",l(s({},n),{className:o("vkuiSeparator",!t&&"vkuiSeparator--padded",a)}),U.createElement("hr",{className:"vkuiSeparator__in"}))},ve=function(e){var t=e.size,a=void 0===t?8:t,n=e.style,i=e.className,u=r(e,["size","style","className"]),d=s({height:a,padding:"".concat(a/2,"px 0")},n);return U.createElement("div",l(s({},u),{className:o(i,"vkuiSpacing"),style:d}))},pe=function(e){var t=e.children,a=e.Component,n=void 0===a?"span":a,r=e.id;return c()===i.VKCOM?U.createElement(J,{weight:"2",Component:n,id:r},t):U.createElement(n,{className:"vkuiPanelHeader__content-in",id:r},t)};pe.displayName="LegacyPanelHeaderContent";var fe={ios:o("vkuiPanelHeader--ios","vkuiInternalPanelHeader--ios"),android:o("vkuiPanelHeader--android","vkuiInternalPanelHeader--android"),vkcom:o("vkuiPanelHeader--vkcom","vkuiInternalPanelHeader--vkcom")},he={none:"vkuiPanelHeader--sizeX-none",regular:"vkuiPanelHeader--sizeX-regular"},Ee=function(e){var t,a=e.before,n=e.after,l=e.separator,u=e.children,d=e.typographyProps,m=void 0===d?{}:d,v=m.Component,p=void 0===v?"span":v,f=r(m,["Component"]),h=k().webviewType,E=U.useContext(de).isInsideModal,b=c();return t=U.isValidElement(u)&&u.type.displayName===pe.displayName?u:b===i.VKCOM?U.createElement(J,s({weight:"2",Component:p},f),u):U.createElement(p,s({className:"vkuiPanelHeader__content-in"},f),u),U.createElement(U.Fragment,null,U.createElement(ee,{fixed:!0,className:"vkuiPanelHeader__in"},U.createElement("div",{className:o("vkuiPanelHeader__before","vkuiInternalPanelHeader__before")},a),U.createElement("div",{className:"vkuiPanelHeader__content"},t),U.createElement("div",{className:o("vkuiPanelHeader__after","vkuiInternalPanelHeader__after")},(h===P.INTERNAL||E)&&n)),l&&b===i.VKCOM&&U.createElement(me,{className:"vkuiPanelHeader__separator",wide:!0}))},ke=function(e){var t=e.before,a=e.children,u=e.after,m=e.separator,v=void 0===m||m,p=e.visor,f=void 0===p||p,h=e.transparent,E=void 0!==h&&h,b=e.shadow,g=e.getRef,y=e.getRootRef,_=e.fixed,M=e.className,R=e.typographyProps,T=r(e,["before","children","after","separator","visor","transparent","shadow","getRef","getRootRef","fixed","className","typographyProps"]),N=c(),w=k().webviewType,L=U.useContext(de).isInsideModal,C=d().sizeX,S=void 0===C?"none":C,x=ue().sizeX,H=void 0!==_?_:N!==i.VKCOM;return U.createElement("div",l(s({},T),{className:o("vkuiPanelHeader","vkuiInternalPanelHeader",fe.hasOwnProperty(N)?fe[N]:fe.android,E&&"vkuiPanelHeader--trnsp",b&&"vkuiPanelHeader--shadow",f&&o("vkuiPanelHeader--vis","vkuiInternalPanelHeader--vis"),v&&f&&o("vkuiPanelHeader--sep","vkuiInternalPanelHeader--sep"),w===P.VKAPPS&&!L&&"vkuiPanelHeader--vkapps",!t&&o("vkuiPanelHeader--no-before","vkuiInternalPanelHeader--no-before"),!u&&"vkuiPanelHeader--no-after",H&&"vkuiPanelHeader--fixed",S!==n.COMPACT&&he[S],M),ref:H?y:g}),H?U.createElement(te,{className:o("vkuiPanelHeader__fixed","vkuiInternalPanelHeader__fixed"),vertical:"top",getRootRef:g},U.createElement(Ee,{before:t,after:u,separator:v,typographyProps:R},a)):U.createElement(Ee,{before:t,after:u,separator:v,typographyProps:R},a),v&&f&&N!==i.VKCOM&&U.createElement(U.Fragment,null,x.compact&&U.createElement(me,{className:x.compact.className}),x.regular&&U.createElement(ve,{className:x.regular.className,size:16})))};function Pe(e,t){return null!=e?e:t}ke.Content=pe;var be={window:void 0,mediaQueries:null},ge=function(){var e=p().window;return U.useMemo((function(){if(be.window===e&&null!==be.mediaQueries)return be.mediaQueries;var t=e?e.matchMedia.bind(e):b;return be.window=e,be.mediaQueries={desktopPlus:t(g.MEDIA_QUERIES.DESKTOP_PLUS),smallTabletPlus:t(g.MEDIA_QUERIES.SMALL_TABLET_PLUS),tablet:t(g.MEDIA_QUERIES.TABLET),smallTablet:t(g.MEDIA_QUERIES.SMALL_TABLET),mobile:t(g.MEDIA_QUERIES.MOBILE),mediumHeight:t(g.MEDIA_QUERIES.MEDIUM_HEIGHT),mobileLandscapeHeight:t(g.MEDIA_QUERIES.MOBILE_LANDSCAPE_HEIGHT)},be.mediaQueries}),[e])},ye=function(){var e=U.useContext(h),i=e.viewWidth,r=e.viewHeight,l=e.sizeX,o=e.sizeY,s=e.hasPointer,u=e.hasHover,d=c(),m=ge(),p=v(U.useState((function(){return[Pe(i,X(m)),Pe(r,F(m))]})),2),f=v(p[0],2),E=f[0],k=f[1],P=p[1],b=U.useMemo((function(){var e=Pe(s,R),c=Pe(u,T),m=Pe(i,E),v=Pe(r,k),p=Pe(l,function(e){return e<=t.MOBILE?n.COMPACT:n.REGULAR}(m)),f=Pe(o,function(e,i,r){return e>=t.SMALL_TABLET&&r||i<=a.EXTRA_SMALL?n.COMPACT:n.REGULAR}(m,v,e));return{viewWidth:m,viewHeight:v,sizeX:p,sizeY:f,hasPointer:e,hasHover:c,isDesktop:Q(m,v,e,d)}}),[E,k,i,r,l,o,s,u,d]);return U.useEffect((function(){var e=function(){P((function(e){var t=Pe(i,X(m)),a=Pe(r,F(m)),n=v(e,2),l=n[0],o=n[1];return l!==t||o!==a?[t,a]:e}))};return i||[m.desktopPlus,m.tablet,m.smallTablet,m.mobile].forEach((function(t){return _(t,e)})),r||[m.mediumHeight,m.mobileLandscapeHeight].forEach((function(t){return _(t,e)})),function(){[m.desktopPlus,m.tablet,m.smallTablet,m.mobile,m.mediumHeight,m.mobileLandscapeHeight].forEach((function(t){return M(t,e)}))}}),[m,i,r]),b},_e=function(e){var t=e.children,a=e.className,n=e.forcePortal,i=e.portalRoot,r=void 0===i?null:i,l=U.useContext(N),o=l.portalRoot,s=l.mode,u=l.disablePortal,d=w();if(!L())return null;var c=null!=n?n:"full"!==s,m=function(e,t){if(!e)return t;return S(e)?e.current:e}(r,o);return(!!(r&&c)||!u&&m&&c)&&m?V.createPortal(U.createElement(C,{appearance:d},U.createElement("div",{className:a},t)),m):U.createElement(U.Fragment,null,t)};var Me=function(e){var t=e.children,a=ye().isDesktop;return U.createElement("div",{className:o("vkuiPopoutRoot__popout",a&&"vkuiPopoutRoot__popout--absolute")},t)},Re=function(e){var t=e.children;return U.createElement("div",{className:"vkuiPopoutRoot__modal"},t)},Te=function(e){var t=e.popout,a=e.modal,n=e.children,i=e.getRootRef,u=e.className,d=r(e,["popout","modal","children","getRootRef","className"]),c=p().document;return U.useEffect((function(){t&&x(c)}),[c,t]),U.createElement("div",l(s({},d),{className:o("vkuiPopoutRoot",u),ref:i}),n,U.createElement(_e,null,!!t&&U.createElement(Me,null,t),!!a&&U.createElement(Re,null,a)))},Ne=function(e){var t=e.popout,a=e.modal,n=e.header,u=e.children,d=e.getRootRef,m=e.getRef,v=e.className,p=r(e,["popout","modal","header","children","getRootRef","getRef","className"]),f=c();return U.createElement(Te,{className:o("vkuiSplitLayout",f===i.IOS&&"vkuiSplitLayout--ios"),popout:t,modal:a,getRootRef:d},n,U.createElement("div",l(s({},p),{ref:m,className:o("vkuiSplitLayout__inner",!!n&&"vkuiSplitLayout__inner--header",v)}),u))},we={none:o("vkuiSplitCol--viewWidth-none","vkuiInternalSplitCol--viewWidth-none"),tabletMinus:"vkuiSplitCol--viewWidth-tabletMinus",smallTabletPlus:"vkuiSplitCol--viewWidth-smallTabletPlus",tabletPlus:"vkuiInternalSplitCol--viewWidth-tabletPlus"};var Le=function(e){var a=e.children,n=e.width,i=e.maxWidth,u=e.minWidth,c=e.spaced,m=e.animate,p=e.fixed,f=e.style,h=e.autoSpaced,E=e.stretchedOnMobile,k=e.className,P=r(e,["children","width","maxWidth","minWidth","spaced","animate","fixed","style","autoSpaced","stretchedOnMobile","className"]),b=U.useRef(null),g=d().viewWidth,y=function(e){var a=d().viewWidth,n=v(U.useState(Boolean(e)),2),i=n[0],r=n[1],l=ge();return U.useEffect((function(){if(void 0===e){if(void 0===a){var n=function(){return r(!l.smallTabletPlus.matches)};return n(),_(l.smallTabletPlus,n),function(){M(l.smallTabletPlus,n)}}r(a<t.TABLET)}else r(e)}),[e,a,l]),i}(m),R=H({colRef:b,animate:y});return U.createElement("div",l(s({},P),{style:l(s({},f),{width:n,maxWidth:i,minWidth:u}),ref:b,className:o("vkuiSplitCol",K(we,g),c&&o("vkuiSplitCol--spaced","vkuiInternalSplitCol--spaced"),void 0===c&&o("vkuiSplitCol--spaced-none","vkuiInternalSplitCol--spaced-none"),h&&o("vkuiSplitCol--spaced-auto","vkuiInternalSplitCol--spaced-auto"),p&&"vkuiSplitCol--fixed",E&&"vkuiSplitCol--stretched-on-mobile",k)}),U.createElement($.Provider,{value:R},p?U.createElement("div",{className:"vkuiSplitCol__fixedInner"},a):a))};function Ce(){var e,t;const[a]=A(z),n=I(),{match:i,state:r,panelsHistory:l}=a,o=null==i?void 0:i.route,s=null!=(t=null==(e=r.location.state)?void 0:e[O])?t:o&&"modal"in o?o.modal:void 0;return{root:o&&"root"in o?o.root:void 0,view:null==o?void 0:o.view,panel:null==o?void 0:o.panel,tab:null==o?void 0:o.tab,modal:s,hasOverlay:Boolean(s||n),panelsHistory:l}}const Se=U.lazy((()=>W((()=>import("./index-1307bd88.js")),["assets/index-1307bd88.js","assets/index-99b15b47.js","assets/react-37698f52.js","assets/index-152d0029.css","assets/Group-5c818549.js","assets/Footnote-97fa1dae.js","assets/SimpleCell-b03e322b.js","assets/Headline-024401dc.js","assets/Subhead-27ad3fc5.js"]))),xe=U.lazy((()=>W((()=>import("./index-a4e154d6.js")),["assets/index-a4e154d6.js","assets/index-99b15b47.js","assets/react-37698f52.js","assets/index-152d0029.css","assets/getNavId-aa412334.js","assets/Footnote-97fa1dae.js"]))),He=U.lazy((()=>W((()=>import("./index-eadc4e5f.js").then((e=>e.i))),["assets/index-eadc4e5f.js","assets/index-99b15b47.js","assets/react-37698f52.js","assets/index-152d0029.css","assets/getNavId-aa412334.js","assets/useWaitTransitionFinish-e4f41df5.js"]))),Ae=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const e=c()!==i.VKCOM,{viewWidth:t}=ue(),{view:a=D}=Ce(),n=q(),r=e=>{return t=void 0,a=null,i=function*(){yield n.push(`/${e}`)},new Promise(((e,n)=>{var r=e=>{try{o(i.next(e))}catch(e){n(e)}},l=e=>{try{o(i.throw(e))}catch(e){n(e)}},o=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,l);o((i=i.apply(t,a)).next())}));var t,a,i},l=B.jsx(He,{});return B.jsx(j,{children:B.jsxs(Ne,{modal:l,header:e&&B.jsx(ke,{separator:!1}),style:{justifyContent:"center"},children:[t.tabletPlus&&B.jsxs(Le,{className:t.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:[e&&B.jsx(ke,{}),B.jsx(Se,{activeView:a,onStoryChange:r})]}),B.jsx(Le,{width:"100%",maxWidth:"700px",stretchedOnMobile:!0,autoSpaced:!0,children:B.jsx(xe,{onStoryChange:r})})]})})}},Symbol.toStringTag,{value:"Module"}));export{Ae as A,de as M,ke as P,me as S,Y as T,Ce as a,ye as b,Z as c,ee as d,ve as e,ce as f,J as g,ue as u};