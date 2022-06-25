import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "../App";
import useAuth, { AuthProvider } from "../useAuth";
import Homepage from "./Homepage";
import Login from "./Login";
import LoginRedirect from "./LoginRedirect";
import Profile from "./Profile";
import { GlobalStyle } from "./styled/GlobalStyle";

function RouteSwitch() {
  const theme = {
    main: "#18191A",
    postBg: "#242526",
  };
  return (
    <BrowserRouter>
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
      </ThemeProvider>
    </BrowserRouter>
  );
}

function AuthRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  else return children;
}

export default RouteSwitch;
