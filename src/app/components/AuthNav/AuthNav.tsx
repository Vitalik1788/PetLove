import {
  LinksItemLog,
  LinksItemReg,
  LinksList,
  NavBox,
  StyledLinkLog,
  StyledLinkReg,
} from './AuthNav.styled';

export default function AuthNav() {
  return (
    <NavBox>
      <LinksList>
        <LinksItemLog>
          <StyledLinkLog href="/login">LOG IN</StyledLinkLog>
        </LinksItemLog>
        <LinksItemReg>
          <StyledLinkReg href="/register">REGISTRATION</StyledLinkReg>
        </LinksItemReg>
      </LinksList>
    </NavBox>
  );
}
