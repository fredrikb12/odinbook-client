import { IPost } from "../types/types";
import Post from "./Post";

interface Props {
  posts: IPost[];
  setNeedsUpdate: (value: boolean) => void;
}
function Posts({ posts, setNeedsUpdate }: Props) {
  return (
    <>
      {posts.map((post: IPost) => {
        return (
          <Post setNeedsUpdate={setNeedsUpdate} key={post._id} post={post} />
        );
      })}
    </>
  );
}
export default Posts;
