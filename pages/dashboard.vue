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
      <label class="relative inline-flex items-center cursor-pointer">
        <input
          v-model="is_disabled"
          type="checkbox"
          class="sr-only peer mb-4"
          @click="closeChallenge"
        />
        <div
          class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
        ></div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Fermer le challenge</span
        >
      </label>
      <t-table
        v-if="tableData"
        :headers="['Nom de la promo', 'Id fonctionnel', `Nombre d'étudiants`]"
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
              <nuxt-link :to="`customers/${props.row.slug}`">{{
                props.row.slug
              }}</nuxt-link>
            </td>
            <td :class="props.tdClass">
              {{ props.row.students_count }}
            </td>
          </tr>
        </template>
      </t-table>
      <br />
      <div class="flex justify-center content-center">
        <div
          aria-disabled="false"
          class="center-content card__section p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <form
            class="mt-8"
            data-success="Thanks for your enquiry, we'll be in touch shortly."
            data-error="Please fill in all fields correctly."
            @input="updateValue($event.target.value)"
          >
            <div class="grid px-8 md:px-12 md:grid-cols-2 md:gap-8">
              <base-input-text
                v-model="form.name"
                type="text"
                namefor="name"
                label="Nom"
                placeholder=" "
                :required="true"
                class="md:mr-8"
              />
              <base-input-text
                v-model="form.slug"
                type="text"
                namefor="slug"
                label="Id fonctionnel"
                placeholder=" "
                :required="true"
              />
            </div>
            <div
              class="flex justify-between px-8 py-8 mt-8 border-t border-gray-100 rounded-b md:py-12 md:px-12 bg-grey-light"
            >
              <t-button
                type="submit"
                variant="primary"
                class="w-full"
                @click="submitPromos"
              >
                <span>Créer une nouvelle promo</span>
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
      is_disabled: false,
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
    this.getIsDisabledChallenge();
  },
  methods: {
    getIsDisabledChallenge() {
      axios
        .get(
          "https://mt4-challenge.onrender.com/back-office/challenge/is-disabled",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.$cookies.get("cookie-token")}`,
            },
          }
        )
        .then((response) => {
          this.is_disabled = response.data.is_disabled;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getUsers() {
      const token = this.$route.query.token;
      if (token) {
        this.$cookies.set("cookie-token", this.$route.query.token);
      }

      axios
        .get("https://mt4-challenge.onrender.com/back-office/promo", {
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
    submitPromos(e) {
      e.preventDefault();
      axios
        .post(
          "https://mt4-challenge.onrender.com/back-office/promo",
          this.form,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.$cookies.get("cookie-token")}`,
            },
          }
        )
        .then(() => {
          this.success = true;
          this.error = false;
          this.tableData.push({
            name: this.form.name,
            slug: this.form.slug,
            students_count: 0,
          });
          // reset form
          this.form.name = null;
          this.form.slug = null;
        })
        .catch((error) => {
          this.success = false;
          this.error = true;
          console.error(error);
        });
    },
    closeChallenge() {
      const formData = {
        is_disabled: !this.is_disabled,
      };
      axios
        .put(
          "https://mt4-challenge.onrender.com/back-office/challenge/set-is-disabled",
          formData,
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
          // this.is_disabled = true;
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
