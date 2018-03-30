const router = require('koa-router')()

const generateTicket = require('../controller/generateTicket');
// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
// 生成券码页面
router.get('/', async (ctx, next) => {
  await ctx.render('generateTicket', {
    title: 'Hello Koa 2!'
  })
})
// 领取优惠券页面
router.get('/receiveCoupons', async (ctx, next) => {
  await ctx.render('receiveCoupons', {
    title: 'Hello Koa 2!'
  })
})
// 我的优惠券页面
router.get('/myTicket', async (ctx, next) => {
  await ctx.render('myTicket', {
    title: 'Hello Koa 2!'
  })
})  
router.post('/generateTicket', generateTicket.createTicket)
module.exports = router
