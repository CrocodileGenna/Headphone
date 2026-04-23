import{w as l,a as d,p as e}from"./chunk-EPOLDU6W-BmIYdT5Y.js";import{s as n}from"./emotion-styled.browser.esm-CsB5FJZD.js";import{C as p,a as c}from"./aboutPage.style-B2yOyNUr.js";const x=n.div`
  padding: 120px 0 80px;
  background: #f8fafc;
  min-height: 100vh;
`,m=n.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  @media (min-width: 992px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
`,h=n.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
`,i=n.div`
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
`,g=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  font-size: 0.9rem;
  color: #64748b;
  input { cursor: pointer; }
`,u=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,f=n.a`
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
`,b=n.div`
  margin-top: 40px;
  padding: 25px;
  background: #e2e8f0;
  border-radius: 20px;
  h4 { margin-bottom: 10px; }
  p { font-size: 0.95rem; line-height: 1.6; color: #475569; }
`,C=l(function(){const[a,o]=d.useState({name:"",email:"",message:"",agree:!1}),t=r=>{r.preventDefault(),a.agree?alert(`Дякуємо, ${a.name}! Ми зв'яжемося з вами за адресою ${a.email}`):alert("Будь ласка, підтвердіть згоду на обробку даних")},s=[{name:"Facebook",url:"#",icon:"FB"},{name:"YouTube",url:"#",icon:"YT"},{name:"Threads",url:"#",icon:"TH"},{name:"Instagram",url:"#",icon:"IG"},{name:"TikTok",url:"#",icon:"TT"}];return e.jsx(x,{children:e.jsxs(p,{children:[e.jsx(c,{children:"Зв'яжіться з нами"}),e.jsxs(m,{children:[e.jsx(h,{children:e.jsxs("form",{onSubmit:t,children:[e.jsxs(i,{children:[e.jsx("label",{children:"Ваше ім'я"}),e.jsx("input",{type:"text",placeholder:"Введіть ім'я",required:!0,onChange:r=>o({...a,name:r.target.value})})]}),e.jsxs(i,{children:[e.jsx("label",{children:"Email"}),e.jsx("input",{type:"email",placeholder:"example@mail.com",required:!0,onChange:r=>o({...a,email:r.target.value})})]}),e.jsxs(i,{children:[e.jsx("label",{children:"Коментарі"}),e.jsx("textarea",{placeholder:"Ваше повідомлення...",rows:4,onChange:r=>o({...a,message:r.target.value}),style:{padding:"12px 16px",border:"1px solid #e2e8f0",borderRadius:"12px",outline:"none",fontFamily:"inherit",resize:"vertical"}})]}),e.jsxs(g,{children:[e.jsx("input",{type:"checkbox",id:"agree",onChange:r=>o({...a,agree:r.target.checked})}),e.jsx("label",{htmlFor:"agree",children:"Я даю згоду на обробку персональних даних"})]}),e.jsx("button",{type:"submit",style:{width:"100%",padding:"15px",borderRadius:"12px",background:"#2563eb",color:"#fff",border:"none",fontWeight:700,cursor:"pointer"},children:"Надіслати повідомлення"})]})}),e.jsxs(u,{children:[e.jsx("h3",{style:{marginBottom:"10px"},children:"Наші соцмережі"}),s.map(r=>e.jsxs(f,{href:r.url,target:"_blank",children:[e.jsx("span",{children:r.icon}),r.name]},r.name)),e.jsxs(b,{children:[e.jsx("h4",{children:"Графік роботи"}),e.jsx("p",{children:"Пн - Пт: 09:00 — 19:00"}),e.jsx("p",{children:"Сб - Нд: 10:00 — 17:00"}),e.jsx("hr",{style:{margin:"15px 0",border:"0.5px solid #cbd5e1"}}),e.jsx("h4",{children:"Адреса"}),e.jsx("p",{children:"м. Київ, вул. Центральна, 12, оф. 404"})]})]})]})]})})});export{C as default};
