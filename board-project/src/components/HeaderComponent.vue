<template>
  <header>
    <h2>간단 게시판</h2>
    <p>뷰로 작성하는 게시판</p>
  </header>
  <p>{{rootList}}</p>
  <p>{{rootStr}}</p>
</template>

<script>
// inject : 조상 컴포넌트(App.vue) -> 하위 컴포넌트    *읽기만 가능
export default {
  props: ['rootData'],
  inject: ['rootList', 'rootStr']
}
</script>
