import ProfileImage from "./ProfileImage";
import { StyledComment } from "./styled/Comments.styled";
import { NoUnderlineLink } from "./styled/Links.styled";

interface CommentsInt {
  comments: Array<Comment>;
}
interface Comment {
  _id: String;
  user: {
    picture: string;
    name: string;
    _id: string;
  };
  text: string;
}

function Comments({ comments }: CommentsInt): JSX.Element {
  return (
    <>
      {comments.map((comment: Comment) => {
        return (
          <StyledComment key={comment._id}>
            <ProfileImage
              src={comment.user.picture || null}
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
      })}
    </>
  );
}

export default Comments;
