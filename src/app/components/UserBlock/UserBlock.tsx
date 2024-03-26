import { useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import {
  FieldItem,
  FieldList,
  FormTitle,
  StyledSvg,
  UploadFoto,
} from './UserBlock.styled';
import { selectUser } from '@/redux/auth/authSelectors';
import { useEffect } from 'react';
import { getFullCurrentUser } from '@/redux/auth/authOperations';

export default function UserBlock() {
  const userData = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFullCurrentUser());
  }, [dispatch])

  return (
    <div>
      <div>
        <StyledSvg>
          <use href="/sprite.svg#icon-iconprofile"></use>
        </StyledSvg>
        <UploadFoto>Upload photo</UploadFoto>
      </div>
      <div>
        <FormTitle>My information</FormTitle>
        <FieldList>
          <FieldItem
            style={
              userData.name
                ? { border: '1px solid #F6B83D' }
                : { border: '1px solid rgba(38, 38, 38, 0.15)' }
            }
          >
            {userData.name}
          </FieldItem>
          <FieldItem
            style={
              userData.email
                ? { border: '1px solid #F6B83D' }
                : { border: '1px solid rgba(38, 38, 38, 0.15)' }
            }
          >
            {userData.email}
          </FieldItem>
          <FieldItem
            style={
              userData.phone
                ? { border: '1px solid #F6B83D' }
                : { border: '1px solid rgba(38, 38, 38, 0.15)' }
            }
          >
            {userData.phone ? userData.phone : '+380'}
          </FieldItem>
        </FieldList>
      </div>
    </div>
  );
}
