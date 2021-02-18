import Vue from 'vue'
import App from './App.vue'
import vueHeadful from 'vue-headful'

Vue.config.productionTip = false

export const eventBus = new Vue()
Vue.component('vue-headful', vueHeadful);

new Vue({
  render: h => h(App),
}).$mount('#app')
