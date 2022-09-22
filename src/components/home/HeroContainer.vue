<template>
  <section class="hero_container">
    <owl-carousel
      dir="ltr"
      class="slider-wrapper"
      :autoplay="true"
      :nav="false"
      :dots="true"
      :items="1"
      :mouseDrag="true"
    >
      <div class="item" v-for="item in [{ id: 1 }, { id: 2 }]" :key="item.id">
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
      <!-- <div class="item">
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
      </div> -->
    </owl-carousel>
    <div class="social-media-wrapper">
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
