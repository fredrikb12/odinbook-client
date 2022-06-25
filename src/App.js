import { useEffect, useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import Logout from "./components/Logout";
import authAPI from "./authHelpers";
import useAuth from "./useAuth";

function App() {
  const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false);
  const { user, login } = useAuth();
  const nav = useNavigate();
  useEffect(() => {
    async function attemptLogin() {
      if (hasAttemptedLogin) return;
      await login();

      setHasAttemptedLogin(() => true);

      if (user) nav("/");
      else nav("/login");
    }

    attemptLogin();
  }, [nav, hasAttemptedLogin, login, user]);

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
        <Logout />
        <Outlet />
      </div>
    );
  }
}

export default App;
