import{R as x,j as n,A as f,B as l,t as d,Q as u,h as j,i as L,l as w,a2 as A}from"./index-CaIhHF-A.js";import{L as B}from"./PaginationList-BkhLZM3E.js";import{D}from"./DrawerItem-DmZdp4um.js";import{L as R}from"./LinearProgress-Jpiw1qIK.js";import{B as k}from"./ButtonGroup-CSFxwt5v.js";import"./SearchBar-BV3SE2Xo.js";import"./useSlot-B2ypxoMr.js";import"./useTheme-3LnXaT5y.js";import"./InputBase-C2S44BkD.js";import"./useFormControl-D2no1hWV.js";import"./ownerWindow-DIR61fab.js";import"./IconButton-MJ3-UbfV.js";import"./CircularProgress-fLPsJ67Q.js";import"./Avatar-uHaAvRsy.js";const E=({room:t,setInvites:c,authUser:r,onAccepted:e})=>{var p;const[a,s]=x.useState(!1),i=()=>{a||U(t,r.username,c,s)},h=()=>{a||S(t,c,e,s)};return n.jsxs(D,{fullWidth:!0,text:t==null?void 0:t.name,to:`/dashboard/rooms/${t.id}/chat`,secondaryText:`@${(p=t==null?void 0:t.owner)==null?void 0:p.username}`,src:`${f}api/rooms/${t==null?void 0:t.id}/image`,children:[a&&n.jsx(R,{sx:{width:.4}}),n.jsx(l,{children:n.jsxs(k,{size:"small",variant:"text",children:[n.jsx(d,{color:"error",onClick:i,children:"delete"}),n.jsx(d,{onClick:h,children:"accept"})]})})]})},S=async(t,c,r,e)=>{e(!0);const a=await u("api/rooms/"+(t==null?void 0:t.id)+"/invitations/accept","POST");e(!1),a.ok&&(c(s=>s.filter(i=>(i==null?void 0:i.id)!==(t==null?void 0:t.id))),r&&r(t))},U=async(t,c,r,e)=>{e(!0);const a=await u("api/rooms/"+(t==null?void 0:t.id)+"/users/"+c,"DELETE");e(!1),a.ok&&r(s=>s.filter(i=>(i==null?void 0:i.id)!==(t==null?void 0:t.id)))},_=()=>{const t=j(L),c=w(),r=e=>{c(A(e))};return n.jsx(l,{children:n.jsx(B,{url:"api/user/invitations",generator:([e,a])=>e.map((s,i)=>n.jsx(E,{authUser:t,room:s,setInvites:a,onAccepted:r},s==null?void 0:s.id))})})};export{_ as default};