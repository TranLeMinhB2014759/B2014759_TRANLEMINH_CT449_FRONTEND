<script>
import ProductList from "@/components/ProductList.vue";
import InputSearch from "@/components/InputSearch.vue";
import ProductService from "@/services/hanghoa.service.js";
export default {
  components: {
    InputSearch,
    ProductList,
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
  },
  created() {
    //Tự động load khi components
    this.refreshList();
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="container col-3">
        <InputSearch v-model="searchText" />
      </div>
      <div class="col-9"></div>
    </div>
    <div class="row">
      <div class="mt-3 col-12 products">
        <ProductList v-if="filteredProductsCount > 0" :products="filteredProducts" v-model:activeIndex="activeIndex" />
        <p v-else>Không có sản phẩm phù hợp.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/homepage.css";
@import "@/assets/css/product.css";
</style>
