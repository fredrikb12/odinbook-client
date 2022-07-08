import { StyledCommentTrigger } from "./styled/CommentTrigger.styled";

function CommentTrigger({ length, toggleDisplay, isDisplaying }) {
  if (length === 0) return null;
  return (
    <StyledCommentTrigger onClick={() => toggleDisplay()}>
      {isDisplaying ? "Hide Comments" : "Show Comments"}
    </StyledCommentTrigger>
  );
}

export default CommentTrigger;
