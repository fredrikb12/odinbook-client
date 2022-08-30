import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function FragmentHandler() {
  const nav = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "_=_") nav("/");
  }, [location.pathname, nav]);
  return null;
}

export default FragmentHandler;
