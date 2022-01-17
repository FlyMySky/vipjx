import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// step1：引入 axios
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Axios.defaults.baseUrl = '/api'
Vue.use(ElementUI)

new Vue({
    render: h => h(App),
}).$mount('#app')
