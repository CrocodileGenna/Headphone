import styled from '@emotion/styled';

export const ContactsWrapper = styled.div`
  padding: 120px 0 80px;
  background: #f8fafc;
  min-height: 100vh;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  @media (min-width: 992px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
`;

// Блок формы
export const FormCard = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label { font-weight: 600; color: #1e293b; }
  
  input {
    padding: 12px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    outline: none;
    &:focus { border-color: #2563eb; }
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  font-size: 0.9rem;
  color: #64748b;
  input { cursor: pointer; }
`;

// Блок социальных сетей
export const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  background: #fff;
  border-radius: 16px;
  text-decoration: none;
  color: #1e293b;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);

  &:hover {
    transform: translateX(10px);
    background: #2563eb;
    color: #fff;
  }
`;

// Дополнительный блок (Инфо)
export const InfoBox = styled.div`
  margin-top: 40px;
  padding: 25px;
  background: #e2e8f0;
  border-radius: 20px;
  h4 { margin-bottom: 10px; }
  p { font-size: 0.95rem; line-height: 1.6; color: #475569; }
`;