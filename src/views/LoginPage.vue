<style>
@import "@/assets/css/formLogin.css";
</style>
<template>
  <div class="limiter">
    <div class="container-login">
      <div class="wrap-login slide">
        <div class="login-pic" data-tilt>
          <img src="@/assets/images/img-login.jpg" alt="IMG">
        </div>

        <form action="#" id="signupForm" method="POST" class="login-form validate-form">
          <strong class="login-form-title">
            Member Login
          </strong>

          <div class="wrap-input">
            <input class="input" type="text" name="username" placeholder="Enter your username or email">
            <span class="focus-input"></span>
            <span class="symbol-input">
              <i class="fa-solid fa-user" aria-hidden="true"></i>
            </span>
          </div>

          <div class="wrap-input">
            <input class="input" type="password" name="password" placeholder="Enter your password">
            <span class="focus-input"></span>
            <span class="symbol-input">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>

          <div class="container-login-form-btn">
            <button class="login-form-btn">
              Login
            </button>
          </div>

          <div class="text-center login-signup">
            <a class="txt" href="/SignUpPage">
              Create your Account
              <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
