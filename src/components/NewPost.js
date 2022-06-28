import { useState } from "react";
import useAuth from "../useAuth";
import { postManager } from "../utils/postManager";
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
    <StyledNewPost>
      <textarea onChange={handleChange} value={text} />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </StyledNewPost>
  );
}

export default NewPost;
