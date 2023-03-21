import{s as w,t as h,I as c,n as z,K as $,L as l,aq as T,G as f,W as o,Y as H,p as R}from"./index.3e0402fb.js";const W=w("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[h("&:first-child",{marginTop:0}),c("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[c("align-text",{paddingLeft:0},[h("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),h("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),h("&::before",{backgroundColor:"var(--n-bar-color)"})])]),B=Object.assign(Object.assign({},l.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),a=t=>z({name:`H${t}`,props:B,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:s}=$(e),n=l("Typography","-h",W,T,e,i),d=f(()=>{const{type:g}=e,{common:{cubicBezierEaseInOut:b},self:{headerFontWeight:p,headerTextColor:m,[o("headerPrefixWidth",t)]:u,[o("headerFontSize",t)]:x,[o("headerMargin",t)]:C,[o("headerBarWidth",t)]:v,[o("headerBarColor",g)]:y}}=n.value;return{"--n-bezier":b,"--n-font-size":x,"--n-margin":C,"--n-bar-color":y,"--n-bar-width":v,"--n-font-weight":p,"--n-text-color":m,"--n-prefix-width":u}}),r=s?H(`h${t}`,f(()=>e.type[0]),d,e):void 0;return{mergedClsPrefix:i,cssVars:s?void 0:d,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{prefix:i,alignText:s,mergedClsPrefix:n,cssVars:d,$slots:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),R(`h${t}`,{class:[`${n}-h`,`${n}-h${t}`,this.themeClass,{[`${n}-h--prefix-bar`]:i,[`${n}-h--align-text`]:s}],style:d},r)}}),P=a("1"),L=a("2"),S=a("3"),O=a("4");a("5");a("6");export{P as N,L as a,S as b,O as c};
