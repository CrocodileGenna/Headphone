import styled from '@emotion/styled';

export const FeaturedSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 2.5rem;
  font-weight: 800;
  color: ${props => props.theme.colors.textMain};
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  // &::after {
  //   content: '';
  //   position: absolute;
  //   bottom: -10px;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   width: 60px;
  //   height: 4px;
  //   background-color: ${props => props.theme.colors.primary};
  //   border-radius: 2px;
  // }
`;

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;