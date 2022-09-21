<template>
  <section class="categories_home_section">
    <div class="container categories_home_container">
      <article class="categories_home_item" v-for="item in cate" :key="item.id">
        <div class="categories_home_item_img_container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCOMUy2yraqtX914uSr6r2owJ3C48jFysRQ&usqp=CAU"
            alt=""
          />
        </div>
        <h4>{{ item.name }}</h4>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cate: [
        { id: 1, name: "الإتصالات وملحقاتها" },
        { id: 2, name: "الإتصالات وملحقاتها" },
        { id: 3, name: "الإتصالات وملحقاتها" },
        { id: 4, name: "الإتصالات وملحقاتها" },
        { id: 5, name: "الإتصالات وملحقاتها" },
      ],
    };
  },
};
</script>
