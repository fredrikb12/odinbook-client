import { useEffect, useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import Logout from "./components/Logout";
import authAPI from "./authHelpers";
import useAuth from "./useAuth";
import Navbar from "./components/Navbar";

function App() {
  const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false);
  const { user, login } = useAuth();
  const nav = useNavigate();
  useEffect(() => {
    async function attemptLogin() {
      if (hasAttemptedLogin) return;
      await login();

      setHasAttemptedLogin(() => true);

      if (!user) nav("/login");
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
        <Navbar />
        <Outlet />
      </div>
    );
  }
}

export default App;
