"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext"; // Adjust path if needed

const ThemeToggleButton = () => {
  const { theme, switchTheme } = useTheme();

  const toggleTheme = () => {
    switchTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggleButton;