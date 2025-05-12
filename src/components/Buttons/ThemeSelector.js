"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { themeOptions } from "@/styles/themes";

const ThemeSelector = () => {
  const { theme, switchTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  // This ensures rendering only happens after client mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDropdownChange = (e) => {
    switchTheme(e.target.value);
  };

  const toggleLightDark = () => {
    if (theme === "dark") switchTheme("light");
    else if (theme === "light") switchTheme("dark");
    else switchTheme("light"); // fallback to light if on a custom theme
  };

  if (!isClient) return null; // prevent hydration mismatch

  return (
    <div className="flex items-center gap-4">
      <select
        value={theme}
        onChange={handleDropdownChange}
        className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-sm border border-gray-300 dark:border-gray-700 focus:outline-none"
      >
        {themeOptions.map((option) => (
          <option key={option.name} value={option.name}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        onClick={toggleLightDark}
        className="px-3 py-2 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeSelector;
