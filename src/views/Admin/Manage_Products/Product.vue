<script>
import ProductListAdmin from "@/components/Manage_Products/ProductListAdmin.vue";
import ProductCardAdmin from "@/components/Manage_Products/ProductCardAdmin.vue";
import InputSearch from "@/components/InputSearch.vue";
import ProductService from "@/services/hanghoa.service.js";
export default {
  components: {
    InputSearch,
    ProductListAdmin,
    ProductCardAdmin,
  },
  data() {
    return {
      products: [],
      activeIndex: -1,
      searchText: "",
    };
  },
  watch: {
    searchText() {
      this.activeIndex = -1;
    },
  },
  computed: {
    productStrings() {
      return this.products.map((product) => {
        const { TenHH, MotaHH, Gia, SoLuongHangHoa, GhiChu, imgURL } = product;
        return [TenHH, MotaHH, Gia, SoLuongHangHoa, GhiChu, imgURL].join("");
      });
    },
    filteredProducts() {
      if (!this.searchText) return this.products;
      return this.products.filter((_product, index) =>
        this.productStrings[index].includes(this.searchText)
      );
    },
    activeProduct() {
      if (this.activeIndex < 0) return null;
      return this.filteredProducts[this.activeIndex];
    },
    filteredProductsCount() {
      return this.filteredProducts.length;
    },
  },
  methods: {
    async retrieveProducts() {
      try {
        this.products = await ProductService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveProducts();
      this.activeIndex = -1;
    },
    goToAddProduct() {
      this.$router.push({ name: 'add-product' });
    },
  },
  created() {
    // Automatically call refreshList() when the component is created
    this.refreshList();
  },
};
</script>

<template>
    <div class="banner text-center">QUẢN LÝ SẢN PHẨM</div>
  <div class="container">
    <button class="btn btn-sm" @click="goToAddProduct()">
      <router-link :to="{ name: 'add-product' }" class="text-success">
        <i class="fas fa-plus fa-2x" aria-hidden="true"></i>
      </router-link>
    </button>
    <div class="row">
      <div class="container col-4">
        <InputSearch v-model="searchText" />
      </div>
      <div class="col-8"></div>
    </div>
    <div class="row">
      <div class="mt-3 col-4 products">
        <ProductListAdmin v-if="filteredProductsCount > 0" :products="filteredProducts"
          v-model:activeIndex="activeIndex" />
        <p v-else>Không có sản phẩm phù hợp.</p>
      </div>
      <div class="mt-3 col-8">
        <div v-if="activeProduct">
          <h4>
            Thông tin sản phẩm
            <ProductCardAdmin :product="activeProduct" />
            <router-link :to="{
              name: 'edit-product',
              params: { id: activeProduct._id },
            }">
              <span class="mt-2 badge badge-warning">
                <i class="fas fa-edit"></i> Hiệu chỉnh
              </span>
            </router-link>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.badge {
  --bs-badge-color: black !important;
}

.banner {
  background-color: antiquewhite;
  padding: 10px;
  margin-bottom: 15px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  font-weight: 600;
}
</style>