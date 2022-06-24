import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Homepage from "./Homepage";
import Login from "./Login";
import LoginRedirect from "./LoginRedirect";

function RouteSwitch() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <>{user && <>User id: {user}</>}</>
      <Routes>
        <Route path="/" element={<App user={user} setUser={setUser} />}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Login user={user} />} />
          <Route
            path="/login-redirect"
            element={<LoginRedirect setUser={setUser} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
