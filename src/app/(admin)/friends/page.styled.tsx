import styled from '@emotion/styled';

export const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 80px;

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
