import { createVuetify } from "vuetify";
import "vuetify/styles";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { createI18n, useI18n } from "vue-i18n";
import ckbLocale from "../locales/ckb.json";
import enLocale from "../locales/en.json";

const messages = {
  en: enLocale,
  ckb: ckbLocale,
};

export const i18n = new (createI18n as any)({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: "ckb",
  fallbackLocale: "en",
  messages,
});

export const vuetify = createVuetify({
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
    rtl: {
      ckb: true,
    },
  },
});
