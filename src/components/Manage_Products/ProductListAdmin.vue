<script>
import ProductService from "@/services/hanghoa.service.js";
export default {
  props: {
    products: { type: Array, deafault: [] },
    activeIndex: { type: Number, deafault: -1 },
    product: { type: Object, required: true },
  },
  emits: ["update:activeIndex, delete:product"],
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
    async deleteProduct(id) {
      const confirmed = window.confirm("Bạn có chắc muốn xóa sản phẩm này?");
      if (confirmed) {
        await ProductService.delete(id);
        this.$emit("delete:product");
        location.reload();
      }
    },
  }
};
</script>

<template>
  <ul class="list-group">
        <li 
            class="list-group-item d-flex justify-content-between align-items-start"
            v-for="(product, index) in products"
            :key="index"
            :class="{active: index === activeIndex}"
            @click="updateActiveIndex(index)"
        >
        {{  product.TenHH }}
          <button type="button" class="ml-2 btn btn-danger" @click="deleteProduct(product._id)" >
            <i class="fa fa-trash"></i>
          </button> 
        </li>
    </ul>
</template>
<style scoped>
@import "@/assets/css/homepage.css";
</style>