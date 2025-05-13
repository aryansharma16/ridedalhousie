"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { themes, lightTheme } from "@/styles/themes"; // Adjust path as needed

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark"); // Default theme key

  useEffect(() => {
    const storedTheme = localStorage.getItem("appTheme");
    if (storedTheme && themes[storedTheme]) {
      setTheme(storedTheme);
      applyTheme(themes[storedTheme]);
    } else {
      // Apply default theme on initial load
      applyTheme(themes.light || lightTheme);
    }
  }, []);

  const applyTheme = (themeObject) => {
    const root = window.document.documentElement;
    for (const key in themeObject) {
      if (themeObject.hasOwnProperty(key)) {
        root.style.setProperty(key, themeObject[key]);
      }
    }
    localStorage.setItem("appTheme", theme);
  };

  const switchTheme = (newTheme) => {
    setTheme(newTheme);
    applyTheme(themes[newTheme] || lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
