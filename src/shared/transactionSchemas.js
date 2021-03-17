const Joi = require('joi');

const addTrasactionSchema = Joi.object().keys({
    sender : Joi.string().required(),
    receiver : Joi.string().required(),
    inventory1 : Joi.string(),
    inventory2 : Joi.string(),
    item : Joi.string().required(),
    amount : Joi.number().required(),
    type : Joi.string().required()
})

module.exports = {
    addTrasactionSchema
}