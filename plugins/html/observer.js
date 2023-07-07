import Vue from 'vue';
import observer from 'intersection-observer-admin';

Vue.use(function (Vue) {
  Vue.prototype.$observer = new observer();
});
