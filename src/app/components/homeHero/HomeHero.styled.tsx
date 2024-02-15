import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: #f6b83d;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 50px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding-top: 112px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 44px;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    width: 100%;
    min-width: 1216px;
    padding-left: 64px;
    padding-right: 64px;
    padding-bottom: 32px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 50px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 77px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 760px;
    font-size: 90px;
    line-height: 87px;
    margin-bottom: 0;
  }
`;

export const TextSpan = styled.span`
  font-size: 50px;
  font-weight: 800;
  line-height: 48px;
  letter-spacing: -0.03em;
  text-align: left;
  color: rgba(255, 255, 255, 0.4);

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 77px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 90px;
    line-height: 87px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    max-width: 255px;
    margin-left: auto;
    font-size: 18px;
    line-height: 1.22;
    align-self: flex-end;
  }
`;
