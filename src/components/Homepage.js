import { useEffect, useState } from "react";
import IndexPosts from "./IndexPosts";
import PostFeed from "./PostFeed";
import { StyledHomepage } from "./styled/Homepage.styled";

function Homepage() {
  return (
    <StyledHomepage>
      <PostFeed>
        <IndexPosts />
      </PostFeed>
    </StyledHomepage>
  );
}

export default Homepage;
