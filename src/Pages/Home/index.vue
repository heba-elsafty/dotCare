<template>
  <div>
    <Header />
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
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Navigation from "../../components/Navigation/Navigation.vue";
import BreadCrumb from "../../components/Shared/BreadCrumb/BreadCrumb.vue";
import "./HomeStyle.scss";

export default {
  components: { Footer, Header, Navigation, BreadCrumb },
  name: "Home",
  computed: {
    welcomeText() {
      return this.$t("home.welcomeMessage");
    },
  },
};
</script>
