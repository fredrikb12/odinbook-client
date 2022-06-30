import { useState } from "react";
import useAuth from "../useAuth";
import { postManager } from "../utils/postManager";
import Button from "./Button";
import GenericButton from "./GenericButton";
import { StyledNewPost } from "./styled/NewPost.styled";

function NewPost({ setNeedsUpdate }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  async function handleClick(e) {
    e.preventDefault();
    await postManager.submitPost(text);
    setText("");
    setNeedsUpdate(true);
  }

  return (
    <StyledNewPost style={{ gap: "10px" }}>
      <textarea onChange={handleChange} value={text} />
      <GenericButton type="submit" onClick={handleClick}>
        Submit
      </GenericButton>
    </StyledNewPost>
  );
}

export default NewPost;
