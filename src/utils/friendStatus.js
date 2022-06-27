function friendStatus(user, currentUser) {
  if (user._id === currentUser) {
    return null;
  }
  if (
    user.requests.find(
      (req) =>
        req.receiver === currentUser && req.sender === user._id && !req.accepted
    )
  ) {
    return "accept";
  }
  if (
    user.requests.find(
      (req) =>
        req.sender === currentUser && user._id !== currentUser && !req.accepted
    )
  ) {
    return "cancel";
  }
  if (user.friends.includes(currentUser)) {
    return "remove";
  }
  return "send";
}

export default friendStatus;
