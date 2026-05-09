import{w as b,a as p,p as e}from"./chunk-EPOLDU6W-BnE-iRIc.js";import{u as j}from"./CartContext-DyTmtp-C.js";import{s as r,u as k}from"./useTranslation-WiU9NkHO.js";const y=r.div`
  max-width: 1000px;
  margin: 120px auto 60px;
  padding: 0 20px;
  font-family: sans-serif;
`,v=r.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`,_=r.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
`,s=r.input`
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  &:focus { outline: none; border-color: #2563eb; }
`,C=r.button`
  padding: 16px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  &:hover { background: #1d4ed8; }
`,w=r.div`
  background: #f8fafc;
  padding: 30px;
  border-radius: 20px;
  height: fit-content;
`,S=r.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  img { width: 60px; height: 60px; border-radius: 8px; object-fit: cover; }
  p { margin: 0; font-weight: 600; font-size: 0.9rem; }
  span { color: #64748b; font-size: 0.85rem; }
`,O=r.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
`,i=r.h3`
  margin: 10px 0 15px;
  font-size: 1.1rem;
  color: #1e293b;
`,z=r.label`
  display: flex;
  gap: 10px;
  font-size: 0.85rem;
  color: #64748b;
  align-items: flex-start;
  margin: 10px 0;
  cursor: pointer;
`,q=r.h1`
  margin-bottom: 40px;
  font-size: 2.2rem;
`,I=r.div`
  max-height: 400px;
  overflow-y: auto;
`,P=b(function(){const{cartItems:l,totalPrice:d}=j(),{t:o}=k(),[n,h]=p.useState(()=>{const t=localStorage.getItem("checkout_form");return t?JSON.parse(t):{fullName:"",email:"",address:"",postOffice:"",phone:"",consent:!1}});p.useEffect(()=>{localStorage.setItem("checkout_form",JSON.stringify(n))},[n]);const a=t=>{const{name:c,value:x,type:m,checked:f}=t.target;h(g=>({...g,[c]:m==="checkbox"?f:x}))},u=t=>{if(t.preventDefault(),!n.consent)return alert(o("checkout.error_consent"));console.log("Order Data:",{...n,items:l,total:d}),alert(o("checkout.success"))};return e.jsxs(y,{children:[e.jsx(q,{children:o("checkout.title")}),e.jsxs(w,{children:[e.jsx(i,{children:o("checkout.your_order")}),e.jsx(I,{children:l.map((t,c)=>e.jsxs(S,{children:[e.jsx("img",{src:t.image.startsWith("/")?t.image:`/${t.image}`,alt:t.name}),e.jsxs("div",{children:[e.jsx("p",{children:t.name}),e.jsxs("span",{children:[t.price," ",o("catalog.currency")]})]})]},c))}),e.jsxs(O,{children:[e.jsxs("span",{children:[o("cart.total"),":"]}),e.jsxs("strong",{children:[d," ",o("catalog.currency")]})]})]}),e.jsx(v,{children:e.jsxs(_,{onSubmit:u,children:[e.jsx(i,{children:o("checkout.contact_info")}),e.jsx(s,{name:"fullName",placeholder:o("checkout.placeholder_name"),value:n.fullName,onChange:a,required:!0}),e.jsx(s,{name:"email",type:"email",placeholder:o("checkout.placeholder_email"),value:n.email,onChange:a,required:!0}),e.jsx(s,{name:"phone",type:"tel",placeholder:o("checkout.placeholder_phone"),value:n.phone,onChange:a,required:!0}),e.jsx(i,{children:o("checkout.shipping_info")}),e.jsx(s,{name:"address",placeholder:o("checkout.placeholder_address"),value:n.address,onChange:a,required:!0}),e.jsx(s,{name:"postOffice",placeholder:o("checkout.placeholder_post"),value:n.postOffice,onChange:a,required:!0}),e.jsxs(z,{children:[e.jsx("input",{type:"checkbox",name:"consent",checked:n.consent,onChange:a}),e.jsx("span",{children:o("checkout.consent_text")})]}),e.jsx(C,{type:"submit",children:o("checkout.confirm_order")})]})})]})});export{P as default};
