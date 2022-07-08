function friendStatus(user, currentUser) {
  if (user._id === currentUser) {
    return [null, null];
  }
  const receivedPendingReq = user.requests.find(
    (req) =>
      req.receiver === currentUser && req.sender === user._id && !req.accepted
  );
  if (receivedPendingReq) {
    return [receivedPendingReq, "accept"];
  }
  const pendingReq = user.requests.find(
    (req) =>
      req.sender === currentUser && user._id !== currentUser && !req.accepted
  );
  if (pendingReq) {
    return [pendingReq, "cancel"];
  }
  if (
    user.friends.includes(currentUser) ||
    user.friends.find((friend) => friend._id === currentUser)
  ) {
    return [null, "remove"];
  }
  return "send";
}

const friendActions = {
  handleRequest: async (requestId, userId, action) => {
    const response = await fetch(
      `http://localhost:3000/friendrequests/${requestId}`,
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
    const data = await response.json();
  },
  cancelRequest: async (requestId) => {
    const response = await fetch(
      `http://localhost:3000/friendrequests/${requestId}`,
      {
        credentials: "include",
        method: "DELETE",
        mode: "cors",
      }
    );
    const data = await response.json();
  },
  sendRequest: async (userId) => {
    const body = JSON.stringify({ receiver: userId });
    const response = await fetch("http://localhost:3000/friendrequests/", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      mode: "cors",
      body: body,
    });
    const data = await response.json();
  },
  removeFriend: async (userId) => {
    const response = await fetch(
      `http://localhost:3000/users/${userId}/remove`,
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
    const data = await response.json();
  },
};

export { friendStatus, friendActions };
