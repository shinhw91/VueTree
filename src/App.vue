<template>
  <div>
    <Header></Header>
    <!-- <router-view :key="$route.fullPath"></router-view> -->
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layouts/HeaderComponent.vue'
import Footer from './layouts/FooterComponent.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
