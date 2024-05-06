import styled from '@emotion/styled';

export const Box = styled.div`
  padding: 0px 20px;
  padding-bottom: 20px;
  margin-top: 40px;
  border-radius: 30px;
  background-color: #fff4df;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
`;

export const FlexWrapper = styled.div`
  
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;


export const FiltersBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 8px;
  margin-bottom: 12px;
`;
