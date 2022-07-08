import defaultProfile from "../images/profile-default.svg";

function ProfileImage({ src, alt }) {
  return (
    <img
      style={{ borderRadius: "50%", width: "50px", height: "50px" }}
      src={src || defaultProfile}
      alt={alt}
    />
  );
}

export default ProfileImage;
