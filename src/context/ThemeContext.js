"use client";

import React, { useState, createContext } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  function toggle() {
    setMode((preState) => (preState === "dark" ? "light" : "dark"));
  }
  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
