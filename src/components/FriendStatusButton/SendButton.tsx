import { IFriendStatusButtonProps } from "../../types/types";
import { friendActions } from "../../utils/friendStatus";
import GenericButton from "../GenericButton";

function SendButton({ user, setNeedsUpdate }: IFriendStatusButtonProps) {
  async function handleSend() {
    const res = await friendActions.sendRequest(user._id);
    setNeedsUpdate(true);
  }
  return <GenericButton onClick={handleSend}>Add</GenericButton>;
}

export default SendButton;
