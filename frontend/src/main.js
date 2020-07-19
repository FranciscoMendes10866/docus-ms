import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/css/tailwind.css';

Vue.config.productionTip = false;

sync(store, router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
