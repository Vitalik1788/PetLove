import styled from "@emotion/styled";

export const ListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(335px, auto);
  grid-row-gap: 20px;
  grid-column-gap: 0;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 32px;
    grid-column-gap: 40px;
  }
`;