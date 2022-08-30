import { friendActions } from "../../utils/friendStatus";
import GenericButton from "../GenericButton";
import { IFriendStatusButtonProps } from "../../types/types";

function AcceptButton({ req, setNeedsUpdate }: IFriendStatusButtonProps) {
  async function handleAccept() {
    const res = await friendActions.handleRequest(req._id, "accepted");
    setNeedsUpdate(true);
  }
  return <GenericButton onClick={handleAccept}>Accept</GenericButton>;
}

export default AcceptButton;
