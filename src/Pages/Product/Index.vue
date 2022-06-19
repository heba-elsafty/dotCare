<template>
  <b-container fluid>
    <div class="d-md-flex mb-3 position-relative">
      <navigation />
      <bread-crumb />
    </div>

    <h5>{{ title }}</h5>

    <div class="bg-white py-2 px-5">
      <h5 class="text-dark-blue border-bottom mb-3">
        {{ $t("product.basicInformation") }}
      </h5>
      <product-filter-form />
    </div>

    <Footer />
  </b-container>
</template>

<script>
import Footer from "../../components/Layout/Footer.vue";
import Navigation from "../../components/Navigation/Navigation.vue";
import ProductFilterForm from "../../components/Product/ProductFilterForm/ProductFilterForm.vue";
import BreadCrumb from "../../components/Shared/BreadCrumb/BreadCrumb.vue";

export default {
  components: { Navigation, BreadCrumb, Footer, ProductFilterForm },
  data() {
    return {
      title: this.$t("product.product"),
    };
  },

  created() {
    document.title = this.$t(`product.${this.$route.meta.title}`);
  },
};
</script>
