import styled from '@emotion/styled';

export const LayoutBox = styled.div`
  margin-left: auto;
  margin-right: auto;  
  padding: 28px 0px 0px;
  margin-top: 10px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    padding: 32px 0px 0px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    min-width: 1216px;
    padding: 32px 64px 0px;
  }
  
`;
