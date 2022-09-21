<template>
  <section class="nav_bar_container">
    <nav class="nav_bar">
      <div class="nav-logo-container">
        <router-link to="/">
          <img src="../../assets/media/logo/logo.svg" alt="" />
        </router-link>
      </div>
      <NavRoutes />
      <NavRoutesSmall />
      <NavBtns />
      <button class="nav_links_small_btn" @click="showNavLinksSmall">
        <i class="fa fa-bars"></i>
      </button>
    </nav>
  </section>
</template>

<script>
import NavRoutes from "./NavRoutes.vue";
import NavRoutesSmall from "./NavRoutesSmall.vue";
import NavBtns from "./NavBtns.vue";
export default {
  components: { NavRoutes, NavBtns, NavRoutesSmall },
  methods: {
    // start ::show small links
    showNavLinksSmall() {
      document
        .querySelector(".nav_links_small")
        .classList.add("show_links_small");
      document.body.style.overflowY = "hidden";
    },
    // end ::show small links
  },
};
</script>
