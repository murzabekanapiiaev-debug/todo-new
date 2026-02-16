import { StrictMode } from "react"; // React'тын каталарды текшерүүчү режими.
import { createRoot } from "react-dom/client"; // DOM'го тиркемени байлоо үчүн курал.
import "./index.css"; // Глобалдык стилдер.
import App from "./App.jsx"; // Башкы App компоненти.
import { ThemeProvider } from "./context/ThemeProvider.jsx"; // Теманы башкаруучу провайдер.
import { LanguageProvider } from "./context/LanguageProvider.jsx"; // Тилди башкаруучу провайдер.

createRoot(document.getElementById("root")).render(
  // HTML'деги "root" элементине тиркемени орнотот.
  <ThemeProvider>
    {" "}
    {/* Бардык тиркемени Тема контексти менен ороп, түстөрдү жеткиликтүү кылат. */}
    <LanguageProvider>
      {" "}
      {/* Тил контексти менен ороп, котормолорду жеткиликтүү кылат. */}
      <App /> {/* Негизги тиркеме. */}
    </LanguageProvider>
  </ThemeProvider>,
);
