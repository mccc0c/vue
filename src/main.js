// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import '../static/js/easy.js'
import '../static/js/jquery.validate.js'
import '../static/css/easy.css'

/*可导入公用的css和js*/
/*import jQuery from 'jQuery'*/

Vue.config.productionTip = false

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/
new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box')
