// default.js
// 设置配置文件
const config = {
    // 启动端口
    prot: 5000,
    // 数据库配置
    database: {
        DATABASE: 'mysql',
        USERNAME: 'root',
        PASSWORD: 'root',
        PORT: '3306',
        HOST: 'localhost'
    }
}


module.exports = config