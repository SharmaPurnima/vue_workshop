import Vue from 'vue'
import App from './App.vue'

require("./assets/scss/App.scss")

Vue.config.productionTip = false

new Vue({
	render: h => h(App)
}).$mount('#app')
