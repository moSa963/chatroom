import{g as Y,a as $,s as C,Y as A,X as D,r as G,j as w,d as H,c as J,e as K}from"./index-Y91MOtxq.js";import{u as M}from"./useFormControl-BT_-7oMV.js";import{u as Q}from"./useControlled-CKAdOX-G.js";function T(s){return Y("PrivateSwitchBase",s)}$("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const V=s=>{const{classes:t,checked:r,disabled:c,edge:a}=s,d={root:["root",r&&"checked",c&&"disabled",a&&`edge${J(a)}`],input:["input"]};return K(d,T,t)},W=C(A)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:s,ownerState:t})=>s==="start"&&t.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:s,ownerState:t})=>s==="end"&&t.size!=="small",style:{marginRight:-12}}]}),Z=C("input",{shouldForwardProp:D})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),te=G.forwardRef(function(t,r){const{autoFocus:c,checked:a,checkedIcon:d,className:y,defaultChecked:u,disabled:S,disableFocusRipple:p=!1,edge:x=!1,icon:F,id:R,inputProps:P,inputRef:v,name:z,onBlur:h,onChange:f,onFocus:m,readOnly:I,required:j=!1,tabIndex:E,type:i,value:g,...U}=t,[B,L]=Q({controlled:a,default:!!u,name:"SwitchBase",state:"checked"}),o=M(),N=e=>{m&&m(e),o&&o.onFocus&&o.onFocus(e)},q=e=>{h&&h(e),o&&o.onBlur&&o.onBlur(e)},O=e=>{if(e.nativeEvent.defaultPrevented)return;const k=e.target.checked;L(k),f&&f(e,k)};let n=S;o&&typeof n>"u"&&(n=o.disabled);const X=i==="checkbox"||i==="radio",l={...t,checked:B,disabled:n,disableFocusRipple:p,edge:x},b=V(l);return w.jsxs(W,{component:"span",className:H(b.root,y),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:N,onBlur:q,ownerState:l,ref:r,...U,children:[w.jsx(Z,{autoFocus:c,checked:a,defaultChecked:u,className:b.input,disabled:n,id:X?R:void 0,name:z,onChange:O,readOnly:I,ref:v,required:j,ownerState:l,tabIndex:E,type:i,...i==="checkbox"&&g===void 0?{}:{value:g},...P}),B?d:F]})});export{te as S};