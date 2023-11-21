<template>
    <div>
        <h1 class="d-flex justify-content-center">Thêm Tài Khoản</h1>
        <add @submit:user="createUser" />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import add from "@/components/Manage_Users/AddForm.vue";
import UserService from "@/services/user.service";

export default {
    components: {
        add,
    },
    props: {
        user: { type: Object, require: true },
    },
    data() {
        return {

            message: "",
        };
    },
    methods: {
    
    async createUser(data) {
      // Hiển thị cửa sổ xác nhận
      const confirmed = window.confirm("Bạn có thêm tài khoản mới?");

      if (confirmed) {
        try {
          await UserService.create(data);
          this.message = "Thêm tài khoản mới thành công";
          this.$router.push({ name: 'admin-user' });
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};


</script>

<style scoped></style>
