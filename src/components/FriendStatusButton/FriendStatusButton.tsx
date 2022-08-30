import { useEffect, useState } from "react";
import { IFriendStatusButtonProps } from "../../types/types";
import { friendStatus } from "../../utils/friendStatus";
import AcceptButton from "./AcceptButton";
import CancelButton from "./CancelButton";
import DenyButton from "./DenyButton";
import RemoveButton from "./RemoveButton";
import SendButton from "./SendButton";

function FriendStatusButton({
  user,
  currentUser,
  setNeedsUpdate,
}: IFriendStatusButtonProps) {
  const [status, setStatus] = useState<any[]>([null, null]);
  useEffect(() => {
    setStatus(friendStatus(user, currentUser));
  }, [user, currentUser]);
  if (status[1] === null) return null;
  if (status[1] === "accept") {
    return (
      <div>
        <AcceptButton
          setNeedsUpdate={setNeedsUpdate}
          req={status[0]}
          currentUser={currentUser}
          user={user}
        />
        <DenyButton
          setNeedsUpdate={setNeedsUpdate}
          req={status[0]}
          currentUser={currentUser}
          user={user}
        />
      </div>
    );
  }
  if (status[1] === "cancel")
    return (
      <CancelButton
        setNeedsUpdate={setNeedsUpdate}
        req={status[0]}
        currentUser={currentUser}
        user={user}
      />
    );
  if (status[1] === "remove")
    return (
      <RemoveButton
        req={{ _id: "" }}
        setNeedsUpdate={setNeedsUpdate}
        currentUser={currentUser}
        user={user}
      />
    );
  return (
    <SendButton
      req={{ _id: "" }}
      setNeedsUpdate={setNeedsUpdate}
      currentUser={currentUser}
      user={user}
    />
  );
}

export default FriendStatusButton;
