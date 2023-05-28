import React from "react";

export const Title = ({ children }) => {
  return (
    <h1 className="text-8xl font-bold text-black dark:text-white font-body">
      {children}
    </h1>
  );
};

export const H1 = ({ children }) => {
  return (
    <h1 className="text-5xl font-semibold text-black dark:text-white font-body">
      {children}
    </h1>
  );
};

export const H2 = ({ children }) => {
  return (
    <h2 className="text-4xl font-semibold text-black dark:text-white font-body">
      {children}
    </h2>
  );
};

export const H3 = ({ children }) => {
  return (
    <h3 className="text-2xl font-medium text-black dark:text-white font-body">
      {children}
    </h3>
  );
};

export const H4 = ({ children }) => {
  return (
    <h4 className="text-xl font-medium text-black dark:text-white font-body">
      {children}
    </h4>
  );
};

export const PLarge = ({ children }) => {
  return (
    <p className="text-xl font-normal text-black dark:text-white font-body">
      {children}
    </p>
  );
};

export const P = ({ children }) => {
  return (
    <p className="text-base font-normal text-black dark:text-white font-body">
      {children}
    </p>
  );
};
