import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; 
import LanguageDetector from 'i18next-browser-languagedetector';

const isBrowser = typeof window !== 'undefined';

// const i18nInstance = i18n.use(initReactI18next);
const i18nInstance = i18n.createInstance();

i18nInstance.use(initReactI18next);

if (isBrowser) {
  i18nInstance.use(Backend).use(LanguageDetector);
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uk', 
    
    supportedLngs: ['uk', 'us', 'pl', 'de', 'cs', 'hi'], 
    
    resources: isBrowser ? undefined : {
    uk: { translation: {} }
    },
    
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },

    backend: {
      // loadPath: '/locales/{{lng}}/translation.json',
      loadPath: `${import.meta.env.BASE_URL || '/'}locales/{{lng}}/translation.json`,
    },

    interpolation: {
      escapeValue: false, 
    },
    
    load: 'languageOnly', 

    // debug: process.env.NODE_ENV === 'development',
    debug: false,
    react: {
      useSuspense: true, 
    }
  });

export default i18n;