<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({}),
  methods: {},
  mounted() {
    document.body.dir = "rtl";
  },
};
</script>
