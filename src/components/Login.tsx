import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
import LoginButtons from "./LoginButtons";
import LoginForm from "./LoginForm";
import Register from "./Register";
import { StyledLoginPage } from "./styled/LoginPage.styled";

function Login() {
  const { login, user } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    password_confirm: "",
    username: "",
  });
  const nav = useNavigate();
  useEffect(() => {
    if (user) nav("/");
  }, [nav, user]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  }

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const response = await fetch("https://api.odinbook.xyz/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      mode: "cors",
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    login();
  }

  async function handleGuestLogin() {
    try {
      const response = await fetch("https://api.odinbook.xyz/auth/login", {
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
    } catch (e) {}
  }
  if (isRegistering) {
    return <Register />;
  } else {
    return (
      <StyledLoginPage>
        <LoginButtons
          setIsRegistering={setIsRegistering}
          handleGuestLogin={handleGuestLogin}
        />
        <LoginForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
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
}

export default Login;
