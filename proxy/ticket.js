
const Ticekt = require('../models/ticket');


exports.createTicket = async(ticketInfo)=> {
  if (!ticketInfo) {
    return {};
  }
  return await Ticekt.create(ticketInfo);
};
  
exports.getTicket = async()=> {
  return await Ticekt.findAll();
};

exports.getOneTicket = async(coupon)=> {
  return await Ticekt.findOne({'where':{'coupon':coupon}})
};

exports.deleteTicket = async(coupon)=> {
  return await Ticekt.destroy({'where':{'coupon':coupon}});
};