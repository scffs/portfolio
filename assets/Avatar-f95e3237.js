import{a,F as p}from"./index-c5055670.js";const n=({width:r,height:s,borderRadius:i,src:l,isHexagon:t,hexagonHeight:e,imageLeft:d})=>{const c=t&&{width:`${e*.645}px`,height:`${e}px`,borderRadius:`${e/10}px`,backgroundColor:"#ccc"},o=t?{position:"absolute",width:`${r}px`,height:`${s}px`,zIndex:"1",clipPath:"polygon(51.35% -2.07%, 95.22% 24.72%, 95.16% 76.05%, 50.4% 102.17%, 6.34% 75.5%, 4.25% 24.35%)",borderRadius:"100%",left:`${d}px`}:{width:`${r}px`,height:`${s}px`,borderRadius:`${i}`};return a(p,{children:t?a("div",{className:"hexagon",style:c,children:a("img",{className:"image",style:o,src:l,alt:"avatar"})}):a("img",{className:"image",style:o,src:l,alt:"avatar"})})};export{n as default};
