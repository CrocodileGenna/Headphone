import{w as $,A,a as d,p as e}from"./chunk-EPOLDU6W-BnE-iRIc.js";import{u as C}from"./CartContext-DyTmtp-C.js";import{k,c as P,p as _}from"./products-Dq0SDbSy.js";import{s as t,u as S}from"./useTranslation-WiU9NkHO.js";const z=k`
  0% { background-color: #10b981; transform: scale(1); }
  50% { background-color: #059669; transform: scale(1.03); }
  100% { transform: scale(1); }
`,B=t.div`
  background: #ffffff;
`,l=t.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`,I=t.section`
  height: 60vh;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0)), url(${r=>r.src});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
`,T=t.div`
  max-width: 600px;
  h1 { font-size: 3rem; margin-bottom: 1.5rem; }
  p { font-size: 1.2rem; line-height: 1.6; }
`,G=t.section`
  padding: 80px 0;
`,M=t.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  @media (min-width: 768px) { grid-template-columns: 1fr 1fr; }
`,W=t.div`
  img { width: 100%; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
`,V=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,R=t.span`
  color: ${r=>r.available?"#10b981":"#ef4444"};
  font-weight: 600;
  &::before { content: '● '; }
`,E=t.button`
  padding: 1rem 2rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  ${r=>r.$isAnimated&&P`
    animation: ${z} 1s ease-out forwards;
  `}
`,F=t.section`
  padding: 80px 0;
  background: #f8fafc;
`,H=t.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: center;
  @media (min-width: 768px) { grid-template-columns: 1fr 1.2fr; }
`,L=t.ol`
  list-style: none;
  counter-reset: my-counter;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,N=t.li`
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
`,Q=t.section`
  padding: 80px 0;
`,O=t.div`
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
`,X=t.h2` font-size: 2.5rem; color: #1e293b; `,Y=t.div` font-size: 1.8rem; font-weight: 700; `,q=t.div` display: flex; gap: 12px;`,D=t.div`
  width: 35px; 
  height: 35px; 
  border-radius: 50%; 
  background: ${r=>r.bgColor}; 
  box-shadow:  ${r=>r.theme.shadows.card};
  cursor: pointer; border: 2px solid ${r=>r.isActive?"#2563eb":"transparent"};
  outline: 2px solid #fff;
  border: 3px solid ${r=>r.isActive?r.theme.colors.primary:r.theme.colors.border}; 

  // width: 18px;
  // height: 18px;
  // border-radius: ${r=>r.theme.borderRadius.full};
  // background-color: ${r=>r.bgColor};
  
  // /* Используем цвет границы из темы */
  // border: 1px solid ${r=>r.isActive?r.theme.colors.primary:r.theme.colors.border}; 
  
  // box-shadow: inset 0 0 0 2px ${r=>r.theme.colors.white}; 
  
  // cursor: pointer;
  // padding: 0;
  // transition: all 0.2s ease;
  // position: relative;

  // // ${r=>r.isActive&&`
  // //   transform: scale(1.2);
  // //   border-width: 2px;
  // // `}

  // // &:hover {
  // //   transform: scale(1.2);
  // //   border-color: ${r=>r.theme.colors.textMain};
  // // }
`,re=$(function(){const{slug:m}=A(),{addToCart:g}=C(),[u,x]=d.useState(!1),{t:s}=S(),o=d.useMemo(()=>_.find(i=>i.slug===m),[m]),n=s(`catalog.products.${m}`,{returnObjects:!0}),h=d.useMemo(()=>n&&typeof n=="object"&&Array.isArray(n.benefits)?n.benefits:[],[n]),[a,f]=d.useState(()=>o?.variants?.[0]||{color:"",img:o?.image});if(!o)return e.jsx("div",{className:"text-center py-20 text-xl font-bold",children:"Товар не знайдено"});const b=n?.price??o.price??0,j=()=>{g({...o,name:n?.name||o.name,selectedColor:a.color,image:c(a.img),price:Number(b)}),x(!0),setTimeout(()=>{x(!1)},1e3)},c=i=>i?i.startsWith("/")?i:`/${i}`:"",w=c(o["image-all-colors"]||o.image),v=c(a.img),y=c(o["image-description"]);return e.jsxs(B,{children:[e.jsx(I,{src:w,children:e.jsx(l,{children:e.jsx(T,{})})}),e.jsx(G,{children:e.jsx(l,{children:e.jsxs(M,{children:[e.jsx(W,{children:e.jsx("img",{src:v,alt:o.name})}),e.jsxs(V,{children:[e.jsx(R,{available:!0,children:s("product_details.status_available")}),e.jsx(X,{children:o.name}),e.jsxs(Y,{children:[n?.price||""," ",s("catalog.currency")]}),e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:"10px",fontWeight:600},children:[s("product_details.choose_color"),":"]}),e.jsx(q,{children:o.variants.map((i,p)=>e.jsx(D,{bgColor:i.color,isActive:a.color===i.color,onClick:()=>f(i)},p))})]}),e.jsx(E,{$isAnimated:u,onClick:j,children:s(u?"cart.added":"cart.add_to_cart")})]})]})})}),e.jsx(F,{children:e.jsx(l,{children:e.jsxs(H,{children:[e.jsx("img",{src:y,alt:"Features",style:{width:"100%",borderRadius:"20px"}}),e.jsxs("div",{children:[e.jsx("h2",{style:{fontSize:"2rem",marginBottom:"30px"},children:s("product_details.why_title")}),e.jsx(L,{children:Array.isArray(h)&&h.map((i,p)=>e.jsx(N,{children:i},p))})]})]})})}),e.jsx(Q,{children:e.jsxs(l,{children:[e.jsx("h2",{style:{textAlign:"center",fontSize:"2rem",marginBottom:"40px"},children:s("product_details.video_title")}),e.jsx(O,{children:e.jsx("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"YouTube video",frameBorder:"0",allowFullScreen:!0})})]})})]})});export{re as default};
