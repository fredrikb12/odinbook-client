import { User } from "../types/types";
import FriendStatusButton from "./FriendStatusButton/FriendStatusButton";
import ProfileImage from "./ProfileImage";
import { NoUnderlineLink } from "./styled/Links.styled";
import { StyledUserFeed } from "./styled/UserFeed.styled";

interface Props {
  users: User[];
  setNeedsUpdate: (value: boolean) => void;
  currentUser: string | void | null;
}

function UserFeed({ users, setNeedsUpdate, currentUser }: Props) {
  return (
    <StyledUserFeed>
      {users.map((user) => {
        return (
          <div key={user._id}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <ProfileImage src={user.picture || null} alt={user.name} />
              <NoUnderlineLink
                style={{ color: "white" }}
                to={`/users/${user._id}`}
              >
                <p>{user.name}</p>
              </NoUnderlineLink>
            </div>
            <FriendStatusButton
              req={{ _id: "" }}
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
