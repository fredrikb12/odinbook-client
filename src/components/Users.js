import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../useAuth";
import FriendStatusButton from "./FriendStatusButton/FriendStatusButton";
import ProfileImage from "./ProfileImage";
import UserFeed from "./UserFeed";

function Users() {
  const [users, setUsers] = useState([]);
  const [needsUpdate, setNeedsUpdate] = useState(true);

  const currentUser = useAuth().user;

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch("http://localhost:3000/users", {
          credentials: "include",
          method: "GET",
          mode: "cors",
        });
        if (response.status === 200) {
          const data = await response.json();
          setUsers(data.users);
        }
      } catch (e) {
        console.log(e);
      }
    }
    if (needsUpdate) {
      getUsers();
      setNeedsUpdate(false);
    }
  }, [setUsers, needsUpdate]);

  return (
    <UserFeed
      users={users}
      setNeedsUpdate={setNeedsUpdate}
      currentUser={currentUser}
    />
  );
}

export default Users;
