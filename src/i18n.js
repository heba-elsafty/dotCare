import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// EN
import translationEN from "./locales/en/translation.json";
import homeEN from "./locales/en/homepage.json";

// AR
import translationAR from "./locales/ar/translation.json";
import homeAR from "./locales/ar/homepage.json";


const messages = {
  en: {
    translation: translationEN,
    home: homeEN,
  },
  ar: {
    translation: translationAR,
    home: homeAR,
  },
};

const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages,
})

export default i18n