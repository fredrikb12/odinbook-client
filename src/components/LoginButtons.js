import { Link } from "react-router-dom";
import { StyledLoginButtons } from "./styled/StyledLoginButtons";

function LoginButtons({ handleGuestLogin }) {
  return (
    <StyledLoginButtons>
      <Link to="/register">
        <button>Create Account</button>
      </Link>
      <a style={{}} href="http://localhost:3000/login/facebook">
        <button>Sign in with Facebook</button>
      </a>
      <button onClick={handleGuestLogin}>Sign in as Guest</button>
    </StyledLoginButtons>
  );
}

export default LoginButtons;
