// import styled from '@emotion/styled';

// export const Section = styled.section`
//   background-color: #f8fafc; /* slate-50 */
//   padding: 3rem 0;           /* py-12 */
//   border-top: 1px solid #f1f5f9;
//   border-bottom: 1px solid #f1f5f9;

//   @media (min-width: 768px) {
//     padding: 5rem 0;         /* md:py-20 */
//   }
// `;

// export const Container = styled.div`
//   max-width: 1152px;         /* max-w-6xl */
//   margin: 0 auto;
//   padding: 0 1.5rem;         /* px-6 */
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 3rem;                 /* gap-12 */
//   align-items: center;

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 4rem;               /* md:gap-16 */
//   }
// `;

// export const Content = styled.div`
//   text-align: center;

//   @media (min-width: 768px) {
//     text-align: left;
//   }
// `;

// export const Title = styled.h2`
//   font-size: 1.5rem;         /* text-2xl */
//   font-weight: 800;
//   color: #0f172a;           /* slate-900 */
//   margin-bottom: 1.5rem;
//   line-height: 1.25;

//   @media (min-width: 768px) {
//     font-size: 1.875rem;     /* text-3xl */
//   }

//   @media (min-width: 1024px) {
//     font-size: 2.25rem;      /* text-4xl */
//   }
// `;

// export const Text = styled.p`
//   color: #475569;           /* slate-600 */
//   line-height: 1.625;
//   font-size: 0.875rem;      /* text-sm */
//   margin-bottom: 2rem;
//   max-width: 42rem;
//   margin-left: auto;
//   margin-right: auto;

//   @media (min-width: 768px) {
//     font-size: 1rem;
//     margin-left: 0;
//     margin-right: 0;
//   }
// `;

// export const BenefitsGrid = styled.div`
//   display: grid;
//   gap: 1.5rem;               /* gap-6 */
// `;

// export const BenefitCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   padding: 1.25rem;          /* p-5 */
//   background-color: #ffffff;
//   border-radius: 1rem;       /* 16px */
//   box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
//   border: 1px solid #f8fafc;
//   transition: box-shadow 0.2s ease;

//   &:hover {
//     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//   }

//   @media (min-width: 640px) {
//     flex-direction: row;
//     align-items: flex-start;
//     text-align: left;
//     gap: 1rem;               /* space-x-4 */
//   }
// `;

// export const IconWrapper = styled.span`
//   font-size: 1.875rem;       /* text-3xl */
//   background-color: #eff6ff; /* blue-50 */
//   width: 3.5rem;             /* 56px */
//   height: 3.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 0.75rem;    /* 12px */
//   flex-shrink: 0;
//   margin-bottom: 0.75rem;

//   @media (min-width: 640px) {
//     margin-bottom: 0;
//   }
// `;

// export const BenefitTitle = styled.h4`
//   font-weight: 700;
//   color: #0f172a;
//   margin-bottom: 0.25rem;
// `;

// export const BenefitDesc = styled.p`
//   color: #64748b;           /* slate-500 */
//   font-size: 0.75rem;       /* text-xs */
//   line-height: 1.625;
//   margin: 0;
// `;

import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${props => props.theme.colors.backgroundSoft};
  padding: 3rem 0;
  border-top: 1px solid ${props => props.theme.colors.border};
  border-bottom: 1px solid ${props => props.theme.colors.border};

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
`;

export const Content = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 1.5rem;
  font-weight: 800;
  color: ${props => props.theme.colors.textMain};
  margin-bottom: 1.5rem;
  line-height: 1.25;

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.25rem;
  }
`;

export const Text = styled.p`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.textBody};
  line-height: 1.625;
  font-size: 0.875rem;
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const BenefitsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const BenefitCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.25rem;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.card};
  border: 1px solid ${props => props.theme.colors.backgroundSoft};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-color: ${props => props.theme.colors.border};
  }

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    gap: 1rem;
  }
`;

export const IconWrapper = styled.span`
  font-size: 1.875rem;
  background-color: ${props => props.theme.colors.backgroundAlt};
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius.small};
  flex-shrink: 0;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.colors.primary};

  @media (min-width: 640px) {
    margin-bottom: 0;
  }
`;

export const BenefitTitle = styled.h4`
  font-family: ${props => props.theme.fonts.main};
  font-weight: 700;
  color: ${props => props.theme.colors.textMain};
  margin-bottom: 0.25rem;
`;

export const BenefitDesc = styled.p`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.secondary};
  font-size: 0.75rem;
  line-height: 1.625;
  margin: 0;
`;