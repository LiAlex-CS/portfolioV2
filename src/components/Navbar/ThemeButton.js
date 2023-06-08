import React, { useContext } from "react";
import { ThemeContext } from "../Context";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeButton = () => {
  const { isDarkMode, flipDarkTheme } = useContext(ThemeContext);

  return (
    <button
      className="rounded-full p-3 dark:text-white border-2"
      onClick={flipDarkTheme}
    >
      {isDarkMode ? <BsMoon /> : <BsSun />}
    </button>
  );
};

export default ThemeButton;
