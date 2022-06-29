import { friendActions } from "../../utils/friendStatus";
import Button from "../Button";

function DenyButton({ req, currentUser, user, setNeedsUpdate }) {
  async function handleDeny() {
    console.log("Denying...");
    const res = await friendActions.cancelRequest(req._id);
    setNeedsUpdate(true);
  }
  return <Button onClick={handleDeny}>Deny</Button>;
}

export default DenyButton;
