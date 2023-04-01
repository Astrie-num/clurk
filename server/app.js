if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')
const functions = require('firebase-functions')

// declare constants variables

const app = express()
const PORT = process.env.PORT || 8080

// call mongodb connection function

require('./configs/db.config')

// middlewares

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
// require external routes
const userRoute = require('./routes/User.route')
const indexRoute = require('./routes/Index.route')
const { verifyToken } = require('./middlewares/jwt')

// routes

// configure swagger docs

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(require('./swagger-js-docs.json')))

app.use('/api/v1/users', userRoute)
app.use('/api/v1/auth', indexRoute)

app.get('/protected', verifyToken, (req, res) => {
    res.json({user:req.user})
})

app.all('*', (req, res) => {
    res.status(404).json({message:"page not found"})
})

// listen for incoming requests

const server = app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})


exports.api = functions.https.onRequest(app)