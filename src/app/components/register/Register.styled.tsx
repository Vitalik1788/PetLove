import styled from '@emotion/styled';
import { Field } from 'formik';
import Link from 'next/link';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 0;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 32px;
  }
`;

export const FormBox = styled.div`
  margin-top: 10px;
  padding: 27px 20px;
  background-color: #ffffff;
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    padding: 30px 140px;
    border-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    margin-top: 0;
    padding: 69px 84px;
  }
`;

export const FormText = styled.p`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: left;
  color: #262626;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    font-size: 18px;
    line-height: 1.22;
    margin-bottom: 32px;
  }
`;

export const FieldIconBox = styled.div`
  position: relative;
`;

export const FormField = styled(Field)`
  width: 100%;
  padding: 12px;
  border-radius: 30px;
  margin-bottom: 4px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.03em;
  text-align: left;

  @media screen and (min-width: 768px) {
    padding: 16px;
    font-size: 16px;
    margin-bottom: 16px;
  }

  ::placeholder {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.03em;
    text-align: left;
    color: rgba(38, 38, 38, 0.5);
  }

  :hover,
  :focus,
  :active {
    border: 1px solid #f6b83d;
  }
`;

export const IconCheckBox = styled.svg`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 15px;
    width: 22px;
    height: 22px;
  }
`;

export const IconCheckInPassword = styled.svg`
  position: absolute;
  top: 12px;
  right: 36px;
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 42px;
    width: 22px;
    height: 22px;
  }
`;

export const FieldError = styled.p`
  padding-left: 12px;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.03em;
  text-align: left;
`;

export const PasswordBox = styled.div`
  position: relative;
`;

export const FieldIconEye = styled.svg`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 15px;
    width: 22px;
    height: 22px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px 0;
  margin-top: 12px;
  margin-bottom: 12px;
  background-color: #f6b83d;
  border: transparent;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 16px 0;
    font-size: 16px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextToLogin = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -0.03em;
  text-align: left;
  color: rgba(38, 38, 38, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ToLoginLink = styled(Link)`
  margin-left: 3px;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #f6b83d;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
