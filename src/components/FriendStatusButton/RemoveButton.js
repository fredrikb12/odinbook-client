import { friendActions } from "../../utils/friendStatus";

function RemoveButton({ currentUser, user, setNeedsUpdate }) {
  async function handleRemove() {
    console.log("Removing...");
    const res = await friendActions.removeFriend(user._id);
    setNeedsUpdate(true);
  }
  return <button onClick={handleRemove}>Remove</button>;
}

export default RemoveButton;
