import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-top: 18px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding-top: 32px;
    padding-left: 32px;
    padding-right: 32px;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    min-width: 1216px;
    padding-top: 16px;
    padding-left: 64px;
    padding-right: 64px;
  }
`;
