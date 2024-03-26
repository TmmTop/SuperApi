import{a as g,e as t,aB as oe,g as I,i as Y,l as ne,m as re,d as y,o as se,q as K,c as Q,v as M,x as ie,bP as ae,h as c,bQ as le,bR as ce,aO as h,aR as f,aS as d,aQ as U,bF as D,aX as b,aY as P,aV as A,aT as v,aP as X,a_ as Z,ax as ee,bS as de,z as pe}from"./index-e9ed0e0e.js";import{u as be}from"./use-compitable-74186af3.js";import{g as ue,_ as me}from"./Space-5f39c62b.js";import{N as ge}from"./Tag-b8d65896.js";function W(e,a="default",r=[]){const{children:i}=e;if(i!==null&&typeof i=="object"&&!Array.isArray(i)){const u=i[a];if(typeof u=="function")return u()}return r}const te="DESCRIPTION_ITEM_FLAG";function he(e){return typeof e=="object"&&e&&!Array.isArray(e)?e.type&&e.type[te]:!1}const ve=g([t("descriptions",{fontSize:"var(--n-font-size)"},[t("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[t("descriptions-table-header",{padding:"var(--n-th-padding)"}),t("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),oe("bordered",[t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[g("&:last-child",[t("descriptions-table-content",{paddingBottom:0})])])])])]),I("left-label-placement",[t("descriptions-table-content",[g("> *",{verticalAlign:"top"})])]),I("left-label-align",[g("th",{textAlign:"left"})]),I("center-label-align",[g("th",{textAlign:"center"})]),I("right-label-align",[g("th",{textAlign:"right"})]),I("bordered",[t("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[t("descriptions-table",[t("descriptions-table-row",[g("&:not(:last-child)",[t("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),t("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-content",[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),t("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),t("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[t("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[t("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[t("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),t("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Y("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),Y("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),ne(t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),re(t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),_e=Object.assign(Object.assign({},K.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),L=y({name:"Descriptions",props:_e,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:r}=se(e),i=K("Descriptions","-descriptions",ve,ce,e,a),u=Q(()=>{const{size:s,bordered:l}=e,{common:{cubicBezierEaseInOut:_},self:{titleTextColor:n,thColor:T,thColorModal:w,thColorPopover:$,thTextColor:N,thFontWeight:H,tdTextColor:B,tdColor:o,tdColorModal:C,tdColorPopover:O,borderColor:m,borderColorModal:x,borderColorPopover:z,borderRadius:V,lineHeight:S,[M("fontSize",s)]:E,[M(l?"thPaddingBordered":"thPadding",s)]:k,[M(l?"tdPaddingBordered":"tdPadding",s)]:j}}=i.value;return{"--n-title-text-color":n,"--n-th-padding":k,"--n-td-padding":j,"--n-font-size":E,"--n-bezier":_,"--n-th-font-weight":H,"--n-line-height":S,"--n-th-text-color":N,"--n-td-text-color":B,"--n-th-color":T,"--n-th-color-modal":w,"--n-th-color-popover":$,"--n-td-color":o,"--n-td-color-modal":C,"--n-td-color-popover":O,"--n-border-radius":V,"--n-border-color":m,"--n-border-color-modal":x,"--n-border-color-popover":z}}),p=r?ie("descriptions",Q(()=>{let s="";const{size:l,bordered:_}=e;return _&&(s+="a"),s+=l[0],s}),u,e):void 0;return{mergedClsPrefix:a,cssVars:r?void 0:u,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender,compitableColumn:be(e,["columns","column"]),inlineThemeDisabled:r}},render(){const e=this.$slots.default,a=e?ae(e()):[];a.length;const{compitableColumn:r,labelPlacement:i,labelAlign:u,size:p,bordered:s,title:l,cssVars:_,mergedClsPrefix:n,separator:T,onRender:w}=this;w==null||w();const $=a.filter(o=>he(o)),N={span:0,row:[],secondRow:[],rows:[]},B=$.reduce((o,C,O)=>{const m=C.props||{},x=$.length-1===O,z=["label"in m?m.label:W(C,"label")],V=[W(C)],S=m.span||1,E=o.span;o.span+=S;const k=m.labelStyle||m["label-style"]||this.labelStyle,j=m.contentStyle||m["content-style"]||this.contentStyle;if(i==="left")s?o.row.push(c("th",{class:`${n}-descriptions-table-header`,colspan:1,style:k},z),c("td",{class:`${n}-descriptions-table-content`,colspan:x?(r-E)*2+1:S*2-1,style:j},V)):o.row.push(c("td",{class:`${n}-descriptions-table-content`,colspan:x?(r-E)*2:S*2},c("span",{class:`${n}-descriptions-table-content__label`,style:k},[...z,T&&c("span",{class:`${n}-descriptions-separator`},T)]),c("span",{class:`${n}-descriptions-table-content__content`,style:j},V)));else{const q=x?(r-E)*2:S*2;o.row.push(c("th",{class:`${n}-descriptions-table-header`,colspan:q,style:k},z)),o.secondRow.push(c("td",{class:`${n}-descriptions-table-content`,colspan:q,style:j},V))}return(o.span>=r||x)&&(o.span=0,o.row.length&&(o.rows.push(o.row),o.row=[]),i!=="left"&&o.secondRow.length&&(o.rows.push(o.secondRow),o.secondRow=[])),o},N).rows.map(o=>c("tr",{class:`${n}-descriptions-table-row`},o));return c("div",{style:_,class:[`${n}-descriptions`,this.themeClass,`${n}-descriptions--${i}-label-placement`,`${n}-descriptions--${u}-label-align`,`${n}-descriptions--${p}-size`,s&&`${n}-descriptions--bordered`]},l||this.$slots.header?c("div",{class:`${n}-descriptions-header`},l||ue(this,"header")):null,c("div",{class:`${n}-descriptions-table-wrapper`},c("table",{class:`${n}-descriptions-table`},c("tbody",null,i==="top"&&c("tr",{class:`${n}-descriptions-table-row`,style:{visibility:"collapse"}},le(r*2,c("td",null))),B))))}}),fe={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},F=y({name:"DescriptionsItem",[te]:!0,props:fe,render(){return null}}),ye=U("p",{class:"leading-24px"}," SuperApi 是一个基于 Vue3、Vite、Naive UI、TypeScript 的中后台解决方案，它使用了最新的前端技术栈，无实体Crud，fast-crud等技术不仅加速项目开发周期， 并提炼了典型的业务模型，页面，包括二次封装组件、动态菜单、权限校验、粒子化权限控制等功能，它可以帮助你快速搭建企业级中后台项目，相信不管是从新技术使用还是其他方面，都能帮助到你。 ",-1),xe=y({name:"ProjectIntroduction",__name:"project-introduction",setup(e){return(a,r)=>{const i=D;return h(),f(i,{title:"关于",bordered:!1,size:"large",class:"rounded-8px shadow-sm"},{default:d(()=>[ye]),_:1})}}}),Se="soybean-admin",we="0.10.4",Ce="A fresh and elegant admin template, based on Vue3、Vite3、TypeScript、NaiveUI and UnoCSS. 一个基于Vue3、Vite3、TypeScript、NaiveUI and UnoCSS的清新优雅的中后台模版。",ze={name:"Soybean",email:"soybeanjs@outlook.com",url:"https://github.com/soybeanjs"},Ve="MIT",Ee="https://github.com/honghuangdc/soybean-admin",ke={url:"https://github.com/honghuangdc/soybean-admin.git"},je={url:"https://github.com/honghuangdc/soybean-admin/issues"},Ie=["Vue","Vue3","admin","admin-template","vue-admin","vue-admin-template","Vite3","Vite","vite-admin","TypeScript","TS","NaiveUI","naive-ui","naive-admin","NaiveUI-Admin","naive-ui-admin","UnoCSS"],Te={dev:"cross-env VITE_SERVICE_ENV=dev vite","dev:test":"cross-env VITE_SERVICE_ENV=test vite","dev:prod":"cross-env VITE_SERVICE_ENV=prod vite",build:"cross-env VITE_SERVICE_ENV=prod vite build","build:dev":"npm run typecheck && cross-env VITE_SERVICE_ENV=dev vite build","build:test":"npm run typecheck && cross-env VITE_SERVICE_ENV=test vite build","build:vercel":"cross-env VITE_HASH_ROUTE=Y VITE_VERCEL=Y vite build",preview:"vite preview",typecheck:"vue-tsc --noEmit --skipLibCheck",lint:"eslint . --fix",format:"soy prettier-write",commit:"soy git-commit",cleanup:"soy cleanup","update-pkg":"soy ncu",release:"soy release",tsx:"tsx",logo:"tsx ./scripts/logo.ts",prepare:"soy init-simple-git-hooks"},$e={"@antv/data-set":"0.11.8","@antv/g2":"4.2.10","@better-scroll/core":"2.5.1","@soybeanjs/vue-materials":"0.2.0","@vueuse/core":"10.5.0",axios:"1.5.1",clipboard:"2.0.11",colord:"2.9.3","core-js":"^3.34.0","crypto-js":"4.1.1",dayjs:"1.11.10",echarts:"5.4.3","form-data":"4.0.0","lodash-es":"4.17.21",mockjs:"^1.1.0","naive-ui":"2.35.0",pinia:"2.1.6","print-js":"1.6.0",pug:"^3.0.2",qs:"6.11.2","simple-git-hooks":"^2.9.0","sm-crypto-v2":"^1.8.0","socket.io-client":"4.7.2",svelte:"^4.2.8",swiper:"10.3.1","ua-parser-js":"1.0.36",vditor:"3.9.6",vue:"3.3.4","vue-i18n":"9.5.0","vue-router":"4.2.5",vuedraggable:"4.1.0",wangeditor:"4.7.15",xgplayer:"3.0.9"},Re={"@amap/amap-jsapi-types":"0.0.13","@iconify/json":"2.2.128","@iconify/vue":"4.1.1","@soybeanjs/cli":"0.7.4","@soybeanjs/vite-plugin-vue-page-route":"0.0.10","@types/bmapgl":"0.0.7","@types/crypto-js":"4.1.2","@types/node":"20.8.4","@types/qs":"6.9.8","@types/ua-parser-js":"0.7.37","@unocss/preset-uno":"0.56.5","@unocss/transformer-directives":"0.56.5","@unocss/vite":"0.56.5","@vitejs/plugin-vue":"4.4.0","@vitejs/plugin-vue-jsx":"3.0.2","cross-env":"7.0.3",eslint:"8.51.0","eslint-config-soybeanjs":"0.5.7","rollup-plugin-visualizer":"5.9.2",sass:"1.69.3",tsx:"3.13.0",typescript:"5.2.2","unplugin-icons":"0.17.0","unplugin-vue-components":"0.25.2",vite:"4.4.11","vite-plugin-compression":"0.5.1","vite-plugin-mock":"2.9.8","vite-plugin-progress":"0.0.7","vite-plugin-pwa":"0.16.5","vite-plugin-svg-icons":"2.0.1","vite-plugin-vue-devtools":"1.0.0-rc.5","vue-tsc":"1.8.19"},Pe={useSoybeanToken:!0},Ae={name:Se,version:we,description:Ce,author:ze,license:Ve,homepage:Ee,repository:ke,bugs:je,keywords:Ie,scripts:Te,dependencies:$e,devDependencies:Re,"simple-git-hooks":{"commit-msg":"pnpm soy git-commit-verify","pre-commit":"pnpm typecheck && pnpm soy lint-staged"},soybean:Pe},R=Ae;function J(e){const[a,r]=e;return{name:a,version:r}}const G={name:R.name,version:R.version,dependencies:Object.entries(R.dependencies).map(e=>J(e)),devDependencies:Object.entries(R.devDependencies).map(e=>J(e))},De=U("a",{class:"text-primary",href:"https://github.com/honghuangdc/soybean-admin",target:"_blank"},"Github地址",-1),Ne=U("a",{class:"text-primary",href:"https://admin.soybeanjs.cn",target:"_blank"},"预览地址",-1),Be=y({name:"ProjectInfo",__name:"project-info",setup(e){const{version:a}=G,r="2023-12-28 16:28:45";return(i,u)=>{const p=ge,s=F,l=L,_=D;return h(),f(_,{title:"项目信息",bordered:!1,size:"small",class:"rounded-8px shadow-sm"},{default:d(()=>[b(l,{"label-placement":"left",bordered:"",size:"small",column:2},{default:d(()=>[b(s,{label:"版本"},{default:d(()=>[b(p,{type:"primary"},{default:d(()=>[P(A(v(a)),1)]),_:1})]),_:1}),b(s,{label:"最后编译时间"},{default:d(()=>[b(p,{type:"primary"},{default:d(()=>[P(A(v(r)),1)]),_:1})]),_:1}),b(s,{label:"Github地址"},{default:d(()=>[De]),_:1}),b(s,{label:"预览地址"},{default:d(()=>[Ne]),_:1})]),_:1})]),_:1})}}}),Oe=y({name:"ProDependency",__name:"pro-dependency",setup(e){const{dependencies:a}=G;return(r,i)=>{const u=F,p=L,s=D;return h(),f(s,{title:"生产环境依赖",bordered:!1,size:"small",class:"rounded-8px shadow-sm"},{default:d(()=>[b(p,{"label-placement":"left",bordered:"",size:"small"},{default:d(()=>[(h(!0),X(ee,null,Z(v(a),l=>(h(),f(u,{key:l.name,label:l.name},{default:d(()=>[P(A(l.version),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})}}}),Me=y({name:"DevDependency",__name:"dev-dependency",setup(e){const{devDependencies:a}=G;return(r,i)=>{const u=F,p=L,s=D;return h(),f(s,{title:"开发环境依赖",bordered:!1,size:"small",class:"rounded-8px shadow-sm"},{default:d(()=>[b(p,{"label-placement":"left",bordered:"",size:"small"},{default:d(()=>[(h(!0),X(ee,null,Z(v(a),l=>(h(),f(u,{key:l.name,label:l.name},{default:d(()=>[P(A(l.version),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})}}}),He=y({__name:"index",setup(e){return de(()=>{console.log("about page activated")}),pe(()=>{console.log("about page mounted")}),(a,r)=>{const i=me;return h(),f(i,{vertical:!0,size:16},{default:d(()=>[b(v(xe)),b(v(Be)),b(v(Oe)),b(v(Me))]),_:1})}}});export{He as default};
