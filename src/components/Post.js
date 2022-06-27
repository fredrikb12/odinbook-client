import useAuth from "../useAuth";
import { postManager } from "../utils/postManager";
import ProfileImage from "./ProfileImage";
import { StyledPost } from "./styled/Post.styled";

function Post({ post }) {
  const { user } = useAuth();

  async function handleClick() {
    await postManager.removePost(post._id);
  }

  return (
    <StyledPost>
      <div>
        <ProfileImage src={post.user.picture} />
        <p>{post.user.name}</p>
      </div>
      <p>{post.text}</p>
      {post.user._id === user && <button onClick={handleClick}>Delete</button>}
    </StyledPost>
  );
}

export default Post;
