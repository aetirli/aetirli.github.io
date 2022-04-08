import{d as P,r as _,o as u,c as d,a as i,t as g,b as c,w as p,e as m,f as y,g as I,h as $,F as k,i as L,n as N,p as O,j as R,k as A,l as T,m as j,u as v,q as B,s as D,v as F}from"./vendor.db2cbcf7.js";const H=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};H();const W=P({id:"counter",state:()=>({counter:0}),getters:{doubleCount:r=>r.counter*2},actions:{increment(){this.counter++},async resetAsync(){await new Promise(r=>setTimeout(r,400)),this.counter=0}}}),q="modulepreload",V={},G="/",M=function(a,s){return!s||s.length===0?a():Promise.all(s.map(t=>{if(t=`${G}${t}`,t in V)return;V[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":q,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e)return new Promise((l,f)=>{n.addEventListener("load",l),n.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>a())},Y={width:"100%"},z={class:"d-inline-block p-0 m-0 pt-3"},J=i("td",{valign:"bottom",style:{"white-space":"nowrap"}},[i("i",null," made with:")],-1),K={valign:"bottom",align:"right",width:"100%"},U=m("Emit"),Q={props:["msg"],setup(r){return(a,s)=>{const t=_("b-button");return u(),d("table",Y,[i("tr",null,[i("td",null,[i("h2",z,g(r.msg),1)]),J,i("td",K,[c(t,{variant:"outline-primary",onClick:s[0]||(s[0]=e=>a.$emit("emitEvent"))},{default:p(()=>[U]),_:1})])])])}}};var X=(r,a)=>{const s=r.__vccOpts||r;for(const[t,e]of a)s[t]=e;return s};const E=r=>(O("data-v-3c4b92cd"),r=r(),R(),r),Z=E(()=>i("hr",null,null,-1)),ee={key:0,class:"monospace"},te=m(" EMIT "),oe=E(()=>i("hr",null,null,-1)),ne=[te,oe],se={class:"no-mark"},re=E(()=>i("hr",{class:"hr-ul"},null,-1)),ae={setup(r){const a=y(!1),s=y(null),t=y([{icon:{name:"lightning-charge-fill",color:"text-success"},title:"Vue 3 + Vite"},{icon:{name:"lightning-charge",color:"text-info"},title:"Vue Router"},{icon:{name:"lightning-charge",color:"text-warning"},title:"Pinia"},{icon:{name:"bootstrap-fill",color:"text-info"},title:"Bootstrap Vue 3"},{icon:{name:"bootstrap",color:"text-info"},title:"Bootstrap Icons"},{icon:{name:"google",color:"text-secondary"},title:"Google Fonts"},{icon:{name:"filetype-json",color:"text-primary"},title:"JSONPlaceholder"},{icon:{name:"filetype-json",color:"text-secondary"},title:"World Clock API"},{icon:{name:"grid-1x2-fill",color:"text-success"},title:"Icons8"},{icon:{name:"github",color:"text-secondary"},title:"GitHub.io"}]);I(async()=>{let n=await(await fetch("http://worldclockapi.com/api/json/est/now")).json();s.value=String(new Date(n.currentDateTime).getFullYear())});function e(){a.value=!0}return(o,n)=>{const l=_("b-col"),f=_("b-row"),b=_("b-container");return u(),d(k,null,[c(Q,{msg:"Welcome",onEmitEvent:e}),Z,a.value?(u(),d("span",ee,ne)):$("",!0),i("ul",se,[(u(!0),d(k,null,L(t.value,(h,x)=>(u(),d("li",{key:x},[h.icon!=null?(u(),d("i",{key:0,class:N("bi bi-"+h.icon.name+" "+h.icon.color)},null,2)):$("",!0),m(" "+g(h.title)+" ",1),re]))),128))]),i("footer",null,[c(b,{class:"bv-example-row"},{default:p(()=>[c(f,{"align-h":"end"},{default:p(()=>[c(l,{cols:"12",align:"right"},{default:p(()=>[m("\xA9 "+g(s.value),1)]),_:1})]),_:1})]),_:1})])],64)}}};var ie=X(ae,[["__scopeId","data-v-3c4b92cd"]]);const C=A({history:T("/"),routes:[{path:"/",name:"home",component:ie},{path:"/data",name:"data",component:()=>M(()=>import("./DataView.4e77d78d.js"),["assets/DataView.4e77d78d.js","assets/DataView.af8beff1.css","assets/vendor.db2cbcf7.js"])}]});const ce=i("i",{class:"bi bi-github"},null,-1),le=m("Home"),ue=m("\xA0 "),de=m("Data "),_e={key:0},pe={setup(r,{expose:a}){const s=W(),t=y("aetirli.github.io"),e=j({home:!0,data:!1}),o=n=>{n==="home"?(e.home=!0,e.data=!1,C.push("/")):n==="data"&&(e.home=!1,e.data=!0,C.push("/"+n))};return a({open:o}),(n,l)=>{const f=_("b-alert"),b=_("b-button"),h=_("b-card"),x=_("RouterView");return u(),d(k,null,[c(f,{show:"",variant:"secondary"},{default:p(()=>[ce,m("\xA0"+g(t.value),1)]),_:1}),c(h,null,{default:p(()=>[c(b,{variant:"outline-primary",pressed:v(e).home,onClick:l[0]||(l[0]=S=>o("home"))},{default:p(()=>[le]),_:1},8,["pressed"]),ue,c(b,{variant:"outline-primary",pressed:v(e).data,onClick:l[1]||(l[1]=S=>o("data"))},{default:p(()=>[de,v(s).counter>0?(u(),d("span",_e,g(v(s).counter),1)):$("",!0)]),_:1},8,["pressed"])]),_:1}),c(x)],64)}}},w=B(pe);w.use(D());w.use(C);w.use(F);w.mount("#app");export{X as _,W as u};
