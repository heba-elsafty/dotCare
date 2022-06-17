<template>
  <select
    v-model="$i18n.locale"
    :class="`border-0 text-primary py-1 ${customClass}`"
    @change="changeLanguage($i18n.locale)"
  >
    <option v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang">
      {{ $t(`translation.lang.${lang}`) }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    customClass: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      langs: ["en", "ar"],
    };
  },

  methods: {
    changeLanguage(lng) {
      console.log(lng);
      const direction = lng === "ar" ? "rtl" : "ltr";
      const htmlTag = document.querySelector("html");

      // assign multiple attributes at once to an <html> tag
      Object.assign(htmlTag, {
        lang: lng,
        id: lng,
        dir: direction,
      });
    },
  },
};
</script>
