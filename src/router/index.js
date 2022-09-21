import Vue from "vue";
import VueRouter from "vue-router";

//start:: App wrapper
import AppWrapper from "../views/app/AppWrapper.vue";
import HomeView from "../views/app/HomeView.vue";
//end:: App wrapper

//authentication components
import AuthenticationWrapper from "../views/auth/AuthenticationWrapper.vue";
import WelcomeAuth from "../views/auth/WelcomeAuth.vue";
import LoginAuth from "../views/auth/LoginAuth.vue";
import SignupAuth from "../views/auth/SignupAuth.vue";
import AccountActivate from "../views/auth/AccountActivate.vue";
import AccountVerify from "../views/auth/AccountVerify.vue";
import NumberVerify from "../views/auth/NumberVerify.vue";
import NewPassword from "../views/auth/NewPassword.vue";
//end of authentication components

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: AppWrapper,
    children: [
      { path: "", component: HomeView },
      { path: "aboutus", component: null },
      { path: "offers", component: null },
      { path: "packages", component: null },
      { path: "contactus", component: null },
      { path: "addAdvertisement", component: null },
    ],
  },
  {
    path: "/auth",
    component: AuthenticationWrapper,
    children: [
      { path: "", component: WelcomeAuth },
      { path: "login", component: LoginAuth },
      { path: "register", component: SignupAuth },
      { path: "account/activate", component: AccountActivate },
      { path: "account/verify", component: AccountVerify },
      { path: "number/verify", component: NumberVerify },
      { path: "new/password", component: NewPassword },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
