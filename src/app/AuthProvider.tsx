"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Role = "citizen" | "expert";

export interface AuthUser {
  name: string;
  email: string;
  role: Role;
}

interface AuthContextValue {
  user: AuthUser | null;
  login: (data: { email: string }) => void;
  register: (data: { name: string; email: string; role?: Role }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = "terramemory_user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as AuthUser;
      if (parsed?.email) {
        setUser(parsed);
      }
    } catch {
      // ignore parse error
    }
  }, []);

  const persist = useCallback((value: AuthUser | null) => {
    if (typeof window === "undefined") return;
    if (!value) {
      window.localStorage.removeItem(STORAGE_KEY);
    } else {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    }
  }, []);

  const login = useCallback(
    (data: { email: string }) => {
      setUser((prev) => {
        const next: AuthUser = prev ?? {
          name: data.email.split("@")[0] || "Участник",
          email: data.email,
          role: "citizen",
        };
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const register = useCallback(
    (data: { name: string; email: string; role?: Role }) => {
      const next: AuthUser = {
        name: data.name || data.email.split("@")[0] || "Участник",
        email: data.email,
        role: data.role ?? "citizen",
      };
      setUser(next);
      persist(next);
    },
    [persist],
  );

  const logout = useCallback(() => {
    setUser(null);
    persist(null);
  }, [persist]);

  const value: AuthContextValue = {
    user,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}

