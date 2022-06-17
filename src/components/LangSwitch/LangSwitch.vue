<template>
  <b-dropdown variant="link" id="dropdown-1" text="English" :class="`${customClass}`">
    <b-dropdown-item>English</b-dropdown-item>
    <b-dropdown-item>Arabic</b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  props: {
    customClass: {
      type: String,
      default: "",
    },
  },
};
</script>
