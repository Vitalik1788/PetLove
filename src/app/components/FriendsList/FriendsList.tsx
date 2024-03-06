import { useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import { getFriends } from '@/redux/friends/friendsOperation';
import { selectFriends } from '@/redux/friends/friendsSelectors';
import { useEffect } from 'react';
import FriendsItem from '../FriendsItem/FriendsItem';
import { ItemFriend, ListFriends } from './FriendsList.styled';

export default function FriendsList() {
  const dispatch = useAppDispatch();
  const friends = useAppSelector(selectFriends);

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  return (
    <div>
      <ListFriends>
        {friends.length !== 0 &&
          friends.map((friend: any) => {
            return (
              <ItemFriend key={friend._id}>
                <FriendsItem data={friend} />
              </ItemFriend>
            );
          })}
      </ListFriends>
    </div>
  );
}
