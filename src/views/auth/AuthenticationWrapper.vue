<template>
  <div class="authentication_wrapper">
    <div class="auth_bg_img_container">
      <img src="../../assets/media/auth/auth_bg.png" alt="" />
    </div>
    <div class="authentication_container">
      <div class="logo_container">
        <img src="../../assets/media/logo/logo.svg" alt="" />
      </div>
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {};
</script>
