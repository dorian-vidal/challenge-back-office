<template class="home">
  <div id="page-home" class="px-6 lg:px-0">
    <div class="grid grid-cols-12 gap-8 overflow-hidden grid-rows-12">
      <div
        class="col-span-12 row-span-2 row-start-1 lg:row-span-4 lg:col-span-6 lg:col-start-1 lg:col-end-7 box"
      >
        <bloc-welcome />
      </div>
      <div
        class="col-span-12 col-start-1 row-span-2 row-start-5 gap-8 lg:row-span-4 lg:col-span-2 lg:col-start-7 lg:row-start-1 box"
      >
        <bloc-card
          subtitle="Chauffeurs en course"
          color="#F4DFF8"
          number="8"
          class=""
          icons="parents"
        ></bloc-card>
      </div>
      <div
        class="col-span-12 col-start-1 row-span-2 row-start-7 lg:row-span-4 lg:col-span-2 lg:col-start-9 lg:row-start-1 box"
      >
        <bloc-card
          imageUrl="/assets/images/logo/logo-vroom-light.png"
          color="#F4DFF8"
          subtitle="Parents inscrits"
          number="60"
          class=""
          icons="drivers"
        ></bloc-card>
      </div>
      <div
        class="col-span-12 col-start-1 row-span-2 lg:row-span-4 lg:col-span-2 lg:col-start-11 row-start-10 lg:row-start-1 box"
      >
        <bloc-card
          subtitle="Enfants vroomés"
          number="299"
          class=""
          color="#F4DFF8"
          icons="childs"
        ></bloc-card>
      </div>
      <div
        class="col-span-12 col-start-1 row-span-6 lg:col-end-7 row-start-10 box"
      >
        <bloc-messages-inbox title="Les dernières questions parents reçues">
          <base-message-item
            type="checkbox"
            namefor="message1"
            clientLastname="Hubert"
            clientFirstname="Francis"
            clientMessage="Anim ad Lorem cillum cupidatat officia amet dolor cillum aliquip Lorem dolor."
            clientDate="01 juil"
          />
          <base-message-item
            type="checkbox"
            namefor="message2"
            clientLastname="Ouf"
            clientFirstname="Dorian"
            clientMessage="Anim ad Lorem cillum cupidatat officia amet dolor cillum aliquip Lorem dolor."
            clientDate="12 juil"
          />
          <base-message-item
            type="checkbox"
            namefor="message3"
            clientLastname="HotRabbit"
            clientFirstname="Ricky"
            clientMessage="Anim ad Lorem cillum cupidatat officia amet dolor cillum aliquip Lorem dolor."
            clientDate="31 juil"
          />
        </bloc-messages-inbox>
      </div>
      <div
        class="col-span-12 col-start-1 row-span-6 lg:col-end-13 lg:col-start-7 box"
      >
        <bloc-messages-inbox title="Les dernières candidatures chauffeurs">
          <base-message-item
            type="checkbox"
            namefor="message1"
            clientLastname="Gonze"
            clientFirstname="Rodrigue"
            clientMessage="Anim ad Lorem cillum cupidatat officia amet dolor cillum aliquip Lorem dolor."
            clientDate="01 juil"
          />

          <base-message-item
            type="checkbox"
            namefor="message2"
            clientLastname="Pascal"
            clientFirstname="Michel"
            clientMessage="Anim ad Lorem cillum cupidatat officia amet dolor cillum aliquip Lorem dolor."
            clientDate="12 juil"
          />
        </bloc-messages-inbox>
      </div>

      <div class="" v-for="data in datas" v-bind:key="data._id">
        <div>{{ data.email }}</div>
        <div>{{ data.prenom }}</div>
        <div>{{ data.nom }}</div>
      </div>
      <button v-on:click="update()">Mise à jour</button>

      <p>{{ phrase }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Home",
  // middleware: "auth",

  props: {},
  computed: {
    ...mapGetters({
      isHome: "global/getIsHome",
      header: "global/getGlobal",
      screen: "global/getScreen",
    }),
  },

  data() {
    return {
      currentSlug: "home",
      page: this.$route.name,
      datas: "",
      phrase: "Aucun",
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: "homepage",
      },
    };
  },
  methods: {
    update() {
      axios
        .get("http://localhost:3000/user/get/")
        .then((response) => (this.datas = response.data));

      console.log(this.datas);
    },

    // async asyncData() {
    //   const res = await axios.get(
    //     "https://hetic-vroom-api-conducteurs.one-website.com/user/get/"
    //   );
    //   console.log(res)
    //   return {
    //     data: res,
    //   };
    // },
  },
  mounted() {
    axios
      .get("/api/user/get/")
      .then((response) => (this.datas = response.data));
  },
};
</script>

<style></style>
