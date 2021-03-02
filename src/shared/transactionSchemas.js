const joi = require('joi');
const Joi = require('joi');

const addTrasactionSchema = joi.object().keys({
    sender : Joi.string().required(),
    receiver : Joi.string().required(),
    inventory1 : Joi.string().required(),
    inventory2 : Joi.string().required(),
    item : Joi.string().required(),
    amount : Joi.number().required()
})

module.exports = {
    addTrasactionSchema
}