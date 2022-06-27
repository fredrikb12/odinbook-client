function DenyButton({ currentUser, user }) {
  async function handleDeny() {
    console.log("Denying...");
  }
  return <button onClick={handleDeny}>Deny</button>;
}

export default DenyButton;