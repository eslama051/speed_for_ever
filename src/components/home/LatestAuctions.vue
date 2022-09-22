<template>
  <section class="latest_auctions_section">
    <div class="container">
      <h2 class="text-center">{{ $t("TITLES.latestAuctions") }}</h2>
      <ProductSlider :items="items" />
      <div class="text-center mt-5" v-if="items.length > 0">
        <router-link to="/" class="latest_auctions_btn"
          >{{ $t("BUTTONS.showAll") }}
          <img src="../../assets/media/icons/arrow_left.svg" alt=""
        /></router-link>
      </div>
    </div>
  </section>
</template>
<script>
import ProductSlider from "../products/ProductSilder.vue";
export default {
  data() {
    return {
      items: [
        { id: 1, name: "تيشيرت صيفي", type: "بيت الأزياء", price: "200" },
        { id: 2, name: "تيشيرت صيفي", type: "بيت الأزياء", price: "200" },
        { id: 3, name: "تيشيرت صيفي", type: "بيت الأزياء", price: "200" },
        { id: 4, name: "تيشيرت صيفي", type: "بيت الأزياء", price: "200" },
        { id: 5, name: "تيشيرت صيفي", type: "بيت الأزياء", price: "200" },
      ],
    };
  },
  components: { ProductSlider },
};
</script>
