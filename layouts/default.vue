<template>
  <main>
    <c-svg-icons />

    <!-- Loader starts-->
    <div class="loader-wrapper">
      <div class="theme-loader">
        <div class="loader-p"></div>
      </div>
    </div>
    <!-- Loader ends-->
    <div class="page-wrapper" id="pageWrapper">
      <div class="page-main-header" v-if="$route.name !== 'index'">
        <MainHearder />
      </div>
      <div class="page-body-wrapper null">
        <!-- Page Sidebar Start-->
        <!-- <div v-if="$route.name !== 'index'"><MainNav /></div> -->
        <!-- Page Sidebar Ends-->
        <div class="page-body pt-[30px] lg:pt-[100px]">
          <transition name="fade">
            <nuxt class="page-content" />
          </transition>
        </div>
        <!-- <Footer /> -->
      </div>
    </div>
  </main>
</template>

<script>
import debounce from "~/utils/debounce";
// import { mapGetters } from "vuex";

import MainHearder from "~/components/Common/MainHearder.vue";
import MainNav from "~/components/Common/MainNav.vue";
import Footer from "~/components/Common/Footer.vue";

export default {
  data: function () {
    return {
      date: new Date(),
      excludeSpecificPage: false,
      lastDate: new Date().getTime(),
      page: this.$route.name,
    };
  },
  components: {
    MainHearder,
    MainNav,
    Footer,
  },
  computed: {
    // ...mapGetters({
    //   config: "global/getConfig",
    //   screen: "global/getScreen",
    // }),
  },
  created() {
    this._onResize = debounce(this._onResize, 200);
  },
  mounted() {
    this.bindEvents();
    this._onResize();
    this._onUpdate();
  },
  methods: {
    bindEvents() {
      window.addEventListener("resize", this._onResize);
      document.addEventListener("scroll", this._onScroll, { passive: true });
    },
    _onResize() {
      this.$device._onResize(); // Update value
      // this.setScreen();
      this.$eventHub.$emit("onResize");
    },
    _onUpdate() {
      this.date = new Date();
      const currentDate = this.date.getTime();
      const delta = currentDate - this.lastDate;
      this.$eventHub.$emit("onUpdate", delta);
      this.lastDate = currentDate;
      requestAnimationFrame(this._onUpdate);
    },
    _onScroll() {
      this.$device._onScroll(); // Update value
      this.$eventHub.$emit("onScroll", this.$device.scroll);
    },

    // setScreen() {
    //   const bpValues = Object.values(this.config.bp);
    //   const bpKeys = Object.keys(this.config.bp);
    //   let screen = "desktop";
    //   if (bpValues.length) {
    //     for (let i = 0; i < bpValues.length; i++) {
    //       if (this.$device.width <= bpValues[i]) {
    //         screen = bpKeys[i];
    //         break;
    //       }
    //     }
    //   }
    //   this.$store.dispatch("global/loadScreen", screen);
    // },
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.$eventHub.$emit("sidebar:close");
        this.$eventHub.$emit("question:close");
      });
    },
  },
};
</script>

<style lang="scss"></style>
