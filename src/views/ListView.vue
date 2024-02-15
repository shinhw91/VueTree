<!-- ListView.vue -->
<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일자</th>
                    <th>댓글 수</th>
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key="idx" v-for="(list, idx) in boardList" v-on:click="goToInfo(list.no)">
                    <td>{{ list.no }}</td>
                    <td>{{ list.title }}</td>
                    <td>{{ list.writer }}</td>
                    <td>{{ list.created_date }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            boardList : []
        }
    },
    created() {
        this.getboardList();
    },
    methods: {
        async getboardList() {
            // 동기작업(내부)
            let result = await axios.get('/api/board')
                                  .catch(err => console.log(err));
            let list = result.data;
            this.boardList = list;
        },
        goToInfo(no) {
            this.$router.push({path : '/info', query : {"no" : no}});
        }
    }
}
</script>