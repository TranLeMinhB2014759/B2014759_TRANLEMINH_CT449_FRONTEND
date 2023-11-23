<template>
    <FormLogin @submit:login="loginUser" />
</template>
  
<script>
import FormLogin from "@/components/AuthForm/LoginForm.vue";
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
                localStorage.setItem('user', JSON.stringify(response.user));

                if (response && response.message === 'Đăng nhập thành công') {
                    if (response.user.role === 'admin') {
                        this.message = "Đăng nhập thành công vào trang admin";
                        this.$router.push({ name: 'welcome' });
                    } else {
                        this.message = "Đăng nhập thành công";
                        this.$router.push({ name: 'trangchu' });
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

  