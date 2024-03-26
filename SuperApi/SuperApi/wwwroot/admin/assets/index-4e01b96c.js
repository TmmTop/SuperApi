import{d as E,h as d,r as U,c as y,w as ue,n as nt,t as be,a as C,b as wt,e as M,f as $n,g as j,i as z,u as zn,N as Ao,T as Sn,j as Io,k as Ze,l as Rn,m as Mn,o as Ae,p as ve,q as de,s as Bn,v as we,x as Ue,y as Fo,z as st,A as Ye,B as oo,C as Dt,D as Te,V as An,E as no,F as In,G as Pt,H as Fn,I as ro,L as Po,J as Ct,K as Et,M as To,O as It,P as Do,Q as Pn,R as Tn,S as Ce,U as Eo,W as Ee,X as Re,Y as He,Z as qe,_ as Be,$ as tt,a0 as Xe,a1 as rt,a2 as at,a3 as xt,a4 as Wt,a5 as qt,a6 as Xt,a7 as Dn,a8 as Ho,a9 as En,aa as Hn,ab as lt,ac as Lo,ad as ne,ae as Me,af as ao,ag as Ln,ah as Un,ai as Nn,aj as Vn,ak as Yt,al as On,am as lo,an as jn,ao as Kn,ap as Wn,aq as qn,ar as Xn,as as Yn,at as Zn,au as Gn,av as Jn,aw as ot,ax as G,ay as Zt,az as Ut,aA as io,aB as et,aC as Qn,aD as er,aE as Co,aF as Nt,aG as Se,aH as tr,aI as or,aJ as _e,aK as X,aL as nr,aM as rr,aN as ar,aO as b,aP as N,aQ as I,aR as L,aS as g,aT as l,aU as le,aV as Y,aW as it,aX as h,aY as se,aZ as W,a_ as $e,a$ as ce,b0 as Uo,b1 as No,b2 as ke,b3 as Vo,b4 as kt,b5 as lr,b6 as Oo,b7 as ir,b8 as sr,b9 as so,ba as cr,bb as ct,bc as dr,bd as ur,be as Rt,bf as hr,bg as jo,bh as Ge,bi as $t,bj as Gt,bk as co,bl as mr,bm as pr,bn as Ko,bo as vr,bp as fr,bq as ko,br as $o,bs as uo,bt as br,bu as gr,bv as _r,bw as xr,bx as Wo,by as yr,bz as wr,bA as Cr}from"./index-e9ed0e0e.js";import{_ as qo}from"./setting-outlined-7a04a85c.js";import{_ as dt,a as kr,b as $r,c as zr}from"./dark-mode-switch.vue_vue_type_script_setup_true_lang-5fc9d4c0.js";import{u as Le}from"./use-merged-state-496c4ad7.js";import{_ as ut}from"./Space-5f39c62b.js";import{C as Sr,B as Rr,_ as Mr}from"./index.vue_vue_type_script_setup_true_lang-00a3595e.js";import{_ as zt,a as ho,b as Br}from"./Dropdown-a3ff842e.js";import{_ as Ne}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as Ar}from"./GradientText-3ee53208.js";import{_ as Xo,a as Yo}from"./Grid-034146f3.js";import{_ as Zo,a as Go}from"./Tabs-c3a0e2d3.js";import{_ as Jo}from"./Input-dd6f5e07.js";import{_ as Qo}from"./InputGroup-868717a0.js";import{u as Ir}from"./Suffix-bca8596e.js";import{u as Jt,V as Fr,a as Pr,b as Tr,_ as Dr,c as Er}from"./Popover-0534a616.js";import{g as Hr,c as Lr,_ as en}from"./Select-227e2db3.js";import{_ as Ur}from"./InputNumber-6578f265.js";import{f as Tt}from"./format-length-c9d165c6.js";import{u as Nr}from"./use-compitable-74186af3.js";/* empty css                                                         */import{_ as Vr,a as Or,b as jr,c as Kr}from"./avatar-7e543df9.js";import{_ as Wr}from"./loading-empty-wrapper.vue_vue_type_script_setup_true_lang-b729ffa5.js";import{t as qr,N as Xr}from"./Tag-b8d65896.js";import{_ as Yr}from"./refresh-83571ede.js";import{u as Zr}from"./use-loading-62d2aacf.js";import"./use-houdini-38c9febd.js";import"./next-frame-once-7035a838.js";import"./Add-063aad0f.js";import"./cssr-11db33b0.js";import"./get-c6b7aef5.js";function Gr(e){return e.nodeType===9?null:e.parentNode}function tn(e){if(e===null)return null;const t=Gr(e);if(t===null)return null;if(t.nodeType===9)return document.documentElement;if(t.nodeType===1){const{overflow:o,overflowX:n,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(o+r+n))return t}return tn(t)}function Jr(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function on(e,t,o){t/=100,o/=100;const n=t*Math.min(o,1-o)+o;return[e,n?(2-2*o/n)*100:0,n*100]}function Ft(e,t,o){t/=100,o/=100;const n=o-o*t/2,r=Math.min(n,1-n);return[e,r?(o-n)/r*100:0,n*100]}function De(e,t,o){t/=100,o/=100;let n=(r,a=(r+e/60)%6)=>o-o*t*Math.max(Math.min(a,4-a,1),0);return[n(5)*255,n(3)*255,n(1)*255]}function Qt(e,t,o){e/=255,t/=255,o/=255;let n=Math.max(e,t,o),r=n-Math.min(e,t,o),a=r&&(n==e?(t-o)/r:n==t?2+(o-e)/r:4+(e-t)/r);return[60*(a<0?a+6:a),n&&r/n*100,n*100]}function eo(e,t,o){e/=255,t/=255,o/=255;let n=Math.max(e,t,o),r=n-Math.min(e,t,o),a=1-Math.abs(n+n-r-1),i=r&&(n==e?(t-o)/r:n==t?2+(o-e)/r:4+(e-t)/r);return[60*(i<0?i+6:i),a?r/a*100:0,(n+n-r)*50]}function to(e,t,o){t/=100,o/=100;let n=t*Math.min(o,1-o),r=(a,i=(a+e/30)%12)=>o-n*Math.max(Math.min(i-3,9-i,1),-1);return[r(0)*255,r(8)*255,r(4)*255]}function zo(e){return e.nodeName==="#document"}const Qr=E({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),So=E({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const t=U(null),o=U(e.value),n=U(e.value),r=U("up"),a=U(!1),i=y(()=>a.value?`${e.clsPrefix}-base-slot-machine-current-number--${r.value}-scroll`:null),s=y(()=>a.value?`${e.clsPrefix}-base-slot-machine-old-number--${r.value}-scroll`:null);ue(be(e,"value"),(f,m)=>{o.value=m,n.value=f,nt(c)});function c(){const f=e.newOriginalNumber,m=e.oldOriginalNumber;m===void 0||f===void 0||(f>m?p("up"):m>f&&p("down"))}function p(f){r.value=f,a.value=!1,nt(()=>{var m;(m=t.value)===null||m===void 0||m.offsetWidth,a.value=!0})}return()=>{const{clsPrefix:f}=e;return d("span",{ref:t,class:`${f}-base-slot-machine-number`},o.value!==null?d("span",{class:[`${f}-base-slot-machine-old-number ${f}-base-slot-machine-old-number--top`,s.value]},o.value):null,d("span",{class:[`${f}-base-slot-machine-current-number`,i.value]},d("span",{ref:"numberWrapper",class:[`${f}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${f}-base-slot-machine-current-number__inner--not-number`]},n.value)),o.value!==null?d("span",{class:[`${f}-base-slot-machine-old-number ${f}-base-slot-machine-old-number--bottom`,s.value]},o.value):null)}}}),{cubicBezierEaseOut:Je}=wt;function ea({duration:e=".2s"}={}){return[C("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${Je},
 max-width ${e} ${Je},
 transform ${e} ${Je}
 `}),C("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${Je},
 max-width ${e} ${Je},
 transform ${e} ${Je}
 `}),C("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),C("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),C("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),C("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const ta=C([C("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),C("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),C("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),C("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),M("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[M("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[ea({duration:".2s"}),$n({duration:".2s",delay:"0s"}),M("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[j("top",{transform:"translateY(-100%)"}),j("bottom",{transform:"translateY(100%)"}),j("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),j("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),M("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[j("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),j("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),z("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[j("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),oa=E({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){zn("-base-slot-machine",ta,be(e,"clsPrefix"));const t=U(),o=U(),n=y(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const r=[];let a=e.value;for(e.max!==void 0&&(a=Math.min(e.max,a));a>=1;)r.push(a%10),a/=10,a=Math.floor(a);return r.reverse(),r});return ue(be(e,"value"),(r,a)=>{typeof r=="string"?(o.value=void 0,t.value=void 0):typeof a=="string"?(o.value=r,t.value=void 0):(o.value=r,t.value=a)}),()=>{const{value:r,clsPrefix:a}=e;return typeof r=="number"?d("span",{class:`${a}-base-slot-machine`},d(Sn,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>n.value.map((i,s)=>d(So,{clsPrefix:a,key:n.value.length-s-1,oldOriginalNumber:t.value,newOriginalNumber:o.value,value:i}))}),d(Ao,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<r?d(So,{clsPrefix:a,value:"+"}):null})):d("span",{class:`${a}-base-slot-machine`},r)}}}),Vt=Io&&"loading"in document.createElement("img"),na=(e={})=>{var t;const{root:o=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(t=e.threshold)!==null&&t!==void 0?t:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof o=="string"?document.querySelector(o):o)||document.documentElement})}},Ot=new WeakMap,jt=new WeakMap,Kt=new WeakMap,ra=(e,t,o)=>{if(!e)return()=>{};const n=na(t),{root:r}=n.options;let a;const i=Ot.get(r);i?a=i:(a=new Map,Ot.set(r,a));let s,c;a.has(n.hash)?(c=a.get(n.hash),c[1].has(e)||(s=c[0],c[1].add(e),s.observe(e))):(s=new IntersectionObserver(m=>{m.forEach(u=>{if(u.isIntersecting){const _=jt.get(u.target),w=Kt.get(u.target);_&&_(),w&&(w.value=!0)}})},n.options),s.observe(e),c=[s,new Set([e])],a.set(n.hash,c));let p=!1;const f=()=>{p||(jt.delete(e),Kt.delete(e),p=!0,c[1].has(e)&&(c[0].unobserve(e),c[1].delete(e)),c[1].size<=0&&a.delete(n.hash),a.size||Ot.delete(r))};return jt.set(e,f),Kt.set(e,o),f},aa=Ze("n-avatar-group"),la=M("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[Rn(C("&","--n-merged-color: var(--n-color-modal);")),Mn(C("&","--n-merged-color: var(--n-color-popover);")),C("img",`
 width: 100%;
 height: 100%;
 `),z("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),M("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),z("text","line-height: 1.25")]),ia=Object.assign(Object.assign({},de.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),sa=E({name:"Avatar",props:ia,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ae(e),n=U(!1);let r=null;const a=U(null),i=U(null),s=()=>{const{value:x}=a;if(x&&(r===null||r!==x.innerHTML)){r=x.innerHTML;const{value:T}=i;if(T){const{offsetWidth:D,offsetHeight:P}=T,{offsetWidth:O,offsetHeight:$}=x,S=.9,v=Math.min(D/O*S,P/$*S,1);x.style.transform=`translateX(-50%) translateY(-50%) scale(${v})`}}},c=ve(aa,null),p=y(()=>{const{size:x}=e;if(x)return x;const{size:T}=c||{};return T||"medium"}),f=de("Avatar","-avatar",la,Bn,e,t),m=ve(qr,null),u=y(()=>{if(c)return!0;const{round:x,circle:T}=e;return x!==void 0||T!==void 0?x||T:m?m.roundRef.value:!1}),_=y(()=>c?!0:e.bordered||!1),w=x=>{var T;if(!F.value)return;n.value=!0;const{onError:D,imgProps:P}=e;(T=P==null?void 0:P.onError)===null||T===void 0||T.call(P,x),D&&D(x)};ue(()=>e.src,()=>n.value=!1);const B=y(()=>{const x=p.value,T=u.value,D=_.value,{color:P}=e,{self:{borderRadius:O,fontSize:$,color:S,border:v,colorModal:V,colorPopover:K},common:{cubicBezierEaseInOut:Z}}=f.value;let re;return typeof x=="number"?re=`${x}px`:re=f.value.self[we("height",x)],{"--n-font-size":$,"--n-border":D?v:"none","--n-border-radius":T?"50%":O,"--n-color":P||S,"--n-color-modal":P||V,"--n-color-popover":P||K,"--n-bezier":Z,"--n-merged-size":`var(--n-avatar-size-override, ${re})`}}),A=o?Ue("avatar",y(()=>{const x=p.value,T=u.value,D=_.value,{color:P}=e;let O="";return x&&(typeof x=="number"?O+=`a${x}`:O+=x[0]),T&&(O+="b"),D&&(O+="c"),P&&(O+=Fo(P)),O}),B,e):void 0,F=U(!e.lazy);st(()=>{if(Vt)return;let x;const T=Ye(()=>{x==null||x(),x=void 0,e.lazy&&(x=ra(i.value,e.intersectionObserverOptions,F))});oo(()=>{T(),x==null||x()})});const H=U(!e.lazy);return{textRef:a,selfRef:i,mergedRoundRef:u,mergedClsPrefix:t,fitTextTransform:s,cssVars:o?void 0:B,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender,hasLoadError:n,handleError:w,shouldStartLoading:F,loaded:H,mergedOnLoad:x=>{var T;const{onLoad:D,imgProps:P}=e;D==null||D(x),(T=P==null?void 0:P.onLoad)===null||T===void 0||T.call(P,x),H.value=!0}}},render(){var e,t;const{$slots:o,src:n,mergedClsPrefix:r,lazy:a,onRender:i,mergedOnLoad:s,shouldStartLoading:c,loaded:p,hasLoadError:f}=this;i==null||i();let m;const u=!p&&!f&&(this.renderPlaceholder?this.renderPlaceholder():(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e));return this.hasLoadError?m=this.renderFallback?this.renderFallback():Dt(o.fallback,()=>[d("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):m=Te(o.default,_=>{if(_)return d(An,{onResize:this.fitTextTransform},{default:()=>d("span",{ref:"textRef",class:`${r}-avatar__text`},_)});if(n){const{imgProps:w}=this;return d("img",Object.assign(Object.assign({},w),{loading:Vt&&!this.intersectionObserverOptions&&a?"lazy":"eager",src:Vt||c||p?n:void 0,onLoad:s,"data-image-src":n,onError:this.handleError,style:[w==null?void 0:w.style,{objectFit:this.objectFit},u?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),d("span",{ref:"selfRef",class:[`${r}-avatar`,this.themeClass],style:this.cssVars},m,a&&u)}}),ca=e=>{const{popoverColor:t,textColor2:o,primaryColorHover:n,primaryColorPressed:r}=e;return Object.assign(Object.assign({},In),{color:t,textColor:o,iconColor:o,iconColorHover:n,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},da={name:"BackTop",common:no,self:ca},ua=da,ha=d("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink"},d("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},d("g",{transform:"translate(-139.000000, -4423.000000)","fill-rule":"nonzero"},d("g",{transform:"translate(120.000000, 4285.000000)"},d("g",{transform:"translate(7.000000, 126.000000)"},d("g",{transform:"translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"},d("g",{transform:"translate(4.000000, 2.000000)"},d("path",{d:"M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z"}),d("path",{d:"M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z"})))))))),ma=M("back-top",`
 position: fixed;
 right: 40px;
 bottom: 40px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 height: var(--n-height);
 min-width: var(--n-width);
 box-shadow: var(--n-box-shadow);
 background-color: var(--n-color);
`,[Pt(),j("transition-disabled",{transition:"none !important"}),M("base-icon",`
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),C("svg",{pointerEvents:"none"}),C("&:hover",{boxShadow:"var(--n-box-shadow-hover)"},[M("base-icon",{color:"var(--n-icon-color-hover)"})]),C("&:active",{boxShadow:"var(--n-box-shadow-pressed)"},[M("base-icon",{color:"var(--n-icon-color-pressed)"})])]),pa=Object.assign(Object.assign({},de.props),{show:{type:Boolean,default:void 0},right:{type:[Number,String],default:40},bottom:{type:[Number,String],default:40},to:{type:[String,Object],default:"body"},visibilityHeight:{type:Number,default:180},listenTo:[String,Object,Function],"onUpdate:show":{type:Function,default:()=>{}},target:Function,onShow:Function,onHide:Function}),va=E({name:"BackTop",inheritAttrs:!1,props:pa,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ae(e),n=U(null),r=U(!1);Ye(()=>{const{value:T}=n;if(T===null){r.value=!1;return}r.value=T>=e.visibilityHeight});const a=U(!1);ue(r,T=>{var D;a.value&&((D=e["onUpdate:show"])===null||D===void 0||D.call(e,T))});const i=be(e,"show"),s=Le(i,r),c=U(!0),p=U(null),f=y(()=>({right:`calc(${Tt(e.right)} + ${Fn.value})`,bottom:Tt(e.bottom)}));let m,u;ue(s,T=>{var D,P;a.value&&(T&&((D=e.onShow)===null||D===void 0||D.call(e)),(P=e.onHide)===null||P===void 0||P.call(e))});const _=de("BackTop","-back-top",ma,ua,e,t);function w(){var T;if(u)return;u=!0;const D=((T=e.target)===null||T===void 0?void 0:T.call(e))||Jr(e.listenTo)||tn(p.value);if(!D)return;m=D===document.documentElement?document:D;const{to:P}=e;typeof P=="string"&&document.querySelector(P),m.addEventListener("scroll",A),A()}function B(){(zo(m)?document.documentElement:m).scrollTo({top:0,behavior:"smooth"})}function A(){n.value=(zo(m)?document.documentElement:m).scrollTop,a.value||nt(()=>{a.value=!0})}function F(){c.value=!1}st(()=>{w(),c.value=s.value}),oo(()=>{m&&m.removeEventListener("scroll",A)});const H=y(()=>{const{self:{color:T,boxShadow:D,boxShadowHover:P,boxShadowPressed:O,iconColor:$,iconColorHover:S,iconColorPressed:v,width:V,height:K,iconSize:Z,borderRadius:re,textColor:ae},common:{cubicBezierEaseInOut:k}}=_.value;return{"--n-bezier":k,"--n-border-radius":re,"--n-height":K,"--n-width":V,"--n-box-shadow":D,"--n-box-shadow-hover":P,"--n-box-shadow-pressed":O,"--n-color":T,"--n-icon-size":Z,"--n-icon-color":$,"--n-icon-color-hover":S,"--n-icon-color-pressed":v,"--n-text-color":ae}}),x=o?Ue("back-top",void 0,H,e):void 0;return{placeholderRef:p,style:f,mergedShow:s,isMounted:ro(),scrollElement:U(null),scrollTop:n,DomInfoReady:a,transitionDisabled:c,mergedClsPrefix:t,handleAfterEnter:F,handleScroll:A,handleClick:B,cssVars:o?void 0:H,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e}=this;return d("div",{ref:"placeholderRef",class:`${e}-back-top-placeholder`,style:"display: none","aria-hidden":!0},d(Po,{to:this.to,show:this.mergedShow},{default:()=>d(Ct,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterEnter:this.handleAfterEnter},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),this.mergedShow?d("div",Et(this.$attrs,{class:[`${e}-back-top`,this.themeClass,this.transitionDisabled&&`${e}-back-top--transition-disabled`],style:[this.style,this.cssVars],onClick:this.handleClick}),Dt(this.$slots.default,()=>[d(To,{clsPrefix:e},{default:()=>ha})])):null}})}))}}),fa=e=>{const{errorColor:t,infoColor:o,successColor:n,warningColor:r,fontFamily:a}=e;return{color:t,colorInfo:o,colorSuccess:n,colorError:t,colorWarning:r,fontSize:"12px",fontFamily:a}},ba={name:"Badge",common:no,self:fa},ga=ba,_a=C([C("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),M("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[j("as-is",[M("badge-sup",{position:"static",transform:"translateX(0)"},[Pt({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),j("dot",[M("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[C("::before","border-radius: 4px;")])]),M("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `,[Pt({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),M("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),C("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),xa=Object.assign(Object.assign({},de.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),ya=E({name:"Badge",props:xa,setup(e,{slots:t}){const{mergedClsPrefixRef:o,inlineThemeDisabled:n,mergedRtlRef:r}=Ae(e),a=de("Badge","-badge",_a,ga,e,o),i=U(!1),s=()=>{i.value=!0},c=()=>{i.value=!1},p=y(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&Number(e.value)<=0)||!It(t.value)));st(()=>{p.value&&(i.value=!0)});const f=Do("Badge",r,o),m=y(()=>{const{type:w,color:B}=e,{common:{cubicBezierEaseInOut:A,cubicBezierEaseOut:F},self:{[we("color",w)]:H,fontFamily:x,fontSize:T}}=a.value;return{"--n-font-size":T,"--n-font-family":x,"--n-color":B||H,"--n-ripple-color":B||H,"--n-bezier":A,"--n-ripple-bezier":F}}),u=n?Ue("badge",y(()=>{let w="";const{type:B,color:A}=e;return B&&(w+=B[0]),A&&(w+=Fo(A)),w}),m,e):void 0,_=y(()=>{const{offset:w}=e;if(!w)return;const[B,A]=w,F=typeof B=="number"?`${B}px`:B,H=typeof A=="number"?`${A}px`:A;return{transform:`translate(calc(${f!=null&&f.value?"50%":"-50%"} + ${F}), ${H})`}});return{rtlEnabled:f,mergedClsPrefix:o,appeared:i,showBadge:p,handleAfterEnter:s,handleAfterLeave:c,cssVars:n?void 0:m,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender,offsetStyle:_}},render(){var e;const{mergedClsPrefix:t,onRender:o,themeClass:n,$slots:r}=this;o==null||o();const a=(e=r.default)===null||e===void 0?void 0:e.call(r);return d("div",{class:[`${t}-badge`,this.rtlEnabled&&`${t}-badge--rtl`,n,{[`${t}-badge--dot`]:this.dot,[`${t}-badge--as-is`]:!a}],style:this.cssVars},a,d(Ct,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?d("sup",{class:`${t}-badge-sup`,title:Hr(this.value),style:this.offsetStyle},Dt(r.value,()=>[this.dot?null:d(oa,{clsPrefix:t,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?d(Pn,{clsPrefix:t}):null):null}))}}),wa=M("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[C("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),C("a",`
 color: inherit;
 text-decoration: inherit;
 `),M("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[M("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),C("&:not(:last-child)",[j("clickable",[z("link",`
 cursor: pointer;
 `,[C("&:hover",`
 background-color: var(--n-item-color-hover);
 `),C("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),z("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[C("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[M("icon",`
 color: var(--n-item-text-color-hover);
 `)]),C("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[M("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),z("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),C("&:last-child",[z("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[M("icon",`
 color: var(--n-item-text-color-active);
 `)]),z("separator",`
 display: none;
 `)])])]),nn=Ze("n-breadcrumb"),Ca=Object.assign(Object.assign({},de.props),{separator:{type:String,default:"/"}}),ka=E({name:"Breadcrumb",props:Ca,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ae(e),n=de("Breadcrumb","-breadcrumb",wa,Tn,e,t);Ce(nn,{separatorRef:be(e,"separator"),mergedClsPrefixRef:t});const r=y(()=>{const{common:{cubicBezierEaseInOut:i},self:{separatorColor:s,itemTextColor:c,itemTextColorHover:p,itemTextColorPressed:f,itemTextColorActive:m,fontSize:u,fontWeightActive:_,itemBorderRadius:w,itemColorHover:B,itemColorPressed:A,itemLineHeight:F}}=n.value;return{"--n-font-size":u,"--n-bezier":i,"--n-item-text-color":c,"--n-item-text-color-hover":p,"--n-item-text-color-pressed":f,"--n-item-text-color-active":m,"--n-separator-color":s,"--n-item-color-hover":B,"--n-item-color-pressed":A,"--n-item-border-radius":w,"--n-font-weight-active":_,"--n-item-line-height":F}}),a=o?Ue("breadcrumb",void 0,r,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:r,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),d("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},d("ul",null,this.$slots))}}),$a=(e=Io?window:null)=>{const t=()=>{const{hash:r,host:a,hostname:i,href:s,origin:c,pathname:p,port:f,protocol:m,search:u}=(e==null?void 0:e.location)||{};return{hash:r,host:a,hostname:i,href:s,origin:c,pathname:p,port:f,protocol:m,search:u}},o=()=>{n.value=t()},n=U(t());return st(()=>{e&&(e.addEventListener("popstate",o),e.addEventListener("hashchange",o))}),Eo(()=>{e&&(e.removeEventListener("popstate",o),e.removeEventListener("hashchange",o))}),n},za={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},Sa=E({name:"BreadcrumbItem",props:za,setup(e,{slots:t}){const o=ve(nn,null);if(!o)return()=>null;const{separatorRef:n,mergedClsPrefixRef:r}=o,a=$a(),i=y(()=>e.href?"a":"span"),s=y(()=>a.value.href===e.href?"location":null);return()=>{const{value:c}=r;return d("li",{class:[`${c}-breadcrumb-item`,e.clickable&&`${c}-breadcrumb-item--clickable`]},d(i.value,{class:`${c}-breadcrumb-item__link`,"aria-current":s.value,href:e.href,onClick:e.onClick},t),d("span",{class:`${c}-breadcrumb-item__separator`,"aria-hidden":"true"},Dt(t.separator,()=>{var p;return[(p=e.separator)!==null&&p!==void 0?p:n.value]})))}}});function Ra(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function yt(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function Ma(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Ba(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const Aa={rgb:{hex(e){return Ee(Re(e))},hsl(e){const[t,o,n,r]=Re(e);return He([...eo(t,o,n),r])},hsv(e){const[t,o,n,r]=Re(e);return qe([...Qt(t,o,n),r])}},hex:{rgb(e){return Be(Re(e))},hsl(e){const[t,o,n,r]=Re(e);return He([...eo(t,o,n),r])},hsv(e){const[t,o,n,r]=Re(e);return qe([...Qt(t,o,n),r])}},hsl:{hex(e){const[t,o,n,r]=tt(e);return Ee([...to(t,o,n),r])},rgb(e){const[t,o,n,r]=tt(e);return Be([...to(t,o,n),r])},hsv(e){const[t,o,n,r]=tt(e);return qe([...on(t,o,n),r])}},hsv:{hex(e){const[t,o,n,r]=Xe(e);return Ee([...De(t,o,n),r])},rgb(e){const[t,o,n,r]=Xe(e);return Be([...De(t,o,n),r])},hsl(e){const[t,o,n,r]=Xe(e);return He([...Ft(t,o,n),r])}}};function rn(e,t,o){return o=o||yt(e),o?o===t?e:Aa[o][t](e):null}const Qe="12px",Ia=12,je="6px",Fa=6,Pa="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Ta=E({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=U(null);function o(a){t.value&&(rt("mousemove",document,n),rt("mouseup",document,r),n(a))}function n(a){const{value:i}=t;if(!i)return;const{width:s,left:c}=i.getBoundingClientRect(),p=Ma((a.clientX-c-Fa)/(s-Ia)*360);e.onUpdateHue(p)}function r(){var a;at("mousemove",document,n),at("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,handleMouseDown:o}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,style:{height:Qe,borderRadius:je}},d("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Pa,height:Qe,borderRadius:je,position:"relative"},onMousedown:this.handleMouseDown},d("div",{style:{position:"absolute",left:je,right:je,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${je})`,borderRadius:je,width:Qe,height:Qe}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:je,width:Qe,height:Qe}})))))}}),gt="12px",Da=12,Ke="6px",Ea=E({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=U(null);function o(a){!t.value||!e.rgba||(rt("mousemove",document,n),rt("mouseup",document,r),n(a))}function n(a){const{value:i}=t;if(!i)return;const{width:s,left:c}=i.getBoundingClientRect(),p=(a.clientX-c)/(s-Da);e.onUpdateAlpha(Ba(p))}function r(){var a;at("mousemove",document,n),at("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,railBackgroundImage:y(()=>{const{rgba:a}=e;return a?`linear-gradient(to right, rgba(${a[0]}, ${a[1]}, ${a[2]}, 0) 0%, rgba(${a[0]}, ${a[1]}, ${a[2]}, 1) 100%)`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:gt,borderRadius:Ke},onMousedown:this.handleMouseDown},d("div",{style:{borderRadius:Ke,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},d("div",{class:`${e}-color-picker-checkboard`}),d("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&d("div",{style:{position:"absolute",left:Ke,right:Ke,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${Ke})`,borderRadius:Ke,width:gt,height:gt}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:Be(this.rgba),borderRadius:Ke,width:gt,height:gt}}))))}}),Mt="12px",Bt="6px",Ha=E({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=U(null);function o(a){t.value&&(rt("mousemove",document,n),rt("mouseup",document,r),n(a))}function n(a){const{value:i}=t;if(!i)return;const{width:s,height:c,left:p,bottom:f}=i.getBoundingClientRect(),m=(f-a.clientY)/c,u=(a.clientX-p)/s,_=100*(u>1?1:u<0?0:u),w=100*(m>1?1:m<0?0:m);e.onUpdateSV(_,w)}function r(){var a;at("mousemove",document,n),at("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{palleteRef:t,handleColor:y(()=>{const{rgba:a}=e;return a?`rgb(${a[0]}, ${a[1]}, ${a[2]})`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},d("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),d("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&d("div",{class:`${e}-color-picker-handle`,style:{width:Mt,height:Mt,borderRadius:Bt,left:`calc(${this.displayedSv[0]}% - ${Bt})`,bottom:`calc(${this.displayedSv[1]}% - ${Bt})`}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Bt,width:Mt,height:Mt}})))}}),mo=Ze("n-color-picker");function La(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function Ua(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function Na(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function Va(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Oa(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const ja={paddingSmall:"0 4px"},Ro=E({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=U(""),{themeRef:o}=ve(mo,null);Ye(()=>{t.value=n()});function n(){const{value:i}=e;if(i===null)return"";const{label:s}=e;return s==="HEX"?i:s==="A"?`${Math.floor(i*100)}%`:String(Math.floor(i))}function r(i){t.value=i}function a(i){let s,c;switch(e.label){case"HEX":c=Va(i),c&&e.onUpdateValue(i),t.value=n();break;case"H":s=Ua(i),s===!1?t.value=n():e.onUpdateValue(s);break;case"S":case"L":case"V":s=Na(i),s===!1?t.value=n():e.onUpdateValue(s);break;case"A":s=Oa(i),s===!1?t.value=n():e.onUpdateValue(s);break;case"R":case"G":case"B":s=La(i),s===!1?t.value=n():e.onUpdateValue(s);break}}return{mergedTheme:o,inputValue:t,handleInputChange:a,handleInputUpdateValue:r}},render(){const{mergedTheme:e}=this;return d(Jo,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:ja,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Ka=E({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,o){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?Ee:xt)(o));return}let r;switch(e.valueArr===null?r=[0,0,0,0]:r=Array.from(e.valueArr),e.mode){case"hsv":r[t]=o,e.onUpdateValue((n?qe:Xt)(r));break;case"rgb":r[t]=o,e.onUpdateValue((n?Be:qt)(r));break;case"hsl":r[t]=o,e.onUpdateValue((n?He:Wt)(r));break}}}},render(){const{clsPrefix:e,modes:t}=this;return d("div",{class:`${e}-color-picker-input`},d("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),d(Qo,null,{default:()=>{const{mode:o,valueArr:n,showAlpha:r}=this;if(o==="hex"){let a=null;try{a=n===null?null:(r?Ee:xt)(n)}catch{}return d(Ro,{label:"HEX",showAlpha:r,value:a,onUpdateValue:i=>{this.handleUnitUpdateValue(0,i)}})}return(o+(r?"a":"")).split("").map((a,i)=>d(Ro,{label:a.toUpperCase(),value:n===null?null:n[i],onUpdateValue:s=>{this.handleUnitUpdateValue(i,s)}}))}}))}}),Wa=E({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:o}=ve(mo,null);return()=>{const{hsla:n,value:r,clsPrefix:a,onClick:i,disabled:s}=e,c=t.label||o.value;return d("div",{class:[`${a}-color-picker-trigger`,s&&`${a}-color-picker-trigger--disabled`],onClick:s?void 0:i},d("div",{class:`${a}-color-picker-trigger__fill`},d("div",{class:`${a}-color-picker-checkboard`}),d("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?He(n):""}}),r&&n?d("div",{class:`${a}-color-picker-trigger__value`,style:{color:n[2]>50||n[3]<.5?"black":"white"}},c?c(r):r):null))}}});function qa(e,t){if(t==="hsv"){const[o,n,r,a]=Xe(e);return Be([...De(o,n,r),a])}return e}function Xa(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}const Ya=E({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=y(()=>e.swatches.map(a=>{const i=yt(a);return{value:a,mode:i,legalValue:qa(a,i)}}));function o(a){const{mode:i}=e;let{value:s,mode:c}=a;return c||(c="hex",/^[a-zA-Z]+$/.test(s)?s=Xa(s):(Dn("color-picker",`color ${s} in swatches is invalid.`),s="#000000")),c===i?s:rn(s,i,c)}function n(a){e.onUpdateColor(o(a))}function r(a,i){a.key==="Enter"&&n(i)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:r}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>d("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:o=>{this.handleSwatchKeyDown(o,t)}},d("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Za=E({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=yt(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(o){var n;const r=o.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,rn(r.toUpperCase(),e.mode,"hex")),o.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-preview__preview`},d("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),d("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Ga=C([M("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),M("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[Pt(),M("input",`
 text-align: center;
 `)]),M("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[C("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),M("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[z("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),C("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),M("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[z("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),M("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[z("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[j("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),M("color-picker-preview",`
 display: flex;
 `,[z("sliders",`
 flex: 1 0 auto;
 `),z("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),z("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),z("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),M("color-picker-input",`
 display: flex;
 align-items: center;
 `,[M("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),z("mode",`
 width: 72px;
 text-align: center;
 `)]),M("color-picker-control",`
 padding: 12px;
 `),M("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[M("button","margin-left: 8px;")]),M("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[z("value",`
 white-space: nowrap;
 position: relative;
 `),z("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),j("disabled","cursor: not-allowed"),M("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[C("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),M("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[M("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[z("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),C("&:focus",`
 outline: none;
 `,[z("fill",[C("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),Ja=Object.assign(Object.assign({},de.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Jt.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Qa=E({name:"ColorPicker",props:Ja,setup(e,{slots:t}){const o=U(null);let n=null;const r=Ho(e),{mergedSizeRef:a,mergedDisabledRef:i}=r,{localeRef:s}=Ir("global"),{mergedClsPrefixRef:c,namespaceRef:p,inlineThemeDisabled:f}=Ae(e),m=de("ColorPicker","-color-picker",Ga,En,e,c);Ce(mo,{themeRef:m,renderLabelRef:be(e,"renderLabel"),colorPickerSlots:t});const u=U(e.defaultShow),_=Le(be(e,"show"),u);function w(R){const{onUpdateShow:q,"onUpdate:show":te}=e;q&&ne(q,R),te&&ne(te,R),u.value=R}const{defaultValue:B}=e,A=U(B===void 0?Ra(e.modes,e.showAlpha):B),F=Le(be(e,"value"),A),H=U([F.value]),x=U(0),T=y(()=>yt(F.value)),{modes:D}=e,P=U(yt(F.value)||D[0]||"rgb");function O(){const{modes:R}=e,{value:q}=P,te=R.findIndex(oe=>oe===q);~te?P.value=R[(te+1)%R.length]:P.value="rgb"}let $,S,v,V,K,Z,re,ae;const k=y(()=>{const{value:R}=F;if(!R)return null;switch(T.value){case"hsv":return Xe(R);case"hsl":return[$,S,v,ae]=tt(R),[...on($,S,v),ae];case"rgb":case"hex":return[K,Z,re,ae]=Re(R),[...Qt(K,Z,re),ae]}}),xe=y(()=>{const{value:R}=F;if(!R)return null;switch(T.value){case"rgb":case"hex":return Re(R);case"hsv":return[$,S,V,ae]=Xe(R),[...De($,S,V),ae];case"hsl":return[$,S,v,ae]=tt(R),[...to($,S,v),ae]}}),me=y(()=>{const{value:R}=F;if(!R)return null;switch(T.value){case"hsl":return tt(R);case"hsv":return[$,S,V,ae]=Xe(R),[...Ft($,S,V),ae];case"rgb":case"hex":return[K,Z,re,ae]=Re(R),[...eo(K,Z,re),ae]}}),pt=y(()=>{switch(P.value){case"rgb":case"hex":return xe.value;case"hsv":return k.value;case"hsl":return me.value}}),Pe=U(0),pe=U(1),ye=U([0,0]);function vt(R,q){const{value:te}=k,oe=Pe.value,ie=te?te[3]:1;ye.value=[R,q];const{showAlpha:Q}=e;switch(P.value){case"hsv":J((Q?qe:Xt)([oe,R,q,ie]),"cursor");break;case"hsl":J((Q?He:Wt)([...Ft(oe,R,q),ie]),"cursor");break;case"rgb":J((Q?Be:qt)([...De(oe,R,q),ie]),"cursor");break;case"hex":J((Q?Ee:xt)([...De(oe,R,q),ie]),"cursor");break}}function ft(R){Pe.value=R;const{value:q}=k;if(!q)return;const[,te,oe,ie]=q,{showAlpha:Q}=e;switch(P.value){case"hsv":J((Q?qe:Xt)([R,te,oe,ie]),"cursor");break;case"rgb":J((Q?Be:qt)([...De(R,te,oe),ie]),"cursor");break;case"hex":J((Q?Ee:xt)([...De(R,te,oe),ie]),"cursor");break;case"hsl":J((Q?He:Wt)([...Ft(R,te,oe),ie]),"cursor");break}}function bt(R){switch(P.value){case"hsv":[$,S,V]=k.value,J(qe([$,S,V,R]),"cursor");break;case"rgb":[K,Z,re]=xe.value,J(Be([K,Z,re,R]),"cursor");break;case"hex":[K,Z,re]=xe.value,J(Ee([K,Z,re,R]),"cursor");break;case"hsl":[$,S,v]=me.value,J(He([$,S,v,R]),"cursor");break}pe.value=R}function J(R,q){q==="cursor"?n=R:n=null;const{nTriggerFormChange:te,nTriggerFormInput:oe}=r,{onUpdateValue:ie,"onUpdate:value":Q}=e;ie&&ne(ie,R),Q&&ne(Q,R),te(),oe(),A.value=R}function Ve(R){J(R,"input"),nt(ge)}function ge(R=!0){const{value:q}=F;if(q){const{nTriggerFormChange:te,nTriggerFormInput:oe}=r,{onComplete:ie}=e;ie&&ie(q);const{value:Q}=H,{value:fe}=x;R&&(Q.splice(fe+1,Q.length,q),x.value=fe+1),te(),oe()}}function fn(){const{value:R}=x;R-1<0||(J(H.value[R-1],"input"),ge(!1),x.value=R-1)}function bn(){const{value:R}=x;R<0||R+1>=H.value.length||(J(H.value[R+1],"input"),ge(!1),x.value=R+1)}function gn(){J(null,"input"),w(!1)}function _n(){const{value:R}=F,{onConfirm:q}=e;q&&q(R),w(!1)}const xn=y(()=>x.value>=1),yn=y(()=>{const{value:R}=H;return R.length>1&&x.value<R.length-1});ue(_,R=>{R||(H.value=[F.value],x.value=0)}),Ye(()=>{if(!(n&&n===F.value)){const{value:R}=k;R&&(Pe.value=R[0],pe.value=R[3],ye.value=[R[1],R[2]])}n=null});const Lt=y(()=>{const{value:R}=a,{common:{cubicBezierEaseInOut:q},self:{textColor:te,color:oe,panelFontSize:ie,boxShadow:Q,border:fe,borderRadius:he,dividerColor:Oe,[we("height",R)]:Cn,[we("fontSize",R)]:kn}}=m.value;return{"--n-bezier":q,"--n-text-color":te,"--n-color":oe,"--n-panel-font-size":ie,"--n-font-size":kn,"--n-box-shadow":Q,"--n-border":fe,"--n-border-radius":he,"--n-height":Cn,"--n-divider-color":Oe}}),ze=f?Ue("color-picker",y(()=>a.value[0]),Lt,e):void 0;function wn(){var R;const{value:q}=xe,{value:te}=Pe,{internalActions:oe,modes:ie,actions:Q}=e,{value:fe}=m,{value:he}=c;return d("div",{class:[`${he}-color-picker-panel`,ze==null?void 0:ze.themeClass.value],onDragstart:Oe=>{Oe.preventDefault()},style:f?void 0:Lt.value},d("div",{class:`${he}-color-picker-control`},d(Ha,{clsPrefix:he,rgba:q,displayedHue:te,displayedSv:ye.value,onUpdateSV:vt,onComplete:ge}),d("div",{class:`${he}-color-picker-preview`},d("div",{class:`${he}-color-picker-preview__sliders`},d(Ta,{clsPrefix:he,hue:te,onUpdateHue:ft,onComplete:ge}),e.showAlpha?d(Ea,{clsPrefix:he,rgba:q,alpha:pe.value,onUpdateAlpha:bt,onComplete:ge}):null),e.showPreview?d(Za,{clsPrefix:he,mode:P.value,color:xe.value&&xt(xe.value),onUpdateColor:Oe=>{J(Oe,"input")}}):null),d(Ka,{clsPrefix:he,showAlpha:e.showAlpha,mode:P.value,modes:ie,onUpdateMode:O,value:F.value,valueArr:pt.value,onUpdateValue:Ve}),((R=e.swatches)===null||R===void 0?void 0:R.length)&&d(Ya,{clsPrefix:he,mode:P.value,swatches:e.swatches,onUpdateColor:Oe=>{J(Oe,"input")}})),Q!=null&&Q.length?d("div",{class:`${he}-color-picker-action`},Q.includes("confirm")&&d(Me,{size:"small",onClick:_n,theme:fe.peers.Button,themeOverrides:fe.peerOverrides.Button},{default:()=>s.value.confirm}),Q.includes("clear")&&d(Me,{size:"small",onClick:gn,disabled:!F.value,theme:fe.peers.Button,themeOverrides:fe.peerOverrides.Button},{default:()=>s.value.clear})):null,t.action?d("div",{class:`${he}-color-picker-action`},{default:t.action}):oe?d("div",{class:`${he}-color-picker-action`},oe.includes("undo")&&d(Me,{size:"small",onClick:fn,disabled:!xn.value,theme:fe.peers.Button,themeOverrides:fe.peerOverrides.Button},{default:()=>s.value.undo}),oe.includes("redo")&&d(Me,{size:"small",onClick:bn,disabled:!yn.value,theme:fe.peers.Button,themeOverrides:fe.peerOverrides.Button},{default:()=>s.value.redo})):null)}return{mergedClsPrefix:c,namespace:p,selfRef:o,hsla:me,rgba:xe,mergedShow:_,mergedDisabled:i,isMounted:ro(),adjustedTo:Jt(e),mergedValue:F,handleTriggerClick(){w(!0)},handleClickOutside(R){var q;!((q=o.value)===null||q===void 0)&&q.contains(Hn(R))||w(!1)},renderPanel:wn,cssVars:f?void 0:Lt,themeClass:ze==null?void 0:ze.themeClass,onRender:ze==null?void 0:ze.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),d("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},d(Fr,null,{default:()=>[d(Pr,null,{default:()=>d(Wa,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),d(Tr,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Jt.tdkey,to:this.adjustedTo},{default:()=>d(Ct,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?lt(this.renderPanel(),[[Lo,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),el=E({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=U(!!e.show),o=U(null),n=ve(ao);let r=0,a="",i=null;const s=U(!1),c=U(!1),p=y(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:f,mergedRtlRef:m}=Ae(e),u=Do("Drawer",m,f),_=S=>{c.value=!0,r=p.value?S.clientY:S.clientX,a=document.body.style.cursor,document.body.style.cursor=p.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",T),document.body.addEventListener("mouseleave",P),document.body.addEventListener("mouseup",D)},w=()=>{i!==null&&(window.clearTimeout(i),i=null),c.value?s.value=!0:i=window.setTimeout(()=>{s.value=!0},300)},B=()=>{i!==null&&(window.clearTimeout(i),i=null),s.value=!1},{doUpdateHeight:A,doUpdateWidth:F}=n,H=S=>{const{maxWidth:v}=e;if(v&&S>v)return v;const{minWidth:V}=e;return V&&S<V?V:S},x=S=>{const{maxHeight:v}=e;if(v&&S>v)return v;const{minHeight:V}=e;return V&&S<V?V:S},T=S=>{var v,V;if(c.value)if(p.value){let K=((v=o.value)===null||v===void 0?void 0:v.offsetHeight)||0;const Z=r-S.clientY;K+=e.placement==="bottom"?Z:-Z,K=x(K),A(K),r=S.clientY}else{let K=((V=o.value)===null||V===void 0?void 0:V.offsetWidth)||0;const Z=r-S.clientX;K+=e.placement==="right"?Z:-Z,K=H(K),F(K),r=S.clientX}},D=()=>{c.value&&(r=0,c.value=!1,document.body.style.cursor=a,document.body.removeEventListener("mousemove",T),document.body.removeEventListener("mouseup",D),document.body.removeEventListener("mouseleave",P))},P=D;Ye(()=>{e.show&&(t.value=!0)}),ue(()=>e.show,S=>{S||D()}),oo(()=>{D()});const O=y(()=>{const{show:S}=e,v=[[Yt,S]];return e.showMask||v.push([Lo,e.onClickoutside,void 0,{capture:!0}]),v});function $(){var S;t.value=!1,(S=e.onAfterLeave)===null||S===void 0||S.call(e)}return Ln(y(()=>e.blockScroll&&t.value)),Ce(Un,o),Ce(Nn,null),Ce(Vn,null),{bodyRef:o,rtlEnabled:u,mergedClsPrefix:n.mergedClsPrefixRef,isMounted:n.isMountedRef,mergedTheme:n.mergedThemeRef,displayed:t,transitionName:y(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:$,bodyDirectives:O,handleMousedownResizeTrigger:_,handleMouseenterResizeTrigger:w,handleMouseleaveResizeTrigger:B,isDragging:c,isHoverOnResizeTrigger:s}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?lt(d("div",{role:"none"},d(On,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>d(Ct,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>lt(d("div",Et(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?d("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?d("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):d(lo,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[Yt,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:tl,cubicBezierEaseOut:ol}=wt;function nl({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[C(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${tl}`}),C(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${ol}`}),C(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),C(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),C(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),C(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:rl,cubicBezierEaseOut:al}=wt;function ll({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[C(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${rl}`}),C(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${al}`}),C(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),C(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),C(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),C(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:il,cubicBezierEaseOut:sl}=wt;function cl({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[C(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${il}`}),C(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${sl}`}),C(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),C(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),C(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),C(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:dl,cubicBezierEaseOut:ul}=wt;function hl({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[C(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${dl}`}),C(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${ul}`}),C(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),C(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),C(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),C(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const ml=C([M("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[nl(),ll(),cl(),hl(),j("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),j("native-scrollbar",[M("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),z("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[j("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),M("drawer-content-wrapper",`
 box-sizing: border-box;
 `),M("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[j("native-scrollbar",[M("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),M("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),M("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),M("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[z("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),M("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),j("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[z("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),j("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[z("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),j("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[z("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),j("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[z("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),C("body",[C(">",[M("drawer-container",{position:"fixed"})])]),M("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[C("> *",{pointerEvents:"all"})]),M("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[j("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),jn({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),pl=Object.assign(Object.assign({},de.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),vl=E({name:"Drawer",inheritAttrs:!1,props:pl,setup(e){const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:n}=Ae(e),r=ro(),a=de("Drawer","-drawer",ml,Kn,e,t),i=U(e.defaultWidth),s=U(e.defaultHeight),c=Le(be(e,"width"),i),p=Le(be(e,"height"),s),f=y(()=>{const{placement:D}=e;return D==="top"||D==="bottom"?"":Tt(c.value)}),m=y(()=>{const{placement:D}=e;return D==="left"||D==="right"?"":Tt(p.value)}),u=D=>{const{onUpdateWidth:P,"onUpdate:width":O}=e;P&&ne(P,D),O&&ne(O,D),i.value=D},_=D=>{const{onUpdateHeight:P,"onUpdate:width":O}=e;P&&ne(P,D),O&&ne(O,D),s.value=D},w=y(()=>[{width:f.value,height:m.value},e.drawerStyle||""]);function B(D){const{onMaskClick:P,maskClosable:O}=e;O&&H(!1),P&&P(D)}const A=Wn();function F(D){var P;(P=e.onEsc)===null||P===void 0||P.call(e),e.show&&e.closeOnEsc&&Xn(D)&&!A.value&&H(!1)}function H(D){const{onHide:P,onUpdateShow:O,"onUpdate:show":$}=e;O&&ne(O,D),$&&ne($,D),P&&!D&&ne(P,D)}Ce(ao,{isMountedRef:r,mergedThemeRef:a,mergedClsPrefixRef:t,doUpdateShow:H,doUpdateHeight:_,doUpdateWidth:u});const x=y(()=>{const{common:{cubicBezierEaseInOut:D,cubicBezierEaseIn:P,cubicBezierEaseOut:O},self:{color:$,textColor:S,boxShadow:v,lineHeight:V,headerPadding:K,footerPadding:Z,bodyPadding:re,titleFontSize:ae,titleTextColor:k,titleFontWeight:xe,headerBorderBottom:me,footerBorderTop:pt,closeIconColor:Pe,closeIconColorHover:pe,closeIconColorPressed:ye,closeColorHover:vt,closeColorPressed:ft,closeIconSize:bt,closeSize:J,closeBorderRadius:Ve,resizableTriggerColorHover:ge}}=a.value;return{"--n-line-height":V,"--n-color":$,"--n-text-color":S,"--n-box-shadow":v,"--n-bezier":D,"--n-bezier-out":O,"--n-bezier-in":P,"--n-header-padding":K,"--n-body-padding":re,"--n-footer-padding":Z,"--n-title-text-color":k,"--n-title-font-size":ae,"--n-title-font-weight":xe,"--n-header-border-bottom":me,"--n-footer-border-top":pt,"--n-close-icon-color":Pe,"--n-close-icon-color-hover":pe,"--n-close-icon-color-pressed":ye,"--n-close-size":J,"--n-close-color-hover":vt,"--n-close-color-pressed":ft,"--n-close-icon-size":bt,"--n-close-border-radius":Ve,"--n-resize-trigger-color-hover":ge}}),T=n?Ue("drawer",void 0,x,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:w,handleMaskClick:B,handleEsc:F,mergedTheme:a,cssVars:n?void 0:x,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender,isMounted:r}},render(){const{mergedClsPrefix:e}=this;return d(Po,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),lt(d("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?d(Ct,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?d("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,d(el,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[qn,{zIndex:this.zIndex,enabled:this.show}]])}})}}),fl={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},bl=E({name:"DrawerContent",props:fl,setup(){const e=ve(ao,null);e||Yn("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function o(){t(!1)}return{handleCloseClick:o,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:o,mergedTheme:n,bodyStyle:r,bodyContentStyle:a,headerStyle:i,footerStyle:s,scrollbarProps:c,closable:p,$slots:f}=this;return d("div",{role:"none",class:[`${t}-drawer-content`,o&&`${t}-drawer-content--native-scrollbar`]},f.header||e||p?d("div",{class:`${t}-drawer-header`,style:i,role:"none"},d("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},f.header!==void 0?f.header():e),p&&d(Zn,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,o?d("div",{class:`${t}-drawer-body`,style:r,role:"none"},d("div",{class:`${t}-drawer-body-content-wrapper`,style:a,role:"none"},f)):d(lo,Object.assign({themeOverrides:n.peerOverrides.Scrollbar,theme:n.peers.Scrollbar},c,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:a}),f),f.footer?d("div",{class:`${t}-drawer-footer`,style:s,role:"none"},f.footer()):null)}}),gl=e=>{const{primaryColor:t,opacityDisabled:o,borderRadius:n,textColor3:r}=e,a="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Gn),{iconColor:r,textColor:"white",loadingColor:t,opacityDisabled:o,railColor:a,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${Jn(t,{alpha:.2})}`})},_l={name:"Switch",common:no,self:gl},xl=_l,yl=Ze("n-layout-sider"),St=Ze("n-menu"),po=Ze("n-submenu"),vo=Ze("n-menu-item-group"),At=8;function fo(e){const t=ve(St),{props:o,mergedCollapsedRef:n}=t,r=ve(po,null),a=ve(vo,null),i=y(()=>o.mode==="horizontal"),s=y(()=>i.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=y(()=>{var u;return Math.max((u=o.collapsedIconSize)!==null&&u!==void 0?u:o.iconSize,o.iconSize)}),p=y(()=>{var u;return!i.value&&e.root&&n.value&&(u=o.collapsedIconSize)!==null&&u!==void 0?u:o.iconSize}),f=y(()=>{if(i.value)return;const{collapsedWidth:u,indent:_,rootIndent:w}=o,{root:B,isGroup:A}=e,F=w===void 0?_:w;if(B)return n.value?u/2-c.value/2:F;if(a)return _/2+a.paddingLeftRef.value;if(r)return(A?_/2:_)+r.paddingLeftRef.value}),m=y(()=>{const{collapsedWidth:u,indent:_,rootIndent:w}=o,{value:B}=c,{root:A}=e;return i.value||!A||!n.value?At:(w===void 0?_:w)+B+At-(u+B)/2});return{dropdownPlacement:s,activeIconSize:p,maxIconSize:c,paddingLeft:f,iconMarginRight:m,NMenu:t,NSubmenu:r}}const bo={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},an=Object.assign(Object.assign({},bo),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),wl=E({name:"MenuOptionGroup",props:an,setup(e){Ce(po,null);const t=fo(e);Ce(vo,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=ve(St);return function(){const{value:r}=o,a=t.paddingLeft.value,{nodeProps:i}=n,s=i==null?void 0:i(e.tmNode.rawNode);return d("div",{class:`${r}-menu-item-group`,role:"group"},d("div",Object.assign({},s,{class:[`${r}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),ot(e.title),e.extra?d(G,null," ",ot(e.extra)):null),d("div",null,e.tmNodes.map(c=>go(c,n))))}}}),ln=E({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=ve(St);return{menuProps:t,style:y(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:y(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:r}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:r,expandIcon:a}}=this,i=o?o(t.rawNode):ot(this.icon);return d("div",{onClick:s=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},i&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[i]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(t.rawNode):ot(this.title),this.extra||r?d("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(t.rawNode):ot(this.extra)):null),this.showArrow?d(To,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(t.rawNode):d(Qr,null)}):null)}}),sn=Object.assign(Object.assign({},bo),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Cl=E({name:"Submenu",props:sn,setup(e){const t=fo(e),{NMenu:o,NSubmenu:n}=t,{props:r,mergedCollapsedRef:a,mergedThemeRef:i}=o,s=y(()=>{const{disabled:u}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:u}),c=U(!1);Ce(po,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),Ce(vo,null);function p(){const{onClick:u}=e;u&&u()}function f(){s.value||(a.value||o.toggleExpand(e.internalKey),p())}function m(u){c.value=u}return{menuProps:r,mergedTheme:i,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:c,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:Zt(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:y(()=>r.mode==="horizontal"?!1:a.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:y(()=>!s.value&&(r.mode==="horizontal"||a.value)),handlePopoverShowChange:m,handleClick:f}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,r=()=>{const{isHorizontal:i,paddingLeft:s,collapsed:c,mergedDisabled:p,maxIconSize:f,activeIconSize:m,title:u,childActive:_,icon:w,handleClick:B,menuProps:{nodeProps:A},dropdownShow:F,iconMarginRight:H,tmNode:x,mergedClsPrefix:T}=this,D=A==null?void 0:A(x.rawNode);return d("div",Object.assign({},D,{class:[`${T}-menu-item`,D==null?void 0:D.class],role:"menuitem"}),d(ln,{tmNode:x,paddingLeft:s,collapsed:c,disabled:p,iconMarginRight:H,maxIconSize:f,activeIconSize:m,title:u,extra:this.extra,showArrow:!i,childActive:_,clsPrefix:T,icon:w,hover:F,onClick:B}))},a=()=>d(Ao,null,{default:()=>{const{tmNodes:i,collapsed:s}=this;return s?null:d("div",{class:`${t}-submenu-children`,role:"menu"},i.map(c=>go(c,this.menuProps)))}});return this.root?d(zt,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),this.isHorizontal?null:a())}):d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),a())}}),cn=Object.assign(Object.assign({},bo),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),kl=E({name:"MenuOption",props:cn,setup(e){const t=fo(e),{NSubmenu:o,NMenu:n}=t,{props:r,mergedClsPrefixRef:a,mergedCollapsedRef:i}=n,s=o?o.mergedDisabledRef:{value:!1},c=y(()=>s.value||e.disabled);function p(m){const{onClick:u}=e;u&&u(m)}function f(m){c.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),p(m))}return{mergedClsPrefix:a,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:Zt(()=>e.root&&i.value&&r.mode!=="horizontal"&&!c.value),selected:Zt(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:f}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:r}}=this,a=r==null?void 0:r(o.rawNode);return d("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),d(ho,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):ot(this.title),trigger:()=>d(ln,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),$l=E({name:"MenuDivider",setup(){const e=ve(St),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:d("div",{class:`${t.value}-menu-divider`})}}),zl=io(an),Sl=io(cn),Rl=io(sn);function dn(e){return e.type==="divider"||e.type==="render"}function Ml(e){return e.type==="divider"}function go(e,t){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(dn(o))return Ml(o)?d($l,Object.assign({key:e.key},o.props)):null;const{labelField:r}=t,{key:a,level:i,isGroup:s}=e,c=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:a,internalKey:a,level:i,root:i===0,isGroup:s});return e.children?e.isGroup?d(wl,Ut(c,zl,{tmNode:e,tmNodes:e.children,key:a})):d(Cl,Ut(c,Rl,{key:a,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):d(kl,Ut(c,Sl,{key:a,tmNode:e}))}const Mo=[C("&::before","background-color: var(--n-item-color-hover);"),z("arrow",`
 color: var(--n-arrow-color-hover);
 `),z("icon",`
 color: var(--n-item-icon-color-hover);
 `),M("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[C("a",`
 color: var(--n-item-text-color-hover);
 `),z("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Bo=[z("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),M("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Bl=C([M("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[j("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[M("submenu","margin: 0;"),M("menu-item","margin: 0;"),M("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[C("&::before","display: none;"),j("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),M("menu-item-content",[j("selected",[z("icon","color: var(--n-item-icon-color-active-horizontal);"),M("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-horizontal);"),z("extra","color: var(--n-item-text-color-active-horizontal);")])]),j("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[M("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),z("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),et("disabled",[et("selected, child-active",[C("&:focus-within",Bo)]),j("selected",[We(null,[z("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),M("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),j("child-active",[We(null,[z("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),M("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),We("border-bottom: 2px solid var(--n-border-color-horizontal);",Bo)]),M("menu-item-content-header",[C("a","color: var(--n-item-text-color-horizontal);")])])]),j("collapsed",[M("menu-item-content",[j("selected",[C("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),M("menu-item-content-header","opacity: 0;"),z("arrow","opacity: 0;"),z("icon","color: var(--n-item-icon-color-collapsed);")])]),M("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),M("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[C("> *","z-index: 1;"),C("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),j("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),j("collapsed",[z("arrow","transform: rotate(0);")]),j("selected",[C("&::before","background-color: var(--n-item-color-active);"),z("arrow","color: var(--n-arrow-color-active);"),z("icon","color: var(--n-item-icon-color-active);"),M("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[C("a","color: var(--n-item-text-color-active);"),z("extra","color: var(--n-item-text-color-active);")])]),j("child-active",[M("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[C("a",`
 color: var(--n-item-text-color-child-active);
 `),z("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),z("arrow",`
 color: var(--n-arrow-color-child-active);
 `),z("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),et("disabled",[et("selected, child-active",[C("&:focus-within",Mo)]),j("selected",[We(null,[z("arrow","color: var(--n-arrow-color-active-hover);"),z("icon","color: var(--n-item-icon-color-active-hover);"),M("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[C("a","color: var(--n-item-text-color-active-hover);"),z("extra","color: var(--n-item-text-color-active-hover);")])])]),j("child-active",[We(null,[z("arrow","color: var(--n-arrow-color-child-active-hover);"),z("icon","color: var(--n-item-icon-color-child-active-hover);"),M("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[C("a","color: var(--n-item-text-color-child-active-hover);"),z("extra","color: var(--n-item-text-color-child-active-hover);")])])]),j("selected",[We(null,[C("&::before","background-color: var(--n-item-color-active-hover);")])]),We(null,Mo)]),z("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),z("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),M("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[C("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[C("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),z("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),M("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[M("menu-item-content",`
 height: var(--n-item-height);
 `),M("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Qn({duration:".2s"})])]),M("menu-item-group",[M("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),M("menu-tooltip",[C("a",`
 color: inherit;
 text-decoration: none;
 `)]),M("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function We(e,t){return[j("hover",e,t),C("&:hover",e,t)]}const Al=Object.assign(Object.assign({},de.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),_o=E({name:"Menu",props:Al,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ae(e),n=de("Menu","-menu",Bl,er,e,t),r=ve(yl,null),a=y(()=>{var $;const{collapsed:S}=e;if(S!==void 0)return S;if(r){const{collapseModeRef:v,collapsedRef:V}=r;if(v.value==="width")return($=V.value)!==null&&$!==void 0?$:!1}return!1}),i=y(()=>{const{keyField:$,childrenField:S,disabledField:v}=e;return Lr(e.items||e.options,{getIgnored(V){return dn(V)},getChildren(V){return V[S]},getDisabled(V){return V[v]},getKey(V){var K;return(K=V[$])!==null&&K!==void 0?K:V.name}})}),s=y(()=>new Set(i.value.treeNodes.map($=>$.key))),{watchProps:c}=e,p=U(null);c!=null&&c.includes("defaultValue")?Ye(()=>{p.value=e.defaultValue}):p.value=e.defaultValue;const f=be(e,"value"),m=Le(f,p),u=U([]),_=()=>{u.value=e.defaultExpandAll?i.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||i.value.getPath(m.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?Ye(_):_();const w=Nr(e,["expandedNames","expandedKeys"]),B=Le(w,u),A=y(()=>i.value.treeNodes),F=y(()=>i.value.getPath(m.value).keyPath);Ce(St,{props:e,mergedCollapsedRef:a,mergedThemeRef:n,mergedValueRef:m,mergedExpandedKeysRef:B,activePathRef:F,mergedClsPrefixRef:t,isHorizontalRef:y(()=>e.mode==="horizontal"),invertedRef:be(e,"inverted"),doSelect:H,toggleExpand:T});function H($,S){const{"onUpdate:value":v,onUpdateValue:V,onSelect:K}=e;V&&ne(V,$,S),v&&ne(v,$,S),K&&ne(K,$,S),p.value=$}function x($){const{"onUpdate:expandedKeys":S,onUpdateExpandedKeys:v,onExpandedNamesChange:V,onOpenNamesChange:K}=e;S&&ne(S,$),v&&ne(v,$),V&&ne(V,$),K&&ne(K,$),u.value=$}function T($){const S=Array.from(B.value),v=S.findIndex(V=>V===$);if(~v)S.splice(v,1);else{if(e.accordion&&s.value.has($)){const V=S.findIndex(K=>s.value.has(K));V>-1&&S.splice(V,1)}S.push($)}x(S)}const D=$=>{const S=i.value.getPath($??m.value,{includeSelf:!1}).keyPath;if(!S.length)return;const v=Array.from(B.value),V=new Set([...v,...S]);e.accordion&&s.value.forEach(K=>{V.has(K)&&!S.includes(K)&&V.delete(K)}),x(Array.from(V))},P=y(()=>{const{inverted:$}=e,{common:{cubicBezierEaseInOut:S},self:v}=n.value,{borderRadius:V,borderColorHorizontal:K,fontSize:Z,itemHeight:re,dividerColor:ae}=v,k={"--n-divider-color":ae,"--n-bezier":S,"--n-font-size":Z,"--n-border-color-horizontal":K,"--n-border-radius":V,"--n-item-height":re};return $?(k["--n-group-text-color"]=v.groupTextColorInverted,k["--n-color"]=v.colorInverted,k["--n-item-text-color"]=v.itemTextColorInverted,k["--n-item-text-color-hover"]=v.itemTextColorHoverInverted,k["--n-item-text-color-active"]=v.itemTextColorActiveInverted,k["--n-item-text-color-child-active"]=v.itemTextColorChildActiveInverted,k["--n-item-text-color-child-active-hover"]=v.itemTextColorChildActiveInverted,k["--n-item-text-color-active-hover"]=v.itemTextColorActiveHoverInverted,k["--n-item-icon-color"]=v.itemIconColorInverted,k["--n-item-icon-color-hover"]=v.itemIconColorHoverInverted,k["--n-item-icon-color-active"]=v.itemIconColorActiveInverted,k["--n-item-icon-color-active-hover"]=v.itemIconColorActiveHoverInverted,k["--n-item-icon-color-child-active"]=v.itemIconColorChildActiveInverted,k["--n-item-icon-color-child-active-hover"]=v.itemIconColorChildActiveHoverInverted,k["--n-item-icon-color-collapsed"]=v.itemIconColorCollapsedInverted,k["--n-item-text-color-horizontal"]=v.itemTextColorHorizontalInverted,k["--n-item-text-color-hover-horizontal"]=v.itemTextColorHoverHorizontalInverted,k["--n-item-text-color-active-horizontal"]=v.itemTextColorActiveHorizontalInverted,k["--n-item-text-color-child-active-horizontal"]=v.itemTextColorChildActiveHorizontalInverted,k["--n-item-text-color-child-active-hover-horizontal"]=v.itemTextColorChildActiveHoverHorizontalInverted,k["--n-item-text-color-active-hover-horizontal"]=v.itemTextColorActiveHoverHorizontalInverted,k["--n-item-icon-color-horizontal"]=v.itemIconColorHorizontalInverted,k["--n-item-icon-color-hover-horizontal"]=v.itemIconColorHoverHorizontalInverted,k["--n-item-icon-color-active-horizontal"]=v.itemIconColorActiveHorizontalInverted,k["--n-item-icon-color-active-hover-horizontal"]=v.itemIconColorActiveHoverHorizontalInverted,k["--n-item-icon-color-child-active-horizontal"]=v.itemIconColorChildActiveHorizontalInverted,k["--n-item-icon-color-child-active-hover-horizontal"]=v.itemIconColorChildActiveHoverHorizontalInverted,k["--n-arrow-color"]=v.arrowColorInverted,k["--n-arrow-color-hover"]=v.arrowColorHoverInverted,k["--n-arrow-color-active"]=v.arrowColorActiveInverted,k["--n-arrow-color-active-hover"]=v.arrowColorActiveHoverInverted,k["--n-arrow-color-child-active"]=v.arrowColorChildActiveInverted,k["--n-arrow-color-child-active-hover"]=v.arrowColorChildActiveHoverInverted,k["--n-item-color-hover"]=v.itemColorHoverInverted,k["--n-item-color-active"]=v.itemColorActiveInverted,k["--n-item-color-active-hover"]=v.itemColorActiveHoverInverted,k["--n-item-color-active-collapsed"]=v.itemColorActiveCollapsedInverted):(k["--n-group-text-color"]=v.groupTextColor,k["--n-color"]=v.color,k["--n-item-text-color"]=v.itemTextColor,k["--n-item-text-color-hover"]=v.itemTextColorHover,k["--n-item-text-color-active"]=v.itemTextColorActive,k["--n-item-text-color-child-active"]=v.itemTextColorChildActive,k["--n-item-text-color-child-active-hover"]=v.itemTextColorChildActiveHover,k["--n-item-text-color-active-hover"]=v.itemTextColorActiveHover,k["--n-item-icon-color"]=v.itemIconColor,k["--n-item-icon-color-hover"]=v.itemIconColorHover,k["--n-item-icon-color-active"]=v.itemIconColorActive,k["--n-item-icon-color-active-hover"]=v.itemIconColorActiveHover,k["--n-item-icon-color-child-active"]=v.itemIconColorChildActive,k["--n-item-icon-color-child-active-hover"]=v.itemIconColorChildActiveHover,k["--n-item-icon-color-collapsed"]=v.itemIconColorCollapsed,k["--n-item-text-color-horizontal"]=v.itemTextColorHorizontal,k["--n-item-text-color-hover-horizontal"]=v.itemTextColorHoverHorizontal,k["--n-item-text-color-active-horizontal"]=v.itemTextColorActiveHorizontal,k["--n-item-text-color-child-active-horizontal"]=v.itemTextColorChildActiveHorizontal,k["--n-item-text-color-child-active-hover-horizontal"]=v.itemTextColorChildActiveHoverHorizontal,k["--n-item-text-color-active-hover-horizontal"]=v.itemTextColorActiveHoverHorizontal,k["--n-item-icon-color-horizontal"]=v.itemIconColorHorizontal,k["--n-item-icon-color-hover-horizontal"]=v.itemIconColorHoverHorizontal,k["--n-item-icon-color-active-horizontal"]=v.itemIconColorActiveHorizontal,k["--n-item-icon-color-active-hover-horizontal"]=v.itemIconColorActiveHoverHorizontal,k["--n-item-icon-color-child-active-horizontal"]=v.itemIconColorChildActiveHorizontal,k["--n-item-icon-color-child-active-hover-horizontal"]=v.itemIconColorChildActiveHoverHorizontal,k["--n-arrow-color"]=v.arrowColor,k["--n-arrow-color-hover"]=v.arrowColorHover,k["--n-arrow-color-active"]=v.arrowColorActive,k["--n-arrow-color-active-hover"]=v.arrowColorActiveHover,k["--n-arrow-color-child-active"]=v.arrowColorChildActive,k["--n-arrow-color-child-active-hover"]=v.arrowColorChildActiveHover,k["--n-item-color-hover"]=v.itemColorHover,k["--n-item-color-active"]=v.itemColorActive,k["--n-item-color-active-hover"]=v.itemColorActiveHover,k["--n-item-color-active-collapsed"]=v.itemColorActiveCollapsed),k}),O=o?Ue("menu",y(()=>e.inverted?"a":"b"),P,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:w,uncontrolledExpanededKeys:u,mergedExpandedKeys:B,uncontrolledValue:p,mergedValue:m,activePath:F,tmNodes:A,mergedTheme:n,mergedCollapsed:a,cssVars:o?void 0:P,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender,showOption:D}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;return n==null||n(),d("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(r=>go(r,this.$props)))}}),Il=Object.assign(Object.assign({},de.props),{trigger:String,xScrollable:Boolean,onScroll:Function,size:Number}),Fl=E({name:"Scrollbar",props:Il,setup(){const e=U(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var n;(n=e.value)===null||n===void 0||n.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var n;(n=e.value)===null||n===void 0||n.scrollBy(o[0],o[1])}}),{scrollbarInstRef:e})},render(){return d(lo,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),ht=Fl,Pl=M("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[z("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),z("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),z("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),M("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Co({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),z("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),z("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),z("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),C("&:focus",[z("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),j("round",[z("rail","border-radius: calc(var(--n-rail-height) / 2);",[z("button","border-radius: calc(var(--n-button-height) / 2);")])]),et("disabled",[et("icon",[j("rubber-band",[j("pressed",[z("rail",[z("button","max-width: var(--n-button-width-pressed);")])]),z("rail",[C("&:active",[z("button","max-width: var(--n-button-width-pressed);")])]),j("active",[j("pressed",[z("rail",[z("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),z("rail",[C("&:active",[z("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),j("active",[z("rail",[z("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),z("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[z("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Co()]),z("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),j("active",[z("rail","background-color: var(--n-rail-color-active);")]),j("loading",[z("rail",`
 cursor: wait;
 `)]),j("disabled",[z("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Tl=Object.assign(Object.assign({},de.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let _t;const xo=E({name:"Switch",props:Tl,setup(e){_t===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?_t=CSS.supports("width","max(1px)"):_t=!1:_t=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ae(e),n=de("Switch","-switch",Pl,xl,e,t),r=Ho(e),{mergedSizeRef:a,mergedDisabledRef:i}=r,s=U(e.defaultValue),c=be(e,"value"),p=Le(c,s),f=y(()=>p.value===e.checkedValue),m=U(!1),u=U(!1),_=y(()=>{const{railStyle:$}=e;if($)return $({focused:u.value,checked:f.value})});function w($){const{"onUpdate:value":S,onChange:v,onUpdateValue:V}=e,{nTriggerFormInput:K,nTriggerFormChange:Z}=r;S&&ne(S,$),V&&ne(V,$),v&&ne(v,$),s.value=$,K(),Z()}function B(){const{nTriggerFormFocus:$}=r;$()}function A(){const{nTriggerFormBlur:$}=r;$()}function F(){e.loading||i.value||(p.value!==e.checkedValue?w(e.checkedValue):w(e.uncheckedValue))}function H(){u.value=!0,B()}function x(){u.value=!1,A(),m.value=!1}function T($){e.loading||i.value||$.key===" "&&(p.value!==e.checkedValue?w(e.checkedValue):w(e.uncheckedValue),m.value=!1)}function D($){e.loading||i.value||$.key===" "&&($.preventDefault(),m.value=!0)}const P=y(()=>{const{value:$}=a,{self:{opacityDisabled:S,railColor:v,railColorActive:V,buttonBoxShadow:K,buttonColor:Z,boxShadowFocus:re,loadingColor:ae,textColor:k,iconColor:xe,[we("buttonHeight",$)]:me,[we("buttonWidth",$)]:pt,[we("buttonWidthPressed",$)]:Pe,[we("railHeight",$)]:pe,[we("railWidth",$)]:ye,[we("railBorderRadius",$)]:vt,[we("buttonBorderRadius",$)]:ft},common:{cubicBezierEaseInOut:bt}}=n.value;let J,Ve,ge;return _t?(J=`calc((${pe} - ${me}) / 2)`,Ve=`max(${pe}, ${me})`,ge=`max(${ye}, calc(${ye} + ${me} - ${pe}))`):(J=Nt((Se(pe)-Se(me))/2),Ve=Nt(Math.max(Se(pe),Se(me))),ge=Se(pe)>Se(me)?ye:Nt(Se(ye)+Se(me)-Se(pe))),{"--n-bezier":bt,"--n-button-border-radius":ft,"--n-button-box-shadow":K,"--n-button-color":Z,"--n-button-width":pt,"--n-button-width-pressed":Pe,"--n-button-height":me,"--n-height":Ve,"--n-offset":J,"--n-opacity-disabled":S,"--n-rail-border-radius":vt,"--n-rail-color":v,"--n-rail-color-active":V,"--n-rail-height":pe,"--n-rail-width":ye,"--n-width":ge,"--n-box-shadow-focus":re,"--n-loading-color":ae,"--n-text-color":k,"--n-icon-color":xe}}),O=o?Ue("switch",y(()=>a.value[0]),P,e):void 0;return{handleClick:F,handleBlur:x,handleFocus:H,handleKeyup:T,handleKeydown:D,mergedRailStyle:_,pressed:m,mergedClsPrefix:t,mergedValue:p,checked:f,mergedDisabled:i,cssVars:o?void 0:P,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:o,mergedRailStyle:n,onRender:r,$slots:a}=this;r==null||r();const{checked:i,unchecked:s,icon:c,"checked-icon":p,"unchecked-icon":f}=a,m=!(It(c)&&It(p)&&It(f));return d("div",{role:"switch","aria-checked":o,class:[`${e}-switch`,this.themeClass,m&&`${e}-switch--icon`,o&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},d("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:n},Te(i,u=>Te(s,_=>u||_?d("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),u),d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),_)):null)),d("div",{class:`${e}-switch__button`},Te(c,u=>Te(p,_=>Te(f,w=>d(tr,null,{default:()=>this.loading?d(or,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(_||u)?d("div",{class:`${e}-switch__button-icon`,key:_?"checked-icon":"icon"},_||u):!this.checked&&(w||u)?d("div",{class:`${e}-switch__button-icon`,key:w?"unchecked-icon":"icon"},w||u):null})))),Te(i,u=>u&&d("div",{key:"checked",class:`${e}-switch__checked`},u)),Te(s,u=>u&&d("div",{key:"unchecked",class:`${e}-switch__unchecked`},u)))))}});function Ht(){const e=_e(),t=X(),o=nr(rr),n=y(()=>{const f="vertical",m="horizontal";return t.layout.mode.includes(f)?f:m}),r=o.smaller("sm"),a={vertical:{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!0},"vertical-mix":{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!1},horizontal:{showLogo:!0,showHeaderMenu:!0,showMenuCollapse:!1},"horizontal-mix":{showLogo:!0,showHeaderMenu:!1,showMenuCollapse:!0}},i=y(()=>a[t.layout.mode]),s=y(()=>t.layout.mode!=="horizontal"),c=y(()=>{const{width:f,mixWidth:m,mixChildMenuWidth:u}=t.sider,_=t.layout.mode==="vertical-mix";let w=_?m:f;return _&&e.mixSiderFixed&&(w+=u),w}),p=y(()=>{const{collapsedWidth:f,mixCollapsedWidth:m,mixChildMenuWidth:u}=t.sider,_=t.layout.mode==="vertical-mix";let w=_?m:f;return _&&e.mixSiderFixed&&(w+=u),w});return ue(r,f=>{f&&e.setSiderCollapse(!0)},{immediate:!0}),{mode:n,isMobile:r,headerProps:i,siderVisible:s,siderWidth:c,siderCollapsedWidth:p}}function Dl(e,t,o){return El(e,t).map(a=>hn(a,o))}function El(e,t){const o=[],n=ar(e,t),r=n?un(e,n):[];return o.push(...r),o}function un(e,t){const o=[];return e===t.routeName&&o.push(t),e.includes(t.routeName)&&t.children&&t.children.length&&(o.push(t),o.push(...t.children.map(n=>un(e,n)).flat(1))),o}function hn(e,t){var r;const o=!!(e.children&&e.children.length),n={key:e.routeName,label:e.label,routeName:e.routeName,disabled:e.routePath===t,hasChildren:o,i18nTitle:e.i18nTitle};return e.icon&&(n.icon=e.icon),o&&(n.options=(r=e.children)==null?void 0:r.map(a=>hn(a,t))),n}const Hl=[{label:"红色系",data:[{label:"绾",color:"#A98175"},{label:"檀",color:"#B36D61"},{label:"栗色",color:"#60281E"},{label:"玄",color:"#622A1D"},{label:"胭脂",color:"#9D2933"},{label:"殷红",color:"#BE002F"},{label:"枣红",color:"#C32136"},{label:"赤",color:"#C3272B"},{label:"绯红",color:"#C83C23"},{label:"赫赤",color:"#C91F37"},{label:"樱桃红",color:"#C93756"},{label:"茜色",color:"#CB3A56"},{label:"海棠红",color:"#DB5A6B"},{label:"酡红",color:"#DC3023"},{label:"妃色",color:"#ED5736"},{label:"嫣红",color:"#EF7A82"},{label:"品红",color:"#F00056"},{label:"石榴红",color:"#F20C00"},{label:"银红",color:"#F05654"},{label:"彤",color:"#F35336"},{label:"桃红",color:"#F47983"},{label:"酡颜",color:"#F9906F"},{label:"洋红",color:"#FF0097"},{label:"大红",color:"#FF2121"},{label:"火红",color:"#FF2D51"},{label:"炎",color:"#FF3300"},{label:"朱红",color:"#FF4C00"},{label:"丹",color:"#FF4E20"},{label:"粉红",color:"#FFB3A7"},{label:"藕荷",color:"#E4C6D0"},{label:"藕",color:"#EDD1D8"},{label:"水红",color:"#F3D3E7"},{label:"鱼肚白",color:"#FCEFE8"}]},{label:"橙色系",data:[{label:"褐色",color:"#6E511E"},{label:"棕黑",color:"#7C4B00"},{label:"赭色",color:"#955539"},{label:"棕红",color:"#9B4400"},{label:"赭",color:"#9C5333"},{label:"驼色",color:"#A88462"},{label:"棕色",color:"#B25D25"},{label:"茶色",color:"#B35C44"},{label:"琥珀",color:"#CA6924"},{label:"黄栌",color:"#E29C45"},{label:"橙色",color:"#FA8C35"},{label:"橘红",color:"#FF7500"},{label:"橘黄",color:"#FF8936"},{label:"杏红",color:"#FF8C31"},{label:"橙黄",color:"#FFA400"},{label:"杏黄",color:"#FFA631"},{label:"姜黄",color:"#FFC773"}]},{label:"黄色系",data:[{label:"黧",color:"#5D513C"},{label:"黎",color:"#75664D"},{label:"棕绿",color:"#827100"},{label:"秋色",color:"#896C39"},{label:"苍黄",color:"#A29B7C"},{label:"乌金",color:"#A78E44"},{label:"棕黄",color:"#AE7000"},{label:"昏黄",color:"#C89B40"},{label:"枯黄",color:"#D3B17D"},{label:"秋香色",color:"#D9B611"},{label:"金",color:"#EACD76"},{label:"牙",color:"#EEDEB0"},{label:"缃色",color:"#F0C239"},{label:"赤金",color:"#F2BE45"},{label:"鸭黄",color:"#FAFF72"},{label:"鹅黄",color:"#FFF143"},{label:"缟",color:"#F2ECDE"},{label:"象牙白",color:"#FFFBF0"}]},{label:"绿色系",data:[{label:"竹青",color:"#789262"},{label:"黯",color:"#41555D"},{label:"黛绿",color:"#426666"},{label:"松花绿",color:"#057748"},{label:"绿沈",color:"#0C8918"},{label:"深绿",color:"#009900"},{label:"青葱",color:"#0AA344"},{label:"铜绿",color:"#549688"},{label:"苍翠",color:"#519A73"},{label:"松柏绿",color:"#21A675"},{label:"葱青",color:"#0EB83A"},{label:"油绿",color:"#00BC12"},{label:"绿",color:"#00E500"},{label:"草绿",color:"#40DE5A"},{label:"豆青",color:"#96CE54"},{label:"豆绿",color:"#9ED048"},{label:"葱绿",color:"#9ED900"},{label:"葱黄",color:"#A3D900"},{label:"柳绿",color:"#AFDD22"},{label:"嫩绿",color:"#BDDD22"},{label:"柳黄",color:"#C9DD22"},{label:"松花",color:"#BCE672"},{label:"樱草色",color:"#EAFF56"}]},{label:"青色系",data:[{label:"水",color:"#88ADA6"},{label:"青碧",color:"#48C0A3"},{label:"碧",color:"#1BD1A5"},{label:"石青",color:"#7BCFA6"},{label:"青翠",color:"#00E079"},{label:"青",color:"#00E09E"},{label:"碧绿",color:"#2ADD9C"},{label:"玉",color:"#2EDFA3"},{label:"翡翠",color:"#3DE1AD"},{label:"缥",color:"#7FECAD"},{label:"碧蓝",color:"#3EEDE7"},{label:"湖绿",color:"#25F8CD"},{label:"艾绿",color:"#A4E2C6"},{label:"青白",color:"#C0EBD7"},{label:"水绿",color:"#D4F2E7"},{label:"鸭卵青",color:"#E0EEE8"},{label:"素",color:"#E0F0E9"},{label:"荼白",color:"#F3F9F1"}]},{label:"蓝色系",data:[{label:"藏蓝",color:"#3B2E7E"},{label:"宝蓝",color:"#4B5CC4"},{label:"绀青",color:"#003371"},{label:"藏青",color:"#2E4E7E"},{label:"靛蓝",color:"#065279"},{label:"靛青",color:"#177CB0"},{label:"群青",color:"#4C8DAE"},{label:"蓝",color:"#44CEF6"},{label:"湖蓝",color:"#30DFF3"},{label:"蔚蓝",color:"#70F3FF"},{label:"月白",color:"#D6ECF0"},{label:"水蓝",color:"#D2F0F4"},{label:"莹白",color:"#E3F9FD"},{label:"雪白",color:"#F0FCFF"}]},{label:"紫色系",data:[{label:"黛",color:"#4A4266"},{label:"紫檀",color:"#4C211B"},{label:"紫棠",color:"#56004F"},{label:"黛紫",color:"#574266"},{label:"绛紫",color:"#8C4356"},{label:"紫酱",color:"#815463"},{label:"酱紫",color:"#815476"},{label:"黝",color:"#6B6882"},{label:"青莲",color:"#801DAE"},{label:"紫",color:"#8D4BBB"},{label:"雪青",color:"#B0A4E3"},{label:"丁香",color:"#CCA4E3"}]},{label:"灰色系",data:[{label:"黑",color:"#000000"},{label:"漆黑",color:"#161823"},{label:"象牙黑",color:"#312520"},{label:"乌黑",color:"#392F41"},{label:"玄青",color:"#3D3B4F"},{label:"缁",color:"#493131"},{label:"黝黑",color:"#665757"},{label:"鸦青",color:"#424C50"},{label:"黛蓝",color:"#425066"},{label:"苍黑",color:"#395260"},{label:"墨",color:"#50616D"},{label:"灰",color:"#808080"},{label:"苍",color:"#75878A"},{label:"墨灰",color:"#758A99"},{label:"苍青",color:"#7397AB"},{label:"蓝灰",color:"#A1AFC9"},{label:"老银",color:"#BACAC6"},{label:"蟹壳青",color:"#BBCDC5"},{label:"苍白",color:"#D1D9E0"},{label:"淡青",color:"#D3E0F3"},{label:"银白",color:"#E9E7EF"},{label:"霜",color:"#E9F1F6"},{label:"铅白",color:"#F0F0F4"},{label:"精白",color:"#FFFFFF"}]}],mn=Hl;function Ll(e){return mn.some(t=>t.data.some(n=>n.color===e))}const Ul={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},Nl=I("path",{fill:"currentColor","fill-rule":"evenodd",d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926L224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512L166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},null,-1),Vl=[Nl];function Ol(e,t){return b(),N("svg",Ul,Vl)}const jl={name:"ant-design-close-outlined",render:Ol},Kl=E({name:"DrawerButton",__name:"index",setup(e){const t=_e();return(o,n)=>{const r=jl,a=qo,i=Me;return b(),L(i,{type:"primary",class:le([[{"!right-330px":l(t).settingDrawerVisible},l(t).settingDrawerVisible?"ease-out":"ease-in"],"fixed top-360px right-14px z-10000 w-42px h-42px !p-0 transition-all duration-300"]),onClick:l(t).toggleSettingDrawerVisible},{default:g(()=>[l(t).settingDrawerVisible?(b(),L(r,{key:0,class:"text-24px"})):(b(),L(a,{key:1,class:"text-24px"}))]),_:1},8,["class","onClick"])}}}),Wl={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ql=I("path",{fill:"currentColor",d:"M12.04 8.04h-.09l-1.6 4.55h3.29z"},null,-1),Xl=I("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm3 14.41l-.78-2.22H9.78l-.79 2.22c-.12.35-.46.59-.83.59a.887.887 0 0 1-.83-1.2l3.34-8.88a1.42 1.42 0 0 1 2.66 0l3.34 8.88c.22.58-.21 1.2-.83 1.2c-.38 0-.72-.24-.84-.59z"},null,-1),Yl=[ql,Xl];function Zl(e,t){return b(),N("svg",Wl,Yl)}const Gl={name:"ic-round-hdr-auto",render:Zl},Jl={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ql=I("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9z"},null,-1),ei=[Ql];function ti(e,t){return b(),N("svg",Jl,ei)}const oi={name:"ic-baseline-do-not-disturb",render:ti},ni={class:"flex-y-center justify-between"},ee=E({name:"SettingMenu",__name:"index",props:{label:{}},setup(e){return(t,o)=>(b(),N("div",ni,[I("span",null,Y(t.label),1),it(t.$slots,"default")]))}}),ri=E({name:"DarkMode",__name:"index",setup(e){const t=X();return(o,n)=>{const r=dt,a=kr,i=$r,s=xo,c=oi,p=Gl,f=ut;return b(),N(G,null,[h(r,{"title-placement":"center"},{default:g(()=>[se(Y(l(W)("layout.settingDrawer.themeModeTitle")),1)]),_:1}),h(f,{vertical:"",size:"large"},{default:g(()=>[h(ee,{label:l(W)("layout.settingDrawer.darkMode")},{default:g(()=>[h(s,{value:l(t).darkMode,"onUpdate:value":l(t).setDarkMode},{checked:g(()=>[h(a,{class:"text-14px text-white"})]),unchecked:g(()=>[h(i,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.followSystemTheme")},{default:g(()=>[h(s,{value:l(t).followSystemTheme,"onUpdate:value":l(t).setFollowSystemTheme},{checked:g(()=>[h(c,{class:"text-14px text-white"})]),unchecked:g(()=>[h(p,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.isCustomizeDarkModeTransition")},{default:g(()=>[h(s,{value:l(t).isCustomizeDarkModeTransition,"onUpdate:value":l(t).setIsCustomizeDarkModeTransition},{checked:g(()=>[h(c,{class:"text-14px text-white"})]),unchecked:g(()=>[h(p,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.sider.inverted")},{default:g(()=>[h(s,{value:l(t).sider.inverted,"onUpdate:value":l(t).setSiderInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.header.inverted")},{default:g(()=>[h(s,{value:l(t).header.inverted,"onUpdate:value":l(t).setHeaderInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.footer.inverted")},{default:g(()=>[h(s,{value:l(t).footer.inverted,"onUpdate:value":l(t).setFooterInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),ai=E({name:"LayoutCard",__name:"layout-card",props:{mode:{},label:{},checked:{type:Boolean}},setup(e){const t=e,o={vertical:{placement:"bottom-start",headerClass:"",menuClass:"w-1/3 h-full",mainClass:"w-2/3 h-3/4"},"vertical-mix":{placement:"bottom",headerClass:"",menuClass:"w-1/4 h-full",mainClass:"w-2/3 h-3/4"},horizontal:{placement:"bottom",headerClass:"",menuClass:"w-full h-1/4",mainClass:"w-full h-3/4"},"horizontal-mix":{placement:"bottom-end",headerClass:"",menuClass:"w-full h-1/4",mainClass:"w-2/3 h-3/4"}},n=y(()=>o[t.mode]);return(r,a)=>{const i=ho;return b(),N("div",{class:le(["border-2px rounded-6px cursor-pointer hover:border-primary",[r.checked?"border-primary":"border-transparent"]])},[h(i,{placement:n.value.placement,trigger:"hover"},{trigger:g(()=>[I("div",{class:le(["layout-card__shadow gap-6px w-96px h-64px p-6px rd-4px",[r.mode.includes("vertical")?"flex":"flex-col"]])},[it(r.$slots,"default",{},void 0,!0)],2)]),default:g(()=>[I("span",null,Y(r.label),1)]),_:3},8,["placement"])],2)}}}),li=Ne(ai,[["__scopeId","data-v-e2b400d3"]]),Ie=e=>(Uo("data-v-3f56b2fa"),e=e(),No(),e),ii=Ie(()=>I("div",{class:"w-18px h-full bg-primary:50 rd-4px"},null,-1)),si=Ie(()=>I("div",{class:"flex-1 flex-col gap-6px"},[I("div",{class:"h-16px bg-primary rd-4px"}),I("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),ci=Ie(()=>I("div",{class:"w-8px h-full bg-primary:50 rd-4px"},null,-1)),di=Ie(()=>I("div",{class:"w-16px h-full bg-primary:50 rd-4px"},null,-1)),ui=Ie(()=>I("div",{class:"flex-1 flex-col gap-6px"},[I("div",{class:"h-16px bg-primary rd-4px"}),I("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),hi=Ie(()=>I("div",{class:"h-16px bg-primary rd-4px"},null,-1)),mi=Ie(()=>I("div",{class:"flex-1 flex gap-6px"},[I("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),pi=Ie(()=>I("div",{class:"h-16px bg-primary rd-4px"},null,-1)),vi=Ie(()=>I("div",{class:"flex-1 flex gap-6px"},[I("div",{class:"w-18px bg-primary:50 rd-4px"}),I("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),fi=E({name:"LayoutMode",__name:"index",setup(e){const t=X();return(o,n)=>{const r=dt,a=ut;return b(),N(G,null,[h(r,{"title-placement":"center"},{default:g(()=>[se(Y(l(W)("layout.settingDrawer.layoutModelTitle")),1)]),_:1}),h(a,{justify:"space-around",wrap:!0,size:24,class:"px-12px"},{default:g(()=>[(b(!0),N(G,null,$e(l(t).layout.modeList,i=>(b(),L(l(li),{key:i.value,mode:i.value,label:i.label,checked:i.value===l(t).layout.mode,onClick:s=>l(t).setLayoutMode(i.value)},{default:g(()=>[i.value==="vertical"?(b(),N(G,{key:0},[ii,si],64)):ce("",!0),i.value==="vertical-mix"?(b(),N(G,{key:1},[ci,di,ui],64)):ce("",!0),i.value==="horizontal"?(b(),N(G,{key:2},[hi,mi],64)):ce("",!0),i.value==="horizontal-mix"?(b(),N(G,{key:3},[pi,vi],64)):ce("",!0)]),_:2},1032,["mode","label","checked","onClick"]))),128))]),_:1})],64)}}}),bi=Ne(fi,[["__scopeId","data-v-3f56b2fa"]]),gi={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},_i=I("path",{fill:"currentColor",d:"M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"},null,-1),xi=[_i];function yi(e,t){return b(),N("svg",gi,xi)}const wi={name:"ic-outline-check",render:yi},pn=E({name:"ColorCheckbox",__name:"color-checkbox",props:{color:{},checked:{type:Boolean},iconClass:{default:"text-14px"}},setup(e){const t=e,o=["#ffffff","#fff","rgb(255,255,255)"],n=y(()=>o.includes(t.color));return(r,a)=>{const i=wi;return b(),N("div",{class:"flex-center w-20px h-20px rounded-2px shadow cursor-pointer",style:ke({backgroundColor:r.color})},[r.checked?(b(),L(i,{key:0,class:le([r.iconClass,n.value?"text-gray-700":"text-white"])},null,8,["class"])):ce("",!0)],4)}}}),Ci={class:"flex-x-center"},ki={class:"text-center"},$i=E({name:"ColorModal",__name:"color-modal",props:{visible:{type:Boolean}},emits:["close"],setup(e,{emit:t}){const o=X();function n(){t("close")}return(r,a)=>{const i=Ar,s=Xo,c=Yo,p=Zo,f=Go,m=Vo;return b(),L(m,{show:r.visible,preset:"card",class:"w-640px h-480px","z-index":10001,onClose:n},{default:g(()=>[I("div",Ci,[h(i,{type:"primary",size:24},{default:g(()=>[se("中国传统颜色")]),_:1})]),h(f,null,{default:g(()=>[(b(!0),N(G,null,$e(l(mn),u=>(b(),L(p,{key:u.label,name:u.label,tab:u.label},{default:g(()=>[h(c,{cols:8,"x-gap":16,"y-gap":8},{default:g(()=>[(b(!0),N(G,null,$e(u.data,_=>(b(),L(s,{key:_.label},{default:g(()=>[h(pn,{class:"!w-full !h-36px !rounded-4px",color:_.color,checked:_.color===l(o).themeColor,"icon-class":"text-20px",onClick:w=>l(o).setThemeColor(_.color)},null,8,["color","checked","onClick"]),I("p",ki,Y(_.label),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["name","tab"]))),128))]),_:1})]),_:1},8,["show"])}}}),zi=E({name:"ThemeColorSelect",__name:"index",setup(e){const t=X(),{bool:o,setTrue:n,setFalse:r}=kt(),a=y(()=>Ll(t.themeColor)),i=y(()=>a.value?"primary":"default");return(s,c)=>{const p=dt,f=Xo,m=Yo,u=Qa,_=Me,w=ut;return b(),N(G,null,[h(p,{"title-placement":"center"},{default:g(()=>[se(Y(l(W)("layout.settingDrawer.systemThemeTitle")),1)]),_:1}),h(m,{cols:8,"x-gap":8,"y-gap":12},{default:g(()=>[(b(!0),N(G,null,$e(l(t).themeColorList,B=>(b(),L(f,{key:B,class:"flex-x-center"},{default:g(()=>[h(l(pn),{color:B,checked:B===l(t).themeColor,onClick:A=>l(t).setThemeColor(B)},null,8,["color","checked","onClick"])]),_:2},1024))),128))]),_:1}),h(w,{vertical:!0,class:"pt-12px"},{default:g(()=>[h(u,{value:l(t).themeColor,"show-alpha":!1,onUpdateValue:l(t).setThemeColor},null,8,["value","onUpdateValue"]),h(_,{block:!0,type:i.value,onClick:l(n)},{default:g(()=>[se(Y(l(W)("layout.settingDrawer.systemTheme.moreColors")),1)]),_:1},8,["type","onClick"])]),_:1}),h(l($i),{visible:l(o),onClose:l(r)},null,8,["visible","onClose"])],64)}}}),Si=E({name:"PageFunc",__name:"index",setup(e){const t=X();return(o,n)=>{const r=dt,a=en,i=xo,s=Ur,c=ut;return b(),N(G,null,[h(r,{"title-placement":"center"},{default:g(()=>[se(Y(l(W)("layout.settingDrawer.pageFunctionsTitle")),1)]),_:1}),h(c,{vertical:"",size:"large"},{default:g(()=>[h(ee,{label:l(W)("layout.settingDrawer.scrollMode")},{default:g(()=>[h(a,{class:"w-120px",size:"small",value:l(t).scrollMode,options:l(t).scrollModeList,"onUpdate:value":l(t).setScrollMode},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.fixedHeaderAndTab")},{default:g(()=>[h(i,{value:l(t).fixedHeaderAndTab,"onUpdate:value":l(t).setIsFixedHeaderAndTab},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.menu.horizontalPosition")},{default:g(()=>[h(a,{class:"w-120px",size:"small",value:l(t).menu.horizontalPosition,options:l(t).menu.horizontalPositionList,"onUpdate:value":l(t).setHorizontalMenuPosition},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.header.height")},{default:g(()=>[h(s,{class:"w-120px",size:"small",value:l(t).header.height,step:1,"onUpdate:value":l(t).setHeaderHeight},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.tab.height")},{default:g(()=>[h(s,{class:"w-120px",size:"small",value:l(t).tab.height,step:1,"onUpdate:value":l(t).setTabHeight},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.tab.isCache")},{default:g(()=>[h(i,{value:l(t).tab.isCache,"onUpdate:value":l(t).setTabIsCache},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.sider.width")},{default:g(()=>[h(s,{class:"w-120px",size:"small",value:l(t).sider.width,step:10,"onUpdate:value":l(t).setSiderWidth},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.sider.mixWidth")},{default:g(()=>[h(s,{class:"w-120px",size:"small",value:l(t).sider.mixWidth,step:5,"onUpdate:value":l(t).setMixSiderWidth},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.footer.visible")},{default:g(()=>[h(i,{value:l(t).footer.visible,"onUpdate:value":l(t).setFooterVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.footer.fixed")},{default:g(()=>[h(i,{value:l(t).footer.fixed,"onUpdate:value":l(t).setFooterIsFixed},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.footer.right")},{default:g(()=>[h(i,{value:l(t).footer.right,"onUpdate:value":l(t).setFooterIsRight},null,8,["value","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),Ri=E({name:"PageView",__name:"index",setup(e){const t=X();return(o,n)=>{const r=dt,a=xo,i=en,s=ut;return b(),N(G,null,[h(r,{"title-placement":"center"},{default:g(()=>[se(Y(l(W)("layout.settingDrawer.pageViewTitle")),1)]),_:1}),h(s,{vertical:"",size:"large"},{default:g(()=>[h(ee,{label:l(W)("layout.settingDrawer.header.crumb.visible")},{default:g(()=>[h(a,{value:l(t).header.crumb.visible,"onUpdate:value":l(t).setHeaderCrumbVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.header.crumb.icon")},{default:g(()=>[h(a,{value:l(t).header.crumb.showIcon,"onUpdate:value":l(t).setHeaderCrumbIconVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.tab.visible")},{default:g(()=>[h(a,{value:l(t).tab.visible,"onUpdate:value":l(t).setTabVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.tab.modeList.mode")},{default:g(()=>[h(i,{class:"w-120px",size:"small",value:l(t).tab.mode,options:l(t).tab.modeList,"onUpdate:value":l(t).setTabMode},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.page.animate")},{default:g(()=>[h(a,{value:l(t).page.animate,"onUpdate:value":l(t).setPageIsAnimate},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),h(ee,{label:l(W)("layout.settingDrawer.page.animateMode")},{default:g(()=>[h(i,{class:"w-120px",size:"small",value:l(t).page.animateMode,options:l(t).page.animateModeList,"onUpdate:value":l(t).setPageAnimateMode},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),Mi=E({name:"ThemeConfig",__name:"index",setup(e){const t=X(),o=U(),n=U(r());function r(){return JSON.stringify(t.$state)}function a(){var c;t.resetThemeStore(),(c=window.$message)==null||c.success(W("layout.settingDrawer.themeConfiguration.resetSuccess"))}function i(){if(!o.value)return;new Sr(o.value).on("success",()=>{var p;(p=window.$dialog)==null||p.success({title:W("layout.settingDrawer.themeConfiguration.operateSuccess"),content:W("layout.settingDrawer.themeConfiguration.copySuccess"),positiveText:W("layout.settingDrawer.themeConfiguration.confirmCopy")})})}const s=ue(()=>t.$state,()=>{n.value=r()},{deep:!0});return st(()=>{i()}),Eo(()=>{s()}),(c,p)=>{const f=dt,m=Me,u=ut;return b(),N(G,null,[h(f,{"title-placement":"center"},{default:g(()=>[se(Y(l(W)("layout.settingDrawer.themeConfiguration.title")),1)]),_:1}),lt(I("textarea",{id:"themeConfigCopyTarget","onUpdate:modelValue":p[0]||(p[0]=_=>n.value=_),class:"absolute opacity-0"},null,512),[[lr,n.value]]),h(u,{vertical:""},{default:g(()=>[I("div",{ref_key:"copyRef",ref:o,"data-clipboard-target":"#themeConfigCopyTarget"},[h(m,{type:"primary",block:!0},{default:g(()=>[se(Y(l(W)("layout.settingDrawer.themeConfiguration.copy")),1)]),_:1})],512),h(m,{type:"warning",block:!0,onClick:a},{default:g(()=>[se(Y(l(W)("layout.settingDrawer.themeConfiguration.reset")),1)]),_:1})]),_:1})],64)}}}),Bi=E({name:"SettingDrawer",__name:"index",setup(e){const t=_e(),o={}.VITE_VERCEL==="Y";return(n,r)=>{const a=bl,i=vl;return b(),N(G,null,[h(i,{show:l(t).settingDrawerVisible,"display-directive":"show",width:330,onMaskClick:l(t).closeSettingDrawer},{default:g(()=>[h(a,{title:l(W)("layout.settingDrawer.title"),"native-scrollbar":!1},{default:g(()=>[h(l(ri)),h(l(bi)),h(l(zi)),h(l(Si)),h(l(Ri)),h(l(Mi))]),_:1},8,["title"])]),_:1},8,["show","onMaskClick"]),l(o)?(b(),L(l(Kl),{key:0})):ce("",!0)],64)}}}),mt=E({name:"DarkModeContainer",__name:"dark-mode-container",props:{inverted:{type:Boolean,default:!1}},setup(e){return(t,o)=>(b(),N("div",{class:le(["dark:bg-dark dark:text-white dark:text-opacity-82 transition-all",t.inverted?"bg-#001428 text-white":"bg-white text-#333639"])},[it(t.$slots,"default")],2))}}),yo=E({name:"GlobalLogo",__name:"index",props:{showTitle:{type:Boolean}},setup(e){const t=Oo("root");return(o,n)=>{const r=sr,a=ir("router-link");return b(),L(a,{to:l(t),class:"flex-center w-full nowrap-hidden"},{default:g(()=>[h(r,{class:"text-32px text-primary"}),lt(I("h2",{class:"pl-8px text-16px font-bold text-primary transition duration-300 ease-in-out"},Y(l(W)("system.title")),513),[[Yt,o.showTitle]])]),_:1},8,["to"])}}}),Ai={key:0},Fe=E({name:"HoverContainer",__name:"hover-container",props:{tooltipContent:{default:""},placement:{default:"bottom"},contentClass:{default:""},inverted:{type:Boolean,default:!1}},setup(e){const t=e,o=y(()=>!!t.tooltipContent),n=y(()=>`${t.contentClass} ${t.inverted?"hover:bg-primary":"hover:bg-#f6f6f6"}`);return(r,a)=>{const i=ho;return o.value?(b(),N("div",Ai,[h(i,{placement:r.placement,trigger:"hover"},{trigger:g(()=>[I("div",{class:le(["flex-center h-full cursor-pointer dark:hover:bg-#333",n.value])},[it(r.$slots,"default")],2)]),default:g(()=>[se(" "+Y(r.tooltipContent),1)]),_:3},8,["placement"])])):(b(),N("div",{key:1,class:le(["flex-center cursor-pointer dark:hover:bg-#333",n.value])},[it(r.$slots,"default")],2))}}}),Ii={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Fi=I("path",{fill:"currentColor",d:"M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"},null,-1),Pi=[Fi];function Ti(e,t){return b(),N("svg",Ii,Pi)}const vn={name:"uil-search",render:Ti},Di={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},Ei=I("path",{fill:"currentColor",d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"},null,-1),Hi=[Ei];function Li(e,t){return b(),N("svg",Di,Hi)}const Ui={name:"ant-design-enter-outlined",render:Li},Ni={class:"pb-12px"},Vi=["onMouseenter"],Oi={class:"flex-1 ml-5px"},ji=E({name:"SearchResult",__name:"search-result",props:{value:{},options:{}},emits:["update:value","enter"],setup(e,{emit:t}){const o=e,n=X(),r=y({get(){return o.value},set(s){t("update:value",s)}});async function a(s){r.value=s.path}function i(){t("enter")}return(s,c)=>{const p=so,f=Ui,m=ht;return b(),L(m,null,{default:g(()=>[I("div",Ni,[(b(!0),N(G,null,$e(s.options,u=>{var _,w,B;return b(),N("div",{key:u.path,class:"bg-#e5e7eb dark:bg-dark h-56px mt-8px px-14px rounded-4px cursor-pointer flex-y-center justify-between",style:ke({background:u.path===r.value?l(n).themeColor:"",color:u.path===r.value?"#fff":""}),onClick:i,onMouseenter:A=>a(u)},[h(p,{icon:u.meta.icon,"local-icon":u.meta.localIcon},null,8,["icon","local-icon"]),I("span",Oi,Y(((_=u.meta)==null?void 0:_.i18nTitle)&&l(W)((w=u.meta)==null?void 0:w.i18nTitle)||((B=u.meta)==null?void 0:B.title)),1),h(f,{class:"icon text-20px p-2px mr-3px"})],44,Vi)}),128))])]),_:1})}}}),Ki={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Wi=I("path",{fill:"currentColor",d:"M1 7h6v2H3v2h4v2H3v2h4v2H1V7m10 0h4v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2H9v-2h4v-2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2m8 0h2a2 2 0 0 1 2 2v1h-2V9h-2v6h2v-1h2v1c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2Z"},null,-1),qi=[Wi];function Xi(e,t){return b(),N("svg",Ki,qi)}const Yi={name:"mdi-keyboard-esc",render:Xi},Zi={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Gi=I("path",{fill:"currentColor",d:"M7.03 13.92h4V5l2.01-.03v8.95h3.99l-5 5Z"},null,-1),Ji=[Gi];function Qi(e,t){return b(),N("svg",Zi,Ji)}const es={name:"mdi-arrow-down-thin",render:Qi},ts={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},os=I("path",{fill:"currentColor",d:"M7.03 9.97h4v8.92l2.01.03V9.97h3.99l-5-5Z"},null,-1),ns=[os];function rs(e,t){return b(),N("svg",ts,ns)}const as={name:"mdi-arrow-up-thin",render:rs},ls={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},is=I("path",{fill:"currentColor",d:"M19 7v4H5.83l3.58-3.59L8 6l-6 6l6 6l1.41-1.42L5.83 13H21V7h-2Z"},null,-1),ss=[is];function cs(e,t){return b(),N("svg",ls,ss)}const ds={name:"mdi-keyboard-return",render:cs},wo=e=>(Uo("data-v-2cb6cc30"),e=e(),No(),e),us={class:"px-24px h-44px flex-y-center"},hs={class:"mr-14px flex-y-center"},ms=wo(()=>I("span",null,"确认",-1)),ps={class:"mr-14px flex-y-center"},vs=wo(()=>I("span",null,"切换",-1)),fs={class:"flex-y-center"},bs=wo(()=>I("span",null,"关闭",-1)),gs=E({name:"SearchFooter",__name:"search-footer",setup(e){return(t,o)=>{const n=ds,r=as,a=es,i=Yi;return b(),N("div",us,[I("span",hs,[h(n,{class:"icon text-20px p-2px mr-6px"}),ms]),I("span",ps,[h(r,{class:"icon text-20px p-2px mr-5px"}),h(a,{class:"icon text-20px p-2px mr-6px"}),vs]),I("span",fs,[h(i,{class:"icon text-20px p-2px mr-6px"}),bs])])}}}),_s=Ne(gs,[["__scopeId","data-v-2cb6cc30"]]),xs={class:"mt-20px"},ys=E({name:"SearchModal",__name:"search-modal",props:{value:{type:Boolean}},emits:["update:value"],setup(e,{emit:t}){const o=e,{isMobile:n}=Ht(),r=cr(),a=ct(),i=U(""),s=U(""),c=dr([]),p=U(),f=ur(u,300),m=y({get(){return o.value},set(F){t("update:value",F)}});ue(m,async F=>{var H;F&&(await nt(),(H=p.value)==null||H.focus())});function u(){var F;c.value=a.searchMenus.filter(H=>{const x=i.value.toLocaleLowerCase().trim(),T=(H.meta.i18nTitle?W(H.meta.i18nTitle):H.meta.title).toLocaleLowerCase();return x&&T.includes(x)}),s.value=((F=c.value[0])==null?void 0:F.path)??""}function _(){m.value=!1,setTimeout(()=>{c.value=[],i.value=""},200)}function w(){const{length:F}=c.value;if(F===0)return;const H=c.value.findIndex(x=>x.path===s.value);H===0?s.value=c.value[F-1].path:s.value=c.value[H-1].path}function B(){const{length:F}=c.value;if(F===0)return;const H=c.value.findIndex(x=>x.path===s.value);H+1===F?s.value=c.value[0].path:s.value=c.value[H+1].path}function A(){var x;const{length:F}=c.value;if(F===0||s.value==="")return;const H=c.value.find(T=>T.path===s.value);(x=H==null?void 0:H.meta)!=null&&x.href?window.open(s.value,"__blank"):(r.push(s.value),_())}return Rt("Escape",_),Rt("Enter",A),Rt("ArrowUp",w),Rt("ArrowDown",B),(F,H)=>{const x=vn,T=Jo,D=Me,P=Qo,O=Dr,$=Vo;return b(),L($,{show:m.value,"onUpdate:show":H[2]||(H[2]=S=>m.value=S),segmented:{footer:"soft"},closable:!1,preset:"card","footer-style":"padding: 0; margin: 0",class:le(["fixed left-0 right-0",[l(n)?"wh-full top-0px rounded-0":"w-630px top-50px"]]),onAfterLeave:_},{footer:g(()=>[l(n)?ce("",!0):(b(),L(_s,{key:0}))]),default:g(()=>[h(P,null,{default:g(()=>[h(T,{ref_key:"inputRef",ref:p,value:i.value,"onUpdate:value":H[0]||(H[0]=S=>i.value=S),clearable:"",placeholder:"请输入关键词搜索",onInput:l(f)},{prefix:g(()=>[h(x,{class:"text-15px text-#c2c2c2"})]),_:1},8,["value","onInput"]),l(n)?(b(),L(D,{key:0,type:"primary",ghost:"",onClick:_},{default:g(()=>[se("取消")]),_:1})):ce("",!0)]),_:1}),I("div",xs,[c.value.length===0?(b(),L(O,{key:0,description:"暂无搜索结果"})):(b(),L(ji,{key:1,value:s.value,"onUpdate:value":H[1]||(H[1]=S=>s.value=S),options:c.value,onEnter:A},null,8,["value","options"]))])]),_:1},8,["show","class"])}}}),ws=E({name:"GlobalSearch",__name:"index",setup(e){const{bool:t,toggle:o}=kt(),n=X();function r(){o()}return(a,i)=>{const s=vn,c=Fe;return b(),N("div",null,[h(c,{class:"w-40px h-full","tooltip-content":"搜索",inverted:l(n).header.inverted,onClick:r},{default:g(()=>[h(s,{class:"text-20px"})]),_:1},8,["inverted"]),h(l(ys),{value:l(t),"onUpdate:value":i[0]||(i[0]=p=>hr(t)?t.value=p:null)},null,8,["value"])])}}}),Cs={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ks=jo('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M7 9L4 12L7 15"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5H5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M19 12H10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path></g>',1),$s=[ks];function zs(e,t){return b(),N("svg",Cs,$s)}const Ss={name:"line-md-menu-fold-left",render:zs},Rs={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ms=jo('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M21 9L18 12L21 15"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M14 12H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="12;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="16;0"></animate></path></g>',1),Bs=[Ms];function As(e,t){return b(),N("svg",Rs,Bs)}const Is={name:"line-md-menu-unfold-left",render:As},Fs=E({name:"MenuCollapse",__name:"menu-collapse",setup(e){const t=_e(),o=X();return(n,r)=>{const a=Is,i=Ss,s=Fe;return b(),L(s,{class:"w-40px h-full",inverted:l(o).header.inverted,onClick:l(t).toggleSiderCollapse},{default:g(()=>[l(t).siderCollapse?(b(),L(a,{key:0,class:"text-16px"})):(b(),L(i,{key:1,class:"text-16px"}))]),_:1},8,["inverted","onClick"])}}}),Ps=E({name:"GlobalBreadcrumb",__name:"global-breadcrumb",setup(e){const t=Ge(),o=X(),n=ct(),{routerPush:r}=$t(),a=y(()=>Dl(t.name,n.menus,Oo("root")).map(s=>{var c;return{...s,label:s.i18nTitle?W(s.i18nTitle):s.label,options:(c=s.options)==null?void 0:c.map(p=>({...p,label:p.i18nTitle?W(p.i18nTitle):p.label}))}}));function i(s){r({name:s})}return(s,c)=>{const p=zt,f=Sa,m=ka;return b(),L(m,{class:"px-12px"},{default:g(()=>[(b(!0),N(G,null,$e(a.value,u=>(b(),L(f,{key:u.key},{default:g(()=>[u.hasChildren?(b(),L(p,{key:0,options:u.options,onSelect:i},{default:g(()=>[I("span",null,[l(o).header.crumb.showIcon?(b(),L(Gt(u.icon),{key:0,class:"inline-block align-text-bottom mr-4px text-16px"})):ce("",!0),I("span",null,Y(u.label),1)])]),_:2},1032,["options"])):(b(),N(G,{key:1},[l(o).header.crumb.showIcon?(b(),L(Gt(u.icon),{key:0,class:le(["inline-block align-text-bottom mr-4px text-16px",{"text-#BBBBBB":l(o).header.inverted}])},null,8,["class"])):ce("",!0),I("span",{class:le({"text-#BBBBBB":l(o).header.inverted})},Y(u.label),3)],64))]),_:2},1024))),128))]),_:1})}}}),Ts={class:"flex-1-hidden h-full px-10px"},Ds=E({name:"HeaderMenu",__name:"header-menu",setup(e){const t=Ge(),o=ct(),n=X(),{routerPush:r}=$t(),a=y(()=>co(o.menus)),i=y(()=>{var c;return(c=t.meta)!=null&&c.activeMenu?t.meta.activeMenu:t.name});function s(c,p){r(p.routePath)}return(c,p)=>{const f=_o,m=ht;return b(),N("div",Ts,[h(m,{"x-scrollable":!0,class:"flex-1-hidden h-full","content-class":"h-full"},{default:g(()=>[I("div",{class:"flex-y-center h-full",style:ke({justifyContent:l(n).menu.horizontalPosition})},[h(f,{value:i.value,mode:"horizontal",options:a.value,inverted:l(n).header.inverted,"onUpdate:value":s},null,8,["value","options","inverted"])],4)]),_:1})])}}}),Es=Ne(Ds,[["__scopeId","data-v-bd84ad3a"]]),Hs={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ls=I("path",{fill:"currentColor",d:"M21 3v6h-2V6.41l-3.29 3.3l-1.42-1.42L17.59 5H15V3zM3 3v6h2V6.41l3.29 3.3l1.42-1.42L6.41 5H9V3zm18 18v-6h-2v2.59l-3.29-3.29l-1.41 1.41L17.59 19H15v2zM9 21v-2H6.41l3.29-3.29l-1.41-1.42L5 17.59V15H3v6z"},null,-1),Us=[Ls];function Ns(e,t){return b(),N("svg",Hs,Us)}const Vs={name:"gridicons-fullscreen",render:Ns},Os={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},js=I("path",{fill:"currentColor",d:"M14 10V4h2v2.59l3.29-3.29l1.41 1.41L17.41 8H20v2zM4 10V8h2.59l-3.3-3.29l1.42-1.42L8 6.59V4h2v6zm16 4v2h-2.59l3.29 3.29l-1.41 1.41L16 17.41V20h-2v-6zm-10 0v6H8v-2.59l-3.29 3.3l-1.42-1.42L6.59 16H4v-2z"},null,-1),Ks=[js];function Ws(e,t){return b(),N("svg",Os,Ks)}const qs={name:"gridicons-fullscreen-exit",render:Ws},Xs=E({name:"FullScreen",__name:"full-screen",setup(e){const{isFullscreen:t,toggle:o}=mr(),n=X();return(r,a)=>{const i=qs,s=Vs,c=Fe;return b(),L(c,{class:"w-40px h-full","tooltip-content":"全屏",inverted:l(n).header.inverted,onClick:l(o)},{default:g(()=>[l(t)?(b(),L(i,{key:0,class:"text-18px"})):(b(),L(s,{key:1,class:"text-18px"}))]),_:1},8,["inverted","onClick"])}}}),Ys=E({name:"ThemeMode",__name:"theme-mode",setup(e){const t=X();return(o,n)=>{const r=zr,a=Fe;return b(),L(a,{class:"w-40px",inverted:l(t).header.inverted,"tooltip-content":"主题模式"},{default:g(()=>[h(r,{dark:l(t).darkMode,"customize-transition":l(t).isCustomizeDarkModeTransition,class:"wh-full","onUpdate:dark":l(t).setDarkMode},null,8,["dark","customize-transition","onUpdate:dark"])]),_:1},8,["inverted"])}}}),Zs={class:"pl-8px text-16px font-medium"},Gs=E({name:"UserAvatar",__name:"user-avatar",setup(e){const t=pr(),o=X(),{iconRender:n}=Ko(),r=[{label:"退出登录",key:"logout",icon:n({icon:"carbon:logout"})}];function a(i){var c;i==="logout"&&((c=window.$dialog)==null||c.info({title:"提示",content:"您确定要退出登录吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{t.resetAuthStore()}}))}return(i,s)=>{const c=Vr,p=Fe,f=zt;return b(),L(f,{options:r,onSelect:a},{default:g(()=>[h(p,{class:"px-12px",inverted:l(o).header.inverted},{default:g(()=>[h(c,{class:"text-32px"}),I("span",Zs,Y(l(t).userInfo.account),1)]),_:1},8,["inverted"])]),_:1})}}}),Js={viewBox:"0 0 36 36",width:"1em",height:"1em"},Qs=I("path",{fill:"currentColor",d:"M32.51 27.83A14.4 14.4 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93a1 1 0 0 0-.34.75v1.36a1 1 0 0 0 1 1h27.8a1 1 0 0 0 1-1v-1.36a1 1 0 0 0-.34-.75ZM5.13 28.94a16.17 16.17 0 0 0 2.44-3a14.24 14.24 0 0 0 1.65-5.85v-4.94a8.74 8.74 0 1 1 17.47 0v4.94a14.24 14.24 0 0 0 1.65 5.85a16.17 16.17 0 0 0 2.44 3Z",class:"clr-i-outline clr-i-outline-path-1"},null,-1),ec=I("path",{fill:"currentColor",d:"M18 34.28A2.67 2.67 0 0 0 20.58 32h-5.26A2.67 2.67 0 0 0 18 34.28Z",class:"clr-i-outline clr-i-outline-path-2"},null,-1),tc=I("path",{fill:"none",d:"M0 0h36v36H0z"},null,-1),oc=[Qs,ec,tc];function nc(e,t){return b(),N("svg",Js,oc)}const rc={name:"clarity-notification-line",render:nc},ac=E({name:"MessageList",__name:"message-list",props:{list:{default:()=>[]}},emits:["read"],setup(e,{emit:t}){function o(n){t("read",n)}return(n,r)=>{const a=sa,i=so,s=Br,c=Xr,p=Or,f=jr,m=Kr,u=ht;return b(),L(u,{class:"max-h-360px"},{default:g(()=>[h(m,null,{default:g(()=>[(b(!0),N(G,null,$e(n.list,(_,w)=>(b(),L(f,{key:_.id,class:"hover:bg-#f6f6f6 dark:hover:bg-dark cursor-pointer",onClick:B=>o(w)},{default:g(()=>[h(p,{class:le(["px-15px",{"opacity-30":_.isRead}])},vr({avatar:g(()=>[_.avatar?(b(),L(a,{key:0,src:_.avatar},null,8,["src"])):(b(),L(i,{key:1,class:"text-34px text-primary",icon:_.icon,"local-icon":_.svgIcon},null,8,["icon","local-icon"]))]),header:g(()=>[h(s,{"line-clamp":1},{tooltip:g(()=>[se(Y(_.title),1)]),default:g(()=>[se(Y(_.title)+" ",1)]),_:2},1024)]),description:g(()=>[_.description?(b(),L(s,{key:0,"line-clamp":2},{default:g(()=>[se(Y(_.description),1)]),_:2},1024)):ce("",!0),I("p",null,Y(_.date),1)]),_:2},[_.tagTitle?{name:"header-extra",fn:g(()=>[h(c,Et(_.tagProps,{size:"small"}),{default:g(()=>[se(Y(_.tagTitle),1)]),_:2},1040)]),key:"0"}:void 0]),1032,["class"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})}}}),lc={class:"mr-5px"},ic={key:0,class:"flex border-t border-$n-divider-color cursor-pointer"},sc=E({name:"SystemMessage",__name:"system-message",setup(e){const t=X(),{isMobile:o}=Ht(),{bool:n,setBool:r}=kt(),a=U(0),i=U([{key:1,name:"通知",badgeProps:{type:"warning"},list:[{id:1,icon:"ri:message-3-line",title:"你收到了5条新消息",date:"2022-06-17"},{id:4,icon:"ri:message-3-line",title:"SuperApi 1.0.0 版本正在筹备中",date:"2022-06-17"},{id:2,icon:"ri:message-3-line",title:"SuperApi 0.9.6 版本发布了",date:"2022-06-16"},{id:3,icon:"ri:message-3-line",title:"SuperApi 0.9.5 版本发布了",date:"2022-06-07"},{id:5,icon:"ri:message-3-line",title:"测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题",date:"2022-06-17"}]},{key:2,name:"消息",badgeProps:{type:"error"},list:[{id:1,title:"项目动态",svgIcon:"avatar",description:"SuperApi 刚才把工作台页面随便写了一些，凑合能看了！",date:"2021-11-07 22:45:32"},{id:2,title:"项目动态",svgIcon:"avatar",description:"SuperApi 正在忙于为SuperApi-admin写项目说明文档！",date:"2021-11-03 20:33:31"},{id:3,title:"项目动态",svgIcon:"avatar",description:"SuperApi 准备为SuperApi-admin 1.0的发布做充分的准备工作！",date:"2021-10-31 22:43:12"},{id:4,title:"项目动态",svgIcon:"avatar",description:"@yanbowe 向SuperApi-admin提交了一个bug，多标签栏不会自适应。",date:"2021-10-27 10:24:54"},{id:5,title:"项目动态",svgIcon:"avatar",description:"SuperApi 在2021年5月28日创建了开源项目SuperApi-admin！",date:"2021-05-28 22:22:22"}]},{key:3,name:"待办",badgeProps:{type:"info"},list:[{id:1,icon:"ri:calendar-todo-line",title:"缓存主题配置",description:"任务正在计划中",date:"2022-06-17",tagTitle:"未开始",tagProps:{type:"default"}},{id:2,icon:"ri:calendar-todo-line",title:"添加锁屏组件、全局Iframe组件",description:"任务正在计划中",date:"2022-06-17",tagTitle:"未开始",tagProps:{type:"default"}},{id:3,icon:"ri:calendar-todo-line",title:"示例页面完善",description:"任务正在计划中",date:"2022-06-17",tagTitle:"未开始",tagProps:{type:"default"}},{id:4,icon:"ri:calendar-todo-line",title:"表单、表格示例",description:"任务正在计划中",date:"2022-06-17",tagTitle:"未开始",tagProps:{type:"default"}},{id:5,icon:"ri:calendar-todo-line",title:"性能优化(优化递归函数)",description:"任务正在计划中",date:"2022-06-17",tagTitle:"未开始",tagProps:{type:"default"}},{id:6,icon:"ri:calendar-todo-line",title:"精简版(新分支thin)",description:"任务正在计划中",date:"2022-06-17",tagTitle:"未开始",tagProps:{type:"default"}}]}]),s=y(()=>i.value.reduce((_,w)=>_+w.list.filter(B=>!B.isRead).length,0)),c=y(()=>i.value[a.value].list.length>0);function p(_){i.value[a.value].list[_].isRead=!0}function f(){i.value[a.value].list.forEach(_=>Object.assign(_,{isRead:!0}))}function m(){i.value[a.value].list=[]}function u(){const{list:_}=i.value[a.value];r(!0),setTimeout(()=>{_.push(...i.value[a.value].list),r(!1)},1e3)}return(_,w)=>{const B=rc,A=ya,F=Fe,H=Wr,x=Zo,T=Go,D=Er;return b(),L(D,{class:"!p-0",trigger:"click",placement:"bottom"},{trigger:g(()=>[h(F,{"tooltip-content":"消息通知",inverted:l(t).header.inverted,class:"relative w-40px h-full"},{default:g(()=>[h(B,{class:"text-18px"}),h(A,{value:s.value,max:99,class:le([[s.value<10?"-right-2px":"-right-10px"],"absolute top-10px"])},null,8,["value","class"])]),_:1},8,["inverted"])]),default:g(()=>[h(T,{value:a.value,"onUpdate:value":w[0]||(w[0]=P=>a.value=P),class:le([l(o)?"w-276px":"w-360px"]),type:"line","justify-content":"space-evenly"},{default:g(()=>[(b(!0),N(G,null,$e(i.value,(P,O)=>(b(),L(x,{key:P.key,name:O},{tab:g(()=>[I("div",{class:le(["flex-x-center items-center",[l(o)?"w-92px":"w-120px"]])},[I("span",lc,Y(P.name),1),h(A,Et(P.badgeProps,{value:P.list.filter($=>!$.isRead).length,max:99,"show-zero":""}),null,16,["value"])],2)]),default:g(()=>[h(H,{class:"h-360px",loading:l(n),empty:P.list.length===0,"placeholder-class":"bg-$n-color transition-background-color duration-300 ease-in-out"},{default:g(()=>[h(ac,{list:P.list,onRead:p},null,8,["list"])]),_:2},1032,["loading","empty"])]),_:2},1032,["name"]))),128))]),_:1},8,["value","class"]),c.value?(b(),N("div",ic,[I("div",{class:"flex-1 text-center py-10px",onClick:m},"清空"),I("div",{class:"flex-1 text-center py-10px border-l border-$n-divider-color",onClick:f},"全部已读"),I("div",{class:"flex-1 text-center py-10px border-l border-$n-divider-color",onClick:u},"查看更多")])):ce("",!0)]),_:1})}}}),cc=E({name:"SettingButton",__name:"setting-button",setup(e){const t=_e(),o=X();return(n,r)=>{const a=qo,i=Fe;return b(),L(i,{class:"w-40px h-full","tooltip-content":"主题配置",inverted:l(o).header.inverted,onClick:l(t).toggleSettingDrawerVisible},{default:g(()=>[h(a,{class:"text-20px"})]),_:1},8,["inverted","onClick"])}}}),dc={class:"inline-block",viewBox:"0 0 512 512",width:"1em",height:"1em"},uc=I("path",{fill:"currentColor",d:"M320 24H16v304h176v168h304V192H320ZM148.305 96L98.093 239.3H132l8.166-23.3H192v80H48V56h240v136h-66.668L187.7 96Zm36.317 88h-33.244L168 136.562ZM464 224v240H224V224Z"},null,-1),hc=I("path",{fill:"currentColor",d:"M317.432 368.48a136.761 136.761 0 0 0 10.089 14.12q-17.4 9.384-39.521 9.4v32c24.141 0 45.71-6.408 64-18.824C370.29 417.592 391.859 424 416 424v-32q-22.075 0-39.52-9.407a136.574 136.574 0 0 0 10.088-14.113A166.212 166.212 0 0 0 406.662 320H424v-32h-56v-24h-32v24h-56v32h17.338a166.212 166.212 0 0 0 20.094 48.48ZM373.53 320a133.013 133.013 0 0 1-14.1 31.52a104.39 104.39 0 0 1-7.43 10.448a103.546 103.546 0 0 1-6.93-9.651A132.384 132.384 0 0 1 330.466 320Z"},null,-1),mc=[uc,hc];function pc(e,t){return b(),N("svg",dc,mc)}const vc={name:"cil-language",render:pc},fc=E({__name:"toggle-lang",setup(e){const t=X(),{locale:o}=fr(),n=U(ko.get("lang")||"zh-CN"),r=[{label:"中文",key:"zh-CN"},{label:"English",key:"en"},{label:"ភាសាខ្មែរ",key:"km-KH"}],a=i=>{n.value=i,o.value=i,ko.set("lang",i)};return(i,s)=>{const c=vc,p=zt,f=Fe;return b(),L(f,{class:"w-40px h-full",inverted:l(t).header.inverted},{default:g(()=>[h(p,{options:r,trigger:"hover",value:n.value,onSelect:a},{default:g(()=>[h(c,{class:"text-18px outline-transparent"})]),_:1},8,["value"])]),_:1},8,["inverted"])}}}),bc={key:1,class:"flex-1-hidden flex-y-center h-full"},gc={class:"flex justify-end h-full"},_c=E({name:"GlobalHeader",__name:"index",props:{showLogo:{},showHeaderMenu:{},showMenuCollapse:{}},setup(e){const t=X(),{isMobile:o}=Ht(),n={}.VITE_VERCEL!=="Y";return(r,a)=>{const i=mt;return b(),L(i,{class:"global-header flex-y-center h-full",inverted:l(t).header.inverted},{default:g(()=>[r.showLogo?(b(),L(yo,{key:0,"show-title":!0,class:"h-full",style:ke({width:l(t).sider.width+"px"})},null,8,["style"])):ce("",!0),r.showHeaderMenu?(b(),L(l(Es),{key:2})):(b(),N("div",bc,[r.showMenuCollapse||l(o)?(b(),L(l(Fs),{key:0})):ce("",!0),l(t).header.crumb.visible&&!l(o)?(b(),L(l(Ps),{key:1})):ce("",!0)])),I("div",gc,[h(ws),h(l(Xs)),h(l(Ys)),h(l(fc)),h(l(sc)),l(n)?(b(),L(l(cc),{key:0})):ce("",!0),h(l(Gs))])]),_:1},8,["inverted"])}}}),xc=Ne(_c,[["__scopeId","data-v-bad5cf5b"]]),yc=E({name:"BetterScroll",__name:"better-scroll",props:{options:{}},setup(e,{expose:t}){const o=e,n=U(),r=U(),a=U(),i=y(()=>!!o.options.scrollY);function s(){n.value&&(r.value=new Rr(n.value,o.options))}const{width:c}=$o(n),{width:p,height:f}=$o(a);return ue([()=>c.value,()=>p.value,()=>f.value],()=>{r.value&&r.value.refresh()}),st(()=>{s()}),t({instance:r}),(m,u)=>(b(),N("div",{ref_key:"bsWrap",ref:n,class:"h-full text-left"},[I("div",{ref_key:"bsContent",ref:a,class:le(["inline-block",{"h-full":!i.value}])},[it(m.$slots,"default")],2)],512))}}),wc=E({name:"ContextMenu",__name:"context-menu",props:{visible:{type:Boolean,default:!1},currentPath:{default:""},affix:{type:Boolean},x:{},y:{}},emits:["update:visible"],setup(e,{emit:t}){const o=e,n=_e(),r=uo(),{iconRender:a}=Ko(),i=y({get(){return o.visible},set(m){t("update:visible",m)}});function s(){i.value=!1}const c=y(()=>[{label:"内容全屏",key:"full-content",icon:a({icon:"gridicons-fullscreen"})},{label:"重新加载",key:"reload-current",disabled:o.currentPath!==r.activeTab,icon:a({icon:"ant-design:reload-outlined"})},{label:"关闭",key:"close-current",disabled:o.currentPath===r.homeTab.fullPath||!!o.affix,icon:a({icon:"ant-design:close-outlined"})},{label:"关闭其他",key:"close-other",icon:a({icon:"ant-design:column-width-outlined"})},{label:"关闭左侧",key:"close-left",icon:a({icon:"mdi:format-horizontal-align-left"})},{label:"关闭右侧",key:"close-right",icon:a({icon:"mdi:format-horizontal-align-right"})},{label:"关闭所有",key:"close-all",icon:a({icon:"ant-design:line-outlined"})}]),p=new Map([["full-content",()=>{n.setContentFull(!0)}],["reload-current",()=>{n.reloadPage()}],["close-current",()=>{r.removeTab(o.currentPath)}],["close-other",()=>{r.clearTab([o.currentPath])}],["close-left",()=>{r.clearLeftTab(o.currentPath)}],["close-right",()=>{r.clearRightTab(o.currentPath)}],["close-all",()=>{r.clearAllTab()}]]);function f(m){const u=m,_=p.get(u);_&&_(),s()}return(m,u)=>{const _=zt;return b(),L(_,{show:i.value,options:c.value,placement:"bottom-start",x:m.x,y:m.y,onClickoutside:s,onSelect:f},null,8,["show","options","x","y"])}}}),Cc=E({name:"TabDetail",__name:"index",emits:["scroll"],setup(e,{emit:t}){const o=X(),n=uo(),r=y(()=>o.tab.mode==="chrome"),a=U();async function i(){if(await nt(),a.value&&a.value.children.length&&a.value.children[n.activeTabIndex]){const u=a.value.children[n.activeTabIndex],{x:_,width:w}=u.getBoundingClientRect(),B=_+w/2;setTimeout(()=>{t("scroll",B)},50)}}const s=br({visible:!1,affix:!1,x:0,y:0,currentPath:""});function c(u){Object.assign(s,u)}let p=!1;function f(u){p||c({visible:u})}async function m(u,_,w){u.preventDefault();const{clientX:B,clientY:A}=u;p=!0;const F=s.visible?150:0;c({visible:!1}),setTimeout(()=>{c({visible:!0,x:B,y:A,currentPath:_,affix:w}),p=!1},F)}return ue(()=>n.activeTabIndex,()=>{i()},{immediate:!0}),(u,_)=>{const w=so;return b(),N(G,null,[I("div",{ref_key:"tabRef",ref:a,class:le(["flex h-full pr-18px",[r.value?"items-end":"items-center gap-12px"]])},[(b(!0),N(G,null,$e(l(n).tabs,B=>(b(),L(l(gr),{key:B.fullPath,mode:l(o).tab.mode,"dark-mode":l(o).darkMode,active:l(n).activeTab===B.fullPath,"active-color":l(o).themeColor,closable:!(B.name===l(n).homeTab.name||B.meta.affix),onClick:A=>l(n).handleClickTab(B.fullPath),onClose:A=>l(n).removeTab(B.fullPath),onContextmenu:A=>m(A,B.fullPath,B.meta.affix)},{prefix:g(()=>[h(w,{icon:B.meta.icon,"local-icon":B.meta.localIcon,class:"inline-block align-text-bottom text-16px"},null,8,["icon","local-icon"])]),default:g(()=>[se(" "+Y(B.meta.i18nTitle?l(W)(B.meta.i18nTitle):B.meta.title),1)]),_:2},1032,["mode","dark-mode","active","active-color","closable","onClick","onClose","onContextmenu"]))),128))],2),h(l(wc),{visible:s.visible,"current-path":s.currentPath,affix:s.affix,x:s.x,y:s.y,"onUpdate:visible":f},null,8,["visible","current-path","affix","x","y"])],64)}}}),kc=E({name:"ReloadButton",__name:"index",setup(e){const{reCacheRoute:t}=ct(),o=Ge(),{loading:n,startLoading:r,endLoading:a}=Zr();async function i(){r(),await t(o.name),setTimeout(()=>{a()},1e3)}return(s,c)=>{const p=Yr,f=Fe;return b(),L(f,{class:"w-64px h-full","tooltip-content":"重新加载",placement:"bottom-end",onClick:i},{default:g(()=>[h(p,{class:le(["text-22px",{"animate-spin":l(n)}])},null,8,["class"])]),_:1})}}}),$c=E({name:"GlobalTab",__name:"index",setup(e){const t=Ge(),o=X(),n=uo(),r=_r(),a=U(),{width:i,left:s}=xr(a),c=U(),p=!!r.device.type;function f(u){var B;const w=u-s.value-i.value/2;if(c.value){const{maxScrollX:A,x:F}=c.value.instance,H=A-F,x=w>0?Math.max(-w,H):Math.min(-w,-F);(B=c.value)==null||B.instance.scrollBy(x,0,300)}}function m(){n.iniTabStore(t)}return ue(()=>t.fullPath,()=>{n.addTab(t),n.setActiveTab(t.fullPath)}),m(),(u,_)=>{const w=yc,B=mt;return b(),L(B,{class:"global-tab flex-y-center w-full pl-16px",style:ke({height:l(o).tab.height+"px"})},{default:g(()=>[I("div",{ref_key:"bsWrapper",ref:a,class:"flex-1-hidden h-full"},[h(w,{ref_key:"bsScroll",ref:c,options:{scrollX:!0,scrollY:!1,click:l(p)}},{default:g(()=>[h(l(Cc),{onScroll:f})]),_:1},8,["options"])],512),h(l(kc))]),_:1},8,["style"])}}}),zc=Ne($c,[["__scopeId","data-v-2aed69b2"]]),Sc=E({name:"VerticalMenu",__name:"vertical-menu",setup(e){const t=Ge(),o=_e(),n=X(),r=ct(),{routerPush:a}=$t(),i=y(()=>co(r.menus)),s=y(()=>{var m;return(m=t.meta)!=null&&m.activeMenu?t.meta.activeMenu:t.name}),c=U([]);function p(m,u){a(u.routePath)}function f(m){c.value=m}return ue(()=>t.name,()=>{c.value=Wo(s.value,i.value)},{immediate:!0}),(m,u)=>{const _=_o,w=ht;return b(),L(w,{class:"flex-1-hidden"},{default:g(()=>[h(_,{value:s.value,collapsed:l(o).siderCollapse,"collapsed-width":l(n).sider.collapsedWidth,"collapsed-icon-size":22,options:i.value,"expanded-keys":c.value,indent:18,inverted:!l(n).darkMode&&l(n).sider.inverted,"onUpdate:value":p,"onUpdate:expandedKeys":f},null,8,["value","collapsed","collapsed-width","options","expanded-keys","inverted"])]),_:1})}}}),Rc=E({name:"VerticalSider",__name:"index",setup(e){const t=_e(),o=X(),n=y(()=>o.layout.mode==="horizontal-mix"),r=y(()=>!t.siderCollapse&&o.layout.mode!=="vertical-mix");return(a,i)=>{const s=mt;return b(),L(s,{class:"flex-col-stretch h-full",inverted:l(o).sider.inverted},{default:g(()=>[n.value?ce("",!0):(b(),L(l(yo),{key:0,"show-title":r.value,style:ke({height:l(o).header.height+"px"})},null,8,["show-title","style"])),h(l(Sc))]),_:1},8,["inverted"])}}}),Mc=E({name:"MixMenuDetail",__name:"mix-menu-detail",props:{routeName:{},label:{},activeRouteName:{},icon:{type:[Object,Function],default:void 0},isMini:{type:Boolean,default:!1}},setup(e){const t=e,{bool:o,setTrue:n,setFalse:r}=kt(),a=y(()=>t.routeName===t.activeRouteName);return(i,s)=>(b(),N("div",{class:"mb-6px px-4px cursor-pointer",onMouseenter:s[0]||(s[0]=(...c)=>l(n)&&l(n)(...c)),onMouseleave:s[1]||(s[1]=(...c)=>l(r)&&l(r)(...c))},[I("div",{class:le(["flex-center flex-col py-12px rounded-2px bg-transparent transition-colors duration-300 ease-in-out",{"text-primary !bg-primary_active":a.value,"text-primary":l(o)}])},[(b(),L(Gt(i.icon),{class:le([i.isMini?"text-16px":"text-20px"])},null,8,["class"])),I("p",{class:le(["w-full text-center ellipsis-text text-12px transition-height duration-300 ease-in-out",[i.isMini?"h-0 pt-0":"h-24px pt-4px"]])},Y(i.label),3)],2)],32))}}),Bc={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ac=I("path",{fill:"currentColor",d:"M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2Z"},null,-1),Ic=[Ac];function Fc(e,t){return b(),N("svg",Bc,Ic)}const Pc={name:"mdi-pin",render:Fc},Tc={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Dc=I("path",{fill:"currentColor",d:"M2 5.27L3.28 4L20 20.72L18.73 22l-5.93-5.93V22h-1.6v-6H6v-2l2-2v-.73l-6-6M16 12l2 2v2h-.18L8 6.18V4H7V2h10v2h-1v8Z"},null,-1),Ec=[Dc];function Hc(e,t){return b(),N("svg",Tc,Ec)}const Lc={name:"mdi-pin-off",render:Hc},Uc={class:"text-primary pl-8px text-16px font-bold"},Nc=E({name:"MixMenuDrawer",__name:"mix-menu-drawer",props:{visible:{type:Boolean},menus:{}},setup(e){const t=e,o=Ge(),n=_e(),r=X(),{routerPush:a}=$t(),i=y(()=>t.visible&&t.menus.length||n.mixSiderFixed),s=y(()=>{var m;return(m=o.meta)!=null&&m.activeMenu?o.meta.activeMenu:o.name}),c=U([]);function p(m,u){a(u.routePath)}function f(m){c.value=m}return ue(()=>o.name,()=>{c.value=Wo(s.value,t.menus)},{immediate:!0}),(m,u)=>{const _=Lc,w=Pc,B=_o,A=ht,F=mt;return b(),N("div",{class:"relative h-full transition-width duration-300 ease-in-out",style:ke({width:l(n).mixSiderFixed?l(r).sider.mixChildMenuWidth+"px":"0px"})},[h(F,{class:"drawer-shadow absolute-lt flex-col-stretch h-full nowrap-hidden",inverted:l(r).sider.inverted,style:ke({width:i.value?l(r).sider.mixChildMenuWidth+"px":"0px"})},{default:g(()=>[I("header",{class:"header-height flex-y-center justify-between",style:ke({height:l(r).header.height+"px"})},[I("h2",Uc,Y(l(W)("system.title")),1),I("div",{class:"px-8px text-16px text-gray-600 cursor-pointer",onClick:u[0]||(u[0]=(...H)=>l(n).toggleMixSiderFixed&&l(n).toggleMixSiderFixed(...H))},[l(n).mixSiderFixed?(b(),L(_,{key:0})):(b(),L(w,{key:1}))])],4),h(A,{class:"flex-1-hidden"},{default:g(()=>[h(B,{value:s.value,options:m.menus,"expanded-keys":c.value,indent:18,inverted:!l(r).darkMode&&l(r).sider.inverted,"onUpdate:value":p,"onUpdate:expandedKeys":f},null,8,["value","options","expanded-keys","inverted"])]),_:1})]),_:1},8,["inverted","style"])],4)}}}),Vc=Ne(Nc,[["__scopeId","data-v-5c7ea91b"]]),Oc={class:"inline-block",viewBox:"0 0 256 256",width:"1em",height:"1em"},jc=I("path",{fill:"currentColor",d:"M208.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L137 128ZM57 128l71.52-71.51a12 12 0 0 0-17-17l-80 80a12 12 0 0 0 0 17l80 80a12 12 0 0 0 17-17Z"},null,-1),Kc=[jc];function Wc(e,t){return b(),N("svg",Oc,Kc)}const qc={name:"ph-caret-double-left-bold",render:Wc},Xc={class:"inline-block",viewBox:"0 0 256 256",width:"1em",height:"1em"},Yc=I("path",{fill:"currentColor",d:"m144.49 136.49l-80 80a12 12 0 0 1-17-17L119 128L47.51 56.49a12 12 0 0 1 17-17l80 80a12 12 0 0 1-.02 17Zm80-17l-80-80a12 12 0 1 0-17 17L199 128l-71.52 71.51a12 12 0 0 0 17 17l80-80a12 12 0 0 0 .01-17Z"},null,-1),Zc=[Yc];function Gc(e,t){return b(),N("svg",Xc,Zc)}const Jc={name:"ph-caret-double-right-bold",render:Gc},Qc=E({name:"MixMenuCollapse",__name:"mix-menu-collapse",setup(e){const t=_e();return(o,n)=>{const r=Jc,a=qc,i=Me;return b(),L(i,{text:!0,class:"h-36px",onClick:l(t).toggleSiderCollapse},{default:g(()=>[l(t).siderCollapse?(b(),L(r,{key:0,class:"text-16px"})):(b(),L(a,{key:1,class:"text-16px"}))]),_:1},8,["onClick"])}}}),ed={class:"flex-1-hidden flex-col-stretch h-full"},td=E({name:"VerticalMixSider",__name:"index",setup(e){const t=Ge(),o=_e(),n=X(),r=ct(),{routerPush:a}=$t(),{bool:i,setTrue:s,setFalse:c}=kt(),p=U("");function f(A){p.value=A}const m=y(()=>r.menus.map(A=>{const{routeName:F,label:H,i18nTitle:x}=A,T=A==null?void 0:A.icon,D=!!(A.children&&A.children.length);return{routeName:F,label:x?W(x):H,icon:T,hasChildren:D}}));function u(){m.value.some(A=>{var x;const F=(x=t.meta)!=null&&x.activeMenu?t.meta.activeMenu:t.name,H=F==null?void 0:F.includes(A.routeName);return H&&f(A.routeName),H})}function _(A,F){f(A),F?s():a({name:A})}function w(){u(),c()}const B=y(()=>{const A=[];return r.menus.some(F=>{var x;const H=F.routeName===p.value&&!!((x=F.children)!=null&&x.length);return H&&A.push(...co(F.children||[])),H}),A});return ue(()=>t.name,()=>{u()},{immediate:!0}),(A,F)=>{const H=ht,x=mt;return b(),L(x,{class:"flex h-full",inverted:l(n).sider.inverted,onMouseleave:w},{default:g(()=>[I("div",ed,[h(l(yo),{"show-title":!1,style:ke({height:l(n).header.height+"px"})},null,8,["style"]),h(H,{class:"flex-1-hidden"},{default:g(()=>[(b(!0),N(G,null,$e(m.value,T=>(b(),L(l(Mc),{key:T.routeName,"route-name":T.routeName,"active-route-name":p.value,label:T.label,icon:T.icon,"is-mini":l(o).siderCollapse,onClick:D=>_(T.routeName,T.hasChildren)},null,8,["route-name","active-route-name","label","icon","is-mini","onClick"]))),128))]),_:1}),h(l(Qc))]),h(l(Vc),{visible:l(i),menus:B.value},null,8,["visible","menus"])]),_:1},8,["inverted"])}}}),od=E({name:"GlobalSider",__name:"index",setup(e){const t=X(),o=y(()=>t.layout.mode==="vertical-mix");return(n,r)=>o.value?(b(),L(l(td),{key:0,class:"global-sider"})):(b(),L(l(Rc),{key:1,class:"global-sider"}))}}),nd=Ne(od,[["__scopeId","data-v-afe6955b"]]),rd=I("span",null,"Copyright ©2021 SuperApi",-1),ad=E({name:"GlobalFooter",__name:"index",setup(e){const t=X();return(o,n)=>{const r=mt;return b(),L(r,{class:"flex-center h-full",inverted:l(t).footer.inverted},{default:g(()=>[rd]),_:1},8,["inverted"])}}}),Dd=E({name:"BasicLayout",__name:"index",setup(e){const t=_e(),o=X(),{mode:n,isMobile:r,headerProps:a,siderVisible:i,siderWidth:s,siderCollapsedWidth:c}=Ht();return(p,f)=>{const m=va;return b(),N(G,null,[h(l(Cr),{mode:l(n),"is-mobile":l(r),"scroll-mode":l(o).scrollMode,"scroll-el-id":l(t).scrollElId,"full-content":l(t).contentFull,"fixed-top":l(o).fixedHeaderAndTab,"header-height":l(o).header.height,"tab-visible":l(o).tab.visible,"tab-height":l(o).tab.height,"content-class":l(t).disableMainXScroll?"overflow-x-hidden":"","sider-visible":l(i),"sider-collapse":l(t).siderCollapse,"sider-width":l(s),"sider-collapsed-width":l(c),"footer-visible":l(o).footer.visible,"fixed-footer":l(o).footer.fixed,"right-footer":l(o).footer.right,onClickMobileSiderMask:f[0]||(f[0]=u=>l(t).setSiderCollapse(!0))},{header:g(()=>[h(l(xc),yr(wr(l(a))),null,16)]),tab:g(()=>[h(l(zc))]),sider:g(()=>[h(l(nd))]),footer:g(()=>[h(l(ad))]),default:g(()=>[h(l(Mr))]),_:1},8,["mode","is-mobile","scroll-mode","scroll-el-id","full-content","fixed-top","header-height","tab-visible","tab-height","content-class","sider-visible","sider-collapse","sider-width","sider-collapsed-width","footer-visible","fixed-footer","right-footer"]),(b(),L(m,{key:l(o).scrollMode,"listen-to":`#${l(t).scrollElId}`,class:"z-100"},null,8,["listen-to"])),h(l(Bi))],64)}}});export{Dd as default};
