const express = require('express')
const { addUser, loginUser } = require('../controllers/User.controller')

const router = express.Router()

router.post('/login', loginUser)
router.post('/signup', addUser)

module.exports = router
