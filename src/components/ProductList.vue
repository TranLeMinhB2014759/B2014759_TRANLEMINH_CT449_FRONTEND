<script>
export default {
  props: {
    products: { type: Array, deafault: [] },
    activeIndex: { type: Number, deafault: -1 },
  },
  emits: ["update:activeIndex"],
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    }
  }
};
</script>

<template>
  <div class="tc">
    <div class="container">
      <div class="product-title">Các sản phẩm</div>
      <div class="row">
        <div class="col-sm-3" v-for="(product, index) in products" :key="index" :class="{ active: index === activeIndex }"
          @click="updateActiveIndex(index)">
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
</template>
<style scoped>
@import "@/assets/css/homepage.css";
</style>