<template>
  <div>
    <h5 class="text-dark-blue border-bottom mb-3">
      {{ $t("product.basicInformation") }}
    </h5>

    <b-form>
      <b-row class="align-items-center">
        <b-col md="4">
          <Select
            id="warehouse_root"
            ref="warehouse"
            required
            :label="textTranslate('wareHouse')"
            :firstOptionPlaceholder="textTranslate('selectWareHouse')"
            :options="defaultItem.warehouses"
            v-model="filteredItem.warehouse"
            valueField="id"
            textField="name"
            @change="onWarehouseSelect"
          />
        </b-col>

        <b-col md="4">
          <Select
            required
            :label="textTranslate('type')"
            :firstOptionPlaceholder="textTranslate('selectType')"
            :options="defaultItem.types"
            v-model="filteredItem.type"
            valueField="id"
            textField="name"
            :disabled="!filteredItem.warehouse"
            @change="onTypeSelect"
          />
        </b-col>

        <b-col md="4">
          <checkbox
            :label="textTranslate('showZeroBalance')"
            name="show_zero_balance"
            v-model="filteredItem.showZeroBalance"
            :uncheckedValue="!filteredItem.showZeroBalance"
            class="mt-4 pt-1"
          />
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col md="4">
          <radio-buttons
            id="product_classification"
            :disabled="!filteredItem.warehouse || !filteredItem.type"
            :label="textTranslate('productClassification')"
            :options="productClassification"
            v-model="filteredItem.classification"
          />
        </b-col>

        <b-col>
          <multi-select
            v-if="filteredItem.classification === 'specific'"
            v-model="filteredItem.products"
            id="product"
            :options="this.selectedProducts"
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
          @click="onSubmit"
        >
          {{ textTranslate("search") }}
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import Select from "../../Shared/Form/Select";
import Checkbox from "../../Shared/Form/Checkbox";
import RadioButtons from "../../Shared/Form/RadioButtons.vue";

import MultiSelect from "../../Shared/Form/MultiSelect.vue";

export default {
  components: { Select, Checkbox, RadioButtons, MultiSelect },

  props: {
    defaultItem: { type: Object, required: true },
    filteredItem: { type: Object, required: true },
  },

  data() {
    return {
      selectedWarehouseIndex: 0,
      selectedProducts: [],
    };
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
      return this.filteredItem.classification === "specific"
        ? this.filteredItem.products.length > 0
        : true;
    },

    validatedForm() {
      return (
        this.filteredItem.warehouse &&
        this.filteredItem.type &&
        this.filteredItem.classification &&
        this.checkClassificationvalidated
      );
    },
  },

  methods: {
    onWarehouseSelect() {
      this.selectedWarehouseIndex = this.defaultItem.warehouses.findIndex(
        (w) => w.id === this.filteredItem.warehouse
      );
      this.defaultItem.types =
        this.defaultItem.warehouses[this.selectedWarehouseIndex].types;
    },

    onTypeSelect() {
      this.selectedProducts = this.defaultItem.products
        .filter(
          (product) => product.warehouse_id === this.filteredItem.warehouse
        )
        .filter((product) => product.type.id === this.filteredItem.type);
    },

    onSubmit() {
      this.$emit("save");
    },
  },
};
</script>
