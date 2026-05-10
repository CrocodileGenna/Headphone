import{w as C,A,a as l,p as e}from"./chunk-EPOLDU6W-BnE-iRIc.js";import{u as k}from"./CartContext-DyTmtp-C.js";import{k as P,c as _,p as S}from"./products-Dq0SDbSy.js";import{s as r,u as z}from"./useTranslation-WiU9NkHO.js";const B=P`
  0% { background-color: #10b981; transform: scale(1); }
  50% { background-color: #059669; transform: scale(1.03); }
  100% { transform: scale(1); }
`,I=r.div`
  background: #ffffff;
`,m=r.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`,T=r.section`
  height: 60vh;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0)), url(${t=>t.src});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
`,G=r.div`
  max-width: 600px;
  h1 { font-size: 3rem; margin-bottom: 1.5rem; }
  p { font-size: 1.2rem; line-height: 1.6; }
`,M=r.section`
  padding: 80px 0;
`,W=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  @media (min-width: 768px) { grid-template-columns: 1fr 1fr; }
`,V=r.div`
  img { width: 100%; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
`,R=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,E=r.span`
  color: ${t=>t.available?"#10b981":"#ef4444"};
  font-weight: 600;
  &::before { content: '● '; }
`,F=r.button`
  padding: 1rem 2rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  ${t=>t.$isAnimated&&_`
    animation: ${B} 1s ease-out forwards;
  `}
`,H=r.section`
  padding: 80px 0;
  background: #f8fafc;
`,L=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: center;
  @media (min-width: 768px) { grid-template-columns: 1fr 1.2fr; }
`,N=r.ol`
  list-style: none;
  counter-reset: my-counter;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Q=r.li`
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
`,O=r.section`
  padding: 80px 0;
`,X=r.div`
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
`,Y=r.h2` font-size: 2.5rem; color: #1e293b; `,q=r.div` font-size: 1.8rem; font-weight: 700; `,D=r.div` display: flex; gap: 12px;`,J=r.div`
  width: 35px; 
  height: 35px; 
  border-radius: 50%; 
  background: ${t=>t.bgColor}; 
  box-shadow:  ${t=>t.theme.shadows.card};
  cursor: pointer; border: 2px solid ${t=>t.isActive?"#2563eb":"transparent"};
  outline: 2px solid #fff;
  border: 3px solid ${t=>t.isActive?t.theme.colors.primary:t.theme.colors.border}; 

  // width: 18px;
  // height: 18px;
  // border-radius: ${t=>t.theme.borderRadius.full};
  // background-color: ${t=>t.bgColor};
  
  // /* Используем цвет границы из темы */
  // border: 1px solid ${t=>t.isActive?t.theme.colors.primary:t.theme.colors.border}; 
  
  // box-shadow: inset 0 0 0 2px ${t=>t.theme.colors.white}; 
  
  // cursor: pointer;
  // padding: 0;
  // transition: all 0.2s ease;
  // position: relative;

  // // ${t=>t.isActive&&`
  // //   transform: scale(1.2);
  // //   border-width: 2px;
  // // `}

  // // &:hover {
  // //   transform: scale(1.2);
  // //   border-color: ${t=>t.theme.colors.textMain};
  // // }
`,re=C(function(){const{slug:p}=A(),{addToCart:g}=k(),[x,u]=l.useState(!1),{t:s}=z(),o=l.useMemo(()=>S.find(i=>i.slug===p),[p]),n=s(`catalog.products.${p}`,{returnObjects:!0}),h=l.useMemo(()=>n&&typeof n=="object"&&Array.isArray(n.benefits)?n.benefits:[],[n]),[c,f]=l.useState(()=>o?.variants?.[0]||{color:"",img:o?.image});if(!o)return e.jsx("div",{className:"text-center py-20 text-xl font-bold",children:"Товар не знайдено"});const b=n?.price??o.price??0,j=()=>{g({...o,name:n?.name||o.name,selectedColor:c.color,image:d(c.img),price:Number(b)}),u(!0),setTimeout(()=>{u(!1)},1e3)},d=i=>{if(!i)return"";const a="/Chillax/",$=i.startsWith("/")?i.slice(1):i;return`${a}${$}`},w=d(o["image-all-colors"]||o.image),v=d(c.img),y=d(o["image-description"]);return e.jsxs(I,{children:[e.jsx(T,{src:w,children:e.jsx(m,{children:e.jsx(G,{})})}),e.jsx(M,{children:e.jsx(m,{children:e.jsxs(W,{children:[e.jsx(V,{children:e.jsx("img",{src:v,alt:o.name})}),e.jsxs(R,{children:[e.jsx(E,{available:!0,children:s("product_details.status_available")}),e.jsx(Y,{children:o.name}),e.jsxs(q,{children:[n?.price||""," ",s("catalog.currency")]}),e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:"10px",fontWeight:600},children:[s("product_details.choose_color"),":"]}),e.jsx(D,{children:o.variants.map((i,a)=>e.jsx(J,{bgColor:i.color,isActive:c.color===i.color,onClick:()=>f(i)},a))})]}),e.jsx(F,{$isAnimated:x,onClick:j,children:s(x?"cart.added":"cart.add_to_cart")})]})]})})}),e.jsx(H,{children:e.jsx(m,{children:e.jsxs(L,{children:[e.jsx("img",{src:y,alt:"Features",style:{width:"100%",borderRadius:"20px"}}),e.jsxs("div",{children:[e.jsx("h2",{style:{fontSize:"2rem",marginBottom:"30px"},children:s("product_details.why_title")}),e.jsx(N,{children:Array.isArray(h)&&h.map((i,a)=>e.jsx(Q,{children:i},a))})]})]})})}),e.jsx(O,{children:e.jsxs(m,{children:[e.jsx("h2",{style:{textAlign:"center",fontSize:"2rem",marginBottom:"40px"},children:s("product_details.video_title")}),e.jsx(X,{children:e.jsx("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"YouTube video",frameBorder:"0",allowFullScreen:!0})})]})})]})});export{re as default};
