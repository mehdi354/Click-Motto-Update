import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false

Vue.use(VueCarousel);
/*===================== Custom Css ==================*/ 
import "@/assets/css/style.css";
new Vue({
  render: h => h(App),
}).$mount('#app')
