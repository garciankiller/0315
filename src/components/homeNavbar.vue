<template>
    <div>
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
  <h5 class="my-0 mr-md-auto font-weight-normal">fruitstore
      <i class="fas fa-globe-asia"></i>

  </h5>
  <nav class="my-2 my-md-0 mr-md-3">
    <a class="p-2 text-dark" >
        <router-link to="/home">
        <i class="fas fa-home"></i>
        home
        </router-link></a>
    <a class="p-2 text-dark" >
        <router-link to="/Customer_order">
        <i class="fas fa-apple-alt"></i>
        product
        </router-link></a>
    <a class="p-2 text-dark" href="#">
        <router-link to="/order">
        <i class="far fa-list-alt"></i>
        order
        </router-link>
    </a>
  </nav>
  <a class="btn btn-outline-primary">
    <router-link to="/login">
    管理員登入
    </router-link></a>
</div>
        <!-- <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">泰山水果王</a>

  <ul class="navbar-nav px-3">
    <li class="nav-item text-nowrap">
        <router-link class="nav-link" to="/">
        <i class="far fa-list-alt"></i>
        首頁
        </router-link>
    </li>
    <li class="nav-item text-nowrap">
        <router-link class="nav-link" to="/Customer_order">
        <i class="fas fa-box-open"></i>
        產品列表
        </router-link>
    </li>
    <li class="nav-item text-nowrap">
        <router-link class="nav-link" to="/order">
        <i class="fas fa-ticket-alt"></i>
        訂單列表
        </router-link>
    </li>
    <li class="nav-item text-nowrap">
      <router-link class="nav-link" to="/login">
        <i class="fas fa-ticket-alt"></i>
        管理員登入
        </router-link>
    </li>
  </ul>
</nav> -->
    </div>
</template>

