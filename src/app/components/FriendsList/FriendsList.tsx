import { useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import { getFriends } from '@/redux/friends/friendsOperation';
import { selectFriends } from '@/redux/friends/friendsSelectors';
import { useEffect } from 'react';
import FriendsItem from '../FriendsItem/FriendsItem';


export default function FriendsList() {
  const dispatch = useAppDispatch();
  const friends = useAppSelector(selectFriends);
  
  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {friends.length !== 0 &&
          friends.map((friend: any) => {
            return (
              <li key={friend._id}>
                <FriendsItem data={friend} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
