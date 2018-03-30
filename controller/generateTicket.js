const Ticket = require('../proxy/ticket')
/**
 * 新建主题
 * @param ctx
 * @returns {*}
 */
exports.createTicket = async(ctx) => {
    let message = {};
    message.result = false;
    // try {
      //提取基本信息
      // console.log(ctx.body+'++++++++++++++++++++++++')
      let ticketInfo = {
        types: ctx.request.body.types,
        number: ctx.request.body.number,
      }; 
      console.log(ticketInfo.types+'++++++++++++++++++++++++')
      console.log(ticketInfo.number+'++++++++++++++++++++++++')
      //在数据库新建主题
      await Ticket.createTicket(ticketInfo);
  
      //给用户增加积分
    //   await User.addIntegration(ctx.session.user.id, 5);
  
      message.result = true;
      ctx.body = message;
      // await ctx.render('generateTicket', {
      //   title: 'Hello Koa 2!'
      // })
      return;
    // }
    // catch (err) {
    //   message.message = '发布出错';
    //   ctx.body = message;
    //   return;
    // }
  }; 