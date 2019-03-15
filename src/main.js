// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VeeValidate from 'vee-validate';


import 'bootstrap';



import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';


Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_TW', zhTWValidate);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);
axios.defaults.withCredentials =true;
Vue.component('Loading', Loading)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

router.beforeEach((to, from , next) =>{
  // ...
  console.log('to',to,'from',from,'next',next);
  if(to.meta.requiresAuth){
    
    const api = `${process.env.APIPATH}/api/user/check`;
        axios.post(api).then((response) => {
        console.log(response.data);
        if(response.data.success){
          //vm.$router.push('/');
          next();
        }else{
          next({
            path:'/login',
          });
        }
        });
  }else{
    next();
  }
  
});
