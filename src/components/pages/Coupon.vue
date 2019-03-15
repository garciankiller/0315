<template>

    <div>
        <loading :active.sync="isLoading" ></loading>

		<div class="mt-3 d-flex">
			<button class="btn btn-outline-success btn-sm d-flex align-items-center ml-auto" >
				<i class="material-icons" @click="openModal(true)">建立優惠券</i>
			</button>
		</div>
		<div class="table-responsive">
			<table class="table table-hover mt-3">
				<thead class="table-becare">
					<tr class="text-nowrap">
						<th>名稱</th>
						<th>代碼</th>
						<th width="100">折扣 % </th>
						<th width="200">到期日</th>
						<th width="100">是否啟用</th>
						<th width="150">操作</th>
					</tr>
				</thead>
				<tbody class="bg-white">
					<tr v-for="item in coupons" :key="item.id">
						<td>{{item.title}}</td>
						<td>{{item.code}}</td>
						<td>{{item.percent}}</td>
						<td>{{item.due_date}}</td>
						<td>
							<span class="text-success font-weight-bold" v-if="item.is_enabled">啟用</span>
							<span v-else>未啟用</span>
						</td>
						<td>
							<button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
							<button class="btn btn-outline-secondary btn-sm mb-2 mb-md-0" @click="deleteModal(item)">刪除</button>
						</td>
					</tr>
				</tbody>
			</table>

                <div class="modal fade" id="couponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">建立優惠券</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div slot="modalBody" class="modal-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="couponName">*優惠券名稱</label>
                                            <input type="text" class="form-control" id="couponName" name="couponName" placeholder="請輸入優惠券名稱" 
                                                v-model="tempCoupon.title">
                                            <span class="text-danger" >請輸入優惠券名稱</span>
                                        </div>
                                        <div class="form-group">
                                            <label for="couponCode">*優惠代碼</label>
                                            <input type="text" class="form-control" id="couponCode" name="couponCode" placeholder="請輸入優惠代碼" 
                                                v-model="tempCoupon.code">
                                            <span class="text-danger" >請輸入優惠代碼</span>
                                        </div>
                                        <div class="form-group">
                                            <label for="dueDate">*到期日</label>
                                            <input type="date" class="form-control" id="dueDate" name="dueDate"
                                                v-model="tempCoupon.due_date">
                                            <span class="text-danger">請選擇到期日</span>
                                        </div>
                                        <div class="form-group">
                                            <label for="percent">*折扣百分比</label>
                                            <input type="tel" class="form-control" id="percent" name="percent" placeholder="請輸入折扣百分比"
                                                v-model="tempCoupon.percent">
                                            <span class="text-danger" >請輸入101以內的正整數</span>
                                        </div> 
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="isEnabled"  v-model="tempCoupon.is_enabled" :true-value="1" :false-value="0">
                                            <label class="form-check-label" for="isEnabled">是否啟用</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="deleteCoupon" data-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary" @click="updateCoupon">確認</button>
                        </div>
                        </div>
                    </div>
                 </div>
            </div>
    
        <div class="modal fade" id="delConponModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
                <h5 class="modal-title" id="exampleModalLabel">
                <span>刪除優惠券</span>
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                是否刪除 <strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠券(刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-danger" @click="deleteCoupon"
                >確認刪除</button>
            </div>
            </div>
        </div>
        </div>

    </div>
</template>


<script>

import $ from 'jquery';

export default {
    data(){
        return{
            coupons:[],
            tempCoupon: {},
            isNew:false,
        };
    },
    methods:{
        getCoupon(page = 1){
                const vm = this;
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupons?page=${page}`;
                vm.isLoading = true;
                this.$http.get(api).then((response) => {
                   console.log(response);
                    vm.coupons = response.data.coupons;
                    console.log(vm.coupons);
                    vm.isLoading = false;
            });
        },
         openModal(isNew , item) {        
            
            if(isNew){
                this.tempCoupon ={};
                this.isNew = true;
            } else{
                this.tempCoupon = Object.assign( {} , item );
                this.isNew = false;
            }
            $('#couponModal').modal('show');
        },
        updateCoupon(){
                const vm = this;
                let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon`;
                let httpMethod = 'post';
                if (!vm.isNew){
                    api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
                    httpMethod = 'put';
                }
                this.$http[httpMethod](api, {data: vm.tempCoupon }).then((response) => {
                   console.log(response.data);
                   if(response.data.success){
                       $('#couponModal').modal('hide');
                       vm.getCoupon();
                   }else{
                       $('#couponModal').modal('hide');
                       vm.getCoupon();
                       console.log('新增失敗');
                   }
            });
        },
        deleteModal(item) {
            this.tempCoupon = Object.assign({}, item);
            $('#delConponModal').modal('show');
            },
        deleteCoupon(){
                const vm = this;
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
                vm.isLoading = true;
                this.$http.delete(api).then((response) => {
                    vm.isLoading = false;
                    if (response.data.success) {
                         $('#delConponModal').modal('hide');
                         vm.getCoupon();
                    }
            });
        },
    },
    created() {
        this.getCoupon();
    },
};
</script>