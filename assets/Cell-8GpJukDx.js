var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,a=(r,t,n)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,c=(e,r)=>{for(var t in r||(r={}))o.call(r,t)&&a(e,t,r[t]);if(n)for(var t of n(r))l.call(r,t)&&a(e,t,r[t]);return e},s=(e,n)=>r(e,t(n)),i=(e,r)=>{var t={};for(var a in e)o.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&n)for(var a of n(e))r.indexOf(a)<0&&l.call(e,a)&&(t[a]=e[a]);return t};import{f as u,A as d,b as m,h as g,_,T as h,g as p}from"./index-fPiGgf0a.js";import{D as v,d as f,u as y,aE as b,c as C,T as x,af as w,aH as R,aI as P,g as k,aJ as I,aK as E,aL as N,R as q,n as B,e as D,f as T}from"./AppWrapper-gQnErQ_R.js";import{c as A}from"./App-MfM_POU_.js";import{S}from"./SimpleCell-IDggWhf1.js";import{A as O,T as H}from"./Group-eFBfZEvM.js";const z=e=>null==e||"boolean"==typeof e||"{}"===JSON.stringify(e)?"":e.toString(),M=e=>e instanceof Array||u(e)?d.toArray(e).reduce(((e,r)=>{let t="";const n=u(r),o=n&&"children"in r.props;return t=n&&o?M(r.props.children):n&&!o?"":z(r),e.concat(t)}),""):z(e);var F=v("Icon20CheckBoxOff","check_box_off_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="check_box_off_20"><path fill="currentColor" fill-rule="evenodd" d="M4.046 2.534C4.788 2.138 5.517 2 7.128 2h5.744c1.61 0 2.34.138 3.082.534.65.348 1.164.862 1.512 1.512.396.742.534 1.471.534 3.082v5.744c0 1.61-.138 2.34-.534 3.082a3.644 3.644 0 0 1-1.512 1.512c-.742.396-1.472.534-3.082.534H7.128c-1.61 0-2.34-.138-3.082-.534a3.644 3.644 0 0 1-1.512-1.512C2.138 15.212 2 14.482 2 12.872V7.128c0-1.61.138-2.34.534-3.082a3.645 3.645 0 0 1 1.512-1.512m3.082.966c-1.531 0-1.962.136-2.374.357a2.145 2.145 0 0 0-.897.897c-.22.412-.357.843-.357 2.374v5.744c0 1.531.136 1.962.357 2.374.208.389.508.69.897.897.412.22.843.357 2.374.357h5.744c1.531 0 1.962-.136 2.374-.357.389-.208.69-.508.897-.897.22-.412.357-.843.357-2.374V7.128c0-1.531-.136-1.962-.357-2.374a2.145 2.145 0 0 0-.897-.897c-.412-.22-.843-.357-2.374-.357H7.128" clip-rule="evenodd" /></symbol>',20,20,!1,void 0),j=v("Icon20CheckBoxOn","check_box_on_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="check_box_on_20"><path fill="currentColor" fill-rule="evenodd" d="M2.436 4.184C2 5.04 2 6.16 2 8.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 18 6.16 18 8.4 18h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C18 14.96 18 13.84 18 11.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C14.96 2 13.84 2 11.6 2H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748m12.2 3.803a.9.9 0 1 0-1.272-1.274l-4.673 4.665-2.055-2.052A.9.9 0 0 0 5.364 10.6l2.691 2.687a.9.9 0 0 0 1.272 0l5.309-5.3" clip-rule="evenodd" /></symbol>',20,20,!1,void 0),Y=v("Icon24CheckBoxOff","check_box_off_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_box_off_24"><path fill="currentColor" d="M16.872 2c1.783 0 2.43.186 3.082.534.651.349 1.163.86 1.512 1.512S22 5.345 22 7.128v9.744c0 1.783-.186 2.43-.534 3.082a3.635 3.635 0 0 1-1.512 1.512c-.652.348-1.299.534-3.082.534H7.128c-1.783 0-2.43-.186-3.082-.534s-1.163-.86-1.512-1.512C2.186 19.302 2 18.655 2 16.872V7.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512C4.698 2.186 5.345 2 7.128 2zm.564 2H6.564c-.892 0-1.215.093-1.54.267-.327.174-.583.43-.757.756-.174.326-.267.65-.267 1.54v10.873c0 .892.093 1.215.267 1.54.174.327.43.583.756.757.326.174.65.267 1.54.267h10.873c.892 0 1.215-.093 1.54-.267.327-.174.583-.43.757-.756.174-.326.267-.65.267-1.54V6.563c0-.892-.093-1.215-.267-1.54a1.817 1.817 0 0 0-.756-.757c-.326-.174-.65-.267-1.54-.267z" /></symbol>',24,24,!1,void 0),$=v("Icon24CheckBoxOn","check_box_on_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_box_on_24"><path fill="currentColor" fill-rule="evenodd" d="M2.436 4.184C2 5.04 2 6.16 2 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 22 6.16 22 8.4 22h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 18.96 22 17.84 22 15.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 2 17.84 2 15.6 2H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748zm15.771 5.023a1 1 0 0 0-1.414-1.414L10 14.586l-2.793-2.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0),L=v("Icon24CheckCircleOff","check_circle_off_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_circle_off_24"><path fill="currentColor" d="M12 0c6.629 0 12 5.373 12 12 0 6.629-5.373 12-12 12-6.629 0-12-5.373-12-12C0 5.371 5.373 0 12 0m0 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5" /></symbol>',24,24,!1,void 0),V=v("Icon24CheckCircleOn","check_circle_on_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_circle_on_24"><path fill="currentColor" fill-rule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12m6.207-14.793a1 1 0 0 0-1.414-1.414L10 14.586l-2.793-2.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l7.5-7.5" clip-rule="evenodd" /></symbol>',24,24,!1,void 0),J=v("Icon24Reorder","reorder_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path fill="currentColor" fill-rule="nonzero" d="M21 18a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1m0-4a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1m0-4a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1" /></g></symbol>',24,24,!1,void 0),U=v("Icon24ReorderIos","reorder_ios_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_ios_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" opacity=".1" /><path fill="currentColor" fill-rule="nonzero" d="M2.75 7h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1 0-1.5m0 4h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5m0 4h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5" /></g></symbol>',24,24,!1,void 0);const W="_IconButton_c8hqc_1",G="_IconButton--ios_c8hqc_30",K={none:"_IconButton--sizeY-none_c8hqc_65",compact:"_IconButton--sizeY-compact_c8hqc_22"},X=e=>{var r=e,{label:t,children:n,className:o}=r,l=i(r,["label","children","className"]);const a=f(),{sizeY:u="none"}=y();return m(x,s(c({activeEffectDelay:200,activeMode:"background",Component:l.href?"a":"button"},l),{className:C(W,"regular"!==u&&K[u],"ios"===a&&G,o)}),t&&m(b,null,t),n)},Q="data-draggable-placeholder",Z={[Q]:"true"},ee=50,re=e=>{let r=!1;const t=(e=>{let r=[],t=null;const n=(...n)=>{r=n,t||(t=requestAnimationFrame((()=>{t=null,e(...r)})))};return n.cancel=()=>{t&&(cancelAnimationFrame(t),t=null)},n})((function(n){const{shouldScrolling:o,y:l}=n();o?(r=!0,e.scrollBy(0,l),t(n)):(r=!1,t.cancel())}));return{tryAutoScroll:e=>{t(e)},stop:()=>{r=!1,t.cancel()},get isRunning(){return r}}},te=(e,r)=>{requestAnimationFrame((()=>{e.style.transform=`translateY(${r}px)`}))},ne=([{el:e,draggingElRect:{height:r}},t])=>{requestAnimationFrame((()=>{"up"===t?(e.style.setProperty("transition","transform 0.3s ease-in 0s"),e.style.removeProperty("transform")):(e.style.setProperty("transition","transform 0.3s ease-out 0s"),e.style.setProperty("transform",`translateY(${r}px)`))}))},oe=({el:e})=>{e.firstElementChild&&e.firstElementChild.remove()},le=({el:e,shifted:r,draggingElRect:t})=>{const{height:n}=t;requestAnimationFrame((()=>{e.style.setProperty("pointer-events","none"),e.style.setProperty("transition","none 0s ease 0s"),r&&e.style.setProperty("transform",`translateY(${n}px)`)}))},ae=({el:e})=>{requestAnimationFrame((()=>{e.style.removeProperty("pointer-events"),e.style.removeProperty("transition"),e.style.removeProperty("transform")}))},ce=({elRef:e,onDragFinish:r})=>{const[t,n]=g(!1),o=_(0),l=_(0),a=_(null),c=_(0),s=_(null),i=_(void 0),u=(e,r)=>{const t=e-r;return t<0?"down":t>0?"up":i.current},d=_(-1),m=_(-1),p=_(null),v=_(null),f=_([]),y=e=>{const r=I(e,!0),{children:t}=e.parentElement||{children:[]};Array.prototype.forEach.call(t,((t,n)=>{t===e?(d.current=m.current=n,p.current={index:n,el:t,draggingElRect:r}):null!==t.getAttribute(Q)?v.current={index:n,el:t,draggingElRect:r}:f.current.push({index:n,el:t,shifted:-1!==d.current&&d.current<n,draggingElRect:r})})),v.current&&(({el:e,draggingElRect:r})=>{if(e.firstElementChild)return;const{width:t,height:n}=r,o=e.cloneNode();o.style.setProperty("display","block"),o.style.setProperty("width",`${t}px`),o.style.setProperty("height",`${n}px`),o.style.setProperty("pointer-events","none"),e.appendChild(o)})(v.current),p.current&&(({el:e,draggingElRect:r})=>{const{top:t,left:n,width:o,height:l}=r;requestAnimationFrame((()=>{e.style.setProperty("pointer-events","none"),e.style.setProperty("position","fixed"),e.style.setProperty("top",`${t}px`),e.style.setProperty("left",`${n}px`),e.style.setProperty("width",`${o}px`),e.style.setProperty("height",`${l}px`),e.style.setProperty("z-index","var(--vkui_internal--z_index_cell_dragging)"),e.style.setProperty("box-sizing","border-box"),e.style.setProperty("transform","translateY(0)")}))})(p.current),f.current.forEach(le)},b=()=>{v.current&&oe(v.current),p.current&&(({el:e})=>{requestAnimationFrame((()=>{e.style.removeProperty("pointer-events"),e.style.removeProperty("position"),e.style.removeProperty("top"),e.style.removeProperty("left"),e.style.removeProperty("width"),e.style.removeProperty("height"),e.style.removeProperty("z-index"),e.style.removeProperty("box-sizing"),e.style.removeProperty("transform")}))})(p.current),f.current.forEach(ae),f.current=[],v.current=p.current=null;const e={from:d.current,to:m.current};return d.current=m.current=-1,e},C=e=>{const r=[],t=[];return m.current=d.current,f.current.forEach((n=>{const{isOverEl:o,isUnderEl:l}=((e,r)=>{const t=r.height/2;return{isUnderEl:e<=r.bottom-t,isOverEl:e>=r.top+t}})(e,I(n.el));d.current<n.index?(o&&(m.current=m.current+1,"down"===i.current&&n.shifted&&(n.shifted=!1,r.push([n,"up"]))),l&&("up"!==i.current||n.shifted||(n.shifted=!0,t.push([n,"down"])))):d.current>n.index&&(l&&(m.current=m.current-1,"up"!==i.current||n.shifted||(n.shifted=!0,r.push([n,"down"]))),o&&"down"===i.current&&n.shifted&&(n.shifted=!1,t.push([n,"up"])))})),[r,t]},x=(e,r)=>{e.forEach(ne),r.forEach(ne)},N=_(null),q=()=>{N.current&&(clearTimeout(N.current),N.current=null)},B=()=>{s.current&&s.current.tryAutoScroll((()=>a.current?((e,r)=>{const t=Math.floor(w(r).scrollTop),{relative:n,edges:o}=R(r),l=n.height,a=t>0,c=t<P(r)-l,[s,i]=o.y,u=e-s,d=i-e,m=u<=ee,g=d<=ee,_={shouldScrolling:a&&m&&u>=-30||c&&g&&d>=-30,y:0};return m?_.y=(ee-u)/ee*-1*10:g&&(_.y=(ee-d)/ee*10),_})(o.current,a.current):{shouldScrolling:!1,y:0}))},D=h((()=>{if(!e.current||!a.current)return;const r=w(a.current).scrollTop;i.current=u(c.current,r);const t=c.current-r,n=o.current+t;c.current=r;const[l,s]=C(n);x(l,s)}),[e]);return k((function(){const e=a.current;if(t&&e)return e.addEventListener("scroll",D),()=>{e&&e.removeEventListener("scroll",D)}}),[t,D]),k((()=>function(){v.current&&oe(v.current)}),[]),{dragging:t,onDragStart:e=>{e.originalEvent.stopPropagation(),e.originalEvent.preventDefault()},onDragMove:r=>{r.originalEvent.stopPropagation(),r.originalEvent.preventDefault();const d=e.current;if(d)if(t)if(i.current=u(l.current,r.shiftY),l.current=r.shiftY,o.current=r.clientY,s.current&&s.current.isRunning)te(d,l.current);else{const[e,r]=C(o.current);te(d,l.current),x(e,r),q(),N.current=setTimeout((()=>{N.current=null,B()}),300)}else n((e=>e||((e=>{const r=E(e);r&&(a.current=r,c.current=w(r).scrollTop,s.current=re(a.current))})(d),y(d),!0)))},onDragEnd:e=>{var u;if(e.originalEvent.stopPropagation(),e.originalEvent.preventDefault(),q(),c.current=0,null==(u=s.current)||u.stop(),a.current=s.current=null,o.current=l.current=0,i.current=void 0,t){const e=b();r&&r(e),n(!1)}}}},se="_Removable__content_1wxgq_1",ie="_Removable__action_1wxgq_9",ue="_Removable--align-start_1wxgq_17",de="_Removable--ios_1wxgq_25",me="_Removable__remove_1wxgq_29",ge="_Removable__remove-in_1wxgq_44",_e="_Removable__toggle_1wxgq_58",he="_Removable__toggle-in_1wxgq_67",pe="_Removable--indent_1wxgq_99",ve="_Removable__offset_1wxgq_116",fe=({onRemove:e,removePlaceholder:r,removePlaceholderString:t,children:n,toggleButtonTestId:o,removeButtonTestId:l})=>{const{window:a}=D(),c=_(null),s=_(!0),[i,u]=g(0);T(a,"click",(()=>{i>0&&u(0)}),{capture:!0});return m("div",{className:C(se,"vkuiInternalRemovable__content"),style:{transform:`translateX(-${null!=i?i:0}px)`},onTransitionEnd:()=>{var e;i>0?null==(e=null==c?void 0:c.current)||e.focus():s.current=!0}},m(X,{hasActive:!1,hasHover:!1,className:C(ie,_e,"vkuiInternalRemovable__action"),onClick:e=>{if(e.stopPropagation(),!c.current)return;const{offsetWidth:r}=c.current;s.current=!1,u(r)},disabled:i>0,"data-testid":o},m(b,null,t),m("i",{className:he,role:"presentation"})),"function"==typeof n?n({isRemoving:i>0}):n,m("span",{className:ve,"aria-hidden":!0}),m(x,{Component:"button",hasActive:!1,hasHover:!1,disabled:s.current,getRootRef:c,className:me,onClick:e,"data-testid":l},m("span",{className:ge},r)))},ye=e=>{var r=e,{children:t,onRemove:n=B,removePlaceholder:o="Удалить",align:l="center",indent:a=!1,toggleButtonTestId:u,removeButtonTestId:d}=r,g=i(r,["children","onRemove","removePlaceholder","align","indent","toggleButtonTestId","removeButtonTestId"]);const _=f(),h=e=>{e.preventDefault(),n(e)},p=M(o);return m(q,s(c({},g),{baseClassName:C("ios"===_&&de,"start"===l&&ue,a&&pe)}),"ios"!==_&&m("div",{className:C(se,"vkuiInternalRemovable__content")},"function"==typeof t?t({isRemoving:!1}):t,m(X,{activeMode:"opacity",hoverMode:"opacity",className:C(ie,"vkuiInternalRemovable__action"),onClick:h,label:p,"data-testid":d},m(N,{role:"presentation"})),m("span",{className:ve,"aria-hidden":!0})),"ios"===_&&m(fe,{onRemove:h,removePlaceholder:o,removePlaceholderString:p,toggleButtonTestId:u,removeButtonTestId:d},t))},be="_CellCheckbox_11esi_1",Ce="_CellCheckbox__icon_11esi_7",xe="_CellCheckbox__icon--on_11esi_12",we="_CellCheckbox__input_11esi_16",Re="_CellCheckbox__icon--off_11esi_16",Pe=()=>m(O,{IconCompact:j,IconRegular:$}),ke=()=>m(O,{IconCompact:F,IconRegular:Y});const Ie=e=>{var r=e,{getRootRef:t,getRef:n,className:o,style:l,type:a="auto"}=r,u=i(r,["getRootRef","getRef","className","style","type"]);const d=function(e){const r=f();return"auto"!==e?e:"ios"===r||"vkcom"===r?"circle":"square"}(a),g="circle"===d?L:ke,_="circle"===d?V:Pe;return m("span",{className:C(be,o),style:l,ref:t},m(b,s(c({},u),{Component:"input",type:"checkbox",className:we,getRootRef:n})),m("span",{className:C(Ce,Re),"aria-hidden":!0},m(g,null)),m("span",{className:C(Ce,xe),"aria-hidden":!0},m(_,null)))},Ee="_CellDragger_1eaz7_2",Ne="_CellDragger__icon_1eaz7_11",qe=e=>{var r=e,{elRef:t,disabled:n,className:o,onDragStateChange:l,onDragFinish:a,children:s}=r,u=i(r,["elRef","disabled","className","onDragStateChange","onDragFinish","children"]);const d="ios"===f()?U:J,{dragging:g,onDragStart:_,onDragMove:h,onDragEnd:p}=ce({elRef:t,onDragFinish:a});return k((()=>{l&&l(g)}),[g,l]),m(H,c({className:C(Ee,o),onStart:n?void 0:_,onMoveY:n?void 0:h,onEnd:n?void 0:p},u),s&&m(b,null,s),m(d,{className:Ne}))},Be="Перенести ячейку",De="_Cell_1nq1d_1",Te="_Cell--dragging_1nq1d_5",Ae="_Cell--selectable_1nq1d_10",Se="_Cell--disabled_1nq1d_10",Oe="_Cell__checkbox_1nq1d_14",He="_Cell__dragger_1nq1d_15",ze="_Cell__content_1nq1d_22",Me="_Cell--removable_1nq1d_27",Fe="_Cell--ios_1nq1d_52",je=e=>{var r=e,{mode:t,onRemove:n=B,removePlaceholder:o="Удалить",onDragFinish:l,before:a,after:u,disabled:d,draggable:_,Component:h,onChange:v,name:y,value:b,checked:x,defaultChecked:w,getRootRef:R,draggerLabel:P=Be,className:k,style:I,toggleButtonTestId:E,removeButtonTestId:N}=r,q=i(r,["mode","onRemove","removePlaceholder","onDragFinish","before","after","disabled","draggable","Component","onChange","name","value","checked","defaultChecked","getRootRef","draggerLabel","className","style","toggleButtonTestId","removeButtonTestId"]);const[D,T]=g(!1),O="selectable"===t,H="removable"===t,z=O?"label":h,M=f(),F=A(R),j=_?m(qe,{elRef:F,className:He,disabled:d,onDragStateChange:T,onDragFinish:l},P):null;let Y;if(O){Y=m(Ie,c({className:Oe},{name:y,value:b,defaultChecked:w,checked:x,disabled:d,onChange:v}))}const $=_&&!O||H&&!q.onClick||d,L=!$&&!D,V=C(De,D&&Te,"ios"===M&&Fe,H&&Me,"label"===z&&Ae,d&&Se),J=s(c({hasActive:L,hasHover:L&&!H},q),{className:ze,Component:z,before:m(p,null,_&&"ios"!==M&&j,O&&Y,a),after:m(p,null,_&&"ios"===M&&j,u)});return q.onClick&&(J.disabled=$),H?m(ye,{className:C(V,k),style:I,getRootRef:F,removePlaceholder:o,onRemove:e=>n(e,F.current),toggleButtonTestId:E,removeButtonTestId:N},"ios"===M?({isRemoving:e})=>(J.onClick&&(J.disabled=e||!J.disabled),m(S,J)):m(S,J)):m("div",{className:C(V,k),style:I,ref:F},m(S,J))};je.Checkbox=Ie;export{je as C,Z as D};
