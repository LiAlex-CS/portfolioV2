import React, { useContext } from "react";
import { ThemeContext } from "../Context";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeButton = () => {
  const { isDarkMode, flipDarkTheme } = useContext(ThemeContext);

  return (
    <button
      className="rounded-full p-3 border-primary-300 dark:border-primary-dark-300 text-typography dark:text-typography-dark border-2 hover:border-primary-200 dark:hover:border-primary-dark-400"
      onClick={flipDarkTheme}
    >
      {isDarkMode ? <BsMoon /> : <BsSun />}
    </button>
  );
};

export default ThemeButton;
