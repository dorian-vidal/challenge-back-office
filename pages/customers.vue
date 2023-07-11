<template>
  <section id="page-drivers" class="">
    <div class="overflow-hidden pt-3">
      <div class="mx-auto">
        <BreadcrumbBookmark
          titlebreadcrumb="Etudiants"
          breadcrumb_item_parent="Etudiants"
          breadcrumb_item_active=""
          bookmark_active="true"
        />
      </div>
      <button class="btn btn-export mb-4 text-white" @click="exportToExcel">
        Exporter vers Excel
      </button>

      <t-table
        v-if="tableData"
        :headers="['Prénom', 'Nom', 'Email', 'Score']"
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
              {{ props.row.first_name }}
            </td>
            <td :class="props.tdClass">
              {{ props.row.last_name }}
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
import * as XLSX from "xlsx";
import BreadcrumbBookmark from "@/components/Common/BreadcrumbBookmark";
import axios from "axios";

export default {
  name: "Students",
  components: {
    BreadcrumbBookmark,
  },
  data() {
    return {
      tableData: null,
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get("https://mt4challenge.onrender.com/back-office/students", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this.$cookies.get("cookie-token")}`,
          },
        })
        .then((response) => {
          this.tableData = response.data;
          this.success = true;
          this.error = false;
          console.log(response.data);
        })
        .catch((error) => {
          this.success = false;
          this.error = true;
        });
    },
    exportToExcel() {
      const worksheet = XLSX.utils.json_to_sheet(this.tableData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      const data = new Blob([excelBuffer], {
        type: "application/octet-stream",
      });
      const fileName = "students.xlsx";
      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(data, fileName);
      } else {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(data);
        link.download = fileName;
        link.click();
      }
    },
  },
};
</script>
<style>
.btn-export:after {
  z-index: -1;
}
</style>
