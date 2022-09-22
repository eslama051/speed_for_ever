<template>
  <article class="product_card">
    <div class="product_card_img_container">
      <img src="../../assets/media/products/image.jpeg" alt="" />
    </div>
    <h3>{{ item.name }}</h3>
    <h4 class="light_gray">{{ item.type }}</h4>
    <div class="product_card_footer">
      <h4>
        <span>{{ item.price }}</span> ر.س
      </h4>
      <div class="product_card_action_btns">
        <div @click="toggleShareGroup" class="product_card_share_btn">
          <img src="../../assets/media/icons/share.png" alt="" />
          <transition name="fide">
            <span v-if="showShareGroup" class="product_card_share_group">
              <a href="#" target="_blank" class="twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" class="facebook">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#" target="_blank" class="whatsapp">
                <i class="fab fa-whatsapp"></i>
              </a>
            </span>
          </transition>
        </div>
        <div @click="toggleProductFav" class="product_card_like_btn">
          <img
            class="product-before_like"
            src="../../assets/media/icons/wishlist.png"
            alt=""
          />
          <img
            class="prodcut_after_like"
            src="../../assets/media/icons/redHeart.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      showShareGroup: false,
    };
  },
  props: ["item"],
  methods: {
    toggleProductFav(e) {
      e.target.parentElement.classList.toggle("heart");
    },
    toggleShareGroup() {
      this.showShareGroup = !this.showShareGroup;
    },
  },
};
</script>
