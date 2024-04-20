import styled from "@emotion/styled";

export const ListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(335px, auto);
  grid-row-gap: 20px;
  list-style: none;
`;