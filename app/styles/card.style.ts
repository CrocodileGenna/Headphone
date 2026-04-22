// import styled from '@emotion/styled';
// import { Link } from 'react-router';

// export const ImageBox = styled.div`
//   background-color: #f8fafc;
//   border-radius: 0.75rem;
//   margin-bottom: 1rem;
//   overflow: hidden;
//   aspect-ratio: 1 / 1;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: background-color 0.3s;
// `;

// export const Image = styled.img`
//   object-fit: contain;
//   width: 100%;
//   height: 100%;
//   mix-blend-mode: multiply;
//   transition: transform 0.5s;
// `;

// export const Wrapper = styled(Link)`
//   background-color: white;
//   border: 1px solid #f1f5f9;
//   padding: 1rem;
//   border-radius: 1rem;
//   box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   transition: all 0.3s ease-in-out;
//   cursor: pointer;

//   &:hover {
//     box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
//     transform: translateY(-4px);

//     & > div:first-of-type {
//       background-color: #eff6ff;
//     }
//   }

//   @media (min-width: 768px) {
//     padding: 1.25rem;
//   }
// `;

// export const Title = styled.h3`
//   font-size: 1rem;
//   font-weight: 700;
//   color: #0f172a;
//   margin-bottom: 0.25rem;
//   display: -webkit-box;
//   -webkit-line-clamp: 1;
//   -webkit-box-orient: vertical;
//   overflow: hidden;

//   @media (min-width: 768px) {
//     font-size: 1.125rem;
//   }
// `;

// export const Description = styled.p`
//   color: #64748b;
//   font-size: 0.75rem;
//   margin-bottom: 1rem;
//   line-height: 1.625;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
// `;

// export const Footer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: auto;
//   padding-top: 0.5rem;
// `;

// export const Price = styled.span`
//   font-size: 1.125rem;
//   font-weight: 900;
//   color: #0f172a;

//   @media (min-width: 768px) {
//     font-size: 1.25rem;
//   }
// `;

// export const BuyButton = styled.button`
//   background-color: #0f172a;
//   color: white;
//   padding: 0.625rem;
//   border-radius: 0.5rem;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.2s;

//   &:hover {
//     background-color: #2563eb;
//   }

//   &:active {
//     transform: scale(0.9);
//   }

//   @media (min-width: 640px) {
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
// `;

// export const ButtonText = styled.span`
//   display: none;
//   @media (min-width: 640px) {
//     display: inline;
//     font-size: 0.75rem;
//     font-weight: 700;
//     text-transform: uppercase;
//     letter-spacing: 0.05em;
//   }
// `;

// export const ColorVariants = styled.div`
//   display: flex;
//   gap: 8px;
//   margin-bottom: 12px;
// `;

// export const ColorCircle = styled.button<{ bgColor: string; isActive: boolean }>`
//   width: 18px;
//   height: 18px;
//   border-radius: 50%;
//   background-color: ${props => props.bgColor};
  
//   border: 1px solid #000000; 
  
//   box-shadow: inset 0 0 0 2px #ffffff; 
  
//   cursor: pointer;
//   padding: 0;
//   transition: all 0.2s ease;
//   position: relative;

//   // ${props => props.isActive && `
//   //   transform: scale(1.2);
//   //   box-shadow: inset 0 0 0 2px #ffffff, 0 0 0 1px #2563eb; /* Добавляем синее кольцо снаружи */
//   // `}

//   &:hover {
//     transform: scale(1.2);
//     border-color: #000000; /* Гарантируем черный при ховере */
//   }
// `;

import styled from '@emotion/styled';
import { Link } from 'react-router';
import { keyframes, css } from '@emotion/react';
const successPulse = keyframes`
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
`;
interface BuyButtonProps {
  isAnimated?: boolean;
}
export const Wrapper = styled(Link)`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.border};
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.card};
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
`;

export const ImageBox = styled.div`
  background-color: ${props => props.theme.colors.backgroundSoft};
  border-radius: ${props => props.theme.borderRadius.medium};
  margin-bottom: 1rem;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
  transition: transform 0.5s;
`;

export const Title = styled.h3`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 1rem;
  font-weight: 700;
  color: ${props => props.theme.colors.textMain};
  margin-bottom: 0.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.textBody};
  font-size: 0.75rem;
  margin-bottom: 1rem;
  line-height: 1.625;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ColorVariants = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

export const ColorCircle = styled.button<{ bgColor: string; isActive: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: ${props => props.theme.borderRadius.full};
  background-color: ${props => props.bgColor};
  
  /* Используем цвет границы из темы */
  border: 1px solid ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.border}; 
  
  box-shadow: inset 0 0 0 2px ${props => props.theme.colors.white}; 
  
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;
  position: relative;

  ${props => props.isActive && `
    transform: scale(1.2);
    border-width: 2px;
  `}

  &:hover {
    transform: scale(1.2);
    border-color: ${props => props.theme.colors.textMain};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 0.5rem;
`;

export const Price = styled.span`
  font-size: 1.125rem;
  font-weight: 900;
  color: ${props => props.theme.colors.textMain};

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const BuyButton = styled.button<BuyButtonProps>`
  background-color: ${props => props.theme.colors.textMain}; /* По умолчанию темная */
  color: ${props => props.theme.colors.white};
  padding: 0.625rem;
  border-radius: ${props => props.theme.borderRadius.small};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.button};
  }

  &:active {
    transform: scale(0.9);
  }

  @media (min-width: 640px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  ${props => props.isAnimated && css`
    /* Применяем анимацию successPulse */
    /* duration: 1s (1 секунда) */
    /* timing-function: ease-out (плавно замедляется в конце) */
    animation: ${successPulse} 1s ease-out forwards;
    
    /* Отключаем ховер-эффекты и скейл во время анимации */
    pointer-events: none; 
    &:hover {
      background-color: #059669; 
    }
  `}
`;

export const ButtonText = styled.span`
  display: none;
  @media (min-width: 640px) {
    display: inline;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;