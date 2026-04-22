// export const s = {
//   section: "max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16",
//   header: "text-center mb-10 md:mb-16",
//   title: "text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 uppercase tracking-tight",
//   desc: "text-slate-500 max-w-md mx-auto text-sm md:text-base",
  
//  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8",
// };

import styled from '@emotion/styled';

export const CatalogSection = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 64px; // Мобильные отступы
  
  @media (min-width: 768px) {
    padding: 80px 24px; // Десктопные отступы
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 28px;
  font-weight: 800;
  color: ${props => props.theme.colors.textMain};
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.secondary};
  max-width: 450px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); // 1 колонка на мобилках
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr); // 2 колонки на планшетах
    gap: 24px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr); // 4 колонки на десктопах
    gap: 32px;
  }
`;