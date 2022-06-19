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
        <Icon
          :iconName="icon"
          :iconColor="iconColor"
          :strokeColor="iconColor"
        />
      </b-button>
    </div>
  </div>
</template>

<script>
import Icon from "../Icons/Icon";

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

    iconColor: {
      type: String,
      default: "#0357a8",
    },
  },

  data() {
    return {
      val: this.value,
    };
  },

  watch: {
    val(newValue) {
      this.$emit("input", newValue);
    },

    value(newValue) {
      this.val = newValue;
    },
  },
};
</script>
