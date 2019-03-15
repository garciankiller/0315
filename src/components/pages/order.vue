<template>
    <div>
      <div class="table-responsive">
		  <loading :active.sync="isLoading"></loading>
			<table class="table table-hover mt-3">
				<thead class="table-becare">
					<tr class="text-nowrap">
						<th width="40" class="text-center">購買時間</th>
                        <th width="80" class="text-center">Email</th>
                        <th width="80" class="text-center">購買款項</th>
                        <th width="40">應付金額</th>
                        <th width="80" class="text-center">是否付款</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in orders" :key="item.id">
						<td>{{item.create_at | date}}</td>
						<td>{{item.user.email}}</td>
						<td class="text-center">
							<ul v-for="item2 in item.products" :key="item2.id" style="list-style:none">
                                <li>{{item2.product.title}} 數量：{{item2.qty}}{{item2.product.unit}}</li>
                            </ul>
						</td>
						<td>{{item.total}}</td>
						<td class="text-center">
                            <span class="text-success" v-if="item.is_paid">已付款</span>
                            <span class="text-danger" v-else>未付款</span>
                        </td>
					</tr>
				</tbody>
			</table>
		</div>
		<page :pagination="pagination" @getPages="getOrders"></page>
    </div>
</template>

<script>
export default {
    data(){
        return{
			pagination: {},
			orders:[],
			isLoading: false,
        };
	},
	watch: {
    due_date() {
      const vm = this;
      const timestamp = Math.floor(new Date(vm.due_date) / 1000);
      vm.tempCoupon.due_date = timestamp;
    },
  },
    methods:{
		getOrders(page = 1){
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/orders?page=${page}`;
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
				console.log(response);
				vm.orders = response.data.orders;
				vm.pagination = response.data.pagination;
                vm.isLoading = false;
            });
        },
	},
	created() {
        this.getOrders();
    },
};
</script>