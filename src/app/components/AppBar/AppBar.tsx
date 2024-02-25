'use client';

import { usePathname } from 'next/navigation';
import Nav from '../Nav/Nav';
import { AppBox, Box, BurgerMenuIcon, LogoImg, Wrapper } from './AppBar.styled';
import { useState } from 'react';
import AuthNav from '../AuthNav/AuthNav';
import UserBar from '../userBar/UserBar';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import logo_mobile_white from '../../assets/images/logo_mobile_white2x.png';
import logo_mobile_dark from '../../assets/images/logo_mobile_dark2x.png';
import Link from 'next/link';

export default function AppBar() {
  const pathName = usePathname();
  const isLoggedIn = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function openModal() {
    setMenuIsOpen(true);
    document.body.style.overflowY = 'hidden';
  }

  function closeModal() {
    setMenuIsOpen(false);
    document.body.style.overflowY = 'unset';
  }

  return (
    <Wrapper
      style={
        pathName === '/'
          ? { backgroundColor: '#f6b83d' }
          : { backgroundColor: '#F9F9F9' }
      }
    >
      <AppBox>
        <Link href="/">
          <LogoImg
            src={pathName === '/' ? logo_mobile_white : logo_mobile_dark}
            alt="petlove logo"
            priority={true}
          />
        </Link>
        <Nav />
        <Box>
          {isLoggedIn ? <AuthNav /> : <UserBar />}
          <BurgerMenuIcon
            style={
              pathName === '/' ? { color: '#ffffff' } : { color: '#262626' }
            }
            onClick={openModal}
          />
        </Box>
      </AppBox>
      <BurgerMenu menuIsOpen={menuIsOpen} closeModal={closeModal} />
    </Wrapper>
  );
}
