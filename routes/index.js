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
router.get('/', generateTicket.getTicketType) 

// 领取优惠券页面
router.get('/receiveCoupons', async (ctx, next) => {
  await ctx.render('receiveCoupons', {
    error: ''
  })
})

// 我的优惠券页面
router.get('/myTicket',generateTicket.getTicket)

// 提交生成优惠券
router.post('/generateTicket', generateTicket.createTicket)

// 提交领取优惠券
router.post('/receiveCoupons', generateTicket.deleteTicket)


module.exports = router
