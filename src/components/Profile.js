import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Posts from "./Posts";
import ProfileImage from "./ProfileImage";

function Profile() {
  const { profileId } = useParams();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await fetch(`http://localhost:3000/users/${profileId}`, {
          credentials: "include",
          method: "GET",
          mode: "cors",
        });
        console.log(data);
        const { user } = await data.json();
        console.log(user);
        setProfile(user);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }

    fetchProfile();
  }, [profileId]);

  if (loading) return <p>Loading profile...</p>;
  else {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <ProfileImage
            src={profile.picture}
            alt={profile.name}
          />
          <p>{profile?.name}</p>
          <p>Friends: {profile.friends.length}</p>
        </div>
        <Posts posts={profile.posts || []} />
      </div>
    );
  }
}

export default Profile;
