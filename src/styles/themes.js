// src/styles/themes.js
export const lightTheme = {
  "--background": "#ffffff",
  "--foreground": "#171717",
  "--font-geist-sans": "sans-serif", // Or your specific font stack
  "--font-geist-mono": "monospace", // Or your specific font stack
  // Add other theme-specific variables as needed
};

export const darkTheme = {
  "--background": "#0a0a0a",
  "--foreground": "#ededed",
  "--font-geist-sans": "sans-serif",
  "--font-geist-mono": "monospace",
  // Add other theme-specific variables
};

export const organizationATheme = {
  "--background": "#f3e5f5",
  "--foreground": "#37003c",
  "--font-geist-sans": "serif",
  "--font-geist-mono": "monospace",
  // ...
};

// ... other themes

export const themeOptions = [
  { name: "light", label: "Light" },
  { name: "dark", label: "Dark" },
  { name: "organizationA", label: "Organization A" },
  // ...
];

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  organizationA: organizationATheme,
  // ...
};
