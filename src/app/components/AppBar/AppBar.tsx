'use client';

import { usePathname } from 'next/navigation';
import Nav from '../Nav/Nav';
import { AppBox, Box, BurgerMenuIcon, Wrapper } from './AppBar.styled';
import { useState } from 'react';
import AuthNav from '../AuthNav/AuthNav';
import UserBar from '../userBar/UserBar';
import BurgerMenu from '../burgerMenu/BurgerMenu';

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
