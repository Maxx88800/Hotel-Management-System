import{c as a,j as d}from"./app-CHF2bg41.js";/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=e=>{const t=S(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},N=a.createContext({}),$=()=>a.useContext(N),L=a.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:u="",children:c,iconNode:f,...i},l)=>{const{size:h=24,strokeWidth:o=2,absoluteStrokeWidth:s=!1,color:m="currentColor",className:w=""}=$()??{},y=r??s?Number(n??o)*24/Number(t??h):n??o;return a.createElement("svg",{ref:l,...b,width:t??h??b.width,height:t??h??b.height,stroke:e??m,strokeWidth:y,className:p("lucide",w,u),...!c&&!j(i)&&{"aria-hidden":"true"},...i},[...f.map(([C,g])=>a.createElement(C,g)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(e,t)=>{const n=a.forwardRef(({className:r,...u},c)=>a.createElement(L,{ref:c,iconNode:t,className:p(`lucide-${v(k(e))}`,`lucide-${e}`,r),...u}));return n.displayName=k(e),n};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]],z=x("bed-double",_);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],E=x("chevron-down",A);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],B=x("user",W);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],U=x("x",M);function q({value:e,onChange:t,options:n,className:r="",containerClassName:u=""}){const[c,f]=a.useState(!1),i=a.useRef(null);a.useEffect(()=>{const o=s=>{i.current&&!i.current.contains(s.target)&&f(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]);const l=n.find(o=>{const s=o.key!==void 0?o.key:o.id;return(s==null?void 0:s.toString())===(e==null?void 0:e.toString())})||n[0],h=o=>{t(o),f(!1)};return d.jsxs("div",{ref:i,className:`relative inline-block w-full text-left shrink-0 z-30 ${u}`,children:[d.jsxs("button",{type:"button",onClick:()=>f(!c),className:`w-full flex items-center justify-between bg-[#1e293b] hover:bg-[#334155]/60 text-slate-200 border border-[#334155] rounded-xl px-4 py-2.5 text-xs font-bold font-outfit shadow-md transition-all text-left ${r}`,children:[d.jsx("span",{className:"truncate uppercase font-bold text-slate-100",children:(l==null?void 0:l.label)||(l==null?void 0:l.name)||""}),d.jsx(E,{size:14,className:"text-slate-400 shrink-0 ml-2"})]}),c&&d.jsx("div",{className:"absolute left-0 mt-2 w-full min-w-[200px] bg-[#0f172a] border border-[#334155] rounded-xl shadow-xl z-50 overflow-hidden py-1.5 animate-in fade-in slide-in-from-top-2 duration-150 max-h-60 overflow-y-auto",children:n.map(o=>{const s=o.key!==void 0?o.key:o.id,m=(s==null?void 0:s.toString())===(e==null?void 0:e.toString());return d.jsx("button",{type:"button",onClick:()=>h(s),className:`w-full text-left px-4 py-2.5 text-xs font-semibold transition-all ${m?"bg-brand-600 text-slate-50 font-bold":"text-slate-300 hover:bg-[#1e293b] hover:text-slate-100"}`,children:o.label||o.name},s)})})]})}export{z as B,E as C,B as U,U as X,q as a,x as c};
