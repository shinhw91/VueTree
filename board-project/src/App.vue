<template>
  <nav>
    <h1>{{getToday}}</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/board">게시판</router-link> |
    <router-link to="/todo">Todo</router-link> |
    <router-link to="/store">Store</router-link>
  </nav>
  <router-view/>
</template>

<script>
// import mix from '../src/mixin.js'
export default {
  //  mixins: [mix],
  data() {
    return {
      rootData: 'hello' // this.data.rootData
    }
  },
  // provide : 자손 컴포넌트 전달값
  provide() {
    return {
      rootList: 'Hello, Hello, Hello',
      rootStr: 'World'
    }
  },
  // computed : 데이터 옵션 사용(read only), return 필수
  // methods : 일반함수 형태
  computed: {
    // 믹스인
    getToday() {
      return this.$getToday('yyyy/MM/dd');
    }
  },
  mounted() {
    console.log("App.vue mounted");
  }
}
</script>

<style>
@import url("../src/assets/style.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
