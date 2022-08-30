import { StyledCommentTrigger } from "./styled/CommentTrigger.styled";
interface Props {
  length: number;
  toggleDisplay: () => void;
  isDisplaying: boolean;
}
function CommentTrigger({ length, toggleDisplay, isDisplaying }: Props) {
  if (length === 0) return null;
  return (
    <StyledCommentTrigger onClick={() => toggleDisplay()}>
      {isDisplaying ? "Hide Comments" : "Show Comments"}
    </StyledCommentTrigger>
  );
}

export default CommentTrigger;
