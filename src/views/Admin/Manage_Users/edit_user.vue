<template>
    <div>
        <h1 class="d-flex justify-content-center">Chỉnh sửa tài khoản</h1>
        <edit :user="user" @submit:user="editUser" />
    </div>
</template>
  
<script>
import edit from "@/components/Manage_Users/EditForm.vue";
import UserService from "@/services/user.service";

export default {
    components: {
        edit,
    },
    data() {
        return {
            user: null,
            message: "",
        };
    },
    methods: {
        async getUser() {
            const id = this.$route.params.id; // Lấy id từ route
            try {
                this.user = await UserService.get(id);
            } catch (error) {
                // Xử lý lỗi, ví dụ: chuyển hướng đến trang 404
                this.$router.push({ name: "notfound" });
            }
        },
        async editUser(data) {
            const confirmed = window.confirm("Bạn có chắc cập nhật tài khoản này này?");
            if (confirmed) {
                try {
                    await UserService.update(this.user ? this.user._id : null, data);
                    this.message = "Cập nhật sản phẩm thành công";
                    alert(this.message);
                    this.$router.push({ name: 'admin-user' });
                } catch (error) {
                    console.error(error);
                }
            }
        },
    },
    created() {
        this.getUser();
    },
};
</script>
