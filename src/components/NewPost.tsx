import { ChangeEvent, useState } from "react";
import { postManager } from "../utils/postManager";
import GenericButton from "./GenericButton";
import { StyledNewPost } from "./styled/NewPost.styled";

interface Props {
  setNeedsUpdate: (value: boolean) => void;
}

function NewPost({ setNeedsUpdate }: Props): JSX.Element {
  const [text, setText] = useState("");

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>): void {
    setText(e.target.value);
  }

  async function handleClick(e: SubmitEvent): Promise<void> {
    e.preventDefault();
    await postManager.submitPost(text);
    setText("");
    setNeedsUpdate(true);
  }

  return (
    <StyledNewPost style={{ gap: "10px" }}>
      <textarea
        onChange={handleChange}
        value={text}
        placeholder="What's on your mind today?"
      />
      <GenericButton type="submit" onClick={handleClick}>
        Submit
      </GenericButton>
    </StyledNewPost>
  );
}

export default NewPost;
