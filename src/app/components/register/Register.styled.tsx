import styled from '@emotion/styled';
import Image from 'next/image';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }
`;

export const FormIMG = styled(Image)`
  width: 100%;
  height: auto;
  margin-top: 20px;
  border-radius: 30px;
`;

export const FormBox = styled.div`
  margin-top: 10px;
  padding: 27px 20px;
  background-color: #ffffff;
  border-radius: 30px;
`;

export const FormTitle = styled.h1`
  margin-bottom: 12px;
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
  text-align: left;
  color: #262626;
`;

export const FormText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: left;
  color: #262626;
`;
