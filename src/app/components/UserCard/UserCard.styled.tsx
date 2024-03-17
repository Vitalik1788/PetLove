import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
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
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    padding-left: 64px;
    padding-right: 64px;
  }
`;
