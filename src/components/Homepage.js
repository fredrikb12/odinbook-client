import { useEffect, useState } from "react";
import IndexPosts from "./IndexPosts";
import NewPost from "./NewPost";
import PostFeed from "./PostFeed";
import { StyledHomepage } from "./styled/Homepage.styled";

function Homepage() {
  const [needsUpdate, setNeedsUpdate] = useState(true);
  return (
    <StyledHomepage>
      <PostFeed>
        <NewPost setNeedsUpdate={setNeedsUpdate} />
        <IndexPosts needsUpdate={needsUpdate} setNeedsUpdate={setNeedsUpdate} />
      </PostFeed>
    </StyledHomepage>
  );
}

export default Homepage;
