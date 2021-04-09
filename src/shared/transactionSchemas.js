const Joi = require('joi');

const addTrasactionSchema = Joi.object().keys({
    sender : Joi.string().allow(null,''),
    receiver : Joi.string().allow(null,''),
    inventory1 : Joi.string().allow(null,''),
    inventory2 : Joi.string().required(),
    item : Joi.string().required(),
    amount : Joi.number().required(),
    type : Joi.string().required()
})

module.exports = {
    addTrasactionSchema
}