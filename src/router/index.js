import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import CustomerOrder from '@/components/pages/CustomerOrders';
import CustomerCheckout from '@/components/pages/CustomerCheckout';
import order from '@/components/pages/order';
import Coupon from '@/components/pages/Coupon';
import homeboard from '@/components/homeboard';
import home from '@/components/home';
import checkOrder from '@/components/checkOrder';
import shopping from '@/components/shopping';





Vue.use(Router);
Vue.use(VueAxios, axios);


export default new Router({
  routes: [
    {
    path:'*',
    redirect:'login',
    },

    {
      path: '/',
      name: 'homeboard',
      component: homeboard,
      children:[
        {
          path:'/',
          name:'home',
          component: home,
        },
        {
          path:'order',
          name:'order',
          component: order,
        },
        {
          path:'/checkorder',
          name:'checkorder',
          component: checkOrder,
        },
        {
          path:'shopping/:productId',
          name:'shopping',
          component: shopping,
        },
        {
          path:'Customer_order',
          name:'CustomerOrder',
          component: CustomerOrder,
         
        },
        {
          path:'customer_checkout/:orderId',
          name:'CustomerCheckout',
          component: CustomerCheckout,
         
        },
        
      ],
    },      

    {
      path:'/login',
      name:'Login',
      component: Login, 
    },
    {
      path: '/admin',
      name: 'HelloWorld',
      component: Dashboard,
      meta: {requiresAuth: true },
      children:[
        {
          path:'products',
          name:'products',
          component: Products,
          meta: {requiresAuth: true },
        },
        {
          path:'order',
          name:'order',
          component: order,
          meta: {requiresAuth: true },
        },
        {
          path:'coupon',
          name:'coupon',
          component: Coupon,
          meta: {requiresAuth: true },
        },
      ],
    },
  ],
});
