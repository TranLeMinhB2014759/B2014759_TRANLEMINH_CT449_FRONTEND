<template>
    <div class="container info-user" style="text-align:center">
        <div class="row">
            <div class="col-sm-9">
                <div>
                    <div style="background-color: #CCC;"><b>Tổng đơn hàng:</b></div>
                    <div>{{ totalAmount }}.000 vnđ</div>
                    <div>Ngày đặt hàng: {{ getCurrentDate() }}</div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th style="display: none;">id_sach</th>
                            <th scope="col">Sản phẩm</th>
                            <th style="width:300px" scope="col"></th>
                            <th scope="col">Giá</th>
                            <th style="width:120px" scope="col">Số lượng</th>
                            <th scope="col">Thành tiền</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="product" :key="product._id">
                            <td style="display: none;">{{ product.id }}</td>
                            <td><img :src="product.imgURL" alt="Product Image" class="img"></td>
                            <td>{{ product.TenHH }}</td>
                            <td>{{ 1 * product.Gia }}.000 VNĐ</td>
                            <td>
                                <input type="number" min="1" v-model="product.soluong" class="short-input">
                            </td>
                            <td>{{ product.tongtien }}.000 vnđ</td>
                            <td>
                                <div class="product-quantity">
                                    <button id="decrease-quantity" @click="decreaseQuantity">-</button>
                                    <span id="quantity">{{ SoLuongHangHoa }}</span>
                                    <button id="increase-quantity" @click="increaseQuantity">+</button>
                                </div>
                            </td>
                            <td>.000 vnđ</td>
                            <td colspan="2">
                                <form @submit.prevent="updateQuantity(product.id)">
                                    <button @click="removeFromCart(product.id)">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-circle-x" width="24" height="24"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                            <path d="M10 10l4 4m0 -4l-4 4"></path>
                                        </svg>
                                    </button>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <div style="background-color: #CCC;"><b>Tổng đơn hàng:</b></div>
                    <div>{{ totalAmount }}.000 vnđ</div>
                </div>
                <router-link :to="{ name: 'auth' }">
                    <button class="btn btn-success" @click="navigateToIndex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M5 12l6 6"></path>
                            <path d="M5 12l6 -6"></path>
                        </svg>

                        Tiếp tục mua hàng</button>
                </router-link>
            </div>
            <div class="col-sm-3">
                <h5 class="text-dark">THÔNG TIN KHÁCH HÀNG</h5>
                <form class="text-dark" style="color:#e3e3e3" @submit.prevent="placeOrder">

                    <label>Họ và tên:
                        <input type="text" required v-model="customer.hoten" placeholder="Nhập họ và tên">
                    </label>
                    <label>Số điện thoại:
                        <input type="text" required v-model="customer.sdt" placeholder="Nhập số điện thoại">
                    </label>
                    <h5>CHỌN CÁCH THỨC NHẬN HÀNG</h5>
                    <label>
                        <input type="radio" required v-model="customer.postage" value="Yes" />Giao tận nơi
                    </label>
                    <label>
                        <input type="radio" required v-model="customer.postage" value="No" />Nhận tại cửa hàng
                    </label>
                    <div v-if="customer.postage === 'Yes'">
                        <div class="container">
                            <h5>Chọn địa chỉ nhận hàng:</h5>
                            <select v-model="customer.province">
                                <!-- Options for provinces -->
                            </select>
                            <select v-model="customer.district">
                                <!-- Options for districts -->
                            </select>
                            <select v-model="customer.ward">
                                <!-- Options for wards -->
                            </select>
                            <input type="hidden" name="diachi" :value="customer.result">
                        </div>
                    </div>
                    <div v-else>
                        <div href="/"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Khu 2, Đ. 3/2, P. Xuân Khánh,
                            Q. Ninh Kiều, TP. CT</div>
                    </div>
                    <h5>PHƯƠNG THỨC THANH TOÁN</h5>
                    <label>
                        <input type="radio" v-model="customer.pt" value="Chuyển khoản qua ngân hàng" />Chuyển khoản qua ngân
                        hàng
                    </label>
                    <label>
                        <input type="radio" v-model="customer.pt" value="Thanh toán khi nhận hàng" />Thanh toán khi nhận
                        hàng
                    </label>
                    <router-link :to="{ name: 'psuccess' }">
                        <button>
                            tiếp
                        </button>
                    </router-link>
                    <button name="btn-pay" @click="placeOrder"
                        style="display: block; overflow: hidden; color: #fff; text-align: center; height: 50px; margin: 10px auto; width: 100%; border-radius: 4px; background: #00ab9f; cursor: pointer;">Đặt
                        Hàng</button>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
import ProductService from '../services/hanghoa.service';
export default {
    data() {
        return {
            product: [],

            SoLuongHangHoa: 1,

            customer: {
                hoten: 'John Doe',
                sdt: '123456789',
                postage: 'Yes',
                province: 'Hanoi',
                district: 'Cau Giay',
                ward: 'Dich Vong',
                pt: 'Chuyển khoản qua ngân hàng',
            },
        };
    },
    computed: {
        totalAmount() {
            return this.cart.reduce((total, product) => total + product.tongtien, 0);
        },
    },
    props: {
        id: { type: String, required: true },
    },
    methods: {
        decreaseQuantity() {
            if (this.SoLuongHangHoa > 1) {
                this.SoLuongHangHoa--;
            }
        },
        increaseQuantity() {
            this.SoLuongHangHoa++;
        },
        getCurrentDate() {
            const currentDate = new Date();
            const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
                .toString()
                .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
            return formattedDate;
        },
        updateQuantity(productId) {
            // Implement the update quantity logic here
        },
        removeFromCart(productId) {
            // Implement the remove from cart logic here
        },
        navigateToIndex() {
            // Implement navigation logic to the index page
        },
        placeOrder() {
            // Implement the place order logic here
        },
    },
    async created() {
        const productId = this.$route.params.id;
        try {
            this.product = await ProductService.get(productId);
        } catch (error) {
            console.error(error);
        }
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
    margin-right: 10px;
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
</style>