function SendButton({ currentUser, user }) {
  async function handleSend() {
    console.log("Sending...");
  }
  return <button onClick={handleSend}>Send</button>;
}

export default SendButton;