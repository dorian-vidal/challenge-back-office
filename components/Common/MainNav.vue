<template>
  <header class="main-nav">
    <nav>
      <div class="main-navbar">
        <div class="left-arrow disabled" id="left-arrow">
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
            class="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </div>
        <div id="mainnav">
          <ul class="nav-menu custom-scrollbar" style="display: block">
            <li class="back-btn">
              <div class="mobile-back text-end">
                <span>Back</span
                ><i class="fa fa-angle-right ps-2" aria-hidden="true"></i>
              </div>
            </li>
            <li class="sidebar-main-title">
              <div>
                <h6>General</h6>
              </div>
            </li>
            <li class="dropdown">
              <NuxtLink to="/dashboard" class="nav-link menu-title"
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
                  class="feather feather-home"
                >
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  ></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline></svg
                ><span>Dashboard</span>
                <div class="according-menu">
                  <i class="fa fa-angle-right"></i></div
              ></NuxtLink>
            </li>
            <li class="dropdown">
              <NuxtLink class="nav-link menu-title" to="/customers">
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
                  class="feather feather-mail"
                >
                  <path
                    d="M11.8 9.7c-.2-1.4-1.3-2.4-2.7-2.4H7.6c-1.3 0-2.5 1-2.7 2.4l-.5 4.2c-.1.6.4 1.1.9 1.1H6l.4 7.2c0 .5.4.9.9.9h2c.5 0 .9-.4.9-.9l.4-7.2h.8c.5 0 .9-.5.9-1l-.5-4.3zM11.1 3.8c0 1.5-1.2 2.8-2.7 2.8-1.5 0-2.7-1.2-2.7-2.8C5.6 2.3 6.8 1 8.4 1c1.5 0 2.7 1.3 2.7 2.8M19.5 16.1l-.4-3.2c-.1-1-1-1.8-2-1.8h-1.2c-1 0-1.9.8-2 1.8l-.4 3.2c0 .4.3.8.7.8h.5l.3 5.4c0 .4.3.6.7.6h1.6c.4 0 .7-.3.7-.6l.3-5.4h.6c.4 0 .7-.4.6-.8zM18.9 8c0 1.3-1 2.4-2.3 2.4-1.3 0-2.3-1.1-2.3-2.4 0-1.3 1-2.4 2.3-2.4 1.2.1 2.3 1.1 2.3 2.4"
                  />
                </svg>
                <span>Etudiants</span>
                <div class="according-menu">
                  <i class="fa fa-angle-down"></i></div
              ></NuxtLink>
            </li>
          </ul>
        </div>
        <div class="right-arrow" id="right-arrow">
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
            class="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MainNav",
};
</script>
