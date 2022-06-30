import { StyledCommentTrigger } from "./styled/CommentTrigger.styled";

function CommentTrigger({ length, toggleDisplay, isDisplaying }) {
  return (
    <StyledCommentTrigger onClick={() => toggleDisplay()}>
      {length === 0 ? null : isDisplaying ? "Hide Comments" : "Show Comments"}
    </StyledCommentTrigger>
  );
}

export default CommentTrigger;
