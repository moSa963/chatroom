import{f as n,j as s,A as r,T as t,L as e}from"./index-CaIhHF-A.js";import{P as x}from"./useSlot-B2ypxoMr.js";import{A as d}from"./Avatar-uHaAvRsy.js";import{S as h}from"./Stack-CM_YU3QJ.js";import{B as i}from"./Box-9rK6eZ5T.js";import{I as a}from"./IconButton-MJ3-UbfV.js";import{D as p}from"./Divider-CHuyDDgv.js";const j=n(s.jsx("path",{d:"M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23c-.25-.44-.79-.62-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41c-.02.22-.03.44-.03.67s.01.45.03.68l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68m-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5"}),"SettingsRounded"),f=n(s.jsx("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"}),"Chat"),A=({room:c,noSettings:l})=>s.jsxs(x,{sx:{p:2,borderRadius:2,textAlign:"center",display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"center",sm:"start"}},children:[s.jsx(d,{sx:{width:80,height:80,mr:2},src:`${r}api/rooms/${c==null?void 0:c.id}/image`}),s.jsxs(h,{sx:{width:"100%"},children:[s.jsxs(i,{sx:{display:"flex",flexDirection:{xs:"column",sm:"row"}},children:[s.jsx(t,{variant:"h4",sx:{wordBreak:"break-word",flex:1,fontSize:{xs:15,sm:35}},children:c==null?void 0:c.name}),s.jsxs(i,{children:[!l&&s.jsx(e,{to:`/dashboard/rooms/${c==null?void 0:c.id}/settings`,children:s.jsx(a,{children:s.jsx(j,{})})}),s.jsx(e,{to:`/dashboard/rooms/${c==null?void 0:c.id}/chat`,children:s.jsx(a,{children:s.jsx(f,{})})})]})]}),s.jsx(p,{}),s.jsx(t,{sx:{mt:2,wordBreak:"break-word",textAlign:"center"},children:c==null?void 0:c.description})]})]});export{A as R};