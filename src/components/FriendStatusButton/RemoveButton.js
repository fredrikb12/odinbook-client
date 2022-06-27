function RemoveButton({ currentUser, user, setNeedsUpdate }) {
  async function handleRemove() {
    console.log("Removing...");
    setNeedsUpdate(true);
  }
  return <button onClick={handleRemove}>Remove</button>;
}

export default RemoveButton;