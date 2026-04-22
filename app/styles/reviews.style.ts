
import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 3rem 0;
  background-color: ${props => props.theme.colors.white};

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.fonts.accent};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.theme.colors.textMain};
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
    font-size: 1.5rem;
  }
`;

export const Divider = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 2rem;
    height: 0.25rem;
    background-color: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.borderRadius.full};
    margin-right: 0.75rem;
  }
`;

export const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

export const ReviewCard = styled.div`
  background-color: ${props => props.theme.colors.backgroundSoft};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  border: 1px solid ${props => props.theme.colors.border};
  font-style: italic;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const QuoteText = styled.p`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.textBody};
  font-size: 0.875rem;
  line-height: 1.625;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Author = styled.p`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.textMain};
  font-weight: 700;
  font-style: normal;
  margin-top: 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const StarWrapper = styled.div`
  /* Для звезд обычно используем золотой, но можно добавить его в theme.colors.warning */
  color: #fbbf24; 
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  font-style: normal;
`;
