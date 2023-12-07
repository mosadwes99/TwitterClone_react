import transaltionEN from "./Translate/en.json";
import transaltionAR from "./Translate/ar.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import  LanguageDetector  from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: transaltionEN,
  },
  ar: {
    translation: transaltionAR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false, 
    },
    React: {
      useSuspense:false
    },
  });

export default i18n;
