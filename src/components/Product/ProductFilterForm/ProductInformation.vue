<template>
  <div class="table-responsive border rounded-3 shadow-sm">
    <table class="table">
      <thead class="table-light">
        <tr>
          <th v-for="header in headers" :key="header.field">
            {{ header.label }}
          </th>
          <th v-if="showZeroBalance && product.balance <= 0">
            {{ $t("product.table.headers.balance") }}
          </th>
        </tr>
      </thead>
      <tbody class="border-top-0">
        <tr>
          <td class="w-md-10 border-0">{{ product.code }}</td>
          <td class="w-md-25 border-0">{{ product.uom_name }}</td>
          <td class="w-md-25 border-0">
            <span id="popover-target-1">
              {{ trimString(product.description, 30) }}
            </span>
            <b-popover
              target="popover-target-1"
              triggers="hover"
              placement="top"
            >
              <template #title>
                {{ $t("product.table.headers.description") }}
              </template>
              {{ product.description }}
            </b-popover>
          </td>
          <td class="w-md-25 border-0">{{ product.ratio }}</td>
          <td class="w-md-25 border-0">{{ product.date | moment("LL") }}</td>
          <td
            v-if="showZeroBalance && product.balance <= 0"
            class="w-md-25 border-0 text-danger"
          >
            {{ product.balance }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import helpers from "../../../Mixins/helpers";

export default {
  mixins: [helpers],

  props: {
    product: {
      type: Object,
      default: null,
    },
    showZeroBalance: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    headers() {
      return [
        {
          label: this.$t("product.table.headers.code"),
          field: "code",
        },
        {
          label: this.$t("product.table.headers.UomName"),
          field: "uom_name",
        },
        {
          label: this.$t("product.table.headers.description"),
          field: "description",
        },
        {
          label: this.$t("product.table.headers.ratio"),
          field: "ratio",
        },
        {
          label: this.$t("product.table.headers.createdDate"),
          field: "date",
        },
      ];
    },
  },
};
</script>
