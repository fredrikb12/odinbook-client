import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginRedirect({ setUser }) {
  const nav = useNavigate();
  useEffect(() => {
    async function tryFetchLogin() {
      try {
        const data = await fetch("http://localhost:3000/auth/success", {
          credentials: "include",
          method: "GET",
          mode: "cors",
        });
        if (data.status === 200) {
          const userData = await data.json();
          if (userData.statusCode === 200) {
            setUser(userData.userId);
            nav("/");
          }
        }
      } catch (e) {
        console.log(e);
        nav("http://localhost:3001/login");
      }
    }
    tryFetchLogin();
  }, [setUser, nav]);
  return <p>Logging in...</p>;
}

export default LoginRedirect;
