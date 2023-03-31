const express = require('express');
const { getAllUsers, getUser, updateUser, deleteUser, addUser } = require('../controllers/User.controller');
const router = express.Router()

router.get('/', getAllUsers)
router.post('/', addUser)
router.get('/:id', getUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router