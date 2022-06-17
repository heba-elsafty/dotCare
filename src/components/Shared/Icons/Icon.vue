<template>
  <svg
    :class="`icon icon-${iconName} ${customClass}`"
    :width="iconSize"
    :height="iconSize"
    xmlns="http://www.w3.org/2000/svg"
    :fill="iconColor"
    :stroke="iconColor"
  >
    <use :xlink:href="icon" />
  </svg>
</template>

<script>
import Icons from "./IconsSvg.svg";

export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },

    customClass: {
      type: String,
      default: "",
    },

    iconSize: {
      type: Number,
      default: 20,
    },

    iconColor: {
      type: String,
      default: "#fff",
    },
  },

  computed: {
    icon() {
      return `${Icons}#${this.iconName}`;
    },
  },
};
</script>
