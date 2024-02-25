import styled from '@emotion/styled';
import Link from 'next/link';

export const LinksList = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;

  @media screen and (max-width: 1279px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.03em;
  text-align: center;
  border-radius: 30px;
  text-decoration: none;
`;
