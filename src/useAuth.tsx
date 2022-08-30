import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import authAPI from "./authHelpers";

interface AuthInterface {
  login: () => any;
  user: string | null | void;
  error: string | null;
  loading: boolean;
  logOut: () => any;
}
const AuthContext = createContext<AuthInterface>({
  login: () => null,
  user: null,
  error: "",
  loading: false,
  logOut: () => null,
});

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<string | void | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setError(null);
  }, [location.pathname]);

  useEffect(() => {
    async function getUser() {
      const currentUser = await authAPI
        .getCurrentUser()
        .catch((e) => setError(e));
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
