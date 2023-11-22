<template>
    <div class="container info-user" style="text-align:center">
        <div class="row">
            <div class="col-sm-9" style="border-right: 1px solid;">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Sản phẩm</th>
                            <th style="width: 300px;" scope="col">Hình ảnh</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Thành tiền</th>
                            <th scope="col">Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cart in filteredCarts" :key="cart.userDetails._id">
                            <th scope="row">{{ cart.productDetails.TenHH }}</th>
                            <td><img :src="cart.productDetails.imgURL" alt="cart Image" class="img"></td>
                            <td>{{ 1 * cart.productDetails.Gia }} VNĐ</td>
                            <td>
                                {{ cart.SoLuong }}
                            </td>
                            <td>{{ calculateTotal(cart) }} VNĐ</td>
                            <td>
                                <form>
                                    <button class="btn btn-danger" @click="deleteProduct(cart._id)">
                                        <i class="fa-solid fa-delete-left"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table class="table total">
                        <tr>
                            <th>Tổng đơn hàng:</th>
                            <th>{{ totalAmount }}.000 vnđ</th>
                        </tr>
                </table>
                <router-link :to="{ name: 'products' }">
                    <button class="btn btn-success" @click="navigateToIndex">
                        <i class="fa-solid fa-arrow-left"></i>
                        Tiếp tục mua hàng</button>
                </router-link>

            </div>
            <div class="col-sm-3" style="border-right: 1px solid;">
                <h5 class="text-dark">THÔNG TIN KHÁCH HÀNG</h5>
                <form class="text-dark" style="color:#e3e3e3" @submit.prevent="submitForm">
                    <label class="form-label">Họ và tên:
                        <input type="text" class="form-control" required v-model="customer.hoten" placeholder="Nhập họ và tên">
                    </label>
                    <label class="form-label">Số điện thoại:
                        <input type="text" class="form-control" required v-model="customer.sdt" placeholder="Nhập số điện thoại">
                    </label>
                    <div>
                        <div> <b> Ngày đặt hàng:</b> {{ getCurrentDate() }}</div>
                        <div> <b> Ngày giao hàng:</b> {{ getExpectedDeliveryDate() }}</div>
                    </div>
                    <h5>CHỌN CÁCH THỨC NHẬN HÀNG</h5>
                    <label class="form-label">
                        <input type="radio" required v-model="customer.postage" value="Yes" />Giao tận nơi
                    </label>
                    <label>
                        <input type="radio" required v-model="customer.postage" value="No" />Nhận tại cửa hàng
                    </label>
                    <div v-if="customer.postage === 'Yes'">
                        <div class="container">
                            <h5>Chọn địa chỉ nhận hàng:</h5>
                            <input type="text">
                        </div>
                    </div>
                    <div v-else>
                        <div href="/"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Khu 2, Đ. 3/2, P. Xuân Khánh,
                            Q. Ninh Kiều, TP. CT</div>
                    </div>
                    <button
                        style="display: block; overflow: hidden; color: #fff; text-align: center; height: 50px; margin: 10px auto; width: 100%; border-radius: 4px; background: #00ab9f; cursor: pointer;">
                        Đặt hàng
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>

import CartService from '../services/giohang.service';
export default {
    data() {
        return {
            carts: [],
            userId: '',
            deliveryDays: 3,
            customer: {
                hoten: '',
                sdt: '',
                postage: 'Yes',
                province: 'Hanoi',
                district: 'Cau Giay',
                ward: 'Dich Vong',
                pt: 'Chuyển khoản qua ngân hàng',
            },
        };
    },
    props: {
        id: { type: String, required: true },
    },
    computed: {
        filteredCarts() {
            return this.carts.filter(cart => cart.userDetails._id === this.userId);
        },
        totalAmount() {
            return this.filteredCarts.reduce((total, cart) => {
                return total + cart.productDetails.Gia * cart.SoLuong;
            }, 0);
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
            const deliveryDate = new Date(currentDate);
            deliveryDate.setDate(currentDate.getDate() + this.deliveryDays);

            const formattedDeliveryDate = `${deliveryDate.getFullYear()}-${(deliveryDate.getMonth() + 1)
                .toString()
                .padStart(2, '0')}-${deliveryDate.getDate().toString().padStart(2, '0')}`;

            return formattedDeliveryDate;
        },
        calculateTotal(cart) {
            return cart.productDetails.Gia * cart.SoLuong;
        },
        async created() {
            try {
                // Retrieve userId from localStorage
                const userJs = window.localStorage.getItem('user');
                const user = JSON.parse(userJs);

                if (user && user._id) {
                    this.userId = user._id;
                }

                this.carts = await CartService.getAll();
                console.log("hi", this.carts);
            } catch (error) {
                console.error(error);
            }
        },
        async deleteProduct(id) {
            console.log('hi', id);
            const confirmed = window.confirm("Bạn có chắc muốn xóa sản phẩm này?");
            if (confirmed) {
                try {
                    await CartService.delete(id);
                    // Update the cart after successful deletion

                } catch (error) {
                    console.error("Error deleting product:", error);
                    // Handle the error, show a message to the user, or perform other actions
                }
            }
        },
        submitForm() {
            // Check if name and phone number are filled
            if (!this.customer.hoten || !this.customer.sdt) {
                alert('Please enter your name and phone number.');
                return;
            }

            // The rest of your form submission logic
            // ...

            // Redirect to the success page and pass the customer information
            this.$router.push({
                name: 'order',
            });
        },
        decreaseQuantity() {
            if (this.SoLuongHH > 1) {
                this.SoLuongHH--;
            }
        },
        increaseQuantity() {
            this.SoLuongHH++;
        },

    },
    created() {
        this.created();
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
    /* Điều chỉnh kích thước tùy ý ở đây */
    display: inline-block;
    margin: 0;
    padding: 0;
    text-align: center;
}

.btn-success {
    margin-bottom: 30px;
}

.product-quantity {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.product-quantity button {
    background-color: #0077B6;
    /* Màu nền của nút */
    color: #fff;
    /* Màu chữ trắng */
    border: none;
    border-radius: 50%;
    /* Làm cho nút có hình dạng tròn */
    width: 25px;
    height: 30px;
    font-size: 20px;
    cursor: pointer;
}

#quantity {
    margin: 0 10px;
    font-size: 18px;
}

.total{
    background-color: rgb(14 171 0 / 39%);
    border-radius: 10px;
    height: 50px;
}

h5{
    margin: 20px 0;
}
</style>