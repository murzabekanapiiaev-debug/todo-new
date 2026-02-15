import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "./context/ThemeProvider.jsx"
import { LanguageContext, LanguageProvider } from './context/LanguageProvider.jsx'

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>,
);
