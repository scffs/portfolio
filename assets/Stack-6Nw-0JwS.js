var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,s=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&a(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&a(e,n,t[n]);return e},l=(e,r)=>t(e,n(r)),c=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&r)for(var a of r(e))t.indexOf(a)<0&&i.call(e,a)&&(n[a]=e[a]);return n};import{h as u,T as f,_ as d,e as p,a as m,y as g,p as v,q as h,b as y,s as b,g as w,u as x,D as A,d as R,c as O}from"./index-UZJ5t5iP.js";import{I as C,J as k,F as P,K as S,M as E,N as L,O as T,Q as B,U as I,W as D,X as F,_ as j,Y as _,Z as H,$ as z,a0 as W,a1 as M,a2 as V,a3 as q,a4 as K,a5 as N,a6 as $,a7 as J,a8 as X,a9 as U,aa as Z,ab as G,ac as Y,ad as Q,ae as ee,af as te,ag as ne,ah as re,ai as oe,aj as ie,ak as ae,al as se,am as le,an as ce,ao as ue,ap as fe,aq as de,e as pe,g as me,ar as ge,as as ve,at as he,j as ye,au as be,av as we,aw as xe,n as Ae,ax as Re,ay as Oe,az as Ce,c as ke,D as Pe,r as Se,q as Ee}from"./AppWrapper-f2C8H5bU.js";import{c as Le,i as Te,d as Be,A as Ie,b as De,a as Fe}from"./App-gyvK6TTj.js";import{P as je,V as _e}from"./index-5z2GZa8_.js";import{G as He,P as ze}from"./Group-El_Mz6PY.js";import{H as We}from"./Header-7rzxLbVE.js";import{D as Me}from"./Div-GGyLTOP3.js";import{S as Ve}from"./Subhead-q8q6TSFg.js";import{u as qe,r as Ke,v as Ne}from"./vk-AaJP9XBk.js";import{B as $e}from"./Button-NA22PNap.js";import"./AppearanceProvider-6Ht9gXrP.js";import"./user_circle_outline_28-scoh2bQx.js";import"./Headline-tfL5MIj0.js";function Je(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xe(e,t){if(e){if("string"==typeof e)return Je(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Je(e,t):void 0}}function Ue(e){return function(e){if(Array.isArray(e))return Je(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Xe(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ze(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}function Ge(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){Ze(i,r,o,a,s,"next",e)}function s(e){Ze(i,r,o,a,s,"throw",e)}a(void 0)}))}}function Ye(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function Qe(e,t,n){var r,o=e.reference,i=e.floating,a=W(t),s=B(t),l=I(s),c=F(t),u="y"===a,f=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,p=o[l]/2-i[l]/2;switch(c){case"top":r={x:f,y:o.y-i.height};break;case"bottom":r={x:f,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:d};break;case"left":r={x:o.x-i.width,y:d};break;default:r={x:o.x,y:o.y}}switch(E(t)){case"start":r[s]-=p*(n&&u?-1:1);break;case"end":r[s]+=p*(n&&u?-1:1)}return r}"function"==typeof SuppressedError&&SuppressedError;var et,tt=(et=Ge((function(e,t,n){var r,o,i,a,s,l,c,u,f,d,p,m,g,v,h,y,b,w,x,A,R,O,S,E,L,T;return Ye(this,(function(B){switch(B.label){case 0:return r=n.placement,o=void 0===r?"bottom":r,i=n.strategy,a=void 0===i?"absolute":i,s=n.middleware,l=void 0===s?[]:s,c=n.platform,u=l.filter(Boolean),[4,null==c.isRTL?void 0:c.isRTL(t)];case 1:return f=B.sent(),[4,c.getElementRects({reference:e,floating:t,strategy:a})];case 2:d=B.sent(),p=Qe(d,o,f),m=p.x,g=p.y,v=o,h={},y=0,b=0,B.label=3;case 3:return b<u.length?(w=u[b],x=w.name,[4,(0,w.fn)({x:m,y:g,initialPlacement:o,placement:v,strategy:a,middlewareData:h,rects:d,platform:c,elements:{reference:e,floating:t}})]):[3,11];case 4:return A=B.sent(),R=A.x,O=A.y,S=A.data,E=A.reset,m=null!=R?R:m,g=null!=O?O:g,h=C(P({},h),k({},x,P({},h[x],S))),E&&y<=50?(y++,"object"!=typeof E?[3,9]:(E.placement&&(v=E.placement),E.rects?!0!==E.rects?[3,6]:[4,c.getElementRects({reference:e,floating:t,strategy:a})]:[3,8])):[3,10];case 5:return L=B.sent(),[3,7];case 6:L=E.rects,B.label=7;case 7:d=L,B.label=8;case 8:T=Qe(d,v,f),m=T.x,g=T.y,B.label=9;case 9:return b=-1,[3,10];case 10:return b++,[3,3];case 11:return[2,{x:m,y:g,placement:v,strategy:a,middlewareData:h}]}}))})),function(e,t,n){return et.apply(this,arguments)});function nt(e,t){return rt.apply(this,arguments)}function rt(){return(rt=Ge((function(e,t){var n,r,o,i,a,s,l,c,u,f,d,p,m,g,v,h,y,b,w,x,A,R,O,k,S,E,B,I,D,F,j;return Ye(this,(function(_){switch(_.label){case 0:return void 0===t&&(t={}),r=e.x,o=e.y,i=e.platform,a=e.rects,s=e.elements,l=e.strategy,c=L(t,e),u=c.boundary,f=void 0===u?"clippingAncestors":u,d=c.rootBoundary,p=void 0===d?"viewport":d,m=c.elementContext,g=void 0===m?"floating":m,v=c.altBoundary,h=void 0!==v&&v,y=c.padding,b=T(void 0===y?0:y),w="floating"===g?"reference":"floating",x=s[h?w:g],R=i.getClippingRect,O={},[4,null==i.isElement?void 0:i.isElement(x)];case 1:return null==(n=_.sent())||n?(k=x,[3,5]):[3,2];case 2:return(S=x.contextElement)?[3,4]:[4,null==i.getDocumentElement?void 0:i.getDocumentElement(s.floating)];case 3:S=_.sent(),_.label=4;case 4:k=S,_.label=5;case 5:return[4,R.apply(i,[(O.element=k,O.boundary=f,O.rootBoundary=p,O.strategy=l,O)])];case 6:return A=V.apply(void 0,[_.sent()]),E="floating"===g?C(P({},a.floating),{x:r,y:o}):a.reference,[4,null==i.getOffsetParent?void 0:i.getOffsetParent(s.floating)];case 7:return B=_.sent(),[4,null==i.isElement?void 0:i.isElement(B)];case 8:return _.sent()?[4,null==i.getScale?void 0:i.getScale(B)]:[3,10];case 9:return D=_.sent()||{x:1,y:1},[3,11];case 10:D={x:1,y:1},_.label=11;case 11:return I=D,i.convertOffsetParentRelativeRectToViewportRelativeRect?[4,i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:E,offsetParent:B,strategy:l})]:[3,13];case 12:return j=_.sent(),[3,14];case 13:j=E,_.label=14;case 14:return F=V.apply(void 0,[j]),[2,{top:(A.top-F.top+b.top)/I.y,bottom:(F.bottom-A.bottom+b.bottom)/I.y,left:(A.left-F.left+b.left)/I.x,right:(F.right-A.right+b.right)/I.x}]}}))}))).apply(this,arguments)}var ot=function(e){return{name:"arrow",options:e,fn:function(t){return Ge((function(){var n,r,o,i,a,s,l,c,u,f,d,p,m,g,v,h,y,b,w,x,A,R,O,C,D,F,j,_,H,z,W,M,V,K,N,$,J;return Ye(this,(function(X){switch(X.label){case 0:return n=t.x,r=t.y,o=t.placement,i=t.rects,a=t.platform,s=t.elements,l=t.middlewareData,c=L(e,t)||{},u=c.element,f=c.padding,d=void 0===f?0:f,null==u?[2,{}]:(p=T(d),m={x:n,y:r},g=B(o),v=I(g),[4,a.getDimensions(u)]);case 1:return h=X.sent(),b=(y="y"===g)?"top":"left",w=y?"bottom":"right",x=y?"clientHeight":"clientWidth",A=i.reference[v]+i.reference[g]-m[g]-i.floating[v],R=m[g]-i.reference[g],[4,null==a.getOffsetParent?void 0:a.getOffsetParent(u)];case 2:return O=X.sent(),C=O?O[x]:0,(D=!C)?[3,4]:[4,null==a.isElement?void 0:a.isElement(O)];case 3:D=!X.sent(),X.label=4;case 4:return D&&(C=s.floating[x]||i.floating[v]),F=A/2-R/2,j=C/2-h[v]/2-1,_=S(p[b],j),H=S(p[w],j),z=_,W=C-h[v]-H,M=C/2-h[v]/2+F,V=q(z,M,W),K=!l.arrow&&null!=E(o)&&M!=V&&i.reference[v]/2-(M<z?_:H)-h[v]/2<0,N=K?M<z?M-z:M-W:0,[2,(J={},k(J,g,m[g]+N),k(J,"data",P(($={},k($,g,V),k($,"centerOffset",M-V-N),$),K&&{alignmentOffset:N})),k(J,"reset",K),J)]}}))}))()}}};var it=function(e){return void 0===e&&(e={}),{name:"autoPlacement",options:e,fn:function(t){return Ge((function(){var n,r,o,i,a,s,l,c,u,f,d,p,m,g,v,h,y,b,w,x,A,R,O,C,k,P,S,T,B;return Ye(this,(function(I){switch(I.label){case 0:return i=t.rects,a=t.middlewareData,s=t.placement,l=t.platform,c=t.elements,u=L(e,t),f=u.crossAxis,d=void 0!==f&&f,p=u.alignment,m=u.allowedPlacements,g=void 0===m?_:m,v=u.autoAlignment,h=void 0===v||v,y=j(u,["crossAxis","alignment","allowedPlacements","autoAlignment"]),b=void 0!==p||g===_?function(e,t,n){return(e?Ue(n.filter((function(t){return E(t)===e}))).concat(Ue(n.filter((function(t){return E(t)!==e})))):n.filter((function(e){return F(e)===e}))).filter((function(n){return!e||E(n)===e||!!t&&K(n)!==n}))}(p||null,h,g):g,[4,nt(t,y)];case 1:return w=I.sent(),x=(null==(n=a.autoPlacement)?void 0:n.index)||0,null==(A=b[x])?[2,{}]:(O=[A,i],[4,null==l.isRTL?void 0:l.isRTL(c.floating)]);case 2:return R=D.apply(void 0,O.concat([I.sent()])),s!==A?[2,{reset:{placement:b[0]}}]:(C=[w[F(A)],w[R[0]],w[R[1]]],k=Ue((null==(r=a.autoPlacement)?void 0:r.overflows)||[]).concat([{placement:A,overflows:C}]),(P=b[x+1])?[2,{data:{index:x+1,overflows:k},reset:{placement:P}}]:(S=k.map((function(e){var t=E(e.placement);return[e.placement,t&&d?e.overflows.slice(0,2).reduce((function(e,t){return e+t}),0):e.overflows[0],e.overflows]})).sort((function(e,t){return e[1]-t[1]})),T=S.filter((function(e){return e[2].slice(0,E(e[0])?2:3).every((function(e){return e<=0}))})),(B=(null==(o=T[0])?void 0:o[0])||S[0][0])!==s?[2,{data:{index:x+1,overflows:k},reset:{placement:B}}]:[2,{}]))}}))}))()}}};function at(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function st(e){return $.some((function(t){return e[t]>=0}))}function lt(e,t){return ct.apply(this,arguments)}function ct(){return ct=Ge((function(e,t){var n,r,o,i,a,s,l,c,u,f,d,p,m,g;return Ye(this,(function(v){switch(v.label){case 0:return n=e.placement,r=e.platform,o=e.elements,[4,null==r.isRTL?void 0:r.isRTL(o.floating)];case 1:return i=v.sent(),a=F(n),s=E(n),l="y"===W(n),c=["left","top"].includes(a)?-1:1,u=i&&l?-1:1,f=L(t,e),d="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:P({mainAxis:0,crossAxis:0,alignmentAxis:null},f),p=d.mainAxis,m=d.crossAxis,g=d.alignmentAxis,s&&"number"==typeof g&&(m="end"===s?-1*g:g),[2,l?{x:m*u,y:p*c}:{x:p*c,y:m*u}]}}))})),ct.apply(this,arguments)}function ut(e){const t=e.replace(/auto-|auto/,"");return"start"===t||"end"===t?t:null}function ft(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||Xe(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function dt(e){var t=oe(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=Z(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=Y(n)!==i||Y(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function pt(e){return U(e)?e:e.contextElement}function mt(e){var t=pt(e);if(!Z(t))return G(1);var n=t.getBoundingClientRect(),r=dt(t),o=r.width,i=r.height,a=r.$,s=(a?Y(n.width):n.width)/o,l=(a?Y(n.height):n.height)/i;return s&&Number.isFinite(s)||(s=1),l&&Number.isFinite(l)||(l=1),{x:s,y:l}}var gt=G(0);function vt(e){var t=ne(e);return ue()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:gt}function ht(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);var o=e.getBoundingClientRect(),i=pt(e),a=G(1);t&&(r?U(r)&&(a=mt(r)):a=mt(e));var s=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==ne(e))&&t}(i,n,r)?vt(i):G(0),l=(o.left+s.x)/a.x,c=(o.top+s.y)/a.y,u=o.width/a.x,f=o.height/a.y;if(i)for(var d=ne(i),p=r&&U(r)?ne(r):r,m=d.frameElement;m&&r&&p!==d;){var g=mt(m),v=m.getBoundingClientRect(),h=oe(m),y=v.left+(m.clientLeft+parseFloat(h.paddingLeft))*g.x,b=v.top+(m.clientTop+parseFloat(h.paddingTop))*g.y;l*=g.x,c*=g.y,u*=g.x,f*=g.y,l+=y,c+=b,m=ne(m).frameElement}return V({width:u,height:f,x:l,y:c})}function yt(e){return ht(X(e)).left+te(e).scrollLeft}function bt(e,t,n){var r;if("viewport"===t)r=function(e,t){var n=ne(e),r=X(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;var c=ue();(!c||c&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s,y:l}}(e,n);else if("document"===t)r=function(e){var t=X(e),n=te(e),r=e.ownerDocument.body,o=M(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=M(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+yt(e),s=-n.scrollTop;return"rtl"===oe(r).direction&&(a+=M(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}(X(e));else if(U(t))r=function(e,t){var n=ht(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=Z(e)?mt(e):G(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{var o=vt(e);r=C(P({},t),{x:t.x-o.x,y:t.y-o.y})}return V(r)}function wt(e,t){var n=le(e);return!(n===t||!U(n)||ce(n))&&("fixed"===oe(n).position||wt(n,t))}function xt(e,t,n){var r=Z(t),o=X(t),i="fixed"===n,a=ht(e,!0,i,t),s={scrollLeft:0,scrollTop:0},l=G(0);if(r||!r&&!i)if(("body"!==Q(t)||ee(o))&&(s=te(t)),r){var c=ht(t,!0,i,t);l.x=c.x+t.clientLeft,l.y=c.y+t.clientTop}else o&&(l.x=yt(o));return{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function At(e,t){return Z(e)&&"fixed"!==oe(e).position?t?t(e):e.offsetParent:null}function Rt(e,t){var n=ne(e);if(!Z(e))return n;for(var r=At(e,t);r&&re(r)&&"static"===oe(r).position;)r=At(r,t);return r&&("html"===Q(r)||"body"===Q(r)&&"static"===oe(r).position&&!ie(r))?n:r||ae(e)||n}var Ot=function(){var e=Ge((function(e){var t,n,r,o,i,a,s,l;return Ye(this,(function(c){switch(c.label){case 0:return t=e.reference,n=e.floating,r=e.strategy,o=this.getOffsetParent||Rt,i=this.getDimensions,a={},s=[t],[4,o(n)];case 1:return a.reference=xt.apply(void 0,s.concat([c.sent(),r])),l=[{x:0,y:0}],[4,i(n)];case 2:return[2,(a.floating=P.apply(void 0,l.concat([c.sent()])),a)]}}))}));return function(t){return e.apply(this,arguments)}}();var Ct={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var t=e.rect,n=e.offsetParent,r=e.strategy,o=Z(n),i=X(n);if(n===i)return t;var a={scrollLeft:0,scrollTop:0},s=G(1),l=G(0);if((o||!o&&"fixed"!==r)&&(("body"!==Q(n)||ee(i))&&(a=te(n)),Z(n))){var c=ht(n);s=mt(n),l.x=c.x+n.clientLeft,l.y=c.y+n.clientTop}return{width:t.width*s.x,height:t.height*s.y,x:t.x*s.x-a.scrollLeft*s.x+l.x,y:t.y*s.y-a.scrollTop*s.y+l.y}},getDocumentElement:X,getClippingRect:function(e){var t=e.element,n=e.boundary,r=e.rootBoundary,o=e.strategy,i=Ue("clippingAncestors"===n?function(e,t){var n=t.get(e);if(n)return n;for(var r=se(e,[],!1).filter((function(e){return U(e)&&"body"!==Q(e)})),o=null,i="fixed"===oe(e).position,a=i?le(e):e;U(a)&&!ce(a);){var s=oe(a),l=ie(a);l||"fixed"!==s.position||(o=null),(i?!l&&!o:!l&&"static"===s.position&&o&&["absolute","fixed"].includes(o.position)||ee(a)&&!l&&wt(e,a))?r=r.filter((function(e){return e!==a})):o=s,a=le(a)}return t.set(e,r),r}(t,this._c):[].concat(n)).concat([r]),a=i[0],s=i.reduce((function(e,n){var r=bt(t,n,o);return e.top=M(r.top,e.top),e.right=S(r.right,e.right),e.bottom=S(r.bottom,e.bottom),e.left=M(r.left,e.left),e}),bt(t,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:Rt,getElementRects:Ot,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return dt(e)},getScale:mt,isElement:U,isRTL:function(e){return"rtl"===oe(e).direction}};function kt(e,t,n,r){void 0===r&&(r={});var o=r.ancestorScroll,i=void 0===o||o,a=r.ancestorResize,s=void 0===a||a,l=r.elementResize,c=void 0===l?"function"==typeof ResizeObserver:l,u=r.layoutShift,f=void 0===u?"function"==typeof IntersectionObserver:u,d=r.animationFrame,p=void 0!==d&&d,m=pt(e),g=i||s?Ue(m?se(m):[]).concat(Ue(se(t))):[];g.forEach((function(e){i&&e.addEventListener("scroll",n,{passive:!0}),s&&e.addEventListener("resize",n)}));var v,h=m&&f?function(e,t){var n,r=null,o=X(e);function i(){clearTimeout(n),r&&r.disconnect(),r=null}return function a(s,l){void 0===s&&(s=!1),void 0===l&&(l=1),i();var c=e.getBoundingClientRect(),u=c.left,f=c.top,d=c.width,p=c.height;if(s||t(),d&&p){var m={rootMargin:-fe(f)+"px "+-fe(o.clientWidth-(u+d))+"px "+-fe(o.clientHeight-(f+p))+"px "+-fe(u)+"px",threshold:M(0,S(1,l))||1},g=!0;try{r=new IntersectionObserver(v,C(P({},m),{root:o.ownerDocument}))}catch(e){r=new IntersectionObserver(v,m)}r.observe(e)}function v(e){var t=e[0].intersectionRatio;if(t!==l){if(!g)return a();t?a(!1,t):n=setTimeout((function(){a(!1,1e-7)}),100)}g=!1}}(!0),i}(m,n):null,y=-1,b=null;c&&(b=new ResizeObserver((function(e){var r=ft(e,1)[0];r&&r.target===m&&b&&(b.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame((function(){b&&b.observe(t)}))),n()})),m&&!p&&b.observe(m),b.observe(t));var w=p?ht(e):null;return p&&function t(){var r=ht(e);!w||r.x===w.x&&r.y===w.y&&r.width===w.width&&r.height===w.height||n();w=r,v=requestAnimationFrame(t)}(),n(),function(){g.forEach((function(e){i&&e.removeEventListener("scroll",n),s&&e.removeEventListener("resize",n)})),h&&h(),b&&b.disconnect(),b=null,p&&cancelAnimationFrame(v)}}var Pt="undefined"!=typeof document?g:v;function St(e,t){if(e===t)return!0;if((void 0===e?"undefined":de(e))!==(void 0===t?"undefined":de(t)))return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;var n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!St(e[r],t[r]))return!1;return!0}if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){var i=o[r];if(("_owner"!==i||!e.$$typeof)&&!St(e[i],t[i]))return!1}return!0}return e!=e&&t!=t}function Et(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Lt(e,t){var n=Et(e);return Math.round(t*n)/n}function Tt(e){var t=d(e);return Pt((function(){t.current=e})),t}function Bt(e){void 0===e&&(e={});var t=e.placement,n=void 0===t?"bottom":t,r=e.strategy,o=void 0===r?"absolute":r,i=e.middleware,a=void 0===i?[]:i,s=e.platform,l=e.elements,c=void 0===l?{}:l,g=c.reference,v=c.floating,h=e.transform,y=void 0===h||h,b=e.whileElementsMounted,w=e.open,x=ft(u({x:0,y:0,strategy:o,placement:n,middlewareData:{},isPositioned:!1}),2),A=x[0],R=x[1],O=ft(u(a),2),k=O[0],S=O[1];St(k,a)||S(a);var E=ft(u(null),2),L=E[0],T=E[1],B=ft(u(null),2),I=B[0],D=B[1],F=f((function(e){e!=z.current&&(z.current=e,T(e))}),[T]),j=f((function(e){e!==W.current&&(W.current=e,D(e))}),[D]),_=g||L,H=v||I,z=d(null),W=d(null),M=d(A),V=Tt(b),q=Tt(s),K=f((function(){if(z.current&&W.current){var e={placement:n,strategy:o,middleware:k};q.current&&(e.platform=q.current),function(e,t,n){var r=new Map,o=P({platform:Ct},n),i=C(P({},o.platform),{_c:r});return tt(e,t,C(P({},o),{platform:i}))}(z.current,W.current,e).then((function(e){var t=C(P({},e),{isPositioned:!0});N.current&&!St(M.current,t)&&(M.current=t,p((function(){R(t)})))}))}}),[k,n,o,q]);Pt((function(){!1===w&&M.current.isPositioned&&(M.current.isPositioned=!1,R((function(e){return C(P({},e),{isPositioned:!1})})))}),[w]);var N=d(!1);Pt((function(){return N.current=!0,function(){N.current=!1}}),[]),Pt((function(){if(_&&(z.current=_),H&&(W.current=H),_&&H){if(V.current)return V.current(_,H,K);K()}}),[_,H,K,V]);var $=m((function(){return{reference:z,floating:W,setReference:F,setFloating:j}}),[F,j]),J=m((function(){return{reference:_,floating:H}}),[_,H]),X=m((function(){var e={position:o,left:0,top:0};if(!J.floating)return e;var t=Lt(J.floating,A.x),n=Lt(J.floating,A.y);return y?P(C(P({},e),{transform:"translate("+t+"px, "+n+"px)"}),Et(J.floating)>=1.5&&{willChange:"transform"}):{position:o,left:t,top:n}}),[o,y,J.floating,A.x,A.y]);return m((function(){return C(P({},A),{update:K,refs:$,elements:J,floatingStyles:X})}),[A,K,$,J,X])}const It={ancestorScroll:!0,ancestorResize:!0,elementResize:!1,animationFrame:!1};const Dt=({placement:e="bottom-start",arrowRef:t=null,arrow:n,arrowHeight:r,arrowPadding:o,sameWidth:i,offsetByMainAxis:a=0,offsetByCrossAxis:s=0,customMiddlewares:l,hideWhenReferenceHidden:c})=>m((()=>{const u=function(e){return!e.startsWith("auto")}(e),f=[(d={crossAxis:s,mainAxis:n&&r?a+r:a},void 0===d&&(d=0),{name:"offset",options:d,fn:function(e){return Ge((function(){var t,n,r;return Ye(this,(function(o){switch(o.label){case 0:return t=e.x,n=e.y,[4,lt(e,d)];case 1:return r=o.sent(),[2,{x:t+r.x,y:n+r.y,data:r}]}}))}))()}})];var d;return u?f.push(function(e){return void 0===e&&(e={}),{name:"flip",options:e,fn:function(t){return Ge((function(){var n,r,o,i,a,s,l,c,u,f,d,p,m,g,v,h,y,b,w,x,A,R,O,C,k,P,S,E,T,B,I,_,W,M,V,q,K,$;return Ye(this,(function(J){switch(J.label){case 0:return o=t.placement,i=t.middlewareData,a=t.rects,s=t.initialPlacement,l=t.platform,c=t.elements,u=L(e,t),f=u.mainAxis,d=void 0===f||f,p=u.crossAxis,m=void 0===p||p,g=u.fallbackPlacements,v=u.fallbackStrategy,h=void 0===v?"bestFit":v,y=u.fallbackAxisSideDirection,b=void 0===y?"none":y,w=u.flipAlignment,x=void 0===w||w,A=j(u,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),null!=(n=i.arrow)&&n.alignmentOffset?[2,{}]:(R=F(o),O=F(s)===s,[4,null==l.isRTL?void 0:l.isRTL(c.floating)]);case 1:return C=J.sent(),k=g||(O||!x?[H(s)]:N(s)),g||"none"===b||(P=k).push.apply(P,Ue(z(s,x,b,C))),S=[s].concat(Ue(k)),[4,nt(t,A)];case 2:if(E=J.sent(),T=[],B=(null==(r=i.flip)?void 0:r.overflows)||[],d&&T.push(E[R]),m&&(I=D(o,a,C),T.push(E[I[0]],E[I[1]])),B=Ue(B).concat([{placement:o,overflows:T}]),!T.every((function(e){return e<=0}))){if(M=((null==(_=i.flip)?void 0:_.index)||0)+1,V=S[M])return[2,{data:{index:M,overflows:B},reset:{placement:V}}];if(!(q=null==(W=B.filter((function(e){return e.overflows[0]<=0})).sort((function(e,t){return e.overflows[1]-t.overflows[1]}))[0])?void 0:W.placement))switch(h){case"bestFit":($=null==(K=B.map((function(e){return[e.placement,e.overflows.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0)]})).sort((function(e,t){return e[1]-t[1]}))[0])?void 0:K[0])&&(q=$);break;case"initialPlacement":q=s}if(o!==q)return[2,{reset:{placement:q}}]}return[2,{}]}}))}))()}}}({fallbackAxisSideDirection:"start"})):f.push(it({alignment:ut(e)})),f.push(function(e){return void 0===e&&(e={}),{name:"shift",options:e,fn:function(t){return Ge((function(){var n,r,o,i,a,s,l,c,u,f,d,p,m,g,v,h,y,b,w,x,A,R,O,S,E;return Ye(this,(function(T){switch(T.label){case 0:return n=t.x,r=t.y,o=t.placement,i=L(e,t),a=i.mainAxis,s=void 0===a||a,l=i.crossAxis,c=void 0!==l&&l,u=i.limiter,f=void 0===u?{fn:function(e){return{x:e.x,y:e.y}}}:u,d=j(i,["mainAxis","crossAxis","limiter"]),p={x:n,y:r},[4,nt(t,d)];case 1:return m=T.sent(),g=W(F(o)),v=J(g),h=p[v],y=p[g],s&&(b="y"===v?"bottom":"right",w=h+m["y"===v?"top":"left"],x=h-m[b],h=q(w,h,x)),c&&(A="y"===g?"bottom":"right",R=y+m["y"===g?"top":"left"],O=y-m[A],y=q(R,y,O)),E=f.fn(C(P({},t),(k(S={},v,h),k(S,g,y),S))),[2,C(P({},E),{data:{x:E.x-n,y:E.y-r}})]}}))}))()}}}()),i&&f.push(function(e){return void 0===e&&(e={}),{name:"size",options:e,fn:function(t){return Ge((function(){var n,r,o,i,a,s,l,c,u,f,d,p,m,g,v,h,y,b,w,x,A,R,O,k,T,B,I,D,_;return Ye(this,(function(H){switch(H.label){case 0:return n=t.placement,r=t.rects,o=t.platform,i=t.elements,a=L(e,t),s=a.apply,l=void 0===s?function(){}:s,c=j(a,["apply"]),[4,nt(t,c)];case 1:return u=H.sent(),f=F(n),d=E(n),p="y"===W(n),m=r.floating,g=m.width,v=m.height,"top"!==f&&"bottom"!==f?[3,3]:(h=f,[4,null==o.isRTL?void 0:o.isRTL(i.floating)]);case 2:return y=d===(H.sent()?"start":"end")?"left":"right",[3,4];case 3:y=f,h="end"===d?"top":"bottom",H.label=4;case 4:return b=v-u[h],w=g-u[y],x=!t.middlewareData.shift,A=b,R=w,p?(O=g-u.left-u.right,R=d||x?S(w,O):O):(k=v-u.top-u.bottom,A=d||x?S(b,k):k),x&&!d&&(T=M(u.left,0),B=M(u.right,0),I=M(u.top,0),D=M(u.bottom,0),p?R=g-2*(0!==T||0!==B?T+B:M(u.left,u.right)):A=v-2*(0!==I||0!==D?I+D:M(u.top,u.bottom))),[4,l(C(P({},t),{availableWidth:R,availableHeight:A}))];case 5:return H.sent(),[4,o.getDimensions(i.floating)];case 6:return _=H.sent(),g!==_.width||v!==_.height?[2,{reset:{rects:!0}}]:[2,{}]}}))}))()}}}({apply({rects:e,elements:t}){Object.assign(t.floating.style,{width:`${e.reference.width}px`})}})),l&&f.push(...l),n&&f.push(function(e){return{name:"arrow",options:e,fn:function(t){var n,r="function"==typeof e?e(t):e,o=r.element,i=r.padding;return o&&(n=o,{}.hasOwnProperty.call(n,"current"))?null!=o.current?ot({element:o.current,padding:i}).fn(t):{}:o?ot({element:o,padding:i}).fn(t):{}}}}({element:t,padding:o})),c&&f.push(function(e){return void 0===e&&(e={}),{name:"hide",options:e,fn:function(t){return Ge((function(){var n,r,o,i,a,s,l,c,u;return Ye(this,(function(f){switch(f.label){case 0:switch(n=t.rects,r=L(e,t),o=r.strategy,i=void 0===o?"referenceHidden":o,a=j(r,["strategy"]),i){case"referenceHidden":return[3,1];case"escaped":return[3,3]}return[3,5];case 1:return[4,nt(t,C(P({},a),{elementContext:"reference"}))];case 2:return s=f.sent(),[2,{data:{referenceHiddenOffsets:l=at(s,n.reference),referenceHidden:st(l)}}];case 3:return[4,nt(t,C(P({},a),{altBoundary:!0}))];case 4:return c=f.sent(),[2,{data:{escapedOffsets:u=at(c,n.floating),escaped:st(u)}}];case 5:return[2,{}];case 6:return[2]}}))}))()}}}()),{middlewares:f,strictPlacement:u?e:void 0}}),[s,t,n,r,o,a,i,l,e,c]);function Ft(e){const t=d(e);return me((()=>{t.current=e})),d(((...e)=>(0,t.current)(...e))).current}const jt=(...e)=>function(e,t,n,r=It){const o=r,{elementResize:i=!1}=o,a=c(o,["elementResize"]),u=kt(e,t,n,l(s({},a),{elementResize:!1}));let f=null;if(i){let r=!0;f=new MutationObserver((()=>{r||n(),r=!1})),Z(e)&&f.observe(e,{childList:!0,subtree:!0}),f.observe(t,{childList:!0,subtree:!0})}return()=>{null!==f&&(f.disconnect(),f=null),u()}}(...e,{elementResize:!0}),_t=({trigger:e="click",placement:t="bottom",middlewares:n,hoverDelay:r=0,closeAfterClick:o=!1,disabled:i=!1,disableInteractive:a=!1,disableCloseOnClickOutside:s=!1,disableCloseOnEscKey:l=!1,defaultShown:c=!1,shown:p,onShownChange:g})=>{const v=m((()=>void 0!==p?{shown:p}:void 0),[p]),[h,y]=qe({value:v,disabled:i,defaultValue:{shown:c},onChange:Ft((({shown:e,reason:t})=>{g&&g(e,t)}))}),[b,w]=u((()=>h.shown)),[x,A]=u(!1),R=d(!1),O=d(!1),C=d(!1),k=d(),P=i||s||x||!h.shown,S=a||P,{triggerOnFocus:E,triggerOnClick:L,triggerOnHover:T}=("string"==typeof(B=e)?[B]:B).reduce(((e,t)=>{switch(t){case"click":return e.triggerOnClick=!0,e;case"hover":return e.triggerOnHover=!0,e;case"focus":return e.triggerOnFocus=!0,e;case"manual":return e}}),{triggerOnFocus:!1,triggerOnClick:!1,triggerOnHover:!1});var B;const{placement:I,x:D,y:F,strategy:j,refs:_,middlewareData:H}=Bt({strategy:"fixed",placement:t,middleware:n,whileElementsMounted:jt}),z=f(((e,t)=>{y((n=>n.shown!==e?{shown:e,reason:t}:n))}),[y]),[W,M]="number"==typeof r?[r,r]:r,V=m((()=>ge((()=>z(!0,"hover")),W)),[W,z]),q=m((()=>ge((()=>z(!1,"hover")),M)),[M,z]),K=Ft((()=>{C.current?C.current=!1:z(!0,"focus")})),N=Ft((e=>{if(C.current=!1,O.current=!1,!h.shown)return void clearTimeout(k.current);const t=e.relatedTarget;k.current=setTimeout((function(){const e=_.reference.current;(t||ve(e)!==e)&&(he(_.floating.current,t)||he(e,t)||z(!1,"focus"))}))})),$=Ft((()=>{z(!h.shown,"click")})),J=Ft((()=>{O.current=!0,z(!1,"click")})),X=Ft((()=>{V.cancel(),q.cancel(),O.current||h.shown||V()})),G=Ft((()=>{C.current=!1,O.current=!1,T&&(V.cancel(),q.cancel(),"focus"!==h.reason&&"click"!==h.reason&&q())})),Y=()=>{R.current=!0},Q=()=>{x&&(w(!1),A(!1))},ee=f((()=>{C.current=!0,z(!1,"callback")}),[z]),te=f((()=>!E||C.current),[E]),re=f((()=>{C.current=!0,z(!1,"escape-key")}),[z]);((e,...t)=>{const{document:n}=pe();me((()=>{const r=t.some((e=>e&&null!==e.current));if(!n||!r)return;const o=n=>{const r=n.target;U(r)&&t.some((e=>e&&e.current&&e.current.contains(r)))||e(n)};return n.addEventListener("click",o,{passive:!0,capture:!0}),()=>{n.removeEventListener("click",o,!0)}}),[n,e,...t])})(f((()=>{C.current=!0,z(!1,"click-outside")}),[z]),P?null:_.reference,S?null:_.floating),me((function(){if(!E||!_.reference.current)return;const e=()=>{const e=_.reference.current;!h.shown&&Z(e)&&e===ve(e)&&(C.current=!0)},t=ne(_.reference.current);return t.addEventListener("blur",e),()=>{t.removeEventListener("blur",e)}}),[E,_.reference,h]),me((function(){if(!x&&h.shown!==b)return h.shown?w(!0):R.current&&!x?A(!0):w(!1),()=>{clearTimeout(k.current)}}),[h,b,x]);const oe=d({}),ie=d({style:{}});return b&&(ie.current.style=function(e,t,n,r="max-content",o){const i={position:e,top:n,right:"auto",bottom:"auto",left:t};if(null!==r&&(i.width=r),o){const e=o.hide;e&&e.referenceHidden&&(i.visibility="hidden")}return i}(j,D,F,void 0,H),a&&(ie.current.style.pointerEvents="none")),E&&(oe.current.onFocus=K,oe.current.onBlur=N),L&&(oe.current.onClick=$),T&&(oe.current.onMouseOver=X,o&&!L&&(oe.current.onClick=J),a||(ie.current.onMouseOver=X)),(T||E)&&(oe.current.onMouseLeave=G,a||(ie.current.onMouseLeave=G)),b&&(ie.current.onAnimationStart=Y,ie.current.onAnimationEnd=Q),{placement:I,shown:b,willBeHide:x,refs:_,referenceProps:oe.current,floatingProps:ie.current,middlewareData:H,onClose:ee,onEscapeKeyDown:!b||l?void 0:re,onRestoreFocus:te}},Ht=xe.join(),zt=e=>{var t=e,{Component:n="div",onClose:r,autoFocus:o=!0,restoreFocus:i=!0,timeout:a=0,getRootRef:l,children:u}=t,f=c(t,["Component","onClose","autoFocus","restoreFocus","timeout","getRootRef","children"]);const p=Le(l),{keyboardInput:m}=h(ye),g=d([]);return me((function(){if(!p.current)return;const e=[];p.current.querySelectorAll(Ht).forEach((t=>{const{display:n,visibility:r}=getComputedStyle(t);"none"!==n&&"hidden"!==r&&e.push(t)})),0===e.length&&e.push(p.current),g.current=e}),[u]),me((function(){if(!p.current||!o||!m)return;const e=setTimeout((()=>{if(!p.current||!g.current.length)return;const e=ve(p.current);he(p.current,e)||g.current[0].focus()}),a);return()=>{clearTimeout(e)}}),[o,a,m]),me((function(){if(!p.current||!i)return;const e=ve(p.current);return()=>{("function"==typeof i?i():i)&&Z(e)&&setTimeout((()=>{e&&e.focus()}),a)}}),[i,a]),me((()=>{if(!p.current)return;const e=e=>{switch(be(e)){case we.TAB:{if(!g.current.length)return!1;const t=g.current.length-1,n=g.current.findIndex((t=>t===e.target)),r=-1===n||n===t&&!e.shiftKey;if(r||0===n&&e.shiftKey){e.preventDefault();const n=g.current[r?0:t];return n!==ve(n)&&n.focus(),!1}break}case we.ESCAPE:r&&r()}return!0},t=ne(p.current).document;return t.addEventListener("keydown",e,{capture:!0}),()=>{t.removeEventListener("keydown",e,!0)}}),[r,p]),y(n,s({tabIndex:-1,ref:p},f),u)},Wt=Ae,Mt=(e,t)=>"function"==typeof e[t],Vt=(e,t)=>{const n={};for(const r in e)e.hasOwnProperty(r)&&t.hasOwnProperty(r)&&Mt(e,r)&&Mt(t,r)&&(n[r]=function(...n){t[r].apply(this,n),e[r].apply(this,n)});return n},qt=function(e){const t=new Set;return(e,n="warn")=>{if(!t.has(e)){t.add(e)}}}(),Kt={in:Re["-anim-fade-in"],out:Re["-anim-fade-out"]},Nt={top:Oe["-anim-transform-origin-top"],"top-start":Oe["-anim-transform-origin-top-start"],"top-end":Oe["-anim-transform-origin-top-end"],right:Oe["-anim-transform-origin-right"],"right-start":Oe["-anim-transform-origin-right-start"],"right-end":Oe["-anim-transform-origin-right-end"],bottom:Oe["-anim-transform-origin-bottom"],"bottom-start":Oe["-anim-transform-origin-bottom-start"],"bottom-end":Oe["-anim-transform-origin-bottom-end"],left:Oe["-anim-transform-origin-left"],"left-start":Oe["-anim-transform-origin-left-start"],"left-end":Oe["-anim-transform-origin-left-end"]},$t="_Popover_fegxw_1",Jt="_Popover__in_fegxw_13",Xt="_Popover__in--withStyling_fegxw_17",Ut=e=>{var t=e,{placement:n="bottom-start",trigger:r="click",content:o,hoverDelay:i=150,closeAfterClick:a,offsetByMainAxis:u=8,offsetByCrossAxis:f=0,sameWidth:d,hideWhenReferenceHidden:p,disabled:m,disableInteractive:g,disableCloseOnClickOutside:v,disableCloseOnEscKey:h,defaultShown:x=!1,shown:A,onShownChange:R,usePortal:O=!0,autoFocus:C=!0,restoreFocus:k=!0,className:P,children:S,noStyling:E=!1,zIndex:L="var(--vkui--z_index_popout)",role:T}=t,B=c(t,["placement","trigger","content","hoverDelay","closeAfterClick","offsetByMainAxis","offsetByCrossAxis","sameWidth","hideWhenReferenceHidden","disabled","disableInteractive","disableCloseOnClickOutside","disableCloseOnEscKey","defaultShown","shown","onShownChange","usePortal","autoFocus","restoreFocus","className","children","noStyling","zIndex","role"]);const{middlewares:I,strictPlacement:D}=Dt({placement:n,offsetByMainAxis:u,offsetByCrossAxis:f,sameWidth:d,hideWhenReferenceHidden:p}),{placement:F,shown:j,willBeHide:_,refs:H,referenceProps:z,floatingProps:W,onClose:M,onRestoreFocus:V,onEscapeKeyDown:q}=_t({middlewares:I,placement:D,trigger:r,hoverDelay:i,closeAfterClick:a,disabled:m,disableInteractive:g,disableCloseOnClickOutside:v,disableCloseOnEscKey:h,defaultShown:x,shown:A,onShownChange:R}),[,K]=((e,t,n)=>{const r=Te(e),o=r&&Be(e),i=Le(o?e.ref:r?e.props.getRootRef:void 0,n),a=Vt(t||{},r?e.props:{}),l=o?s(s({ref:i},t),a):r?s(s({getRootRef:i},t),a):void 0;return Wt((()=>{i.current||qt("Кажется, в children передан компонент, который не поддерживает свойство getRootRef. Мы не можем получить ссылку на корневой dom-элемент этого компонента","error")}),[r?e.type:null,i]),[i,r?b(e,l):e]})(S,Ce(z,j,T),H.setReference);let N=null;return j&&(W.style.zIndex=String(L),N=y(Ie,{usePortal:O},y("div",s({ref:H.setFloating,className:$t},W),y(zt,l(s({},B),{role:T,className:ke(Jt,E?void 0:Xt,_?Kt.out:Kt.in,Nt[F],P),autoFocus:!g&&C,restoreFocus:!!k&&V,onClose:q}),"function"==typeof o?o({onClose:M}):o)))),y(w,null,K,N)};var Zt=Pe("Icon16HelpOutline","help_outline_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="help_outline_16"><path fill="currentColor" d="M7.972 9.598c.376 0 .583-.21.662-.572.07-.454.228-.686.932-1.102.747-.449 1.134-1.005 1.134-1.82 0-1.26-1.012-2.102-2.516-2.102-1.139 0-1.986.46-2.325 1.172-.106.206-.159.41-.159.643 0 .41.26.675.678.675.323 0 .561-.15.694-.497.17-.48.519-.74 1.038-.74.583 0 .985.368.985.897 0 .497-.206.767-.89 1.183-.625.373-.948.794-.948 1.432v.075c0 .443.265.756.715.756M8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7.9 3.1a.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9" /></symbol>',16,16,!1,void 0);const Gt=({text:e,tooltipContent:t})=>{const n=x(Ve,{style:{padding:"8px 12px",color:"var(--vkui--color_text_primary)"},children:t});return x(De,{style:{paddingRight:10},children:[e,x(Ut,{style:{maxWidth:220},trigger:"hover",content:n,children:x(Zt,{style:{display:"inline-block",verticalAlign:"middle",position:"relative",top:-1,color:"var(--vkui--color_icon_secondary)",marginLeft:5}})})]})},Yt=()=>x(He,{header:x(We,{children:"Пояснение"}),children:x(Me,{style:{display:"flex"},children:[x(Gt,{text:"Beginner",tooltipContent:"Базовые знания"}),x(Gt,{text:"Intermediate",tooltipContent:"Хорошие знания и небольшой опыт использования"}),x(Gt,{text:"Advanced",tooltipContent:"Продвинутые знания"})]})}),Qt=A((()=>R((()=>import("./CustomList-3B-qTdhU.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27])))),en=O((({id:e,title:t,draggingList:n})=>{const r=localStorage.getItem(`orientation${e}`),[o,i]=u("horizontal"===r);v((()=>{localStorage.setItem(`orientation${e}`,o?"horizontal":"vertical")}),[o]);const a=x(We,{style:{marginBottom:10},mode:"secondary",aside:x($e,{size:"s",appearance:"neutral",onClick:()=>i((e=>!e)),children:"Изменить ориентацию"}),children:t});return x(He,{header:a,children:x(Se,{id:e,children:x(Qt,{items:n,isHorizontal:o})})})})),tn=[{name:"React",logo:Ke,level:"Advanced"},{name:"JavaScript",logo:"/portfolio/assets/js-doKpjSnz.png",level:"Advanced"},{name:"TypeScript",logo:"/portfolio/assets/ts-Za8qJ5Ce.svg",level:"Advanced"},{name:"Redux Toolkit",logo:"/portfolio/assets/redux-5uvrTX3F.svg",level:"Intermediate"},{name:"Vue",logo:"/portfolio/assets/vue-yne2i-25.svg",level:"Beginner"},{name:"Styled Components",logo:"/portfolio/assets/styled-components-UdlZYnKI.svg",level:"Advanced"},{name:"Vite",logo:"/portfolio/assets/vite-I_bapNmn.png",level:"Advanced"},{name:"VKUI",logo:Ne,level:"Intermediate"},{name:"Zustand",logo:"/portfolio/assets/zustand-V8RuwFXU.png",level:"Beginner"}],nn=[{name:"NestJS",logo:"/portfolio/assets/nest-5fSdL9rX.png",level:"Beginner"},{name:"MongoDB",logo:"/portfolio/assets/mongodb-lv-vWJ5w.svg",level:"Intermediate"},{name:"MySQL",logo:"/portfolio/assets/mysql-xyxxlCkq.svg",level:"Intermediate"},{name:"PostgreSQL",logo:"/portfolio/assets/postgresql-aXGs4SYN.svg",level:"Intermediate"},{name:"PHP / Laravel",logo:"/portfolio/assets/php-ZO4jp95W.svg",level:"Intermediate"},{name:"Redis",logo:"/portfolio/assets/redis-khbbmxnm.png",level:"Beginner"},{name:"NodeJS",logo:"/portfolio/assets/nodejs-vI5iq014.svg",level:"Intermediate"},{name:"Fastify",logo:"/portfolio/assets/fastify-dACDeV5C.png",level:"Beginner"},{name:"Bun",logo:"/portfolio/assets/bun-9XwFoxfw.png",level:"Intermediate"},{name:"ElysiaJS",logo:"/portfolio/assets/elysia-N8DnVm3s.svg",level:"Advanced"}],rn=[{name:"Rust",logo:"/portfolio/assets/rust-8q7qfXTL.png",level:"Beginner"},{name:"C# / WPF",logo:"/portfolio/assets/charp-YgPAzVMj.png",level:"Intermediate"},{name:"Docker",logo:"/portfolio/assets/docker-pCMp_MZM.png",level:"Beginner"},{name:"Python",logo:"/portfolio/assets/python-nDUYPbBk.svg",level:"Intermediate"},{name:"Go",logo:"/portfolio/assets/go-AmqhIzzO.png",level:"Too small"},{name:"Kubernetes",logo:"/portfolio/assets/kuber-dj3Qqc8x.png",level:"Beginner"}],on=({id:e})=>{const{panel:t,panelsHistory:n}=Fe(),r=Ee();return x(_e,{id:e,history:n,activePanel:t,onSwipeBack:()=>r.back(),children:x(ze,{nav:e,children:[x(je,{title:"Стэк"}),x(Yt,{}),x(en,{id:"frontend",title:"Frontend",draggingList:tn}),x(en,{id:"backend",title:"Backend",draggingList:nn}),x(en,{id:"other",title:"Other",draggingList:rn})]})})};export{on as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CustomList-3B-qTdhU.js","assets/AppWrapper-f2C8H5bU.js","assets/index-UZJ5t5iP.js","assets/index-3QX3PU_P.css","assets/AppWrapper-Y_k8UgJ9.css","assets/HorizontalCell-q7CHkvT4.js","assets/Avatar-MnvVP6sM.js","assets/App-gyvK6TTj.js","assets/AppearanceProvider-6Ht9gXrP.js","assets/AppearanceProvider-G6tGKT40.css","assets/App-B1bi3cco.css","assets/Avatar-MVQ0NbiQ.css","assets/SimpleCell-aeSQeWXS.js","assets/user_circle_outline_28-scoh2bQx.js","assets/user_circle_outline_28-fD7Ko76S.css","assets/Headline-tfL5MIj0.js","assets/Headline-SUxlPuoi.css","assets/Subhead-q8q6TSFg.js","assets/Subhead-YMIiyTWh.css","assets/SimpleCell-PPnJMCh-.css","assets/Caption-yVOAZsTw.js","assets/Caption-ZGkJl_LD.css","assets/HorizontalCell-xuWszXgO.css","assets/Cell-A80HBsIv.js","assets/Group-El_Mz6PY.js","assets/Group-0hpOQdds.css","assets/Cell-y97jLhQ1.css","assets/CustomList-AV-gb9mu.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}