import{r as _,w as de,bt as Oe,d0 as Ie,d1 as Ke,B as $e,a2 as X,d2 as Te,a1 as Z,d as K,h as d,o as ae,q as M,d3 as je,c as b,e as N,aB as le,g as P,d4 as ze,d5 as De,cc as Be,K as Y,a as L,d6 as Ae,x as be,a7 as ge,k as ce,p as U,ai as we,S as G,ay as J,J as Le,aw as Q,ax as Me,aj as Fe,ah as Ee,cX as He,G as Ue,i as A,t as z,d7 as Ve,ad as ie,v as H,az as qe}from"./index-e9ed0e0e.js";import{c as ye,p as ue,V as Ge,a as We,b as Xe,r as Ze}from"./Popover-0534a616.js";import{f as Je}from"./format-length-c9d165c6.js";import{h as fe,c as Qe}from"./Select-227e2db3.js";import{u as Ye}from"./use-merged-state-496c4ad7.js";function eo(e){return o=>{o?e.value=o.$el:e.value=null}}function oo(e,o,i){if(!o)return e;const t=_(e.value);let r=null;return de(e,n=>{r!==null&&window.clearTimeout(r),n===!0?i&&!i.value?t.value=!0:r=window.setTimeout(()=>{t.value=!0},o):t.value=!1}),t}function no(e={},o){const i=Oe({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:t,keyup:r}=e,n=l=>{switch(l.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}t!==void 0&&Object.keys(t).forEach(w=>{if(w!==l.key)return;const m=t[w];if(typeof m=="function")m(l);else{const{stop:k=!1,prevent:R=!1}=m;k&&l.stopPropagation(),R&&l.preventDefault(),m.handler(l)}})},a=l=>{switch(l.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}r!==void 0&&Object.keys(r).forEach(w=>{if(w!==l.key)return;const m=r[w];if(typeof m=="function")m(l);else{const{stop:k=!1,prevent:R=!1}=m;k&&l.stopPropagation(),R&&l.preventDefault(),m.handler(l)}})},u=()=>{(o===void 0||o.value)&&(Z("keydown",document,n),Z("keyup",document,a)),o!==void 0&&de(o,l=>{l?(Z("keydown",document,n),Z("keyup",document,a)):(X("keydown",document,n),X("keyup",document,a))})};return Ie()?(Ke(u),$e(()=>{(o===void 0||o.value)&&(X("keydown",document,n),X("keyup",document,a))})):u(),Te(i)}const to=K({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),ro=Object.assign(Object.assign({},ue),M.props),io=K({name:"Tooltip",props:ro,__popover__:!0,setup(e){const{mergedClsPrefixRef:o}=ae(e),i=M("Tooltip","-tooltip",void 0,je,e,o),t=_(null);return Object.assign(Object.assign({},{syncPosition(){t.value.syncPosition()},setShow(n){t.value.setShow(n)}}),{popoverRef:t,mergedTheme:i,popoverThemeOverrides:b(()=>i.value.self)})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return d(ye,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),lo=N("ellipsis",{overflow:"hidden"},[le("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),P("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),P("cursor-pointer",`
 cursor: pointer;
 `)]);function he(e){return`${e}-ellipsis--line-clamp`}function ve(e,o){return`${e}-ellipsis--cursor-${o}`}const so=Object.assign(Object.assign({},M.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),Co=K({name:"Ellipsis",inheritAttrs:!1,props:so,setup(e,{slots:o,attrs:i}){const t=ze(),r=M("Ellipsis","-ellipsis",lo,De,e,t),n=_(null),a=_(null),u=_(null),l=_(!1),w=b(()=>{const{lineClamp:s}=e,{value:h}=l;return s!==void 0?{textOverflow:"","-webkit-line-clamp":h?"":s}:{textOverflow:h?"":"ellipsis","-webkit-line-clamp":""}});function m(){let s=!1;const{value:h}=l;if(h)return!0;const{value:y}=n;if(y){const{lineClamp:T}=e;if(O(y),T!==void 0)s=y.scrollHeight<=y.offsetHeight;else{const{value:D}=a;D&&(s=D.getBoundingClientRect().width<=y.getBoundingClientRect().width)}$(y,s)}return s}const k=b(()=>e.expandTrigger==="click"?()=>{var s;const{value:h}=l;h&&((s=u.value)===null||s===void 0||s.setShow(!1)),l.value=!h}:void 0);Be(()=>{var s;e.tooltip&&((s=u.value)===null||s===void 0||s.setShow(!1))});const R=()=>d("span",Object.assign({},Y(i,{class:[`${t.value}-ellipsis`,e.lineClamp!==void 0?he(t.value):void 0,e.expandTrigger==="click"?ve(t.value,"pointer"):void 0],style:w.value}),{ref:"triggerRef",onClick:k.value,onMouseenter:e.expandTrigger==="click"?m:void 0}),e.lineClamp?o:d("span",{ref:"triggerInnerRef"},o));function O(s){if(!s)return;const h=w.value,y=he(t.value);e.lineClamp!==void 0?I(s,y,"add"):I(s,y,"remove");for(const T in h)s.style[T]!==h[T]&&(s.style[T]=h[T])}function $(s,h){const y=ve(t.value,"pointer");e.expandTrigger==="click"&&!h?I(s,y,"add"):I(s,y,"remove")}function I(s,h,y){y==="add"?s.classList.contains(h)||s.classList.add(h):s.classList.contains(h)&&s.classList.remove(h)}return{mergedTheme:r,triggerRef:n,triggerInnerRef:a,tooltipRef:u,handleClick:k,renderTrigger:R,getTooltipDisabled:m}},render(){var e;const{tooltip:o,renderTrigger:i,$slots:t}=this;if(o){const{mergedTheme:r}=this;return d(io,Object.assign({ref:"tooltipRef",placement:"top"},o,{getDisabled:this.getTooltipDisabled,theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip}),{trigger:i,default:(e=t.tooltip)!==null&&e!==void 0?e:t.default})}else return i()}}),xe=K({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),ao=N("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[P("color-transition",{transition:"color .3s var(--n-bezier)"}),P("depth",{color:"var(--n-color)"},[L("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),L("svg",{height:"1em",width:"1em"})]),co=Object.assign(Object.assign({},M.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),uo=K({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:co,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=ae(e),t=M("Icon","-icon",ao,Ae,e,o),r=b(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:u},self:l}=t.value;if(a!==void 0){const{color:w,[`opacity${a}Depth`]:m}=l;return{"--n-bezier":u,"--n-color":w,"--n-opacity":m}}return{"--n-bezier":u,"--n-color":"","--n-opacity":""}}),n=i?be("icon",b(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:o,mergedStyle:b(()=>{const{size:a,color:u}=e;return{fontSize:Je(a),color:u}}),cssVars:i?void 0:r,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$parent:o,depth:i,mergedClsPrefix:t,component:r,onRender:n,themeClass:a}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&ge("icon","don't wrap `n-icon` inside `n-icon`"),n==null||n(),d("i",Y(this.$attrs,{role:"img",class:[`${t}-icon`,a,{[`${t}-icon--depth`]:i,[`${t}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?d(r):this.$slots)}}),pe=ce("n-dropdown-menu"),ee=ce("n-dropdown"),me=ce("n-dropdown-option");function se(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function po(e){return e.type==="group"}function Se(e){return e.type==="divider"}function fo(e){return e.type==="render"}const ke=K({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=U(ee),{hoverKeyRef:i,keyboardKeyRef:t,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:n,activeKeyPathRef:a,animatedRef:u,mergedShowRef:l,renderLabelRef:w,renderIconRef:m,labelFieldRef:k,childrenFieldRef:R,renderOptionRef:O,nodePropsRef:$,menuPropsRef:I}=o,s=U(me,null),h=U(pe),y=U(we),T=b(()=>e.tmNode.rawNode),D=b(()=>{const{value:p}=R;return se(e.tmNode.rawNode,p)}),oe=b(()=>{const{disabled:p}=e.tmNode;return p}),ne=b(()=>{if(!D.value)return!1;const{key:p,disabled:S}=e.tmNode;if(S)return!1;const{value:j}=i,{value:F}=t,{value:re}=r,{value:E}=n;return j!==null?E.includes(p):F!==null?E.includes(p)&&E[E.length-1]!==p:re!==null?E.includes(p):!1}),te=b(()=>t.value===null&&!u.value),W=oo(ne,300,te),V=b(()=>!!(s!=null&&s.enteringSubmenuRef.value)),q=_(!1);G(me,{enteringSubmenuRef:q});function B(){q.value=!0}function c(){q.value=!1}function x(){const{parentKey:p,tmNode:S}=e;S.disabled||l.value&&(r.value=p,t.value=null,i.value=S.key)}function v(){const{tmNode:p}=e;p.disabled||l.value&&i.value!==p.key&&x()}function f(p){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:S}=p;S&&!fe({target:S},"dropdownOption")&&!fe({target:S},"scrollbarRail")&&(i.value=null)}function C(){const{value:p}=D,{tmNode:S}=e;l.value&&!p&&!S.disabled&&(o.doSelect(S.key,S.rawNode),o.doUpdateShow(!1))}return{labelField:k,renderLabel:w,renderIcon:m,siblingHasIcon:h.showIconRef,siblingHasSubmenu:h.hasSubmenuRef,menuProps:I,popoverBody:y,animated:u,mergedShowSubmenu:b(()=>W.value&&!V.value),rawNode:T,hasSubmenu:D,pending:J(()=>{const{value:p}=n,{key:S}=e.tmNode;return p.includes(S)}),childActive:J(()=>{const{value:p}=a,{key:S}=e.tmNode,j=p.findIndex(F=>S===F);return j===-1?!1:j<p.length-1}),active:J(()=>{const{value:p}=a,{key:S}=e.tmNode,j=p.findIndex(F=>S===F);return j===-1?!1:j===p.length-1}),mergedDisabled:oe,renderOption:O,nodeProps:$,handleClick:C,handleMouseMove:v,handleMouseEnter:x,handleMouseLeave:f,handleSubmenuBeforeEnter:B,handleSubmenuAfterEnter:c}},render(){var e,o;const{animated:i,rawNode:t,mergedShowSubmenu:r,clsPrefix:n,siblingHasIcon:a,siblingHasSubmenu:u,renderLabel:l,renderIcon:w,renderOption:m,nodeProps:k,props:R,scrollable:O}=this;let $=null;if(r){const y=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,t,t.children);$=d(Re,Object.assign({},y,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const I={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},s=k==null?void 0:k(t),h=d("div",Object.assign({class:[`${n}-dropdown-option`,s==null?void 0:s.class],"data-dropdown-option":!0},s),d("div",Y(I,R),[d("div",{class:[`${n}-dropdown-option-body__prefix`,a&&`${n}-dropdown-option-body__prefix--show-icon`]},[w?w(t):Q(t.icon)]),d("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},l?l(t):Q((o=t[this.labelField])!==null&&o!==void 0?o:t.title)),d("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,u&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(uo,null,{default:()=>d(to,null)}):null)]),this.hasSubmenu?d(Ge,null,{default:()=>[d(We,null,{default:()=>d("div",{class:`${n}-dropdown-offset-container`},d(Xe,{show:this.mergedShowSubmenu,placement:this.placement,to:O&&this.popoverBody||void 0,teleportDisabled:!O},{default:()=>d("div",{class:`${n}-dropdown-menu-wrapper`},i?d(Le,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>$}):$)}))})]}):null);return m?m({node:h,option:t}):h}}),ho=K({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=U(pe),{renderLabelRef:i,labelFieldRef:t,nodePropsRef:r,renderOptionRef:n}=U(ee);return{labelField:t,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:r,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:t,nodeProps:r,renderLabel:n,renderOption:a}=this,{rawNode:u}=this.tmNode,l=d("div",Object.assign({class:`${o}-dropdown-option`},r==null?void 0:r(u)),d("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,t&&`${o}-dropdown-option-body__prefix--show-icon`]},Q(u.icon)),d("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(u):Q((e=u.title)!==null&&e!==void 0?e:u[this.labelField])),d("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:l,option:u}):l}}),vo=K({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:t}=e;return d(Me,null,d(ho,{clsPrefix:i,tmNode:e,key:e.key}),t==null?void 0:t.map(r=>{const{rawNode:n}=r;return n.show===!1?null:Se(n)?d(xe,{clsPrefix:i,key:r.key}):r.isGroup?(ge("dropdown","`group` node is not allowed to be put in `group` node."),null):d(ke,{clsPrefix:i,tmNode:r,parentKey:o,key:r.key})}))}}),mo=K({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return d("div",o,[e==null?void 0:e()])}}),Re=K({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=U(ee);G(pe,{showIconRef:b(()=>{const r=o.value;return e.tmNodes.some(n=>{var a;if(n.isGroup)return(a=n.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>r?r(l):l.icon);const{rawNode:u}=n;return r?r(u):u.icon})}),hasSubmenuRef:b(()=>{const{value:r}=i;return e.tmNodes.some(n=>{var a;if(n.isGroup)return(a=n.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>se(l,r));const{rawNode:u}=n;return se(u,r)})})});const t=_(null);return G(Fe,null),G(Ee,null),G(we,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,t=this.tmNodes.map(r=>{const{rawNode:n}=r;return n.show===!1?null:fo(n)?d(mo,{tmNode:r,key:r.key}):Se(n)?d(xe,{clsPrefix:o,key:r.key}):po(n)?d(vo,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):d(ke,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:n.props,scrollable:i})});return d("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?d(He,{contentClass:`${o}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?Ze({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),bo=N("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ue(),N("dropdown-option",`
 position: relative;
 `,[L("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[L("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),N("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[L("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),le("disabled",[P("pending",`
 color: var(--n-option-text-color-hover);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),L("&::before","background-color: var(--n-option-color-hover);")]),P("active",`
 color: var(--n-option-text-color-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),L("&::before","background-color: var(--n-option-color-active);")]),P("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),P("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),P("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[A("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[P("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),A("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[P("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),A("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),A("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[P("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),N("dropdown-menu","pointer-events: all;")]),N("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),N("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),N("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),L(">",[N("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),le("scrollable",`
 padding: var(--n-padding);
 `),P("scrollable",[A("content",`
 padding: var(--n-padding);
 `)])]),go={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},wo=Object.keys(ue),yo=Object.assign(Object.assign(Object.assign({},ue),go),M.props),No=K({name:"Dropdown",inheritAttrs:!1,props:yo,setup(e){const o=_(!1),i=Ye(z(e,"show"),o),t=b(()=>{const{keyField:c,childrenField:x}=e;return Qe(e.options,{getKey(v){return v[c]},getDisabled(v){return v.disabled===!0},getIgnored(v){return v.type==="divider"||v.type==="render"},getChildren(v){return v[x]}})}),r=b(()=>t.value.treeNodes),n=_(null),a=_(null),u=_(null),l=b(()=>{var c,x,v;return(v=(x=(c=n.value)!==null&&c!==void 0?c:a.value)!==null&&x!==void 0?x:u.value)!==null&&v!==void 0?v:null}),w=b(()=>t.value.getPath(l.value).keyPath),m=b(()=>t.value.getPath(e.value).keyPath),k=J(()=>e.keyboard&&i.value);no({keydown:{ArrowUp:{prevent:!0,handler:oe},ArrowRight:{prevent:!0,handler:D},ArrowDown:{prevent:!0,handler:ne},ArrowLeft:{prevent:!0,handler:T},Enter:{prevent:!0,handler:te},Escape:y}},k);const{mergedClsPrefixRef:R,inlineThemeDisabled:O}=ae(e),$=M("Dropdown","-dropdown",bo,Ve,e,R);G(ee,{labelFieldRef:z(e,"labelField"),childrenFieldRef:z(e,"childrenField"),renderLabelRef:z(e,"renderLabel"),renderIconRef:z(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:a,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:w,activeKeyPathRef:m,animatedRef:z(e,"animated"),mergedShowRef:i,nodePropsRef:z(e,"nodeProps"),renderOptionRef:z(e,"renderOption"),menuPropsRef:z(e,"menuProps"),doSelect:I,doUpdateShow:s}),de(i,c=>{!e.animated&&!c&&h()});function I(c,x){const{onSelect:v}=e;v&&ie(v,c,x)}function s(c){const{"onUpdate:show":x,onUpdateShow:v}=e;x&&ie(x,c),v&&ie(v,c),o.value=c}function h(){n.value=null,a.value=null,u.value=null}function y(){s(!1)}function T(){V("left")}function D(){V("right")}function oe(){V("up")}function ne(){V("down")}function te(){const c=W();c!=null&&c.isLeaf&&i.value&&(I(c.key,c.rawNode),s(!1))}function W(){var c;const{value:x}=t,{value:v}=l;return!x||v===null?null:(c=x.getNode(v))!==null&&c!==void 0?c:null}function V(c){const{value:x}=l,{value:{getFirstAvailableNode:v}}=t;let f=null;if(x===null){const C=v();C!==null&&(f=C.key)}else{const C=W();if(C){let p;switch(c){case"down":p=C.getNext();break;case"up":p=C.getPrev();break;case"right":p=C.getChild();break;case"left":p=C.getParent();break}p&&(f=p.key)}}f!==null&&(n.value=null,a.value=f)}const q=b(()=>{const{size:c,inverted:x}=e,{common:{cubicBezierEaseInOut:v},self:f}=$.value,{padding:C,dividerColor:p,borderRadius:S,optionOpacityDisabled:j,[H("optionIconSuffixWidth",c)]:F,[H("optionSuffixWidth",c)]:re,[H("optionIconPrefixWidth",c)]:E,[H("optionPrefixWidth",c)]:Pe,[H("fontSize",c)]:Ce,[H("optionHeight",c)]:Ne,[H("optionIconSize",c)]:_e}=f,g={"--n-bezier":v,"--n-font-size":Ce,"--n-padding":C,"--n-border-radius":S,"--n-option-height":Ne,"--n-option-prefix-width":Pe,"--n-option-icon-prefix-width":E,"--n-option-suffix-width":re,"--n-option-icon-suffix-width":F,"--n-option-icon-size":_e,"--n-divider-color":p,"--n-option-opacity-disabled":j};return x?(g["--n-color"]=f.colorInverted,g["--n-option-color-hover"]=f.optionColorHoverInverted,g["--n-option-color-active"]=f.optionColorActiveInverted,g["--n-option-text-color"]=f.optionTextColorInverted,g["--n-option-text-color-hover"]=f.optionTextColorHoverInverted,g["--n-option-text-color-active"]=f.optionTextColorActiveInverted,g["--n-option-text-color-child-active"]=f.optionTextColorChildActiveInverted,g["--n-prefix-color"]=f.prefixColorInverted,g["--n-suffix-color"]=f.suffixColorInverted,g["--n-group-header-text-color"]=f.groupHeaderTextColorInverted):(g["--n-color"]=f.color,g["--n-option-color-hover"]=f.optionColorHover,g["--n-option-color-active"]=f.optionColorActive,g["--n-option-text-color"]=f.optionTextColor,g["--n-option-text-color-hover"]=f.optionTextColorHover,g["--n-option-text-color-active"]=f.optionTextColorActive,g["--n-option-text-color-child-active"]=f.optionTextColorChildActive,g["--n-prefix-color"]=f.prefixColor,g["--n-suffix-color"]=f.suffixColor,g["--n-group-header-text-color"]=f.groupHeaderTextColor),g}),B=O?be("dropdown",b(()=>`${e.size[0]}${e.inverted?"i":""}`),q,e):void 0;return{mergedClsPrefix:R,mergedTheme:$,tmNodes:r,mergedShow:i,handleAfterLeave:()=>{e.animated&&h()},doUpdateShow:s,cssVars:O?void 0:q,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender}},render(){const e=(t,r,n,a,u)=>{var l;const{mergedClsPrefix:w,menuProps:m}=this;(l=this.onRender)===null||l===void 0||l.call(this);const k=(m==null?void 0:m(void 0,this.tmNodes.map(O=>O.rawNode)))||{},R={ref:eo(r),class:[t,`${w}-dropdown`,this.themeClass],clsPrefix:w,tmNodes:this.tmNodes,style:[n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:u};return d(Re,Y(this.$attrs,R,k))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(ye,Object.assign({},qe(this.$props,wo),i),{trigger:()=>{var t,r;return(r=(t=this.$slots).default)===null||r===void 0?void 0:r.call(t)}})}});export{to as C,No as _,io as a,Co as b,eo as c,he as d,so as e,ve as f,lo as s};
