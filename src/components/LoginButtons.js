import { Link } from "react-router-dom";
import { StyledLoginButton } from "./styled/LoginButton.styled";
import { StyledLoginButtons } from "./styled/LoginButtons.styled";

function LoginButtons({ handleGuestLogin, setIsRegistering }) {
  return (
    <StyledLoginButtons>
      <Link to="/register">
        <StyledLoginButton onClick={() => setIsRegistering(true)}>
          Create Account
        </StyledLoginButton>
      </Link>
      <a style={{}} href="https://conservative-mountie-67830.herokuapp.com/login/facebook">
        <StyledLoginButton>Sign in with Facebook</StyledLoginButton>
      </a>
      <StyledLoginButton onClick={handleGuestLogin}>
        Sign in as Guest
      </StyledLoginButton>
    </StyledLoginButtons>
  );
}

export default LoginButtons;
