import { User, FriendRequest } from "../types/types";

function friendStatus(user: User, currentUser: string | null | void): any {
  if (user._id === currentUser) {
    return [null, null];
  }
  const receivedPendingReq = user.requests.find(
    (req: FriendRequest) =>
      req.receiver === currentUser && req.sender === user._id && !req.accepted
  );
  if (receivedPendingReq) {
    return [receivedPendingReq, "accept"];
  }
  const pendingReq = user.requests.find(
    (req: FriendRequest) =>
      req.sender === currentUser && user._id !== currentUser && !req.accepted
  );
  if (pendingReq) {
    return [pendingReq, "cancel"];
  }
  if (
    user.friends.includes(currentUser) ||
    user.friends.find((friend: User) => friend._id === currentUser)
  ) {
    return [null, "remove"];
  }
  return "send";
}

const friendActions = {
  handleRequest: async (requestId: string, action: string) => {
    const response = await fetch(
      `https://api.odinbook.xyz/friendrequests/${requestId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        method: "PUT",
        mode: "cors",
        body: JSON.stringify({ requestAction: action }),
      }
    );
    await response.json();
  },
  cancelRequest: async (requestId: string): Promise<void> => {
    const response = await fetch(
      `https://api.odinbook.xyz/friendrequests/${requestId}`,
      {
        credentials: "include",
        method: "DELETE",
        mode: "cors",
      }
    );
    await response.json();
  },
  sendRequest: async (userId: string): Promise<void> => {
    const body = JSON.stringify({ receiver: userId });
    const response = await fetch("https://api.odinbook.xyz/friendrequests/", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      mode: "cors",
      body: body,
    });
    await response.json();
  },
  removeFriend: async (userId: string): Promise<void> => {
    const response = await fetch(
      `https://api.odinbook.xyz/users/${userId}/remove`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        method: "PUT",
        mode: "cors",
        body: JSON.stringify({ userId: userId }),
      }
    );
    await response.json();
  },
};

export { friendStatus, friendActions };
