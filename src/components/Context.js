import React, { createContext, useState } from "react";

const isLocalStorageThemeDark = () => {
  return localStorage.getItem("theme") === "dark";
};

export const ThemeContext = createContext({
  isDarkMode: false,
});

export const AppProvider = ({ children }) => {
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
