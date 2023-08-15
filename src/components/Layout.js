import React, { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import { ThemeContext } from "./Context";
import { twMerge } from "tailwind-merge";

const BackgroundBlob = ({ className }) => {
  return (
    <div
      className={twMerge(
        "sticky rounded-full translate-x-[-50%] translate-y-[-50%]",
        className
      )}
    />
  );
};

export default function Layout({ children }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen min-w-screen ${
        isDarkMode ? "dark:bg-primary-dark-100 dark" : "bg-primary-500"
      }`}
    >
      <BackgroundBlob className="bg-gradient-to-br from-secondary-200 to-amber-200 dark:from-secondary-dark-200 dark:to-red-600 w-96 h-96 -mb-96 -mr-96 top-1/4 left-[20%] filter blur-lg" />
      <BackgroundBlob className="bg-secondary-300 dark:bg-secondary-dark-300 w-72 h-72 -mb-72 -mr-72 top-1/2 left-1/4 filter blur-lg opacity-75" />
      <BackgroundBlob className="bg-amber-400 dark:bg-amber-600 w-56 h-56 -mb-56 -mr-56 top-2/3 left-[22%] filter blur-xl opacity-60" />
      <BackgroundBlob className="bg-gradient-to-bl from-secondary-400 to-amber-300 dark:from-secondary-dark-400 dark:to-red-800 w-96 h-96 -mb-96 -mr-96 top-[40%] left-[60%] filter blur-lg" />
      <BackgroundBlob className="bg-gradient-to-l from-secondary-600 to-amber-500 dark:from-secondary-dark-600 dark:to-red-800 w-40 h-40 -mb-40 -mr-40 top-1/2 left-1/2 filter blur-lg opacity-80" />
      <BackgroundBlob className="bg-amber-400 dark:bg-amber-600 w-48 h-48 -mb-48 -mr-48 top-1/4 left-[70%] filter blur-md opacity-60" />
      <Navbar />
      <div className="z-10 relative">{children}</div>
    </div>
  );
}
