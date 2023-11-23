<template>
  <div class="container" style="padding: 20px 70px;">
    <Form @submit="submitUser" :validation-schema="userFormSchema">
      <div class="form-group">
        <label for="name">Tên tài khoản:</label>
        <Field name="name" type="text" class="form-control" v-model="userLocal.name" required />
        <ErrorMessage name="name" class="error-feedback" style="color: rgb(238, 15, 15);" />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <Field name="email" type="email" class="form-control" v-model="userLocal.email" required />
        <ErrorMessage name="email" class="error-feedback" style="color: rgb(238, 15, 15);" />
      </div>

      <div class="form-group">
        <label for="phoneNumber">Số điện thoại:</label>
        <Field name="phoneNumber" type="text" class="form-control" v-model="userLocal.phoneNumber" required />
        <ErrorMessage name="phoneNumber" class="error-feedback" style="color: rgb(238, 15, 15);" />
      </div>

      <div class="form-group">
        <label for="address">Địa chỉ:</label>
        <Field name="address" type="text" class="form-control" v-model="userLocal.address" required />
        <ErrorMessage name="address" class="error-feedback" style="color: rgb(238, 15, 15);" />
      </div>

      <div class="form-group">
        <label for="password">Mật khẩu:</label>
        <Field name="password" type="password" class="form-control" v-model="userLocal.password" required />
        <ErrorMessage name="password" class="error-feedback" style="color: rgb(238, 15, 15);" />
      </div>

      <div class="form-group">
        <label for="role">Vai trò:</label>
        <Field as="select" name="role" class="form-control" v-model="userLocal.role" required>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </Field>
        <ErrorMessage name="role" class="error-feedback" style="color: rgb(238, 15, 15);" />
      </div>

      <div class="form-group">
        <label for="imgURL">Ảnh:</label>
        <Field name="imgURL" type="text" class="form-control" v-model="userLocal.imgURL" required />
        <ErrorMessage name="imgURL" class="error-feedback" style="color: rgb(238, 15, 15);" />
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-primary">
          Thêm Dữ Liệu
        </button>
      </div>
    </Form>

    <router-link :to="{ name: 'admin-user' }">
      <button class="exit-button">Thoát</button>
    </router-link>
  </div>
</template>
  
<script>
import { ErrorMessage, Field, Form } from "vee-validate";
import * as yup from "yup";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:user"],
  data() {
    const userFormSchema = yup.object().shape({
      name: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
      email: yup
        .string()
        .required("Email phải có giá trị.")
        .email("E-mail không đúng.")
        .max(50, "E-mail tối đa 50 ký tự."),
      address: yup
        .string()
        .required("Địa chỉ không được để trống."),
      phoneNumber: yup
        .string()
        .required("Số điện thoại không được để trống."),
      password: yup
        .string()
        .required("Mật khẩu phải có giá trị.")
        .min(5, "Mật khẩu phải ít nhất 5 ký tự.")
        .max(10, "Mật khẩu có nhiều nhất 10 ký tự."),

      role: yup
        .string()
        .required("Số lượng sản phẩm không được để trống."),

      imgURL: yup.string().required("Vui lòng chọn một ảnh."),
    });
    return {
      userLocal: {
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        password: "",
        role: "",
        imgURL: "",
      },
      userFormSchema,

    };
  },
  methods: {
    submitUser() {
      this.$emit("submit:user", this.userLocal);
      // Handle form submission here
    },
  },
};
</script>
  
<style scoped>
/* Improved styling */
h1 {
  font-size: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-control-file {
  font-size: 16px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.btn:hover {
  background-color: #0056b3;
}

.exit-button {
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-right: 20px;
  cursor: pointer;
  float: right;
  position: relative;
  top: -70px;
}
</style>
  