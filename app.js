const koa = require('koa')//koa框架
const Router = require('koa-router')//路由
const bodyParser = require('koa-bodyparser')//接收body
const koaBody = require('koa-body');//接收formData数据
const cors = require('koa2-cors');//跨域用

//config工具
const config = require('./config/default')
//连接mysql
const mysql = require('./config/mysql.js')
//实例化对象
const app  = new koa()
const router = new Router()

// 跨域设置 
// app.use(convert(cors));
app.use(cors());

// 先添加koaBody中间件
app.use(
    koaBody({
      // 如果需要上传文件,multipart: true
      //　不设置无法传递文件
      multipart: true,
      formidable: {
        maxFileSize: 1000 * 1024 * 1024
      },
      patchKoa: true
    })
);

//全局注册接收body函数
app.use(bodyParser())

//配置路由
app.use(router.routes()).use(router.allowedMethods())


//引入userApi
const users = require('./router/api/user.js')

//配置路由地址192.168.31.171:5000/api/users
router.use('/api/users',users)


//设置端口号
const prot = process.env.PORT || config.prot

//demo路由
router.get('/',async ctx => {
    console.log(ctx.request.body)
    ctx.body = {code:0,msg:'服务器启动成功'}
})

//上传图片demo
router.post('/demo_img',async ctx => {
    const file = ctx.request.files.file;
    const formData = ctx.request.body;
    console.log(file)
    console.log('--->')
    console.log(formData)

    ctx.body = {code:0,msg:'服务器启动成功'}
})
// router.get('/sql',async ctx => {
//     let data = await mysql.Mysql()
//     ctx.body = {code:0,msg:'服务器启动成功',data}
// })

app.listen(prot,()=>{
    console.log(`serve start in ${prot}`)
})