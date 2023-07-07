import Vue from "vue";

// import Page from '~/components/ContentType/Page.vue';
// Vue.component('page', Page);

// Base
import UseSvg from "~/components/Base/UseSvg.vue";
import InputText from "~/components/Base/InputText.vue";
import TextArea from "~/components/Base/TextArea.vue";
import MessageItem from "~/components/Base/MessageItem.vue";

Vue.component("base-use-svg", UseSvg);
Vue.component("base-input-text", InputText);
Vue.component("base-text-area", TextArea);
Vue.component("base-message-item", MessageItem);

// CORE

// import Slider from "~/components/Core/Slider.vue";

// Vue.component("core-slider", Slider);

// COMMON (layout, Header, footer etc..)

import SvgIcons from "~/components/Common/SvgIcons.vue";
import Connexion from "~/components//Common/Connexion";

Vue.component("c-svg-icons", SvgIcons);
Vue.component("connexion", Connexion);

// STRATES

// COMPONENTS

// import Card from '~/components/Card';

// Vue.component('Card', Card);
