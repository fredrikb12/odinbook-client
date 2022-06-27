import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../useAuth";
import FriendStatusButton from "./FriendStatusButton";
import ProfileImage from "./ProfileImage";

function Users() {
  const [users, setUsers] = useState([]);

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
          console.log(data);
          setUsers(data.users);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getUsers();
  }, [setUsers]);

  return users.map((user) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
        key={user._id}
      >
        <ProfileImage src={user.picture} alt={user.name} />
        <Link style={{ color: "white" }} to={`/users/${user._id}`}>
          <p>{user.name}</p>
        </Link>
        <FriendStatusButton currentUser={currentUser} user={user} />
        {/*{user.requests.find(
          (req) =>
            req.sender === currentUser &&
            user._id !== currentUser &&
            !req.accepted
        ) && <button>Cancel Friend Request</button>}
        {user.requests.find(
          (req) =>
            req.receiver === currentUser &&
            req.sender === user._id &&
            !req.accepted
        ) && <button>Accept Friend Request</button>}
        {user.friends.includes(currentUser) && <button>Remove Friend</button>}*/}
      </div>
    );
  });
}

export default Users;
