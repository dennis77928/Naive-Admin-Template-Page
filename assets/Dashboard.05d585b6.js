import{i as d}from"./index.5e0f8aac.js";import{_ as f,r as g,V as m,o as v,ah as w,w as e,e as t,h as a,f as x,ai as y,aj as S}from"./index.3604c107.js";import{_ as b,a as C}from"./Grid.fdbe6a43.js";const I="/Naive-Admin-Template-Page/assets/waveform.58a0e889.png",T="/Naive-Admin-Template-Page/assets/normal_20.2752_FS_50000_SEC_5_FFT.3e1d1688.png",z="/Naive-Admin-Template-Page/assets/normal_20.2752_FS_50000_SEC_5_Polar.b2a665b9.png";const n=l=>(y("data-v-e4a6b654"),l=l(),S(),l),F={class:"light-green"},P={class:"green"},k=n(()=>a("img",{src:I,alt:"",class:"image-fit",style:{height:"306px"}},null,-1)),B={class:"green"},N=n(()=>a("img",{src:T,alt:"",class:"image-fit",style:{height:"306px"}},null,-1)),A={class:"light-green"},L=n(()=>a("img",{src:z,alt:"",class:"image-fit",style:{height:"306px"}},null,-1)),O={__name:"Dashboard",setup(l){const _=g(null),r=g(null),c={series:[{type:"gauge",axisLine:{lineStyle:{width:60,color:[[.3,"#fd666d"],[.7,"#fac846"],[1,"#3ac582"]]}},pointer:{itemStyle:{color:"#000"},width:8,length:"70%"},detail:{valueAnimation:!0,formatter:"{value}%",offsetCenter:[0,"80%"],fontSize:36},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},data:[{value:70}]}]},u=()=>{d(_.value,null,{renderer:"svg"}).setOption(c);const i=d(r.value,null,{renderer:"svg"});i.setOption(c),i.setOption({series:[{axisLine:{lineStyle:{color:[[.2,"#fd666d"],[.4,"#fac846"],[.6,"#3ac582"],[.8,"#fac846"],[1,"#fd666d"]]}},data:[{value:40}]}]})};return m(()=>{u()}),(p,i)=>{const s=x,o=b,h=C;return v(),w(h,{"x-gap":"12","y-gap":"12",cols:2},{default:e(()=>[t(o,null,{default:e(()=>[a("div",F,[t(s,{title:"Bearing-I overview",size:"large"},{default:e(()=>[a("div",{ref_key:"gauge1",ref:_,id:"gauge1",style:{height:"300px",width:"100%"}},null,512)]),_:1}),t(s,{title:"Bearing-II overview",size:"large"},{default:e(()=>[a("div",{ref_key:"gauge2",ref:r,id:"gauge2",style:{height:"300px",width:"100%"}},null,512)]),_:1})])]),_:1}),t(o,null,{default:e(()=>[a("div",P,[t(s,{title:"Torque vs. Power and Speed",size:"large"},{default:e(()=>[k]),_:1})])]),_:1}),t(o,null,{default:e(()=>[a("div",B,[t(s,{title:"FFT",size:"large"},{default:e(()=>[N]),_:1})])]),_:1}),t(o,null,{default:e(()=>[a("div",A,[t(s,{title:"Polar Chart",size:"large"},{default:e(()=>[L]),_:1})])]),_:1})]),_:1})}}},j=f(O,[["__scopeId","data-v-e4a6b654"]]);export{j as default};
