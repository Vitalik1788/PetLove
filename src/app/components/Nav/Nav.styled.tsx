import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const LogoImg = styled(Image)`
  max-width: 76px;
  height: auto;

  @media screen and (min-width: 768px) {
    max-width: 106px;
  }
`;

export const BurgerMenuIcon = styled(FiMenu)`
  width: 24px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 30px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const NavBox = styled.nav`
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  margin-left: 80px;
`;

export const LinksItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 119px;
  height: 48px;
  border-radius: 30px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 50px;
  }

  @media screen and (min-width: 1280px) {
    width: fit-content;
    height: auto;
    padding: 15px 20px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    white-space: nowrap;
    font-size: 16px;
  }
`;

export const AuthBox = styled.div`
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;
