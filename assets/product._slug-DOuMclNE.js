import{w as b,y as j,a as c,p as e}from"./chunk-EPOLDU6W-BmIYdT5Y.js";import{u as w}from"./CartContext-DXefdILW.js";import{k as y,c as v,p as C}from"./products-4kUwbWN9.js";import{s as t,u as k}from"./useTranslation-BA5JSnOe.js";const A=y`
  0% { background-color: #10b981; transform: scale(1); }
  50% { background-color: #059669; transform: scale(1.03); }
  100% { transform: scale(1); }
`,_=t.div`
  background: #ffffff;
`,d=t.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`,$=t.section`
  height: 60vh;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0)), url(${r=>r.src});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
`,S=t.div`
  max-width: 600px;
  h1 { font-size: 3rem; margin-bottom: 1.5rem; }
  p { font-size: 1.2rem; line-height: 1.6; }
`,z=t.section`
  padding: 80px 0;
`,B=t.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  @media (min-width: 768px) { grid-template-columns: 1fr 1fr; }
`,P=t.div`
  img { width: 100%; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
`,T=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,I=t.span`
  color: ${r=>r.available?"#10b981":"#ef4444"};
  font-weight: 600;
  &::before { content: '● '; }
`,G=t.button`
  padding: 1rem 2rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  ${r=>r.$isAnimated&&v`animation: ${A} 1s ease-out forwards;`}
`,M=t.section`
  padding: 80px 0;
  background: #f8fafc;
`,V=t.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: center;
  @media (min-width: 768px) { grid-template-columns: 1fr 1.2fr; }
`,W=t.ol`
  list-style: none;
  counter-reset: my-counter;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,E=t.li`
  counter-increment: my-counter;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  font-size: 1.1rem;
  &::before {
    content: counter(my-counter) ".";
    font-weight: 800;
    color: #2563eb;
    font-size: 1.5rem;
  }
`,F=t.section`
  padding: 80px 0;
`,H=t.div`
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
`,L=t.h2` font-size: 2.5rem; color: #1e293b; `,Q=t.div` font-size: 1.8rem; font-weight: 700; `,R=t.div` display: flex; gap: 12px;`,N=t.div`
  width: 35px; height: 35px; border-radius: 50%; background: ${r=>r.bgColor}; box-shadow:  ${r=>r.theme.shadows.card};
  cursor: pointer; border: 2px solid ${r=>r.isActive?"#2563eb":"transparent"};
  outline: 2px solid #fff;
`,D=b(function(){const{slug:l}=j(),{addToCart:g}=w(),[p,x]=c.useState(!1),{t:i}=k(),o=c.useMemo(()=>C.find(n=>n.slug===l),[l]),s=i(`catalog.products.${l}`,{returnObjects:!0}),u=c.useMemo(()=>s&&typeof s=="object"&&Array.isArray(s.benefits)?s.benefits:[],[s]),[a,h]=c.useState(()=>o?.variants?.[0]||{color:"",img:o?.image});if(!o)return e.jsx("div",{className:"text-center py-20 text-xl font-bold",children:"Товар не знайдено"});const f=()=>{g({...o,name:s?.name||o.name,selectedColor:a.color,image:a.img}),x(!0),setTimeout(()=>x(!1),1e3)};return e.jsxs(_,{children:[e.jsx($,{src:o["image-all-colors"]||o.image,children:e.jsx(d,{children:e.jsx(S,{})})}),e.jsx(z,{children:e.jsx(d,{children:e.jsxs(B,{children:[e.jsx(P,{children:e.jsx("img",{src:a.img,alt:o.name})}),e.jsxs(T,{children:[e.jsx(I,{available:!0,children:i("product_details.status_available")}),e.jsx(L,{children:o.name}),e.jsxs(Q,{children:[s?.price||""," ",i("catalog.currency")]}),e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:"10px",fontWeight:600},children:[i("product_details.choose_color"),":"]}),e.jsx(R,{children:o.variants.map((n,m)=>e.jsx(N,{bgColor:n.color,isActive:a.color===n.color,onClick:()=>h(n)},m))})]}),e.jsx(G,{$isAnimated:p,onClick:f,children:i(p?"cart.added":"cart.add_to_cart")})]})]})})}),e.jsx(M,{children:e.jsx(d,{children:e.jsxs(V,{children:[e.jsx("img",{src:o["image-description"],alt:"Features",style:{width:"100%",borderRadius:"20px"}}),e.jsxs("div",{children:[e.jsx("h2",{style:{fontSize:"2rem",marginBottom:"30px"},children:i("product_details.why_title")}),e.jsx(W,{children:Array.isArray(u)&&u.map((n,m)=>e.jsx(E,{children:n},m))})]})]})})}),e.jsx(F,{children:e.jsxs(d,{children:[e.jsx("h2",{style:{textAlign:"center",fontSize:"2rem",marginBottom:"40px"},children:i("product_details.video_title")}),e.jsx(H,{children:e.jsx("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"YouTube video",frameBorder:"0",allowFullScreen:!0})})]})})]})});export{D as default};
