<template>
    <div class="container info-user" style="text-align:center">
        <div class="row">
            <div class="col-sm-9">

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
                        <tr v-for="product in cart" :key="product.id">
                            <td style="display: none;">{{ product.id }}</td>
                            <td><img :src="product.hinh" alt="Product Image" class="img"></td>
                            <td>{{ product.sanpham }}</td>
                            <td>{{ product.dongia }}.000 vnđ</td>
                            <td>
                                <input type="number" min="1" v-model="product.soluong" class="short-input">
                            </td>
                            <td>{{ product.tongtien }}.000 vnđ</td>
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
                        style="display: block; overflow: hidden; color: #fff; text-align: center; height: 50px; margin: 10px auto; width: 100%; border-radius: 4px; background: #00ab9f; cursor: pointer;">Thanh
                        toán</button>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            cart: [
                {
                    id: 1,
                    hinh: 'https://img.freepik.com/free-photo/high-angle-beans-arrangement-concept_23-2148648539.jpg?size=626&ext=jpg',
                    sanpham: 'Combo ngũ cốc 1',
                    dongia: 100,
                    soluong: 2,
                    tongtien: 200,
                },
                {
                    id: 2,
                    hinh: 'https://img.freepik.com/free-photo/high-angle-beans-arrangement-concept_23-2148648539.jpg?size=626&ext=jpg',
                    sanpham: 'Combo ngũ cốc 2',
                    dongia: 150,
                    soluong: 3,
                    tongtien: 450,
                },
                // Add more products as needed
            ],
            customer: {
                gender: 'Anh',
                hoten: '',
                sdt: '',
                postage: 'Yes',
                province: '',
                district: '',
                ward: '',
                pt: 'Chuyển khoản qua ngân hàng',
                result: '', // You can set the result value as needed
            },
        };
    },
    computed: {
        totalAmount() {
            return this.cart.reduce((total, product) => total + product.tongtien, 0);
        },
    },
    methods: {
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
</style>