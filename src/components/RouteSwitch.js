import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import useAuth, { AuthProvider } from "../useAuth";
import Homepage from "./Homepage";
import Login from "./Login";
import LoginRedirect from "./LoginRedirect";
import Profile from "./Profile";

function RouteSwitch() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              index
              element={
                <AuthRoute>
                  <Homepage />
                </AuthRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/login-redirect" element={<LoginRedirect />} />
            <Route
              path="/profile/:profileId"
              element={
                <AuthRoute>
                  <Profile />
                </AuthRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

function AuthRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  else return children;
}

export default RouteSwitch;
