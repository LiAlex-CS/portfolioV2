import React, { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import { ThemeContext } from "./Context";

export default function Layout({ children }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen min-w-screen ${
        isDarkMode ? "dark:bg-primary-dark-100 dark" : "bg-primary-500"
      }`}
    >
      <Navbar />
      {children}
    </div>
  );
}
