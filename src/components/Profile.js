import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostFeed from "./PostFeed";
import Posts from "./Posts";
import ProfileImage from "./ProfileImage";

function Profile() {
  const { userId } = useParams();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [needsUpdate, setNeedsUpdate] = useState(true);
  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await fetch(`http://localhost:3000/users/${userId}`, {
          credentials: "include",
          method: "GET",
          mode: "cors",
        });
        const { user } = await data.json();
        setProfile(user);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
    if (needsUpdate) {
      fetchProfile();
      setNeedsUpdate(false);
    }
  }, [userId, needsUpdate]);

  if (!loading)
    return (
      <PostFeed>
        <div
          style={{
            display: "flex",
            gap: "20px",
            backgroundColor: "#242526",
            padding: "20px 30px",
            alignItems: "center",
          }}
        >
          <ProfileImage src={profile.picture} alt={profile.name} />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <p>{profile?.name}</p>
            <p>Friends: {profile.friends.length}</p>
          </div>
        </div>
        <Posts setNeedsUpdate={setNeedsUpdate} posts={profile.posts || []} />
      </PostFeed>
    );
}

export default Profile;
