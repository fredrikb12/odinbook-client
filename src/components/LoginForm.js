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
      />
      <label htmlFor="password">Password:</label>{" "}
      <TextInput
        type="password"
        value={formData.password}
        onChange={handleChange}
        name="password"
      />
      <button onClick={handleSubmit} style={{ maxWidth: "150px" }}>
        Sign In
      </button>
    </StyledLoginForm>
  );
}
export default LoginForm;
