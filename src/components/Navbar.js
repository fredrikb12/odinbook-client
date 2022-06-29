import { Link } from "react-router-dom";
import useAuth from "../useAuth";
import Logout from "./Logout";
import { NoUnderlineLink } from "./styled/Links.styled";

function Navbar() {
  const { user } = useAuth();
  return (
    <header>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "120px",
          padding: "15px",
          fontSize: "1.5rem",
          borderBottom: "1px solid black",
        }}
      >
        <NoUnderlineLink to="/">Home</NoUnderlineLink>
        <NoUnderlineLink to="/users">Users</NoUnderlineLink>
        <NoUnderlineLink to={`/users/${user}`}>Profile</NoUnderlineLink>
        <Logout />
      </nav>
    </header>
  );
}

export default Navbar;
