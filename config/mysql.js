let mysql = require('mysql')
let config = require('./default.js')

let pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});


function Mysql(){
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * from db', function (error, results, fields) {
            if (error) {
                throw error
            };
            resolve(results)
        });
    })
}

function mySqlUser(){
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * from user', function (error, results, fields) {
            if (error) {
                throw error
            };
            resolve(results)
        });
    })
}

module.exports = {
    Mysql,
    mySqlUser
}