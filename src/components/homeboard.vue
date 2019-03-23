<template>
  <div>
    <homeNavbar/>
    <router-view></router-view>
    <cart></cart>
    <Footer></Footer>
    
  </div>
</template>

<script>
import homeNavbar from './homeNavbar';
import Footer from './Footer';
import cart from './cart';

export default {
  components:{
    homeNavbar,
    Footer,
    cart,



  },
};
</script>

<style>
        html {
            height: 100%;
        }

        body {
            background-image: url('https://i.imgur.com/kig6lBp.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
        }
    </style>