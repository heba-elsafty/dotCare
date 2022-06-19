<template>
  <div>
    <b-form-checkbox
      :id="name"
      v-model="val"
      :name="name"
      :unchecked-value="uncheckedValue"
    >
      {{ label }}
    </b-form-checkbox>
    <p class="text-danger">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },

    required: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    error: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      required: true,
    },

    uncheckedValue: {
      type: [String, Boolean],
      default: "",
    },

    value: {
      type: [String, Boolean],
      default: null,
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
