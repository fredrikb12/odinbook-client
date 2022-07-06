function friendStatus(user, currentUser) {
  console.log("User:", user);
  console.log("currentUser:", currentUser);
  if (user._id === currentUser) {
    console.log("user id === currentUser");
    return [null, null];
  }
  const receivedPendingReq = user.requests.find(
    (req) =>
      req.receiver === currentUser && req.sender === user._id && !req.accepted
  );
  if (receivedPendingReq) {
    console.log("pending incoming req");
    return [receivedPendingReq, "accept"];
  }
  const pendingReq = user.requests.find(
    (req) =>
      req.sender === currentUser && user._id !== currentUser && !req.accepted
  );
  if (pendingReq) {
    console.log(pendingReq);
    console.log("pending outgoing req");
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
    console.log(response);
    const data = await response.json();
    console.log(data);
  },
  cancelRequest: async (requestId) => {
    const response = await fetch(
      `https://api.odinbook.xyz/friendrequests/${requestId}`,
      {
        credentials: "include",
        method: "DELETE",
        mode: "cors",
      }
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
  },
  sendRequest: async (userId) => {
    const body = JSON.stringify({ receiver: userId });
    console.log(body);
    console.log("user id:", userId);
    const response = await fetch("https://api.odinbook.xyz/friendrequests/", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      mode: "cors",
      body: body,
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
  },
  removeFriend: async (userId) => {
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
    console.log(response);
    const data = await response.json();
    console.log(data);
  },
};

export { friendStatus, friendActions };
