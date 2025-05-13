"use client";

import React, { createContext, useState, useEffect, useContext, useCallback } from "react";
import { themes, lightTheme } from "@/styles/themes";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const applyTheme = useCallback((themeObject, themeName) => {
    const root = window.document.documentElement;
    for (const key in themeObject) {
      if (themeObject.hasOwnProperty(key)) {
        root.style.setProperty(key, themeObject[key]);
      }
    }
    localStorage.setItem("appTheme", themeName);
  }, []);

  useEffect(() => {
    // Check for stored theme
    const storedTheme = localStorage.getItem("appTheme");
    let initialTheme = "light"; // Default to light

    // Detect system theme as a fallback
    if (!storedTheme) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      initialTheme = prefersDark ? "dark" : "light";
    } else if (themes[storedTheme]) {
      initialTheme = storedTheme;
    }

    setTheme(initialTheme);
    applyTheme(themes[initialTheme] || lightTheme, initialTheme);
  }, [applyTheme]);

  const switchTheme = (newTheme) => {
    setTheme(newTheme);
    applyTheme(themes[newTheme] || lightTheme, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);