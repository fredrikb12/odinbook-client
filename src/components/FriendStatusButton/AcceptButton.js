function AcceptButton({ currentUser, user, setNeedsUpdate }) {
  async function handleAccept() {
    console.log("accepting...");
    setNeedsUpdate(true);
  }
  return <button onClick={handleAccept}>Accept</button>;
}

export default AcceptButton;
