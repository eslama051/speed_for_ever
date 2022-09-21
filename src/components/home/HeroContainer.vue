<template>
  <section class="hero_container">
    <owl-carousel
      class="slider-wrapper"
      :autoplay="true"
      :nav="false"
      :dots="true"
      :items="1"
      :mouseDrag="true"
    >
      <div class="item">
        <div class="slider-img-wrapper">
          <img
            class="slider_image"
            src="../../assets/media/home/bck2.png"
            alt=""
          />
        </div>
        <div class="slider-content-wrapper">
          <h1>header</h1>
        </div>
      </div>
      <div class="item">
        <div class="slider-img-wrapper">
          <img
            class="slider_image"
            src="../../assets/media/home/bck2.png"
            alt=""
          />
        </div>
        <div class="slider-content-wrapper">
          <h1>header</h1>
        </div>
      </div>
    </owl-carousel>
    <div class="social-media-wrapper">
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
    </div>
  </section>
</template>
<script>
import OwlCarousel from "vue-owl-carousel2";

export default {
  data() {
    return {};
  },
  components: { OwlCarousel },
};
</script>
