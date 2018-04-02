const Ticket = require('../proxy/ticket')
const TicketsType = require('../proxy/ticketType')
const creatRandom = require('../utils/randomString')
/**
 * 新建票券
 * @param ctx
 * @returns {*}
 */
exports.createTicket = async(ctx) => {
    let message = {};
    message.result = false;
    // try {
      let coupon = creatRandom.creatRandom(9)
      console.log(coupon)
      let ticketInfo = {
        types: ctx.request.body.types,
        number: ctx.request.body.number,
        coupon:coupon
      }; 
      //在数据库新建票券
      await Ticket.createTicket(ticketInfo);
  
      let Tickets = await Ticket.getTicket();
      await ctx.render('myTicket', {
        Tickets: Tickets
      })
    // }
    // catch (err) {
    //   message.message = '发布出错';
    //   ctx.body = message;
    //   return;
    // }
  }; 
// 获取票券
  exports.getTicket = async(ctx) =>{
    let message = {};
    let Tickets = await Ticket.getTicket();
    await ctx.render('myTicket', {
      Tickets: Tickets
    })
  }
  // 删除票券
  exports.deleteTicket = async(ctx) =>{
    let message = {};
    let conpon = ctx.request.body.conpon;
    let ticket = await Ticket.getOneTicket(conpon);
    if(ticket){
      await Ticket.deleteTicket(conpon);
      let Tickets = await Ticket.getTicket();
      await ctx.render('myTicket', {
        Tickets: Tickets
      })
    }else{
      await ctx.render('receiveCoupons', {
        error: '票券码错误'
      })
    }
   
  }
  // 获取所有票券类型
  exports.getTicketType = async(ctx) =>{
    let TicketsTypes = await TicketsType.getTicketType();
    await ctx.render('generateTicket', {
      TicketsType: TicketsTypes
    })
  }