import{L as e,$ as a,l as t,_ as r,c as i,d as s,e as n,g as l,P as o,T as c,a0 as d,I as u,K as m,X as v,Y as b,Z as h,G as f,a1 as _}from"./index-99b15b47.js";import{r as x}from"./react-37698f52.js";import{u as p,a as j}from"./App-e440e7c4.js";import{g as I}from"./getNavId-aa412334.js";import{F as k,I as y,a as T,b as E}from"./Footnote-97fa1dae.js";var N=e("Icon28NewsfeedOutline","newsfeed_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="newsfeed_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M17.59 3c2.183 0 3.233.203 4.324.786a5.543 5.543 0 0 1 2.3 2.3c.583 1.091.786 2.14.786 4.324v7.18c0 2.183-.203 3.233-.786 4.324a5.543 5.543 0 0 1-2.3 2.3c-1.091.583-2.14.786-4.324.786h-7.18c-2.183 0-3.233-.203-4.324-.786a5.543 5.543 0 0 1-2.3-2.3C3.203 20.823 3 19.774 3 17.59v-7.18c0-2.183.203-3.233.786-4.324a5.543 5.543 0 0 1 2.3-2.3C7.177 3.203 8.226 3 10.41 3h7.18ZM5 11 5 17.59c0 1.881.142 2.62.55 3.38.342.641.839 1.138 1.48 1.48.76.408 1.499.55 3.38.55h7.18c1.881 0 2.62-.142 3.38-.55a3.543 3.543 0 0 0 1.48-1.48c.408-.76.55-1.499.55-3.38L22.999 11h-18ZM17.59 5h-7.18c-1.881 0-2.62.142-3.38.55-.641.342-1.138.839-1.48 1.48-.286.533-.441 1.056-.509 1.97H22.96c-.068-.914-.223-1.437-.509-1.97a3.543 3.543 0 0 0-1.48-1.48c-.76-.408-1.499-.55-3.38-.55Z" /></g></symbol>',28,28,!1,void 0),w=function(e){var r=e.children,i=e.initialScroll,s=e.saveScroll,n=x.useContext(a),l=n.getScroll,o=n.scrollTo;return t((function(){return"number"==typeof i&&o(0,i),function(){return s(l().y)}}),[]),x.createElement(x.Fragment,null,r)},C=function(e){var a,t=x.useRef({}).current,l=e.activeStory,o=e.tabbar,c=e.children,d=e.className,u=r(e,["activeStory","tabbar","children","className"]),m=null!==(a=x.Children.toArray(c).find((function(e){return x.isValidElement(e)&&I(e.props)===l})))&&void 0!==a?a:null;return x.createElement("div",i(n({},u),{className:s("vkuiEpic",o&&"vkuiInternalEpic--hasTabbar",d)}),x.createElement(w,{key:l,initialScroll:t[l]||0,saveScroll:function(e){return t[l]=e}},m),o)},g=function(e,a){switch(e){case"horizontal":return"vkuiInternalTabbar--layout-horizontal";case"vertical":return"vkuiInternalTabbar--layout-vertical";default:return x.Children.count(a)>2?g("vertical",[]):g("horizontal",[])}},S=function(e){var a=e.children,t=e.shadow,i=void 0===t||t,c=e.mode,d=e.className,u=r(e,["children","shadow","mode","className"]),m=l();return x.createElement("div",n({className:s("vkuiInternalTabbar","vkuiTabbar",m===o.IOS&&"vkuiTabbar--ios",g(c,a),i&&"vkuiTabbar--shadow",d)},u),a)},O=function(e){var a=e.children,t=e.selected,u=e.indicator,m=e.text,v=e.href,b=e.Component,h=void 0===b?v?"a":"button":b,f=e.disabled,_=e.className,p=e.getRootRef,j=r(e,["children","selected","indicator","text","href","Component","disabled","className","getRootRef"]),I=l();return x.createElement(h,i(n({},j),{ref:p,disabled:f,href:v,className:s("vkuiTabbarItem",I===o.IOS&&"vkuiTabbarItem--ios",I===o.ANDROID&&"vkuiTabbarItem--android",t&&"vkuiTabbarItem--selected",_)}),x.createElement(c,{role:"presentation",Component:"div",disabled:f,activeMode:I===o.IOS?"vkuiTabbarItem__tappable--active":"background",activeEffectDelay:I===o.IOS?0:300,hasHover:!1,className:"vkuiTabbarItem__tappable"}),x.createElement("div",{className:"vkuiTabbarItem__in"},x.createElement("div",{className:"vkuiTabbarItem__icon"},a,x.createElement("div",{className:"vkuiInternalTabbarItem__label"},d(u)&&u)),m&&x.createElement(k,{Component:"div",className:"vkuiTabbarItem__text",weight:"2"},m)))};const R=({onStoryChange:e,activeView:a})=>{const{viewWidth:t}=p();return t.tabletMinus&&u.jsxs(S,{className:t.tabletMinus.className,children:[u.jsx(O,{onClick:()=>e(m),selected:a===m,"data-story":m,text:"Обо мне",children:u.jsx(y,{})}),u.jsx(O,{onClick:()=>e(v),selected:a===v,"data-story":v,text:"Стэк технологий",children:u.jsx(N,{})}),u.jsx(O,{onClick:()=>e(b),selected:a===b,"data-story":b,text:"Проекты",children:u.jsx(T,{})}),u.jsx(O,{onClick:()=>e(h),selected:a===h,"data-story":h,text:"Связаться со мной",children:u.jsx(E,{})})]})},z=x.lazy((()=>f((()=>import("./Contacts-96d9742f.js")),["assets/Contacts-96d9742f.js","assets/index-99b15b47.js","assets/react-37698f52.js","assets/index-152d0029.css","assets/index-115039f0.js","assets/useWaitTransitionFinish-e4f41df5.js","assets/getNavId-aa412334.js","assets/App-e440e7c4.js","assets/PanelHeaderButton-a5396a9b.js","assets/Group-5c818549.js","assets/Footnote-97fa1dae.js","assets/Placeholder-412883d8.js","assets/Headline-024401dc.js"]))),M=x.lazy((()=>f((()=>import("./Profile-2cf5ec00.js")),["assets/Profile-2cf5ec00.js","assets/index-99b15b47.js","assets/react-37698f52.js","assets/index-152d0029.css","assets/index-115039f0.js","assets/useWaitTransitionFinish-e4f41df5.js","assets/getNavId-aa412334.js","assets/App-e440e7c4.js","assets/PanelHeaderButton-a5396a9b.js","assets/Group-5c818549.js","assets/Footnote-97fa1dae.js"]))),A=x.lazy((()=>f((()=>import("./Projects-48904935.js")),["assets/Projects-48904935.js","assets/index-99b15b47.js","assets/react-37698f52.js","assets/index-152d0029.css","assets/index-115039f0.js","assets/useWaitTransitionFinish-e4f41df5.js","assets/getNavId-aa412334.js","assets/App-e440e7c4.js","assets/PanelHeaderButton-a5396a9b.js","assets/Group-5c818549.js","assets/Footnote-97fa1dae.js","assets/Placeholder-412883d8.js","assets/Headline-024401dc.js"]))),D=x.lazy((()=>f((()=>import("./Stack-c1c6ab72.js")),["assets/Stack-c1c6ab72.js","assets/index-99b15b47.js","assets/react-37698f52.js","assets/index-152d0029.css","assets/index-115039f0.js","assets/useWaitTransitionFinish-e4f41df5.js","assets/getNavId-aa412334.js","assets/App-e440e7c4.js","assets/PanelHeaderButton-a5396a9b.js","assets/Group-5c818549.js","assets/Footnote-97fa1dae.js","assets/Placeholder-412883d8.js","assets/Headline-024401dc.js"]))),P=({onStoryChange:e})=>{const{view:a="profile"}=j(),{viewWidth:t}=p();return u.jsxs(C,{activeStory:a,tabbar:t.tabletMinus&&u.jsx(R,{onStoryChange:e,activeView:a}),children:[u.jsx(_,{id:v,children:u.jsx(D,{id:v})}),u.jsx(_,{id:m,children:u.jsx(M,{id:m})}),u.jsx(_,{id:b,children:u.jsx(A,{id:b})}),u.jsx(_,{id:h,children:u.jsx(z,{id:h})})]})};export{P as default};