import { friendStatus } from "../../utils/friendStatus";
import AcceptButton from "./AcceptButton";
import CancelButton from "./CancelButton";
import DenyButton from "./DenyButton";
import RemoveButton from "./RemoveButton";
import SendButton from "./SendButton";

function FriendStatusButton({ user, currentUser }) {
  const status = friendStatus(user, currentUser);
  if (status[1] === null) return null;
  if (status[1] === "accept") {
    return (
      <div>
        <AcceptButton currentUser={currentUser} user={user} />
        <DenyButton currentUser={currentUser} user={user} />
      </div>
    );
  }
  if (status[1] === "cancel")
    return <CancelButton currentUser={currentUser} user={user} />;
  if (status[1] === "remove")
    return <RemoveButton currentUser={currentUser} user={user} />;
  return <SendButton currentUser={currentUser} user={user} />;
}

export default FriendStatusButton;
