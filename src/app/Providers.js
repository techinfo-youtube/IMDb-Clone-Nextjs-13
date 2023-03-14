"use client";
import { ThemeProvider } from "next-themes";

import React from "react";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:text-gray-200 dark:bg-gray-700 text-black transition-colors duration-300 min-h-screen select-none z-10">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
