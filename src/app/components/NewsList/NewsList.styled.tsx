import styled from '@emotion/styled';

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: 44px;
  }
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(335px, auto);
  grid-row-gap: 24px;
  list-style: none;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(340px, auto);
    grid-row-gap: 32px;
    grid-column-gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(361px, auto);
    grid-row-gap: 40px;
    grid-column-gap: 35px;
  }
`;

export const StyledItem = styled.li`
  @media screen and (min-width: 768px) {
    padding-bottom: 28px;
  }
`;
