import { usePathname, useRouter } from 'next/navigation';
import { Box, LogoutBtn, StyledSVG, UserName } from './UserBar.styled';
import { useAppSelector } from '@/app/hooks/hooks';
import { selectUser } from '@/redux/auth/authSelectors';
import { useState } from 'react';
import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';

export default function UserBar() {
  const [approveModalOpen, setApproveModalOpen] = useState(false);
  const path = usePathname();
  const router = useRouter();
  const user = useAppSelector(selectUser);

  function openApproveModal() {
    setApproveModalOpen(true);
    document.body.style.overflowY = 'hidden';
  }

  function closeApproveModal() {
    setApproveModalOpen(false);
    document.body.style.overflowY = 'unset';
  }


  return path === '/' ? (
    <>
      <Box>
        <LogoutBtn
          onClick={openApproveModal}
          style={{ border: '1px solid rgba(255, 255, 255, 0.4)' }}
        >
          LOG OUT
        </LogoutBtn>
        <div
          onClick={() => router.push('/profile')}
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          <StyledSVG>
            <use href="/sprite.svg#icon-iconprofile"></use>
          </StyledSVG>
          <UserName>{user.name}</UserName>
        </div>
      </Box>
      <ModalApproveAction
        approveModalOpen={approveModalOpen}
        closeApproveModal={closeApproveModal}
      />
    </>
  ) : (
    <>
      <Box>
        <LogoutBtn onClick={openApproveModal}>LOG OUT</LogoutBtn>
        <div
          onClick={() => router.push('/profile')}
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          <StyledSVG>
            <use href="/sprite.svg#icon-iconprofile"></use>
          </StyledSVG>
          <UserName style={{ color: '#262626' }}>{user.name}</UserName>
        </div>
      </Box>
      <ModalApproveAction
        approveModalOpen={approveModalOpen}
        closeApproveModal={closeApproveModal}
      />
    </>
  );
}
