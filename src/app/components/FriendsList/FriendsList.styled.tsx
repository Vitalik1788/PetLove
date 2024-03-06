import styled from '@emotion/styled';

export const ListFriends = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;
  margin-top: 40px;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 28px;
  }
`;

export const ItemFriend = styled.li`
  position: relative;
  padding: 40px 20px;
  border-radius: 15px;
  background-color: #ffffff;
`;
