
const Ticekt = require('../models/ticket');


exports.createTicket = async(ticketInfo)=> {
  if (!ticketInfo) {
    return {};
  }
  return await Ticekt.create(ticketInfo);
};
  