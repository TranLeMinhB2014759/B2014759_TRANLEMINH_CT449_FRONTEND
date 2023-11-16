<template>
    <FormLogin @submit:login="loginUser" />
</template>
  
<script>
import FormLogin from "@/components/LoginForm.vue";
import UserService from "@/services/user.service.js";

export default {
    components: {
        FormLogin,
    },
    data() {
        return {
            message: "",
        };
    },
    methods: {
        async loginUser(data) {
            try {
                const response = await UserService.login(data);
                console.log("hello", response);
                localStorage.setItem('user', JSON.stringify(response.user));

                if (response && response.message === 'Đăng nhập thành công') {
                    // Check the user's role
                    if (response.user.role === 'admin') {
                        this.message = "Đăng nhập thành công vào trang admin";
                        this.$router.push({ name: 'awelcome' }); // Assuming 'admin' is the name of your admin route.
                    } else {
                        this.message = "Đăng nhập thành công";
                        this.$router.push({ name: 'auth' }); // Assuming 'auth' is the name of your user route.
                    }
                }
            } catch (error) {
                console.error("Login error:", error);
                this.message = "Đăng nhập thất bại, mật khẩu hoặc email chưa chính xác";
                alert(this.message);
            }
        },
    },
};
</script>

  