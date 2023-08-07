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
      {/* <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-200 dark:bg-secondary-dark-200 rounded-full mix-blend-multiply filter blur-xl dark:blur-sm opacity-50 dark:opacity-100"></div>
      <div className="absolute top-2/4 left-1/3 w-72 h-72 bg-secondary-400 dark:bg-secondary-dark-200 rounded-full mix-blend-multiply filter blur-xl dark:blur-sm opacity-30 dark:opacity-100"></div>
      <div className="absolute top-2/4 left-1/2 w-60 h-60 bg-secondary-400 dark:bg-secondary-dark-200 rounded-full mix-blend-multiply filter blur-md dark:blur-sm opacity-30 dark:opacity-100"></div>
      <div className="absolute top-1/3 left-2/3 w-44 h-44 bg-secondary-400 dark:bg-secondary-dark-200 rounded-full mix-blend-multiply filter blur-md opacity-30"></div> */}
      <Navbar />
      {children}
    </div>
  );
}
