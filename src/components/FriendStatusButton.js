import friendStatus from "../utils/friendStatus";

function FriendStatusButton({ user, currentUser }) {
  const status = friendStatus(user, currentUser);
  if (status === null) return null;
  if (status === "accept") {
    return (
      <div>
        <button>Accept</button>
        <button>Deny</button>
      </div>
    );
  }
  if (status === "cancel") return <button>Cancel</button>;
  if (status === "remove") return <button>Remove</button>;
  return <button>Send</button>;
}

export default FriendStatusButton;