import { friendActions } from "../../utils/friendStatus";
import Button from "../Button";
import GenericButton from "../GenericButton";

function SendButton({ currentUser, user, setNeedsUpdate }) {
  async function handleSend() {
    const res = await friendActions.sendRequest(user._id);
    setNeedsUpdate(true);
  }
  return <GenericButton onClick={handleSend}>Add</GenericButton>;
}

export default SendButton;
