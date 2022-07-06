import { Link } from "react-router-dom";
import FriendStatusButton from "./FriendStatusButton/FriendStatusButton";
import ProfileImage from "./ProfileImage";
import { NoUnderlineLink } from "./styled/Links.styled";
import { StyledUserFeed } from "./styled/UserFeed.styled";

function UserFeed({ users, setNeedsUpdate, currentUser }) {
  return (
    <StyledUserFeed>
      {users.map((user) => {
        return (
          <div key={user._id}>
            <ProfileImage src={user.picture || null} alt={user.name} />
            <NoUnderlineLink
              style={{ color: "white" }}
              to={`/users/${user._id}`}
            >
              <p>{user.name}</p>
            </NoUnderlineLink>
            <FriendStatusButton
              setNeedsUpdate={setNeedsUpdate}
              currentUser={currentUser}
              user={user}
            />
          </div>
        );
      })}
    </StyledUserFeed>
  );
}

export default UserFeed;
