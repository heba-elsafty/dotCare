<template>
  <b-nav class="breadcrumb flex-grow-1 ms-1 align-items-center">
    <router-link to="/" class="me-2 mt-n1">
      <icon iconName="home"
    /></router-link>
    <router-link
      v-for="route in items"
      :key="route.name"
      :to="route.link"
      :class="`${
        !!route.link && 'breadcrumb__item--active'
      } py-3 breadcrumb__item`"
    >
      {{ $t(`translation.breadCrumb.${route.name}`) }}
    </router-link>
  </b-nav>
</template>

<script>
import Icon from "../Icons/Icon.vue";
export default {
  components: { Icon },
  data() {
    return {
      items: this.$route.meta.breadCrumb,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./BreadCrumbStyle";
</style>
