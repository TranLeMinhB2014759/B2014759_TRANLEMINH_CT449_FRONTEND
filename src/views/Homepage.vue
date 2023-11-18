<template>
  <div class="container mt-3">
    <div id="carouselControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselControls" data-bs-slide-to="0" class="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-banner-background-off-season-crazy-image_14669.jpg"
            alt="First slide" class="d-block w-100" height="350px">
          <div class="carousel-caption d-none d-md-block animationSlide">

            <strong>Diverse book store</strong>
            <p>The more that you read, the more things you will know. The more that you learn, the more
              places you’ll go.</p>

          </div>
        </div>
        <div class="carousel-item">
          <img src="https://berryfruit.vn/upload/images/banner/banner-web-1.jpg" alt="Second slide" class="d-block w-100"
            height="350px">
          <div class="carousel-caption d-none d-md-block animationSlide">
            <strong>Study space</strong>
            <p>The space is quiet, airy, and has a computer system to support searching.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://fruitstt.vn/wp-content/uploads/2021/06/Website-banner-ngang-03-1400x504.png" alt="Third slide"
            class="d-block w-100" height="350px">
          <div class="carousel-caption d-none d-md-block animationSlide">
            <strong>Professional document</strong>
            <p>Helps you easily research projects.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-sm-6">
        <div class="img-banner">
          <div class="centered-content">
            <h1></h1>
            <p class="centered-text"></p>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <ul>
                <h3>CÔNG TY GARDEN SUPPLY</h3>
                <li>Với mong muốn đem đến cho mọi gia đình Việt những loại hoa quả sạch – tươi - ngon – dinh dưỡng nhất.
                  Đồng thời là cầu nối để các vườn cây ăn quả sạch trên khắp cả nước của những người nông dân tâm huyết
                  được tiếp cận gần hơn với người tiêu dùng. Công ty <b>GARDEN SUPPLY</b> đã được thành lập với hệ thống
                  cửa hàng bán lẻ,
                  cửa hàng trực tuyến sẵn sàng phục vụ cho mọi khách hàng.
                </li>
                <br>
                <li>
                  Chúng tôi thấu hiểu rằng, tất cả mọi mục tiêu kinh doanh của mình phải được thực hiện với chữ Tâm, chữ
                  Tín đặt lên hàng đầu. Chính vì vậy, để thực hiện trọn vẹn sứ mệnh mang đến những loại quả đạt chuẩn, góp
                  phần vào việc chăm sóc sức khỏe, giảm bớt nỗi lo an toàn vệ sinh thực phẩm cho người tiêu dùng Việt mỗi
                  ngày, mọi thành viên trong gia đình, Công ty <b>GARDEN SUPPLY</b> của chúng tôi luôn tuân thủ những
                  chuẩn mực khắt khe
                  về nguồn gốc, chất lượng hoa quả, quy trình bán hàng tối ưu như đã cam kết.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tc">
      <div class="container">
        <div class="product-title">Các sản phẩm</div>
        <div class="row">
          <div class="col-sm-3" @click="OpenModalRegister" v-for="product in products" :key="product._id">
            <div class="container-sp"><img :src="product.imgURL" alt="Hình ảnh" class="imgsp" /></div>
            <div class="ten">
              <p>{{ product.TenHH }}</p>
              <div class="ngoi-sao">
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
              </div>
              <p><b>{{ product.Gia }} VNĐ / 1 kg</b></p>
            </div>
            <homeModal :isShowModalRegister="isShowModalRegister" :closeModalRegister="closeModalRegister" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from '../services/hanghoa.service';

export default {
  data() {
    return {
      products: [],

    };
  },
  props: {
    id: { type: String, required: true },
  },
  methods: {
    async retrieveProducts() {
      try {
        this.products = await ProductService.getAll();
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.retrieveProducts();
  },

}


</script>
<script setup>
import { ref } from "vue";
import homeModal from "./homeModal.vue";


const isShowModalRegister = ref(false)

const OpenModalRegister = () => {
  isShowModalRegister.value = true;
};
const closeModalRegister = () => {
  isShowModalRegister.value = false;
};
</script>
  
<style scoped>@import "@/assets/css/homepage.css";</style>
