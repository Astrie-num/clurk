const joi = require('joi')

const validatedSchema = joi.object({
    email: joi.string().email().min(5).max(30).required(),
    firstName:joi.string().min(3).max(30).required(),
    lastName:joi.string().min(3).max(30).required(),
    birthDate: joi.date().max('now').min('2004-01-01').iso().required(),
    password:joi.string().min(6).max(65).required()
})

module.exports = validatedSchema