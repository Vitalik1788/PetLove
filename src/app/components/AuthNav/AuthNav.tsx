import { LinkToLogIn, LinkToReg, LinksBox } from "./AuthNav.styled";


export default function AuthNav() {
  return (
    <LinksBox>
      <LinkToLogIn href='/login'>LOG IN</LinkToLogIn>
      <LinkToReg href='/register'>REGISTRATION</LinkToReg>
    </LinksBox>
  );
}
