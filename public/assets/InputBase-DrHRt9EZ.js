import{r as a,x as he,a6 as J,j as S,a as Fe,g as Ee,s as be,m as ge,u as He,d as ue,c as Q,e as We,aA as Me,ar as Te}from"./index-Y91MOtxq.js";import{u as Le,f as Oe,F as Pe}from"./useFormControl-BT_-7oMV.js";import{o as de,d as Ne}from"./ownerWindow-DIR61fab.js";function P(e){return parseInt(e,10)||0}const $e={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function De(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflowing}const Ve=a.forwardRef(function(t,n){const{onChange:u,maxRows:p,minRows:d=1,style:R,value:z,...W}=t,{current:w}=a.useRef(z!=null),m=a.useRef(null),A=he(n,m),h=a.useRef(null),v=a.useRef(null),g=a.useCallback(()=>{const l=m.current,o=de(l).getComputedStyle(l);if(o.width==="0px")return{outerHeightStyle:0,overflowing:!1};const c=v.current;c.style.width=o.width,c.value=l.value||t.placeholder||"x",c.value.slice(-1)===`
`&&(c.value+=" ");const k=o.boxSizing,x=P(o.paddingBottom)+P(o.paddingTop),$=P(o.borderBottomWidth)+P(o.borderTopWidth),B=c.scrollHeight;c.value="x";const F=c.scrollHeight;let s=B;d&&(s=Math.max(Number(d)*F,s)),p&&(s=Math.min(Number(p)*F,s)),s=Math.max(s,F);const M=s+(k==="border-box"?x+$:0),T=Math.abs(s-B)<=1;return{outerHeightStyle:M,overflowing:T}},[p,d,t.placeholder]),C=a.useCallback(()=>{const l=g();if(De(l))return;const y=l.outerHeightStyle,o=m.current;h.current!==y&&(h.current=y,o.style.height=`${y}px`),o.style.overflow=l.overflowing?"hidden":""},[g]);J(()=>{const l=()=>{C()};let y;const o=Ne(l),c=m.current,k=de(c);k.addEventListener("resize",o);let x;return typeof ResizeObserver<"u"&&(x=new ResizeObserver(l),x.observe(c)),()=>{o.clear(),cancelAnimationFrame(y),k.removeEventListener("resize",o),x&&x.disconnect()}},[g,C]),J(()=>{C()});const N=l=>{w||C(),u&&u(l)};return S.jsxs(a.Fragment,{children:[S.jsx("textarea",{value:z,onChange:N,ref:A,rows:d,style:R,...W}),S.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:v,tabIndex:-1,style:{...$e.shadow,...R,paddingTop:0,paddingBottom:0}})]})});function ce(e){return typeof e=="string"}function pe(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function je(e,t=!1){return e&&(pe(e.value)&&e.value!==""||t&&pe(e.defaultValue)&&e.defaultValue!=="")}function et(e){return e.startAdornment}function Ue(e){return Ee("MuiInputBase",e)}const X=Fe("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);var fe;const Ge=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,n.size==="small"&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${Q(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},qe=(e,t)=>{const{ownerState:n}=e;return[t.input,n.size==="small"&&t.inputSizeSmall,n.multiline&&t.inputMultiline,n.type==="search"&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},Ke=e=>{const{classes:t,color:n,disabled:u,error:p,endAdornment:d,focused:R,formControl:z,fullWidth:W,hiddenLabel:w,multiline:m,readOnly:A,size:h,startAdornment:v,type:g}=e,C={root:["root",`color${Q(n)}`,u&&"disabled",p&&"error",W&&"fullWidth",R&&"focused",z&&"formControl",h&&h!=="medium"&&`size${Q(h)}`,m&&"multiline",v&&"adornedStart",d&&"adornedEnd",w&&"hiddenLabel",A&&"readOnly"],input:["input",u&&"disabled",g==="search"&&"inputTypeSearch",m&&"inputMultiline",h==="small"&&"inputSizeSmall",w&&"inputHiddenLabel",v&&"inputAdornedStart",d&&"inputAdornedEnd",A&&"readOnly"]};return We(C,Ue,t)},Ze=be("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Ge})(ge(({theme:e})=>({...e.typography.body1,color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${X.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"},variants:[{props:({ownerState:t})=>t.multiline,style:{padding:"4px 0 5px"}},{props:({ownerState:t,size:n})=>t.multiline&&n==="small",style:{paddingTop:1}},{props:({ownerState:t})=>t.fullWidth,style:{width:"100%"}}]}))),_e=be("input",{name:"MuiInputBase",slot:"Input",overridesResolver:qe})(ge(({theme:e})=>{const t=e.palette.mode==="light",n={color:"currentColor",...e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5},transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},u={opacity:"0 !important"},p=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5};return{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%","&::-webkit-input-placeholder":n,"&::-moz-placeholder":n,"&::-ms-input-placeholder":n,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${X.formControl} &`]:{"&::-webkit-input-placeholder":u,"&::-moz-placeholder":u,"&::-ms-input-placeholder":u,"&:focus::-webkit-input-placeholder":p,"&:focus::-moz-placeholder":p,"&:focus::-ms-input-placeholder":p},[`&.${X.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},variants:[{props:({ownerState:d})=>!d.disableInjectingGlobalStyles,style:{animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}}},{props:{size:"small"},style:{paddingTop:1}},{props:({ownerState:d})=>d.multiline,style:{height:"auto",resize:"none",padding:0,paddingTop:0}},{props:{type:"search"},style:{MozAppearance:"textfield"}}]}})),me=Me({"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}),tt=a.forwardRef(function(t,n){const u=He({props:t,name:"MuiInputBase"}),{"aria-describedby":p,autoComplete:d,autoFocus:R,className:z,color:W,components:w={},componentsProps:m={},defaultValue:A,disabled:h,disableInjectingGlobalStyles:v,endAdornment:g,error:C,fullWidth:N=!1,id:l,inputComponent:y="input",inputProps:o={},inputRef:c,margin:k,maxRows:x,minRows:$,multiline:B=!1,name:F,onBlur:s,onChange:M,onClick:T,onFocus:Y,onKeyDown:ye,onKeyUp:xe,placeholder:Se,readOnly:D,renderSuffix:ee,rows:L,size:Je,slotProps:te={},slots:ne={},startAdornment:E,type:oe="text",value:we,...ve}=u,O=o.value!=null?o.value:we,{current:V}=a.useRef(O!=null),I=a.useRef(),Ce=a.useCallback(r=>{},[]),Re=he(I,c,o.ref,Ce),[j,U]=a.useState(!1),i=Le(),f=Oe({props:u,muiFormControl:i,states:["color","disabled","error","hiddenLabel","size","required","filled"]});f.focused=i?i.focused:j,a.useEffect(()=>{!i&&h&&j&&(U(!1),s&&s())},[i,h,j,s]);const G=i&&i.onFilled,q=i&&i.onEmpty,H=a.useCallback(r=>{je(r)?G&&G():q&&q()},[G,q]);J(()=>{V&&H({value:O})},[O,H,V]);const ze=r=>{Y&&Y(r),o.onFocus&&o.onFocus(r),i&&i.onFocus?i.onFocus(r):U(!0)},Ae=r=>{s&&s(r),o.onBlur&&o.onBlur(r),i&&i.onBlur?i.onBlur(r):U(!1)},Ie=(r,...le)=>{if(!V){const se=r.target||I.current;if(se==null)throw new Error(Te(1));H({value:se.value})}o.onChange&&o.onChange(r,...le),M&&M(r,...le)};a.useEffect(()=>{H(I.current)},[]);const ke=r=>{I.current&&r.currentTarget===r.target&&I.current.focus(),T&&T(r)};let K=y,b=o;B&&K==="input"&&(L?b={type:void 0,minRows:L,maxRows:L,...b}:b={type:void 0,maxRows:x,minRows:$,...b},K=Ve);const Be=r=>{H(r.animationName==="mui-auto-fill-cancel"?I.current:{value:"x"})};a.useEffect(()=>{i&&i.setAdornedStart(!!E)},[i,E]);const Z={...u,color:f.color||"primary",disabled:f.disabled,endAdornment:g,error:f.error,focused:f.focused,formControl:i,fullWidth:N,hiddenLabel:f.hiddenLabel,multiline:B,size:f.size,startAdornment:E,type:oe},re=Ke(Z),ie=ne.root||w.Root||Ze,_=te.root||m.root||{},ae=ne.input||w.Input||_e;return b={...b,...te.input??m.input},S.jsxs(a.Fragment,{children:[!v&&typeof me=="function"&&(fe||(fe=S.jsx(me,{}))),S.jsxs(ie,{..._,ref:n,onClick:ke,...ve,...!ce(ie)&&{ownerState:{...Z,..._.ownerState}},className:ue(re.root,_.className,z,D&&"MuiInputBase-readOnly"),children:[E,S.jsx(Pe.Provider,{value:null,children:S.jsx(ae,{"aria-invalid":f.error,"aria-describedby":p,autoComplete:d,autoFocus:R,defaultValue:A,disabled:f.disabled,id:l,onAnimationStart:Be,name:F,placeholder:Se,readOnly:D,required:f.required,rows:L,value:O,onKeyDown:ye,onKeyUp:xe,type:oe,...b,...!ce(ae)&&{as:K,ownerState:{...Z,...b.ownerState}},ref:Re,className:ue(re.input,b.className,D&&"MuiInputBase-readOnly"),onBlur:Ae,onChange:Ie,onFocus:ze})}),g,ee?ee({...f,startAdornment:E}):null]})]})});export{tt as I,et as a,je as b,X as c,Ze as d,_e as e,qe as f,ce as i,Ge as r};