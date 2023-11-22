<template>
  <div class="container">
    <h3 class="title-comm"><span class="title-holder">Thông tin sản phẩm</span></h3>
    <div class="row">
      <div class="col-sm-6 products-img" v-if="product" :key="product._id">
        <img :src="product.imgURL" alt="">
      </div>
      <div class="col-sm-6" v-if="product" :key="product._id">
        <div class="product-details">
          <div class="product-header">
            <h1 style="color: #0077B6">{{ product.TenHH }}</h1>
            <div class="product-price">

              <span class="price-new">{{ 1 * product.Gia }} VNĐ / 1 kg</span>
              <!-- <span class="price"> - </span> -->
              <!-- <span class="price-old">{{ 1.5 * product.Gia }} VNĐ / 1 kg</span> -->
            </div>
            <div class="product-rating">
              <!-- 45 ngôi sao màu vàng -->
              <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
          </div>
          <div class="product-info">
            <p><b>Tên Sản Phẩm:</b> {{ product.TenHH }}</p>
            <p><b>Hạn Sử Dụng:</b> 12 tháng</p>
            <p><b>Mô tả sản phẩm:</b> {{ product.MoTaHH }}</p>
          </div>

        </div>
        <div class="product-details" @click="OpenModalRegister" v-if="!isLoggedIn">
          <button id="add-to-cart" class="btn btn-success text-white">Thêm vào giỏ hàng</button>
          <homeModal :isShowModalRegister="isShowModalRegister" :closeModalRegister="closeModalRegister" />
        </div>

        <div class="product-details" v-else v-if="product" :key="product._id">
          <div class="input-kg">Chọn số kg</div>
          <div class="product-quantity">
            <button id="decrease-quantity" @click="decreaseQuantity">-</button>
            <span id="quantity">{{ SoLuongHH }}</span>
            <button id="increase-quantity" @click="increaseQuantity">+</button>
          </div>
          <button id="add-to-cart" class="btn btn-success text-white" @click="addToCart">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  
<script>
import CartService from '../services/giohang.service';
import ProductService from '../services/hanghoa.service';

export default {
  data() {
    return {
      product: [],
      isLoggedIn: false,
      SoLuongHH: 1,
    };
  },
  props: {
    id: { type: String, required: true },
    cart: { type: Object, required: true },
  },
  mounted() {
    let intervalId;

    intervalId = setInterval(() => {
      const userJs = window.localStorage.getItem('user');
      const user = JSON.parse(userJs);
      if (user) {
        this.isLoggedIn = true;
      }
    }, 100);
    setTimeout(() => {
      clearInterval(intervalId);
    }, 3000000);
  },
  methods: {
    async addToCart() {
      try {
        // Get user ID from localStorage
        const userJs = window.localStorage.getItem('user');
        const user = JSON.parse(userJs);

        const productData = await ProductService.get(this.$route.params.id);

        // Create data object for the cart
        const data = {
          IdUser: user._id,
          IdHangHoa: productData._id,
          SoLuong: this.SoLuongHH,
        };
        console.log('hi', data);

        // Call the CartService to create the cart
        await CartService.create(data);

        // Redirect to the correct route
        this.$router.push({ name: 'events' });
        // Replace 'your-route-name' with the actual name of the route you want to navigate to.
      } catch (error) {
        console.error(error);
      }
    },
    decreaseQuantity() {
      if (this.SoLuongHH > 1) {
        this.SoLuongHH--;
      }
    },
    increaseQuantity() {
      this.SoLuongHH++;
    },
    logout() {
      window.localStorage.removeItem('user');
      this.isLoggedIn = false;


      this.$router.push({ name: "trangchu" });
    },
    loginUser() {

      this.$router.push({ name: "login" });
    },
    signupUser() {

      this.$router.push({ name: "user.register" });
    },
    openModal() {
      this.AModalVisible = false;
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
  async created() {
    const productId = this.$route.params.id;
    try {
      this.product = await ProductService.get(productId);
    } catch (error) {
      console.error(error);
    }
  },
}
</script>
<script setup>
import { ref } from "vue";
import homeModal from "./homeModal.vue";


const isShowModalRegister = ref(false)

const OpenModalRegister = () => {
  isShowModalRegister.value = true;
};
const closeModalRegister = () => {
  isShowModalRegister.value = false;
};
</script>
<style scoped>
@import "@/assets/css/product.css";
</style>
  