<template>
    <div>
        <h1 class="d-flex justify-content-center">Thêm Sản phẩm</h1>
        <add @submit:product="createProduct" />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import add from "@/components/Manage_Products/AddForm.vue";
import ProductService from "@/services/hanghoa.service";

export default {
    components: {
        add,


    },
    props: {
        product: { type: Object, require: true },
    },
    data() {
        return {

            message: "",
        };
    },
    methods: {
    
    async createProduct(data) {
      // Hiển thị cửa sổ xác nhận
      const confirmed = window.confirm("Bạn có thêm sản phẩm mới?");

      if (confirmed) {
        try {
          await ProductService.create(data);
          this.message = "Thêm sản phẩm mới thành công";
          this.$router.push({ name: 'admin-product' });
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};


</script>

<style scoped></style>
