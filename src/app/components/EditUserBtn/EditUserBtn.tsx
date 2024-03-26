import { ComponentBox, EditBox, EditIcon, IconUser, UserBtnBox, UserTitle } from './EditUserBtn.styled';

interface IEditUserBtn {
  openEditUserModal: () => void;
}

export default function EditUserBtn({ openEditUserModal }: IEditUserBtn) {
  return (
    <ComponentBox>
      <UserBtnBox>
        <UserTitle>User</UserTitle>
        <IconUser />
      </UserBtnBox>
      <EditBox onClick={openEditUserModal}>
        <EditIcon />
      </EditBox>
    </ComponentBox>
  );
}
