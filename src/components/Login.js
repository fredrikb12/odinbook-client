import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";

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
    <div>
      <a href="http://localhost:3000/login/facebook">
        <button>Sign in with Facebook</button>
      </a>
      <form
        style={{ color: "white", display: "flex", flexDirection: "column" }}
      >
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={formData.username}
            onChange={handleChange}
            name="username"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
        </label>
        <label>
          Confirm password:
          <input
            type="password"
            value={formData.password_confirm}
            onChange={handleChange}
            name="password_confirm"
          />
        </label>
        <button onClick={handleSubmit} style={{ maxWidth: "150px" }}>
          Sign In
        </button>
        <button onClick={handleGuestLogin} style={{ maxWidth: "150px" }}>
          Sign in as Guest
        </button>
      </form>
    </div>
  );
}

export default Login;
