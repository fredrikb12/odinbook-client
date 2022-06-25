import { useEffect, useState } from "react";

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
  return posts.map((post) => {
    return (
      <div
        key={post._id}
        style={{
          border: "1px solid black",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "10px",
        }}
      >
        <p>{post.user.name}</p>
        <p>{post.text}</p>
      </div>
    );
  });
}

export default IndexPosts;
