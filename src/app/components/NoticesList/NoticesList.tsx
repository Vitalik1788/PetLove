import { useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import { selectIsLoading } from '@/redux/news/newsSelectors';
import { getNotices } from '@/redux/notices/noticesOperation';
import { useEffect } from 'react';
import NoticesItem from '../NoticesItem/NoticesItem';
import { selectNotices } from '@/redux/notices/noticesSelectors';
import { ListStyled } from './NoticesList.styled';

export default function NoticesList() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const notices = useAppSelector(selectNotices);

  useEffect(() => {
    dispatch(getNotices())
  }, [dispatch]);

  return (
    !isLoading && (
      <div style={{ marginTop: '40px' }}>
        <ListStyled>
          {notices.length !== 0 &&
            notices.map((notice: any) => {
              return (
                <li key={notice._id}>
                  <NoticesItem notices={notice} />
                </li>
              );
            })}
        </ListStyled>
      </div>
    )
  );
}
