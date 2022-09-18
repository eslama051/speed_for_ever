import Vue from "vue";
import VueRouter from "vue-router";

//authentication components
import AuthenticationPage from "../pages/AuthenticationPage.vue";
import WelcomeAuth from "../components/authentication/WelcomeAuth.vue";
import LoginAuth from "../components/authentication/LoginAuth.vue";
import SignupAuth from "../components/authentication/SignupAuth.vue";
//end of authentication components

Vue.use(VueRouter);

const routes = [
  { path: "/", component: null },
  {
    path: "/auth",
    component: AuthenticationPage,
    children: [
      { path: "", component: WelcomeAuth },
      { path: "login", component: LoginAuth },
      { path: "SignupAuth", component: SignupAuth },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
