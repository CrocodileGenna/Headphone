// // import styled from '@emotion/styled';

// // export const HeroSection = styled.section`
// //   position: relative;
// //   min-height: 90vh;
// //   display: flex;
// //   align-items: center;
// //   background-color: #ffffff;
// //   overflow: hidden;
// //   padding: 3rem 0; /* py-12 */

// //   @media (min-width: 768px) {
// //     height: 550px;
// //     min-height: auto;
// //     padding: 0;
// //   }
// // `;

// // export const Background = styled.div`
// //   position: absolute;
// //   inset: 0;
// //   background: linear-gradient(to bottom right, #eff6ff, #ffffff, #ecfeff); /* blue-50, white, cyan-50 */
// // `;

// // export const Wrapper = styled.div`
// //   position: relative;
// //   z-index: 10;
// //   max-width: 1152px; /* max-w-6xl */
// //   margin: 0 auto;
// //   padding: 0 1.5rem; /* px-6 */
// //   width: 100%;
// //   display: grid;
// //   grid-template-columns: 1fr;
// //   align-items: center;
// //   gap: 2.5rem; /* gap-10 */

// //   @media (min-width: 768px) {
// //     grid-template-columns: repeat(2, 1fr);
// //     gap: 3rem; /* md:gap-12 */
// //   }
// // `;

// // export const Content = styled.div`
// //   text-align: center;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;

// //   @media (min-width: 768px) {
// //     text-align: left;
// //     align-items: flex-start;
// //   }
// // `;

// // export const Badge = styled.span`
// //   display: inline-block;
// //   padding: 0.25rem 0.75rem;
// //   background-color: #dbeafe; /* blue-100 */
// //   color: #1d4ed8;           /* blue-700 */
// //   font-size: 10px;
// //   font-weight: 700;
// //   text-transform: uppercase;
// //   letter-spacing: 0.05em;
// //   border-radius: 9999px;
// //   margin-bottom: 1.5rem;
// // `;

// // export const Title = styled.h1`
// //   font-size: 1.875rem;       /* text-3xl */
// //   font-weight: 800;
// //   color: #0f172a;           /* slate-900 */
// //   margin-bottom: 1.5rem;
// //   line-height: 1.1;

// //   span {
// //     color: #2563eb;         /* blue-600 */
// //   }

// //   @media (min-width: 640px) {
// //     font-size: 2.25rem;     /* text-4xl */
// //   }

// //   @media (min-width: 768px) {
// //     font-size: 3rem;        /* text-5xl */
// //   }

// //   @media (min-width: 1024px) {
// //     font-size: 3.75rem;     /* text-6xl */
// //   }
// // `;

// // export const Description = styled.p`
// //   color: #475569;           /* slate-600 */
// //   font-size: 1rem;
// //   margin-bottom: 2rem;
// //   line-height: 1.625;
// //   max-width: 28rem;

// //   @media (min-width: 768px) {
// //     font-size: 1.125rem;
// //     max-width: none;
// //   }
// // `;

// // export const Button = styled.button`
// //   width: 100%;
// //   background-color: #2563eb;
// //   color: #ffffff;
// //   font-weight: 600;
// //   padding: 1rem 2.5rem;
// //   border-radius: 0.75rem;   /* 12px */
// //   border: none;
// //   cursor: pointer;
// //   transition: all 0.2s ease;
// //   box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.2);

// //   &:hover {
// //     background-color: #1d4ed8;
// //   }

// //   &:active {
// //     transform: scale(0.95);
// //   }

// //   @media (min-width: 640px) {
// //     width: auto;
// //   }
// // `;

// // export const ImageBox = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   width: 100%;
// // `;

// // export const Placeholder = styled.div`
// //   width: 12rem;             /* 192px */
// //   height: 16rem;            /* 256px */
// //   background: linear-gradient(to top right, #dbeafe, #ffffff);
// //   border-radius: 2rem;
// //   border: 1px solid #ffffff;
// //   box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   color: #bfdbfe;           /* blue-200 */

// //   @media (min-width: 640px) {
// //     width: 15rem;
// //     height: 20rem;
// //   }

// //   @media (min-width: 768px) {
// //     width: 18rem;
// //     height: 24rem;
// //   }
// // `;

// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================



// // import styled from '@emotion/styled';

// // export const HeroSection = styled.section`
// //   position: relative;
// //   min-height: 90vh;
// //   display: flex;
// //   align-items: center;
// //   background-color: ${props => props.theme.colors.white};
// //   overflow: hidden;
// //   padding: 3rem 0;

// //   @media (min-width: 768px) {
// //     height: 550px;
// //     min-height: auto;
// //     padding: 0;
// //   }
// // `;

// // export const Background = styled.div`
// //   position: absolute;
// //   inset: 0;
// //   /* Используем мягкие оттенки из темы для создания градиента */
// //   background: linear-gradient(
// //     to bottom right, 
// //     ${props => props.theme.colors.backgroundSoft}, 
// //     ${props => props.theme.colors.white}, 
// //     ${props => props.theme.colors.backgroundAlt}
// //   );
// // `;

// // export const Wrapper = styled.div`
// //   position: relative;
// //   z-index: 10;
// //   max-width: 1200px;
// //   margin: 0 auto;
// //   padding: 0 1.5rem;
// //   width: 100%;
// //   display: grid;
// //   grid-template-columns: 1fr;
// //   align-items: center;
// //   gap: 2.5rem;

// //   @media (min-width: 768px) {
// //     grid-template-columns: repeat(2, 1fr);
// //     gap: 3rem;
// //   }
// // `;

// // export const Content = styled.div`
// //   text-align: center;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;

// //   @media (min-width: 768px) {
// //     text-align: left;
// //     align-items: flex-start;
// //   }
// // `;

// // export const Badge = styled.span`
// //   display: inline-block;
// //   padding: 0.25rem 0.75rem;
// //   /* Светло-синий фон на основе основного цвета (можно добавить в тему как primaryLight) */
// //   background-color: ${props => props.theme.colors.backgroundSoft}; 
// //   color: ${props => props.theme.colors.primaryHover};
// //   font-size: 10px;
// //   font-weight: 700;
// //   text-transform: uppercase;
// //   letter-spacing: 0.05em;
// //   border-radius: ${props => props.theme.borderRadius.full};
// //   margin-bottom: 1.5rem;
// //   border: 1px solid ${props => props.theme.colors.border};
// // `;

// // export const Title = styled.h1`
// //   font-family: ${props => props.theme.fonts.accent};
// //   font-size: 1.875rem;
// //   font-weight: 800;
// //   color: ${props => props.theme.colors.textMain};
// //   margin-bottom: 1.5rem;
// //   line-height: 1.1;

// //   span {
// //     color: ${props => props.theme.colors.primary};
// //   }

// //   @media (min-width: 640px) {
// //     font-size: 2.25rem;
// //   }

// //   @media (min-width: 768px) {
// //     font-size: 3rem;
// //   }

// //   @media (min-width: 1024px) {
// //     font-size: 3.75rem;
// //   }
// // `;

// // export const Description = styled.p`
// //   font-family: ${props => props.theme.fonts.main};
// //   color: ${props => props.theme.colors.textBody};
// //   font-size: 1rem;
// //   margin-bottom: 2rem;
// //   line-height: 1.625;
// //   max-width: 28rem;

// //   @media (min-width: 768px) {
// //     font-size: 1.125rem;
// //     max-width: none;
// //   }
// // `;

// // export const Button = styled.button`
// //   width: 100%;
// //   background-color: ${props => props.theme.colors.primary};
// //   color: ${props => props.theme.colors.white};
// //   font-family: ${props => props.theme.fonts.main};
// //   font-weight: 600;
// //   padding: 1rem 2.5rem;
// //   border-radius: ${props => props.theme.borderRadius.medium};
// //   border: none;
// //   cursor: pointer;
// //   transition: all 0.2s ease;
// //   box-shadow: ${props => props.theme.shadows.button};

// //   &:hover {
// //     background-color: ${props => props.theme.colors.primaryHover};
// //     transform: translateY(-2px);
// //   }

// //   &:active {
// //     transform: scale(0.95);
// //   }

// //   @media (min-width: 640px) {
// //     width: auto;
// //   }
// // `;

// // export const ImageBox = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   width: 100%;
// // `;

// // export const Placeholder = styled.div`
// //   width: 12rem;
// //   height: 16rem;
// //   background: linear-gradient(
// //     to top right, 
// //     ${props => props.theme.colors.backgroundSoft}, 
// //     ${props => props.theme.colors.white}
// //   );
// //   border-radius: ${props => props.theme.borderRadius.large};
// //   border: 1px solid ${props => props.theme.colors.white};
// //   box-shadow: ${props => props.theme.shadows.card};
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   color: ${props => props.theme.colors.secondary};

// //   @media (min-width: 640px) {
// //     width: 15rem;
// //     height: 20rem;
// //   }

// //   @media (min-width: 768px) {
// //     width: 18rem;
// //     height: 24rem;
// //   }
// // `;
// // export const Image = styled.img`
// //   width: 100%;
// //   height: 100%;
// //   object-fit: cover; 
// //   transition: transform 0.5s ease;

// //   // &:hover {
// //   //   transform: scale(1.05); 
// //   // }
// // `;


// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================
// // =============================================================


// import styled from '@emotion/styled';

// export const HeroSection = styled.section`
//   position: relative;
//   min-height: 80vh; /* Можно регулировать высоту */
//   display: flex;
//   align-items: center;
//   background-color: ${props => props.theme.colors.white};
//   overflow: hidden;
//   padding: 4rem 0;

//   @media (min-width: 768px) {
//     height: 650px;
//     padding: 0;
//   }
// `;

// // Новое: Само изображение на весь блок
// export const HeroImage = styled.img`
//   position: absolute;
//   inset: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: 1;
// `;

// // Новое: Слой затемнения и "растворения" внизу
// export const Overlay = styled.div`
//   position: absolute;
//   inset: 0;
//   z-index: 2;
//   /* Первый градиент: легкое общее затемнение (rgba(0,0,0,0.3))
//      Второй градиент: растворение в белый цвет фона в самом низу
//   */
//   background: linear-gradient(
//       to bottom,
//       rgba(0, 0, 0, 0.4) 0%, 
//       rgba(0, 0, 0, 0.2) 60%,
//       ${props => props.theme.colors.white} 100%
//     );
// `;

// export const Wrapper = styled.div`
//   position: relative;
//   z-index: 10; /* Текст выше всех слоев фона */
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 1.5rem;
//   width: 100%;
// `;

// export const Content = styled.div`
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   /* Добавим тень тексту, чтобы он лучше читался на фото */
//   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

//   @media (min-width: 768px) {
//     text-align: left;
//     align-items: flex-start;
//     max-width: 600px;
//   }
// `;

// export const Badge = styled.span`
//   display: inline-block;
//   padding: 0.25rem 0.75rem;
//   background-color: rgba(255, 255, 255, 0.9); /* Полупрозрачный фон */
//   color: ${props => props.theme.colors.primary};
//   font-size: 10px;
//   font-weight: 700;
//   text-transform: uppercase;
//   letter-spacing: 0.05em;
//   border-radius: ${props => props.theme.borderRadius.full};
//   margin-bottom: 1.5rem;
//   backdrop-filter: blur(4px); /* Эффект матового стекла */
// `;

// export const Title = styled.h1`
//   font-family: ${props => props.theme.fonts.accent};
//   font-size: 2.5rem;
//   font-weight: 800;
//   /* Если фото темное, можно поставить белый цвет: color: #ffffff; */
//   color: ${props => props.theme.colors.textMain}; 
//   margin-bottom: 1.5rem;
//   line-height: 1.1;

//   span {
//     color: ${props => props.theme.colors.primary};
//   }

//   @media (min-width: 768px) {
//     font-size: 4rem;
//   }
// `;

// export const Description = styled.p`
//   font-family: ${props => props.theme.fonts.main};
//   color: ${props => props.theme.colors.textBody};
//   font-size: 1.125rem;
//   margin-bottom: 2.5rem;
//   line-height: 1.6;
//   max-width: 32rem;
// `;

// export const Button = styled.button`
//   background-color: ${props => props.theme.colors.primary};
//   color: ${props => props.theme.colors.white};
//   font-family: ${props => props.theme.fonts.main};
//   font-weight: 700;
//   padding: 1.25rem 3rem;
//   border-radius: ${props => props.theme.borderRadius.medium};
//   border: none;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   box-shadow: ${props => props.theme.shadows.button};

//   &:hover {
//     background-color: ${props => props.theme.colors.primaryHover};
//     transform: translateY(-3px);
//     box-shadow: 0 15px 30px rgba(37, 99, 235, 0.3);
//   }
// `;

import styled from '@emotion/styled';
import { Link } from 'react-router';
import { keyframes } from '@emotion/react';

const progressAnimation = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

// export const HeroSection = styled.section`
//   position: relative;
//   width: 100%;
//   height: 93svh;
//   min-height: 600px;
//   background-color: ${props => props.theme.colors.white};
  
//   @media (min-width: 1024px) {
//     height: 85vh;
//     min-height: 700px;
//   }
//   .swiper-pagination-bullet {
//     background: rgba(0, 0, 0, 0.2);
//     opacity: 1;
//   }
//   .swiper-pagination-bullet-active {
//     background: ${props => props.theme.colors.primary} !important;
//   }
// `;

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 93svh;
  
  .swiper-pagination {
    bottom: 30px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  /* Базовый стиль точки (неактивной) */
  .swiper-pagination-bullet {
    width: 2px;
    height: 2px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    opacity: 1;
    margin: 0 !important;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    width: 50px; 
    background: rgba(255, 255, 255, 0.56); 
  }

  .swiper-pagination-bullet-active .progress {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: ${props => props.theme.colors.primary};
    border-radius: 10px;
    
    /* Анимация: длительность должна совпадать с delay в autoplay (5s) */
    animation: ${progressAnimation} 5s linear forwards;
  }

  /* Адаптация под мобильные: чуть короче полоса */
  @media (min-width: 768px) {
  height: 500px;
    .swiper-pagination-bullet-active {
      width: 80px;
    }
  }
     @media (min-width: 1024px) {
  height: 550px;
  }
    @media (min-width: 1424px) {
  height: 600px;
  }
`;

export const SlideContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Изображение заполнит весь фон */
  z-index: 1;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  /* Градиент создает "подложку" под текст слева и растворяет картинку в белый цвет снизу */
  // background: linear-gradient(
  //   to right,
  //   rgba(255, 255, 255, 0.8) 0%,
  //   rgba(255, 255, 255, 0.2) 60%,
  //   transparent 100%
  // ),
  // linear-gradient(
  //   to bottom,
  //   transparent 70%,
  //   ${props => props.theme.colors.white} 100%
  // );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

export const Wrapper = styled.div`
  // position: relative;
  // z-index: 10;
  // max-width: 1200px;
  // margin: 0 auto;
  // padding: 0 1.5rem;
  // width: 100%;
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem; /* Отступы для безопасности контента */
  width: 100%;
  height: 90%; /* Занимаем 90% высоты для распределения */
  
  /* 2. Мобильное состояние: текст сверху, кнопка снизу, все по центру */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    /* 3. Десктоп: смещение в левую сторону */
    align-items: flex-start;
    text-align: left;
    justify-content: center; /* На десктопе лучше держать контент по центру вертикали или оставить space-between */
    gap: 2rem;
  }
  
`;

export const TextContent = styled.div`
  // max-width: 500px;
  // text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);


  max-width: 500px;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.66);
`;

export const Title = styled.h1`
  // font-family: ${props => props.theme.fonts.accent};
  // font-size: 3.5rem;
  // color: ${props => props.theme.colors.textMain};
  // margin-bottom: 1rem;
  // line-height: 1.1;
  font-family: ${props => props.theme.fonts.accent};
  font-size: 2.5rem;
  color: #ffffff; 
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

export const Button = styled(Link)`
  // display: inline-block;
  // background-color: ${props => props.theme.colors.primary};
  // color: white;
  // padding: 1rem 2.5rem;
  // border-radius: ${props => props.theme.borderRadius.medium};
  // text-decoration: none;
  // font-weight: 700;
  // transition: transform 0.2s ease;

  // &:hover {
  //   transform: translateY(-3px);
  //   background-color: ${props => props.theme.colors.primaryHover};
  // }

  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  width: 100%; /* На мобилках на всю ширину */
  max-width: 300px;

  @media (min-width: 1024px) {
    width: auto; /* На десктопе по размеру текста */
  }

  &:hover {
    transform: translateY(-3px);
    background-color: ${props => props.theme.colors.primaryHover};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const Description = styled.p`
  // font-family: ${props => props.theme.fonts.main};
  // color: ${props => props.theme.colors.textBody};
  // font-size: 1.125rem;
  // margin-bottom: 2.5rem;
  // line-height: 1.6;
  // max-width: 32rem;

  display: none; 
  font-family: ${props => props.theme.fonts.main};
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.225rem;
  line-height: 1.6;
  width: 450px;
  text-shadow: 0 2px 10px rgb(0, 0, 0);

  @media (min-width: 1024px) {
    display: block; /* Появляется только на десктопе */
  }
`;
export const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: rgba(255, 255, 255, 0.9); /* Полупрозрачный фон */
  color: ${props => props.theme.colors.primary};
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${props => props.theme.borderRadius.full};
  margin-bottom: 1.5rem;
  backdrop-filter: blur(4px); /* Эффект матового стекла */
`;
