import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "../App";
import useAuth, { AuthProvider } from "../useAuth";
import Homepage from "./Homepage";
import Login from "./Login";
import LoginRedirect from "./LoginRedirect";
import Profile from "./Profile";
import Register from "./Register";
import { GlobalStyle } from "./styled/GlobalStyle.styled";
import FragmentHandler from "./FragmentHandler";
import Users from "./Users";
import { theme } from "../utils/theme";

function RouteSwitch() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyle />
          <FragmentHandler />
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
              <Route path="/register" element={<Register />} />
              <Route path="/login-redirect#_=_" element={<LoginRedirect />} />
              <Route
                path="/users/:userId"
                element={
                  <AuthRoute>
                    <Profile />
                  </AuthRoute>
                }
              />
              <Route
                path="/users"
                element={
                  <AuthRoute>
                    <Users />
                  </AuthRoute>
                }
              />
              <Route path="*" element={<LoginRedirect />} />
            </Route>
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </HashRouter>
  );
}

function AuthRoute({ children }: any) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  else return children;
}

export default RouteSwitch;
