import React from "react";
import { PLarge } from "../Typography/Text";
import { CgSpinner } from "react-icons/cg";

const Button = ({ label, onClick, type, loading }) => {
  return (
    <button
      className="bg-secondary-500 dark:bg-secondary-dark-500 hover:bg-secondary-600 dark:hover:bg-secondary-dark-600 active:bg-secondary-800 dark:active:bg-secondary-dark-800 rounded-lg px-5 py-2.5 m-4"
      onClick={onClick}
      type={type}
      disabled={loading}
    >
      {loading ? (
        <CgSpinner
          size={28}
          className="text-typography dark:text-typography-dark mx-4 animate-spin"
        />
      ) : (
        <PLarge> {label} </PLarge>
      )}
    </button>
  );
};

export default Button;
