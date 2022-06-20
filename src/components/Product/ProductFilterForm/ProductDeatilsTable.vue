<template>
  <div class="table-responsive border rounded-3 shadow-sm">
    <table class="table">
      <thead class="table-light">
        <tr>
          <th scope="col"></th>
          <th scope="col" v-for="header in headers" :key="header.field">
            {{ header.label }}
          </th>
        </tr>
      </thead>

      <tbody class="border-top-0 text-center" v-if="tableItems.length === 0">
        <tr>
          <td colspan="4" class="py-5 border-0">
            <b-img
              :src="require('../../../assets/images/noDataFoundGreen.svg')"
            />
            <h6 class="mt-3">Select Warehouse and Product</h6>
          </td>
        </tr>
      </tbody>

      <tbody
        class="border-top-0 align-middle"
        v-for="(product, index) in tableItems"
        :key="product.id"
      >
        <tr>
          <th class="border-0 w-5" scope="row">
            <b-button
              variant="link"
              @click="toggle(product.id)"
              :class="`p-0 ${opened.includes(product.id) && 'opened'}`"
            >
              <Icon
                v-if="opened && opened.length > 0"
                iconColor="#333"
                iconName="downArrow"
              />
              <Icon
                v-else
                iconColor="#333"
                :iconName="$i18n.locale === 'en' ? 'rightArrow' : 'leftArrow'"
              />
            </b-button>
          </th>

          <td class="border-0">{{ product.name }}</td>
          <td class="border-0">{{ product.quantity }}</td>
          <td class="border-0">{{ product.type.name }}</td>
        </tr>
        <tr v-if="opened.includes(product.id)" :key="product.id">
          <td class="border-0" colspan="4">
            <ProductInformation
              :product="product"
              :showZeroBalance="showZeroBalance"
              @deleteProduct="deleteProduct(index)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Icon from "../../Shared/Icons/Icon.vue";

import ProductInformation from "./ProductInformation";

export default {
  components: { Icon, ProductInformation },

  props: {
    tableItems: {
      type: Array,
      required: true,
    },
    showZeroBalance: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      opened: [],
    };
  },

  computed: {
    headers() {
      return [
        {
          label: this.$t("product.product"),
          field: "name",
        },
        {
          label: this.$t("product.table.headers.onHand"),
          field: "quantity",
        },
        {
          label: this.$t("product.table.headers.type"),
          field: "type.name",
        },
      ];
    },
  },

  methods: {
    toggle(id) {
      const index = this.opened.indexOf(id);
      if (index > -1) {
        this.opened.splice(index, 1);
      } else {
        this.opened.push(id);
      }
    },

    deleteProduct(index) {
      console.log(this.tableItems.splice(index, 1));
    },
  },
};
</script>
