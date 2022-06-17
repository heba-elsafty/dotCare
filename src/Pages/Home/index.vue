<template>
<div>
  <Header />
  <div class="home bg-white d-md-flex flex-column align-items-center justify-content-center">
    <b-img :src="require('../../assets/images/home.png')" width="300" height="300" />
    <h5 class="my-4">{{welcomeText}}</h5>
  </div>
  <Footer />
</div>
</template>

<script>
import Footer from '../../components/Layout/Footer.vue'
import Header from '../../components/Layout/Header.vue'
import "./HomeStyle.scss"

export default {
  components: { Footer, Header },
  name: 'Home',
  data(){
    return{
      welcomeText: "Welcome"
    }
  }
}
</script>
