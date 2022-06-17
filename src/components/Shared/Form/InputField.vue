<template>
  <div>
    <label v-if="label" :for="id" class="h5">
      {{ label }}
    </label>

    <div class="position-relative">
      <b-form-input v-model="val" :placeholder="placeholder" :type="type" />

      <b-button
        v-if="icon"
        size="sm"
        text="Button"
        variant="link"
        class="position-absolute top-0 end-0"
      >
        <Icon :iconName="icon" :iconColor="'#0357a8'" />
      </b-button>
    </div>
  </div>
</template>

<script>
import Icon from "../Shared/Icons/Icon.vue";

export default {
  components: { Icon },

  props: {
    placeholder: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      default: null,
    },

    id: {
      type: String,
      default: null,
    },

    type: {
      type: String,
      default: "text",
    },

    value: {
      type: [String || Number],
      default: null,
    },

    icon: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      val: this.value,
    };
  },

  watch: {
    val(value) {
      this.$emit("input", value);
    },
    value(value) {
      this.val = value;
    },
  },
};
</script>
