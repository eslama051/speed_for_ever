<template>
  <section class="app_wrapper">
    <TheNavbar />
    <router-view></router-view>
  </section>
</template>

<script>
import TheNavbar from "../../components/layouts/TheNavbar.vue";
export default {
  components: { TheNavbar },
};
</script>
