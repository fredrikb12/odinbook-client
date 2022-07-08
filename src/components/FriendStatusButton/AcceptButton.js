import {friendActions} from "../../utils/friendStatus";
import Button from "../Button";
import GenericButton from "../GenericButton";

function AcceptButton({ req, currentUser, user, setNeedsUpdate }) {
  async function handleAccept() {
    const res = await friendActions.handleRequest(req._id, user, "accepted")
    setNeedsUpdate(true);
  }
  return <GenericButton onClick={handleAccept}>Accept</GenericButton>;
}

export default AcceptButton;
