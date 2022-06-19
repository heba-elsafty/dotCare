<template>
  <div>
    <label v-if="label" :for="id" class="text-info h6">
      {{ label }}
      <span v-if="required" class="text-danger"> * </span>
    </label>
    <b-form-select
      :id="id"
      v-model="val"
      :class="`form-select ${customClass}`"
      :options="options"
      :value-field="valueField"
      :text-field="textField"
      :disabled="disabled"
      @change="(value) => $emit('change', value)"
    >
      <template #first>
        <b-form-select-option :value="null" disabled>
          {{ firstOptionPlaceholder }}
        </b-form-select-option>
      </template>
    </b-form-select>
    <p class="text-danger">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },

    required: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    id: {
      type: String,
      default: "",
    },

    error: {
      type: String,
      default: "",
    },

    firstOptionPlaceholder: {
      type: String,
      required: "",
    },

    valueField: {
      type: String,
      default: "value",
    },

    textField: {
      type: String,
      default: "text",
    },

    customClass: {
      type: String,
      default: "",
    },

    options: {
      type: Array,
      required: true,
    },

    value: {
      type: [String, Number],
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
