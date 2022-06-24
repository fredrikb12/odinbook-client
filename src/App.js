import { useEffect, useState } from "react";
import {
  useNavigate,
  Link,
  Outlet,
} from "react-router-dom";
import Logout from "./components/Logout";

function App({ user, setUser }) {
  const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    async function tryFetchLogin() {
      if (hasAttemptedLogin) return;
      try {
        const data = await fetch("http://localhost:3000/auth/success", {
          credentials: "include",
          method: "GET",
          mode: "cors",
        });
        if (data.status === 200) {
          const userData = await data.json();
          if (userData.statusCode === 200 && userData.userId) {
            setUser(userData.userId);
            nav("/");
          } else {
            setUser(null);
            setHasAttemptedLogin(true);
            nav("/login");
          }
        } else {
          setHasAttemptedLogin(true);
          nav("/login");
        }
      } catch (e) {
        console.log(e);
        setHasAttemptedLogin(true);
        nav("/login");
      }
    }
    tryFetchLogin();
  }, [setUser, nav, hasAttemptedLogin]);

  if (!user) {
    return (
      <div>
        <Link to="/login">Log In</Link>
        <Outlet />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Logout setUser={setUser} />
        <Outlet />
      </div>
    );
  }
}

export default App;
