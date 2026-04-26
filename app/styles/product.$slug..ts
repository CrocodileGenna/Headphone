// import styled from '@emotion/styled';
// import { keyframes, css } from '@emotion/react';
// const successPulse = keyframes`
//   0% {
//     background-color: #10b981; /* Зеленый цвет (например, Emerald 500) */
//     transform: scale(1);
//   }
//   50% {
//     background-color: #059669; /* Чуть темнее зеленый в середине */
//     transform: scale(1.03); /* Легкое увеличение для эффекта нажатия */
//   }
//   100% {
//     /* Цвет возвращается к исходному значению, 
//        которое задано в основном стиле кнопки ниже */
//     transform: scale(1);
//   }
// `;
// interface BuyButtonProps {
//   isAnimated?: boolean;
// }
// export const PageWrapper = styled.div`
//   background: ${props => props.theme.colors.white};
// `;

// export const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 24px;
// `;

// // Секція Хіро
// export const HeroSection = styled.section`
//   padding: 80px 0;
//   background: ${props => props.theme.colors.backgroundSoft};
// `;

// export const HeroGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 48px;
//   align-items: center;

//   @media (min-width: 768px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `;

// export const ImageBox = styled.div`
//   display: flex;
//   justify-content: center;
//   background: ${props => props.theme.colors.white};
//   border-radius: 32px;
//   // padding: 40px;
//   box-shadow: ${props => props.theme.shadows.card};
// `;

// export const MainImage = styled.img`
//   max-width: 100%;
//   height: auto;
//   object-fit: contain;
// `;

// export const InfoBox = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const Badge = styled.span`
//   background: ${props => props.theme.colors.primary};
//   color: ${props => props.theme.colors.white};
//   padding: 4px 12px;
//   border-radius: ${props => props.theme.borderRadius.full};
//   font-size: 12px;
//   font-family: ${props => props.theme.fonts.main};
//   width: fit-content;
//   margin-bottom: 16px;
// `;

// export const Title = styled.h1`
//   font-family: ${props => props.theme.fonts.accent};
//   font-size: 32px;
//   font-weight: 800;
//   color: ${props => props.theme.colors.textMain};
//   margin-bottom: 8px;
// `;

// export const Price = styled.div`
//   font-family: ${props => props.theme.fonts.main};
//   font-size: 24px;
//   color: ${props => props.theme.colors.primary};
//   font-weight: 700;
//   margin-bottom: 24px;
// `;

// export const Description = styled.p`
//   font-family: ${props => props.theme.fonts.main};
//   color: ${props => props.theme.colors.textBody};
//   line-height: 1.6;
//   margin-bottom: 32px;
// `;

// // Селектор кольорів
// export const VariantSelector = styled.div`
//   margin-bottom: 32px;
// `;

// export const SectionLabel = styled.p`
//   font-family: ${props => props.theme.fonts.main};
//   font-weight: 700;
//   color: ${props => props.theme.colors.textMain};
//   margin-bottom: 12px;
//   font-size: 14px;
// `;

// export const ColorGrid = styled.div`
//   display: flex;
//   gap: 12px;
// `;

// export const ColorCircle = styled.div<{ bgColor: string; isActive: boolean }>`
//   width: 36px;
//   height: 36px;
//   border-radius: 50%;
//   background-color: ${props => props.bgColor};
//   cursor: pointer;
//   /* Используем цвет primary для активной обводки */
//   border: 2px solid ${props => props.isActive ? props.theme.colors.primary : 'transparent'};
//   box-shadow: inset 0 0 0 2px ${props => props.theme.colors.white};
//   transition: all 0.2s ease;

//   &:hover {
//     transform: scale(1.1);
//   }
// `;

// export const BuyButton = styled.button<BuyButtonProps>`
//   background: ${props => props.theme.colors.primary};
//   color: ${props => props.theme.colors.white};
//   padding: 16px 32px;
//   border-radius: ${props => props.theme.borderRadius.medium};
//   font-family: ${props => props.theme.fonts.main};
//   font-weight: 700;
//   border: none;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   box-shadow: ${props => props.theme.shadows.button};

//   &:hover {
//     background: ${props => props.theme.colors.primaryHover};
//     transform: translateY(-2px);
//   }
//       ${props => props.isAnimated && css`
//     /* Применяем анимацию successPulse */
//     /* duration: 1s (1 секунда) */
//     /* timing-function: ease-out (плавно замедляется в конце) */
//     animation: ${successPulse} 1s ease-out forwards;
    
//     /* Отключаем ховер-эффекты и скейл во время анимации */
//     pointer-events: none; 
//     &:hover {
//       background-color: #059669; 
//     }
//   `}
// `;

// // Секція деталей
// export const DetailsSection = styled.section`
//   padding: 100px 0;
// `;

// export const DetailsGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 60px;
//   align-items: center;

//   @media (min-width: 768px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `;

// export const DetailsText = styled.div``;

// export const SecondaryTitle = styled.h2`
//   font-family: ${props => props.theme.fonts.accent};
//   font-size: 28px;
//   font-weight: 700;
//   color: ${props => props.theme.colors.textMain};
//   margin-bottom: 20px;
// `;

// export const FullDescription = styled.p`
//   font-family: ${props => props.theme.fonts.main};
//   color: ${props => props.theme.colors.secondary};
//   font-size: 18px;
//   line-height: 1.8;
// `;

// export const DetailsImage = styled.img`
//   width: 100%;
//   border-radius: 24px;
//   box-shadow: ${props => props.theme.shadows.card};
// `;

// // Відео секція
// export const VideoSection = styled.section`
//   padding: 80px 0;
//   background: ${props => props.theme.colors.backgroundAlt};
// `;

// export const VideoWrapper = styled.div`
//   position: relative;
//   padding-bottom: 56.25%; /* 16:9 ratio */
//   height: 0;
//   border-radius: 24px;
//   overflow: hidden;
//   box-shadow: 0 20px 40px rgba(0,0,0,0.1);
// `;

import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

const successPulse = keyframes`
  0% { background-color: #10b981; transform: scale(1); }
  50% { background-color: #059669; transform: scale(1.03); }
  100% { transform: scale(1); }
`;

export const PageWrapper = styled.div`
  background: #ffffff;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

// --- БЛОК 1: HERO (Фото с описанием) ---
export const HeroBanner = styled.section<{ src: string }>`
  height: 60vh;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0)), url(${props => props.src});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
`;

export const HeroContent = styled.div`
  max-width: 600px;
  h1 { font-size: 3rem; margin-bottom: 1.5rem; }
  p { font-size: 1.2rem; line-height: 1.6; }
`;

// --- БЛОК 2: PRODUCT INFO (Покупка) ---
export const ProductMainSection = styled.section`
  padding: 80px 0;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  @media (min-width: 768px) { grid-template-columns: 1fr 1fr; }
`;

export const ImageBox = styled.div`
  img { width: 100%; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StatusTag = styled.span<{ available: boolean }>`
  color: ${props => props.available ? '#10b981' : '#ef4444'};
  font-weight: 600;
  &::before { content: '● '; }
`;

export const BuyButton = styled.button<{ $isAnimated?: boolean }>`
  padding: 1rem 2rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  ${props => props.$isAnimated && css`animation: ${successPulse} 1s ease-out forwards;`}
`;

// --- БЛОК 3: INFOGRAPHIC ---
export const InfoGraphicSection = styled.section`
  padding: 80px 0;
  background: #f8fafc;
`;

export const InfoGraphicGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: center;
  @media (min-width: 768px) { grid-template-columns: 1fr 1.2fr; }
`;

export const List = styled.ol`
  list-style: none;
  counter-reset: my-counter;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListItem = styled.li`
  counter-increment: my-counter;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  font-size: 1.1rem;
  &::before {
    content: counter(my-counter) ".";
    font-weight: 800;
    color: #2563eb;
    font-size: 1.5rem;
  }
`;

// --- БЛОК 4: VIDEO ---
export const VideoSection = styled.section`
  padding: 80px 0;
`;

export const VideoWrapper = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
`;

// Повторные стили (Title, ColorGrid и т.д.) оставить из старого файла...
export const Title = styled.h2` font-size: 2.5rem; color: #1e293b; `;
export const Price = styled.div` font-size: 1.8rem; font-weight: 700; `;
export const ColorGrid = styled.div` display: flex; gap: 12px;`;
export const ColorCircle = styled.div<{ bgColor: string; isActive: boolean }>`
  width: 35px; height: 35px; border-radius: 50%; background: ${props => props.bgColor}; box-shadow:  ${props => props.theme.shadows.card};
  cursor: pointer; border: 2px solid ${props => props.isActive ? '#2563eb' : 'transparent'};
  outline: 2px solid #fff;
`;