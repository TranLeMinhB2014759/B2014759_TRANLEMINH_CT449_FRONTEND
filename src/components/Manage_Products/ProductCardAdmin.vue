<script>
export default {
    props: {
        product: { type: Object, required: true },
    },
};
</script>

<template>
    <div class="row" style="padding: 10px;">
        <div class="p-1 col-4 img-card">
           <img :src="product.imgURL" alt=""> 
        </div>
        <div class="col-8">
            <div class="p-1">
            <strong>Tên sản phẩm:</strong>
            {{ product.TenHH }}
        </div>
        <div class="p-1">
            <strong>Giá:</strong>
            {{ product.Gia }}đ
        </div>
        <div class="p-1">
            <strong>Số lượng:</strong>
            {{ product.SoLuongHangHoa }} kg
        </div>
        <div class="p-1">
            <strong>Ghi Chú:</strong>
            {{ product.GhiChu }}
        </div>
        </div>
    </div>
</template>
<style scoped>
.img-card{
    display: flex;
    justify-content: center;
}
.img-card>img{
    width: 200px;
    height: 200px;
}
</style>