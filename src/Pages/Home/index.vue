<template>
  <div>
    <b-container fluid>
      <div class="d-md-flex mb-3 position-relative">
        <navigation />
        <bread-crumb />
      </div>

      <div
        class="home bg-white d-md-flex flex-column align-items-center justify-content-center"
      >
        <b-img :src="require('../../assets/images/home.png')" />
        <h5 class="my-4">{{ welcomeText }}</h5>
      </div>

      <Footer />
    </b-container>
  </div>
</template>

<script>
import Footer from "../../components/Layout/Footer";
import Navigation from "../../components/Navigation/Navigation.vue";
import BreadCrumb from "../../components/Shared/BreadCrumb/BreadCrumb.vue";

import "./HomeStyle.scss";

export default {
  components: { Footer, Navigation, BreadCrumb },
  name: "Home",

  computed: {
    welcomeText() {
      return this.$t("home.welcomeMessage");
    },
  },

  created() {
    document.title = this.$t(`product.${this.$route.meta.title}`);
  },
};
</script>
