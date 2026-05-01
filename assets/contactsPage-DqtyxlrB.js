import{w as l,a as d,p as e}from"./chunk-EPOLDU6W-BmIYdT5Y.js";import{s as t,u as c}from"./useTranslation-BA5JSnOe.js";import{C as p,a as x}from"./aboutPage.style-2QYr5id-.js";const m=t.div`
  padding: 120px 0 80px;
  background: #f8fafc;
  min-height: 100vh;
`,h=t.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  @media (min-width: 992px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
`,g=t.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
`,i=t.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label { font-weight: 600; color: #1e293b; }
  
  input {
    padding: 12px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    outline: none;
    &:focus { border-color: #2563eb; }
  }
`,f=t.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  font-size: 0.9rem;
  color: #64748b;
  input { cursor: pointer; }
`,u=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;t.a`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  background: #fff;
  border-radius: 16px;
  text-decoration: none;
  color: #1e293b;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);

  &:hover {
    transform: translateX(10px);
    background: #2563eb;
    color: #fff;
  }
`;const b=t.div`
  margin-top: 40px;
  padding: 25px;
  background: #e2e8f0;
  border-radius: 20px;
  h4 { margin-bottom: 10px; }
  p { font-size: 0.95rem; line-height: 1.6; color: #475569; }
`,k=l(function(){const{t:a}=c(),[n,o]=d.useState({name:"",email:"",message:"",agree:!1}),s=r=>{r.preventDefault(),n.agree?alert(`Дякуємо, ${n.name}! Ми зв'яжемося з вами за адресою ${n.email}`):alert("Будь ласка, підтвердіть згоду на обробку даних")};return e.jsx(m,{children:e.jsxs(p,{children:[e.jsx(x,{children:a("contacts.title")}),e.jsxs(h,{children:[e.jsx(g,{children:e.jsxs("form",{onSubmit:s,children:[e.jsxs(i,{children:[e.jsx("label",{children:a("contacts.name_label")}),e.jsx("input",{type:"text",placeholder:"Введіть ім'я",required:!0,onChange:r=>o({...n,name:r.target.value})})]}),e.jsxs(i,{children:[e.jsx("label",{children:"Email"}),e.jsx("input",{type:"email",placeholder:"example@mail.com",required:!0,onChange:r=>o({...n,email:r.target.value})})]}),e.jsxs(i,{children:[e.jsx("label",{children:a("contacts.comments_label")}),e.jsx("textarea",{placeholder:"Ваше повідомлення...",rows:4,onChange:r=>o({...n,message:r.target.value}),style:{padding:"12px 16px",border:"1px solid #e2e8f0",borderRadius:"12px",outline:"none",fontFamily:"inherit",resize:"vertical"}})]}),e.jsxs(f,{children:[e.jsx("input",{type:"checkbox",id:"agree",onChange:r=>o({...n,agree:r.target.checked})}),e.jsx("label",{htmlFor:"agree",children:a("contacts.consent")})]}),e.jsx("button",{type:"submit",style:{width:"100%",padding:"15px",borderRadius:"12px",background:"#2563eb",color:"#fff",border:"none",fontWeight:700,cursor:"pointer"},children:a("contacts.send_button")})]})}),e.jsx(u,{children:e.jsxs(b,{children:[e.jsx("h4",{children:"Графік роботи"}),e.jsx("p",{children:"Пн - Пт: 09:00 — 19:00"}),e.jsx("p",{children:"Сб - Нд: 10:00 — 17:00"}),e.jsx("hr",{style:{margin:"15px 0",border:"0.5px solid #cbd5e1"}}),e.jsx("h4",{children:"Адреса"}),e.jsx("p",{children:"м. Київ, вул. Центральна, 12, оф. 404"})]})})]})]})})});export{k as default};
