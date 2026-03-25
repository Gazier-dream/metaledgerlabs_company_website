import React, { createContext, useContext } from "react";

const ThemeContext = createContext({ theme: "dark", toggle: () => {} });

export function ThemeProvider({ children }) {
  // Always dark — gaming aesthetic
  React.useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <ThemeContext.Provider value={{ theme: "dark", toggle: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
