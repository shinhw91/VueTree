<!-- UserInsertView.vue -->

<template>
    <div class="container">
        <h1>회원 정보 등록</h1>
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">번호</th>
                    <td class="text-center"><input class="form-control" type="number" v-model="userInfo.user_no" readonly></td>
                </tr>
                <tr>
                    <th class="text-right table-primary">아이디</th>
                    <td class="text-center"><input class="form-control" type="text" v-model="userInfo.user_id"></td>
                </tr>
                <tr>
                    <th class="text-right table-primary">비밀번호</th>
                    <td class="text-center"><input class="form-control" type="password" v-model="userInfo.user_pwd"></td>
                </tr>
                <tr>
                    <th class="text-right table-primary">이름</th>
                    <td class="text-center"><input class="form-control" type="text" v-model="userInfo.user_name"></td>
                </tr>
                <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center">
                        <!-- id, name 사용할 필요 없음(데이터바인딩) -->
                        <input type="radio" value="M" v-model="userInfo.user_gender"> 남
                        <input type="radio" value="F" v-model="userInfo.user_gender"> 여
                        <!-- <input type="checkbox" true-value="예" false-value="아니오" v-model="chkVal"> -->
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">나이</th>
                    <td class="text-center"><input class="form-control" type="number" v-model="userInfo.user_age" min="0" max="150"></td>
                </tr>
                <tr>
                    <th class="text-right table-primary">가입날짜</th>
                    <!-- yyyy-MM-dd -->
                    <td class="text-center"><input class="form-control" type="date" v-model="userInfo.join_date"></td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-info" @click="insertInfo()">저장</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            // chkVal : "아니오",
            userInfo : {
                user_no : null,
                user_id : "",
                user_pwd : "",
                user_name : "",
                user_gender : null,
                user_age : null,
                join_date : null
            }
        }
    },
    created() {
        this.userInfo.join_date = this.getToday();
    },
    methods: {
        getToday() {
            let date = new Date();
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2);
            let day = ('0' + date.getDate()).slice(-2);
            let result = `${year}-${month}-${day}`;
            return result;
        },
        insertInfo() {
            // 1) 유효성 체크(개별 체크 필요)
            if(!this.validation()) return;

            // 2) ajax
            // 2-1) 실제 보낼 데이터 선별
            let data = this.getSendData();

            // 2-2) axios 이용해서 ajax
            // *data : 객체 또는 배열 -> JSON
            axios
            .post('/api/users', data)
            .then(result => {
                // 3) 결과처리
                console.log(result);
                let user_no = result.data.insertId; // 추가(auto_increment에서만 존재)    *affectedRows 사용 권장
                if(user_no == 0) {
                    alert(`등록되지 않았습니다.\n메세지를 확인해주세요.\n${result.data.message}`);
                } else {
                    alert(`정상적으로 등록되었습니다.`);
                    this.userInfo.user_no = user_no;
                }
            })
            .catch(err => console.log(err));
        },
        validation() {
            if(this.userInfo.user_id == "") {
                alert('아이디가 입력되지 않았습니다.');
                return false;
            }
            if(this.userInfo.user_pwd == "") {
                alert('비밀번호가 입력되지 않았습니다.');
                return false;
            }
            if(this.userInfo.user_name == "") {
                alert('이름이 입력되지 않았습니다.');
                return false;
            }

            return true;
        },
        getSendData() {
            let obj = this.userInfo;
            let delDate = ["user_no"];
            let newObj = {};

            let isTargeted = null;
            for(let field in obj) {
                isTargeted = false;
                for(let target of delDate) {
                    if(field == target) {
                        isTargeted = true;
                        break;
                    }
                }
                if(!isTargeted) {
                    newObj[field] = obj[field];
                }
            }

            let sendData = {
                "param" : newObj
            }
            return sendData;
        }
    }
}
</script>