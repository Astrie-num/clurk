if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')


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

// routes

// configure swagger docs

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(require('./swagger-js-docs.json')))

app.use('/users', userRoute)

app.all('*', (req, res) => {
    res.status(404).json({message:"page not found"})
})

// listen for incoming requests

const server = app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})
