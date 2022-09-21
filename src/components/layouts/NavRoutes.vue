<template>
  <ul class="nav_links">
    <li v-for="route in routes" :key="route.id" class="nav_link">
      <router-link :to="route.path">{{ route.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { id: 1, path: "/", name: this.$t("NAVBAR.home") },
        { id: 2, path: "/aboutus", name: this.$t("NAVBAR.aboutUs") },
        { id: 3, path: "/offers", name: this.$t("NAVBAR.offers") },
        { id: 4, path: "/packages", name: this.$t("NAVBAR.packages") },
        { id: 5, path: "/contactus", name: this.$t("NAVBAR.contactUs") },
        {
          id: 6,
          path: "/addAdvertisement",
          name: this.$t("NAVBAR.addAdvertisement"),
        },
      ],
    };
  },
};
</script>
