import { Link } from "react-router-dom";
import useAuth from "../useAuth";
import Logout from "./Logout";

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
        }}
      >
        <Link to="/">Home</Link>
        <Link to={`/profile/${user}`}>Profile</Link>
        <Logout />
      </nav>
    </header>
  );
}

export default Navbar;
