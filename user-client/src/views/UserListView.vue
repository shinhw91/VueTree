<!-- UserListView.vue -->
<template>
    <div class="container">
        <h1>전체 회원 조회</h1>
        <table class="table">
            <caption>Total : {{ count }}</caption>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>이름</th>
                    <th>성별</th>
                    <th>가입날짜</th>
                </tr>
            </thead>
            <tbody>
                <!-- v-for, v-if 함께 사용할 경우 -->
                <!-- <template :key="idx" v-for="(list, idx) in userList">
                    <tr v-if=""></tr>
                </template> -->
                <tr v-bind:key="idx" v-for="(list, idx) in userList" v-on:click="goToUserInfo(list.user_id)">
                    <td>{{ list.user_no }}</td>
                    <td>{{ list.user_id }}</td>
                    <td>{{ list.user_name }}</td>
                    <td v-text="list.user_gender"></td>
                    <td v-text="list.join_date"></td>
                </tr>
            </tbody>
        </table>
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
    // 새로운 속성(값) 생성
    computed: {
        count() {
            return this.userList.length;
        }
    },
    // 기존 속성 사용, 프로세스(return 없음)
    watch: {
        userList(newQuestion, oldQuestion) {
            console.log('이전 : ', oldQuestion);
            // alert('데이터가 변경되었습니다.');
            console.log('이후 : ', newQuestion);
        }
    },
    created() {
        this.getUserList(); // 비동기작업
    },
    methods: {
        async getUserList() {
            // 동기작업(내부)
            let result = await axios.get('/api/users')
                                  .catch(err => console.log(err));
            let list = result.data;
            this.userList = list;
        },
        goToUserInfo(userId) {
            this.$router.push({path: '/userInfo', query : {"userId" : userId}});
            // this.$router.push({name: 'userInfo', query : {"userId" : userId}});
        }
    }
}
</script>