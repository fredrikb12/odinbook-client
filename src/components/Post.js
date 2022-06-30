import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../useAuth";
import { postManager } from "../utils/postManager";
import Button from "./Button";
import ProfileImage from "./ProfileImage";
import { StyledDeleteButton } from "./styled/Button.styled";
import { NoUnderlineLink } from "./styled/Links.styled";
import { StyledPost } from "./styled/Post.styled";
import TextInput from "./TextInput";

function Post({ post, setNeedsUpdate }) {
  const [commentText, setCommentText] = useState("");
  const [displayComments, setDisplayComments] = useState(false);
  const { user } = useAuth();

  async function handleClick() {
    await postManager.removePost(post._id);
    setNeedsUpdate(true);
  }

  async function handleLikeClick() {
    await postManager.likePost(post._id);
    setNeedsUpdate(true);
  }

  async function handleUnlikeClick() {
    await postManager.unlikePost(post._id);
    setNeedsUpdate(true);
  }

  async function handleComment() {
    await postManager.submitComment(post._id, commentText);
    setNeedsUpdate(true);
    setCommentText("");
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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        {post.user._id === user && (
          <StyledDeleteButton onClick={handleClick}>Delete</StyledDeleteButton>
        )}
        {post.likes.find(
          (like) => like.user === user || like.user._id === user
        ) && <Button onClick={handleUnlikeClick}>Unlike</Button>}
        {!post.likes.find(
          (like) => like.user === user || like.user._id === user
        ) && <Button onClick={handleLikeClick}>Like </Button>}

        <span>{post.likes.length}</span>
        <p onClick={() => setDisplayComments(true)}>
          {post.comments.length === 0
            ? null
            : post.comments.length === 1
            ? "1 Comment"
            : post.comments.length + "Comments"}
        </p>
      </div>
      {displayComments && (
        <div>
          {post.comments.map((comment) => {
            return (
              <div key={comment._id}>
                <p>{comment.user.name}</p>
                <p>{comment.text}</p>
              </div>
            );
          })}
        </div>
      )}
      <div style={{ display: "flex" }}>
        <div style={{ marginBottom: 0, gap: "10px", padding: "10px" }}>
          <TextInput
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </div>
        <Button onClick={handleComment}>Comment</Button>
      </div>
    </StyledPost>
  );
}

export default Post;
