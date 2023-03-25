import{_ as w,u as k,r as c,a as x,b as S,c as U,d as B,e as C,f as s,w as u,g as L,o as V,h as n,i as $,j as q,t as A,k as N}from"./index.0f265b20.js";import{_ as R,a as j,b as z}from"./FormItem.0dc315b8.js";const D={class:"loginForm"},F={style:{display:"flex","justify-content":"flex-end"}},I={__name:"Login",setup(P){const{t:o}=k(),_=c(null),i=x(),m=S(),g=U(),f=B(),t=c({username:null,password:null}),h={username:{required:!0,trigger:["blur","input"],message:o("placeholder.inputUsername")},password:{required:!0,trigger:["blur","input"],message:o("placeholder.inputPassword")}},v=a=>{var e;a.preventDefault(),(e=_.value)==null||e.validate(async l=>{if(!l){const r=i.loading(o("msg.verifying"));try{(await g.Login(t.value)).code===200?m.clearAllState(()=>{r.destroy(),i.success(o("msg.verifySuccess")),f.push("/")}):(r.destroy(),console.log(l),i.error(o("msg.verifyFail")))}catch(p){console.log(p)}}})};return(a,e)=>{const l=R,r=j,p=N,y=z,b=L;return V(),C("div",D,[s(b,{hoverable:"",size:"huge",title:"Admin Template",style:{width:"500px",height:"300px"}},{default:u(()=>[s(y,{ref_key:"formRef",ref:_,model:n(t),rules:h,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging",size:"large",style:{maxWidth:"640px"}},{default:u(()=>[s(r,{label:a.$t("label.username"),path:"username"},{default:u(()=>[s(l,{value:n(t).username,"onUpdate:value":e[0]||(e[0]=d=>n(t).username=d),placeholder:a.$t("placeholder.inputUsername")},null,8,["value","placeholder"])]),_:1},8,["label"]),s(r,{label:a.$t("label.password"),path:"password"},{default:u(()=>[s(l,{value:n(t).password,"onUpdate:value":e[1]||(e[1]=d=>n(t).password=d),placeholder:a.$t("placeholder.inputPassword"),type:"password","show-password-on":"mousedown"},null,8,["value","placeholder"])]),_:1},8,["label"]),$("div",F,[s(p,{round:"",type:"primary",onClick:v},{default:u(()=>[q(A(n(o)("btn.login")),1)]),_:1})])]),_:1},8,["model"])]),_:1})])}}},M=w(I,[["__scopeId","data-v-6d4be451"]]);export{M as default};
