<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 products-img" v-if="product" :key="product._id">
        <img :src="product.imgURL" alt="">
      </div>
      <div class="col-sm-6" v-if="product" :key="product._id">
        <div class="product-details">
          <div class="product-header">
            <h1 style="color: #0077B6">{{ product.TenHH }}</h1>
            <div class="product-price">

              <span class="price-new">{{ 1 * product.Gia }}</span>
              <span class="price"> - </span>
              <span class="price-old">{{ 1.5 * product.Gia }} VNĐ / 1 kg</span>
            </div>
            <div class="product-rating">
              <!-- 45 ngôi sao màu vàng -->
              <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
          </div>
          <div class="product-info">
            <p><b>Tên Sản Phẩm:</b> {{ product.TenHH }}</p>
            <p><b>Xuất Xứ: Hưng Yên</b></p>
            <p><b>Hạn Sử Dụng: 12 tháng</b></p>
            <p><b>Mô tả sản phẩm: {{ product.MoTaHH }}</b></p>
          </div>

        </div>
        <div class="product-details" v-if="product" :key="product._id">
          <!-- <div class="product-quantity">
            <button id="decrease-quantity" @click="decreaseQuantity">-</button>
            <span id="quantity">{{ SoLuongHangHoa }}</span>
            <button id="increase-quantity" @click="increaseQuantity">+</button>
          </div> -->
          <router-link :to="{ name: 'events' }">
            <button id="add-to-cart" class="btn btn-success text-white">Thêm vào giỏ hàng</button>


          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>
  
  
<script>
import ProductService from '../services/hanghoa.service';

export default {
  data() {
    return {
      // SoLuongHangHoa: 1,
      product: [],
    };
  },
  props: {
    id: { type: String, required: true },
  },
  methods: {
    // decreaseQuantity() {
    //   if (this.SoLuongHangHoa > 1) {
    //     this.SoLuongHangHoa--;
    //   }
    // },
    // increaseQuantity() {
    //   this.SoLuongHangHoa++;
    // },
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
  
<style scoped>
@import "@/assets/css/product.css";
</style>
  