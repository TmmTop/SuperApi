import{ah as G,ai as R,d as j,aj as E,ak as C,al as _,x as I,am as M,an as P,ao as S,ap as T,aq as A,B as b,ar as L}from"./index-BZUOWCTQ.js";const O=()=>G,W={name:"Space",self:O};let h;const D=()=>{if(!R)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=e.scrollHeight===1;return document.body.removeChild(e),h=a}return h},F=Object.assign(Object.assign({},C.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),U=j({name:"Space",props:F,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:u}=E(e),d=C("Space","-space",void 0,W,e,a),t=_("Space",u,a);return{useGap:D(),rtlEnabled:t,mergedClsPrefix:a,margin:I(()=>{const{size:n}=e;if(Array.isArray(n))return{horizontal:n[0],vertical:n[1]};if(typeof n=="number")return{horizontal:n,vertical:n};const{self:{[M("gap",n)]:f}}=d.value,{row:r,col:g}=P(f);return{horizontal:S(g),vertical:S(r)}})}},render(){const{vertical:e,reverse:a,align:u,inline:d,justify:t,itemClass:n,itemStyle:f,margin:r,wrap:g,mergedClsPrefix:v,rtlEnabled:x,useGap:o,wrapItem:B,internalUseGap:z}=this,p=T(A(this),!1);if(!p.length)return null;const w=`${r.horizontal}px`,c=`${r.horizontal/2}px`,$=`${r.vertical}px`,i=`${r.vertical/2}px`,l=p.length-1,m=t.startsWith("space-");return b("div",{role:"none",class:[`${v}-space`,x&&`${v}-space--rtl`],style:{display:d?"inline-flex":"flex",flexDirection:e&&!a?"column":e&&a?"column-reverse":!e&&a?"row-reverse":"row",justifyContent:["start","end"].includes(t)?"flex-"+t:t,flexWrap:!g||e?"nowrap":"wrap",marginTop:o||e?"":`-${i}`,marginBottom:o||e?"":`-${i}`,alignItems:u,gap:o?`${r.vertical}px ${r.horizontal}px`:""}},!B&&(o||z)?p:p.map((y,s)=>y.type===L?y:b("div",{role:"none",class:n,style:[f,{maxWidth:"100%"},o?"":e?{marginBottom:s!==l?$:""}:x?{marginLeft:m?t==="space-between"&&s===l?"":c:s!==l?w:"",marginRight:m?t==="space-between"&&s===0?"":c:"",paddingTop:i,paddingBottom:i}:{marginRight:m?t==="space-between"&&s===l?"":c:s!==l?w:"",marginLeft:m?t==="space-between"&&s===0?"":c:"",paddingTop:i,paddingBottom:i}]},y)))}});export{U as _};