<template>
  <ul id="myUL">
    <li>Hit the gym<span class="close">X</span></li>
    <li class="checked">Pay bills<span class="close">X</span></li>
    <li>Meet George<span class="close">X</span></li>
    <li>Buy eggs<span class="close">X</span></li>
    <li>Read a book<span class="close">X</span></li>
    <li>Organize office<span class="close">X</span></li>
  </ul>
  <ul v-for="todo in list" v-bind:key="todo.no">
    <li v-on:click="checked(todo.no)">{{todo.todo}}<span class="close" v-on:click="deleteTodo(todo.no)">X</span></li>
  </ul>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    deleteTodo(no) {
      this.$emit('delete-todo', no)
    },
    checked(no) {
      this.$emit('checked-todo', no)
    }
  }
}
</script>
