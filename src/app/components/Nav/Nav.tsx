import { usePathname } from 'next/navigation';
import logo_mobile_white from '../../assets/images/logo_mobile_white2x.png';
import logo_mobile_dark from '../../assets/images/logo_mobile_dark2x.png';
import { BurgerMenuIcon, LogoImg, Wrapper } from './Nav.styled';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { useState } from 'react';

export default function Nav() {
  const pathName = usePathname();
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
    <>
      {pathName === '/' ? (
        <Wrapper>
          <LogoImg src={logo_mobile_white} alt="petlove logo" priority={true} />
          <BurgerMenuIcon style={{ color: '#ffffff' }} onClick={openModal} />
        </Wrapper>
      ) : (
        <Wrapper>
          <LogoImg src={logo_mobile_dark} alt="petlove logo" priority={true} />
          <BurgerMenuIcon style={{ color: '#262626' }} onClick={openModal} />
        </Wrapper>
      )}
      <BurgerMenu menuIsOpen={menuIsOpen} closeModal={closeModal} />
    </>
  );
}
