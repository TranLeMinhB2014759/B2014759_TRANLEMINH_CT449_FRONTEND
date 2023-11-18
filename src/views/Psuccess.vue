<template>
    <div class="contaiter">
        <div class="row">
            <div class="col-sm-6">

                <img style="
         
         float: left;
         left: 360px;
       
         width: 250px;
         top: 277px;
       " src="https://theme.hstatic.net/1000363117/1000911694/14/lazyload.gif?v=271" width="250px" />
            </div>
            <div class="col-sm-6">
                <h3>Đặt hàng thành công</h3>

                <div v-for="customer in customers" :key="customer.id">
                    <label><b>{{ customer.gt }}:</b></label>
                    <label>{{ customer.hoten }}</label><br>
                    <label><b>Số điện thoại:</b> {{ customer.sdt }}</label><br>
                    <label><b>Địa chỉ:</b> {{ customer.diachi }}</label><br>
                    <label><b>Phương thức thanh toán:</b></label>
                    <label>{{ customer.pt }}</label><br>
                </div>
                <div>
                    <label><b>Ngày đặt hàng:</b> {{ orderInfo.orderDate }}</label><br>
                    <label><b>Ngày giao hàng:</b> {{ orderInfo.deliveryDate }}</label><br>


                    <label><b>Người giao hàng:</b> {{ orderInfo.deliveryPerson }}</label><br>
                    <select v-model="orderInfo.deliveryStatus" style="margin-right: 10px;">
                        <option value="Đang giao hàng">Chưa nhận</option>
                        <option value="Đã giao hàng">Đã nhận hàng</option>
                    </select>

                    <!-- Button to confirm the status change -->
                    <button class="btn btn-success" @click="confirmDeliveryStatus" style="margin-bottom: 10px;">
                        Xác nhận
                    </button>
                </div>


            </div>
        </div>



        <div class="container">
            <div class="col-sm-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th style="display: none;">id</th>
                            <th scope="col">Sản phẩm</th>
                            <th style="width: 300px" scope="col"></th>
                            <th scope="col">Giá</th>
                            <th scope="col">Giảm giá</th> <!-- Thêm cột Giảm giá -->
                            <th style="width: 120px" scope="col">Số lượng</th>
                            <th scope="col">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in cart" :key="product.id">
                            <td style="display: none;">
                                <input name="id_sach" type="text" :value="product.id" />
                            </td>
                            <td><img :src="product.hinh" alt="Product Image" class="img" /></td>
                            <td>{{ product.sanpham }}</td>
                            <td>{{ product.dongia }}.000 vnđ</td>
                            <td>{{ product.giamGia }}%</td> <!-- Hiển thị giảm giá -->
                            <td>
                                <p>{{ product.soluong }}</p>
                            </td>
                            <td>{{ (product.dongia * (1 - product.giamGia / 100) * product.soluong).toFixed(2) }}.000 vnđ
                            </td> <!-- Tính toán tổng tiền -->
                        </tr>
                    </tbody>
                    <tr>
                        <td style="background-color: #ccc;">
                            <b>Tổng đơn hàng:</b>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="text-white">{{ totalAmount }}.000 vnđ</td>
                    </tr>
                </table>

            </div>
            <router-link :to="{ name: 'auth' }">
                <button style="
            float: right;
            width: 100%;
            overflow: hidden;
            color: #fff;
            height: 50px;
            margin: 10px auto;
            border-radius: 4px;
            background: #00ab9f;
            border-radius: 18px;
            border: 0;
            cursor: pointer;
          ">
                    Tiếp tục mua hàng
                </button>

            </router-link>

        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            customers: [],
            cart: [
                {
                    id: 1,
                    hinh: '	https://nongsansachstore.com/wp-content/uploads/2021/03/dau-do-nguyen-hat.jpg',
                    sanpham: 'Combo ngũ cốc 1',
                    dongia: 100,
                    giamGia: 10, // Giảm giá 10%
                    soluong: 2,
                    tongtien: 0, // Sẽ tính toán lại sau
                },
                {
                    id: 2,
                    hinh: 'https://nongsansachstore.com/wp-content/uploads/2021/03/cong-dung-cua-hat-dau-den.png',
                    sanpham: 'Combo ngũ cốc 2',
                    dongia: 150,
                    giamGia: 15, // Giảm giá 15%
                    soluong: 3,
                    tongtien: 0, // Sẽ tính toán lại sau
                },
                // Add more products as needed
            ],
            customers: [
                {
                    id: 1,
                    gt: 'Anh',
                    hoten: 'John Doe',
                    sdt: '1234567890',
                    diachi: '123 Main Street, City',
                    pt: 'Chuyển khoản qua ngân hàng'
                }
            ],
            orderInfo: {
                orderDate: '2023-11-13', // Thay đổi giá trị ngày đặt hàng tùy ý
                deliveryDate: '2023-11-20', // Thay đổi giá trị ngày giao hàng tùy ý
                deliveryStatus: 'Đã giao hàng', // Thay đổi trạng thái giao hàng tùy ý
                deliveryPerson: 'Người giao hàng A', // Thay đổi tên người giao hàng tùy ý
            },
        };
    },
    computed: {
        totalAmount() {
            // Tính tổng tiền dựa trên giá, giảm giá và số lượng
            return this.cart.reduce((total, product) => {
                const priceAfterDiscount = product.dongia * (1 - product.giamGia / 100);
                return total + priceAfterDiscount * product.soluong;
            }, 0);
        },
    },
    methods: {

        confirmDeliveryStatus() {
            // Add logic to handle the confirmation, if needed
            console.log('Delivery status confirmed:', this.orderInfo.deliveryStatus);
        },
    },
};
</script>
  
<style scoped>
img {
    width: 75%;
    border-radius: 5px;
    padding: 10px;
}

.short-input {
    width: 30%;

    display: inline-block;
    margin: 0;
    padding: 0;
    text-align: center;
}

.btn-success {
    margin-right: 10px;
}
</style>

  