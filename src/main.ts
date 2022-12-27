import { createApp } from "vue";
import App from "./App.vue";
import { vuetify, i18n } from "./plugins/vuetify";
const vueApp = createApp(App);

vueApp.use(vuetify);

vueApp.mount("#app");
