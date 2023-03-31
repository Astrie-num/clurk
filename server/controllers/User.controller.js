const User = require("../models/User.model");
const validatedSchema = require('../configs/joi')

/**
 * GET /users
 * @returns Array of users
 */

const getAllUsers = async (req, res) => {
    try {

        let allUsers = await User.find().select('-password')

        if (allUsers == "") {

            return res.status(200).json({ status: 'ok', message: "no users found" })
        }

        return res.status(200).json({ status: 'ok', allUsers })
    } catch (err) {
        console.log('error getting all users:', err.message, err.code);
        return res.status(500).json({ status: 'error', message: 'error getting all users. Please try again' })
    }
}

/**
 * GET /users/:id
 * @param {String} id
 * @returns User object
 */


const getUser = async (req, res) => {
    try {

        let singleUser = await User.findById(req.params.id).select('-password')
        if (singleUser) {
            return res.status(200).json({ status: 'ok', user: singleUser })
        }

        return res.status(404).json({ status: 'not found', message: "user not found" })
    } catch (err) {

        console.log('error getting a single user:', err.message, err.code);
        return res.status(500).json({ status: 'error', message: 'error getting a user. Please try again' })
    }
}


/**
 * POST /users
 * @returns User object
 */

const addUser = async (req, res) => {
    try {

        let { email, firstName, lastName, birthDate, password, gender } = req.body

        let { error, value } = validatedSchema.validate({ email, firstName, lastName, birthDate, password })

        if (error) {
            return res.status(400).json({ status: 'error', message: error.details[0].message })
        }


        let checkIfUserExists = await User.findOne({ email })
        if (checkIfUserExists) {
            return res.status(409).json({ message: "user already exists. Try a different email address" })
        }
        let newUser = new User({
            email: value.email,
            firstName: value.firstName,
            lastName: value.lastName,
            birthDate: value.birthDate,
            password: value.password
        })

        await newUser.save()

        res.status(201).json({
            status: 'success', message: 'new user added successfully', user: {
                email: newUser.email,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                birthDate: new Date(newUser.birthDate).toLocaleDateString(),
                gender: newUser.gender
            }
        })
    } catch (err) {

        let errArr = []

        console.log('error creating user:', err.message, err.code);
        res.status(500).json({ status: 'error', message: 'error creating user. Please try again', err: err.message })
    }
}

/**
 * PATCH /users/:id
 * @param {String} id
 * @returns Success
 */

const updateUser = async (req, res) => {
    try {

        let id = req.params.id
        let { ...user } = req.body
        let checkIfUserExists = await User.findById(id)

        if (checkIfUserExists) {
            await User.updateOne({ _id: id }, { ...user })
            return res.status(201).json({ status: 'success', message: 'user updated successfully' })
        }

        return res.status(404).json({ status: 'client error', message: "user does not exist" })

    } catch (err) {
        console.log('error updating user:', err.message, err.code);
        return res.status(500).json({ status: 'server error', message: "error updating user." })
    }
}

/**
 * DELETE /users/:id
 * @param {String} id
 * @returns Success
 */

const deleteUser = async (req, res) => {
    try {

        let id = req.params.id

        let checkIfUserExists = await User.findById(id)

        if (checkIfUserExists) {
            await User.deleteOne({ _id: id })
            return res.status(200).json({ status: 'success', message: 'user deleted successfully' })
        }

        return res.status(404).json({ status: 'client error', message: 'user does not exist' })

    } catch (err) {

        console.log('error deleting user:', err.message, err.code);
        return res.status(500).json({ status: 'error', message: "error deleting user" })
    }
}


module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    addUser
}