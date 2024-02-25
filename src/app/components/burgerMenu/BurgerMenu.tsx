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
              <StyledLink href="/news">News</StyledLink>
            </LinksItem>
            <LinksItem>
              <StyledLink href="/notices">Find pet</StyledLink>
            </LinksItem>
            <LinksItem>
              <StyledLink href="/friends">Our friends</StyledLink>
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
