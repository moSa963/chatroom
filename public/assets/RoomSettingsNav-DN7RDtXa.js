import{R as b,D as j,J as g,h as p,H as f,l as R,i as S,j as e,O as v,M as B}from"./index-Y91MOtxq.js";import{R as O}from"./RoomHeader-COCGyiPC.js";import{p as o}from"./Permissions-C4dgcXcN.js";import{S as _}from"./Screen-Dy6Ttb9N.js";import{B as u}from"./Box-C7Q6lQnf.js";import{T as k,a as r}from"./Tabs-DrOCclph.js";import"./useSlot-BWqUzJVS.js";import"./useTheme-BuMe12sB.js";import"./Avatar-6iMMLUcH.js";import"./Stack-CAwgmJez.js";import"./IconButton-9uYGQQG5.js";import"./Divider-6e9HeHrJ.js";import"./dividerClasses-CJRI5ykF.js";import"./react-is.production.min-45l22EfV.js";import"./ownerWindow-DIR61fab.js";const w=()=>{const[i,l]=b.useState(0),c=j(),{pathname:d}=g(),s=p(f),h=R(),a=p(S);b.useEffect(()=>{Object.keys(t).forEach((m,n)=>d.endsWith(m)&&l(n))},[d,c,s,a]);const x=(m,n)=>{c(Object.keys(t)[n]),l(n)};return e.jsxs(_,{children:[e.jsxs(u,{sx:{pt:2},children:[e.jsx(O,{room:s,noSettings:!0}),e.jsx(u,{sx:{borderBottom:1,borderColor:"divider",mt:5},children:e.jsxs(k,{value:i,onChange:x,variant:"scrollable",scrollButtons:"auto",children:[e.jsx(r,{label:"Settings",disabled:!t[""](s,a)}),e.jsx(r,{label:"Users",disabled:!t.users(s,a)}),e.jsx(r,{label:"Requests",disabled:!t.requests(s,a)}),e.jsx(r,{label:"Band users",disabled:!t.bans(s,a)}),e.jsx(r,{label:"Theme",disabled:!t.theme(s,a)})]})})]}),t[Object.keys(t)[i]](s,a)&&e.jsx(v,{context:[s,m=>h(B(m))]})]})},t={"":o.manage_room,users:o.manage_members,requests:o.manage_members,bans:o.manage_members,theme:o.manage_room};export{w as default};