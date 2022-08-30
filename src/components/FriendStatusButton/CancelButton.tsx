import { friendActions } from "../../utils/friendStatus";
import GenericButton from "../GenericButton";
import { IFriendStatusButtonProps } from "../../types/types";

function CancelButton({ req, setNeedsUpdate }: IFriendStatusButtonProps) {
  async function handleCancel() {
    const res = await friendActions.cancelRequest(req._id);
    setNeedsUpdate(true);
  }
  return <GenericButton onClick={handleCancel}>Cancel</GenericButton>;
}

export default CancelButton;
