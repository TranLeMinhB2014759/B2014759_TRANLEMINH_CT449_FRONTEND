<template>
  <div class="container mt-3">
    <div class="tc">
      <div class="container">
        <div class="product-title">Các sản phẩm</div>
        <div class="row">
          <div class="col-sm-3" v-for="product in products" :key="product._id" >
            <router-link :to="{ name: 'product', params: { id: product._id } }" class="nav-link text-dark">
              <div class="container-sp"><img :src="product.imgURL" alt="Hình ảnh" class="imgsp" /></div>
              <div class="ten">
                <p>{{ product.TenHH }}</p>
                <div class="ngoi-sao">
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                </div>
                <p><b>{{ product.Gia }} VNĐ / 1 kg</b></p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Lời khuyên -->
  </div>
</template>
  
<script>
import ProductService from '../services/hanghoa.service';

export default {
  data() {
    return {
      products: [],

    };
  },
  props: {
    id: { type: String, required: true },
  },
  methods: {
    async retrieveProducts() {
      try {
        this.products = await ProductService.getAll();

      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.retrieveProducts();
  },
}
</script>

<style scoped>
@import "@/assets/css/homepage.css";
</style>