import Link from 'next/link';
import styled from '@emotion/styled';

export const NavBox = styled.nav`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0px 20px 40px;

  @media screen and (min-width: 768px) {
    padding: 0px 49px 40px;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  list-style: none;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LinksItemLog = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42px;
  border-radius: 30px;
  background-color: #f6b83d;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #f9b020;
  }

  @media screen and (min-width: 768px) {
    width: fit-content;
    height: auto;
    padding: 15px 35px;
  }
`;

export const LinksItemReg = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42px;
  border-radius: 30px;
  background-color: #fff4df;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #fbe7c1;
  }

  @media screen and (min-width: 768px) {
    width: fit-content;
    height: auto;
    padding: 15px 35px;
  }
`;

export const StyledLinkLog = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  white-space: nowrap;
`;

export const StyledLinkReg = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  color: #f6b83d;
  text-decoration: none;
`;
