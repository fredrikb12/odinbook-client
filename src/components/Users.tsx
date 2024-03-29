import { useEffect, useState } from "react";
import useAuth from "../useAuth";
import UserFeed from "./UserFeed";

function Users() {
  const [users, setUsers] = useState([]);
  const [needsUpdate, setNeedsUpdate] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch("https://api.odinbook.xyz/users", {
          credentials: "include",
          method: "GET",
          mode: "cors",
        });
        if (response.status === 200) {
          const data = await response.json();
          setUsers(data.users);
        }
      } catch (e) {}
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
