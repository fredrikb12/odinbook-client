import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
import Button from "./Button";
import GenericButton from "./GenericButton";

function Logout({}) {
  const nav = useNavigate();
  const { logOut } = useAuth();
  async function handleClick() {
    await logOut();
    nav("/login");
  }

  return <GenericButton onClick={handleClick}>Sign Out</GenericButton>;
}

export default Logout;
