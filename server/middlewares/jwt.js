const { log } = require('console')
const jwt = require('jsonwebtoken')
const User = require('../models/User.model')

const createToken = (id, email, birthdate, firstname, lastname) => {
    return jwt.sign({ email, id, birthdate, firstname, lastname }, process.env.ACCESS_SECRET_TOKEN)
}

const verifyToken = async (req, res, next) => {
    try {

        let { clurk_access_token } = req.cookies
        if (!clurk_access_token) {
            return res.status(401).json({ status: "401 Unauthorized", message: "access token is required" })
        }

        let decodedToken = jwt.verify(clurk_access_token, process.env.ACCESS_SECRET_TOKEN)
        let currentUser = await User.findById(decodedToken.id).select('-password')

        if (!currentUser || currentUser == "" || currentUser == null) {
            return res.status(403).json({ status: "403 forbidden", message: "token was messed with. request a new one" })
        }

        req.user = currentUser
        next()
    } catch (err) {
        log('error verifying token: ' + err.message)
    }
}

module.exports = {
    createToken,
    verifyToken
}