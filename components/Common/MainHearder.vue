<template>
  <div class="m-0 main-header-right row">
    <div class="main-header-left">
      <div class="logo-wrapper">
        <NuxtLink to="/"
          ><img
            style="width: 102px"
            class="img-fluid"
            src="@/assets/images/logo/logo-vroom-black.png"
            alt=""
        /></NuxtLink>
      </div>
      <div class="dark-logo-wrapper">
        <NuxtLink to="/"
          ><img
            style="width: 102px"
            class="img-fluid"
            src="@/assets/images/logo/logo-vroom-light.png"
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
        <li>
          <a class="text-dark" v-on:click="toggleFullScreen" href="#!"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-maximize"
            >
              <path
                d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
              ></path></svg
          ></a>
        </li>
        <li class="onhover-dropdown">
          <div class="bookmark-box">
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
              class="feather feather-star"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              ></polygon>
            </svg>
          </div>
          <div class="bookmark-dropdown onhover-show-div">
            <div class="mb-0 form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><i class="fa fa-search"></i
                  ></span>
                </div>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Search for bookmark..."
                />
              </div>
            </div>
            <ul class="m-t-5">
              <li class="add-to-bookmark">
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
                  class="feather feather-inbox bookmark-icon"
                >
                  <polyline
                    points="22 12 16 12 14 15 10 15 8 12 2 12"
                  ></polyline>
                  <path
                    d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                  ></path></svg
                >Email<span class="pull-right"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-star"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon></svg
                ></span>
              </li>
              <li class="add-to-bookmark">
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
                  class="feather feather-message-square bookmark-icon"
                >
                  <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                  ></path></svg
                >Chat<span class="pull-right"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-star"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon></svg
                ></span>
              </li>
              <li class="add-to-bookmark">
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
                  class="feather feather-command bookmark-icon"
                >
                  <path
                    d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                  ></path></svg
                >Feather Icon<span class="pull-right"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-star"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon></svg
                ></span>
              </li>
              <li class="add-to-bookmark">
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
                  class="feather feather-airplay bookmark-icon"
                >
                  <path
                    d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
                  ></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon></svg
                >Widgets<span class="pull-right"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-star"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon></svg
                ></span>
              </li>
            </ul>
          </div>
        </li>
        <li class="onhover-dropdown">
          <div class="notification-box">
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
              class="feather feather-bell"
            >
              <path
                d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"
              ></path></svg
            ><span class="dot-animated"></span>
          </div>
          <ul class="notification-dropdown onhover-show-div">
            <li>
              <p class="mb-0 f-w-700">
                Vous avez 3 Notifications<span
                  class="pull-right badge badge-primary badge-pill"
                  >4</span
                >
              </p>
            </li>
            <li class="noti-primary">
              <div class="media">
                <span class="notification-bg bg-light-primary"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-activity"
                  >
                    <polyline
                      points="22 12 18 12 15 21 9 3 6 12 2 12"
                    ></polyline></svg
                ></span>
                <div class="media-body">
                  <p>Delivery processing</p>
                  <span>Il y a 10 min</span>
                </div>
              </div>
            </li>
            <li class="noti-secondary">
              <div class="media">
                <span class="notification-bg bg-light-secondary"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline></svg
                ></span>
                <div class="media-body">
                  <p>Order Complete</p>
                  <span>I y a 1h</span>
                </div>
              </div>
            </li>
            <li class="noti-success">
              <div class="media">
                <span class="notification-bg bg-light-success"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-file-text"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    ></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline></svg
                ></span>
                <div class="media-body">
                  <p>Tickets Generated</p>
                  <span>Il y a 3h</span>
                </div>
              </div>
            </li>
            <li class="noti-danger">
              <div class="media">
                <span class="notification-bg bg-light-danger"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user-check"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <polyline points="17 11 19 13 23 9"></polyline></svg
                ></span>
                <div class="media-body">
                  <p>Delivery Complete</p>
                  <span>Il y a 6h</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div class="mode"><i class="fa fa-moon-o"></i></div>
        </li>
        <li class="onhover-dropdown">
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
            class="feather feather-message-square"
          >
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            ></path>
          </svg>
          <ul class="chat-dropdown onhover-show-div">
            <li>
              <div class="media">
                <img
                  class="img-fluid rounded-circle me-3"
                  src="@/assets/images/user/4.jpg"
                  alt=""
                />
                <div class="media-body">
                  <span>Ain Chavez</span>
                  <p class="f-12 light-font">Lorem Ipsum is simply dummy...</p>
                </div>
                <p class="f-12">Il y a 32 min</p>
              </div>
            </li>
            <li>
              <div class="media">
                <img
                  class="img-fluid rounded-circle me-3"
                  src="@/assets/images/user/1.jpg"
                  alt=""
                />
                <div class="media-body">
                  <span>Erica Hughes</span>
                  <p class="f-12 light-font">Lorem Ipsum is simply dummy...</p>
                </div>
                <p class="f-12">Il y a 58 min</p>
              </div>
            </li>
            <li>
              <div class="media">
                <img
                  class="img-fluid rounded-circle me-3"
                  src="@/assets/images/user/2.jpg"
                  alt=""
                />
                <div class="media-body">
                  <span>Kori Thomas</span>
                  <p class="f-12 light-font">Lorem Ipsum is simply dummy...</p>
                </div>
                <p class="f-12">Il y a 1h</p>
              </div>
            </li>
            <li class="text-center">
              <a class="f-w-700" href="javascript:void(0)">Voir tout</a>
            </li>
          </ul>
        </li>
        <li class="p-0 onhover-dropdown">
          <t-button tagName="a" href="login_two.html" variant="primary" class="w-full py-3 btn btn-primary-light">
            <span class="flex text-white"><svg
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
                <line x1="21" y1="12" x2="9" y2="12"></line></svg
              > Se deconnecter</span>
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
