import styled from '@emotion/styled';

export const AboutWrapper = styled.div`
  padding-top: 80px; /* Отступ под хедер */
`;

export const Section = styled.section`
  padding: 80px 0;
  &:nth-of-type(even) {
    background-color: #f8fafc;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.textMain};
`;

// Блок описания
export const IntroText = styled.p`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.secondary};
`;

// Сетка для грамот
export const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  
  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transition: transform 0.3s ease;
    &:hover { transform: translateY(-5px); }
  }
`;

// Блок партнеров
export const PartnersFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  opacity: 0.7;

  img {
    height: 50px;
    filter: grayscale(100%);
    transition: all 0.3s ease;
    &:hover {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
`;

export const FullWidthImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; /* Центрування на великих екранах */
  padding: 40px 0; /* Невеликі відступи зверху/знизу за бажанням */
`;

export const AdaptiveImage = styled.img`
  width: 100%;        /* На мобільних займає всю ширину */
  height: auto;       /* Зберігає пропорції */
  display: block;
  
  @media (min-width: 1500px) {
    width: 1500px;    /* Максимальна ширина на десктопі */
    border-radius: 20px; /* Можна додати заокруглення для краси на десктопі */
  }
`;