import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import vuetify from './plugins/vuetify'
import '@/style/global.scss'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Vue.config.productionTip = false


new Vue({
  router,
  store,
  // vuetify,
  render: h => h(App)
}).$mount('#app')

