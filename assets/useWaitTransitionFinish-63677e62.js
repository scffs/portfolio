import{r as e}from"./react-37698f52.js";import{p as n,j as t,K as r}from"./AppWrapper-679c0da7.js";function i(n){var t=e.useRef();return e.useEffect((function(){t.current=n})),t.current}var u=Boolean(n&&window.__isVkuiTesting),o={supported:!1},a={supported:!1,name:null};n&&!u&&(("undefined"!=typeof AnimationEvent||"undefined"!=typeof WebKitAnimationEvent)&&(o.supported=!0),"undefined"!=typeof TransitionEvent?(a.supported=!0,a.name="transitionend"):"undefined"!=typeof WebKitTransitionEvent&&(a.supported=!0,a.name="webkitTransitionEnd"));var s=function(){var n=e.useRef(null),i=t().document,u=e.useRef(r),o=e.useCallback((function(){u.current(),u.current=r}),[]);return{waitTransitionFinish:e.useCallback((function(e,t,r){var s,d;e&&(!(null===(s=i)||void 0===s?void 0:s.hidden)&&a.supported&&a.name?(o(),e.addEventListener(a.name,t),u.current=function(){a.name&&e.removeEventListener(a.name,t)}):((null===(d=n)||void 0===d?void 0:d.current)&&clearTimeout(n.current),n.current=setTimeout(t,r)))}),[i,o,n])}};export{i as a,o as b,a as t,s as u};
