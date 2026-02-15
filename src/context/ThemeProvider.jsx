import { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {}
      <StyledThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
