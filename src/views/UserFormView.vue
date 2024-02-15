<template>
    <table>
        <tr>
            <th>No.</th>
        </tr>
        <tr>
            <td><input type="number" v-bind:readonly="isUpdated"></td>
        </tr>
        <tr>
            <th>제목</th>
        </tr>
        <tr>
            <td><input type="text"></td>
        </tr>
        <tr>
            <th>작성자</th>
        </tr>
        <tr>
            <td><input type="text"></td>
        </tr>
        <tr>
            <th>내용</th>
        </tr>
        <tr>
            <td><input type="text"></td>
        </tr>
        <tr>
            <th>작성일자</th>
        </tr>
        <tr>
            <td><input type="date"></td>
        </tr>
    </table>
    <div>
        <button class="btn btn-info" @click="saveInfo(searchNo)">저장</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    date() {
        return {
            boardInfo : {
                no : null,
                title : "",
                writer : "",
                content : "",
                created_date : null
            },
            searchNo : null,
            isUpdated : false
        }
    },
    created() {
        this.searchNo = this.$route.query.no;
        if(this.searchNo != null && this.searchNo != undefined) {
            this.getBoardInfo();
        } else {
            // this.boardInfo.created_date = this.getDate('');
        }
    },
    methods : {
        async getBoardInfo() {

            let result = await axios.get('/api/board/' + this.searchNo)
                                    .catch(err => console.log(err));
            let info = result.data;

            let newDate = this.getDate(info.created_date);
            info.created_date = newDate;

            this.userInfo = info;
            this.isUpdated = true;
        },
        getDate(value) {
            if(value == null) return null;

            let date = value == ''? new Date() : new Date(value);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2);
            let day = ('0' + date.getDate()).slice(-2);

            return `${year}-${month}-${day}`;
        },
        saveInfo(no) {
            // 1) 보낼 데이터 산출
            let info = this.getSendInfo(no);

            // 2) ajax
            axios(info)
            .then(result => {
                let count = result.data.affectedRows;
                if(count == 0) {
                    alert('저장되지 않았습니다. 내용을 확인해주세요');
                } else {
                    alert('저장되었습니다.');
                    if(result.data.insertId > 0) {  // 등록일 경우 추가 작업
                        this.userInfo.user_no = result.data.insertId;
                    }
                }
            })
            .catch(err => console.log(err));
        },
        getSendInfo(no) {
            // method, url, data
            let method = '';
            let url = '';
            let data = null;

            if(no == null || no == undefined) {    // 등록(유효성 체크 필요)
                method = 'post';
                url = '/api/board';
                data = {
                    "param" : {
                        title : this.boardInfo.title,
                        writer : this.boardInfo.writer,
                        content : this.boardInfo.content,
                        created_date : this.boardInfo.created_date
                    }
                };
            } else {    // 수정
                method = 'put';
                url = `/api/board/${no}`;
                data = {
                    "param" : {
                        title : this.boardInfo.no,
                        writer : this.boardInfo.writer,
                        content : this.boardInfo.content,
                        created_date : this.boardInfo.created_date
                    }
                };
            }

            return {
                method,
                url,
                data
            }
        }
    }
}

</script>