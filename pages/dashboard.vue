<template class="home">
  <section id="page-drivers" class="">
    <div class="overflow-hidden pt-3">
      <div class="mx-auto">
        <BreadcrumbBookmark
          titlebreadcrumb="Promos"
          breadcrumb_item_parent="Promos"
          breadcrumb_item_active=""
          bookmark_active="true"
        />
      </div>
      <!-- <button
        class="btn btn-export mb-4 text-white"
        @click="closeChallenge"
        type="submit"
      >
        Fermer le challenge
      </button> -->
      <t-table
        v-if="tableData"
        :headers="['Nom', 'Id fonctionnel', `Nombre d'étudiants`]"
        :data="tableData"
      >
        <template slot="row" slot-scope="props">
          <tr
            :class="[
              props.trClass,
              props.rowIndex % 2 === 0 ? 'bg-gray-100' : '',
            ]"
          >
            <td :class="props.tdClass">
              {{ props.row.name }}
            </td>
            <td :class="props.tdClass">
              {{ props.row.slug }}
            </td>
            <td :class="props.tdClass">
              {{ props.row.students_count }}
            </td>
          </tr>
        </template>
        <template
          slot="tfoot"
          slot-scope="{ tfootClass, trClass, tdClass, renderResponsive }"
        >
          <tfoot :class="tfootClass">
            <tr :class="trClass">
              <td :class="tdClass" :colspan="renderResponsive ? 2 : 4">
                <t-pagination
                  :hide-prev-next-controls="renderResponsive"
                  :total-items="100"
                  :per-page="renderResponsive ? 3 : 5"
                  :class="{
                    'ml-auto': !renderResponsive,
                    'mx-auto': renderResponsive,
                  }"
                />
              </td>
            </tr>
          </tfoot>
        </template>
      </t-table>
      <br />
      <div class="flex justify-center content-center">
        <div
          aria-disabled="false"
          class="center-content card__section p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <form
            action="post"
            class="mt-8"
            data-success="Thanks for your enquiry, we'll be in touch shortly."
            data-error="Please fill in all fields correctly."
            @submit.prevent="submitPromos"
            v-on:input="updateValue($event.target.value)"
          >
            <!-- v-bind:value="value" -->

            <div class="grid px-8 md:px-12 md:grid-cols-2 md:gap-8">
              <base-input-text
                type="text"
                namefor="name"
                label="Nom"
                placeholder=" "
                :required="true"
                class="md:mr-8"
                v-model="form.name"
              />
              <base-input-text
                type="text"
                namefor="slug"
                label="Id fonctionnel"
                placeholder=" "
                :required="true"
                v-model="form.slug"
              />
            </div>

            <!-- <p
              v-if="this.success"
              class="px-8 py-8 text-primary-vert1 md:px-12 md:py-12"
            >
              Merci, votre message a bien été envoyé. <br />
              Un de nos conseillers vous contactera sous 72h.
            </p>
            <p
              v-if="this.error"
              class="px-8 py-8 text-red-500 md:px-12 md:py-12"
            >
              Ah ! une erreur est survenue...
            </p> -->

            <div
              class="flex justify-between px-8 py-8 mt-8 border-t border-gray-100 rounded-b md:py-12 md:px-12 bg-grey-light"
            >
              <t-button
                @click="submitPromos"
                type="submit"
                variant="primary"
                class="w-full"
              >
                <span>Envoyer</span>
              </t-button>
            </div>
          </form>
        </div>
      </div>
      <br />
    </div>
  </section>
</template>

<script>
import BreadcrumbBookmark from "@/components/Common/BreadcrumbBookmark";
import axios from "axios";

export default {
  name: "Promo",
  components: {
    BreadcrumbBookmark,
  },
  data() {
    return {
      token: null,
      tableData: null,
      form: {
        name: "",
        slug: "",
      },
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: "drivers",
      },
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      const token = this.$route.query.token;
      if (token) {
        this.$cookies.set("cookie-token", this.$route.query.token);
      }

      axios
        .get("https://mt4challenge.onrender.com/back-office/promo", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this.$cookies.get("cookie-token")}`,
          },
        })
        .then((response) => {
          this.tableData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    updateValue: function (value) {
      this.$emit("input", value);
    },

    // MODAL / FORM
    submitPromos() {
      // const formData = {
      //   email: this.form.email,
      // };
      axios
        .post(
          "https://mt4challenge.onrender.com/back-office/promo",
          this.form,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.$cookies.get("cookie-token")}`,
            },
          }
        )
        .then((response) => {
          this.success = true;
          this.error = false;
          this.tableData.push({
            name: this.form.name,
            slug: this.form.slug,
            students_count: 0,
          });
          console.log(response);
        })
        .catch((error) => {
          this.success = false;
          this.error = true;
        });
    },
  },
};
</script>

<style></style>
