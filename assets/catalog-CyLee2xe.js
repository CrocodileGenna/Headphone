import{w as n,p as i}from"./chunk-EPOLDU6W-BmIYdT5Y.js";import{p}from"./products-BgEgl5gd.js";import{P as r}from"./ProductCard-DVcYpIyd.js";import{s as e,u as m}from"./useTranslation-BA5JSnOe.js";import"./CartContext-DXefdILW.js";const s=e.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 64px; // Мобильные отступы
  
  @media (min-width: 768px) {
    padding: 80px 24px; // Десктопные отступы
  }
`,d=e.div`
  text-align: center;
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    margin-bottom: 64px;
  }
`,x=e.h1`
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
`,c=e.p`
  font-family: ${t=>t.theme.fonts.main};
  color: ${t=>t.theme.colors.secondary};
  max-width: 450px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,l=e.div`
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
`,j=n(function(){const{t:o}=m();return i.jsxs(s,{children:[i.jsxs(d,{children:[i.jsx(x,{children:o("catalog.title")}),i.jsx(c,{children:o("catalog.description")})]}),i.jsx(l,{children:p.map(a=>i.jsx(r,{product:a},a.id))})]})});export{j as default};
