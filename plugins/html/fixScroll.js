import Vue from 'vue';
const fixScroll = {};

// constructor
fixScroll.body = document.body;
fixScroll.doc = document.documentElement;
fixScroll.bodyPosition = 0;
fixScroll.state 	= false;

fixScroll.fix = () => {
  fixScroll.bodyPosition = {
    top: Vue.prototype.$device.scroll.top,
    left: Vue.prototype.$device.scroll.left
  }

  fixScroll.body.style.position	= 'fixed';
  fixScroll.body.style.top = -fixScroll.bodyPosition.top+'px';
  fixScroll.body.style.left = 0;
  fixScroll.body.style.width	= '100vw';
  fixScroll.state = true;
}

fixScroll.unFix = () => {
  fixScroll.body.style.top = '';
  fixScroll.body.style.left = '';
  fixScroll.body.style.position = '';
  fixScroll.body.style.width = '';

  fixScroll.state = false;
  window.scrollTo( fixScroll.bodyPosition.left, fixScroll.bodyPosition.top );
}

fixScroll.install = function (Vue) {
  Vue.prototype.$fixScroll = fixScroll;
}
Vue.use(fixScroll);
