import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAnalytics from 'vue-analytics';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import store from './store/store';

import { routes } from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueAnalytics, { id: 'UA-174248158-1', VueRouter });
Vue.use(BootstrapVue);

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
