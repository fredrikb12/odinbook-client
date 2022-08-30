import { Link } from "react-router-dom";
import { StyledLoginButton } from "./styled/LoginButton.styled";
import { StyledLoginButtons } from "./styled/LoginButtons.styled";

interface Props {
  handleGuestLogin: () => void;
  setIsRegistering: (value: boolean) => void;
}

function LoginButtons({ handleGuestLogin, setIsRegistering }: Props) {
  return (
    <StyledLoginButtons>
      <Link to="/register">
        <StyledLoginButton onClick={() => setIsRegistering(true)}>
          Create Account
        </StyledLoginButton>
      </Link>
      <a style={{}} href="https://api.odinbook.xyz/login/facebook">
        <StyledLoginButton>Sign in with Facebook</StyledLoginButton>
      </a>
      <StyledLoginButton onClick={handleGuestLogin}>
        Sign in as Guest
      </StyledLoginButton>
    </StyledLoginButtons>
  );
}

export default LoginButtons;
