<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-light">
            <div class="container-fluid">
                <a href="" class="navbar-brand">
                    <router-link :to="{ name: 'trangchu' }" class="nav-link">
                        <img src="../assets/img/logo.png" alt="" class="rounded-circle logo-img mr-2">
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
                            <router-link :to="{ name: 'user.register' }" class="register">
                                Đăng Ký
                            </router-link>

                        </li>
                        <div class="dropdown" v-else>
                            <a class="dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                <img src="@/assets/img/user.jpg" class="rounded-circle" height="55" width="60" alt="User"
                                    loading="lazy" />
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" @click="OpenModalRegister">Thay đổi thông tin</a>
                                </li>
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
                <div class="nav-item" style="margin-right: 16px; color: white;margin-left: auto;" v-if="!isLoggedIn">
                    <router-link :to="{ name: 'trangchu' }" class="nav-link" style="color: #ffffff;">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                            <path d="M10 12h4v4h-4z"></path>
                        </svg>
                        Trang Chủ
                    </router-link>
                </div>
                <div class="nav-item" style="margin-right: 16px; color: white;margin-left: auto;" v-else>
                    <router-link :to="{ name: 'auth' }" class="nav-link" style="color: #ffffff;">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                            <path d="M10 12h4v4h-4z"></path>
                        </svg>
                        Trang Chủ
                    </router-link>
                </div>
                <div class="nav-item" style="margin-right: 16px; color: white; ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-question"
                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                        <path d="M13.5 17h-7.5v-14h-2"></path>
                        <path d="M6 5l14 1l-.714 5m-4.786 2h-8.5"></path>
                        <path d="M19 22v.01"></path>
                        <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"></path>
                    </svg>
                    Hỏi Đáp
                </div>
                <div :class="'nav-item'" style="color: white;margin-right: auto;"></div>
            </nav>

        </div>
    </div>
</template>


<script>


export default {
    components: {
        AModal,

    },
    data() {
        return {
            isLoggedIn: false,

            AModalVisible: false,

        };

    },

    mounted() {
        // Khai báo biến intervalId bằng let hoặc const
        let intervalId;

        // Gọi đoạn code mỗi 5 giây và lưu giá trị được trả về bởi setInterval
        intervalId = setInterval(() => {
            const userJs = window.localStorage.getItem('user');
            const user = JSON.parse(userJs);


            if (user) {
                // console.log('user', user);
                this.isLoggedIn = true;
            }
        }, 100); // Gọi mỗi 0,1 giây 

        // Để dừng việc gọi đoạn code sau một thời gian hoặc khi điều kiện nào đó được thỏa mãn, bạn có thể sử dụng clearInterval(intervalId)

        // Ví dụ: Dừng việc gọi đoạn code sau 300 giây
        setTimeout(() => {
            clearInterval(intervalId);
        }, 3000000);
    },

    methods: {
        logout() {
            window.localStorage.removeItem('user');
            this.isLoggedIn = false;


            this.$router.push({ name: "trangchu" });
        },
        loginUser() {

            this.$router.push({ name: "login" });
        },
        signupUser() {

            this.$router.push({ name: "user.register" });
        },
        openModal() {
            this.AModalVisible = false;
        },


    }
};
</script>

<script setup>
import { ref } from "vue";
import AModal from "./AModal.vue";


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