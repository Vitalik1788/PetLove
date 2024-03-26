import styled from '@emotion/styled';
import Image from 'next/image';

export const Wrapper = styled.div`
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: #f6b83d;
  border-radius: 30px;
  padding: 245px 33px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    border-radius: 60px;
    padding: 221px 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    min-width: 1216px;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Styled4 = styled.p`
  font-family: inherit;
  font-size: 120px;
  font-weight: 800;
  line-height: 1;
  text-align: left;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 300px;
  }
`;

export const StyledCat = styled(Image)`
  display: block;
  width: 109px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 280px;
  }
`;

export const OpsText = styled.p`
  margin-bottom: 20px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const HomeBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 12px 30px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #f6b83d;
  background-color: #fff4df;
  border: transparent;
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    padding: 14px 30px;
    font-size: 16px;
  }
`;
