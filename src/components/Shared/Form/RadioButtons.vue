<template>
  <div>
    <b-form-group :class="`${isInline && 'form-check-inline'}`">
      <label :for="id" class="h5 text-info">{{ label }}</label>
      <b-form-radio-group
        :id="id"
        v-model="val"
        :options="options"
        name="radio-options"
        :disabled="disabled"
      ></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  props: {
    isInline: {
      type: Boolean,
      default: true,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    label: {
      type: String,
      default: "",
    },

    options: {
      type: Array,
      required: true,
    },

    id: {
      type: [String, Number],
      default: null,
    },

    value: {
      type: String,
      default: "",
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
