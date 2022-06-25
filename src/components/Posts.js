function Posts({ posts }) {
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
export default Posts;
