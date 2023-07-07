import Vue from 'vue';

const eventHub = {}

eventHub.install = function(Vue) {
  Vue.prototype.$eventHub = new Vue();
}

Vue.use(eventHub);
