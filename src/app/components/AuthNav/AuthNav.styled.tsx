import Link from 'next/link';
import styled from '@emotion/styled';

export const NavBox = styled.nav`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0px 20px 40px;
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  list-style: none;
`;

export const LinksItemLog = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42px;
  border-radius: 30px;
  background-color: #f6b83d;
`;

export const LinksItemReg = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42px;
  border-radius: 30px;
  background-color: #fff4df;
`;

export const StyledLinkLog = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
`;

export const StyledLinkReg = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  color: #f6b83d;
  text-decoration: none;
`;
