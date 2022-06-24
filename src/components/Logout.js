function Logout({ setUser }) {
  async function logOut() {
    try {
      await fetch("http://localhost:3000/auth/logout", {
        credentials: "include",
        method: "GET",
        mode: "cors",
      });
    } catch (e) {
      console.log(e);
    }
    setUser(() => null);
  }
  return <button onClick={logOut}>Sign Out</button>;
}

export default Logout;
