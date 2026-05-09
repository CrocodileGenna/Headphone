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
  ${props => props.$isAnimated && css`
    animation: ${successPulse} 1s ease-out forwards;
  `}
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
  width: 35px; 
  height: 35px; 
  border-radius: 50%; 
  background: ${props => props.bgColor}; 
  box-shadow:  ${props => props.theme.shadows.card};
  cursor: pointer; border: 2px solid ${props => props.isActive ? '#2563eb' : 'transparent'};
  outline: 2px solid #fff;
  border: 3px solid ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.border}; 

  // width: 18px;
  // height: 18px;
  // border-radius: ${props => props.theme.borderRadius.full};
  // background-color: ${props => props.bgColor};
  
  // /* Используем цвет границы из темы */
  // border: 1px solid ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.border}; 
  
  // box-shadow: inset 0 0 0 2px ${props => props.theme.colors.white}; 
  
  // cursor: pointer;
  // padding: 0;
  // transition: all 0.2s ease;
  // position: relative;

  // // ${props => props.isActive && `
  // //   transform: scale(1.2);
  // //   border-width: 2px;
  // // `}

  // // &:hover {
  // //   transform: scale(1.2);
  // //   border-color: ${props => props.theme.colors.textMain};
  // // }
`;