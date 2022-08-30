import { useEffect, useState } from "react";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import useAuth from "./useAuth";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import MobileNavbar from "./components/MobileNavbar";

function App() {
  const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false);
  const { user, login } = useAuth();
  const nav = useNavigate();
  const location = useLocation();
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
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {location.pathname !== "/login" && (
          <Link to="/login">
            <Button
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                padding: "8px 16px",
              }}
            >
              Go to login page
            </Button>
          </Link>
        )}
        <Outlet />
      </div>
    );
  } else {
    return (
      <>
        <Navbar />
        <MobileNavbar />
        <Outlet />
      </>
    );
  }
}

export default App;
