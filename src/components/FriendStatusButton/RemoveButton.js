import { friendActions } from "../../utils/friendStatus";
import Button from "../Button";

function RemoveButton({ currentUser, user, setNeedsUpdate }) {
  async function handleRemove() {
    console.log("Removing...");
    const res = await friendActions.removeFriend(user._id);
    setNeedsUpdate(true);
  }
  return <Button onClick={handleRemove}>Remove</Button>;
}

export default RemoveButton;
