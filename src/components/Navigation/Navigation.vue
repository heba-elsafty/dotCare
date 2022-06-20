<template>
  <b-navbar
    class="navigation rounded mb-2 mb-md-0"
    toggleable
    variant="primary"
  >
    <b-navbar-toggle target="navbar-toggle-collapse">
      <template>
        <icon iconName="navigation" />
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link to="/product" class="text-center">
          <b-img
            :src="require('../../assets/images/admin.svg')"
            width="30"
            height="30"
          />
          <br />
          {{ $t("translation.navigation.product") }}
        </router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Icon from "../Shared/Icons/Icon.vue";
export default {
  components: { Icon },
};
</script>

<style lang="scss" scoped>
@import "./NavigationStyle";
</style>
