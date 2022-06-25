import Profile from "./Profile";
import ProfileImage from "./ProfileImage";

function Posts({ posts }) {
  return posts.map((post) => {
    return (
      <div
        key={post._id}
        style={{
          border: "1px solid black",
          marginBottom: "20px",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            marginBottom: "30px",
          }}
        >
          <ProfileImage src={post.user.picture} />
          <p>{post.user.name}</p>
        </div>
        <p>{post.text}</p>
      </div>
    );
  });
}
export default Posts;
