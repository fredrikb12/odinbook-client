import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
import LoginButtons from "./LoginButtons";
import LoginForm from "./LoginForm";
import { StyledLoginPage } from "./styled/LoginPage.styled";

function Login() {
  const { login, user } = useAuth();
  const [formData, setFormData] = useState({
    password: "",
    password_confirm: "",
    username: "",
  });
  const nav = useNavigate();
  useEffect(() => {
    if (user) nav("/");
  }, [nav, user]);

  function handleChange(e) {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      mode: "cors",
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);
    login();
  }

  async function handleGuestLogin() {
    const response = await fetch("http://localhost:3000/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        username: "test_user@gmail.com",
        password: "testpassword",
      }),
    });
    login();
  }

  return (
    <StyledLoginPage>
      <LoginButtons handleGuestLogin={handleGuestLogin} />
      <LoginForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleGuestLogin={handleGuestLogin}
        formData={formData}
        style={{
          borderLeft: "5px solid white",
          borderRadius: "6px",
          paddingLeft: "20px",
          flex: 1,
        }}
      />
    </StyledLoginPage>
  );
}

export default Login;
