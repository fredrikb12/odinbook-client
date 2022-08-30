import defaultProfile from "../images/profile-default.svg";

interface Props {
  src: string | null;
  alt: string;
}

function ProfileImage({ src, alt }: Props) {
  return (
    <img
      style={{ borderRadius: "50%", width: "50px", height: "50px" }}
      src={src || defaultProfile}
      alt={alt}
    />
  );
}

export default ProfileImage;
