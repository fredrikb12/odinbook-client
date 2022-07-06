import ProfileImage from "./ProfileImage";
import { NoUnderlineLink } from "./styled/Links.styled";

function Comments({ comments }) {
  return comments.map((comment) => {
    return (
      <div
        key={comment._id}
        style={{ display: "flex", alignItems: "center", gap: "20px" }}
      >
        <ProfileImage
          src={comment.user?.picture || null}
          alt={`${comment.user.name} profile`}
        />
        <div>
          <NoUnderlineLink to={`/users/${comment.user._id}`}>
            <p>{comment.user.name}</p>
          </NoUnderlineLink>
          <p>{comment.text}</p>
        </div>
      </div>
    );
  });
}

export default Comments;
