import { useEffect, useState } from "react";
import IndexPosts from "./IndexPosts";
import NewPost from "./NewPost";
import PostFeed from "./PostFeed";
import { StyledHomepage } from "./styled/Homepage.styled";

function Homepage() {
  return (
    <StyledHomepage>
      <PostFeed>
        <NewPost />
        <IndexPosts />
      </PostFeed>
    </StyledHomepage>
  );
}

export default Homepage;
