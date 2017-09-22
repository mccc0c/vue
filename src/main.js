// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';

/*可导入公用的css和js*/
import $ from 'jquery'
import '../static/js/easy.js'
import '../static/js/flexible.js'
import '../static/js/jquery.validate.js'
import '../static/css/easy.css'
import '../static/css/style.css'

Vue.use(VueResource)

/*
*日志输出开关
*/
Vue.config.productionTip = false

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/
window.lsset= function(key,value){
	var curTime = new Date().getTime();
	localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
};
window.lsget = function(key,exp){
	var data = localStorage.getItem(key);
	/*console.log(data);*/
	if(!data || data == null){
		return null;
	}
	var dataObj = JSON.parse(data);
	/*console.log(dataObj);*/
	if(new Date().getTime() - dataObj.time >exp){
    localStorage.setItem('uid','');
		console.log('Information has passed.');
		return null;
	}else{
		/*var dataObjDatatoJson = JSON.parse(dataObj.data);*/
		return dataObj.data;
	}
}
// 全局导航钩子
 router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    /*console.log(isEmptyObject());*/
    if (!isEmptyObject()) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

 window.isEmptyObject = function()  {
 	var uid = lsget('uid',1000*60);
 	/*console.log(uid);*/
     if (!uid) {
    	return false;
 	 }else{
 	 	return true;
 	 }
 }
new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box')
