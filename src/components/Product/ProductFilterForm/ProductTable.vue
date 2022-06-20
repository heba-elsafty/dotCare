<template>
  <div>
    <vue-good-table
      :columns="headers"
      :rows="tableItems"
      :rtl="$i18n.locale === 'ar'"
    >
      <div slot="emptystate" class="text-center py-5">
        <b-img :src="require('../../../assets/images/noDataFoundGreen.svg')" />
        <h6 class="mt-3">Select Warehouse and Product</h6>
      </div>

    </vue-good-table>
  </div>
</template>

<script>
import { VueGoodTable } from "vue-good-table";

import "vue-good-table/dist/vue-good-table.css";

export default {
  components: { VueGoodTable },

  props: {
    tableItems: {
      type: Array,
      required: true,
    },
    typeId: {
      type: [String, Number],
      default: null,
    },
  },

  computed: {
    headers() {
      return [
        {
          label: this.$t("product.product"),
          field: "name",
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: this.$t("product.table.headers.filterByProduct"),
          },
        },
        {
          label: this.$t("product.table.headers.onHand"),
          field: "quantity",
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: this.$t("product.table.headers.filterByOnHand"),
          },
        },
        {
          label: this.$t("product.table.headers.type"),
          field: "type.name",
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: this.$t("product.table.headers.filterByType"),
          },
        },
      ];
    },
  },
};
</script>
