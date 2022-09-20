<template>
  <section class="new_password_section">
    <v-form class="new_password_form">
      <h2>{{ $t("TITLES.newPassword") }}</h2>
      <p class="light_gray">{{ $t("TITLES.newPasswordSubtitle") }}</p>
      <v-text-field
        :type="showPassword ? 'text' : 'password'"
        :label="$t('TITLES.newPassword')"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      />
      <v-text-field type="password" :label="$t('TITLES.confirmNewPassword')" />
      <base-button class="mt-8">{{ $t("BUTTONS.send") }}</base-button>
    </v-form>
  </section>
</template>
