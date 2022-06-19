import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// EN
import translationEN from "./locales/en/translation.json";
import homeEN from "./locales/en/homepage.json";
import productEN from "./locales/en/product.json";

// AR
import translationAR from "./locales/ar/translation.json";
import homeAR from "./locales/ar/homepage.json";
import productAr from "./locales/ar/product.json";


const messages = {
  en: {
    translation: translationEN,
    home: homeEN,
    product: productEN,
  },
  ar: {
    translation: translationAR,
    home: homeAR,
    product: productAr,
  },
};

const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages,
})

export default i18n