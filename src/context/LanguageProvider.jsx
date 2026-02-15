import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "EN" ? "RU" : "EN"));

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
