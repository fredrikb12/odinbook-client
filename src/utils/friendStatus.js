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
  if (user.friends.includes(currentUser)) {
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
    console.log(response);
    const data = await response.json();
    console.log(data);
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
    console.log(response);
    const data = await response.json();
    console.log(data);
  },
  sendRequest: async (userId) => {
    const body = JSON.stringify({ receiver: userId });
    console.log(body);
    console.log("user id:", userId);
    const response = await fetch("http://localhost:3000/friendrequests/", {
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
};

export { friendStatus, friendActions };
