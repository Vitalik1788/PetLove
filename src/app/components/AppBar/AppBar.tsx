'use client';

import { usePathname } from 'next/navigation';
import Nav from '../Nav/Nav';
import {
  AppBox,
  Box,
  BurgerMenuIcon,
  LogoImg,
  MainWrapper,
  RestLayoutWrapper,
} from './AppBar.styled';
import { useEffect, useState } from 'react';
import AuthNav from '../AuthNav/AuthNav';
import UserBar from '../userBar/UserBar';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import logo_mobile_white from '../../assets/images/logo_mobile_white2x.png';
import logo_mobile_dark from '../../assets/images/logo_mobile_dark2x.png';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import { selectIsLoggedin, selectRefresh } from '@/redux/auth/authSelectors';
import { userRefresh } from '@/redux/auth/authOperations';
import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';

export default function AppBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [approveModalOpen, setApproveModalOpen] = useState(false);

  const pathName = usePathname();
  const isLoggedIn = useAppSelector(selectIsLoggedin);
  const isRefreshing = useAppSelector(selectRefresh);
  const dispatch = useAppDispatch();

  function openModal() {
    setMenuIsOpen(true);
    document.body.style.overflowY = 'hidden';
  }

  function closeModal() {
    setMenuIsOpen(false);
    document.body.style.overflowY = 'unset';
  }

  function openApproveModal() {
    setApproveModalOpen(true);
    document.body.style.overflowY = 'hidden';
  }

  function closeApproveModal() {
    setApproveModalOpen(false);
    document.body.style.overflowY = 'unset';
  }

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        {pathName === '/' ? (
          <MainWrapper>
            <AppBox>
              <Link href="/">
                <LogoImg
                  src={logo_mobile_white}
                  alt="petlove logo"
                  priority={true}
                />
              </Link>
              <Nav />
              <Box>
                {!isLoggedIn ? (
                  <AuthNav />
                ) : (
                  <UserBar openApproveModal={openApproveModal} />
                )}
                <BurgerMenuIcon
                  style={{ color: '#ffffff' }}
                  onClick={openModal}
                />
              </Box>
            </AppBox>
          </MainWrapper>
        ) : (
          <RestLayoutWrapper>
            <AppBox>
              <Link href="/">
                <LogoImg
                  src={logo_mobile_dark}
                  alt="petlove logo"
                  priority={true}
                />
              </Link>
              <Nav />
              <Box>
                {!isLoggedIn ? (
                  <AuthNav />
                ) : (
                  <UserBar openApproveModal={openApproveModal} />
                )}
                <BurgerMenuIcon
                  style={{ color: '#262626' }}
                  onClick={openModal}
                />
              </Box>
            </AppBox>
          </RestLayoutWrapper>
        )}
        <BurgerMenu
          menuIsOpen={menuIsOpen}
          closeModal={closeModal}
          openApproveModal={openApproveModal}
        />
        <ModalApproveAction
          approveModalOpen={approveModalOpen}
          closeApproveModal={closeApproveModal}
        />
      </>
    )
  );
}
