import{E as b,av as i,e as x,d as v,o as C,c as s,q as p,v as h,x as z,h as T}from"./index-e9ed0e0e.js";import{u as E}from"./use-houdini-38c9febd.js";import{f as R}from"./format-length-c9d165c6.js";const $=t=>{const{primaryColor:n,successColor:a,warningColor:r,errorColor:c,infoColor:l,fontWeightStrong:d}=t;return{fontWeight:d,rotate:"252deg",colorStartPrimary:i(n,{alpha:.6}),colorEndPrimary:n,colorStartInfo:i(l,{alpha:.6}),colorEndInfo:l,colorStartWarning:i(r,{alpha:.6}),colorEndWarning:r,colorStartError:i(c,{alpha:.6}),colorEndError:c,colorStartSuccess:i(a,{alpha:.6}),colorEndSuccess:a}},w={name:"GradientText",common:b,self:$},I=w,k=x("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),P=Object.assign(Object.assign({},p.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),_=v({name:"GradientText",props:P,setup(t){E();const{mergedClsPrefixRef:n,inlineThemeDisabled:a}=C(t),r=s(()=>{const{type:e}=t;return e==="danger"?"error":e}),c=s(()=>{let e=t.size||t.fontSize;return e&&(e=R(e)),e||void 0}),l=s(()=>{const e=t.color||t.gradient;if(typeof e=="string")return e;if(e){const g=e.deg||0,m=e.from,f=e.to;return`linear-gradient(${g}deg, ${m} 0%, ${f} 100%)`}}),d=p("GradientText","-gradient-text",k,I,t,n),u=s(()=>{const{value:e}=r,{common:{cubicBezierEaseInOut:g},self:{rotate:m,[h("colorStart",e)]:f,[h("colorEnd",e)]:y,fontWeight:S}}=d.value;return{"--n-bezier":g,"--n-rotate":m,"--n-color-start":f,"--n-color-end":y,"--n-font-weight":S}}),o=a?z("gradient-text",s(()=>r.value[0]),u,t):void 0;return{mergedClsPrefix:n,compatibleType:r,styleFontSize:c,styleBgImage:l,cssVars:a?void 0:u,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedClsPrefix:t,onRender:n}=this;return n==null||n(),T("span",{class:[`${t}-gradient-text`,`${t}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}});export{_};
