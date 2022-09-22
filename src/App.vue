<template>
  <div>
    <transition name="fide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
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
