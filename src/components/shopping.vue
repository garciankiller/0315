<template>
    <div>
        商品頁面 
    </div>
</template>

<script>
export default {
    data(){
        return{
            productId:'',
            product:[],
        }
    },
    methods:{
       getProduct(){
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${vm.productId}`;
        this.$http.get(url).then((response) => {
            vm.product = response.data.product;
            console.log(response);
        });
        }, 
    },
    created(){
        this.getProduct();
        this.productId = this.$route.params.productId;
        console.log(this.productId);
    },
}
</script>