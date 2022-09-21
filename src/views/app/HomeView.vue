<template>
  <section class="home_section">
    <HeroContainer />
    <AboutContainer />
    <CategoriesContainer />
  </section>
</template>

<script>
import HeroContainer from "../../components/home/HeroContainer.vue";
import AboutContainer from "../../components/home/AboutContainer.vue";
import CategoriesContainer from "../../components/home/CategoriesContainer.vue";
export default {
  components: { HeroContainer, AboutContainer, CategoriesContainer },
};
</script>
