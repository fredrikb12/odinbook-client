function friendStatus(user, currentUser) {
  console.log(user, currentUser);
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
  sendRequest: async (requestId, userId) => {
    const response = await fetch(
      `http://localhost:3000/friendrequests/${requestId}`
    );
  },
};

export { friendStatus, friendActions };
