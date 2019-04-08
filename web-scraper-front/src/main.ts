import Vue from 'vue';
import App from './App.vue';
import langs from '../translations.json';
import router from './router';
import AppConfig from './config';
import './styles.scss';

Vue.prototype.trans = (str) => {
  const result = langs[AppConfig.lang][str];
  if (result) {
    return result;
  } else {
    return 'Invalid translation for ' + str + ' in language ' + AppConfig.lang;
  }
};
Vue.config.productionTip = false;


new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
