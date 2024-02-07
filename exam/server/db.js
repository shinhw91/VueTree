// db.js

const mysql = require('mysql');
const sql = require('./db/sql.js');

const connectionPool = mysql.createPool({
    host : '127.0.0.1',
    port : '3306',
    user : 'dev01',
    password : '1234',
    database : 'dev',
    connectionLimit : 10
});

const executeQuery = async (alias, values) => {
    return new Promise((resolve, reject) => {
        let executeSql = sql[alias];
        connectionPool.query(executeSql, values, (err, results) => {
            if(err) {
                console.log(err);
                reject({err});
            } else {
                console.log(results);
                resolve(results);
            }
        })
    })
}

module.exports = {
    executeQuery
}