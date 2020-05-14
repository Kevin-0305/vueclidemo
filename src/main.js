import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import VueAxios from "vue-axios";
Vue.use(VueAxios,axios);
import VueCookie from 'vue-cookie'
Vue.config.productionTip = false;
Vue.use(VueCookie);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
