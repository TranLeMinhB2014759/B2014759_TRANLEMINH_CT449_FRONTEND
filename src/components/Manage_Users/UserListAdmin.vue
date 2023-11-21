<script>
import UserService from "@/services/user.service.js";
export default {
  props: {
    users: { type: Array, deafault: [] },
    activeIndex: { type: Number, deafault: -1 },
    user: { type: Object, required: true },
  },
  emits: ["update:activeIndex", "delete:user"],
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
    async deleteUser(id) {
      const confirmed = window.confirm("Bạn có chắc muốn xóa tài khoản này không?");
      if (confirmed) {
        await UserService.delete(id);
        this.$emit("delete:user");
        location.reload();
      }
    },
  }
};
</script>

<template>
  <ul class="list-group">
        <li 
            class="list-group-item d-flex justify-content-between align-items-start"
            v-for="(user, index) in users"
            :key="index"
            :class="{active: index === activeIndex}"
            @click="updateActiveIndex(index)"
        >
        {{  user.name }}
          <button type="button" class="ml-2 btn btn-danger" @click="deleteUser(user._id)" >
            <i class="fa fa-trash"></i>
          </button> 
        </li>
    </ul>
</template>
<style scoped>
@import "@/assets/css/homepage.css";
</style>