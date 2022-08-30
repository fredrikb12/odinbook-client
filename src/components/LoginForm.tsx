import { ChangeEvent } from "react";
import { IFormData } from "../types/types";
import { StyledLoginButton } from "./styled/LoginButton.styled";
import { StyledLoginForm } from "./styled/LoginForm.styled";
import TextInput from "./TextInput";

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: SubmitEvent) => void;
  formData: IFormData;
  style: object;
}

function LoginForm({ handleChange, handleSubmit, formData, style }: Props) {
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
