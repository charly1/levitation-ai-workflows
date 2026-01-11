import { createContext, useContext, useState, ReactNode } from "react";
import { Language, translations } from "./translations";

type TranslationType = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if there's a saved preference
    const saved = localStorage.getItem("language") as Language;
    if (saved && ["en", "fr", "de"].includes(saved)) {
      return saved;
    }
    // Try to detect browser language
    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === "fr") return "fr";
    if (browserLang === "de") return "de";
    return "en";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
