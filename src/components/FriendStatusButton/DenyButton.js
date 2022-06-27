import { friendActions } from "../../utils/friendStatus";

function DenyButton({ req, currentUser, user, setNeedsUpdate }) {
  async function handleDeny() {
    console.log("Denying...");
    const res = await friendActions.cancelRequest(req._id);
    setNeedsUpdate(true);
  }
  return <button onClick={handleDeny}>Deny</button>;
}

export default DenyButton;
