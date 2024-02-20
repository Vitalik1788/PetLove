'use client';

import { usePathname } from 'next/navigation';
import Nav from '../Nav/Nav';
import { Wrapper } from './AppBar.styled';
import { useState } from 'react';
import AuthNav from '../AuthNav/AuthNav';
import UserBar from '../userBar/UserBar';

export default function AppBar() {
  const pathName = usePathname();
  const isLoggedIn = useState(false);


  return (
    <Wrapper
      style={
        pathName === '/'
          ? { backgroundColor: '#f6b83d' }
          : { backgroundColor: '#F9F9F9' }
      }
    >
      <Nav />
      {/* {isLoggedIn ? <AuthNav /> : <UserBar />} */}
    </Wrapper>
  );
}
