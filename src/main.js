import Vue from 'vue';
import VueRouter from 'vue-router';
import VueGtag from 'vue-gtag';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import store from './store/store';

import { routes } from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  mode: 'history',
  routes,
});

Vue.use(VueGtag,
  { config: { id: 'UA-174248158-1' } },
  router);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
