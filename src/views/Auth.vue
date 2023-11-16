<template>
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
          <div class="col-sm-3" v-for="product in products" :key="product._id">
            <router-link :to="{ name: 'product', params: { id: product._id } }">
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
                <p>{{ product.Gia }} VNĐ / 1 kg</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Lời khuyên -->

    <div class="lk">
      <div class="row">
        <div class="col-sm-6">
          <h2 style="color: #f7c41c;">Khi sử dụng ngũ cốc trong chế độ ăn của bạn, có một số lời khuyên quan trọng về
            việc nên làm, không nên làm và lưu ý:</h2>
          <div class="check">
            <div>
              <h4 style="color: #00FF00;">
                <i class="fa-regular fa-circle-check"></i>
                Nên:
              </h4>
              <ul>
                <li>Lựa chọn ngũ cốc nguyên hạt: Ưu tiên lựa chọn ngũ cốc nguyên hạt, chứa nhiều chất xơ, vitamin và
                  khoáng chất. Chúng có lợi cho sức khỏe tim mạch và giúp duy trì cân nặng..</li>
                <li>Kiểm tra thành phần: Đọc kỹ thành phần trên bao bì để tránh những sản phẩm chứa đường và chất bảo
                  quản thêm. Chọn các sản phẩm có ít đường và thành phần tự nhiên..</li>
                <li>Đa dạng hóa nguồn ngũ cốc: Hãy thử nhiều loại ngũ cốc khác nhau như lúa mạch, yến mạch, gạo lứt, hạt
                  lanh, hạt óc chó, và nguồn ngũ cốc tự nhiên khác để đảm bảo bạn nhận đủ dinh dưỡng và không bị nhàm
                  chán..</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="ban">
            <div>
              <h4 style="color: #FF0000;">
                <i class="fa-solid fa-ban"></i>
                Không nên:
              </h4>
              <ul>
                <li>Tránh ngũ cốc có nhiều đường: Hạn chế sử dụng ngũ cốc chứa nhiều đường và bắt đầu quen dần với
                  việc ăn ngũ cốc không đường hoặc ít đường.</li>
                <li>Không nên dùng ngũ cốc tạo sẵn: Ngũ cốc tạo sẵn thường chứa nhiều chất phụ gia và đường. Hãy tự
                  nấu ngũ cốc để kiểm soát thành phần và độ ngọt.</li>
              </ul>
            </div>
          </div>
          <div class="exc">
            <div>
              <h4 style="color:#FF6600;">
                <i class="fa-solid fa-circle-exclamation"></i>
                Lưu ý:
              </h4>
              <ul>
                <li> Cân nhắc về kích cỡ phần: Hãy tuân thủ phân loại kích cỡ phần theo chỉ dẫn trên bao bì để đảm bảo
                  bạn không ăn quá nhiều.</li>
                <li> Đánh giá nhu cầu cá nhân: Hãy xem xét nhu cầu dinh dưỡng của bạn và điều chỉnh lượng ngũ cốc dựa
                  trên sự hoạt động, cân nặng, và mục tiêu sức khỏe cá nhân.</li>
                <li> Kết hợp với thực phẩm khác: Hãy kết hợp ngũ cốc với các loại thực phẩm khác như hoa quả, sữa
                  chua, hạt, và nước hoa quả để tạo ra bữa ăn cân đối và bổ dưỡng hơn.</li>
                <li>Tìm hiểu về nguồn gốc: Hãy biết từ đâu nguồn ngũ cốc của bạn được sản xuất. Sản phẩm hữu cơ và
                  không chứa chất xử lý hóa học thường là lựa chọn tốt hơn cho sức khỏe.</li>
              </ul>
            </div>
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
  
<style scoped>
.row {
  padding-bottom: 20px;
  margin-bottom: 25px;
}

.content {
  background-color: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 335px;
}

.text-container {
  padding: 0 8px;
}

/* Thụt đầu hàng cho các dòng chữ */
.text-container h1,
.text-container p {
  text-align: left;
  margin: 0;
  display: block;
  margin-left: 1em;
  /* Điều chỉnh khoảng cách lề bằng nhau ở đầu dòng */
  text-indent: -1em;
}

.line-break {
  display: block;

}

.col-sm-6 {
  margin-top: 16px;
}

.img-banner {
  background-image: url(https://fruitstt.vn/wp-content/uploads/2021/01/8-la-tin-do-trai-cay-tuoi-ban-co-biet-meo-chon-trai-cay-ngon-nay-chua.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 55vh;
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  text-align: center;
  color: aliceblue;
  border-radius: 10px;
}

.centered-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.centered-text {
  text-align: center;
  color: #333;
}


/* Quyền lợi */
.carousel-item {
  color: #333;
  /* Chữ màu trắng */
  border-radius: 10px;
  height: 64vh;
  width: 100%;
}

.carousel-item h3 {
  color: #386fd6;
  text-align: center;
  /* Chữ màu trắng */
}

.carousel-item ul {
  list-style: none;

}

.carousel-item ul>h3 {
  padding-bottom: 30px;
}

.tc {
  border-radius: 8px;
  margin-top: 10px;
  padding: 10px;
  background-color: #ffffff;
  min-height: 200px;
}

.container-sp{
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.imgsp {
  width: 180px;
  height: 180px;
  border-radius: 5px;
}

.product-title{
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 20px;
}

.lk {
  background-color: #1c9145;
  border-radius: 10px;
  width: 100%;

}

.col-sm-6>h2,
.col-sm-6 .check,
.col-sm-6 .ban,
.col-sm-6 .exc {
  padding: 20px;
}

.check,
.ban,
.exc {
  margin: 10px;
  background-color: #ffffff;
  border-radius: 10px;
}

a{
    text-decoration: none;
    color: #666666;
}

a:hover {
    text-decoration: none;
    color: #57b846;
}
</style>