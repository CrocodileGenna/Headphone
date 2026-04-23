import{p as t}from"./chunk-EPOLDU6W-BmIYdT5Y.js";import{s as i}from"./emotion-styled.browser.esm-CsB5FJZD.js";const n=i.section`
  padding: 3rem 0;
  background-color: ${e=>e.theme.colors.white};

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,m=i.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`,s=i.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${e=>e.theme.fonts.accent};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.textMain};
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
    font-size: 1.5rem;
  }
`,a=i.span`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 2rem;
    height: 0.25rem;
    background-color: ${e=>e.theme.colors.primary};
    border-radius: ${e=>e.theme.borderRadius.full};
    margin-right: 0.75rem;
  }
`,d=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`,l=i.div`
  background-color: ${e=>e.theme.colors.backgroundSoft};
  padding: 1.5rem;
  border-radius: ${e=>e.theme.borderRadius.medium};
  border: 1px solid ${e=>e.theme.colors.border};
  font-style: italic;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,c=i.p`
  font-family: ${e=>e.theme.fonts.main};
  color: ${e=>e.theme.colors.textBody};
  font-size: 0.875rem;
  line-height: 1.625;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,p=i.p`
  font-family: ${e=>e.theme.fonts.main};
  color: ${e=>e.theme.colors.textMain};
  font-weight: 700;
  font-style: normal;
  margin-top: 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`,h=i.div`
  /* Для звезд обычно используем золотой, но можно добавить его в theme.colors.warning */
  color: #fbbf24; 
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  font-style: normal;
`;function g(){const e=[{name:"Олександр",text:"Найкращий зволожувач для офісу. Працює тихо.",rating:5},{name:"Марія",text:"Вентилятор дуже рятує у дорозі. Якісний пластик.",rating:5}];return t.jsx(n,{children:t.jsxs(m,{children:[t.jsxs(s,{children:[t.jsx(a,{}),"Відгуки клієнтів"]}),t.jsx(d,{children:e.map((r,o)=>t.jsxs(l,{children:[t.jsx(h,{children:"★".repeat(r.rating)}),t.jsxs(c,{children:['"',r.text,'"']}),t.jsxs(p,{children:["— ",r.name]})]},o))})]})})}export{g as R};
