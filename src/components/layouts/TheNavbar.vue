<template>
  <section class="nav_bar_container" id="nav_bar_container">
    <nav class="nav_bar">
      <div class="nav-logo-container">
        <router-link to="/">
          <img src="../../assets/media/logo/logo.svg" alt="" />
        </router-link>
      </div>
      <NavRoutes />
      <NavRoutesSmall />
      <NavBtns />
      <NavBtnsSmall />

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
import NavBtnsSmall from "./NavBtnsSmall.vue";
export default {
  components: { NavRoutes, NavBtns, NavRoutesSmall, NavBtnsSmall },
  methods: {
    // start ::show small links
    showNavLinksSmall() {
      document
        .querySelector(".nav_links_small")
        .classList.add("show_links_small");
      document.body.style.overflowY = "hidden";
    },
    // end ::show small links

    // start :: toggle nav position
    toggleNavFix() {
      document.addEventListener("scroll", () => {
        let Yposition = window.scrollY;
        if (Yposition >= 78) {
          document
            .getElementById("nav_bar_container")
            .classList.add("fixed_nav");
        } else {
          document
            .getElementById("nav_bar_container")
            .classList.remove("fixed_nav");
        }
      });
    },
    // end :: toggle nav position
  },

  mounted() {
    this.toggleNavFix();
  },
};
</script>
