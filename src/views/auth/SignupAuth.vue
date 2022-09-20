<template>
  <section class="register_section">
    <v-form class="register_form">
      <h2>{{ $t("TITLES.welcome") }}</h2>
      <p class="light_gray">{{ $t("TITLES.registerSubtitle") }}</p>

      <v-text-field :label="$t('TITLES.userName')"></v-text-field>
      <v-text-field :label="$t('TITLES.email')" />

      <v-text-field :label="$t('TITLES.phoneNumber')" />

      <v-text-field
        :type="showPassword ? 'text' : 'password'"
        :label="$t('TITLES.password')"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      />
      <v-text-field type="password" :label="$t('TITLES.confirmPassword')" />
      <div class="terms_and_coniditions">
        <input type="checkbox" />
        <label for="">اوافق على الشروط و الأحكام</label>
      </div>
      <div>
        <base-button>{{ $t("BUTTONS.register") }}</base-button>
      </div>
      <div>
        <span class="light_gray">{{ $t("TITLES.haveAnAccount") }}</span>
        <router-link to="/auth/login">{{ $t("BUTTONS.login") }}</router-link>
      </div>
    </v-form>
  </section>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
  components: { BaseButton },
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
