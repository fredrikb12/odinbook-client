function CancelButton({ currentUser, user }) {
  async function handleCancel() {
    console.log("Cancelling...");
  }
  return <button onClick={handleCancel}>Cancel</button>;
}

export default CancelButton;