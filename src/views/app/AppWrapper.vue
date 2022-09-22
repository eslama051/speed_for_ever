<template>
  <section class="app_wrapper">
    <TheNavbar />
    <router-view></router-view>
    <TheFooter />
  </section>
</template>

<script>
import TheNavbar from "../../components/layouts/TheNavBar.vue";
import TheFooter from "../../components/layouts/TheFooter.vue";
export default {
  components: { TheNavbar, TheFooter },
};
</script>
