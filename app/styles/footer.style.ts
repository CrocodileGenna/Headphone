
// import styled from '@emotion/styled';
// import { Link } from "react-router";

// export const FooterContainer = styled.footer`
//   background-color: #0f172a; /* slate-900 */
//   color: #94a3b8;           /* slate-400 */
//   padding: 3rem 0;          /* py-12 */
//   margin-top: auto;

//   @media (min-width: 768px) {
//     padding: 4rem 0;        /* md:py-16 */
//   }
// `;

// export const Grid = styled.div`
//   max-width: 1152px;        /* max-w-6xl */
//   margin: 0 auto;
//   padding: 0 1.5rem;        /* px-6 */
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 2.5rem;              /* gap-10 */
//   font-size: 0.875rem;      /* text-sm */

//   @media (min-width: 640px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(4, 1fr);
//     gap: 3rem;              /* md:gap-12 */
//   }
// `;

// export const BrandColumn = styled.div`
//   grid-column: span 1;
//   text-align: center;

//   @media (min-width: 640px) {
//     grid-column: span 2;
//   }

//   @media (min-width: 768px) {
//     grid-column: span 1;
//     text-align: left;
//   }
// `;

// export const Logo = styled(Link)`
//   text-decoration: none;
//   display: flex;
//   flex-direction: column;
//   line-height: 0.9;
//   font-weight: 900;
//   text-transform: uppercase;
//   color: #2563eb;           /* Pocket Color */
  
//   span {
//     color: #ffffff;         /* Fresh Color (белый для темного фона) */
//   }

//   @media (max-width: 767px) {
//     align-items: center;
//   }
// `;

// export const BrandText = styled.p`
//   margin-top: 1rem;
//   line-height: 1.625;
//   max-width: 20rem;
//   margin-left: auto;
//   margin-right: auto;

//   @media (min-width: 768px) {
//     margin-left: 0;
//     margin-right: 0;
//   }
// `;

// export const ColumnTitle = styled.h4`
//   color: #ffffff;
//   font-weight: 700;
//   margin-bottom: 1rem;
//   text-transform: uppercase;
//   font-size: 0.75rem;       /* text-xs */
//   letter-spacing: 0.1em;
//   text-align: center;

//   @media (min-width: 768px) {
//     margin-bottom: 1.5rem;
//     text-align: left;
//   }
// `;

// export const Nav = styled.nav`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 0.75rem;             /* space-y-3 */

//   @media (min-width: 768px) {
//     align-items: flex-start;
//   }
// `;

// export const StyledLink = styled(Link)`
//   color: inherit;
//   text-decoration: none;
//   padding: 0.25rem 0;
//   transition: color 0.2s ease;

//   &:hover {
//     color: #ffffff;
//   }
// `;

// export const ContactInfo = styled.div`
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;

//   p {
//     margin: 0;
//   }

//   .address {
//     color: #ffffff;
//   }

//   .email {
//     color: #60a5fa;         /* blue-400 */
//     font-weight: 500;
//   }

//   @media (min-width: 768px) {
//     text-align: left;
//   }
// `;

// export const BottomBar = styled.div`
//   border-top: 1px solid #1e293b; /* slate-800 */
//   margin-top: 2.5rem;
//   padding-top: 2rem;
//   text-align: center;
//   font-size: 0.625rem;      /* 10px */
//   text-transform: uppercase;
//   letter-spacing: 0.05em;

//   @media (min-width: 768px) {
//     margin-top: 3rem;
//     font-size: 0.75rem;     /* text-xs */
//   }
// `;

import styled from '@emotion/styled';
import { Link } from "react-router";

export const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.textMain}; /* Используем темный slate-900 */
  color: ${props => props.theme.colors.secondary};          /* Текст slate-400 */
  padding: 3rem 0;
  margin-top: auto;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;

export const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  font-size: 0.875rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
`;

export const BrandColumn = styled.div`
  grid-column: span 1;
  text-align: center;

  @media (min-width: 640px) {
    grid-column: span 2;
  }

  @media (min-width: 768px) {
    grid-column: span 1;
    text-align: left;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  line-height: 0.9;
  font-weight: 900;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.accent};
  color: ${props => props.theme.colors.primary};
  
  span {
    color: ${props => props.theme.colors.white};
  }

  @media (max-width: 767px) {
    align-items: center;
  }
`;

export const BrandText = styled.p`
  margin-top: 1rem;
  line-height: 1.625;
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
  font-family: ${props => props.theme.fonts.main};

  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ColumnTitle = styled.h4`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.accent};
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
    text-align: left;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 0.25rem 0;
  transition: color 0.2s ease;
  font-family: ${props => props.theme.fonts.main};

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;

export const ContactInfo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    margin: 0;
    font-family: ${props => props.theme.fonts.main};
  }

  .address {
    color: ${props => props.theme.colors.white};
  }

  .email {
    /* Можно использовать primary или завести отдельный светлый оттенок в теме */
    color: #60a5fa; 
    font-weight: 500;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const BottomBar = styled.div`
  border-top: 1px solid ${props => props.theme.colors.border}22; /* Добавляем прозрачности к цвету рамки */
  margin-top: 2.5rem;
  padding-top: 2rem;
  text-align: center;
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${props => props.theme.colors.secondary};

  @media (min-width: 768px) {
    margin-top: 3rem;
    font-size: 0.75rem;
  }
`;