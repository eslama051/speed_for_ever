<template>
  <section class="account_activate_section">
    <v-form class="account_activate_form">
      <h2>{{ $t("TITLES.accountActivate") }}</h2>
      <p class="light_gray">{{ $t("TITLES.activateMessage") }}</p>
      <h3 class="account_activate_number"><span>+966 5478 965544</span></h3>
      <v-otp-input
        class="account_activate_otp"
        length="5"
        v-model="otp"
      ></v-otp-input>
      <p class="">{{ $t("TITLES.sendCodeAfter") }}</p>
      <p>1:50</p>
      <p class="resend_btn">{{ $t("BUTTONS.resendCode") }}</p>
      <base-button>{{ $t("BUTTONS.send") }}</base-button>
    </v-form>
  </section>
</template>
<script>
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      otp: "",
    };
  },
};
</script>
