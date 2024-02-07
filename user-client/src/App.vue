<template>
  <div>
    <Header></Header>
    <router-view :key="$route.fullPath"></router-view>
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
