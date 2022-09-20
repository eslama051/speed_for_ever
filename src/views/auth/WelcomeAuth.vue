<template>
  <section class="welcome_auth">
    <h2 class="welcome_auth_title">{{ $t("TITLES.welcome") }}</h2>
    <p class="welcome_auth_subtitle light_gray">
      {{ $t("TITLES.welcomeSubtitle") }}
    </p>
    <base-button to="/auth/register" :link="true">{{
      $t("BUTTONS.register")
    }}</base-button>
    <div>
      <router-link to="/">{{ $t("BUTTONS.guest") }}</router-link>
    </div>
    <div class="welcome_auth_footer">
      <span class="light_gray">{{ $t("TITLES.haveAnAccount") }}</span>
      <router-link to="/auth/login">{{ $t("BUTTONS.login") }}</router-link>
    </div>
  </section>
</template>
