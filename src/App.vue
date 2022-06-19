<template>
  <div id="app">
    <Header />

    <router-view />
  </div>
</template>
<script>
import Header from "./components/Layout/Header.vue";

export default {
  components: { Header },
};
</script>
