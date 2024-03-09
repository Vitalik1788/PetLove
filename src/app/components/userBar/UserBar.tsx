import { usePathname } from 'next/navigation';
import { Box, LogoutBtn, StyledSVG, UserName } from './UserBar.styled';
import { useAppSelector } from '@/app/hooks/hooks';
import { selectUser } from '@/redux/auth/authSelectors';

export default function UserBar() {
  const path = usePathname();
  const user = useAppSelector(selectUser);

  return path === '/' ? (
    <Box>
      <StyledSVG>
        <use href="/sprite.svg#icon-iconprofile"></use>
      </StyledSVG>
      <UserName>{user.name}</UserName>
    </Box>
  ) : (
    <Box>
      <LogoutBtn>LOG OUT</LogoutBtn>
      <StyledSVG>
        <use href="/sprite.svg#icon-iconprofile"></use>
      </StyledSVG>
      <UserName style={{ color: '#262626' }}>{user.name}</UserName>
    </Box>
  );
}
