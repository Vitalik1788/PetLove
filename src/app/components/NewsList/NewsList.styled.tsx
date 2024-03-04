import styled from '@emotion/styled';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
`;

export const StyledItem = styled.li`
  gap: 24px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }
`;
