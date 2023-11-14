<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6" v-if="product" :key="product._id">
        <img :src="product.imgURL" alt="">
      </div>
      <div class="col-sm-6" v-if="product" :key="product._id">
        <div class="product-details">
          <div class="product-header">
            <h1 style="color: #0077B6">{{ product.TenHH }}</h1>
            <div class="product-price">

              <span class="price-new">{{ product.Gia }}</span>
              <span class="price">-</span>
              <span class="price-old">{{ product.Gia }}</span>
            </div>
            <div class="product-rating">
              <!-- 45 ngôi sao màu vàng -->
              <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
          </div>
          <div class="product-info">

            <p>Tên Sản Phẩm:{{ product.TenHH }}</p>
            <p>Xuất Xứ: Hưng Yên</p>
            <p>Hạn Sử Dụng: 12 tháng</p>
            <p>:{{ product.MoTaHH }}</p>

          </div>

        </div>
        <div class="product-details">
          <!-- ...Các phần khác giữ nguyên... -->
          <div class="product-quantity">
            <button id="decrease-quantity" @click="decreaseQuantity">-</button>
            <span id="quantity">{{ SoLuongHangHoa }}</span>
            <button id="increase-quantity" @click="increaseQuantity">+</button>
          </div>
          <router-link :to="{ name: 'events' }">
            <button id="add-to-cart" class="btn btn-success text-white">Thêm vào giỏ hàng</button>


          </router-link>

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
      SoLuongHangHoa: 1,
      product: null,
    };
  },
  props: {
    id: { type: String, required: true },
  },
  methods: {
    decreaseQuantity() {
      if (this.SoLuongHangHoa > 1) {
        this.SoLuongHangHoa--;
      }
    },
    increaseQuantity() {
      this.SoLuongHangHoa++;
    },

  },
  async created() {
    const productId = this.$route.params.id;
    try {
      this.product = await ProductService.get(productId);
    } catch (error) {
      console.error(error);
    }
  },
}









</script>
  
<style scoped>
img {
  width: 324px;
}

.product-rating span {
  color: gold;
  /* Đổi màu thành màu vàng */
}

.product-details {
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
}

li {
  list-style: none;
}

.product-info {
  list-style: none;
  padding-left: 0;
}

.product-action {
  display: flex;
  justify-content: flex-end;
}

.btn-add-to-cart {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-order-now {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.product-quantity {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.product-quantity button {
  background-color: #0077B6;
  /* Màu nền của nút */
  color: #fff;
  /* Màu chữ trắng */
  border: none;
  border-radius: 50%;
  /* Làm cho nút có hình dạng tròn */
  width: 30px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
}

#quantity {
  margin: 0 10px;
  font-size: 18px;
}

/* Hiệu ứng khi hover vào nút */
.product-quantity button:hover {
  background-color: #005a9e;
  /* Màu nền khi hover */
}

#add-to-cart {
  border-radius: 5px;
}
</style>
  