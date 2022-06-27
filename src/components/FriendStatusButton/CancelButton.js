import { friendActions } from "../../utils/friendStatus";

function CancelButton({ req, currentUser, user, setNeedsUpdate }) {
  async function handleCancel() {
    console.log("Cancelling...");
    const res = await friendActions.cancelRequest(req._id);
    setNeedsUpdate(true);
  }
  return <button onClick={handleCancel}>Cancel</button>;
}

export default CancelButton;
