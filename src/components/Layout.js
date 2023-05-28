import React from "react";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen min-w-screen bg-primary-dark-100 dark">
      <Navbar />
      {children}
    </div>
  );
}
