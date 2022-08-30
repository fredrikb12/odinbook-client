import useAuth from "../useAuth";
import Logout from "./Logout";
import { NoUnderlineLink } from "./styled/Links.styled";
import { StyledNavbar } from "./styled/Navbar.styled";

function Navbar() {
  const { user } = useAuth();
  return (
    <header>
      <StyledNavbar>
        <NoUnderlineLink to="/">Home</NoUnderlineLink>
        <NoUnderlineLink to="/users">Users</NoUnderlineLink>
        <NoUnderlineLink to={`/users/${user}`}>Profile</NoUnderlineLink>
        <Logout />
      </StyledNavbar>
    </header>
  );
}

export default Navbar;
