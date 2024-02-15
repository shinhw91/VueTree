<!-- InfoView.vue -->

<template>
    <table border="1">
        <tr>
            <th>번호</th>
            <td>{{ boardInfo.no }}</td>
            <th>작성일</th>
            <td>{{ boardInfo.created_date }}</td>
            <th>이름</th>
            <td>{{ boardInfo.writer }}</td>
        </tr>
        <tr>
            <th>제목</th>
            <td>{{ boardInfo.title }}</td>
        </tr>
        <tr>
            <td>{{ boardInfo.content }}</td>
        </tr>
    </table>
    <div>
        <button>수정</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            boardInfo : {}
        }
    },
    created() {
        let searchNo = this.$route.query.no;
        this.getBoardInfo(searchNo);
    },
    methods : {
        async getBoardInfo(no) {
            let result = await axios.get('/api/board/' + no)
                                    .catch(err => console.log(err));
            let info = result.data;
            this.boardInfo = info;
        },
        goToInfo(no) {
            this.$router.push({path : '/userForm', query : {"no" : no}});
        }
    }
}

</script>