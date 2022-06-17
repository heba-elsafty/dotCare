<template>
  <header class="bg-white mb-3 py-3">
    <b-container fluid>
      <div class="d-md-flex align-items-center">
        <b-img :src="require('../../assets/images/logo.png')" width="200" />

        <input-field
          v-model="search"
          placeholder="Search for patinet(Name, Code, Phone number)"
          icon="search"
          class="mx-3 w-25"
        />

        <lang-switch customClass="ms-auto me-3" />

        <div>
          <b-img :src="require('../../assets/images/user.png')" />
          {{ userName }}
        </div>
      </div>
    </b-container>
  </header>
</template>

<script>
import InputField from "../Form/InputField.vue";
import LangSwitch from "../LangSwitch/LangSwitch.vue";
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
