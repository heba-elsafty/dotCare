<template>
  <header class="header bg-white mb-3 py-3">
    <b-container fluid>
      <div class="d-md-flex align-items-center">
        <b-img :src="require('../../assets/images/logo.png')" width="200" />

        <input-field
          v-model="search"
          placeholder="Search for patinet(Name, Code, Phone number)"
          icon="search"
          class="header__search-input me-auto mb-2 mb-md-0"
        />

        <lang-switch customClass="me-3 mb-2 mb-md-0" />

        <div>
          <b-img :src="require('../../assets/images/user.png')" />
          {{ userName }}
        </div>
      </div>
    </b-container>
  </header>
</template>

<script>
import InputField from "../Shared/Form/InputField";
import LangSwitch from "../LangSwitch/LangSwitch";

export default {
  components: { InputField, LangSwitch },

  data() {
    return {
      search: "",
      userName: "user Name",
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__search-input {
    width: 25%;

    @media screen and (max-width: 767px) {
      width: 100%;
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
      width: 50%;
    }
  }
}
</style>
