import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// start :: imoprting main scss
import "./assets/scss/main.scss";
// end :: importing main scss

// start :: owl carousel2
import owlCarousel from "vue-owl-carousel2";
Vue.component("owl-carousel", owlCarousel);
// end :: owl carousel2

//Start :: base Button
import BaseButton from "./components/ui/BaseButton.vue";
Vue.component("base-button", BaseButton);
//End :: base Button

// START:: IMPORTING FONT AWESOME
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
// END:: IMPORTING FONT AWESOME

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
