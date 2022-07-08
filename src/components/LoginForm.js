import { StyledLoginButton } from "./styled/LoginButton.styled";
import { StyledLoginForm } from "./styled/LoginForm.styled";
import TextInput from "./TextInput";

function LoginForm({
  handleChange,
  handleSubmit,
  handleGuestLogin,
  formData,
  style,
}) {
  return (
    <StyledLoginForm>
      <label htmlFor="username">Email:</label>
      <TextInput
        type="email"
        value={formData.username}
        onChange={handleChange}
        name="username"
        placeholder="your_name@gmail.com"
      />
      <label htmlFor="password">Password:</label>{" "}
      <TextInput
        type="password"
        value={formData.password}
        onChange={handleChange}
        name="password"
      />
      <StyledLoginButton onClick={handleSubmit}>Sign In</StyledLoginButton>
    </StyledLoginForm>
  );
}
export default LoginForm;
