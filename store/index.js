import Vuex from "vuex";

import global from "./global";

const storeApp = () => {
  return new Vuex.Store({
    actions: {
      async nuxtServerInit({ dispatch, commit }, context) {
        await commit("global/setConfig"); // load config js

      },
    },
    namespaced: true,
    modules: {
      global,
    },
  });
};

export default storeApp;
