
const Router = require('koa-router')
const router = new Router()

/*
@router GET
test测试用
@access 公开的
*/
router.get('/test',async ctx =>{
    console.log(ctx.request.query)
    ctx.status = 200;
    ctx.body = {msg:'成功',code:200}
})


/*
@router POST
test测试用
@access 公开的
*/
router.post('/test',async ctx =>{
    console.log(ctx.request.body)
    ctx.status = 200;
    ctx.body = {msg:'成功',code:200,data:'123'}
})

router.post('/img',async ctx =>{
    ctx.status = 200;
    ctx.body = {msg:'成功',code:200,data:'123'}
})

module.exports = router.routes()