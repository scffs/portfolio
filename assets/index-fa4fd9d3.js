import{j as e,_ as a}from"./index-928f330e.js";import{J as t,Y as r,l as i,_ as s,c as n,d as l,e as o,g as c,P as d,T as m,Z as u,I as v,Q as b,U as h,X as f,$ as _}from"./AppWrapper-679c0da7.js";import{r as p}from"./react-37698f52.js";import{u as j,a as x}from"./App-a302478c.js";import{g as I}from"./getNavId-aa412334.js";import{F as k,I as y,a as T,b as E}from"./Footnote-054ef24a.js";var N=t("Icon28NewsfeedOutline","newsfeed_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="newsfeed_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M17.59 3c2.183 0 3.233.203 4.324.786a5.543 5.543 0 0 1 2.3 2.3c.583 1.091.786 2.14.786 4.324v7.18c0 2.183-.203 3.233-.786 4.324a5.543 5.543 0 0 1-2.3 2.3c-1.091.583-2.14.786-4.324.786h-7.18c-2.183 0-3.233-.203-4.324-.786a5.543 5.543 0 0 1-2.3-2.3C3.203 20.823 3 19.774 3 17.59v-7.18c0-2.183.203-3.233.786-4.324a5.543 5.543 0 0 1 2.3-2.3C7.177 3.203 8.226 3 10.41 3h7.18ZM5 11 5 17.59c0 1.881.142 2.62.55 3.38.342.641.839 1.138 1.48 1.48.76.408 1.499.55 3.38.55h7.18c1.881 0 2.62-.142 3.38-.55a3.543 3.543 0 0 0 1.48-1.48c.408-.76.55-1.499.55-3.38L22.999 11h-18ZM17.59 5h-7.18c-1.881 0-2.62.142-3.38.55-.641.342-1.138.839-1.48 1.48-.286.533-.441 1.056-.509 1.97H22.96c-.068-.914-.223-1.437-.509-1.97a3.543 3.543 0 0 0-1.48-1.48c-.76-.408-1.499-.55-3.38-.55Z" /></g></symbol>',28,28,!1,void 0),w=function(e){var a=e.children,t=e.initialScroll,s=e.saveScroll,n=p.useContext(r),l=n.getScroll,o=n.scrollTo;return i((function(){return"number"==typeof t&&o(0,t),function(){return s(l().y)}}),[]),p.createElement(p.Fragment,null,a)},C=function(e){var a,t=p.useRef({}).current,r=e.activeStory,i=e.tabbar,c=e.children,d=e.className,m=s(e,["activeStory","tabbar","children","className"]),u=null!==(a=p.Children.toArray(c).find((function(e){return p.isValidElement(e)&&I(e.props)===r})))&&void 0!==a?a:null;return p.createElement("div",n(o({},m),{className:l("vkuiEpic",i&&"vkuiInternalEpic--hasTabbar",d)}),p.createElement(w,{key:r,initialScroll:t[r]||0,saveScroll:function(e){return t[r]=e}},u),i)},g=function(e,a){switch(e){case"horizontal":return"vkuiInternalTabbar--layout-horizontal";case"vertical":return"vkuiInternalTabbar--layout-vertical";default:return p.Children.count(a)>2?g("vertical",[]):g("horizontal",[])}},S=function(e){var a=e.children,t=e.shadow,r=void 0===t||t,i=e.mode,n=e.className,m=s(e,["children","shadow","mode","className"]),u=c();return p.createElement("div",o({className:l("vkuiInternalTabbar","vkuiTabbar",u===d.IOS&&"vkuiTabbar--ios",g(i,a),r&&"vkuiTabbar--shadow",n)},m),a)},O=function(e){var a=e.children,t=e.selected,r=e.indicator,i=e.text,v=e.href,b=e.Component,h=void 0===b?v?"a":"button":b,f=e.disabled,_=e.className,j=e.getRootRef,x=s(e,["children","selected","indicator","text","href","Component","disabled","className","getRootRef"]),I=c();return p.createElement(h,n(o({},x),{ref:j,disabled:f,href:v,className:l("vkuiTabbarItem",I===d.IOS&&"vkuiTabbarItem--ios",I===d.ANDROID&&"vkuiTabbarItem--android",t&&"vkuiTabbarItem--selected",_)}),p.createElement(m,{role:"presentation",Component:"div",disabled:f,activeMode:I===d.IOS?"vkuiTabbarItem__tappable--active":"background",activeEffectDelay:I===d.IOS?0:300,hasHover:!1,className:"vkuiTabbarItem__tappable"}),p.createElement("div",{className:"vkuiTabbarItem__in"},p.createElement("div",{className:"vkuiTabbarItem__icon"},a,p.createElement("div",{className:"vkuiInternalTabbarItem__label"},u(r)&&r)),i&&p.createElement(k,{Component:"div",className:"vkuiTabbarItem__text",weight:"2"},i)))};const R=({onStoryChange:a,activeView:t})=>{const{viewWidth:r}=j();return r.tabletMinus&&e.jsxs(S,{className:r.tabletMinus.className,children:[e.jsx(O,{onClick:()=>a(v),selected:t===v,"data-story":v,text:"Обо мне",children:e.jsx(y,{})}),e.jsx(O,{onClick:()=>a(b),selected:t===b,"data-story":b,text:"Стэк технологий",children:e.jsx(N,{})}),e.jsx(O,{onClick:()=>a(h),selected:t===h,"data-story":h,text:"Проекты",children:e.jsx(T,{})}),e.jsx(O,{onClick:()=>a(f),selected:t===f,"data-story":f,text:"Связаться со мной",children:e.jsx(E,{})})]})},z=p.lazy((()=>a((()=>import("./Contacts-0f8c7613.js")),["assets/Contacts-0f8c7613.js","assets/index-928f330e.js","assets/react-37698f52.js","assets/index-152d0029.css","assets/AppWrapper-679c0da7.js","assets/index-ecb370e0.js","assets/useWaitTransitionFinish-63677e62.js","assets/getNavId-aa412334.js","assets/App-a302478c.js","assets/PanelHeaderButton-ad2d11fb.js","assets/Group-02e497af.js","assets/Footnote-054ef24a.js","assets/Placeholder-0a1ad162.js","assets/Headline-9d4d3ceb.js"]))),A=p.lazy((()=>a((()=>import("./Profile-5ff1083b.js")),["assets/Profile-5ff1083b.js","assets/index-928f330e.js","assets/react-37698f52.js","assets/index-152d0029.css","assets/AppWrapper-679c0da7.js","assets/index-ecb370e0.js","assets/useWaitTransitionFinish-63677e62.js","assets/getNavId-aa412334.js","assets/App-a302478c.js","assets/PanelHeaderButton-ad2d11fb.js","assets/Group-02e497af.js","assets/Footnote-054ef24a.js"]))),M=p.lazy((()=>a((()=>import("./Projects-27f92692.js")),["assets/Projects-27f92692.js","assets/index-928f330e.js","assets/react-37698f52.js","assets/index-152d0029.css","assets/AppWrapper-679c0da7.js","assets/index-ecb370e0.js","assets/useWaitTransitionFinish-63677e62.js","assets/getNavId-aa412334.js","assets/App-a302478c.js","assets/PanelHeaderButton-ad2d11fb.js","assets/Group-02e497af.js","assets/Footnote-054ef24a.js","assets/Placeholder-0a1ad162.js","assets/Headline-9d4d3ceb.js"]))),D=p.lazy((()=>a((()=>import("./Stack-9ec1783c.js")),["assets/Stack-9ec1783c.js","assets/index-928f330e.js","assets/react-37698f52.js","assets/index-152d0029.css","assets/AppWrapper-679c0da7.js","assets/index-ecb370e0.js","assets/useWaitTransitionFinish-63677e62.js","assets/getNavId-aa412334.js","assets/App-a302478c.js","assets/PanelHeaderButton-ad2d11fb.js","assets/Group-02e497af.js","assets/Footnote-054ef24a.js","assets/Placeholder-0a1ad162.js","assets/Headline-9d4d3ceb.js"]))),P=({onStoryChange:a})=>{const{view:t="profile"}=x(),{viewWidth:r}=j();return e.jsxs(C,{activeStory:t,tabbar:r.tabletMinus&&e.jsx(R,{onStoryChange:a,activeView:t}),children:[e.jsx(_,{id:b,children:e.jsx(D,{id:b})}),e.jsx(_,{id:v,children:e.jsx(A,{id:v})}),e.jsx(_,{id:h,children:e.jsx(M,{id:h})}),e.jsx(_,{id:f,children:e.jsx(z,{id:f})})]})};export{P as default};
