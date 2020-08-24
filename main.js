import Vue from 'vue'
import App from './App'
import store from './store'
import adq from 'common/adq.js'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.adq=adq;

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
