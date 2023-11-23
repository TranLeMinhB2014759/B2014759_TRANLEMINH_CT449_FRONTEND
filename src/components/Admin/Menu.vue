<template>
    <div class="menu">
        <table class="table align-middle  table-secondary">
            <thead class="bg-light">
                <tr>
                    <th style="text-align:  center;">
                        <i class="fa-solid fa-building-wheat"></i>&nbsp
                        CÔNG TY GARDEN SUPPLY
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-center">
                        <i class="fa-solid fa-users-line"></i>&nbsp
                        <router-link :to="{ name: 'admin-user' }" style="text-decoration: none; class " class="textp">
                            Quản lí tài khoản

                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">
                        <i class="fa-solid fa-lemon"></i>&nbsp
                        <router-link :to="{ name: 'admin-product' }" style="text-decoration: none; class " class="textp">
                            Quản lí sản phẩm
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">
                        <i class="fa-solid fa-cash-register"></i>&nbsp
                        <router-link :to="{ name: 'admin-order' }" style="text-decoration: none; class " class="textp">
                            Thống kê đơn hàng
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="button">
            <button type="button" class="btn btn-success" @click="logout">
                Đăng xuất
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            const confirmed = window.confirm("Bạn có chắc muốn đăng xuất khỏi hệ thống?");
            if (confirmed) {
                window.localStorage.removeItem('user');
                this.isLoggedIn = false;
                this.$router.push({ name: "login" });
            }
        },
    }

}
</script>

<style scoped>
.menu{
    height: 90vh ;
    background-color: #f2f2f2;
}
.table tbody tr:hover {
    background-color: #f2f2f2;
    cursor: pointer;
}
.table>:not(caption)>*>* {
    padding: 0.75rem 0.5rem !important;
}
.table thead tr th {
    color: rgb(12, 113, 61);
}

.table tbody tr td {
    padding-left: 40px;
    font-weight: 700;
}

.table tbody tr td .textp {
    color: #000;
}

.table tbody tr td .textp:hover {
    color: rgb(12, 113, 61);
}

.table tbody tr:hover td {
    color: rgb(12, 113, 61);
}

.table tbody tr:hover:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgb(12, 113, 61);
    /* Change to the desired line color */
}

.button {
    margin-top: 30px;
    margin-left: 60px;


}

button {
    color: #f2f2f2;
    background-color: rgb(12, 113, 61);
    border-radius: 5px;

}
</style>





