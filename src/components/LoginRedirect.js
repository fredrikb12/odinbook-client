import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { tryLogin } from "../authHelpers";
import useAuth from "../useAuth";

function LoginRedirect({}) {
  const { login, loading, error } = useAuth();
  const nav = useNavigate();
  
  useEffect(() => {
    login();
  }, [nav, login, error]);

  if (loading) return <p>Logging in...</p>;
  else nav("/login");
}

export default LoginRedirect;
