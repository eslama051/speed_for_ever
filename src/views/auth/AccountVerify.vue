<template>
  <section class="account_verify_section">
    <v-form class="account_verify_from">
      <h2>{{ $t("TITLES.veirfyTitle") }}</h2>
      <p class="light_gray">{{ $t("TITLES.verifySubtitle") }}</p>
      <v-text-field :label="$t('TITLES.phoneNumber')" />
      <base-button>{{ $t("BUTTONS.send") }}</base-button>
    </v-form>
  </section>
</template>
