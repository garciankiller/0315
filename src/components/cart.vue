<template>
    <div>
    <button class="btn btn-outline-danger btn-lg" 
    style="float:right; position:fixed; right:0px; bottom:0px; z-index:20; "
    data-toggle="modal" data-target="#cartModal"
    @click.prevent="updatedcart">
        <i class="fas fa-cart-plus"></i>
    </button>  

    <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">您的購物車</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="my-5 row justify-content-center">
                    <table class="table">
                    <thead>
                        <th></th>
                        <th>品名</th>
                        <th>數量</th>
                        <th>單價</th>
                    </thead>
                    <tbody>
                        <tr v-for="item in cart.carts" :key="item.id">
                        <td class="align-middle">
                            <button type="button" class="btn btn-outline-danger btn-sm"
                            @click="removeCartItem(item.id)">
                            <i class="far fa-trash-alt"></i>
                            </button>
                        </td>
                        <td class="align-middle">
                            {{ item.product.title }}
                            <div class="text-success" v-if="item.coupon">
                            以套用優惠券
                            </div>
                        </td>
                        <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                        <td class="align-middle text-right">{{ item.final_total }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr> 
                        <td colspan="3" class="text-right">總計</td>
                        <td class="text-right">{{ cart.total }}</td>
                        </tr>
                        <tr v-if="cart.final_total !== cart.total">
                        <td colspan="3" class="text-right text-success">折扣價</td>
                        <td class="text-right text-success">{{ cart.final_total }}</td>
                        </tr>
                    </tfoot>
                    </table>
                    <div class="input-group mb-3 input-group-sm">
                        <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                            套用優惠碼
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                
                <button type="button" class="btn btn-primary router-link" data-dismiss="modal">
                    <router-link class="p-2 text-dark" to="/checkorder">
                    結帳
                    </router-link></button>
            </div>
            </div>
        </div>
    </div>

    </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      products: [],
      product:[],
      cart:[],
      pagination: {},
      status:{
          loadingItem:'',
      },
      form:{
          user:{
            name:'',
            email:'',
            tel:'',
            address:'',
          },
          message:'',
      },
      isLoading: false,
      coupon_code:'',
    };
  },
  methods: {
    getProducts(page = 1){
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
            const vm = this;
            vm.isLoading = true;
            //console.log(process.env.APIPATH, process.env.CUSTOMPATH);
                this.$http.get(api).then((response) => {
                //console.log(response.data);
                vm.isLoading = false;
                vm.pagination = response.data.pagination;
               vm.products =  response.data.products;
            });  
        },
    addtoCart(id, qty = 1){
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(url,{data: cart}).then((response) => {
        console.log(response);
        vm.status.loadingItem = '';
        vm.getCart();
        $('#productModal').modal('hide');
      });
    },
    getCart(){
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        //vm.products = response.data.products;
        vm.cart = response.data.data;
        //console.log(response);
        vm.isLoading = false;
        
      });
    },
    removeCartItem(id){
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then(() => {
        vm.getCart();
        vm.isLoading = false;
      });
    },
    addCouponCode(){
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code
      }
      vm.isLoading = true;
      this.$http.post(url,{data: coupon }).then((response) => {
        console.log(response);
        vm.getCart();
        vm.isLoading = false;
      });
    },
    updatedcart() {
        const vm = this;
        vm.getCart();
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>