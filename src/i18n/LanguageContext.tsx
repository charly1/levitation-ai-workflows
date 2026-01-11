import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Language, translations } from "./translations";

type TranslationType = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "en";
  
  try {
    const saved = localStorage.getItem("language") as Language;
    if (saved && ["en", "fr", "de"].includes(saved)) {
      return saved;
    }
    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === "fr") return "fr";
    if (browserLang === "de") return "de";
  } catch {
    // localStorage might not be available
  }
  return "en";
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    // Re-check on mount in case SSR default was used
    const initialLang = getInitialLanguage();
    if (initialLang !== language) {
      setLanguage(initialLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem("language", lang);
    } catch {
      // localStorage might not be available
    }
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
