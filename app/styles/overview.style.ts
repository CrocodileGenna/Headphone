// import styled from '@emotion/styled';

// export const Section = styled.section`
//   background-color: #ffffff;
//   padding: 3rem 0;           /* py-12 */

//   @media (min-width: 768px) {
//     padding: 5rem 0;         /* md:py-20 */
//   }
// `;

// export const Container = styled.div`
//   max-width: 1152px;         /* max-w-6xl */
//   margin: 0 auto;
//   padding: 0 1.5rem;         /* px-6 */
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;                 /* gap-8 */
//   align-items: center;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     gap: 4rem;               /* md:gap-16 */
//   }
// `;

// export const VideoBox = styled.div`
//   width: 100%;
//   aspect-ratio: 16 / 9;
//   background-color: #eff6ff; /* blue-50 */
//   border-radius: 1rem;       /* 16px */
//   border: 1px solid #dbeafe; /* blue-100 */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   overflow: hidden;
//   box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

//   @media (min-width: 768px) {
//     width: 50%;
//     border-radius: 1.5rem;   /* 24px */
//   }
// `;

// export const VideoLabel = styled.span`
//   color: #bfdbfe;           /* blue-200 */
//   font-style: italic;
//   font-weight: 900;
//   font-size: 1.25rem;       /* text-xl */
//   text-transform: uppercase;
//   letter-spacing: 0.1em;
// `;

// export const Content = styled.div`
//   width: 100%;
//   text-align: center;

//   @media (min-width: 768px) {
//     width: 50%;
//     text-align: left;
//   }
// `;

// export const Title = styled.h2`
//   font-size: 1.5rem;         /* text-2xl */
//   font-weight: 900;
//   text-transform: uppercase;
//   margin-bottom: 1.5rem;
//   color: #0f172a;           /* slate-900 */

//   @media (min-width: 768px) {
//     font-size: 1.875rem;     /* text-3xl */
//   }
// `;

// export const Description = styled.p`
//   color: #475569;           /* slate-600 */
//   line-height: 1.625;
//   margin-bottom: 2rem;
//   font-size: 0.875rem;      /* text-sm */

//   @media (min-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// export const List = styled.ul`
//   display: inline-block;
//   padding: 0;
//   margin: 0;
//   list-style: none;
//   text-align: left;
  
//   & > * + * {
//     margin-top: 0.75rem;     /* space-y-3 */
//   }

//   @media (min-width: 768px) {
//     display: block;
//     & > * + * {
//       margin-top: 1rem;      /* md:space-y-4 */
//     }
//   }
// `;

// export const ListItem = styled.li`
//   display: flex;
//   align-items: center;
//   font-size: 0.75rem;       /* text-xs */
//   font-weight: 500;
//   color: #334155;           /* slate-700 */

//   @media (min-width: 768px) {
//     font-size: 0.875rem;    /* text-sm */
//   }
// `;

// export const ListIcon = styled.span`
//   color: #2563eb;           /* blue-500 */
//   margin-right: 0.75rem;
//   font-size: 1.125rem;
// `;

import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

export const VideoBox = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: ${props => props.theme.colors.backgroundAlt};
  border-radius: ${props => props.theme.borderRadius.medium};
  border: 1px solid ${props => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.card};

  @media (min-width: 768px) {
    width: 50%;
    border-radius: ${props => props.theme.borderRadius.large};
  }
`;

export const VideoLabel = styled.span`
  font-family: ${props => props.theme.fonts.accent};
  color: ${props => props.theme.colors.secondary};
  font-style: italic;
  font-weight: 900;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.5;
`;

export const Content = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    width: 50%;
    text-align: left;
  }
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.textMain};

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.textBody};
  line-height: 1.625;
  margin-bottom: 2rem;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const List = styled.ul`
  display: inline-block;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: left;
  
  & > * + * {
    margin-top: 0.75rem;
  }

  @media (min-width: 768px) {
    display: block;
    & > * + * {
      margin-top: 1rem;
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fonts.main};
  font-size: 0.75rem;
  font-weight: 500;
  color: ${props => props.theme.colors.textMain};

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const ListIcon = styled.span`
  color: ${props => props.theme.colors.primary};
  margin-right: 0.75rem;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
`;