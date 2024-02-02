<template>
  <table id="list">
    <tr>
      <td style="width:50px">글제목</td>
      <td>{{board.title}}</td>
    </tr>
    <tr style="height: 200px;">
      <td colspan="2">{{board.content}}</td>
    </tr>
  </table>
  <button sytle="float:right" v-on:click="showList">목록</button>
</template>

<script>
export default {
  props: ['board'], // 부모컴포넌트 전달값을 받는 속성
  data() {
    return {

    }
  },
  methods: {
    showList() {
      this.$emit('show-list');
    }
  }
}
</script>