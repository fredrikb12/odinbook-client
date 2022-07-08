import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
import { StyledLoginButton } from "./styled/LoginButton.styled";
import { StyledRegister } from "./styled/Register.styled";
import TextInput from "./TextInput";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    password_confirm: "",
  });
  const [errors, setErrors] = useState([]);

  const { login, user } = useAuth();
  const nav = useNavigate();

  function handleChange(e) {
    setErrors([]);
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  useEffect(() => {
    if (user) nav("/");
  }, [user, nav]);

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const res = await fetch("https://api.odinbook.xyz/users", {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        method: "POST",
        mode: "cors",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.errors) setErrors(data.errors);
      if (data.statusCode !== 200) {
        login();
      } else {
        setFormData({
          name: data.name || "",
          username: data.username || "",
          password: "",
          password_confirm: "",
        });
      }
    } catch (e) {
      setErrors(() => [e]);
    }
  }

  function getError(errors, fieldName) {
    return errors
      .filter((e) => e.param === fieldName)
      .map((e, index) => (
        <p key={index} style={{ color: "red", marginTop: "-15px" }}>
          {e.msg && e.msg}
        </p>
      ));
  }

  return (
    <StyledRegister>
      <label htmlFor="name">Name:</label>
      <TextInput
        type="text"
        value={formData.name}
        onChange={handleChange}
        name="name"
        placeholder="Your Name"
      />
      {getError(errors, "name")}
      <label htmlFor="username">Email:</label>
      <TextInput
        type="email"
        value={formData.username}
        onChange={handleChange}
        name="username"
        placeholder="your_name@gmail.com"
      />
      {getError(errors, "username")}
      <label htmlFor="password">Password:</label>
      <TextInput
        type="password"
        value={formData.password}
        onChange={handleChange}
        name="password"
      />
      {getError(errors, "password")}
      <label htmlFor="password_confirm">Confirm Password:</label>
      <TextInput
        type="password"
        value={formData.password_confirm}
        onChange={handleChange}
        name="password_confirm"
      />
      {getError(errors, "password_confirm")}

      <StyledLoginButton onClick={handleRegister}>Register</StyledLoginButton>
    </StyledRegister>
  );
}

export default Register;
