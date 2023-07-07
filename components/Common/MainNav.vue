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
              <NuxtLink to="/" class="nav-link menu-title"
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
              <NuxtLink class="nav-link menu-title" to="/courses">
                <svg
                  version="1.1"
                  id="Calque_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  style="enable-background: new 0 0 24 24"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M23.3,6.1c0,0.4-0.3,0.7-0.7,0.7H1.4C1,6.8,0.7,6.5,0.7,6.1S1,5.4,1.4,5.4h21.3C23,5.4,23.3,5.7,23.3,6.1z"
                    />
                  </g>
                  <g>
                    <path
                      d="M22.4,12.6h-4.2c-0.3,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6h4.2c0.3,0,0.6,0.3,0.6,0.6S22.8,12.6,22.4,12.6z M14,12.6H9.8
		c-0.3,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6H14c0.3,0,0.6,0.3,0.6,0.6S14.4,12.6,14,12.6z M5.6,12.6H1.4c-0.3,0-0.6-0.3-0.6-0.6
		s0.3-0.6,0.6-0.6h4.2c0.3,0,0.6,0.3,0.6,0.6S5.9,12.6,5.6,12.6z"
                    />
                  </g>
                  <g>
                    <path
                      d="M22.6,18.6H1.4c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7h21.3c0.4,0,0.7,0.3,0.7,0.7S23,18.6,22.6,18.6z"
                    />
                  </g>
                </svg>
                <span>Courses</span>
                <div class="according-menu">
                  <i class="fa fa-angle-down"></i></div
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
                <span>Parents</span>
                <div class="according-menu">
                  <i class="fa fa-angle-down"></i></div
              ></NuxtLink>
            </li>
            <li class="dropdown">
              <NuxtLink class="nav-link menu-title" to="/drivers">
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
                  class="feather feather-file"
                >
                  <path
                    d="M12.5 20.9s-3-.2-4-.3c-3.3-.2-3.6-.5-4.2-4-.3-1.6-.9-6.2-.9-6.2-.2-1.4 1.8-1.7 2-.3 0 0 .6 4.4.8 5.9.3 2 .6 2.3 2.6 2.5l3.7.2c1.5.1 1.4 2.3 0 2.2zm3.2-6.1c-.3-.4-.8-.7-1.4-.7-.6-.1-1.2-.1-1.8-.2-.4 0-.8-.1-1.2-.1h-.4l-.5-2.3v-.2l.5.2c.2.1.5.2.8.2l3.6-.3c.8-.1 1.3-.8 1.3-1.5-.1-.8-.8-1.3-1.5-1.3l-3.2.3-2.8-2c-.1-.1-.2-.2-.4-.2-.3-.2-.7-.3-1.1-.2-.5.1-.8.3-1.1.7-.1.1-.2.2-.3.4-.1.3-.1.7-.1 1.1.1.6.2 1.2.4 1.8.2.8.3 1.6.5 2.4 0 0 .4 2.9.8 3.6 0 0 0 .1.1.1.4.5.8.9 1.5.9l4.7.2 2.8 4.8c.3.3.6.4 1 .4s.7-.1 1-.4c.6-.5.6-1.4.1-2-.1.1-3.3-5.7-3.3-5.7zm4.8-7.1c-.2-.2-.5-.2-.7 0l-5.1 4.7c-.2.2-.2.5 0 .7.1.1.2.2.4.2.1 0 .3 0 .4-.1l5.1-4.7c.1-.2.1-.5-.1-.8zM6.9 5.9c1.3 0 2.4-1.1 2.4-2.4C9.3 2.1 8.2 1 6.9 1S4.4 2.1 4.4 3.5c0 1.3 1.1 2.4 2.5 2.4z"
                  />
                </svg>
                <span>Chauffeur</span>
                <div class="according-menu">
                  <i class="fa fa-angle-down"></i></div
              ></NuxtLink>
            </li>
            <li class="dropdown">
              <NuxtLink class="nav-link menu-title" to="/childrens">
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
                  class="feather feather-file"
                >
                  <path
                    d="M19 6.2c-.5-.7-1.5-.7-2.2-.2l-3 2.6c-.2.2-.5.3-.7.3H11c-.3 0-.5-.1-.7-.3L7.3 6c-.7-.5-1.7-.4-2.3.3-.5.6-.3 1.6.3 2.1l2.8 2.4c.1.1.2.3.2.4l.6 10.5c0 .7.5 1.2 1 1.2h3.6c.5 0 1-.5 1-1.2l.5-10c0-.2.1-.3.2-.4l3.3-2.9c.8-.5 1-1.5.5-2.2z"
                  />
                  <path
                    d="M11.8 7.8c.9 0 1.7-.3 2.4-1s1-1.5 1-2.4c0-.9-.3-1.7-1-2.4s-1.5-1-2.4-1-1.8.4-2.5 1c-.7.7-1 1.5-1 2.4 0 .9.3 1.7 1 2.4s1.5 1 2.5 1z"
                  />
                </svg>
                <span>Passager</span>
                <div class="according-menu">
                  <i class="fa fa-angle-down"></i></div
              ></NuxtLink>
            </li>
            <li class="dropdown">
              <NuxtLink class="nav-link menu-title" to="/accompagnateurs">
                <svg
                  version="1.1"
                  id="Calque_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0"
                  y="0"
                  viewBox="0 0 24 24"
                  xml:space="preserve"
                >
                  <path
                    d="M18.9 9.7c-.2-1.4-1.3-2.4-2.7-2.4h-1.5c-1.3 0-2.5 1-2.7 2.4l-.5 4.2c-.1.6.4 1.1.9 1.1h.7l.4 7.2c0 .5.4.9.9.9h2c.5 0 .9-.4.9-.9l.4-7.2h.8c.5 0 .9-.5.9-1l-.5-4.3z"
                  />
                  <path
                    d="M18.2 3.8c0 1.5-1.2 2.8-2.7 2.8-1.5 0-2.7-1.2-2.7-2.8C12.8 2.3 14 1 15.5 1c1.4 0 2.7 1.3 2.7 2.8"
                  />
                  <g>
                    <path
                      d="M11 12.6c-.4-.4-1-.5-1.4-.1l-1.3 1.2c-.1.1-.3.2-.5.2H6.5c-.8 0-1.5.6-1.6 1.4l-.2 1.4-.1 1.1c0 .2.1.4.2.5.1.1.2.1.3.1h.4l.2 4.2c.1.2.3.4.6.4H8.1c.4 0 .6-.3.7-.8l.2-4 .1-1.9v-.7c0-.1 0-.2.1-.3l1.5-1.3c.5-.4.6-1 .3-1.4z"
                    />
                    <path
                      d="M6.9 13c.5 0 .9-.2 1.3-.5.4-.4.5-.8.5-1.3s-.2-.9-.5-1.3c-.4-.3-.8-.5-1.3-.5s-.9.2-1.3.5c-.4.4-.5.8-.5 1.3s.2.9.5 1.3.8.5 1.3.5z"
                    />
                  </g>
                </svg>
                <span>Accompagnateurs</span>
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
