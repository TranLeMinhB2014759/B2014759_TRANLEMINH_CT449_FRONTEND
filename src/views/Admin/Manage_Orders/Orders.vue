<template>
    <div class="banner text-center">QUẢN LÝ ĐƠN HÀNG</div>
    <div class="container row">
        <div class="col-sm-12" style="text-align: center;">
            <label><b>Tổng số đơn hàng:</b></label>
            <label>1</label>

        </div>
        <div class="col-sm-12">
            <!-- <div>
                <label><b>Tổng doanh thu:</b> 90000 VND</label>
                <label>{{ totalAmount }}.000 vnđ</label>
            </div>
            <div v-for="order in filteredOrders" :key="order.customerInfo._id">
                <div><b>Người giao:</b>{{ order.employeeInfo.name }} </div>
            </div>
            <div>
                <label><b>Thông tin khách hàng:</b></label>
                <ul v-for="order in filteredOrders" :key="order.customerInfo._id">
                    <li>
                        <b>Tên:</b>{{ order.customerInfo.name }}
                    </li>
                    <li> <b>Số điện thoại:</b> {{ order.customerInfo.phoneNumber }} </li>
                    <li><b>Địa chỉ:</b>{{ order.customerInfo.address }}</li>
                    <li> <b>Ngày đặt hàng:</b> {{ getCurrentDate() }}</li>
                    <li>
                        <b>Ngày giao hàng:</b> {{ getExpectedDeliveryDate() }}
                    </li>
                </ul>
            </div> -->
            <h4>Sản phẩm đã đặt hàng:</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Tên khách hàng</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Thành tiền</th>
                        <th scope="col">Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Trần Lê Minh</td>
                        <td>Cam Sành</td>
                        <td>3</td>
                        <td>30000 VND</td>
                        <td>90000 VND</td>
                        <td><span>{{ orderStatus }}</span></td>


                    </tr>
                    <!-- <tr v-for="cart in filteredCarts" :key="cart.userDetails._id">
                        <td>{{ cart.productDetails.TenHH }}</td>
                        <td>{{ 1 * cart.productDetails.Gia }}.000 VNĐ</td>
                        <td>{{ cart.SoLuong }}</td>
                        <td>{{ calculateTotal(cart) }}.000 VNĐ</td>
                    </tr> -->
                </tbody>
            </table>
            <button class="btn btn-success" @click="approveOrder">Duyệt</button>
        </div>
    </div>
</template>
  
<script>
import OrderService from '@/services/dathang.service';
import CartService from '@/services/giohang.service';
export default {
    data() {
        return {
            carts: [],
            orders: [],
            userId: '654cfdaa4d0821b70a923ff6',
            orderStatus: 'Chưa duyệt',

        };
    },
    props: {
        id: { type: String, required: true },
    },
    computed: {
        totalAmount() {
            return this.filteredCarts.reduce((total, cart) => {
                return total + cart.productDetails.Gia * cart.SoLuong;
            }, 0);
        },
        filteredCarts() {
            return this.carts.filter(cart => cart.userDetails._id === this.userId);
        },
        filteredOrders() {
            return this.orders.filter(order => order.customerInfo._id === this.userId);
        },
    },
    methods: {
        getCurrentDate() {
            const currentDate = new Date();
            const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
                .toString()
                .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
            return formattedDate;
        },
        getExpectedDeliveryDate() {
            const currentDate = new Date();
            const expectedDeliveryDate = new Date(currentDate);
            expectedDeliveryDate.setDate(currentDate.getDate() + 3);

            const formattedDate = `${expectedDeliveryDate.getFullYear()}-${(expectedDeliveryDate.getMonth() + 1)
                .toString()
                .padStart(2, '0')}-${expectedDeliveryDate.getDate().toString().padStart(2, '0')}`;

            return formattedDate;
        },
        calculateTotal(cart) {
            return cart.productDetails.Gia * cart.SoLuong;
        },

        async created() {
            try {
                // Retrieve userId from localStorage

                this.carts = await CartService.getAll();
                console.log("hi", this.carts);
            } catch (error) {
                console.error(error);
            }
        },
        async createdorder() {
            try {


                this.orders = await OrderService.getAll();
                console.log("hi", this.orders);
            } catch (error) {
                console.error(error);
            }
        },
        approveOrder() {
            try {
                // Update the orderStatus in data
                this.orderStatus = 'Đã duyệt';

                // Optionally, if you want to update the orderStatus in each order object,
                // you can loop through filteredOrders and update the orderStatus property.
                for (const order of this.filteredOrders) {
                    order.orderStatus = 'Đã duyệt';
                }

            } catch (error) {
                console.error(error);
            }
        }


    },
    created() {
        this.created();
        this.createdorder();
    },
};
</script>
<style>
.banner {
    background-color: antiquewhite;
    padding: 10px;
    margin-bottom: 15px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    font-weight: 600;
}
</style>