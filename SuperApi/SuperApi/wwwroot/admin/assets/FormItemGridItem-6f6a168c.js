import{_ as n,g as a,b as i}from"./Grid-034146f3.js";import{_ as m,d as p,e as _}from"./rule-7c323978.js";import{d as f,r as l,h as o,az as r}from"./index-e9ed0e0e.js";const u=Object.assign(Object.assign({},a),p),P=f({__GRID_ITEM__:!0,name:"FormItemGridItem",alias:["FormItemGi"],props:u,setup(){const e=l(null);return{formItemInstRef:e,validate:(...t)=>{const{value:s}=e;if(s)return s.validate(...t)},restoreValidation:()=>{const{value:t}=e;t&&t.restoreValidation()}}},render(){return o(n,r(this.$.vnode.props||{},i),{default:()=>{const e=r(this.$props,_);return o(m,Object.assign({ref:"formItemInstRef"},e),this.$slots)}})}});export{P as _};
