<template>
  <section id="page-drivers" class="">
    <div class="overflow-hidden">
      <div class="mx-auto">
        <BreadcrumbBookmark
          titlebreadcrumb="Etudiants"
          breadcrumb_item_parent="Etudiants"
          breadcrumb_item_active=""
          bookmark_active="true"
        />
      </div>

      <t-table
        :headers="['Prénom', 'Nom', 'Email', 'Score']"
        :data="[
          {
            firstname: 'Alfonso Bribiesca',
            lastname: 'alfonso@vexilo.com',
            email: 'alfonso@vexilo.com',
            score: 9999,
          },
          {
            firstname: 'Saida Redondo',
            lastname: 'saida@gmail.com',
            email: 'alfonso@vexilo.com',
            score: 9999,
          },
          {
            firstname: 'Regina Bribiesca',
            lastname: 'regina@gmail.com',
            email: 'alfonso@vexilo.com',
            score: 9999,
          },
          {
            firstname: 'Ricardo Martinez',
            lastname: 'rickyrickky@gmail.com',
            email: 'alfonso@vexilo.com',
            score: 9999,
          },
        ]"
      >
        <template slot="row" slot-scope="props">
          <tr
            :class="[
              props.trClass,
              props.rowIndex % 2 === 0 ? 'bg-gray-100' : '',
            ]"
          >
            <td :class="props.tdClass">
              {{ props.row.firstname }}
            </td>
            <td :class="props.tdClass">
              {{ props.row.lastname }}
            </td>
            <td :class="props.tdClass">
              {{ props.row.email }}
            </td>
            <td :class="props.tdClass">
              {{ props.row.score }}
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
    </div>
  </section>
</template>

<script>
import BreadcrumbBookmark from "@/components/Common/BreadcrumbBookmark";
import axios from "axios";
export default {
  name: "students",
  components: {
    BreadcrumbBookmark,
  },
  data() {
    return {
      showModal: false,
      form: {
        name: "",
        lastname: "",
        phone: "",
        mail: "",
        profil: "",
        text: "",
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
  methods: {
    updateValue: function (value) {
      this.$emit("input", value);
    },

    // MODAL / FORM
    submitParents() {
      axios
        .post("/contact", this.form)
        .then((res) => {
          //Perform Success Action
          console.log("res", res);
          this.status = "res";
          this.$router.push("/");
          this.success = true;
          setTimeout(() => {
            this.showModal = false;
          }, 3000);
        })
        .catch((error) => {
          // error.response.status Check status code
          console.log("error", error);
          this.status = "error";
          this.success = true;
        })
        .finally(() => {
          //Perform action in always
        });
    },
  },
};
</script>
