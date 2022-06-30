import { friendActions } from "../../utils/friendStatus";
import Button from "../Button";
import GenericButton from "../GenericButton";

function RemoveButton({ currentUser, user, setNeedsUpdate }) {
  async function handleRemove() {
    console.log("Removing...");
    const res = await friendActions.removeFriend(user._id);
    setNeedsUpdate(true);
  }
  return <GenericButton onClick={handleRemove}>Remove</GenericButton>;
}

export default RemoveButton;
