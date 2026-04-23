import{L as f,a,p as o}from"./chunk-EPOLDU6W-BmIYdT5Y.js";import{u as x}from"./CartContext-DXefdILW.js";import{s as t}from"./emotion-styled.browser.esm-CsB5FJZD.js";import{k as b,c as g}from"./products-CEWUdiyj.js";const u=b`
  0% {
    background-color: #10b981; /* Зеленый цвет (например, Emerald 500) */
    transform: scale(1);
  }
  50% {
    background-color: #059669; /* Чуть темнее зеленый в середине */
    transform: scale(1.03); /* Легкое увеличение для эффекта нажатия */
  }
  100% {
    /* Цвет возвращается к исходному значению, 
       которое задано в основном стиле кнопки ниже */
    transform: scale(1);
  }
`,w=t(f)`
  background-color: ${e=>e.theme.colors.white};
  border: 1px solid ${e=>e.theme.colors.border};
  padding: 1rem;
  border-radius: ${e=>e.theme.borderRadius.large};
  box-shadow: ${e=>e.theme.shadows.card};
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);

    & > div:first-of-type {
      background-color: #eff6ff; /* Оставляем легкий голубой акцент при наведении */
    }
  }

  @media (min-width: 768px) {
    padding: 1.25rem;
  }
`,$=t.div`
  background-color: ${e=>e.theme.colors.backgroundSoft};
  border-radius: ${e=>e.theme.borderRadius.medium};
  margin-bottom: 1rem;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
`,y=t.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
  transition: transform 0.5s;
`,k=t.h3`
  font-family: ${e=>e.theme.fonts.accent};
  font-size: 1rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.textMain};
  margin-bottom: 0.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`,v=t.p`
  font-family: ${e=>e.theme.fonts.main};
  color: ${e=>e.theme.colors.textBody};
  font-size: 0.75rem;
  margin-bottom: 1rem;
  line-height: 1.625;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,j=t.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`,C=t.button`
  width: 18px;
  height: 18px;
  border-radius: ${e=>e.theme.borderRadius.full};
  background-color: ${e=>e.bgColor};
  
  /* Используем цвет границы из темы */
  border: 1px solid ${e=>e.isActive?e.theme.colors.primary:e.theme.colors.border}; 
  
  box-shadow: inset 0 0 0 2px ${e=>e.theme.colors.white}; 
  
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;
  position: relative;

  ${e=>e.isActive&&`
    transform: scale(1.2);
    border-width: 2px;
  `}

  &:hover {
    transform: scale(1.2);
    border-color: ${e=>e.theme.colors.textMain};
  }
`,A=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 0.5rem;
`,P=t.span`
  font-size: 1.125rem;
  font-weight: 900;
  color: ${e=>e.theme.colors.textMain};

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`,z=t.button`
  background-color: ${e=>e.theme.colors.textMain}; /* По умолчанию темная */
  color: ${e=>e.theme.colors.white};
  padding: 0.625rem;
  border-radius: ${e=>e.theme.borderRadius.small};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: ${e=>e.theme.colors.primary};
    box-shadow: ${e=>e.theme.shadows.button};
  }

  &:active {
    transform: scale(0.9);
  }

  @media (min-width: 640px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  ${e=>e.isAnimated&&g`
    /* Применяем анимацию successPulse */
    /* duration: 1s (1 секунда) */
    /* timing-function: ease-out (плавно замедляется в конце) */
    animation: ${u} 1s ease-out forwards;
    
    /* Отключаем ховер-эффекты и скейл во время анимации */
    pointer-events: none; 
    &:hover {
      background-color: #059669; 
    }
  `}
`,B=t.span`
  display: none;
  @media (min-width: 640px) {
    display: inline;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;function S({product:e}){const{addToCart:l}=x(),[i,c]=a.useState(e.variants?.[0]||{img:e.image}),[d,s]=a.useState(!1),m=r=>{r.preventDefault(),r.stopPropagation(),l({...e,selectedColor:i.color,image:i.img}),s(!0),setTimeout(()=>{s(!1)},1e3)},h=(r,n)=>{r.preventDefault(),r.stopPropagation(),c(n)};return o.jsxs(w,{to:`/product/${e.slug}`,style:{textDecoration:"none",color:"inherit"},children:[o.jsx($,{children:o.jsx(y,{src:i.img,alt:e.name})}),o.jsx(k,{children:e.name}),o.jsx(v,{children:e.description}),e.variants&&o.jsx(j,{children:e.variants.map((r,n)=>o.jsx(C,{bgColor:r.color,isActive:i.color===r.color,onClick:p=>h(p,r),title:r.colorName||""},n))}),o.jsxs(A,{children:[o.jsxs(P,{children:[e.price," ₴"]}),o.jsxs(z,{onClick:m,isAnimated:d,children:[o.jsx(B,{children:"Купити"}),o.jsx("span",{style:{marginLeft:"4px"},children:"🛒"})]})]})]})}export{S as P};
