import { Link } from "react-router-dom";
import useAuth from "../useAuth";
import { postManager } from "../utils/postManager";
import Button from "./Button";
import ProfileImage from "./ProfileImage";
import { StyledDeleteButton } from "./styled/Button.styled";
import { NoUnderlineLink } from "./styled/Links.styled";
import { StyledPost } from "./styled/Post.styled";

function Post({ post, setNeedsUpdate }) {
  const { user } = useAuth();

  async function handleClick() {
    await postManager.removePost(post._id);
    setNeedsUpdate(true);
  }

  return (
    <StyledPost style={{ position: "relative" }}>
      <div>
        <ProfileImage src={post.user.picture} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <NoUnderlineLink to={`/users/${post.user._id}`}>
            <p>{post.user.name}</p>
          </NoUnderlineLink>
          <p style={{ fontSize: "0.85rem" }}>
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <p>{post.text}</p>
      {post.user._id === user && (
        <StyledDeleteButton
          style={{ position: "absolute", top: 10, right: 10 }}
          onClick={handleClick}
        >
          Delete
        </StyledDeleteButton>
      )}
    </StyledPost>
  );
}

export default Post;
