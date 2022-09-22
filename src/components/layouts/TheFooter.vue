<template>
  <section class="the_footer_section">
    <div class="the_footer_container">
      <article class="the_footer_header">
        <div class="the_footer_header_logo_container">
          <img src="../../assets/media/logo/logo_dark.svg" alt="" />
        </div>
        <p class="the_footer_header_info">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص
        </p>
      </article>
      <article class="the_footer_links">
        <div class="main_links">
          <h2>{{ $t("FOOTER.mainDeparts") }}</h2>
          <router-link to="/">{{ $t("FOOTER.help") }}</router-link>
          <router-link to="/">{{ $t("FOOTER.commonQuestion") }}</router-link>
          <router-link to="/">{{ $t("FOOTER.privacyPolciy") }}</router-link>
          <router-link to="/">{{ $t("FOOTER.termAndConditions") }}</router-link>
          <router-link to="/">{{ $t("FOOTER.useInstruction") }}</router-link>
        </div>
        <div class="important_links">
          <h2>{{ $t("FOOTER.importantLinks") }}</h2>
          <router-link to="/">{{ $t("FOOTER.mainPage") }}</router-link>
          <router-link to="/packages">{{ $t("FOOTER.packages") }}</router-link>
          <router-link to="/aboutUs">{{ $t("FOOTER.aboutUs") }}</router-link>
          <router-link to="/offers">{{ $t("FOOTER.offers") }}</router-link>
          <router-link to="/contactUs">{{
            $t("FOOTER.contactUs")
          }}</router-link>
        </div>
      </article>
      <article class="the_footer_android">
        <h3 class="the_footer_android_title">
          {{ $t("FOOTER.downloadAndroid") }}
        </h3>
        <div class="the_footer_andrroid_body">
          <div class="the_footer_andrroid_body_info">
            <h3>
              {{ $t("FOOTER.getYourOffer") }} <br />{{
                $t("FOOTER.onlyOnOurApp")
              }}
            </h3>
            <div>
              <a href="#" target="_blanck"
                ><img src="../../assets/media/footer/appStore.svg" alt=""
              /></a>
              <a href="#" target="_blanck"
                ><img src="../../assets/media/footer/googlePlay.svg" alt=""
              /></a>
            </div>
          </div>
          <div class="footer_body_image_container">
            <img src="../../assets/media/footer/phone.svg" alt="" />
          </div>
        </div>
      </article>
    </div>
    <p class="the_footer_copyright">©2021 Shop. All Rights Reserved</p>
  </section>
</template>
