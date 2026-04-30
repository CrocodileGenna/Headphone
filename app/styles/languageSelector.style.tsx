
import styled from '@emotion/styled';

export const CustomSelectContainer = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
`;

export const SelectedLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
  z-index: 100;
  min-width: 100px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  transition: background 0.2s;

  &:hover {
    background: #2563eb;
  }
`;

export const FlagImg = styled.img`
  width: 20px;
  height: 15px;
  object-fit: cover;
  border-radius: 2px;
`;