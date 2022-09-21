<template>
  <section class="about_home_section">
    <div class="container about_home_container">
      <div class="about_home_info">
        <h2>{{ $t("TITLES.aboutUs") }}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          dicta ea, non laudantium mollitia omnis debitis, harum quia facilis
          praesentium distinctio! Labore officiis nesciunt natus necessitatibus
          magnam eos dolore nostrum.
        </p>
        <router-link to="/aboutus">{{ $t("TITLES.readMore") }}</router-link>
      </div>
      <div class="about_home_img">
        <img src="../../assets/media/home/about.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
