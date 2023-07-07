const webpack = require("webpack");

export default {
  target: "server",
  ssr: true,
  telemetry: false,
  mode: "universal",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "mt4challenge Back Office",
    htmlAttrs: {
      lang: "fr",
    },

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "mt4challenge" },
    ],

    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  babel: {
    babelrc: true,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // "~bootstrap/scss/bootstrap",
    "~/assets/styles/theme.scss",
    "~/assets/css/fontawesome.css",
    "~/assets/css/icofont.css",
    "~/assets/css/themify.css",
    "~/assets/css/feather-icon.css",
    "~/assets/css/chartist.css",
    "~/assets/css/animate.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" },
    { src: "~/plugins/tailwind-components.js" },
    { src: "~/plugins/eventHub.js", mode: "client" },
    { src: "~/plugins/html/observer.js", mode: "client" },
    { src: "~/plugins/html/device.js", mode: "client" },
    { src: "~/plugins/html/fixScroll.js", mode: "client" },
    "~/plugins/components",
    "~/plugins/axios.js",
    "~/plugins/global.js",
    { src: "~/assets/js/config.js", mode: "client" },
    { src: "~/assets/js/sidebar-menu.js", mode: "client" },
    { src: "~/assets/js/script.js", mode: "client" },
    { src: "~/assets/js/theme-customizer/customizer.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components",
    { path: "~/components/Base/", prefix: "Base" },
    { path: "~/components/Common/", prefix: "Common" },
    { path: "~/components/Content/", prefix: "Content" },
    { path: "~/components/Strates/", prefix: "Strates" },
    { path: "~/components/Core/", prefix: "Core" },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "nuxt-purgecss",
    "@nuxtjs/style-resources",
    "nuxt-lazysizes",
  ],
  pageTransition: "fade",
  lazySizes: {
    plugins: {
      unveilhooks: true,
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/auth",
    "@nuxt/image",
    "nuxt-svg-loader",
  ],
  // Purge module configuration: https://purgecss.com/guides/nuxt.html
  purgeCSS: {
    enabled: false,
  },
  styleResources: {
    scss: ["./assets/styles/_all_settings.scss"],
  },
  // Nuxt Axios
  axios: {
    baseURL: "http://localhost:3000/",
    proxyHeaders: false,
    credentials: false,
    proxy: true,
  },

  // auth: {
  //   localStorage: false,
  //   cookie: {
  //     prefix: 'auth.',
  //     options: {
  //       path: '/',
  //       maxAge: 10800
  //     }
  //   },
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: 'login', method: 'post', propertyName: 'access_token' },
  //         user: { url: 'index', method: 'get', propertyName: 'content' },
  //         logout: false
  //       }
  //     }
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["epic-spinners"],
    vendor: ["jquery", "bootstrap"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
      }),
    ],
  },
  loading: false,
};
