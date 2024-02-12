import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

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
    width: 1216px;
    
  }
`;
