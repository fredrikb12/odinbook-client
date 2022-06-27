import {friendActions} from "../../utils/friendStatus";

function AcceptButton({ req, currentUser, user, setNeedsUpdate }) {
  async function handleAccept() {
    console.log("accepting...");
    const res = await friendActions.handleRequest(req._id, user, "accepted")
    setNeedsUpdate(true);
  }
  return <button onClick={handleAccept}>Accept</button>;
}

export default AcceptButton;
