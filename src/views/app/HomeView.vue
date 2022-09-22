<template>
  <section class="home_section">
    <HeroContainer />
    <AboutContainer />
    <CategoriesContainer />
    <LatestAuctions />
    <ADBanner />
    <LatestAdditions />
  </section>
</template>

<script>
import HeroContainer from "../../components/home/HeroContainer.vue";
import AboutContainer from "../../components/home/AboutContainer.vue";
import CategoriesContainer from "../../components/home/CategoriesContainer.vue";
import LatestAuctions from "../../components/home/LatestAuctions.vue";
import ADBanner from "../../components/home/ADBanner.vue";
import LatestAdditions from "../../components/home/LatestAdditions.vue";

export default {
  components: {
    HeroContainer,
    AboutContainer,
    CategoriesContainer,
    LatestAuctions,
    ADBanner,
    LatestAdditions,
  },
};
</script>
