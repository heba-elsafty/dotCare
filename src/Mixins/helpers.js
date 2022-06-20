export default {
  methods: {
    // TRIM TEXT
    trimString(str, length) {
      if (str.length <= length) {
        return str
      } else {
        return `${str.substring(0, length)}...`
      }
    },
  }
}