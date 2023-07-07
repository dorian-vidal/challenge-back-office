import Vue from 'vue';

const device = {};
device.width = window.innerWidth;
device.height = window.innerHeight;
device.scroll = { left: 0,
  top: 0,
  last: 0,
  direction: 'down',
  height: document.documentElement.scrollHeight
}

device.isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;
device.isIpad = navigator.userAgent.match(/.*(iPad).*/);
device.isIphone = navigator.userAgent.match(/.*(iPhone).*/);
device.isAndroid = navigator.userAgent.match(/.*(Android).*/);
device.isFirefox = navigator.userAgent.match(/.*((f|F)irefox).*/);
device.isChrome = navigator.userAgent.match(/.*(Chrome).*/);
device.isSafari = navigator.userAgent.match(/.*(Safari).*/) && !device.isChrome;
/* eslint-disable */
device.isTrident = navigator.userAgent.match(/Trident.*rv\:11\./);
device.isEdge = navigator.userAgent.match(/.*(Edge).*/);
device.isMSIE = navigator.userAgent.match(/.*(MSIE ).*/);

device.pointer = !!window.navigator.pointerEnabled;
device.msPointer = !!window.navigator.msPointerEnabled;
device.pointerdown = device.isTouch ? 'touchstart' : ( device.pointer ? 'pointerdown' : ( device.msPointer ? 'MSPointerDown' : 'mousedown' ) );
device.pointerup = device.isTouch ? 'touchend' : ( device.pointer ? 'pointerup' : ( device.msPointer ? 'MSPointerUp' : 'mouseup' ) );
device.pointermove = device.isTouch ? 'touchmove' : ( device.pointer ? 'pointermove' : ( device.msPointer ? 'MSPointerMove' : 'mousemove' ) );
device.pointerenter = device.isTouch ? 'touchstart' : ( device.pointer ? 'pointerenter' : ( device.msPointer ? 'mouseenter' : 'mouseenter' ) );
device.pointerleave = device.isTouch ? 'touchend' : ( device.pointer ? 'pointerleave' : ( device.msPointer ? 'mouseout' : 'mouseout' ) );
device.pointerover = device.isTouch ? 'touchstart' : ( device.pointer ? 'pointerover' : ( device.msPointer ? 'mouseover' : 'mouseover' ) );
device.pointerout = device.isTouch ? 'touchend' : ( device.pointer ? 'pointerout' : ( device.msPointer ? 'mouseout' : 'mouseout' ) );
device.click = 'click';

device._onResize = () => {
  device.width = window.innerWidth;
  device.height = window.innerHeight;
  device.scroll.height = document.documentElement.scrollHeight
}

device._onScroll = () => {
  let doc = document.documentElement;


  device.scroll.left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  device.scroll.top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

  if (device.scroll.top > device.scroll.last) {
    device.scroll.direction = 'down';
  } else {
    device.scroll.direction = 'up';
  }

  device.scroll.last = device.scroll.top;
}

device.getPointerPosition = (event) => {
  let clientY = event.clientY;
  let clientX = event.clientX;

  return {
    x: clientX,
    y: clientY
  }

}
device.webglAvailable = () => {
  try {
    let canvas = document.createElement('canvas')
    return !!window.WebGLRenderingContext && ( canvas.getContext('webgl') || canvas.getContext('experimental-webgl') );
  } catch (e) {
    return false;
  }
}

device.install = function (Vue) {
  Vue.prototype.$device = device;
}
Vue.use(device);
