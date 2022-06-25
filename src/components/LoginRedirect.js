import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";

function LoginRedirect({}) {
  const { login, loading, error } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    login();
  }, [nav, login, error]);

  useEffect(() => {
    if (loading) return;
    else nav("/");
  }, [loading, nav]);

  if (loading) return <p>Logging in...</p>;
  else return null;
}

export default LoginRedirect;
