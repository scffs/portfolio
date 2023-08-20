import{N as e,r as a,_ as i,c as r,d as t,e as n,x as l,an as s,T as o,i as c}from"./index-73415115.js";var d=e("Icon12Circle","circle_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="circle_12"><path fill="currentColor" d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" /></symbol>',12,12,!1,void 0),v=e("Icon12OnlineMobile","online_mobile_12","0 0 8 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 12" id="online_mobile_12"><path fill="currentColor" d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0h3.98Zm.007 3H2.004a.502.502 0 0 0-.503.502v4.995c0 .278.225.503.503.503h3.995a.502.502 0 0 0 .502-.502V3.503A.502.502 0 0 0 5.997 3Z" /></symbol>',8,12,!1,void 0),u=a.createContext({size:0});function g(e){return e<=36?12:e>36&&e<=48?16:e>48&&e<=64?20:g.MAX_SIZE}g.MAX_SIZE=24;var m={stroke:"vkuiImageBaseBadge--background-stroke",shadow:"vkuiImageBaseBadge--background-shadow"},h=function(e){var l=e.alt,s=e.crossOrigin,o=e.decoding,d=e.loading,v=e.referrerPolicy,g=e.sizes,m=e.src,h=e.srcSet,k=e.useMap,f=e.getRef,b=e.size,B=void 0===b?24:b,w=e.width,y=e.height,I=e.style,N=e.className,p=e.getRootRef,A=e.withBorder,E=void 0===A||A,C=e.fallbackIcon,z=e.children,_=e["aria-label"],x=e.onClick,O=e.onLoad,M=e.onError,S=i(e,["alt","crossOrigin","decoding","loading","referrerPolicy","sizes","src","srcSet","useMap","getRef","size","width","height","style","className","getRootRef","withBorder","fallbackIcon","children","aria-label","onClick","onLoad","onError"]),R=c(a.useState(!1),2),G=R[0],P=R[1],V=c(a.useState(!1),2),Z=V[0],H=V[1],L=m||h,j=(Z||!L)&&a.isValidElement(C)?C:null,X=function(){switch(B){case 28:return"vkuiImageBase--size-28";case 32:return"vkuiImageBase--size-32";case 40:return"vkuiImageBase--size-40";case 48:return"vkuiImageBase--size-48";case 72:return"vkuiImageBase--size-72"}return null}();return a.createElement(u.Provider,{value:{size:B}},a.createElement("div",r(n({},S),{ref:p,style:r(n({},I),{width:B,height:B}),className:t(N,"vkuiImageBase",X,G&&"vkuiImageBase--loaded"),role:L?"img":"presentation","aria-label":_,onClick:x}),L&&a.createElement("img",{ref:f,alt:l,className:"vkuiImageBase__img",crossOrigin:s,decoding:o,loading:d,referrerPolicy:v,sizes:g,src:m,srcSet:h,useMap:k,width:w,height:y,onLoad:function(e){var a;P(!0),H(!1),null===(a=O)||void 0===a||a(e)},onError:function(e){var a;P(!1),H(!0),null===(a=M)||void 0===a||a(e)}}),j&&a.createElement("div",{className:t("vkuiImageBase__fallback")},j),z,E&&a.createElement("div",{"aria-hidden":!0,className:"vkuiImageBase__border"})))};h.Badge=function(e){var l=e.background,s=void 0===l?"shadow":l,o=e.children,c=e.className,d=i(e,["background","children","className"]);return a.createElement("div",r(n({},d),{className:t("vkuiImageBaseBadge",m[s],c)}),o)},h.Overlay=function(e){var c=e.className,d=e.theme,v=e.visibility,u=e.children,g=e.onClick,m=i(e,["className","theme","visibility","children","onClick"]),h=l(),k=s(),f=null!=d?d:h,b=null!=v?v:k?"on-hover":"always";return a.createElement(o,r(n({},m),{type:"button",Component:"button",className:t("vkuiImageBaseOverlay","always"===b&&"vkuiImageBaseOverlay--visible","light"===f&&"vkuiImageBaseOverlay--theme-light","dark"===f&&"vkuiImageBaseOverlay--theme-dark",c),hasHover:"on-hover"===b,hoverMode:"on-hover"===b?"vkuiImageBaseOverlay--visible":void 0,focusVisibleMode:"vkuiImageBaseOverlay--focus-visible",hasActive:!1,onClick:g}),u)};var k=function(e){var l=e.mode,s=void 0===l?"tint":l,o=e.children,c=e.to,d=void 0===c?"top":c,v=e.className,u=i(e,["mode","children","to","className"]);return a.createElement("div",r(n({role:"presentation"},u),{className:t({tint:"vkuiGradient--mode-tint",black:"vkuiGradient--mode-black",white:"vkuiGradient--mode-white"}[s],{top:"vkuiGradient--to-top",bottom:"vkuiGradient--to-bottom"}[d],v)}),o)},f=function(e){var t=e.width,l=void 0===t?12:t,s=e.height,o=void 0===s?12:s,c=i(e,["width","height"]);return a.createElement(d,r(n({},c),{width:l>=24?15:12,height:o>=24?15:12}))},b=function(e){var t=e.width,l=void 0===t?8:t,s=e.height,o=void 0===s?12:s,c=i(e,["width","height"]);return a.createElement(v,r(n({},c),{width:l>=24?9:8,height:o>=24?15:12}))};function B(e){if(e<=16)return 5;if(e<=24)return 8;if(e<=32)return 10;if(e<=36)return 13;if(e<=44)return 14;if(e<=48)return 17;if(e<56)return 18;if(e<=64)return 21;if(e<=88)return 26;if(e<=96)return 30;var a=Math.ceil(.3125*e);return a+a%2}var w={1:"red",2:"orange",3:"yellow",4:"green",5:"l-blue",6:"violet"},y={red:"vkuiAvatar--gradient-red",orange:"vkuiAvatar--gradient-orange",yellow:"vkuiAvatar--gradient-yellow",green:"vkuiAvatar--gradient-green",blue:"vkuiAvatar--gradient-blue","l-blue":"vkuiAvatar--gradient-l-blue",violet:"vkuiAvatar--gradient-violet"},I=function(e){var l=e.size,s=void 0===l?48:l,o=e.className,c=e.gradientColor,d=e.initials,v=e.fallbackIcon,u=e.children,g=i(e,["size","className","gradientColor","initials","fallbackIcon","children"]),m="number"==typeof c?w[c]:c,k=m&&"custom"!==m,f=d?void 0:v;return a.createElement(h,r(n({},g),{size:s,fallbackIcon:f,className:t("vkuiAvatar",m&&"vkuiAvatar--has-gradient",k&&y[m],o)}),d&&a.createElement("div",{className:"vkuiAvatar__initials",style:{fontSize:B(s)}},d),u)};I.Badge=function(e){var l=e.className,s=i(e,["className"]),o=a.useContext(u).size;return a.createElement(h.Badge,r(n({},s),{className:t("vkuiAvatarBadge",o<96&&"vkuiAvatarBadge--shifted",l)}))},I.BadgeWithPreset=function(e){var r=e.preset,l=void 0===r?"online":r,s=e.className,o=i(e,["preset","className"]),c=g(a.useContext(u).size),d="online"===l,v=d?"vkuiAvatarBadge--preset-online":"vkuiAvatarBadge--preset-onlineMobile",m=d?f:b;return a.createElement(h.Badge,n({background:"stroke",className:t("vkuiAvatarBadge",v,s)},o),a.createElement(m,{width:c,height:c}))},I.Overlay=h.Overlay;const N={margin:0,display:"flex",gap:4,flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:20},p={borderRadius:10};export{I as A,k as G,p as g,N as s};
