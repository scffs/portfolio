var e=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,t=(o,a,l)=>a in o?e(o,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[a]=l,c=(e,o)=>{for(var a in o||(o={}))n.call(o,a)&&t(e,a,o[a]);if(l)for(var a of l(o))r.call(o,a)&&t(e,a,o[a]);return e},s=(e,l)=>o(e,a(l)),i=(e,o)=>{var a={};for(var t in e)n.call(e,t)&&o.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&l)for(var t of l(e))o.indexOf(t)<0&&r.call(e,t)&&(a[t]=e[t]);return a};import{y as _,c as d,G as m,_ as v,h as f,q as g,p as h}from"./index-3f878bd3.js";import{M as u,S as p,d as b,u as C,c as x,P as w,T as R,o as y,ad as k,ae as I,R as N,f as O,g as D,ac as S,a0 as M,e as E}from"./AppWrapper-86474aa5.js";import{S as P}from"./SimpleCell-3445c73a.js";import{u as j}from"./App-e67a6a65.js";var B=u("Icon20CheckBoxOff","check_box_off_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="check_box_off_20"><path fill="currentColor" fill-rule="evenodd" d="M4.046 2.534C4.788 2.138 5.517 2 7.128 2h5.744c1.61 0 2.34.138 3.082.534.65.348 1.164.862 1.512 1.512.396.742.534 1.471.534 3.082v5.744c0 1.61-.138 2.34-.534 3.082a3.644 3.644 0 0 1-1.512 1.512c-.742.396-1.472.534-3.082.534H7.128c-1.61 0-2.34-.138-3.082-.534a3.644 3.644 0 0 1-1.512-1.512C2.138 15.212 2 14.482 2 12.872V7.128c0-1.61.138-2.34.534-3.082a3.645 3.645 0 0 1 1.512-1.512Zm3.082.966c-1.531 0-1.962.136-2.374.357a2.145 2.145 0 0 0-.897.897c-.22.412-.357.843-.357 2.374v5.744c0 1.531.136 1.962.357 2.374.208.389.508.69.897.897.412.22.843.357 2.374.357h5.744c1.531 0 1.962-.136 2.374-.357.389-.208.69-.508.897-.897.22-.412.357-.843.357-2.374V7.128c0-1.531-.136-1.962-.357-2.374a2.145 2.145 0 0 0-.897-.897c-.412-.22-.843-.357-2.374-.357H7.128Z" clip-rule="evenodd" /></symbol>',20,20,!1,void 0),H=u("Icon20CheckBoxOn","check_box_on_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="check_box_on_20"><path fill="currentColor" fill-rule="evenodd" d="M2.436 4.184C2 5.04 2 6.16 2 8.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 18 6.16 18 8.4 18h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C18 14.96 18 13.84 18 11.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C14.96 2 13.84 2 11.6 2H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748Zm12.2 3.803a.9.9 0 1 0-1.272-1.274l-4.673 4.665-2.055-2.052A.9.9 0 0 0 5.364 10.6l2.691 2.687a.9.9 0 0 0 1.272 0l5.309-5.3Z" clip-rule="evenodd" /></symbol>',20,20,!1,void 0),Z=u("Icon24CheckBoxOff","check_box_off_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_box_off_24"><path fill="currentColor" d="M16.872 2c1.783 0 2.43.186 3.082.534.651.349 1.163.86 1.512 1.512S22 5.345 22 7.128v9.744c0 1.783-.186 2.43-.534 3.082a3.635 3.635 0 0 1-1.512 1.512c-.652.348-1.299.534-3.082.534H7.128c-1.783 0-2.43-.186-3.082-.534s-1.163-.86-1.512-1.512C2.186 19.302 2 18.655 2 16.872V7.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512C4.698 2.186 5.345 2 7.128 2zm.564 2H6.564c-.892 0-1.215.093-1.54.267-.327.174-.583.43-.757.756-.174.326-.267.65-.267 1.54v10.873c0 .892.093 1.215.267 1.54.174.327.43.583.756.757.326.174.65.267 1.54.267h10.873c.892 0 1.215-.093 1.54-.267.327-.174.583-.43.757-.756.174-.326.267-.65.267-1.54V6.563c0-.892-.093-1.215-.267-1.54a1.817 1.817 0 0 0-.756-.757c-.326-.174-.65-.267-1.54-.267z" /></symbol>',24,24,!1,void 0),Y=u("Icon24CheckBoxOn","check_box_on_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_box_on_24"><path fill="currentColor" fill-rule="evenodd" d="M2.436 4.184C2 5.04 2 6.16 2 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 22 6.16 22 8.4 22h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 18.96 22 17.84 22 15.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 2 17.84 2 15.6 2H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748zm15.771 5.023a1 1 0 0 0-1.414-1.414L10 14.586l-2.793-2.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0),z=u("Icon24CheckCircleOff","check_circle_off_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_circle_off_24"><path fill="currentColor" d="M12 0c6.629 0 12 5.373 12 12 0 6.629-5.373 12-12 12-6.629 0-12-5.373-12-12C0 5.371 5.373 0 12 0Zm0 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5Z" /></symbol>',24,24,!1,void 0),A=u("Icon24CheckCircleOn","check_circle_on_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_circle_on_24"><path fill="currentColor" fill-rule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm6.207-14.793a1 1 0 0 0-1.414-1.414L10 14.586l-2.793-2.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l7.5-7.5Z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0),V=u("Icon24Reorder","reorder_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path fill="currentColor" fill-rule="nonzero" d="M21 18a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1Zm0-4a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1Zm0-4a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1ZM3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1Z" /></g></symbol>',24,24,!1,void 0),L=u("Icon24ReorderIos","reorder_ios_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_ios_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" opacity=".1" /><path fill="currentColor" fill-rule="nonzero" d="M2.75 7h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1 0-1.5Zm0 4h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5Zm0 4h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5Z" /></g></symbol>',24,24,!1,void 0);const F="_IconButton_aj7ce_1",T="_IconButton--sizeY-compact_aj7ce_22",W="_IconButton--ios_aj7ce_30",$={none:"_IconButton--sizeY-none_aj7ce_64",[p.COMPACT]:T},q=e=>{var o=e,{children:a,className:l}=o,n=i(o,["children","className"]);const r=b(),{sizeY:t="none"}=C();return _(R,s(c({activeEffectDelay:200,activeMode:"background",Component:n.href?"a":"button"},n),{className:x(F,t!==p.REGULAR&&$[t],r===w.IOS&&W,l)}),a)},G=({IconCompact:e,IconRegular:o})=>{const{sizeY:a}=j();return _(d,null,a.compact&&_(e,{className:a.compact.className}),a.regular&&_(o,{className:a.regular.className}))},K=m({toggleDrag:y}),U="_Removable__content_1gv90_1",X="_Removable__action_1gv90_8",J="_Removable--align-start_1gv90_16",Q="_Removable--ios_1gv90_24",ee="_Removable__remove_1gv90_28",oe="_Removable__remove-in_1gv90_42",ae="_Removable__toggle_1gv90_56",le="_Removable__toggle-in_1gv90_64",ne="_Removable--indent_1gv90_97",re="_Removable__offset_1gv90_114",te=({onRemove:e,removePlaceholder:o,removePlaceholderString:a,children:l})=>{const{window:n}=O(),r=v(null),t=v(!0),[c,s]=f(0);D(n,"click",(()=>{c>0&&s(0)}),{capture:!0});return _("div",{className:x(U,"vkuiInternalRemovable__content"),style:{transform:`translateX(-${null!=c?c:0}px)`},onTransitionEnd:()=>{var e;c>0?null==(e=null==r?void 0:r.current)||e.focus():t.current=!0}},_(q,{hasActive:!1,hasHover:!1,"aria-label":a,className:x(X,ae,"vkuiInternalRemovable__action"),onClick:e=>{if(e.stopPropagation(),!r.current)return;const{offsetWidth:o}=r.current;t.current=!1,s(o)},disabled:c>0},_("i",{className:le,role:"presentation"})),"function"==typeof l?l({isRemoving:c>0}):l,_("span",{className:re,"aria-hidden":!0}),_(R,{Component:"button",hasActive:!1,hasHover:!1,disabled:t.current,getRootRef:r,className:ee,onClick:e},_("span",{className:oe},o)))},ce=e=>{var o=e,{children:a,onRemove:l=y,removePlaceholder:n="Удалить",align:r="center",indent:t=!1}=o,d=i(o,["children","onRemove","removePlaceholder","align","indent"]);const m=b(),v=e=>{e.preventDefault(),l(e)},f=k(n);return _(N,s(c({},d),{baseClassName:x(m===w.IOS&&Q,"start"===r&&J,t&&ne)}),m!==w.IOS&&_("div",{className:x(U,"vkuiInternalRemovable__content")},a,_(q,{activeMode:"opacity",hoverMode:"opacity",className:x(X,"vkuiInternalRemovable__action"),onClick:v,"aria-label":f},_(I,{role:"presentation"})),_("span",{className:re,"aria-hidden":!0})),m===w.IOS&&_(te,{onRemove:v,removePlaceholder:n,removePlaceholderString:f},a))},se="_CellCheckbox_fjdxx_1",ie="_CellCheckbox__icon_fjdxx_7",_e="_CellCheckbox__icon--on_fjdxx_12",de="_CellCheckbox__input_fjdxx_16",me="_CellCheckbox__icon--off_fjdxx_16",ve=()=>_(G,{IconCompact:H,IconRegular:Y}),fe=()=>_(G,{IconCompact:B,IconRegular:Z});const ge=e=>{var o=e,{getRootRef:a,getRef:l,className:n,style:r,type:t="auto"}=o,d=i(o,["getRootRef","getRef","className","style","type"]);const m=function(e){const o=b();return"auto"!==e?e:o===w.IOS||o===w.VKCOM?"circle":"square"}(t),v="circle"===m?z:fe,f="circle"===m?A:ve;return _("span",{className:x(se,n),style:r,ref:a},_(S,s(c({},d),{Component:"input",type:"checkbox",className:de,getRootRef:l})),_("span",{className:x(ie,me),"aria-hidden":!0},_(v,null)),_("span",{className:x(ie,_e),"aria-hidden":!0},_(f,null)))},he="_CellDragger_bme97_1",ue=e=>{var o=e,{onDragStart:a,onDragMove:l,onDragEnd:n,onClick:r,className:t}=o,s=i(o,["onDragStart","onDragMove","onDragEnd","onClick","className"]);const d=b();return _(M,c({className:x(he,t),onStart:a,onMoveY:l,onEnd:n,onClick:e=>{e.preventDefault(),r&&r(e)}},s),d===w.IOS?_(L,null):_(V,null))},pe="_Cell_l5x8w_1",be="_Cell--dragging_l5x8w_10",Ce="_Cell--selectable_l5x8w_21",xe="_Cell--disabled_l5x8w_21",we="_Cell__checkbox_l5x8w_25",Re="_Cell__dragger_l5x8w_26",ye="_Cell__content_l5x8w_32",ke="_Cell--removable_l5x8w_37",Ie="_Cell--ios_l5x8w_59",Ne=e=>{var o=e,{mode:a,onRemove:l=y,removePlaceholder:n="Удалить",onDragFinish:r,before:t,after:m,disabled:v,draggable:u,Component:p,onChange:C,name:R,value:k,checked:I,defaultChecked:N,getRootRef:O,draggerLabel:D="Перенести ячейку",className:S,style:M}=o,j=i(o,["mode","onRemove","removePlaceholder","onDragFinish","before","after","disabled","draggable","Component","onChange","name","value","checked","defaultChecked","getRootRef","draggerLabel","className","style"]);const B="selectable"===a,H="removable"===a,Z=B?"label":p,Y=b(),z=E(O),A=(({rootElRef:e,onDragFinish:o})=>{const[a,l]=f(!1),[n,r]=f([]),[t,c]=f(0),[s,i]=f(0),[_,d]=f(0),[m,v]=f(void 0);return{onDragStart:o=>{var a;const n=e.current;if(!n)return;o.originalEvent.stopPropagation(),o.originalEvent.preventDefault(),l(!0);let t=[];(null==(a=n.parentElement)?void 0:a.childNodes)&&(t=Array.from(n.parentElement.children));const s=t.indexOf(n);c(s),i(s),r(t),d(0)},onDragMove:o=>{o.originalEvent.stopPropagation(),o.originalEvent.preventDefault();const a=e.current;if(a){a.style.transform=`translateY(${o.shiftY}px)`;const e=a.getBoundingClientRect();v(_-o.shiftY<0?"down":"up"),d(o.shiftY),i(t),n.forEach(((o,a)=>{const l=o.getBoundingClientRect(),n=l.height/2,r=e.bottom>l.top+n,c=e.top<l.bottom-n;t<a?(r&&("down"===m&&(o.style.transform="translateY(-100%)"),i((e=>e+1))),c&&"up"===m&&(o.style.transform="translateY(0)")):t>a&&(c&&("up"===m&&(o.style.transform="translateY(100%)"),i((e=>e-1))),r&&"down"===m&&(o.style.transform="translateY(0)"))}))}},onDragEnd:e=>{e.originalEvent.stopPropagation(),e.originalEvent.preventDefault();const[a,_]=[t,s];n.forEach((e=>{e.style.transform=""})),r([]),i(0),c(0),v(void 0),d(0),l(!1),o&&o({from:a,to:_})},dragging:a}})({rootElRef:z,onDragFinish:r}),{dragging:V}=A,L=i(A,["dragging"]),{toggleDrag:F}=g(K);let T,W;if(h((()=>{if(V)return F(!0),()=>F(!1)}),[V,F]),u&&(T=_(ue,c({className:Re,"aria-label":D},L))),B){W=_(ge,c({className:we},{name:R,value:k,onChange:C,defaultChecked:N,checked:I,disabled:v}))}const $=u&&!B||H&&!j.onClick||v,q=!$&&!V,G=x(pe,Y===w.IOS&&Ie,V&&be,H&&ke,"label"===Z&&Ce,v&&xe),U=s(c({hasActive:q,hasHover:q&&!H},j),{className:ye,disabled:$,Component:Z,before:_(d,null,u&&Y!==w.IOS&&T,B&&W,t),after:_(d,null,u&&Y===w.IOS&&T,m)});return H?_(ce,{className:x(G,S),style:M,getRootRef:z,removePlaceholder:n,onRemove:e=>l(e,z.current)},Y===w.IOS?({isRemoving:e})=>_(P,s(c({},U),{disabled:U.disabled||e})):_(P,U)):_("div",{className:x(G,S),style:M,ref:z},_(P,U))};Ne.Checkbox=ge;export{Ne as C,K as L};
