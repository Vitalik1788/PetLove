import { usePathname } from 'next/navigation';
import {
  ButtonList,
  CloseCross,
  LinkLogIn,
  LinkReg,
  LinksBox,
  LinksItem,
  LinksList,
  LogoutBtn,
  MainStyledMenu,
  SecondStyledMenu,
  StyledLink,
} from './BurgerMenu.styled';
import { useAppSelector } from '@/app/hooks/hooks';
import { selectIsLoggedin } from '@/redux/auth/authSelectors';

export interface IBurgerMenu {
  menuIsOpen: boolean;
  closeModal: () => void;
  openApproveModal: () => void;
}

export default function BurgerMenu({
  menuIsOpen,
  closeModal,
  openApproveModal,
}: IBurgerMenu) {
  const pathName = usePathname();
  const activeUserPage = usePathname();
  const isLoggedin = useAppSelector(selectIsLoggedin);

  function modalUsage() {
    closeModal();
    openApproveModal();
  }

  return (
    <>
      {pathName === '/' ? (
        <MainStyledMenu
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
                  onClick={closeModal}
                  style={
                    activeUserPage === '/news'
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
                  onClick={closeModal}
                  style={
                    activeUserPage === '/notices'
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
                  onClick={closeModal}
                  style={
                    activeUserPage === '/friends'
                      ? { border: '1px solid #f6b83d' }
                      : { border: '1px solid rgba(38, 38, 38, 0.15)' }
                  }
                >
                  Our friends
                </StyledLink>
              </LinksItem>
            </LinksList>
            <LinksBox>
              {isLoggedin ? (
                <LogoutBtn onClick={modalUsage}>LOG OUT</LogoutBtn>
              ) : (
                <ButtonList>
                  <LinkLogIn href="/login">LOG IN</LinkLogIn>
                  <LinkReg href="/register">REGISTRATION</LinkReg>
                </ButtonList>
              )}
            </LinksBox>
          </nav>
        </MainStyledMenu>
      ) : (
        <SecondStyledMenu
          isOpen={menuIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel="Burger menu"
        >
          <CloseCross style={{ color: '#FFFFFF' }} onClick={closeModal} />
          <nav>
            <LinksList>
              <LinksItem>
                <StyledLink
                  href="/news"
                  onClick={closeModal}
                  style={
                    activeUserPage === '/news'
                      ? {
                          border: '1px solid rgba(255, 255, 255, 0.5)',
                          color: '#FFFFFF',
                        }
                      : {
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#FFFFFF',
                        }
                  }
                >
                  News
                </StyledLink>
              </LinksItem>
              <LinksItem>
                <StyledLink
                  href="/notices"
                  onClick={closeModal}
                  style={
                    activeUserPage === '/notices'
                      ? {
                          border: '1px solid rgba(255, 255, 255, 0.5)',
                          color: '#FFFFFF',
                        }
                      : {
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#FFFFFF',
                        }
                  }
                >
                  Find pet
                </StyledLink>
              </LinksItem>
              <LinksItem>
                <StyledLink
                  href="/friends"
                  onClick={closeModal}
                  style={
                    activeUserPage === '/friends'
                      ? {
                          border: '1px solid rgba(255, 255, 255, 0.5)',
                          color: '#FFFFFF',
                        }
                      : {
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#FFFFFF',
                        }
                  }
                >
                  Our friends
                </StyledLink>
              </LinksItem>
            </LinksList>
            <LinksBox>
              {isLoggedin ? (
                <LogoutBtn onClick={modalUsage}>LOG OUT</LogoutBtn>
              ) : (
                <ButtonList>
                  <LinkLogIn
                    style={{ border: '1px solid rgba(255, 255, 255, 0.5)' }}
                    href="/login"
                  >
                    LOG IN
                  </LinkLogIn>
                  <LinkReg href="/register">REGISTRATION</LinkReg>
                </ButtonList>
              )}
            </LinksBox>
          </nav>
        </SecondStyledMenu>
      )}
    </>
  );
}
