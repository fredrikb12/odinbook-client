import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../useAuth";
import FriendStatusButton from "./FriendStatusButton/FriendStatusButton";
import PostFeed from "./PostFeed";
import Posts from "./Posts";
import ProfileImage from "./ProfileImage";

function Profile() {
  const { userId } = useParams();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [needsUpdate, setNeedsUpdate] = useState(true);
  const { user } = useAuth();
  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await fetch(`http://api.odinbook.xyz/users/${userId}`, {
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
      <div style={{ display: "flex", justifyContent: "center" }}>
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
            <ProfileImage src={profile.picture || null} alt={profile.name} />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <p>{profile?.name}</p>
              <p>Friends: {profile.friends.length}</p>
            </div>
            <div>
              <FriendStatusButton
                user={profile}
                currentUser={user}
                setNeedsUpdate={setNeedsUpdate}
              />
            </div>
          </div>
          <Posts setNeedsUpdate={setNeedsUpdate} posts={profile.posts || []} />
        </PostFeed>
      </div>
    );
}

export default Profile;
