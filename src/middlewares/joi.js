const Joi = require('joi');
const {logger} = require('../helpers/Logger');
const joiValidator = (schema, property) => { 
  return (req, res, next) => { 
  const { error } =schema.validate(req.body) 
  const valid = error == null; 

  if (valid) { 
    next(); 
  } else { 
    const { details } = error; 
    const message = details.map(i => i.message).join(',');

    logger.error("error -> " + message); 
   res.status(422).json({ error: message }) } 
  } 
} 
module.exports = {joiValidator};