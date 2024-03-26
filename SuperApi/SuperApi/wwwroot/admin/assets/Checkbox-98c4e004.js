import{h as s,k as se,d as K,o as j,a8 as E,r as P,c as B,S as ue,t as U,ad as i,a as h,e as r,g as S,i as C,aE as be,l as he,m as fe,p as ke,ay as ve,q as H,P as me,v as N,x as ge,dc as xe,D as pe,aH as Ce,a1 as ye,de as we}from"./index-e9ed0e0e.js";import{u as G}from"./use-merged-state-496c4ad7.js";const Re=s("svg",{viewBox:"0 0 64 64",class:"check-icon"},s("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),ze=s("svg",{viewBox:"0 0 100 100",class:"line-icon"},s("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),V=se("n-checkbox-group"),Se={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Ae=K({name:"CheckboxGroup",props:Se,setup(o){const{mergedClsPrefixRef:y}=j(o),x=E(o),{mergedSizeRef:w,mergedDisabledRef:T}=x,u=P(o.defaultValue),R=B(()=>o.value),b=G(R,u),c=B(()=>{var f;return((f=b.value)===null||f===void 0?void 0:f.length)||0}),a=B(()=>Array.isArray(b.value)?new Set(b.value):new Set);function A(f,n){const{nTriggerFormInput:p,nTriggerFormChange:k}=x,{onChange:l,"onUpdate:value":v,onUpdateValue:m}=o;if(Array.isArray(b.value)){const t=Array.from(b.value),M=t.findIndex(I=>I===n);f?~M||(t.push(n),m&&i(m,t,{actionType:"check",value:n}),v&&i(v,t,{actionType:"check",value:n}),p(),k(),u.value=t,l&&i(l,t)):~M&&(t.splice(M,1),m&&i(m,t,{actionType:"uncheck",value:n}),v&&i(v,t,{actionType:"uncheck",value:n}),l&&i(l,t),u.value=t,p(),k())}else f?(m&&i(m,[n],{actionType:"check",value:n}),v&&i(v,[n],{actionType:"check",value:n}),l&&i(l,[n]),u.value=[n],p(),k()):(m&&i(m,[],{actionType:"uncheck",value:n}),v&&i(v,[],{actionType:"uncheck",value:n}),l&&i(l,[]),u.value=[],p(),k())}return ue(V,{checkedCountRef:c,maxRef:U(o,"max"),minRef:U(o,"min"),valueSetRef:a,disabledRef:T,mergedSizeRef:w,toggleCheckbox:A}),{mergedClsPrefix:y}},render(){return s("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Te=h([r("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[S("show-label","line-height: var(--n-label-line-height);"),h("&:hover",[r("checkbox-box",[C("border","border: var(--n-border-checked);")])]),h("&:focus:not(:active)",[r("checkbox-box",[C("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),S("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),S("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[h(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("indeterminate",[r("checkbox-box",[r("checkbox-icon",[h(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),h(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("checked, indeterminate",[h("&:focus:not(:active)",[r("checkbox-box",[C("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[C("border",{border:"var(--n-border-checked)"})])]),S("disabled",{cursor:"not-allowed"},[S("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[C("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[h(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[C("border",`
 border: var(--n-border-disabled);
 `),r("checkbox-icon",[h(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),C("label",`
 color: var(--n-text-color-disabled);
 `)]),r("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),r("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[C("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),r("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[h(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),be({left:"1px",top:"1px"})])]),C("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[h("&:empty",{display:"none"})])]),he(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),fe(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),De=Object.assign(Object.assign({},H.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Me=K({name:"Checkbox",props:De,setup(o){const y=P(null),{mergedClsPrefixRef:x,inlineThemeDisabled:w,mergedRtlRef:T}=j(o),u=E(o,{mergedSize(e){const{size:g}=o;if(g!==void 0)return g;if(c){const{value:d}=c.mergedSizeRef;if(d!==void 0)return d}if(e){const{mergedSize:d}=e;if(d!==void 0)return d.value}return"medium"},mergedDisabled(e){const{disabled:g}=o;if(g!==void 0)return g;if(c){if(c.disabledRef.value)return!0;const{maxRef:{value:d},checkedCountRef:z}=c;if(d!==void 0&&z.value>=d&&!n.value)return!0;const{minRef:{value:$}}=c;if($!==void 0&&z.value<=$&&n.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:R,mergedSizeRef:b}=u,c=ke(V,null),a=P(o.defaultChecked),A=U(o,"checked"),f=G(A,a),n=ve(()=>{if(c){const e=c.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return f.value===o.checkedValue}),p=H("Checkbox","-checkbox",Te,we,o,x);function k(e){if(c&&o.value!==void 0)c.toggleCheckbox(!n.value,o.value);else{const{onChange:g,"onUpdate:checked":d,onUpdateChecked:z}=o,{nTriggerFormInput:$,nTriggerFormChange:F}=u,_=n.value?o.uncheckedValue:o.checkedValue;d&&i(d,_,e),z&&i(z,_,e),g&&i(g,_,e),$(),F(),a.value=_}}function l(e){R.value||k(e)}function v(e){if(!R.value)switch(e.key){case" ":case"Enter":k(e)}}function m(e){switch(e.key){case" ":e.preventDefault()}}const t={focus:()=>{var e;(e=y.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=y.value)===null||e===void 0||e.blur()}},M=me("Checkbox",T,x),I=B(()=>{const{value:e}=b,{common:{cubicBezierEaseInOut:g},self:{borderRadius:d,color:z,colorChecked:$,colorDisabled:F,colorTableHeader:_,colorTableHeaderModal:L,colorTableHeaderPopover:O,checkMarkColor:W,checkMarkColorDisabled:q,border:Y,borderFocus:J,borderDisabled:Q,borderChecked:X,boxShadowFocus:Z,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:ne,colorDisabledChecked:re,borderDisabledChecked:ae,labelPadding:ce,labelLineHeight:le,labelFontWeight:ie,[N("fontSize",e)]:te,[N("size",e)]:de}}=p.value;return{"--n-label-line-height":le,"--n-label-font-weight":ie,"--n-size":de,"--n-bezier":g,"--n-border-radius":d,"--n-border":Y,"--n-border-checked":X,"--n-border-focus":J,"--n-border-disabled":Q,"--n-border-disabled-checked":ae,"--n-box-shadow-focus":Z,"--n-color":z,"--n-color-checked":$,"--n-color-table":_,"--n-color-table-modal":L,"--n-color-table-popover":O,"--n-color-disabled":F,"--n-color-disabled-checked":re,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":W,"--n-check-mark-color-disabled":q,"--n-check-mark-color-disabled-checked":ne,"--n-font-size":te,"--n-label-padding":ce}}),D=w?ge("checkbox",B(()=>b.value[0]),I,o):void 0;return Object.assign(u,t,{rtlEnabled:M,selfRef:y,mergedClsPrefix:x,mergedDisabled:R,renderedChecked:n,mergedTheme:p,labelId:xe(),handleClick:l,handleKeyUp:v,handleKeyDown:m,cssVars:w?void 0:I,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender})},render(){var o;const{$slots:y,renderedChecked:x,mergedDisabled:w,indeterminate:T,privateInsideTable:u,cssVars:R,labelId:b,label:c,mergedClsPrefix:a,focusable:A,handleKeyUp:f,handleKeyDown:n,handleClick:p}=this;(o=this.onRender)===null||o===void 0||o.call(this);const k=pe(y.default,l=>c||l?s("span",{class:`${a}-checkbox__label`,id:b},c||l):null);return s("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,x&&`${a}-checkbox--checked`,w&&`${a}-checkbox--disabled`,T&&`${a}-checkbox--indeterminate`,u&&`${a}-checkbox--inside-table`,k&&`${a}-checkbox--show-label`],tabindex:w||!A?void 0:0,role:"checkbox","aria-checked":T?"mixed":x,"aria-labelledby":b,style:R,onKeyup:f,onKeydown:n,onClick:p,onMousedown:()=>{ye("selectstart",window,l=>{l.preventDefault()},{once:!0})}},s("div",{class:`${a}-checkbox-box-wrapper`}," ",s("div",{class:`${a}-checkbox-box`},s(Ce,null,{default:()=>this.indeterminate?s("div",{key:"indeterminate",class:`${a}-checkbox-icon`},ze):s("div",{key:"check",class:`${a}-checkbox-icon`},Re)}),s("div",{class:`${a}-checkbox-box__border`}))),k)}});export{Ae as N,Me as _};
