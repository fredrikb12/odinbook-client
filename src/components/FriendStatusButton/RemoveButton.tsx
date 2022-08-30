import { IFriendStatusButtonProps } from "../../types/types";
import { friendActions } from "../../utils/friendStatus";
import GenericButton from "../GenericButton";

function RemoveButton({ user, setNeedsUpdate }: IFriendStatusButtonProps) {
  async function handleRemove() {
    const res = await friendActions.removeFriend(user._id);
    setNeedsUpdate(true);
  }
  return <GenericButton onClick={handleRemove}>Remove</GenericButton>;
}

export default RemoveButton;
