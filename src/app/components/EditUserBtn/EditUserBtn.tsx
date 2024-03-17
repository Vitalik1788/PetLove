import { ComponentBox, EditBox, EditIcon, IconUser, UserBtnBox, UserTitle } from './EditUserBtn.styled';

export default function EditUserBtn() {
  return (
    <ComponentBox>
      <UserBtnBox>
        <UserTitle>User</UserTitle>
        <IconUser />
      </UserBtnBox>
      <EditBox>
        <EditIcon />
      </EditBox>
    </ComponentBox>
  );
}
