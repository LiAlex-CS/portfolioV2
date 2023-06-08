import React from "react";

export const Title = ({ children, className }) => {
  return (
    <h1
      className={`text-8xl font-bold text-black dark:text-white font-body ${className}`}
    >
      {children}
    </h1>
  );
};

export const H1 = ({ children, className }) => {
  return (
    <h1
      className={`text-5xl font-semibold text-black dark:text-white font-body ${className}`}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, className }) => {
  return (
    <h2
      className={`text-4xl font-semibold text-black dark:text-white font-body ${className}`}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, className }) => {
  return (
    <h3
      className={`text-2xl font-medium text-black dark:text-white font-body ${className}`}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ children, className }) => {
  return (
    <h4
      className={`text-xl font-medium text-black dark:text-white font-body ${className}`}
    >
      {children}
    </h4>
  );
};

export const PLarge = ({ children, className }) => {
  return (
    <p
      className={`text-xl font-normal text-black dark:text-white font-body ${className}`}
    >
      {children}
    </p>
  );
};

export const P = ({ children, className }) => {
  return (
    <p
      className={`text-base font-normal text-black dark:text-white font-body ${className}`}
    >
      {children}
    </p>
  );
};
