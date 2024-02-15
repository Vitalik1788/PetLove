import React from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';
import Link from 'next/link';

export const StyledMenu = styled(Modal)`
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

export const LinksItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 119px;
  height: 48px;
  border-radius: 30px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  cursor: pointer;

  &.active {
    border: 1px solid #f6b83d;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 50px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  color: #262626;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
