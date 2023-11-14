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

				<form action="#" id="signupForm" method="POST" class="login-form validate-form" style="margin-top: -37px;">
					<strong class="login-form-title">
						Member Sign Up
					</strong>
					<div class="wrap-input">
						<input class="input" type="text" name="fullname" placeholder="Enter your name">
						<span class="focus-input"></span>
						<span class="symbol-input">
							<i class="fa-sharp fa-solid fa-user-secret" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input">
						<input class="input" type="text" name="username" placeholder="Enter your username">
						<span class="focus-input"></span>
						<span class="symbol-input">
							<i class="fa-solid fa-user" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input">
						<input class="input" type="text" name="email" placeholder="Enter your email">
						<span class="focus-input"></span>
						<span class="symbol-input">
							<i class="fa-solid fa-envelope"></i>
						</span>
					</div>

					<div class="wrap-input">
						<input class="input" type="password" name="password" id="password"
							placeholder="Enter your password">
						<span class="focus-input"></span>
						<span class="symbol-input">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input">
						<input class="input" type="password" id="confirm_password" name="confirm_password"
							placeholder="Enter the password">
						<span class="focus-input"></span>
						<span class="symbol-input">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>

					<div class="container-login-form-btn">
						<button class="login-form-btn">
							Sign Up
						</button>
					</div>
					<div class="text-center login-signup">
						<a class="txt" href="/LoginPage">
							Login
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
