<template>
    <div class="row">
        <div class="col-sm-12" style="text-align: center;">
            <h3>Thống kê đơn đặt hàng</h3>
            <label><b>Tổng số đơn hàng:</b></label>
            <label>{{ customers.length }}</label>

        </div>

        <div class="col-sm-6">

            <div>
                <label><b>Tổng doanh thu:</b></label>
                <label>{{ totalAmount }}.000 vnđ</label>
            </div>

            <div>
                <label><b>Thông tin khách hàng:</b></label>
                <ul>
                    <li v-for="customer in customers" :key="customer.id">
                        {{ customer.gt }}: {{ customer.hoten }} - Số điện thoại: {{ customer.sdt }} - Địa chỉ: {{
                            customer.diachi }}
                        - Ngày đặt hàng: {{ customer.ngayDatHang }} - Ngày giao hàng: {{ customer.ngayGiaoHang }} - Trạng
                        thái: {{ customer.trangThai }}
                    </li>
                </ul>
            </div>

            <h4>Sản phẩm đã đặt hàng:</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Tên sách</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in cart" :key="product.id">
                        <td>{{ product.sanpham }}</td>
                        <td>{{ product.dongia }}.000 vnđ</td>
                        <td>{{ product.soluong }}</td>
                        <td>{{ product.tongtien }}.000 vnđ</td>
                    </tr>
                </tbody>
            </table>

        </div>





    </div>
</template>
  
<script>
export default {
    data() {
        return {
            cart: [
                {
                    id: 1,
                    sanpham: 'Combo ngũ cốc 1',
                    dongia: 100,
                    soluong: 2,
                    tongtien: 200,
                },
                {
                    id: 2,
                    sanpham: 'Combo ngũ cốc 2',
                    dongia: 150,
                    soluong: 3,
                    tongtien: 450,
                },
                // Add more products as needed
            ],
            customers: [
                {
                    id: 1,
                    gt: 'Anh',
                    hoten: 'John Doe',
                    sdt: '1234567890',
                    diachi: '123 Main Street, City',
                    pt: 'Chuyển khoản qua ngân hàng',
                    ngayDatHang: '2023-11-03', // Thay đổi giá trị ngày đặt hàng
                    ngayGiaoHang: '2023-11-05', // Thay đổi giá trị ngày giao hàng
                    trangThai: 'Đã giao hàng', // Thay đổi trạng thái
                },
                // Add more customer data as needed
            ],
        };
    },
    computed: {
        totalAmount() {
            return this.cart.reduce((total, product) => total + product.tongtien, 0);
        },
    },
};
</script>
  