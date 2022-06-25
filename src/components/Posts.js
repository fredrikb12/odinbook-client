import Post from "./Post";

function Posts({ posts }) {
  return posts.map((post) => {
    return <Post key={post._id} post={post} />;
  });
}
export default Posts;
