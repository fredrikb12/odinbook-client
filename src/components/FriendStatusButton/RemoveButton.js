function RemoveButton({ currentUser, user }) {
  async function handleRemove() {
    console.log("Removing...");
  }
  return <button onClick={handleRemove}>Remove</button>;
}

export default RemoveButton;