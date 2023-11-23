<template>
    <div>
        <h1 class="d-flex justify-content-center">Chỉnh sửa sản phẩm</h1>
        <edit :product="product" @submit:product="editProduct" />
    </div>
</template>
  
<script>
import edit from "@/components/Manage_Products/EditForm.vue";
import ProductService from "@/services/hanghoa.service";

export default {
    components: {
        edit,
    },
    data() {
        return {
            product: null,
            message: "",
        };
    },
    methods: {
        async getProduct() {
            const id = this.$route.params.id; // Lấy id từ route
            try {
                this.product = await ProductService.get(id);
            } catch (error) {
                // Xử lý lỗi, ví dụ: chuyển hướng đến trang 404
                this.$router.push({ name: "notfound" });
            }
        },
        async editProduct(data) {
            const confirmed = window.confirm("Bạn có chắc cập nhật sản phẩm này?");
            if (confirmed) {
                try {
                    await ProductService.update(this.product ? this.product._id : null, data);
                    this.message = "Cập nhật sản phẩm thành công";
                    alert(this.message);
                    this.$router.push({ name: 'admin-product' });
                } catch (error) {
                    console.error(error);
                }
            }
        },
    },
    created() {
        this.getProduct();
    },
};
</script>
