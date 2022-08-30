import { ChangeEvent, useState } from "react";
import { IPost } from "../types/types";
import useAuth from "../useAuth";
import { postManager } from "../utils/postManager";
import Comments from "./Comments";
import CommentTrigger from "./CommentTrigger";
import GenericButton from "./GenericButton";
import ProfileImage from "./ProfileImage";
import { StyledDeleteButton } from "./styled/Button.styled";
import { NoUnderlineLink } from "./styled/Links.styled";
import { StyledPost } from "./styled/Post.styled";
import TextInput from "./TextInput";

interface Props {
  post: IPost;
  setNeedsUpdate: (value: boolean) => void;
}

function Post({ post, setNeedsUpdate }: Props) {
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

  function toggleCommentDisplay() {
    setDisplayComments((prev) => !prev);
  }

  return (
    <StyledPost style={{ position: "relative" }}>
      <div>
        <ProfileImage src={post.user.picture || null} alt={post.user.name} />
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
          gap: "15px",
          marginTop: "15px",
          borderTop: "1px solid rgba(255,255,255, 0.35)",
          borderBottom: "1px solid rgba(255,255,255, 0.35)",
          padding: "10px 0",
        }}
      >
        {post.user._id === user && (
          <StyledDeleteButton onClick={handleClick}>Delete</StyledDeleteButton>
        )}

        <span>
          {post.likes.length === 1 ? "1 Like" : `${post.likes.length} Likes`}
        </span>

        {post.likes.find(
          (like) => like.user === user || like.user._id === user
        ) && <GenericButton onClick={handleUnlikeClick}>Unlike</GenericButton>}
        {!post.likes.find(
          (like) => like.user === user || like.user._id === user
        ) && <GenericButton onClick={handleLikeClick}>Like </GenericButton>}

        <CommentTrigger
          isDisplaying={displayComments}
          length={post.comments.length}
          toggleDisplay={toggleCommentDisplay}
        />
      </div>
      {displayComments && (
        <div>
          <Comments comments={post.comments} />
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: 0, gap: "10px", padding: "10px 0" }}>
          <TextInput
            style={{
              width: "100%",
              backgroundColor: "#424345",
              color: "#F1F1F1",
              border: "none",
              borderRadius: "6px",
              padding: "9px",
              fontSize: "1.05rem",
            }}
            value={commentText}
            placeholder={"Write a comment!"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCommentText(e.target.value)
            }
          />
        </div>
        <GenericButton
          style={{ padding: "6px 12px", fontSize: "1.05rem" }}
          onClick={handleComment}
        >
          Comment
        </GenericButton>
      </div>
    </StyledPost>
  );
}

export default Post;
