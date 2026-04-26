import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; 
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ua', 
    
    supportedLngs: ['ua', 'us', 'pl', 'de', 'cs', 'hi'], 
    
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },

    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },

    interpolation: {
      escapeValue: false, 
    },
    
    load: 'languageOnly', 

    debug: process.env.NODE_ENV === 'development',

    react: {
      useSuspense: true, 
    }
  });

export default i18n;