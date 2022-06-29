import { friendActions } from "../../utils/friendStatus";
import Button from "../Button";

function SendButton({ currentUser, user, setNeedsUpdate }) {
  async function handleSend() {
    console.log("Sending...");
    console.log("user:", user);
    const res = await friendActions.sendRequest(user._id);
    setNeedsUpdate(true);
  }
  return <Button onClick={handleSend}>Send</Button>;
}

export default SendButton;
