import{d as T,i as Y,j as b,k as B,a as V,o as l,e as a,g as p,f as t,w as L,n as w,l as e,p as F,t as r,m as u,F as I,q as N,u as j}from"./index.8cfbae7f.js";import{u as z,a as H,b as R,d as k}from"./bing.5af42730.js";import{_ as $,a as q}from"./pc-header.7b0b8d92.js";import{_ as A}from"./image-list.vue_vue_type_script_setup_true_lang.8f3486f8.js";import{b as v}from"./route-block.6a611cbf.js";const E={class:"index-content"},G={class:"image-list-content"},J={class:"title"},K={key:1,class:"is-loading-more-text"},O={key:2,class:"is-no-more-text"},P=T({__name:"index",setup(Q){const{isDark:d}=N(),s=z(),{t:c}=H(),y=j(),x=R(),f=Y({scrollTop:0});b(()=>{S(),x.setBackBtnStatus(!1)}),B((n,_,m)=>{h(),m()});const g=n=>k(n).format("YYYY-MM-DD")===k().format("YYYY-MM-DD"),M=n=>{y.push(`/pc/detail?id=${n.id}`)},i=V(),h=()=>{f.scrollTop=i.value?i.value.scrollTop:0},S=()=>{i.value.scrollTop=f.scrollTop};return(n,_)=>{const m=$,C=A,D=q;return l(),a(I,null,[p(m),t("div",{ref_key:"pcContent",ref:i,class:"pc-index pc-content"},[t("div",E,[p(C,{"show-info-text":!1,"auto-load":3,onClickImage:M},{content:L(({data:o})=>[t("div",G,[t("div",J,[t("span",{style:w({"background-color":o.color[e(d)?"LightVibrant":"DarkVibrant"],color:e(d)?"#000":"#fff"}),class:F({date:!0,today:g(o==null?void 0:o.date)})},r(g(o==null?void 0:o.date)?e(c)("index.today"):o==null?void 0:o.date),7),t("span",null,r(o==null?void 0:o.title),1)])])]),_:1}),!e(s).loadingMore&&!e(s).noMore?(l(),a("div",{key:0,class:"load-more-btn",onClick:_[0]||(_[0]=(...o)=>e(s).loadMore&&e(s).loadMore(...o))},r(e(c)("notice.more")),1)):u("",!0),e(s).loadingMore?(l(),a("div",K,r(e(c)("notice.loadingMore")),1)):u("",!0),e(s).noMore?(l(),a("div",O,r(e(c)("notice.noMore")),1)):u("",!0)]),p(D)],512)],64)}}});typeof v=="function"&&v(P);export{P as default};
