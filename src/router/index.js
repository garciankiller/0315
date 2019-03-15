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



Vue.use(Router);
Vue.use(VueAxios, axios);


export default new Router({
  routes: [
    {
    path:'*',
    redirect:'login',
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

        {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        children:[
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

  ],
});
