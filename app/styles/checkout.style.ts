import styled from '@emotion/styled';

export const PageContainer = styled.div`
  max-width: 1000px;
  margin: 120px auto 60px;
  padding: 0 20px;
  font-family: sans-serif;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  &:focus { outline: none; border-color: #2563eb; }
`;

export const SubmitBtn = styled.button`
  padding: 16px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  &:hover { background: #1d4ed8; }
`;

export const Summary = styled.div`
  background: #f8fafc;
  padding: 30px;
  border-radius: 20px;
  height: fit-content;
`;

export const OrderItem = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  img { width: 60px; height: 60px; border-radius: 8px; object-fit: cover; }
  p { margin: 0; font-weight: 600; font-size: 0.9rem; }
  span { color: #64748b; font-size: 0.85rem; }
`;

export const TotalBlock = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
`;

export const SectionTitle = styled.h3`
  margin: 10px 0 15px;
  font-size: 1.1rem;
  color: #1e293b;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  gap: 10px;
  font-size: 0.85rem;
  color: #64748b;
  align-items: flex-start;
  margin: 10px 0;
  cursor: pointer;
`;

export const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 2.2rem;
`;

export const OrderList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;