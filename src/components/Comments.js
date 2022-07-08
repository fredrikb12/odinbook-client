import ProfileImage from "./ProfileImage";
import { StyledComment } from "./styled/Comments.styled";
import { NoUnderlineLink } from "./styled/Links.styled";

function Comments({ comments }) {
  return comments.map((comment) => {
    return (
      <StyledComment key={comment._id}>
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
      </StyledComment>
    );
  });
}

export default Comments;
