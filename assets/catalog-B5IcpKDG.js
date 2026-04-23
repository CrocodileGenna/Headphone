import{w as a,p as i}from"./chunk-EPOLDU6W-BmIYdT5Y.js";import{p as n}from"./products-Dtf3OUWm.js";import{P as p}from"./ProductCard-Hz54tOaG.js";import{s as e}from"./emotion-styled.browser.esm-CsB5FJZD.js";import"./CartContext-DXefdILW.js";const m=e.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 64px; // Мобильные отступы
  
  @media (min-width: 768px) {
    padding: 80px 24px; // Десктопные отступы
  }
`,r=e.div`
  text-align: center;
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    margin-bottom: 64px;
  }
`,s=e.h1`
  font-family: ${t=>t.theme.fonts.accent};
  font-size: 28px;
  font-weight: 800;
  color: ${t=>t.theme.colors.textMain};
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,d=e.p`
  font-family: ${t=>t.theme.fonts.main};
  color: ${t=>t.theme.colors.secondary};
  max-width: 450px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,x=e.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); // 1 колонка на мобилках
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr); // 2 колонки на планшетах
    gap: 24px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr); // 4 колонки на десктопах
    gap: 32px;
  }
`,u=a(function(){return i.jsxs(m,{children:[i.jsxs(r,{children:[i.jsx(s,{children:"Повний каталог"}),i.jsx(d,{children:"Оберіть свій ідеальний пристрій для комфорту та свіжості у вашому домі"})]}),i.jsx(x,{children:n.map(o=>i.jsx(p,{product:o},o.id))})]})});export{u as default};
