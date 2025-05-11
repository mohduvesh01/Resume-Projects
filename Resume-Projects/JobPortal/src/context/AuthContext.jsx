import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("employlinkUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (email, password) => {
    const stored = JSON.parse(localStorage.getItem("employlinkUser"));
    if (stored && stored.email === email && stored.password === password) {
      setUser(stored);
      return true;
    }
    return false;
  };

  const signup = (name, email, password) => {
    const userObj = { name, email, password };
    localStorage.setItem("employlinkUser", JSON.stringify(userObj));
    setUser(userObj);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("employlinkUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
