import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const AppProvider = ({ children }) => {
  const isLocalStorageThemeDark = () => {
    return localStorage.getItem("theme") === "dark";
  };

  const [isDarkMode, setDarkMode] = useState(isLocalStorageThemeDark());

  const setLocalStorageTheme = (isDarkMode) => {
    isDarkMode
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
  };

  const flipDarkTheme = () => {
    setDarkMode(!isDarkMode);
    setLocalStorageTheme(!isDarkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        flipDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
