<!-- UserInfoView.vue -->

<template>
    <div class="container">
        <h1>회원 정보 조회</h1>
        <div class="row">
            <table class="table">
                <tr>
                    <th>번호</th>
                    <td>{{ userInfo.user_no }}</td>
                </tr>
                <tr>
                    <th>아이디</th>
                    <td>{{ userInfo.user_id }}</td>
                </tr>
                <tr>
                    <th>비밀번호</th>
                    <td>{{ userInfo.user_pwd }}</td>
                </tr>
                <tr>
                    <th>이름</th>
                    <td>{{ userInfo.user_name }}</td>
                </tr>
                <tr>
                    <th>성별</th>
                    <td>{{ userGender }}</td>
                </tr>
                <tr>
                    <th>나이</th>
                    <td>{{ userInfo.user_age }}</td>
                </tr>
                <tr>
                    <th>가입날짜</th>
                    <td>{{ joinDate }}</td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-info col-4" @click="goToUpdate(userInfo.user_id)">수정</button>
            <router-link to="/" class="btn btn-success col-4">목록</router-link>
            <button class="btn btn-warning col-4" @click="deleteInfo(userInfo.user_id)">삭제</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            userInfo : {}
        }
    },
    computed: {
        // (택1)
        userGender() {
            let result = null;
            if(this.userInfo.user_gender == "M") {
                result = "남";
            } else if(this.userInfo.user_gender == "F") {
                result = "여";
            }
            return result;
        },
        // (택2) 미권장
        // userGender() {
        //     let map = {
        //         "M" : "남",
        //         "F" : "여"
        //     };
        //     return map[this.userInfo.user_gender];
        // }
        joinDate() {
            let result = null;
            if(this.userInfo.join_date != null) {
                let date = new Date(this.userInfo.join_date);
                let year = date.getFullYear();
                let month = ('0' + (date.getMonth() + 1)).slice(-2);
                let day = ('0' + date.getDate()).slice(-2);

                result = `${year}년 ${month}월 ${day}일`;
            }
            return result;
        }
    },
    created() {
        let searchNo = this.$route.query.userId;
        this.getUserInfo(searchNo);
    },
    methods : {
        async getUserInfo(userId) {
            // http://localhost:5000/users/user01
            // /api/users/user01
            let result = await axios.get('/api/users/' + userId)    // `/api/users/${userId}`
                                    .catch(err => console.log(err));
            let info = result.data;
            this.userInfo = info;
        },
        goToUpdate(userId) {
            // 수정폼 컴포넌트 호출
            // console.log(userId);
            // this.$router.push({path: '/userUpdate', query: {"userId" : userId}});
            this.$router.push({path: '/userForm', query: {"userId" : userId}});
        },
        deleteInfo(userId) {
            // 서버에 해당 데이터 삭제
            axios
            .delete('/api/users/' + userId)
            .then(result => {
                // 3) 결과처리
                console.log(result);
                let count = result.data.affectedRows; // 추가, 수정, 삭제
                let changeCnt = result.data.changedRows;
                if(count == 0 && changeCnt != 0) {
                    alert(`삭제되지 않았습니다.\n메세지를 확인해주세요.\n${result.data.message}`);
                } else {
                    alert(`정상적으로 삭제되었습니다.`);
                    this.$router.push('/');
                    // this.$router.push({path : '/'});
                }
            })
            .catch(err => console.log(err));
        }
    }
}
</script>