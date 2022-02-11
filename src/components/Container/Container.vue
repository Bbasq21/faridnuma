<template>
  <div>
    <div class="gradient"></div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script>
import Header from '../Header/Header.vue'
import Footer from '../Footer/Footer.vue'

export default {
  name: 'Container',
  components: {
    Header,
    Footer
  }
}
</script>
