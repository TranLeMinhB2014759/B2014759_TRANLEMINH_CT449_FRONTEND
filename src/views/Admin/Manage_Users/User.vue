<script>
import UserListAdmin from "@/components/Manage_Users/UserListAdmin.vue";
import UserCardAdmin from "@/components/Manage_Users/UserCardAdmin.vue";
import InputSearch from "@/components/InputSearch.vue";
import UserService from "@/services/user.service.js";
export default {
  components: {
    InputSearch,
    UserListAdmin,
    UserCardAdmin,
  },
  data() {
    return {
      users: [],
      activeIndex: -1,
      searchText: "",
    };
  },
  watch: {
    searchText() {
      this.activeIndex = -1;
    },
  },
  computed: {
    userStrings() {
      return this.users.map((user) => {
        const { name, password, email, role, imgURL } = user;
        return [name, password, email, role, imgURL].join("");
      });
    },
    filteredUsers() {
      if (!this.searchText) return this.users;
      return this.users.filter((_user, index) =>
        this.userStrings[index].includes(this.searchText)
      );
    },
    activeUser() {
      if (this.activeIndex < 0) return null;
      return this.filteredUsers[this.activeIndex];
    },
    filteredUsersCount() {
      return this.filteredUsers.length;
    },
  },
  methods: {
    async retrieveUsers() {
      try {
        this.users = await UserService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveUsers();
      this.activeIndex = -1;
    },
    goToAddUser() {
      this.$router.push({ name: 'add-user' });
    },
  },
  created() {
    // Automatically call refreshList() when the component is created
    this.refreshList();
  },
};
</script>

<template>
  <div class="banner text-center">QUẢN LÝ TÀI KHOẢN</div>
  <div class="container">
    <button class="btn btn-sm" @click="goToAddUser()">
      <router-link :to="{ name: 'add-user' }" class="text-success">
        <i class="fas fa-plus fa-2x" aria-hidden="true"></i>
      </router-link>
    </button>
    <div class="row">
      <div class="container col-4">
        <InputSearch v-model="searchText" />
      </div>
      <div class="col-8"></div>
    </div>
    <div class="row">
      <div class="mt-3 col-4 products">
        <UserListAdmin v-if="filteredUsersCount > 0" :users="filteredUsers" v-model:activeIndex="activeIndex" />
        <p v-else>Không tìm thấy tài khoản phù hợp.</p>
      </div>
      <div class="mt-3 col-8">
        <div v-if="activeUser">
          <h4>
            Thông tin tài khoản
            <UserCardAdmin :user="activeUser" />
            <router-link :to="{
              name: 'edit-user',
              params: { id: activeUser._id },
            }">
              <span class="mt-2 badge badge-warning">
                <i class="fas fa-edit"></i> Hiệu chỉnh
              </span>
            </router-link>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.badge {
  --bs-badge-color: black !important;
}

.banner {
  background-color: antiquewhite;
  padding: 10px;
  margin-bottom: 15px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  font-weight: 600;
}
</style>