import { usePathname } from 'next/navigation';
import logo_mobile_white from '../../assets/images/logo_mobile_white2x.png';
import logo_mobile_dark from '../../assets/images/logo_mobile_dark2x.png';
import {
  LinksItem,
  LinksList,
  LogoImg,
  NavBox,
  StyledLink,
  Wrapper,
} from './Nav.styled';

export default function Nav() {
  const pathName = usePathname();  

  return (
    <>
      {pathName === '/' ? (
        <Wrapper>
          <StyledLink href="/">
            <LogoImg
              src={logo_mobile_white}
              alt="petlove logo"
              priority={true}
            />
          </StyledLink>
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
        </Wrapper>
      ) : (
        <Wrapper>
          <StyledLink href="/">
            <LogoImg
              src={logo_mobile_dark}
              alt="petlove logo"
              priority={true}
            />
          </StyledLink>
          <NavBox>
            <LinksList>
              <LinksItem style={{ border: '1px solid rgba(38, 38, 38, 0.15)' }}>
                <StyledLink style={{ color: '#262626' }} href="/news">
                  News
                </StyledLink>
              </LinksItem>
              <LinksItem style={{ border: '1px solid rgba(38, 38, 38, 0.15)' }}>
                <StyledLink style={{ color: '#262626' }} href="/notices">
                  Find pet
                </StyledLink>
              </LinksItem>
              <LinksItem style={{ border: '1px solid rgba(38, 38, 38, 0.15)' }}>
                <StyledLink style={{ color: '#262626' }} href="/friends">
                  Our friends
                </StyledLink>
              </LinksItem>
            </LinksList>
          </NavBox>
        </Wrapper>
      )}
    </>
  );
}
