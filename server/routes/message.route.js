const express = require('express')
const { addMessage, getMessages } = require('../controllers/message.controller')
const router = express.Router()

router.post('/add', addMessage)
router.post('/', getMessages)

module.exports = router