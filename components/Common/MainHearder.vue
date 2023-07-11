<template>
  <div class="m-0 main-header-right row">
    <div class="main-header-left">
      <div class="logo-wrapper">
        <NuxtLink to="/"
          ><img
            style="width: 50px"
            class="img-fluid"
            src="@/assets/images/logo/challengemt4.png"
            alt=""
        /></NuxtLink>
      </div>
      <div class="dark-logo-wrapper">
        <NuxtLink to="/"
          ><img
            style="width: 50px"
            class="img-fluid"
            src="@/assets/images/logo/challengemt4.png"
            alt=""
        /></NuxtLink>
      </div>
      <div class="toggle-sidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-align-center status_toggle middle"
          id="sidebar-toggle"
        >
          <path
            fill=""
            fill-rule="evenodd"
            d="M0 13v-.91h16V13H0zm0-5.455h16v.908H0v-.908zM0 3h16v.909H0V3z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div class="left-menu-header col">
      <ul>
        <li>
          <form class="form-inline search-form">
            <div class="search-bg">
              <i class="fa fa-search"></i>
              <input
                class="form-control-plaintext"
                placeholder="Search here....."
              />
            </div>
          </form>
          <span class="d-sm-none mobile-search search-bg"
            ><i class="fa fa-search"></i
          ></span>
        </li>
      </ul>
    </div>
    <div class="p-0 nav-right col pull-right right-menu">
      <ul class="nav-menus">
        <li class="p-0 onhover-dropdown">
          <t-button
            tagName="a"
            href="login_two.html"
            variant="primary"
            class="w-full py-3 btn btn-primary-light"
          >
            <span class="flex text-white"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-log-out"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Se deconnecter</span
            >
          </t-button>
        </li>
      </ul>
    </div>
    <div class="w-auto d-lg-none mobile-toggle pull-right">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-more-horizontal"
      >
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="19" cy="12" r="1"></circle>
        <circle cx="5" cy="12" r="1"></circle>
      </svg>
    </div>
  </div>
</template>

// @click=LOGOUT

<script>
import toggleFullScreen from "@/assets/js/fullscreen";
import { mapActions } from "vuex";
export default {
  name: "MainHearder",
  methods: {
    ...mapActions(["LOGOUT"]),
    toggleFullScreen: function (e) {
      e.preventDefault();
      toggleFullScreen();
    },
  },
};
</script>
