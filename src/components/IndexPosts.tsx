import { useEffect, useState } from "react";
import { IPost } from "../types/types";
import Posts from "./Posts";

interface Props {
  needsUpdate: boolean;
  setNeedsUpdate: (value: boolean) => void;
}

function IndexPosts({ needsUpdate, setNeedsUpdate }: Props) {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await fetch("https://api.odinbook.xyz/posts/", {
          credentials: "include",
          mode: "cors",
          method: "GET",
        });
        if (data.status === 200) {
          const posts = await data.json();
          setPosts(() => posts.posts);
        }
      } catch (e) {
        setPosts([
          {
            text: "Something seems to have gone wrong fetching posts, please refresh and try again.",
            user: {
              _id: "",
              name: "admin",
              friends: [],
              requests: [],
              posts: [],
              picture: null,
            },
            _id: "",
            createdAt: new Date().getTime(),
            likes: [],
            comments: [],
          },
        ]);
      }
    }
    if (needsUpdate) {
      fetchPosts();
      setNeedsUpdate(false);
    }
  }, [needsUpdate, setNeedsUpdate]);
  return <Posts setNeedsUpdate={setNeedsUpdate} posts={posts} />;
}

export default IndexPosts;
