import styled from '@emotion/styled';
import { BiSolidUser } from 'react-icons/bi';
import { FiEdit2 } from 'react-icons/fi';

export const ComponentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserBtnBox = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 10px 14px;
  background-color: #f6b83d;
  border-radius: 30px;
`;

export const UserTitle = styled.p`
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  margin-left: 4px;
`;

export const IconUser = styled(BiSolidUser)`
  width: 18px;
  height: 18px;
  color: #ffffff;
`;

export const EditBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #fff4df;
`;

export const EditIcon = styled(FiEdit2)`
  width: 18px;
  height: 18px;
  color: #f6b83d;
`;
