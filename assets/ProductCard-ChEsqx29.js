import{L as x,a as c,p as o}from"./chunk-EPOLDU6W-BnE-iRIc.js";import{u as b}from"./CartContext-DyTmtp-C.js";import{s as t,u}from"./useTranslation-WiU9NkHO.js";import{k as f,c as w}from"./products-Dq0SDbSy.js";const $=f`
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
`,y=t.div`
  background-color: ${e=>e.theme.colors.white};
  border: 1px solid ${e=>e.theme.colors.border};
  padding: 1rem;
  border-radius: ${e=>e.theme.borderRadius.large};
  box-shadow: ${e=>e.theme.shadows.card};
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease-in-out;
  // cursor: pointer;
  text-decoration: none;
  color: inherit;

  // &:hover {
  //   box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  //   // transform: translateY(-4px);

  //   & > div:first-of-type {
  //     background-color: #eff6ff; /* Оставляем легкий голубой акцент при наведении */
  //   }
  // }

  @media (min-width: 768px) {
    padding: 1.25rem;
  }
`,k=t.div`
  background-color: ${e=>e.theme.colors.backgroundSoft};
  border-radius: ${e=>e.theme.borderRadius.medium};
  margin-bottom: 1rem;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
`,v=t.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
  transition: transform 0.5s;
`,j=t.h3`
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
`,C=t.p`
  font-family: ${e=>e.theme.fonts.main};
  color: ${e=>e.theme.colors.textBody};
  font-size: 0.75rem;
  margin-bottom: 1rem;
  line-height: 1.625;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,A=t.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`,P=t.button`
  width: 35px; 
  height: 35px; 
  border-radius: 50%; 
  background: ${e=>e.bgColor}; 
  box-shadow:  ${e=>e.theme.shadows.card};
  cursor: pointer; border: 2px solid ${e=>e.isActive?"#2563eb":"transparent"};
  outline: 2px solid #fff;
  border: 3px solid ${e=>e.isActive?e.theme.colors.primary:e.theme.colors.border}; 

  // width: 18px;
  // height: 18px;
  // border-radius: ${e=>e.theme.borderRadius.full};
  // background-color: ${e=>e.bgColor};
  
  // /* Используем цвет границы из темы */
  // border: 1px solid ${e=>e.isActive?e.theme.colors.primary:e.theme.colors.border}; 
  
  // box-shadow: inset 0 0 0 2px ${e=>e.theme.colors.white}; 
  
  // cursor: pointer;
  // padding: 0;
  // transition: all 0.2s ease;
  // position: relative;

  // ${e=>e.isActive&&`
  //   transform: scale(1.2);
  //   border-width: 2px;
  // `}

  // &:hover {
  //   transform: scale(1.2);
  //   border-color: ${e=>e.theme.colors.textMain};
  // }
`,z=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 0.5rem;
`,T=t.span`
  font-size: 1.125rem;
  font-weight: 900;
  color: ${e=>e.theme.colors.textMain};

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`,B=t.button`
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

  ${e=>e.isAnimated&&w`
    /* Применяем анимацию successPulse */
    /* duration: 1s (1 секунда) */
    /* timing-function: ease-out (плавно замедляется в конце) */
    animation: ${$} 1s ease-out forwards;
    
    /* Отключаем ховер-эффекты и скейл во время анимации */
    pointer-events: none; 
    &:hover {
      background-color: #059669; 
    }
  `}
`,D=t.span`
  display: none;
  @media (min-width: 640px) {
    display: inline;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`,R=t(x)`
  display: block;
  text-align: center;
  margin-top: 15px;
  padding: 10px;
  color: #2563eb;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid #2563eb;
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    background: #2563eb;
    color: white;
  }
`;function E({product:e}){const{addToCart:d}=b(),{t:i}=u(),[s,m]=c.useState(e.variants?.[0]||{img:e.image}),[h,l]=c.useState(!1),p=r=>{r.preventDefault(),r.stopPropagation();const n=i(`catalog.products.${e.slug}.price`),a=s.img.startsWith("/")?s.img:`/${s.img}`;d({...e,selectedColor:s.color,image:a,price:Number(n)}),l(!0),setTimeout(()=>l(!1),1e3)},g=(r,n)=>{r.preventDefault(),r.stopPropagation(),m(n)};return o.jsxs(y,{to:`/product/${e.slug}`,style:{textDecoration:"none",color:"inherit"},children:[o.jsx(k,{children:o.jsx(v,{src:s.img,alt:e.name})}),o.jsx(j,{children:e.name}),o.jsx(C,{children:i(`catalog.products.${e.slug}.description`)}),e.variants&&o.jsx(A,{children:e.variants.map((r,n)=>o.jsx(P,{bgColor:r.color,isActive:s.color===r.color,onClick:a=>g(a,r),title:r.colorName||""},n))}),o.jsxs(z,{children:[o.jsxs(T,{children:[i(`catalog.products.${e.slug}.price`),i("catalog.currency")]}),o.jsxs(B,{onClick:p,isAnimated:h,children:[o.jsx(D,{children:i("catalog.buy")}),o.jsx("span",{style:{marginLeft:"4px"},children:"🛒"})]})]}),o.jsx(R,{to:`/product/${e.slug}`,children:i("catalog.view_details")||"Перейти до товару"})]})}export{E as P};
