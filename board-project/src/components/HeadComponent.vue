<template>
  <div id="myDIV" class="header">
    <h2 style="margin:5px">My To Do List</h2>
    <input type="text" id="myInput" placeholder="Title..." v-model="title">
    <span class="addBtn" v-on:click="todoSave">Add</span>
  </div>
</template>

<script>
export default {
  methods: {
    todoSave() {
      this.$emit('save-todo', this.title);
    }
  }
}
</script>
