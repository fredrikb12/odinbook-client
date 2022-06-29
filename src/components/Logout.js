import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
import Button from "./Button";

function Logout({}) {
  const nav = useNavigate();
  const { logOut } = useAuth();
  async function handleClick() {
    await logOut();
    nav("/login");
  }

  return <Button onClick={handleClick}>Sign Out</Button>;
}

export default Logout;
