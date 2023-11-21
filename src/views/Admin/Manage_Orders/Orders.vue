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
                <label><b>Người giao:</b></label>
                <select v-model="selectedEmployee">
                    <option v-for="employ in employs" :key="employ.id" :value="employ.id">{{ employ.hoten }}</option>
                </select>
            </div>

            <div>
                <label><b>Thông tin khách hàng:</b></label>
                <ul v-for="customer in customers" :key="customer.id">
                    <li>
                        {{ customer.gt }}: {{ customer.hoten }}

                    </li>
                    <li> Số điện thoại: {{ customer.sdt }} </li>
                    <li>Địa chỉ: {{ customer.diachi }}</li>
                    <li> Ngày đặt hàng: {{ customer.ngayDatHang }}</li>
                    <li>
                        <div>
                            <label><b>Ngày giao hàng:</b></label>
                            <input type="date" v-model="deliveryDate" />
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <label><b>Trạng thái:</b></label>
                <select v-model="status">
                    <option value="Đang giao">Đang giao</option>
                    <option value="Đã giao">Đã giao</option>
                </select>
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
                        <td>{{ product.giam }}%</td>
                        <td>{{ product.soluong }}</td>
                        <td>{{ product.tongtien }}.000 vnđ</td>
                    </tr>
                </tbody>
            </table>
            <button class="btn btn-success">Duyệt</button>
        </div>

        <div class="col-sm-6">
            <div>
                <label><b>Tổng doanh thu:</b></label>
                <label>{{ totalAmount }}.000 vnđ</label>
            </div>
            <div>
                <label><b>Người giao:</b></label>
                <select v-model="selectedEmployee">
                    <option v-for="employ in employs" :key="employ.id" :value="employ.id">{{ employ.hoten }}</option>
                </select>
            </div>

            <div>
                <label><b>Thông tin khách hàng:</b></label>
                <ul v-for="customer in customers" :key="customer.id">
                    <li>
                        {{ customer.gt }}: {{ customer.hoten }}

                    </li>
                    <li> Số điện thoại: {{ customer.sdt }} </li>
                    <li>Địa chỉ: {{ customer.diachi }}</li>
                    <li> Ngày đặt hàng: {{ customer.ngayDatHang }}</li>
                    <li>
                        <div>
                            <label><b>Ngày giao hàng:</b></label>
                            <input type="date" v-model="deliveryDate" />
                        </div>
                    </li>

                </ul>
            </div>
            <div>
                <label><b>Trạng thái:</b></label>
                <select v-model="status">
                    <option value="Đang giao">Đang giao</option>
                    <option value="Đã giao">Đã giao</option>
                </select>
            </div>

            <h4>Sản phẩm đã đặt hàng:</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Giảm</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in cart" :key="product.id">
                        <td>{{ product.sanpham }}</td>
                        <td>{{ product.dongia }}.000 vnđ</td>
                        <td>{{ product.giam }}%</td>
                        <td>{{ product.soluong }}</td>
                        <td>{{ product.tongtien }}.000 vnđ</td>
                    </tr>
                </tbody>
            </table>
            <button class="btn btn-success">Duyệt</button>

        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            selectedEmployee: null,
            deliveryDate: '',
            status: '',
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
            employs: [
                {
                    id: 1,
                    hoten: 'Jon with',
                    // Thay đổi trạng thái
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
  