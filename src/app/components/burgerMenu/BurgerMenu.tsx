import AuthNav from '../AuthNav/AuthNav';
import {
  CloseCross,
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
        </nav>
        <AuthNav />
      </StyledMenu>
    </>
  );
}
