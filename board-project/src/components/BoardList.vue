<template>
  <div>
    <table id="list">
      <thead>
        <tr>
          <th>글번호</th>
          <th>글제목</th>
          <th>조회수</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in list" v-bind:key="board.no">
          <td>{{board.no}}</td>
          <td @click="showRead(board)">{{board.title}}</td>
          <td>{{board.view}}</td>
          <td><button @click="deleteBoard(board.no)">삭제</button></td>
        </tr>
      </tbody>
    </table>
    <button style="float: right" @click="showWrite">글쓰기</button>
  </div>
</template>

<script>
// props : 상위 컴포넌트 -> 하위 컴포넌트
// event : 하위 컴포넌트(emit) -> 상위 컴포넌트
export default {
  props: ['list'], // 부모컴포넌트 전달값을 받는 속성
  data () {
    return {

    }
  },
  methods: {
    showWrite() {
      console.log(this.$parent);
      // 부모컴포넌트 데이터 변경
      this.$emit('show-write')  // 부모컴포넌트 이벤트 실행하기 위한 호출
    },
    showRead(board) {
      // 상세화면 보여주기
      this.$emit('show-read', board);
    },
    deleteBoard(no) { // 파라미터 전달
      this.$emit('board-delete', no)
    }
  }
}
</script>
