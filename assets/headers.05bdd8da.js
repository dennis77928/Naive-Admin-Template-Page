import{x as w,y as h,L as c,q as z,O as $,P as l,as as T,J as f,Z as o,a0 as H,s as P}from"./index.3604c107.js";const R=w("h",`
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
 `),h("&::before",{backgroundColor:"var(--n-bar-color)"})])]),B=Object.assign(Object.assign({},l.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),n=r=>z({name:`H${r}`,props:B,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:i}=$(e),a=l("Typography","-h",R,T,e,s),d=f(()=>{const{type:g}=e,{common:{cubicBezierEaseInOut:b},self:{headerFontWeight:m,headerTextColor:p,[o("headerPrefixWidth",r)]:u,[o("headerFontSize",r)]:x,[o("headerMargin",r)]:C,[o("headerBarWidth",r)]:v,[o("headerBarColor",g)]:y}}=a.value;return{"--n-bezier":b,"--n-font-size":x,"--n-margin":C,"--n-bar-color":y,"--n-bar-width":v,"--n-font-weight":m,"--n-text-color":p,"--n-prefix-width":u}}),t=i?H(`h${r}`,f(()=>e.type[0]),d,e):void 0;return{mergedClsPrefix:s,cssVars:i?void 0:d,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{prefix:s,alignText:i,mergedClsPrefix:a,cssVars:d,$slots:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),P(`h${r}`,{class:[`${a}-h`,`${a}-h${r}`,this.themeClass,{[`${a}-h--prefix-bar`]:s,[`${a}-h--align-text`]:i}],style:d},t)}}),W=n("1"),L=n("2"),O=n("3"),S=n("4");n("5");n("6");export{W as N,L as a,O as b,S as c};
