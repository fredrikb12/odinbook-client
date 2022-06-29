import { friendActions } from "../../utils/friendStatus";
import Button from "../Button";

function CancelButton({ req, currentUser, user, setNeedsUpdate }) {
  async function handleCancel() {
    console.log("Cancelling...");
    const res = await friendActions.cancelRequest(req._id);
    setNeedsUpdate(true);
  }
  return <Button onClick={handleCancel}>Cancel</Button>;
}

export default CancelButton;
