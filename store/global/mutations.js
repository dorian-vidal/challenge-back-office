import Vue from 'vue'

export default {

  setConfig(state) {
    state.config = require("~/static/config.js").default;
  },
  setCV(state, payload) {
    state.cv = payload;
  },
  setScreen(state, payload) {
    state.screen = payload;
  },
  setGlobal(state, payload) {
    state.global = payload;
  },
}
