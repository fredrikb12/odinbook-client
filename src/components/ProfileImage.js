function ProfileImage({ src, alt }) {
  return (
    <img
      style={{ borderRadius: "50%", width: "50px", height: "50px" }}
      src={src || "https://picsum.photos/50/50"}
      alt={alt}
    />
  );
}

export default ProfileImage;
