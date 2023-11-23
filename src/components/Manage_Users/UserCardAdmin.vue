<script>
export default {
    props: {
        user: { type: Object, required: true },
    },
};
</script>

<template>
    <div class="row" style="padding: 10px;">
        <div class="p-1 col-4 img-card">
           <img :src="user.imgURL" alt=""> 
        </div>
        <div class="col-8">
            <div class="p-1">
            <strong>Tên:</strong>
            {{ user.name }}
        </div>
        <div class="p-1">
            <strong>Email:</strong>
            {{ user.email }}
        </div>
        <div class="p-1">
            <strong>Số điện thoại:</strong>
            {{ user.phoneNumber }}
        </div>
        <div class="p-1">
            <strong>Địa chỉ:</strong>
            {{ user.address }}
        </div>
        <div class="p-1">
            <strong>Mật khẩu:</strong>
            {{ user.password }}
        </div>
        <div class="p-1">
            <strong>Vai trò:</strong>
            {{ user.role }}
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