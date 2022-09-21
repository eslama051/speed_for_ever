<template>
  <ul class="nav_btns">
    <li class="nav_btn auth_btn">
      <router-link to="/auth">{{ $t("NAVBAR.login") }}</router-link>
    </li>
    <li class="nav_btn search_btn">
      <img src="../../assets/media/icons/search.svg" alt="" />
      <span>{{ $t("NAVBAR.search") }}</span>
    </li>
    <li class="nav_btn chat_btn">
      <router-link to="/chat">
        <img src="../../assets/media/icons/Chat.svg" alt="" />
      </router-link>
      <span>{{ $t("NAVBAR.chat") }}</span>
    </li>
    <li class="nav_btn wishlist_btn">
      <img src="../../assets/media/icons/wish.svg" alt="" />
      <span>{{ $t("NAVBAR.favourite") }}</span>
    </li>
    <li class="nav_btn profile_btn">
      <img src="../../assets/media/icons/user.svg" alt="" />
      <span>{{ $t("NAVBAR.profile") }}</span>
    </li>
  </ul>
</template>
