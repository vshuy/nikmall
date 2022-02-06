import Vue from 'vue';
import VueCookies from 'vue-cookies';
import CKEditor from 'ckeditor4-vue';
import EasySlider from 'vue-easy-slider';
import Meta from 'vue-meta';
import Notifications from 'vue-notification';

import App from './App.vue';
import router from './router/router';
import store from './store/store';

Vue.config.productionTip = false;
Vue.use(VueCookies);
Vue.use(CKEditor);
Vue.use(EasySlider);
Vue.use(Notifications);
Vue.use(Meta);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
