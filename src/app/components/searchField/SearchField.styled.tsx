import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { FiSearch } from 'react-icons/fi';

export const FormBox = styled(Form)`
  position: relative;
`;

export const StyledField = styled(Field)`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 24px;
  padding: 12px;
  border-radius: 30px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  background-color: inherit;
  outline: none;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.03em;
  text-align: left;

  ::placeholder {
    color: rgba(38, 38, 38, 0.5);
  }

  :hover,
  :focus,
  :active {
    border: 1px solid #f6b83d;
  }

  @media screen and (min-width: 768px) {
    width: 230px;
    padding: 14px;
    font-size: 16px;
    line-height: 1.25;
    margin: 0;
  }
`;

export const SearchIconBox = styled.button`
  position: absolute;
  top: 33px;
  right: 34px;
  width: 0;
  height: 0;
  border: none;
  outline: none;
  background-color: inherit;

  @media screen and (min-width: 768px) {
    top: 16px;
  }
`;

export const SearchIcon = styled(FiSearch)`
  width: 18px;
  height: 18px;
`;

export const CleanCrossBox = styled.button`
  position: absolute;
  top: 33px;
  right: 36px;
  border: none;
  outline: none;
  background-color: inherit;

  @media screen and (min-width: 768px) {
    top: 16px;
  }
`;

export const CleanCrossIcon = styled.svg`
  width: 18px;
  height: 18px;
`;
