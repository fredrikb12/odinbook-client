import {friendActions} from "../../utils/friendStatus";
import Button from "../Button";

function AcceptButton({ req, currentUser, user, setNeedsUpdate }) {
  async function handleAccept() {
    console.log("accepting...");
    const res = await friendActions.handleRequest(req._id, user, "accepted")
    setNeedsUpdate(true);
  }
  return <Button onClick={handleAccept}>Accept</Button>;
}

export default AcceptButton;
