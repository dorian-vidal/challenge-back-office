<template>
  <section id="page-connexion" class="flex items-center justify-center">
    <div
      class="w-full max-w-[600px] p-12 overflow-hidden md:bg-white rounded-md"
    >
      <div class="mx-auto text_center">
        <h1 class="mb-20 text-3xl text-center">{{ titre }}</h1>
      </div>
      <form
        action="post"
        class="mt-8"
        data-success="Thanks for your enquiry, we'll be in touch shortly."
        data-error="Please fill in all fields correctly."
        @submit.prevent="login"
      >
        <div class="flex flex-col md:py-12 md:px-12">
          <base-input-text
            type="text"
            namefor="name"
            label="E-mail"
            placeholder=" "
            :required="true"
            class="mb-12 border-b-2 md:mr-8 border-primary-vert1"
            v-model="username"
          />
         
        </div>
        <b-notification v-if="error" type="is-warning">
          {{ error }}
        </b-notification>

        <p
          v-if="this.success"
          class="px-8 py-8 text-primary-vert1 md:px-12 md:py-12"
        >
          E mail envoyé avec succes !
        </p>
        <p v-if="this.error" class="px-8 py-8 text-red-500 md:px-12 md:py-12">
          Ah ! une erreur est survenue...
        </p>

        <div
          class="flex justify-between py-8 mt-8 bg-transparent border-t border-gray-100 rounded-b md:px-12 bg-grey-light"
        >
          <t-button
          @click="login()"
            type="submit"
            variant="primary"
            class="w-full py-3 transitions-colors"
          >
            <span class="text-lg text-white">Envoyer</span>
          </t-button>
        </div>
      </form>
     
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Connexion",
  props: {
    titre: {
      type: String,
      default: "Formulaire",
    },
    bouton_submit: {
      type: String,
      default: "Valider",
    },
    lien: {
      type: String,
      default: "Accueil",
    },
    url_lien: {
      type: String,
      default: "/",
    },
  },
  computed: {},
  data() {
    return {
      showModal: false,
      username: "",
      password: "",
      error: "",
      success: "",
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: "connexion",
      },
    };
  },
  methods: {
    login() {
      const email = document.getElementById('email').value;

      axios.post("https://mt4challenge.onrender.com/auth/login", this.form )
        .then((response) => {
          this.success = true;
          this.error = false;
          console.log(response)
        })
        .catch((error) => {
          this.success = false;
          this.error = true;
        });
    }
    // MODAL / FORM
    // submitParents() {
    //   axios
    //     .post("/", this.form)
    //     .then((res) => {
    //       //Perform Success Action
    //       console.log("res", res);
    //       this.status = "res";
    //       this.$router.push("/");
    //       this.success = true;
    //     })
    //     .catch((error) => {
    //       // error.response.status Check status code
    //       console.log("error", error);
    //       this.status = "error";
    //       this.success = true;
    //     })
    //     .finally(() => {
    //       //Perform action in always
    //     });
    // },
  },
};
</script>

<style lang="scss"></style>
