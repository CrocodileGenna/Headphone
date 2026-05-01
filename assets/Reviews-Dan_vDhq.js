import{p as t}from"./chunk-EPOLDU6W-BmIYdT5Y.js";import{s as r,u as s}from"./useTranslation-BA5JSnOe.js";const m=r.section`
  padding: 3rem 0;
  background-color: ${e=>e.theme.colors.white};

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,a=r.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`,d=r.h2`
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
`,l=r.span`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 2rem;
    height: 0.25rem;
    background-color: ${e=>e.theme.colors.primary};
    border-radius: ${e=>e.theme.borderRadius.full};
    margin-right: 0.75rem;
  }
`,c=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`,p=r.div`
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
`,h=r.p`
  font-family: ${e=>e.theme.fonts.main};
  color: ${e=>e.theme.colors.textBody};
  font-size: 0.875rem;
  line-height: 1.625;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,f=r.p`
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
`,x=r.div`
  /* Для звезд обычно используем золотой, но можно добавить его в theme.colors.warning */
  color: #fbbf24; 
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  font-style: normal;
`;function y(){const{t:e}=s(),o=e("reviews.items",{returnObjects:!0});return t.jsx(m,{children:t.jsxs(a,{children:[t.jsxs(d,{children:[t.jsx(l,{}),e("reviews.title")]}),t.jsx(c,{children:Array.isArray(o)&&o.map((i,n)=>t.jsxs(p,{children:[t.jsx(f,{children:i.name}),t.jsxs(h,{children:['"',i.text,'"']}),t.jsx(x,{children:"★".repeat(i.rating)})]},n))})]})})}export{y as R};
