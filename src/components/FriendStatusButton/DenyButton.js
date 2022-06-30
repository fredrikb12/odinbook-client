import { friendActions } from "../../utils/friendStatus";
import Button from "../Button";
import GenericButton from "../GenericButton";

function DenyButton({ req, currentUser, user, setNeedsUpdate }) {
  async function handleDeny() {
    console.log("Denying...");
    const res = await friendActions.cancelRequest(req._id);
    setNeedsUpdate(true);
  }
  return <GenericButton onClick={handleDeny}>Deny</GenericButton>;
}

export default DenyButton;
