<template>
  <b-container fluid>
    <div class="d-md-flex mb-3 position-relative">
      <navigation />
      <bread-crumb />
    </div>

    <h5>{{ title }}</h5>

    <div class="bg-white py-2 px-2 px-md-5">
      <product-filter-form
        @save="save"
        :defaultItem="defaultItem"
        :filteredItem="filteredItem"
      />

      <h5 class="text-dark-blue border-bottom mb-3">
        {{ $t("product.productDetails") }}
      </h5>
      <product-details-table
        :tableItems="tableItems"
        :showZeroBalance="filteredItem.showZeroBalance"
      />
    </div>

    <Footer />
  </b-container>
</template>

<script>
import Footer from "../../components/Layout/Footer.vue";
import Navigation from "../../components/Navigation/Navigation.vue";
import ProductFilterForm from "../../components/Product/ProductFilterForm/ProductFilterForm.vue";
import BreadCrumb from "../../components/Shared/BreadCrumb/BreadCrumb.vue";
import ProductDetailsTable from "../../components/Product/ProductFilterForm/ProductDeatilsTable.vue";

// API
import WarehousesAPI from "../../Api/warehouses.json";
import ProductsAPI from "../../Api/products.json";

export default {
  components: {
    Navigation,
    BreadCrumb,
    Footer,
    ProductFilterForm,
    ProductDetailsTable,
  },

  data() {
    return {
      title: this.$t("product.product"),
      filteredItem: {
        warehouse: null,
        type: null,
        products: [],
        showZeroBalance: false,
        classification: null,
      },

      defaultItem: {
        warehouses: [],
        types: [],
        products: [],
      },

      tableItems: [],
    };
  },

  created() {
    document.title = this.$t(`product.${this.$route.meta.title}`);

    const { warehouses } = WarehousesAPI;
    this.defaultItem.warehouses = warehouses;

    const { products } = ProductsAPI;
    this.defaultItem.products = products;
  },

  methods: {
    save() {
      if (this.filteredItem.classification === "all") {
        this.tableItems = this.defaultItem.products
          .filter(
            (product) => product.warehouse_id === this.filteredItem.warehouse
          )
          .filter((product) => product.type.id === this.filteredItem.type);
      } else {
        this.tableItems = this.filteredItem.products;
      }
    },
  },
};
</script>
