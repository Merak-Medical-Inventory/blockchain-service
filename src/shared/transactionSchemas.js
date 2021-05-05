const Joi = require('joi');

const addTrasactionSchema = Joi.object().keys({
    sender : Joi.string().allow(null,''),
    receiver : Joi.string().allow(null,''),
    inventory1 : Joi.string().allow(null,''),
    inventory2 : Joi.string().allow(null,''),
    item : Joi.string().required(),
    amount : Joi.number().required(),
    type : Joi.string(),
    date : Joi.string().required()
})

const addDeviceTrasactionSchema = Joi.object().keys({
    sender : Joi.string().allow(null,''),
    receiver : Joi.string().allow(null,''),
    inventory1 : Joi.string().allow(null,''),
    inventory2 : Joi.string().allow(null,''),
    device : Joi.string().required(),
    type : Joi.string(),
    date : Joi.string().required()
})


module.exports = {
    addTrasactionSchema,
    addDeviceTrasactionSchema
}