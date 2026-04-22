// import styled from '@emotion/styled';
// import { motion } from 'framer-motion';

// export const Overlay = styled(motion.div)`
//   position: fixed;
//   inset: 0;
//   background-color: rgba(15, 23, 42, 0.4);
//   backdrop-filter: blur(4px);
//   -webkit-backdrop-filter: blur(4px);
//   z-index: 9995;
// `;

// export const CartPanel = styled(motion.div)`
//   position: fixed;
//   background-color: white;
//   z-index: 9999;
//   display: flex;
//   flex-direction: column;
//   box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

//   /* Мобильная версия: как в хедере */
//   @media (max-width: 767px) {
//     top: 0;
//     bottom: 0;
//     right: 0;
//     width: 80%; /* Такие же пропорции, как у меню */
//     height: 100%;
//   }

//   /* Десктопная версия: окно по центру */
//   @media (min-width: 768px) {
//     top: 50%;
//     left: 50%;
//     /* Центрирование через transform будет обрабатывать framer-motion, 
//        здесь задаем только размеры */
//     width: 500px;
//     max-height: 80vh;
//     border-radius: 24px;
//     overflow: hidden;
//   }
// `;

// export const Header = styled.div`
//   padding: 1.5rem;
//   border-bottom: 1px solid #f1f5f9;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: white;
// `;

// export const Title = styled.h2`
//   font-size: 1.25rem;
//   font-weight: 700;
//   color: #0f172a;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// `;

// export const CloseBtn = styled.button`
//   width: 2.5rem;
//   height: 2.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 9999px;
//   border: none;
//   background: #f8fafc;
//   color: #94a3b8;
//   cursor: pointer;
//   transition: all 0.2s;
//   font-size: 1.5rem;

//   &:hover {
//     background-color: #f1f5f9;
//     color: #0f172a;
//   }
// `;

// export const Content = styled.div`
//   flex-grow: 1;
//   overflow-y: auto;
//   padding: 1.25rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;

//   &::-webkit-scrollbar { width: 4px; }
//   &::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
// `;

// export const Item = styled.div`
//   display: flex;
//   gap: 1rem;
//   padding: 0.75rem;
//   background: #fff;
//   border-radius: 1rem;
//   border: 1px solid #f1f5f9;
// `;

// export const ItemImg = styled.img`
//   width: 4rem;
//   height: 4rem;
//   object-fit: contain;
//   background: #f8fafc;
//   border-radius: 0.5rem;
// `;

// export const ItemInfo = styled.div`
//   flex-grow: 1;
// `;

// export const ItemName = styled.h4`
//   font-weight: 700;
//   font-size: 0.9rem;
//   margin: 0;
// `;

// export const ItemPrice = styled.p`
//   color: #2563eb;
//   font-weight: 800;
//   margin: 4px 0 0;
// `;

// export const RemoveBtn = styled.button`
//   background: none;
//   border: none;
//   color: #cbd5e1;
//   cursor: pointer;
//   &:hover { color: #ef4444; }
// `;

// export const Footer = styled.div`
//   padding: 1.5rem 1.5rem 3.5rem 1.5rem;
//   border-top: 1px solid #f1f5f9;
//   background: #f8fafc;
// `;

// export const TotalRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 1rem;
// `;

// export const CheckoutBtn = styled.button`
//   width: 100%;
//   background: #2563eb;
//   color: white;
//   border: none;
//   padding: 1.25rem;
//   border-radius: 1rem;
//   font-weight: 700;
//   cursor: pointer;
//   transition: 0.3s;
//   &:disabled { opacity: 0.5; filter: grayscale(1); }
//   &:hover:not(:disabled) { background: #1d4ed8; transform: translateY(-2px); }
// `;

import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  /* Используем цвет текста с прозрачностью для оверлея */
  background-color: rgba(15, 23, 42, 0.4); 
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 9995;
`;

export const CartPanel = styled(motion.div)`
  position: fixed;
  background-color: ${props => props.theme.colors.white};
  z-index: 9999;
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.shadows.card};

  /* Мобільна версія */
  @media (max-width: 767px) {
    top: 0;
    bottom: 0;
    right: 0;
    width: 80%;
    height: 100%;
  }

  /* Десктопна версія */
  @media (min-width: 768px) {
    top: 50%;
    left: 50%;
    width: 500px;
    max-height: 80vh;
    border-radius: ${props => props.theme.borderRadius.large};
    overflow: hidden;
  }
`;

export const Header = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.theme.colors.textMain};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CloseBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius.full};
  border: none;
  background: ${props => props.theme.colors.backgroundSoft};
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1.5rem;

  &:hover {
    background-color: ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.textMain};
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &::-webkit-scrollbar { 
    width: 4px; 
  }
  &::-webkit-scrollbar-thumb { 
    background: ${props => props.theme.colors.border}; 
    border-radius: 10px; 
  }
`;

export const Item = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.75rem;
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.medium};
  border: 1px solid ${props => props.theme.colors.border};
`;

export const ItemImg = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  background: ${props => props.theme.colors.backgroundSoft};
  border-radius: ${props => props.theme.borderRadius.small};
`;

export const ItemInfo = styled.div`
  flex-grow: 1;
`;

export const ItemName = styled.h4`
  font-family: ${props => props.theme.fonts.main};
  font-weight: 700;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textMain};
  margin: 0;
`;

export const ItemPrice = styled.p`
  color: ${props => props.theme.colors.primary};
  font-weight: 800;
  margin: 4px 0 0;
`;

export const RemoveBtn = styled.button`
  background: none;
  border: none;
  color: #cbd5e1; /* Можно оставить или вынести в theme.colors.border */
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover { 
    color: ${props => props.theme.colors.error}; 
  }
`;

export const Footer = styled.div`
  padding: 1.5rem 1.5rem 3.5rem 1.5rem;
  border-top: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.backgroundSoft};
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.textMain};
  font-weight: 700;
`;

export const CheckoutBtn = styled.button`
  width: 100%;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: 1.25rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  
  &:disabled { 
    opacity: 0.5; 
    filter: grayscale(1); 
  }
  
  &:hover:not(:disabled) { 
    background: ${props => props.theme.colors.primaryHover}; 
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.button};
  }
`;