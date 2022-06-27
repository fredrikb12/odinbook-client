import { friendActions } from "../../utils/friendStatus";

function SendButton({ currentUser, user, setNeedsUpdate }) {
  async function handleSend() {
    console.log("Sending...");
    console.log("user:", user);
    const res = await friendActions.sendRequest(user._id);
    setNeedsUpdate(true);

  }
  return <button onClick={handleSend}>Send</button>;
}

export default SendButton;
