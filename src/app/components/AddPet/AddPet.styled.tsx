import styled from '@emotion/styled';
import { GoPlus } from 'react-icons/go';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const Title = styled.h2`
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #2b2b2a;
`;

export const AddPetButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #ffffff;
  background-color: #f6b83d;
  outline: none;
  border: transparent;
  border-radius: 30px;
`;

export const PlusIcon = styled(GoPlus)`
  width: 18px;
  height: 18px;
  margin-left: 4px;
`;
