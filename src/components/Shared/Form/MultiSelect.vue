<template>
  <div>
    <label :for="id" class="h6 text-info">
      {{ label }}
      <span v-if="required" class="text-danger"> * </span>
    </label>

    <multiselect
      v-model="val"
      :id="id"
      :placeholder="placeholder"
      :label="optionLabel"
      :track-by="trackBy"
      :options="options"
      :multiple="true"
      :taggable="true"
      :searchable="true"
      :hide-selected="true"
      :show-no-results="true"
      @change="(value) => $emit('change', value)"
    >
      <template slot="clear" slot-scope="props">
        <b-button
          variant="link"
          class="multiselect__clear text-gray position-absolute"
          v-if="value.length"
          @mousedown.prevent.stop="clearAll(props.search)"
        >
          &times;
        </b-button>
      </template>
    </multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import "./MultiSelectStyle.scss";

export default {
  // OR register locally
  components: { Multiselect },

  props: {
    value: {
      type: Array,
      default: null,
    },

    options: {
      type: Array,
      required: true,
    },

    id: {
      type: String,
      default: "",
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    label: {
      type: String,
      default: "",
    },

    optionLabel: {
      type: String,
      required: true,
    },

    placeholder: {
      type: String,
      required: true,
    },

    trackBy: {
      type: [String, Number],
      required: true,
    },

    required: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      val: this.value,
    };
  },

  methods: {
    clearAll() {
      this.value = [];
    },
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
