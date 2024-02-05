<!-- UserListView.vue -->
<template>
    <div class="container">
        <h1>전체 회원 조회</h1>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            userList : []
        }
    },
    created() {
        this.getUserList(); // 비동기작업
    },
    methods: {
        async getUserList() {
            // 동기작업(내부)
            let result = await axios.get('http://localhost:5000/users')
                                  .catch(err => console.log(err));
            let list = result.data;
            this.userList = list;
        }
    }
}
</script>