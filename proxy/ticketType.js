
const Ticekt = require('../models/ticketType');


  
exports.getTicketType = async()=> {

  return await Ticekt.findAll();
};
