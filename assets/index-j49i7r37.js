var e=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,t=(n,i,a)=>i in n?e(n,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[i]=a,l=(e,n)=>{for(var i in n||(n={}))o.call(n,i)&&t(e,i,n[i]);if(a)for(var i of a(n))r.call(n,i)&&t(e,i,n[i]);return e},s=(e,a)=>n(e,i(a)),c=(e,n)=>{var i={};for(var t in e)o.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(null!=e&&a)for(var t of a(e))n.indexOf(t)<0&&r.call(e,t)&&(i[t]=e[t]);return i};import{c as _,F as u,q as d,h as p,b as w,p as v,T as m,A as f,u as b}from"./index-un9PXEE1.js";import{c as h,B as k,e as V,g,n as y,am as B,aD as T,h as x,f as P,d as E,aE as C,k as H,T as N,aC as O,u as j,J as S,q as W}from"./AppWrapper-Ec7-caUI.js";import{T as A,N as I,A as L}from"./Group-_LCyvD88.js";import{u as X}from"./AppearanceProvider-Shfw6fx_.js";import{T as z,f as M,b as $,P as D}from"./App-q9yGfyTd.js";const F={1:"_Title--level-1_9ajty_1",2:"_Title--level-2_9ajty_8",3:"_Title--level-3_9ajty_15"},K=e=>{var n=e,{className:i,level:a="1",Component:o="span",normalize:r=!0}=n,t=c(n,["className","level","Component","normalize"]);return _(z,l({Component:o,normalize:r,className:h(i,F[a])},t))};var R=k("Icon24ArrowLeftOutline","arrow_left_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="arrow_left_outline_24"><path fill="currentColor" d="M11.532 4.26a.9.9 0 0 1 .089 1.18l-.08.092L6.05 11.1H20.1a.9.9 0 0 1 .113 1.793l-.113.007H6.05l5.49 5.568a.9.9 0 0 1 .073 1.181l-.081.092a.9.9 0 0 1-1.181.072l-.092-.081-7-7.1a.9.9 0 0 1-.08-1.172l.08-.092 7-7.1a.9.9 0 0 1 1.273-.009" /></symbol>',24,24,!1,void 0),q=k("Icon24ChevronLeftOutline","chevron_left_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_left_outline_24"><path d="m8.414 12 7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 1 1 1.414 1.414z" /></symbol>',24,24,!1,void 0),G=k("Icon28ArrowLeftOutline","arrow_left_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="arrow_left_outline_28"><g fill="none" fill-rule="evenodd"><path d="M28 0H0v28h28z" /><path fill="currentColor" fill-rule="nonzero" d="M12.293 6.293a1 1 0 0 1 1.414 1.414L8.414 13H22a1 1 0 0 1 .993.883L23 14a1 1 0 0 1-1 1H8.414l5.293 5.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-7-7-.073-.082A1.005 1.005 0 0 1 5 14l.004.09A1.006 1.006 0 0 1 5 14.02V14a1.02 1.02 0 0 1 .125-.484.878.878 0 0 1 .071-.111.999.999 0 0 1 .097-.112l-.08.09c.025-.031.051-.062.08-.09Z" /></g></symbol>',28,28,!1,void 0),J=k("Icon28ChevronBack","chevron_back_28","0 0 20 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 28" id="chevron_back_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v28H0z" /><path fill="currentColor" d="M4.56 12.94 13 4.5a1.414 1.414 0 0 1 2 2L7.5 14l7.5 7.5a1.414 1.414 0 0 1-2 2l-8.44-8.44a1.5 1.5 0 0 1 0-2.12" /></g></symbol>',20,28,!1,void 0),Z=k("Icon28ChevronLeftOutline","chevron_left_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" id="chevron_left_outline_28"><path fill="currentColor" d="m12.414 14 5.793-5.793a1 1 0 0 0-1.414-1.414l-6.5 6.5a1 1 0 0 0 0 1.414l6.5 6.5a1 1 0 0 0 1.414-1.414z" /></symbol>',28,28,!1,void 0);function Q(e,n){return e.nav||e.id}const U=u({entering:!1}),Y=({children:e,entering:n})=>{const i=d(U),a=X({entering:i.entering||n});return _(U.Provider,{value:a},e)},ee=u(void 0),ne=({children:e,isBack:n})=>{const i=d(ee),a=void 0!==n?n:i,[o]=p(a);return _(ee.Provider,{value:o},e)};function ie(e){const n=w();return v((()=>{n.current=e})),n.current}const ae=Boolean(V&&window.__isVkuiTesting),oe={supported:!1},re={supported:!1,name:null};V&&!ae&&(("undefined"!=typeof AnimationEvent||"undefined"!=typeof WebKitAnimationEvent)&&(oe.supported=!0),"undefined"!=typeof TransitionEvent?(re.supported=!0,re.name="transitionend"):"undefined"!=typeof WebKitTransitionEvent&&(re.supported=!0,re.name="webkitTransitionEnd"));const te=(e,n,i)=>({swipedToOpposite:n<0,swipeBackTriggered:n>=10,viewportStartEdgeTouched:e<=20,viewportEndEdgeTouched:e>=i-20}),le={View:"_View_14o60_1","View--animated":"_View--animated_14o60_8","View--swiping-back":"_View--swiping-back_14o60_9",View__panel:"_View__panel_14o60_13",View__header:"_View__header_14o60_14",View__panels:"_View__panels_14o60_20","View__panel-in":"_View__panel-in_14o60_33","View__panel-overlay":"_View__panel-overlay_14o60_45","View--ios":"_View--ios_14o60_61","View__panel--swipe-back-prev":"_View__panel--swipe-back-prev_14o60_61","View__panel--swipe-back-success":"_View__panel--swipe-back-success_14o60_61","View__panel--swipe-back-next":"_View__panel--swipe-back-next_14o60_66","View__panel--swipe-back-failed":"_View__panel--swipe-back-failed_14o60_71","View__panel--next":"_View__panel--next_14o60_94","View__panel--prev":"_View__panel--prev_14o60_94","animation-view-prev-back":"_animation-view-prev-back_14o60_1","animation-view-next-forward":"_animation-view-next-forward_14o60_1","View--no-motion":"_View--no-motion_14o60_102","animation-ios-prev-forward":"_animation-ios-prev-forward_14o60_1","animation-ios-next-back":"_animation-ios-next-back_14o60_1","animation-ios-next-forward":"_animation-ios-next-forward_14o60_1","animation-ios-prev-back":"_animation-ios-prev-back_14o60_1","animation-ios-fade-in":"_animation-ios-fade-in_14o60_1","animation-ios-fade-out":"_animation-ios-fade-out_14o60_1","View__panel--active":"_View__panel--active_14o60_175"};let se={};const ce=e=>{var n=e,{activePanel:i,history:a,nav:o,onTransition:r,onSwipeBack:t,onSwipeBackStart:u,onSwipeBackCancel:d,children:b,className:k}=n,N=c(n,["activePanel","history","nav","onTransition","onSwipeBack","onSwipeBackStart","onSwipeBackCancel","children","className"]);const O=Q({nav:o,id:N.id}),j=w(se[O]||{}),S=w(y);v((()=>()=>{O&&(se[O]=j.current)}));const W=w({}),{window:L,document:X}=g(),z=T(),$=x(),D=M(),F=P(),[K,R]=p(!1),[q,G]=p([i]),[J,Z]=p(i),[U,ee]=p(void 0),[ae,ce]=p(null),[_e,ue]=p(null),de=w(!1),[pe,we]=p(void 0),[ve,me]=p(0),[fe,be]=p(0),[he,ke]=p(null),[Ve,ge]=p(null),[ye,Be]=p(null),[Te,xe]=p(!1),Pe=ie(i),Ee=ie(pe),Ce=ie(Te),He=ie(ye),Ne=ie(fe),Oe=ie(Ve),je=ie(r),Se=f.toArray(b).filter((e=>{const n=Q(e.props);return void 0!==n&&q.includes(n)||n===Ve||n===he})),We=!$.transitionMotionEnabled||!D.animate||"vkcom"===F,Ae=!We&&"ios"===F&&$.isWebView&&Boolean(t),Ie=e=>null===e?null:W.current[e],Le=m(((e,n)=>{n&&(j.current[e]=0),ce(null),ue(null),G([i]),Z(i),R(!1),ee(n),S.current=()=>{null==z||z.scrollTo(0,n?j.current[i]:0),r&&r({isBack:n,from:e,to:i})}}),[i,r,z]);E((()=>{S.current(),S.current=y}),[S.current]);const Xe=m((e=>{e&&![le["animation-ios-next-forward"],le["animation-ios-prev-back"],le["animation-view-next-forward"],le["animation-view-prev-back"]].includes(e.animationName)||null===ae||Le(ae,Boolean(U))}),[Le,U,ae]),{waitTransitionFinish:ze}=(()=>{const e=w(null),{document:n}=g(),i=w(y),a=m((()=>{i.current(),i.current=y}),[]);return{waitTransitionFinish:m(((o,r,t)=>{o&&(!(null==n?void 0:n.hidden)&&re.supported&&re.name?(a(),o.addEventListener(re.name,r),i.current=()=>{re.name&&o.removeEventListener(re.name,r)}):((null==e?void 0:e.current)&&clearTimeout(e.current),e.current=setTimeout(r,t)))}),[n,a,e])}})(),Me=C(Xe,"ios"===F?600:300),$e=m((()=>{t&&t()}),[t]),De=m((()=>{d&&d(),ge(null),ke(null),we(!1),Be(null),me(0),be(0)}),[d]),Fe=m((e=>{if(!e||(null==e?void 0:e.propertyName.includes("transform"))&&(null==e?void 0:e.target)===Ie(he))switch(ye){case"fail":De();break;case"success":$e()}}),[De,$e,he,ye]),Ke=e=>{if(!V||!L)return{};const n=e===Ve,i=e===he;if(!n&&!i||ye)return{};let a=`${fe}px`,o=100*fe/L.innerWidth/2-50+"%";return i?{transform:`translate3d(${o}, 0, 0)`,WebkitTransform:`translate3d(${o}, 0, 0)`}:n?{transform:`translate3d(${a}, 0, 0)`,WebkitTransform:`translate3d(${a}, 0, 0)`}:{}},Re=e=>{if(!V||!L)return{};if(!(e===he))return{};const n=1-fe/L.innerWidth,i="success"===ye?0:"fail"===ye?1:null;return{display:"block",opacity:null===i?n:i}};return v((()=>{if(Pe&&Pe!==i&&!Ee&&!Ce){const e=f.toArray(b).map((e=>Q(e.props))).find((e=>e===Pe||e===i))===i;j.current[Pe]=null==z?void 0:z.getScroll().y,We?Le(Pe,e):(H(X),G([Pe,i]),ce(Pe),ue(i),Z(null),R(!0),ee(e),oe.supported||Me.set())}if(Pe&&Pe!==i&&Ee){const e=i,n=Pe;Oe&&(j.current[Oe]=0),ge(null),ke(null),we(!1),Be(null),me(0),be(0),Z(e),G([e]),ee(!0),S.current=()=>{null!==e&&(null==z||z.scrollTo(0,j.current[e])),je&&je({isBack:!0,from:n,to:e})}}!He&&ye&&ze(Ie(he),Fe,"ios"===F?600:300),Pe!==i&&Te&&(xe(!1),ue(null),ce(null),R(!1),G([i]),Z(i))}),[i,J,Me,Te,b,We,X,Le,F,Pe,Ce,je,Oe,He,Ee,z,he,ye,Fe,ze]),v((function(){("fail"===He&&!ye||Ee&&!pe&&0===Ne)&&null!==J&&(null==z||z.scrollTo(0,j.current[J]))}),[He,ye,Ee,pe,Ne,J,z]),_(I.Provider,{value:O},_(A,s(l({Component:"section"},N),{className:h(le.View,"ios"===F&&h(le["View--ios"],"vkuiInternalView--ios"),!We&&K&&le["View--animated"],!We&&pe&&le["View--swiping-back"],We&&le["View--no-motion"],k),onMoveX:Ae?e=>{if(de.current||function(e){var n;const i=e.originalEvent.target;return Boolean(null==(n=null==i?void 0:i.closest)?void 0:n.call(i,"input, textarea, [data-vkui-swipe-back=false]"))}(e))return;const{swipedToOpposite:n,swipeBackTriggered:i,viewportStartEdgeTouched:o}=te(e.startX,e.shiftX,L.innerWidth);if(!K||!i){if(!pe&&a&&a.length>1){if(n)return void(de.current=!0);if(!i)return;if(!o&&(r=e.originalEvent.target,B(r).some((e=>"scrollLeft"in e&&e.scrollLeft>0))))return void(de.current=!0);if(u){if("prevent"===u(J))return void(de.current=!0)}null!==J&&(H(X),j.current[J]=null==z?void 0:z.getScroll().y),we(!0),me(e.startX),ge(J),ke(a.slice(-2)[0])}var r;pe&&(e.shiftX<0?be(0):e.shiftX>L.innerWidth-ve?be(L.innerWidth):be(e.shiftX))}}:"ios"===F?e=>{if(Te)return;const{swipeBackTriggered:n,viewportStartEdgeTouched:i,viewportEndEdgeTouched:a}=te(e.startX,e.shiftX,L.innerWidth);(i||a)&&n&&xe(!0)}:void 0,onEnd:Ae?e=>{var n;if(de.current=!1,pe){const i=fe/e.duration*1e3;0===fe?De():fe>=(null!=(n=L.innerWidth)?n:0)?$e():i>250||fe>=L.innerWidth/2?Be("success"):Be("fail")}}:void 0}),_("div",{className:le.View__panels},Se.map((e=>{var n;const i=Q(e.props),a=K&&i===(U?ae:_e),o=i===ae||i===Ve||i===he||i===_e&&U;return _("div",{className:h(le.View__panel,i===J&&le["View__panel--active"],i===ae&&le["View__panel--prev"],i===_e&&le["View__panel--next"],i===Ve&&le["View__panel--swipe-back-prev"],i===he&&le["View__panel--swipe-back-next"],"success"===ye&&le["View__panel--swipe-back-success"],"fail"===ye&&le["View__panel--swipe-back-failed"]),onAnimationEnd:a?Xe:void 0,ref:e=>void 0!==i&&(W.current[i]=e),style:Ke(i),key:i},"ios"===F&&_("div",{className:le["View__panel-overlay"],style:Re(i)}),_("div",{className:le["View__panel-in"],style:{marginTop:o?-(null!=(n=j.current[i])?n:0):void 0}},_(ne,{isBack:pe||U},_(Y,{entering:i===_e||i===he},e))))})))))},_e="_PanelHeaderButton_1wml9_1",ue="_PanelHeaderButton--primitive_1wml9_19",de="_PanelHeaderBack--ios_1wml9_56",pe="_PanelHeaderButton--notPrimitive_1wml9_65",we="_PanelHeaderButton--hover_1wml9_93",ve="_PanelHeaderButton--active_1wml9_94",me="_PanelHeaderBack--vkcom_1wml9_108",fe="_PanelHeaderBack--has-label_1wml9_108",be="_PanelHeaderBack--sizeX-compact_1wml9_114",he="_PanelHeaderButton__label_1wml9_120",ke={ios:"_PanelHeaderButton--ios_1wml9_30",android:"_PanelHeaderButton--android_1wml9_65",vkcom:"_PanelHeaderButton--vkcom_1wml9_80"},Ve=({primary:e,children:n})=>{const i=P();return"ios"===i?_(K,{Component:"span",level:"3",weight:e?"1":"3"},n):_($,{weight:"vkcom"===i?void 0:"2"},n)},ge=e=>{var n=e,{children:i,primary:a=!1,label:o,className:r}=n,t=c(n,["children","primary","label","className"]);const u=O(i),d=O(o),p=P();let w,v;switch(p){case"ios":w="background",v="opacity";break;case"vkcom":w=we,v=ve;break;default:w="background",v="background"}return _(N,s(l({Component:t.href?"a":"button"},t),{hoverMode:w,activeEffectDelay:200,activeMode:v,className:h("vkuiInternalPanelHeaderButton",_e,ke.hasOwnProperty(p)?ke[p]:ke.android,u&&ue,!u&&!d&&pe,r)}),u?_(Ve,{primary:a},i):i,d?_(Ve,{primary:a,className:he},o):o)},ye=e=>{var n=e,{label:i,className:a,children:o="Назад"}=n,r=c(n,["label","className","children"]);const t=P(),{sizeX:u="none"}=j(),d="vkcom"===t||"ios"===t;return _(ge,s(l({},r),{className:h("compact"===u&&be,"ios"===t&&de,"vkcom"===t&&me,d&&!!i&&fe,a),label:d&&i}),o&&_(S,null,o),(e=>{switch(e){case"ios":return _(J,null);case"vkcom":return _(L,{IconCompact:q,IconRegular:Z});default:return _(L,{IconCompact:R,IconRegular:G})}})(t))},Be=({title:e})=>{const n=W();return b(D,{before:b(ye,{onClick:()=>n.back()}),children:e})};export{Be as P,K as T,ce as V};
