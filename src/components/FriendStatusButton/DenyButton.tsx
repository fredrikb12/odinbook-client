import { IFriendStatusButtonProps } from "../../types/types";
import { friendActions } from "../../utils/friendStatus";
import GenericButton from "../GenericButton";

function DenyButton({ req, setNeedsUpdate }: IFriendStatusButtonProps) {
  async function handleDeny() {
    const res = await friendActions.cancelRequest(req._id);
    setNeedsUpdate(true);
  }
  return <GenericButton onClick={handleDeny}>Deny</GenericButton>;
}

export default DenyButton;
