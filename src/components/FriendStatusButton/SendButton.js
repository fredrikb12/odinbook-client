import { friendActions } from "../../utils/friendStatus";
import Button from "../Button";
import GenericButton from "../GenericButton";

function SendButton({ currentUser, user, setNeedsUpdate }) {
  async function handleSend() {
    console.log("Sending...");
    console.log("user:", user);
    const res = await friendActions.sendRequest(user._id);
    setNeedsUpdate(true);
  }
  return <GenericButton onClick={handleSend}>Send</GenericButton>;
}

export default SendButton;
