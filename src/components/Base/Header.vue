<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-light">
            <div class="container-fluid">
                <a href="" class="navbar-brand">
                    <router-link :to="{ name: 'trangchu' }" class="nav-link">
                        <img src="@/assets/img/logo.png" alt="" class="rounded-circle logo-img mr-2">
                        <span class="logo-text text-success">CÔNG TY GARDEN SUPPLY</span>
                    </router-link>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse flex-row-reverse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-if="!isLoggedIn" @click="loginUser()">
                            <router-link :to="{ name: 'login' }" class="login">
                                Đăng Nhập
                            </router-link>

                        </li>
                        <li class="nav-item" v-if="!isLoggedIn" @click="signupUser()">
                            <router-link :to="{ name: 'signup' }" class="register">
                                Đăng Ký
                            </router-link>
                        </li>
                        <div class="dropdown" v-else>
                            <a class="dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                <img src="@/assets/img/user.jpg" class="rounded-circle" height="55" width="60" alt="User"
                                    loading="lazy" />
                            </a>
                            <ul class="dropdown-menu">
                                <!-- <li>
                                    <a class="dropdown-item" @click="OpenModalRegister">Thay đổi thông tin</a>
                                </li> -->
                                <li>
                                    <a class="dropdown-item" @click="logout">Đăng xuất &nbsp<i
                                            class="fa fa-sign-out"></i></a>
                                </li>
                                <AModal :isShowModalRegister="isShowModalRegister"
                                    :closeModalRegister="closeModalRegister" />
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
        <div>
            <nav class="navbar navi">
                <div class="nav-item" style="margin: auto; margin-right: 16px; color: white;">
                    <router-link :to="{ name: 'trangchu' }" class="nav-link" style="color: #ffffff;">
                        <i class="fa-solid fa-house"></i>
                        Trang Chủ
                    </router-link>
                </div>
                <div class="nav-item" style="margin-right: 16px; color: white">
                    <router-link :to="{ name: 'products' }" class="nav-link" style="color: #ffffff;">
                        <i class="fa-solid fa-lemon"></i>
                        Sản phẩm
                    </router-link>
                </div>

                <div class="nav-item" style="margin-right: 16px; color: white; "  v-if="isLoggedIn">
                    <router-link :to="{ name: 'order' }" class="nav-link" style="color: #ffffff;">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Giỏ hàng
                    </router-link>
                </div>
                <div :class="'nav-item'" style="color: white;margin-right: auto;"></div>

            </nav>

        </div>
    </div>
</template>


<script>
export default {
    components: {
        Modal,

    },
    data() {
        return {
            isLoggedIn: false,
            AModalVisible: false
        };
    },

    mounted() {
        let intervalId;

        intervalId = setInterval(() => {
            const userJs = window.localStorage.getItem('user');
            const user = JSON.parse(userJs);


            if (user) {
                this.isLoggedIn = true;
            }
        }, 100);
        setTimeout(() => {
            clearInterval(intervalId);
        }, 3000000);
    },

    methods: {
        logout() {
            const confirmed = window.confirm("Bạn có chắc muốn đăng xuất tài khoản?");
            if (confirmed) {
            window.localStorage.removeItem('user');
            this.isLoggedIn = false;


            this.$router.push({ name: "trangchu" });
            }
        },
        loginUser() {

            this.$router.push({ name: "login" });
        },
        signupUser() {

            this.$router.push({ name: "signup" });
        },
        openModal() {
            this.AModalVisible = false;
        },

    }
};
</script>

<script setup>
import { ref } from "vue";
import Modal from "@/components/Admin/Modal.vue";


const isShowModalRegister = ref(false)

const OpenModalRegister = () => {
    isShowModalRegister.value = true;
};
const closeModalRegister = () => {
    isShowModalRegister.value = false;
};
</script>


<style scoped>
.logo-img {
    border-radius: 50%;
    /* Bo tròn ảnh */
    width: 65px;
    /* Thu nhỏ ảnh thành 1/4 kích thước ban đầu */
}


/* CSS để định dạng văn bản */
.logo-text {
    font-size: 18px;
    /* Điều chỉnh kích thước font chữ */
    color: white;
    /* Điều chỉnh màu sắc của văn bản */
    text-align: center;
    /* Căn giữa văn bản */
    margin-top: 10px;
    /* Khoảng cách từ logo đến văn bản (điều chỉnh giá trị này theo nhu cầu) */
}
.navi {
    background-color: #1b7931;
    /* Màu nền xanh */
    display: flex;
    align-items: center;
    padding: 10px;
    /* Khoảng cách nền và chữ trong thẻ div */
    border-radius: 1px;
    /* Bo góc thẻ div */
}
.nav-item {
    cursor: pointer;
    margin: 0 10px;
    position: relative;
}

.nav-item::after {
    content: '';
    /* Tạo nội dung trống cho thanh ngang */
    position: absolute;
    /* Đặt vị trí tuyệt đối */
    left: 0;
    /* Đặt bên trái */
    bottom: -2px;
    /* Đặt bên dưới và căn đều theo chiều ngang */
    width: 100%;
    /* Chiều rộng của thanh ngang */
    height: 2px;
    /* Chiều cao của thanh ngang */
    background-color: white;
    /* Màu sắc của thanh ngang */
    transform: scaleX(0);
    /* Thu gọn thanh ngang theo chiều ngang ban đầu */
    transform-origin: left;
    /* Đặt gốc xoay ở bên trái */
    transition: transform 0.3s;
    /* Hiệu ứng chuyển đổi */
}

.nav-item:hover::after {
    transform: scaleX(1);
    /* Mở rộng thanh ngang khi hover */
}

.login {
    text-decoration: none;
    color: black;
}

.register {
    text-decoration: none;
    color: black;
}

.login:hover {
    text-decoration: none;
    color: rgb(4, 215, 0);

}

.register:hover {
    text-decoration: none;
    color: rgb(4, 215, 0);

}

.dropdown-menu {
    margin-left: -100px;
}</style>