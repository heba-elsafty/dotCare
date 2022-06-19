<template>
  <b-form>
    <b-row class="align-items-center">
      <b-col>
        <Select
          id="warehouse_root"
          ref="warehouse"
          required
          :label="textTranslate('wareHouse')"
          :firstOptionPlaceholder="textTranslate('selectWareHouse')"
          :options="warehouses.roots"
          v-model="warehouse.root"
          valueField="id"
          textField="name"
          @change="onWarehouseRootSelect"
        />
      </b-col>

      <b-col>
        <Select
          required
          :label="textTranslate('type')"
          :firstOptionPlaceholder="textTranslate('selectType')"
          :options="warehouses.types"
          v-model="warehouse.type"
          valueField="id"
          textField="name"
          :disabled="!warehouse.root"
          @change="onWarehouseTypeSelect"
        />
      </b-col>

      <b-col>
        <checkbox
          :label="textTranslate('showZeroBalance')"
          name="show_zero_balance"
          v-model="warehouse.showBalance"
          :uncheckedValue="!warehouse.showBalance"
          class="mt-4 pt-1"
        />
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col md="4">
        <radio-buttons
          id="product_classification"
          :disabled="
            !warehouse.root || !warehouse.type || !warehouse.showBalance
          "
          :label="textTranslate('productClassification')"
          :options="productClassification"
          v-model="warehouse.classification"
        />
      </b-col>

      <b-col>
        <multi-select
          v-if="warehouse.classification === 'specific'"
          v-model="warehouse.product"
          id="product"
          :options="warehouses.products"
          :placeholder="textTranslate('selectProducts')"
          :label="$t('product.product')"
          optionLabel="name"
          trackBy="id"
          required
        />
      </b-col>
    </b-row>

    <div class="text-end">
      <b-button
        variant="secondary"
        class="text-white px-5 my-3"
        :disabled="!validatedForm"
      >
        {{ textTranslate("search") }}
      </b-button>
    </div>
  </b-form>
</template>

<script>
import Select from "../../Shared/Form/Select";
import Checkbox from "../../Shared/Form/Checkbox";
import RadioButtons from "../../Shared/Form/RadioButtons.vue";

// Fake Api
import dataApi from "../../../Api/product.json";
import MultiSelect from "../../Shared/Form/MultiSelect.vue";

export default {
  components: { Select, Checkbox, RadioButtons, MultiSelect },

  data() {
    return {
      warehouse: {
        root: null,
        type: null,
        product: [],
        showBalance: false,
        classification: null,
      },

      warehouses: {
        roots: [],
        types: [],
        products: [],
      },

      selectedIndexRoot: 0,
      selectedIndexType: 0,
    };
  },

  created() {
    const { data } = dataApi;
    this.warehouses.roots = data;
  },

  computed: {
    textTranslate() {
      return (text) => this.$t(`product.filter.${text}`);
    },

    productClassification() {
      return [
        { text: this.textTranslate("allProduct"), value: "all" },
        { text: this.textTranslate("specificProduct"), value: "specific" },
      ];
    },

    checkClassificationvalidated() {
      return this.warehouse.showBalance &&
        this.warehouse.classification === "specific"
        ? this.warehouse.product.length > 0
        : true;
    },

    validatedForm() {
      return (
        this.warehouse.root &&
        this.warehouse.type &&
        this.checkClassificationvalidated
      );
    },
  },

  methods: {
    onWarehouseRootSelect() {
      this.selectedIndexRoot = this.warehouses.roots.findIndex(
        (w) => w.id === this.warehouse.root
      );
      this.warehouses.types =
        this.warehouses.roots[this.selectedIndexRoot].types;
    },

    onWarehouseTypeSelect() {
      this.selectedIndexType = this.warehouses.types.findIndex(
        (t) => t.id === this.warehouse.type
      );
      this.warehouses.products =
        this.warehouses.types[this.selectedIndexType].products;
    },
  },
};
</script>
