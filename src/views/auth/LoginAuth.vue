<template>
  <section class="login_section">
    <form class="login_form">
      <h2>{{ $t("TITLES.loginTitle") }}</h2>
      <p class="light_gray">{{ $t("TITLES.loginSubtitle") }}</p>
      <v-text-field :label="$t('TITLES.userName')" />
      <v-text-field
        :type="showPassword ? 'text' : 'password'"
        :label="$t('TITLES.password')"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      />
      <router-link to="/auth/" class="red-text">{{
        $t("BUTTONS.forgotPassword")
      }}</router-link>
      <div>
        <base-button>{{ $t("BUTTONS.login") }}</base-button>
      </div>
      <div class="welcome_auth_footer">
        <span class="light_gray">{{ $t("TITLES.dontHaveAnAcc") }}</span>
        <router-link to="/auth/register">{{
          $t("BUTTONS.register")
        }}</router-link>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
