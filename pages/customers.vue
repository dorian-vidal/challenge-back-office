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
      <button class="btn btn-export mb-4 text-white" @click="exportToExcel">Exporter vers Excel</button>

      <t-table
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
import * as XLSX from "xlsx";
import BreadcrumbBookmark from "@/components/Common/BreadcrumbBookmark";

export default {
  name: "Students",
  components: {
    BreadcrumbBookmark,
  },
  data() {
    return {
      tableData: [
        {
          firstname: "Alfonso",
          lastname: "Bribiesca",
          email: "alfonso@vexilo.com",
          score: 9999,
        },
        {
          firstname: "Saida",
          lastname: "Redondo",
          email: "saida@gmail.com",
          score: 9999,
        },
        {
          firstname: "Regina",
          lastname: "Bribiesca",
          email: "regina@gmail.com",
          score: 9999,
        },
        {
          firstname: "Ricardo",
          lastname: "Martinez",
          email: "rickyrickky@gmail.com",
          score: 9999,
        },
      ],
    };
  },
  methods: {
    exportToExcel() {
      const worksheet = XLSX.utils.json_to_sheet(this.tableData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      const data = new Blob([excelBuffer], { type: "application/octet-stream" });
      const fileName = "students.xlsx";
      if (navigator.msSaveBlob) {
        // For IE
        navigator.msSaveBlob(data, fileName);
      } else {
        // For modern browsers
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
.btn-export:after{
  z-index : -1 
}
</style>