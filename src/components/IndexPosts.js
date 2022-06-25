import { useEffect, useState } from "react";
import Posts from "./Posts";

function IndexPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await fetch("http://localhost:3000/posts/", {
          credentials: "include",
          mode: "cors",
          method: "GET",
        });
        console.log(data);
        if (data.status === 200) {
          const posts = await data.json();
          console.log(posts);
          setPosts(() => posts.posts);
        }
      } catch (e) {
        setPosts(() => {
          return [
            {
              text: "Something seems to have gone wrong fetching posts, please refresh and try again.",
              user: { _id: null, name: "admin" },
            },
          ];
        });
        console.log(e);
      }
    }
    fetchPosts();
  }, []);
  return <Posts posts={posts} />;
}

export default IndexPosts;
