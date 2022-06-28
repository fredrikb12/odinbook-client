import Post from "./Post";

function Posts({ posts, setNeedsUpdate }) {
  return posts.map((post) => {
    return <Post setNeedsUpdate={setNeedsUpdate} key={post._id} post={post} />;
  });
}
export default Posts;
