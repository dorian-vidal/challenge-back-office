// plugins/global.js

import Vue from "vue";

export default ({ app }, inject) => {
  inject("global", Vue.observable({ style: false }));
};
