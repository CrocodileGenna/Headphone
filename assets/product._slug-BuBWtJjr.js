import{w as u,y as f,a as l,p as e}from"./chunk-EPOLDU6W-BmIYdT5Y.js";import{u as b}from"./CartContext-DXefdILW.js";import{k as j,c as w,p as v}from"./products-Dtf3OUWm.js";import{s as t}from"./emotion-styled.browser.esm-CsB5FJZD.js";const y=j`
  0% { background-color: #10b981; transform: scale(1); }
  50% { background-color: #059669; transform: scale(1.03); }
  100% { transform: scale(1); }
`,C=t.div`
  background: #ffffff;
`,n=t.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`,k=t.section`
  height: 60vh;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0)), url(${i=>i.src});
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
`,$=t.div`
  img { width: 100%; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
`,A=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,P=t.span`
  color: ${i=>i.available?"#10b981":"#ef4444"};
  font-weight: 600;
  &::before { content: '● '; }
`,I=t.button`
  padding: 1rem 2rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  ${i=>i.$isAnimated&&w`animation: ${y} 1s ease-out forwards;`}
`,T=t.section`
  padding: 80px 0;
  background: #f8fafc;
`,G=t.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: center;
  @media (min-width: 768px) { grid-template-columns: 1fr 1.2fr; }
`,V=t.ol`
  list-style: none;
  counter-reset: my-counter;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,c=t.li`
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
`,W=t.section`
  padding: 80px 0;
`,E=t.div`
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
`,F=t.h2` font-size: 2.5rem; color: #1e293b; `,H=t.div` font-size: 1.8rem; font-weight: 700; `,L=t.div` display: flex; gap: 12px; `,M=t.div`
  width: 35px; height: 35px; border-radius: 50%; background: ${i=>i.bgColor};
  cursor: pointer; border: 2px solid ${i=>i.isActive?"#2563eb":"transparent"};
  outline: 2px solid #fff;
`,Y=u(function(){const{slug:m}=f(),{addToCart:x}=b(),[a,d]=l.useState(!1),r=v.find(o=>o.slug===m),[s,p]=l.useState(r?.variants?.[0]||{color:"",img:r?.image});if(!r)return e.jsx("div",{className:"text-center py-20 text-xl font-bold",children:"Товар не знайдено"});const g=()=>{x({...r,selectedColor:s.color,image:s.img}),d(!0),setTimeout(()=>d(!1),1e3)};return e.jsxs(C,{children:[e.jsx(k,{src:r["image-all-colors"]||r.image,children:e.jsx(n,{children:e.jsx(S,{})})}),e.jsx(z,{children:e.jsx(n,{children:e.jsxs(B,{children:[e.jsx($,{children:e.jsx("img",{src:s.img,alt:r.name})}),e.jsxs(A,{children:[e.jsx(P,{available:!0,children:"В наявності"}),e.jsx(F,{children:r.name}),e.jsxs(H,{children:[r.price," ₴"]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"10px",fontWeight:600},children:"Оберіть колір:"}),e.jsx(L,{children:r.variants.map((o,h)=>e.jsx(M,{bgColor:o.color,isActive:s.color===o.color,onClick:()=>p(o)},h))})]}),e.jsx(I,{$isAnimated:a,onClick:g,children:a?"Додано ✓":"Додати в кошик"})]})]})})}),e.jsx(T,{children:e.jsx(n,{children:e.jsxs(G,{children:[e.jsx("img",{src:r["image-description"],alt:"Features",style:{width:"100%",borderRadius:"20px"}}),e.jsxs("div",{children:[e.jsx("h2",{style:{fontSize:"2rem",marginBottom:"30px"},children:"Чому цей продукт?"}),e.jsxs(V,{children:[e.jsx(c,{children:"Енергоефективність нового покоління для тривалої роботи."}),e.jsx(c,{children:"Екологічні матеріали, приємні на дотик та безпечні для здоров'я."}),e.jsx(c,{children:"Компактний розмір, що дозволяє брати пристрій з собою куди завгодно."}),e.jsx(c,{children:"Інтуїтивне керування однією кнопкою без зайвих налаштувань."})]})]})]})})}),e.jsx(W,{children:e.jsxs(n,{children:[e.jsx("h2",{style:{textAlign:"center",fontSize:"2rem",marginBottom:"40px"},children:"Відеоогляд та можливості"}),e.jsx(E,{children:e.jsx("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"YouTube video",frameBorder:"0",allowFullScreen:!0})})]})})]})});export{Y as default};
