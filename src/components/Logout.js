import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";

function Logout({}) {
  const nav = useNavigate();
  const { logOut } = useAuth();
  async function handleClick() {
    await logOut();
    nav("/login");
  }

  return <button onClick={handleClick}>Sign Out</button>;
}

export default Logout;
