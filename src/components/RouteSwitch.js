import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "../App";
import useAuth, { AuthProvider } from "../useAuth";
import Homepage from "./Homepage";
import Login from "./Login";
import LoginRedirect from "./LoginRedirect";
import Profile from "./Profile";
import Register from "./Register";
import { GlobalStyle } from "./styled/GlobalStyle";
import Users from "./Users";

function RouteSwitch() {
  const theme = {
    main: "#18191A",
    postBg: "#242526",
    primaryText: "#E4E6EB",
    loginBorderRadius: "20px",
  };
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyle />
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
              <Route path="/login-redirect" element={<LoginRedirect />} />
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
            </Route>
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </HashRouter>
  );
}

function AuthRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  else return children;
}

export default RouteSwitch;
