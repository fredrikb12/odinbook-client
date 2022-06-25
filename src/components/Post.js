import ProfileImage from "./ProfileImage";
import { StyledPost } from "./styled/Post.styled";

function Post({ post }) {
  return (
    <StyledPost
    >
      <div
      >
        <ProfileImage src={post.user.picture} />
        <p>{post.user.name}</p>
      </div>
      <p>{post.text}</p>
    </StyledPost>
  );
}

export default Post;
