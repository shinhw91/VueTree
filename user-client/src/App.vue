<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './layouts/HeaderComponent.vue'

export default {
  components: {
    Header
  }
}
</script>
