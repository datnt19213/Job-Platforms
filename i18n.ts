// src/i18n.ts

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import trực tiếp file JSON đã dịch
import translationVI from '@/locales/vi/translation.json';

// import translationEN from '@/locales/en/translation.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      vi: {
        translation: translationVI,
      },
      // en: {
      //   translation: translationEN,
      // },
    },
    lng: 'vi', // Ngôn ngữ mặc định
    fallbackLng: 'vi',

    interpolation: {
      escapeValue: false, // React đã tự xử lý XSS
    },
  })

export default i18n
