import { usePathname } from 'next/navigation';
import {
  ButtonList,
  CloseCross,
  LinkLogIn,
  LinkReg,
  LinksBox,
  LinksItem,
  LinksList,
  StyledLink,
  StyledMenu,
} from './BurgerMenu.styled';

export interface IBurgerMenu {
  menuIsOpen: boolean;
  closeModal: () => void;
}

export default function BurgerMenu({ menuIsOpen, closeModal }: IBurgerMenu) {
  const pathName = usePathname();

  return (
    <>
      <StyledMenu
        isOpen={menuIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Burger menu"
      >
        <CloseCross onClick={closeModal} />
        <nav>
          <LinksList>
            <LinksItem>
              <StyledLink
                href="/news"
                style={
                  pathName === '/news'
                    ? { border: '1px solid #f6b83d' }
                    : { border: '1px solid rgba(38, 38, 38, 0.15)' }
                }
              >
                News
              </StyledLink>
            </LinksItem>
            <LinksItem>
              <StyledLink
                href="/notices"
                style={
                  pathName === '/notices'
                    ? { border: '1px solid #f6b83d' }
                    : { border: '1px solid rgba(38, 38, 38, 0.15)' }
                }
              >
                Find pet
              </StyledLink>
            </LinksItem>
            <LinksItem>
              <StyledLink
                href="/friends"
                style={
                  pathName === '/friends'
                    ? { border: '1px solid #f6b83d' }
                    : { border: '1px solid rgba(38, 38, 38, 0.15)' }
                }
              >
                Our friends
              </StyledLink>
            </LinksItem>
          </LinksList>
          <LinksBox>
            <ButtonList>
              <LinkLogIn href="/login">LOG IN</LinkLogIn>
              <LinkReg href="/register">REGISTRATION</LinkReg>
            </ButtonList>
          </LinksBox>
        </nav>
      </StyledMenu>
    </>
  );
}
