import { friendActions } from "../../utils/friendStatus";
import Button from "../Button";
import GenericButton from "../GenericButton";

function CancelButton({ req, currentUser, user, setNeedsUpdate }) {
  async function handleCancel() {
    const res = await friendActions.cancelRequest(req._id);
    setNeedsUpdate(true);
  }
  return <GenericButton onClick={handleCancel}>Cancel</GenericButton>;
}

export default CancelButton;
