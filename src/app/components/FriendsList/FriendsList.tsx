import { useAppDispatch } from "@/app/hooks/hooks"
import { getFriends } from "@/redux/friends/friendsOperation";
import { useEffect } from "react";



export default function FriendsList() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFriends())
  }, [dispatch]);


  return (
    <div></div>
  )
};