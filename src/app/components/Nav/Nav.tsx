import { usePathname } from 'next/navigation';
import logo_mobile_white from '../../assets/images/logo_mobile_white2x.png';
import logo_mobile_dark from '../../assets/images/logo_mobile_dark2x.png';
import {
  AuthBox,
  BurgerMenuIcon,
  LinksItem,
  LinksList,
  LogoImg,
  NavBox,
  StyledLink,
  Wrapper,
} from './Nav.styled';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { useState } from 'react';
import AuthNav from '../AuthNav/AuthNav';

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
          <NavBox>
            <LinksList>
              <LinksItem
                style={{ border: '1px solid rgba(255, 255, 255, 0.4)' }}
              >
                <StyledLink style={{ color: '#FFFFFF' }} href="/news">
                  News
                </StyledLink>
              </LinksItem>
              <LinksItem
                style={{ border: '1px solid rgba(255, 255, 255, 0.4)' }}
              >
                <StyledLink style={{ color: '#FFFFFF' }} href="/notices">
                  Find pet
                </StyledLink>
              </LinksItem>
              <LinksItem
                style={{ border: '1px solid rgba(255, 255, 255, 0.4)' }}
              >
                <StyledLink style={{ color: '#FFFFFF' }} href="/friends">
                  Our friends
                </StyledLink>
              </LinksItem>
            </LinksList>
          </NavBox>
          <AuthBox>
            <AuthNav />
          </AuthBox>
        </Wrapper>
      ) : (
        <Wrapper>
          <LogoImg src={logo_mobile_dark} alt="petlove logo" priority={true} />
          <BurgerMenuIcon style={{ color: '#262626' }} onClick={openModal} />
          <NavBox>
            <LinksList>
              <LinksItem
                style={{ border: '1px solid rgba(38, 38, 38, 0.15)' }}
              >
                <StyledLink style={{ color: '#262626' }} href="/news">
                  News
                </StyledLink>
              </LinksItem>
              <LinksItem
                style={{ border: '1px solid rgba(38, 38, 38, 0.15)' }}
              >
                <StyledLink style={{ color: '#262626' }} href="/notices">
                  Find pet
                </StyledLink>
              </LinksItem>
              <LinksItem
                style={{ border: '1px solid rgba(38, 38, 38, 0.15)' }}
              >
                <StyledLink style={{ color: '#262626' }} href="/friends">
                  Our friends
                </StyledLink>
              </LinksItem>
            </LinksList>
          </NavBox>
          <AuthBox>
            <AuthNav />
          </AuthBox>
        </Wrapper>
      )}
      <BurgerMenu menuIsOpen={menuIsOpen} closeModal={closeModal} />
    </>
  );
}
