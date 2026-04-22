

// import styled from '@emotion/styled';
// import { Link } from 'react-router';
// import { motion } from 'framer-motion';

// export const StyledHeader = styled.header`
//   background-color: rgba(255, 255, 255, 0.9);
//   backdrop-filter: blur(12px);
//   -webkit-backdrop-filter: blur(12px);
//   border-bottom: 1px solid #e2e8f0;
//   position: sticky;
//   top: 0;
//   z-index: 100;
//   width: 100%;
// `;

// export const Container = styled.div`
//   max-width: 72rem; /* max-w-6xl */
//   margin: 0 auto;
//   padding: 0.75rem 1rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   @media (min-width: 768px) {
//     padding: 1rem 1.5rem;
//   }
// `;

// // export const Logo = styled(Link)`
// //   font-size: 1.125rem;
// //   font-weight: 700;
// //   letter-spacing: -0.025em;
// //   color: #2563eb;
// //   text-transform: uppercase;
// //   z-index: 60;
// //   text-decoration: none;

// //   @media (min-width: 768px) {
// //     font-size: 1.25rem;
// //   }
    

// //   span {
// //     color: #0f172a; /* text-slate-900 */
// //   }
// // `;

// export const Logo = styled(Link)`
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   text-decoration: none;
//   z-index: 60;
// `;

// export const LogoImage = styled.img`
//   width: 70px; 
//   height: 70px;
//   object-fit: contain;

//   @media (min-width: 768px) {
//     width: 84px;
//     height: 84px;
//   }
// `;

// export const LogoTextGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative; 
//   line-height: 0.9; 
  
//   .top {
//     font-size: 1.5rem;
//     font-weight: 900;
//     color: #2563eb;
//     letter-spacing: -1px;
//   }

//   .bottom {
//     font-size: 1.1rem;
//     font-weight: 900;
//     color: #0f172a;
//     letter-spacing: -1px;
//   }

//   @media (min-width: 768px) {
//     .top, .bottom {
//       font-size: 1.8rem;
//     }
//   }
// `;

// export const CommunityTag = styled.div`
//   position: absolute;
//   top: 75%;
//   left: 77%;
//   transform: translate(-50%, -50%);
  
//   background-color: #ffffff; 
//   color: #000000;
//   font-size: 0.6rem;
//   font-weight: 400;
//   text-transform: uppercase;
//   padding: 1px 1px;
//   white-space: nowrap;
//   letter-spacing: 1px;
//   pointer-events: none;
 

//   @media (min-width: 768px) {
//     font-size: 0.7rem;
//     padding: 3px 8px;
//   }
// `;

// export const Nav = styled.nav`
//   display: none;
  
//   @media (min-width: 768px) {
//     display: flex;
//     gap: 2rem;
//     font-weight: 500;
//     font-size: 0.875rem;
//     color: #475569;
//   }
// `;

// export const NavLink = styled(Link)`
//   text-decoration: none;
//   color: inherit;
//   transition: color 0.2s;
//   @media (min-width: 768px) {
//     font-size: 0.9rem; /* ~14px - компактно для небольших экранов */
//   }

//   @media (min-width: 1024px) {
//     font-size: 1rem; /* ~16px - стандартный размер для чтения */
//   }
//   &:hover {
//     color: #2563eb;
//   }
// `;

// export const Actions = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   z-index: 100;
//   position: relative;
//   @media (min-width: 768px) {
//     gap: 1rem;
//   }
// `;

// export const CartBtn = styled.button`
//   position: relative;
//   border: none;
//   background: transparent;
//   border-radius: 9999px;
//   transition: background-color 0.2s;
//   color: #334155;
//   cursor: pointer;

//   font-size: 0.875rem;
//   padding: 0.5rem 0.75rem;

//   @media (min-width: 768px) {
//     font-size: 1rem; 
//     padding: 0.5rem 1rem;
//   }

//   &:hover {
//     background-color: #f1f5f9;
//   }
// `;

// export const Badge = styled.span`
//   position: absolute;
//   top: -0.25rem;
//   right: -0.25rem;
//   background-color: #3b82f6;
//   color: white;
//   padding: 0.125rem 0.375rem;
//   border-radius: 9999px;
//   font-weight: 700;
//   box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

//   font-size: 0.7rem;
//   width: 1.25rem;
//   height: 1.25rem;
//   @media (min-width: 768px) {
//     font-size: 0.75rem; /* ~12px */
//     width: 1.5rem;
//     height: 1.5rem;
//   }
// `;

// export const BurgerBtn = styled.button`
//   cursor: pointer;
//   position: relative;
//   z-index: 1001;
//   background: transparent;
//   border: none;
//   display: flex;
//   flex-direction: column;
//   gap: 0.375rem;
//   padding: 0.5rem;

//   &:focus {
//     outline: none;
//   }

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

// /* Динамические стили для линий бургера в зависимости от пропса isOpen */
// export const BurgerLine = styled.div<{ isOpen: boolean }>`
//   width: 1.5rem;
//   height: 0.125rem;
//   background-color: #0f172a;
//   border-radius: 9999px;
//   transition: all 0.3s;

//   // ${({ isOpen }) => isOpen && `
//   //   &:nth-of-type(1) {
//   //     transform: rotate(45deg) translateY(0.5rem);
//   //   }
//   //   &:nth-of-type(2) {
//   //     opacity: 0;
//   //   }
//   //   &:nth-of-type(3) {
//   //     transform: rotate(-45deg) translateY(-0.5rem);
//   //   }
//   `}
// `;
// export const MobileCloseBtn = styled.button`
//   position: absolute;
//   top: 0rem;
//   right: 1rem;
//   width: 3.5rem;
//   height: 3.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: none;
//   border-radius: 9999px;
//   cursor: pointer;
//   z-index: 100;
//   color: #0f172a;
//   font-size: 3.1rem;
//   font-weight: 150;
//   transition: all 0.2s;
// `;
// export const MobileMenuWrapper = styled(motion.div)`
//   position: fixed;
//   inset: 0;
//   z-index: 900;

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

// export const MobileBackdrop = styled.div`
//   position: absolute;
//   inset: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   backdrop-filter: blur(12px);
//   -webkit-backdrop-filter: blur(12px);
//   z-index: -1;
// `;

// export const MobilePanel = styled(motion.div)`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   width: 80%;
//   background-color: white;
//   box-shadow: 0 25px 50px -12px rgba(209, 50, 50, 0.25);
//   overflow-y: auto;
//   z-index: 9991;
// `;

// export const MobileHeader = styled.div`
//   padding: 3rem 1rem 1rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//    &::after {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     left: 5%; 
//     right: 5%; 
//     height: 1px;
//     background-color: #b1b1b1; 
// `;

// export const MobileLogoWrapper = styled(Link)`
//   position: relative; 
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-decoration: none;
//   width: 100%;
//   padding: 1rem 0;
// `;

// export const MobileLogoPocke = styled.span`
//   color: #2563eb;
// `;

// export const MobileLogoFresh = styled.span`
//   color: #0f172a;
// `;

// export const MobileLogoO = styled.span`
//  position: absolute;
//   top: 280%;
//   left: 70%;
//   transform: translate(-50%, -50%); 
//   z-index: 1.5; 
//   opacity: 0.13; 
//   width: 400px; 
//   height: 400px;

//   @media (min-width: 408px) {
//     width: 500px; 
//     height: 500px;
//   }
//   @media (min-width: 680px) {
//     width: 600px; 
//     height: 600px;
//   }

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//   }
// `;
// export const TextContent = styled.div`
//   position: relative;
//   z-index: 2; 
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// export const MainTitleRow = styled.div`
//  display: flex;
//   font-weight: 900;
//   letter-spacing: -2px;
//   line-height: 1;
//   font-size: 2.5rem; 
// `;
// export const MobileSubtitle = styled.p`
//   margin-top: -4px; 
//   color: #64748b;
//   font-size: 1.4rem;
//   font-weight: 400;
//   text-transform: uppercase;
//   letter-spacing: 4px; 
// `;

// export const MobileNav = styled.div`
//   padding: 3rem ;
//   display: flex;
//   flex-direction: column;
//   gap: 2.5rem;
  
//    position: relative;
//    &::after {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     left: 5%; 
//     right: 5%; 
//     height: 1px;
//     background-color: #b1b1b1;
// `;

// export const MobileLink = styled(Link)`
//   font-size: 1.375rem;
//   font-weight: 500;
//   color: #0f172a;
//   text-decoration: none;
//   transition: all 0.3s;

//   @media (min-width: 429px) {
//     font-size: 1.475rem;
//     font-weight: 550;
//   }
// `;

// export const MobileSocials = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1.4rem; 
//   margin-top: 3rem;
//   padding-bottom: 2rem;
//   @media (min-width: 429px) {
//     gap: 1.7rem;
//   }
// `;

// export const SocialIcon = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-decoration: none;
//   color: #2563eb; 
//   transition: all 0.3s ease;
//   background: none; 
//   border: none; 

//   img {
//     width: 35px;  
//     height: 35px;
//     fill: currentColor; 

//     @media (min-width: 429px) {
//     width: 40px;  
//     height: 40px;
//   }
//   }
// `;

import styled from '@emotion/styled';
import { Link } from 'react-router';
import { NavLink as RouterNavLink } from 'react-router';
import { motion } from 'framer-motion';

export const StyledHeader = styled.header`
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${props => props.theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

// export const Logo = styled(Link)`
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   text-decoration: none;
//   z-index: 60;
// `;

// export const LogoImage = styled.img`
//   width: 50px; 
//   height: 50px;
//   object-fit: contain;

//   @media (min-width: 768px) {
//     width: 84px;
//     height: 84px;
//   }
// `;

// export const LogoTextGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative; 
//   line-height: 0.9; 
//   font-family: ${props => props.theme.fonts.accent};
  
//   .top {
//     font-size: 1.5rem;
//     font-weight: 900;
//     color: ${props => props.theme.colors.primary};
//     letter-spacing: -1px;
//   }

//   .bottom {
//     font-size: 1.1rem;
//     font-weight: 900;
//     color: ${props => props.theme.colors.textMain};
//     letter-spacing: -1px;
//   }

//   @media (min-width: 768px) {
//     .top, .bottom {
//       font-size: 1.8rem;
//     }
//   }
// `;
export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 60;
  /* Убираем лишние отступы, так как картинки больше нет */
  padding: 0; 
`;

export const LogoTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative; 
  /* Плотно сжимаем строки для эффекта единого блока */
  line-height: 0.85; 
  font-family: ${props => props.theme.fonts.accent};
  
  .top {
    font-size: 1.6rem; /* Немного увеличим, так как теперь это главный элемент */
    font-weight: 900;
    color: ${props => props.theme.colors.primary};
    letter-spacing: -1.5px; /* Более агрессивный кернинг для стиля */
    text-transform: uppercase;
  }

  .bottom {
    font-size: 1.2rem;
    font-weight: 900;
    color: ${props => props.theme.colors.textMain};
    letter-spacing: -1px;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    .top {
      font-size: 2.2rem;
    }
    .bottom {
      font-size: 1.6rem;
    }
  }
`;

export const CommunityTag = styled.span`
  position: absolute;
  /* Смещаем "2.0" к правому верхнему углу или в конец текста */
  top: 0;
  right: -25px; 
  
  background-color: ${props => props.theme.colors.primary}; 
  color: ${props => props.theme.colors.white};
  font-size: 0.6rem;
  font-weight: 800;
  padding: 2px 4px;
  border-radius: 4px;
  line-height: 1;

  @media (min-width: 768px) {
    right: -30px;
    font-size: 0.7rem;
  }
`;

// export const CommunityTag = styled.div`
//   position: absolute;
//   top: 75%;
//   left: 77%;
//   transform: translate(-50%, -50%);
//   background-color: ${props => props.theme.colors.white}; 
//   color: ${props => props.theme.colors.textMain};
//   font-size: 0.6rem;
//   font-weight: 400;
//   text-transform: uppercase;
//   padding: 1px 1px;
//   white-space: nowrap;
//   letter-spacing: 1px;
//   pointer-events: none;

//   @media (min-width: 768px) {
//     font-size: 0.7rem;
//     padding: 3px 8px;
//   }
// `;

export const Nav = styled.nav`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    margin-right: auto;
    margin-left: 55px;
    gap: 2rem;
    font-weight: 500;
    font-size: 0.875rem;
    color: ${props => props.theme.colors.textBody};
  }
`;

export const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;
  font-family: ${props => props.theme.fonts.main};

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
    &.active {
    color: ${props => props.theme.colors.primary};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${props => props.theme.colors.primary};
      border-radius: 2px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 100;
  position: relative;
  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

export const CartBtn = styled.button`
  position: relative;
  border: none;
  background: transparent;
  border-radius: ${props => props.theme.borderRadius.full};
  transition: background-color 0.2s;
  color: ${props => props.theme.colors.textBody};
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;

  @media (min-width: 768px) {
    font-size: 1rem; 
    padding: 0.5rem 1rem;
  }

  &:hover {
    background-color: ${props => props.theme.colors.backgroundAlt};
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 0.125rem 0.375rem;
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: 700;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  font-size: 0.7rem;
  width: 1.25rem;
  height: 1.25rem;

  @media (min-width: 768px) {
    font-size: 0.75rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const BurgerBtn = styled.button`
  cursor: pointer;
  position: relative;
  z-index: 1001;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 0.5rem;

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BurgerLine = styled.div<{ isOpen: boolean }>`
  width: 1.5rem;
  height: 0.125rem;
  background-color: ${props => props.theme.colors.textMain};
  border-radius: ${props => props.theme.borderRadius.full};
  transition: all 0.3s;

  ${({ isOpen }) => isOpen && `
    &:nth-of-type(1) {
      transform: rotate(45deg) translateY(0.7rem);
    }
    &:nth-of-type(2) {
      opacity: 0;
    }
    &:nth-of-type(3) {
      transform: rotate(-45deg) translateY(-0.7rem);
    }
  `}
`;

export const MobileCloseBtn = styled.button`
  position: absolute;
  top: 0rem;
  right: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${props => props.theme.borderRadius.full};
  cursor: pointer;
  z-index: 100;
  color: ${props => props.theme.colors.textMain};
  font-size: 3.1rem;
  font-weight: 150;
  background: transparent;
  transition: all 0.2s;
`;

export const MobileMenuWrapper = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 900;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: -1;
`;

export const MobilePanel = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 80%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.card};
  overflow-y: auto;
  z-index: 9991;
`;

export const MobileHeader = styled.div`
  padding: 3rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 5%; 
    right: 5%; 
    height: 1px;
    background-color: ${props => props.theme.colors.border};
  }
`;

export const MobileLogoWrapper = styled(Link)`
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  padding: 1rem 0;
`;

export const MobileLogoPocke = styled.span`
  color: ${props => props.theme.colors.primary};
`;

export const MobileLogoFresh = styled.span`
  color: ${props => props.theme.colors.textMain};
`;

export const MobileLogoO = styled.span`
  position: absolute;
  top: 280%;
  left: 70%;
  transform: translate(-50%, -50%); 
  z-index: 1.5; 
  opacity: 0.13; 
  width: 400px; 
  height: 400px;

  @media (min-width: 408px) {
    width: 500px; 
    height: 500px;
  }
  @media (min-width: 680px) {
    width: 600px; 
    height: 600px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 2; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitleRow = styled.div`
  display: flex;
  font-family: ${props => props.theme.fonts.accent};
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1;
  font-size: 2.5rem; 
`;

export const MobileSubtitle = styled.p`
  margin-top: -4px; 
  color: ${props => props.theme.colors.secondary};
  font-size: 1.4rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 4px; 
`;

export const MobileNav = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 5%; 
    right: 5%; 
    height: 1px;
    background-color: ${props => props.theme.colors.border};
  }
`;

export const MobileLink = styled(RouterNavLink)`
  font-family: ${props => props.theme.fonts.main};
  font-size: 1.375rem;
  font-weight: 550;
  color: ${props => props.theme.colors.textMain};
  text-decoration: none;
  transition: all 0.3s;

  @media (min-width: 429px) {
    font-size: 1.475rem;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
    &.active {
    color: ${props => props.theme.colors.primary};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 45%;
      height: 2px;
      background-color: ${props => props.theme.colors.primary};
      border-radius: 2px;
    }
  }  
`;

export const MobileSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.4rem; 
  margin-top: 3rem;
  padding-bottom: 2rem;
  @media (min-width: 429px) {
    gap: 1.7rem;
  }
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${props => props.theme.colors.primary}; 
  transition: all 0.3s ease;
  background: none; 
  border: none; 

  img {
    width: 35px;  
    height: 35px;
    
    @media (min-width: 429px) {
      width: 40px;  
      height: 40px;
    }
  }

  &:hover {
    transform: translateY(-3px);
    color: ${props => props.theme.colors.primaryHover};
  }
`;