function AcceptButton({ currentUser, user }) {
  async function handleAccept() {
    console.log("accepting...");
  }
  return <button onClick={handleAccept}>Accept</button>;
}

export default AcceptButton;
