'use client';

import { usePathname } from 'next/navigation';
import Nav from '../Nav/Nav';
import { Wrapper } from './AppBar.styled';

export default function AppBar() {
  const pathName = usePathname();


  return (
    <Wrapper
      style={
        pathName === '/'
          ? { backgroundColor: '#f6b83d' }
          : { backgroundColor: '#F9F9F9' }
      }
    >
      <Nav />
    </Wrapper>
  );
}
