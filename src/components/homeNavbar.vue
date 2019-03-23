<template>
<div>
    <div class="container">
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal">fruitstore
        <i class="fas fa-globe-asia "></i>
        </h5>
    <nav class="my-2 my-md-0 mr-md-3 ">
        <router-link class="p-2 text-dark" to="/">
        <i class="fas fa-home"></i>
        home
        </router-link>
        <router-link class="p-2 text-dark" to="/Customer_order">
        <i class="fas fa-apple-alt"></i>
        product
        </router-link>
        <router-link class="p-2 text-dark" to="/order">
        <i class="far fa-list-alt"></i>
        order
        </router-link>
    </nav>
    <router-link class="btn btn-outline-info" to="/login">
    管理員登入
    </router-link>
</div>
</div>
</div>
</template>

