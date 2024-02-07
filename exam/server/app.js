// app.js

const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.listen(5000, () => {
    console.log('Server Start, http://localhost:5000');
})

// 전체조회
app.get('/board', async(req, res) => {
    let list = await mysql.executeQuery('list');
    res.json(list);
})

// 단건조회
app.get('/board/:no', async(req, res) => {
    let no = req.params.no;
    let info = (await mysql.executeQuery('info', no))[0];
    res.json(info);
})

// 등록
app.post('board', async(req, res) => {
    let data = req.body.param;
    let result = await mysql.executeQuery('insert', data);
    res.json(result);
})

// 수정
app.put('board/:no', async(req, res) => {
    let result = await updateAll(req);
    res.json(result);
})

async function undateAll(request) {
    let data = [selectedInfo(request.body.param)
                , request.params.no];
    let result = await mysql.executeQuery('update', data);
    return result;
}

function selectedInfo(obj) {
    let delDate = ["no"];
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
    return newObj;
};