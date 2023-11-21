import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",

    component: () => import("@/layouts/Base.vue"),

    children: [
      {
        path: "",
        name: "trangchu",
        component: () => import("@/views/Homepage.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
      },

      {
        path: "/products",
        name: "products",
        component: () => import("@/views/Products.vue"),
      },
      {
        path: "/product/:id",
        name: "product",
        component: () => import("@/views/Product.vue"),
        props: true,
      },

      {
        path: "/login",
        name: "login",
        component: () => import("@/views/Auth/Login.vue"),
      },
      {
        path: "/signup",
        name: "signup",
        component: () => import("@/views/Auth/SignUp.vue"),
      },
      {
        path: "/events",
        name: "events", //name: "events/:id",
        component: () => import("@/views/Event.vue"),
      },
      {
        path: "/psuccess",
        name: "psuccess",
        component: () => import("@/views/Psuccess.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/layouts/Admin.vue"),
    children: [
      {
        path: "",
        name: "awelcome",
        component: () => import("@/views/Admin/AWelcome.vue"),
      },
      {
        path: "user",
        name: "admin-user",
        component: () => import("@/views/Admin/Manage_Users/User.vue"),
      },

      {
        path: "product",
        name: "admin-product",
        component: () => import("@/views/Admin/Manage_Products/Manage_product_view.vue"),
      },
      {
        path: "add-product",
        name: "add-product",
        component: () => import("@/views/Admin/Manage_Products/add_product.vue"),
      },
      {
        path: "edit-product/:id",
        name: "edit-product",
        component: () => import("@/views/Admin/Manage_Products/edit_product.vue"),
        props: true, 
      },
      {
        path: "order",
        name: "admin-order",
        component: () => import("@/views/Admin/Manage_Orders/Orders.vue"),
      },
    ],
  },
 
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
