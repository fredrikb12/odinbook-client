import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ user }) {
  const nav = useNavigate();
  useEffect(() => {
    if (user) nav("/");
  }, [nav, user]);

  return (
    <div>
      <a href="http://localhost:3000/login/facebook">
        <button>Log in with Facebook</button>
      </a>
    </div>
  );
}

export default Login;
