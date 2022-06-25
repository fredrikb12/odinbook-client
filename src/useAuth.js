import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import authAPI from "./authHelpers";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setError(null);
  }, [location.pathname]);

  useEffect(() => {
    async function getUser() {
      const currentUser = await authAPI.getCurrentUser().catch((e) => setError(e));
      setUser(currentUser);
      setLoadingInitial(false);
    }
    getUser();
  }, []);

  async function login() {
    setLoading(true);
    const currentUser = await authAPI.tryLogin().catch((e) => setError(e));
    setUser(currentUser);
    setLoading(false);
  }

  async function logOut() {
    await authAPI.logout();
    setUser(null);
  }

  const memoedValue = useMemo(
    () => ({ user, loading, error, login, logOut }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
