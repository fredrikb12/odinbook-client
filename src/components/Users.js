import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../useAuth";
import FriendStatusButton from "./FriendStatusButton/FriendStatusButton";
import ProfileImage from "./ProfileImage";
import UserFeed from "./UserFeed";

function Users() {
  const [users, setUsers] = useState([]);
  const [needsUpdate, setNeedsUpdate] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch("https://calm-reef-09249.herokuapp.com/users", {
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
    <div>
      <UserFeed
        users={users}
        setNeedsUpdate={setNeedsUpdate}
        currentUser={user}
      />
    </div>
  );
}

export default Users;
