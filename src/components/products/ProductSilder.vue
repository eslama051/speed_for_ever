<template>
  <section class="product_slider_container">
    <owl-carousel
      v-if="items.length > 0"
      dir="ltr"
      :margin="20"
      :autoplay="true"
      :dots="false"
      :items="4"
      :loop="false"
      :responsive="{
        0: {
          items: 1,
          nav: false,
        },
        400: {
          items: 2,
          nav: false,
        },
        750: {
          items: 3,
          nav: false,
        },
        900: {
          items: 4,
        },
      }"
      responsiveBaseElement=".product_slider_container"
    >
      <ProductCard
        class="item"
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </owl-carousel>
    <div class="no_products_container" v-else>
      <img src="../../assets/media/empty_messages/emptyBox.svg" alt="" />
      <h3>no products</h3>
    </div>
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  components: { ProductCard },
  props: ["items"],
};
</script>
