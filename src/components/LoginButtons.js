import { Link } from "react-router-dom";
import { StyledLoginButton } from "./styled/LoginButton.styled";
import { StyledLoginButtons } from "./styled/LoginButtons.styled";

function LoginButtons({ handleGuestLogin }) {
  return (
    <StyledLoginButtons>
      <Link to="/register">
        <StyledLoginButton>Create Account</StyledLoginButton>
      </Link>
      <a style={{}} href="http://localhost:3000/login/facebook">
        <StyledLoginButton>Sign in with Facebook</StyledLoginButton>
      </a>
      <StyledLoginButton onClick={handleGuestLogin}>Sign in as Guest</StyledLoginButton>
    </StyledLoginButtons>
  );
}

export default LoginButtons;
