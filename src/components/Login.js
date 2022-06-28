import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
import LoginForm from "./LoginForm";

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
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <a href="http://localhost:3000/login/facebook">
          <button>Sign in with Facebook</button>
        </a>
        <button onClick={handleGuestLogin} style={{ maxWidth: "150px" }}>
          Sign in as Guest
        </button>
      </div>
      <p style={{ color: "white", margin: "50px" }}>OR</p>
      <LoginForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleGuestLogin={handleGuestLogin}
        formData={formData}
      />
    </div>
  );
}

export default Login;
