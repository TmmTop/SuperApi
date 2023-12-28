import{e as $,aB as m,i as l,g as s,d as x,o as k,q as f,bO as y,c as b,x as C,h,ax as B,aO as u,aP as v,aQ as w,aR as g}from"./index-e9ed0e0e.js";const M=$("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[m("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[m("no-title",`
 display: flex;
 align-items: center;
 `)]),l("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),s("title-position-left",[l("line",[s("left",{width:"28px"})])]),s("title-position-right",[l("line",[s("right",{width:"28px"})])]),s("dashed",[l("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),s("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),l("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),m("dashed",[l("line",{backgroundColor:"var(--n-color)"})]),s("dashed",[l("line",{borderColor:"var(--n-color)"})]),s("vertical",{backgroundColor:"var(--n-color)"})]),z=Object.assign(Object.assign({},f.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),N=x({name:"Divider",props:z,setup(n){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=k(n),i=f("Divider","-divider",M,y,n,o),d=b(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:a,textColor:c,fontWeight:p}}=i.value;return{"--n-bezier":e,"--n-color":a,"--n-text-color":c,"--n-font-weight":p}}),t=r?C("divider",void 0,d,n):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:d,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var n;const{$slots:o,titlePlacement:r,vertical:i,dashed:d,cssVars:t,mergedClsPrefix:e}=this;return(n=this.onRender)===null||n===void 0||n.call(this),h("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:i,[`${e}-divider--no-title`]:!o.default,[`${e}-divider--dashed`]:d,[`${e}-divider--title-position-${r}`]:o.default&&r}],style:t},i?null:h("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!i&&o.default?h(B,null,h("div",{class:`${e}-divider__title`},this.$slots),h("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}}),P={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},R=w("path",{fill:"currentColor",d:"M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z"},null,-1),T=[R];function V(n,o){return u(),v("svg",P,T)}const E={name:"mdi-moon-waning-crescent",render:V},O={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},D=w("path",{fill:"currentColor",d:"m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2"},null,-1),H=[D];function L(n,o){return u(),v("svg",O,H)}const S={name:"mdi-white-balance-sunny",render:L},W=x({name:"DarkModeSwitch",__name:"dark-mode-switch",props:{dark:{type:Boolean,default:!1},customizeTransition:{type:Boolean}},emits:["update:dark"],setup(n,{emit:o}){const r=n,i=b({get(){return r.dark},set(t){o("update:dark",t)}});async function d(t){const e=t.clientX,a=t.clientY;if(!r.customizeTransition||!document.startViewTransition){i.value=!i.value;return}const c=Math.hypot(Math.max(e,innerWidth-e),Math.max(a,innerHeight-a));await document.startViewTransition(()=>{i.value=!i.value}).ready;const _=[`circle(0px at ${e}px ${a}px)`,`circle(${c}px at ${e}px ${a}px)`];document.documentElement.animate({clipPath:i.value?_:[..._].reverse()},{duration:300,easing:"ease-in",pseudoElement:i.value?"::view-transition-new(root)":"::view-transition-old(root)"})}return(t,e)=>{const a=E,c=S;return u(),v("div",{class:"flex-center text-18px cursor-pointer",onClick:d},[i.value?(u(),g(a,{key:0})):(u(),g(c,{key:1}))])}}});export{N as _,S as a,E as b,W as c};
