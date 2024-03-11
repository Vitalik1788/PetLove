import React from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';
import Link from 'next/link';

export const MainStyledMenu = styled(Modal)`
  position: relative;
  height: 100%;
  width: 218px;
  margin-left: auto;
  background-color: #ffffff;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 374px;
  }
`;

export const SecondStyledMenu = styled(Modal)`
  position: relative;
  height: 100%;
  width: 218px;
  margin-left: auto;
  background-color: #f6b83d;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 374px;
  }
`;

export const CloseCross = styled(MdClose)`
  position: absolute;
  top: 28px;
  right: 20px;
  width: 32px;
  height: 32px;
  color: #262626;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 236px;
  list-style: none;
`;

export const LinksItem = styled.li``;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 119px;
  height: 48px;
  border-radius: 30px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #262626;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 50px;
    font-size: 16px;
  }
`;

export const LinksBox = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0px 20px 40px;
`;

export const ButtonList = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
`;

export const LinkLogIn = styled(Link)`
  display: block;
  padding: 12px 0;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.03em;
  text-decoration: none;
  text-align: center;
  border-radius: 30px;
  color: #ffffff;
  background-color: #f6b83d;

  @media screen and (min-width: 768px) {
    padding: 15px 35px;
    font-size: 16px;
    margin-bottom: 0;
  }
`;

export const LinkReg = styled(Link)`
  display: block;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.03em;
  text-align: center;
  text-decoration: none;
  border-radius: 30px;
  color: #f6b83d;
  background-color: #fff4df;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 15px 20px;
  }
`;

export const LogoutBtn = styled.button`
  display: block;
  width: 100%;
  padding: 12px 60px;
  background-color: #fff4df;
  outline: none;
  border: transparent;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #f6b83d;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 15px 20px;
  }
`;
