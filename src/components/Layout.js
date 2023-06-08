import React, { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import { ThemeContext } from "./Context";

export default function Layout({ children }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen min-w-screen ${
        isDarkMode ? "bg-primary-dark-100 dark" : "bg-white"
      }`}
    >
      <Navbar />
      {children}
    </div>
  );
}
